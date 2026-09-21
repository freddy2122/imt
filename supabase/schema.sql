-- IMT Online (clone) — schema para o painel admin + acompanhamento de dossiers
-- Executar no SQL Editor do teu projeto Supabase.

create extension if not exists pgcrypto;

create table if not exists public.dossiers (
  id uuid primary key default gen_random_uuid(),
  codigo text not null unique,
  nome text not null,
  apelido text,
  nif text not null,
  email text not null,
  telefone text,
  data_nascimento date,
  local_nascimento text,
  categoria_carta text not null,
  data_emissao date,
  data_validade date,
  numero_carta text,
  foto_url text,
  estado text not null default 'inscrito'
    check (estado in (
      'inscrito',
      'exame_teorico_marcado',
      'exame_teorico_aprovado',
      'exame_pratico_marcado',
      'exame_pratico_aprovado',
      'carta_emitida',
      'carta_enviada'
    )),
  pontos integer not null default 0 check (pontos between 0 and 8),
  notas text,
  criado_em timestamptz not null default now(),
  atualizado_em timestamptz not null default now()
);

-- Gera um código de acompanhamento único, ex: IMT-7F3A9C2B
create or replace function public.gerar_codigo_dossier()
returns text
language plpgsql
as $$
declare
  novo_codigo text;
begin
  loop
    novo_codigo := 'IMT-' || upper(substr(encode(gen_random_bytes(6), 'hex'), 1, 8));
    exit when not exists (select 1 from public.dossiers where codigo = novo_codigo);
  end loop;
  return novo_codigo;
end;
$$;

alter table public.dossiers
  alter column codigo set default public.gerar_codigo_dossier();

-- Mantém atualizado_em em dia
create or replace function public.tocar_atualizado_em()
returns trigger
language plpgsql
as $$
begin
  new.atualizado_em := now();
  return new;
end;
$$;

drop trigger if exists trg_dossiers_atualizado_em on public.dossiers;
create trigger trg_dossiers_atualizado_em
  before update on public.dossiers
  for each row
  execute function public.tocar_atualizado_em();

-- Row Level Security: só admins autenticados (Supabase Auth) podem
-- ler/escrever a tabela diretamente. O cidadão consulta o seu dossier
-- apenas através da função consultar_dossier() abaixo.
alter table public.dossiers enable row level security;

drop policy if exists "admins gerem dossiers" on public.dossiers;
create policy "admins gerem dossiers"
  on public.dossiers
  for all
  to authenticated
  using (true)
  with check (true);

-- Consulta pública e limitada: precisa do código + NIF (verificação leve),
-- devolve só os campos relevantes para o cidadão — nunca a tabela inteira.
create or replace function public.consultar_dossier(p_codigo text, p_nif text)
returns table (
  codigo text,
  nome text,
  apelido text,
  categoria_carta text,
  foto_url text,
  data_nascimento date,
  local_nascimento text,
  data_emissao date,
  data_validade date,
  numero_carta text,
  estado text,
  pontos integer,
  criado_em timestamptz,
  atualizado_em timestamptz
)
language sql
security definer
set search_path = public
as $$
  select
    d.codigo, d.nome, d.apelido, d.categoria_carta, d.foto_url,
    d.data_nascimento, d.local_nascimento, d.data_emissao, d.data_validade, d.numero_carta,
    d.estado, d.pontos, d.criado_em, d.atualizado_em
  from public.dossiers d
  where d.codigo = upper(trim(p_codigo))
    and d.nif = trim(p_nif);
$$;

grant execute on function public.consultar_dossier(text, text) to anon, authenticated;

-- Bucket de armazenamento para as fotos dos titulares (formato tipo passe),
-- com leitura pública (para a página de acompanhamento) e escrita restrita aos admins.
insert into storage.buckets (id, name, public)
values ('fotos', 'fotos', true)
on conflict (id) do nothing;

drop policy if exists "admins gerem fotos" on storage.objects;
create policy "admins gerem fotos"
  on storage.objects
  for all
  to authenticated
  using (bucket_id = 'fotos')
  with check (bucket_id = 'fotos');

drop policy if exists "leitura publica de fotos" on storage.objects;
create policy "leitura publica de fotos"
  on storage.objects
  for select
  to public
  using (bucket_id = 'fotos');
