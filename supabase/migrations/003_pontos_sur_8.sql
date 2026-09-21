-- Executar no SQL Editor do Supabase.
-- Pontos passam a ser calculados automaticamente com base no estado do
-- dossier (barème sur 8), em vez do sistema real português (12 pontos).

alter table public.dossiers alter column pontos set default 0;

alter table public.dossiers drop constraint if exists dossiers_pontos_check;
alter table public.dossiers add constraint dossiers_pontos_check check (pontos between 0 and 8);

-- Dossiers já existentes: recalcula os pontos a partir do estado atual.
update public.dossiers set pontos = case estado
  when 'inscrito' then 0
  when 'exame_teorico_marcado' then 1
  when 'exame_teorico_aprovado' then 3
  when 'exame_pratico_marcado' then 4
  when 'exame_pratico_aprovado' then 5
  when 'carta_emitida' then 7
  when 'carta_enviada' then 8
  else pontos
end;
