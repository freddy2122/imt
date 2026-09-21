-- Executar no SQL Editor do Supabase (projeto já ligado ao schema.sql inicial).

-- "Escola de Condução" não consta no cartão da carta de condução — removida.
alter table public.dossiers drop column if exists escola_conducao;

-- Foto do titular (formato tipo passe, como no cartão real).
alter table public.dossiers add column if not exists foto_url text;

-- Bucket de armazenamento para as fotos, com leitura pública (para a página de
-- acompanhamento) e escrita restrita aos admins autenticados.
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

-- consultar_dossier devolve agora também a foto.
create or replace function public.consultar_dossier(p_codigo text, p_nif text)
returns table (
  codigo text,
  nome text,
  categoria_carta text,
  foto_url text,
  estado text,
  pontos integer,
  criado_em timestamptz,
  atualizado_em timestamptz
)
language sql
security definer
set search_path = public
as $$
  select d.codigo, d.nome, d.categoria_carta, d.foto_url, d.estado, d.pontos, d.criado_em, d.atualizado_em
  from public.dossiers d
  where d.codigo = upper(trim(p_codigo))
    and d.nif = trim(p_nif);
$$;

grant execute on function public.consultar_dossier(text, text) to anon, authenticated;
