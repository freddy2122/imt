// Labels en français pour le panneau admin (outil interne).
// La page de suivi citoyen (AcompanhamentoPage) garde ses propres libellés en portugais.
export const ESTADOS_ADMIN = [
  { value: "inscrito", label: "Inscrit" },
  { value: "exame_teorico_marcado", label: "Examen théorique programmé" },
  { value: "exame_teorico_aprovado", label: "Examen théorique réussi" },
  { value: "exame_pratico_marcado", label: "Examen pratique programmé" },
  { value: "exame_pratico_aprovado", label: "Examen pratique réussi" },
  { value: "carta_emitida", label: "Permis émis" },
  { value: "carta_enviada", label: "Permis envoyé" },
];

export function estadoLabelFr(value) {
  return ESTADOS_ADMIN.find((s) => s.value === value)?.label || value;
}

// Barème sur 8 : les points progressent automatiquement avec l'état du dossier,
// répartis sur les 7 étapes (0 à l'inscription, 8 quand le permis est envoyé).
export const PONTOS_MAX = 8;

export function pontosParaEstado(value) {
  const index = ESTADOS_ADMIN.findIndex((s) => s.value === value);
  if (index === -1) return 0;
  return Math.round((index * PONTOS_MAX) / (ESTADOS_ADMIN.length - 1));
}
