import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../../lib/supabaseClient";
import { ESTADOS_ADMIN, estadoLabelFr } from "../../lib/estados";
import "./Admin.css";

export default function AdminOverviewPage() {
  const [dossiers, setDossiers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    setLoading(true);
    const { data, error } = await supabase.from("dossiers").select("*").order("criado_em", { ascending: false });
    if (!error) setDossiers(data || []);
    setLoading(false);
  }

  const total = dossiers.length;
  const emitidas = dossiers.filter((d) => d.estado === "carta_emitida" || d.estado === "carta_enviada").length;
  const emCurso = total - emitidas;
  const recentes = dossiers.slice(0, 5);

  const parEstado = ESTADOS_ADMIN.map((s) => ({
    ...s,
    count: dossiers.filter((d) => d.estado === s.value).length,
  }));

  return (
    <div className="admin-page">
      <div className="admin-page__header">
        <h1>Tableau de bord</h1>
        <Link to="/admin/dossiers" className="admin-page__cta">
          + Nouveau dossier
        </Link>
      </div>

      {loading ? (
        <p>Chargement…</p>
      ) : (
        <>
          <div className="admin-stats">
            <div className="admin-stat-card">
              <span className="admin-stat-card__value">{total}</span>
              <span className="admin-stat-card__label">Dossiers au total</span>
            </div>
            <div className="admin-stat-card">
              <span className="admin-stat-card__value">{emCurso}</span>
              <span className="admin-stat-card__label">En cours</span>
            </div>
            <div className="admin-stat-card admin-stat-card--accent">
              <span className="admin-stat-card__value">{emitidas}</span>
              <span className="admin-stat-card__label">Permis émis / envoyés</span>
            </div>
          </div>

          <div className="admin-panel">
            <h2>Répartition par statut</h2>
            <ul className="admin-breakdown">
              {parEstado.map((s) => (
                <li key={s.value}>
                  <span>{s.label}</span>
                  <div className="admin-breakdown__bar">
                    <div
                      className="admin-breakdown__bar-fill"
                      style={{ width: total ? `${(s.count / total) * 100}%` : "0%" }}
                    />
                  </div>
                  <span className="admin-breakdown__count">{s.count}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="admin-panel">
            <h2>Dossiers récents</h2>
            {recentes.length === 0 ? (
              <p className="admin-empty">Aucun dossier créé pour l'instant.</p>
            ) : (
              <div className="admin__table-wrap">
                <table className="admin__table">
                  <thead>
                    <tr>
                      <th>Code</th>
                      <th>Nom</th>
                      <th>Statut</th>
                      <th>Créé le</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentes.map((d) => (
                      <tr key={d.id}>
                        <td>{d.codigo}</td>
                        <td>{d.nome}</td>
                        <td>{estadoLabelFr(d.estado)}</td>
                        <td>{new Date(d.criado_em).toLocaleDateString("fr-FR")}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
