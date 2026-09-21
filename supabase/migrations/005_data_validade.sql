-- Executar no SQL Editor do Supabase.
-- Adiciona a data de validade (expiração) da carta, para mostrar a par da data de emissão.

alter table public.dossiers add column if not exists data_validade date;

drop function if exists public.consultar_dossier(text, text);

create function public.consultar_dossier(p_codigo text, p_nif text)
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
