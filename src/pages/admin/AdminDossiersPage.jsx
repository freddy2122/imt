import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../../lib/supabaseClient";
import { ESTADOS_ADMIN, PONTOS_MAX, pontosParaEstado } from "../../lib/estados";
import "./Admin.css";

const EMPTY_FORM = {
  nome: "",
  apelido: "",
  nif: "",
  email: "",
  telefone: "",
  data_nascimento: "",
  local_nascimento: "",
  categoria_carta: "B",
  data_emissao: "",
  data_validade: "",
  numero_carta: "",
  notas: "",
};

export default function AdminDossiersPage() {
  const [dossiers, setDossiers] = useState([]);
  const [listLoading, setListLoading] = useState(true);
  const [form, setForm] = useState(EMPTY_FORM);
  const [foto, setFoto] = useState(null);
  const [fotoPreview, setFotoPreview] = useState(null);
  const [creating, setCreating] = useState(false);
  const [createResult, setCreateResult] = useState(null);
  const [createError, setCreateError] = useState("");
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    loadDossiers();
  }, []);

  useEffect(() => {
    return () => {
      if (fotoPreview) URL.revokeObjectURL(fotoPreview);
    };
  }, [fotoPreview]);

  async function loadDossiers() {
    setListLoading(true);
    const { data, error } = await supabase.from("dossiers").select("*").order("criado_em", { ascending: false });
    if (!error) setDossiers(data || []);
    setListLoading(false);
  }

  function handleFotoChange(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    setFoto(file);
    setFotoPreview(URL.createObjectURL(file));
  }

  async function handleCreate(e) {
    e.preventDefault();
    setCreating(true);
    setCreateError("");
    setCreateResult(null);

    let foto_url = null;
    if (foto) {
      const path = `${Date.now()}-${foto.name.replace(/[^a-zA-Z0-9.]/g, "_")}`;
      const { error: uploadError } = await supabase.storage.from("fotos").upload(path, foto);
      if (uploadError) {
        setCreateError("Falha ao enviar a foto: " + uploadError.message);
        setCreating(false);
        return;
      }
      foto_url = supabase.storage.from("fotos").getPublicUrl(path).data.publicUrl;
    }

    const { data, error } = await supabase
      .from("dossiers")
      .insert([
        {
          ...form,
          data_nascimento: form.data_nascimento || null,
          data_emissao: form.data_emissao || null,
          data_validade: form.data_validade || null,
          foto_url,
        },
      ])
      .select()
      .single();

    if (error) {
      setCreateError(error.message);
      setCreating(false);
      return;
    }

    let emailStatus = "ok";
    const { error: fnError } = await supabase.functions.invoke("send-tracking-email", {
      body: { codigo: data.codigo, nome: data.nome, email: data.email },
    });
    if (fnError) emailStatus = "falhou";

    setCreateResult({ codigo: data.codigo, emailStatus });
    setForm(EMPTY_FORM);
    setFoto(null);
    setFotoPreview(null);
    setCreating(false);
    loadDossiers();
  }

  async function updateDossier(id, patch) {
    await supabase.from("dossiers").update(patch).eq("id", id);
    loadDossiers();
  }

  function handleEstadoChange(dossier, novoEstado) {
    updateDossier(dossier.id, { estado: novoEstado, pontos: pontosParaEstado(novoEstado) });
  }

  return (
    <div className="admin-page">
      <div className="admin-page__header">
        <h1>Dossiers</h1>
        <button className="admin-page__cta" onClick={() => setShowForm((v) => !v)}>
          {showForm ? "Fermer" : "+ Nouveau dossier"}
        </button>
      </div>

      {showForm && (
        <form className="admin__create" onSubmit={handleCreate}>
          <h2>Créer un nouveau dossier</h2>
          <div className="admin__create-layout">
            <div className="admin__photo-field">
              <label className="admin__photo-box">
                {fotoPreview ? <img src={fotoPreview} alt="Aperçu" /> : <span>Photo</span>}
                <input type="file" accept="image/*" onChange={handleFotoChange} hidden />
              </label>
              <span className="admin__photo-hint">Format type passe (35×45mm)</span>
            </div>

            <div className="admin__grid">
              <label>
                Nom (propre) *
                <input required placeholder="Ex: Ana Paula" value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })} />
              </label>
              <label>
                Apelido (nom de famille)
                <input placeholder="Ex: Silva Costa" value={form.apelido} onChange={(e) => setForm({ ...form, apelido: e.target.value })} />
              </label>
              <label>
                NIF *
                <input required placeholder="Ex: 123456789" value={form.nif} onChange={(e) => setForm({ ...form, nif: e.target.value })} />
              </label>
              <label>
                Email *
                <input
                  required
                  type="email"
                  placeholder="Ex: ana.costa@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </label>
              <label>
                Téléphone
                <input placeholder="Ex: 912 345 678" value={form.telefone} onChange={(e) => setForm({ ...form, telefone: e.target.value })} />
              </label>
              <label>
                Date de naissance
                <input type="date" value={form.data_nascimento} onChange={(e) => setForm({ ...form, data_nascimento: e.target.value })} />
              </label>
              <label>
                Lieu de naissance
                <input placeholder="Ex: Gastanheira De Pêra" value={form.local_nascimento} onChange={(e) => setForm({ ...form, local_nascimento: e.target.value })} />
              </label>
              <label>
                Catégorie du permis *
                <input
                  required
                  placeholder="Ex: B"
                  value={form.categoria_carta}
                  onChange={(e) => setForm({ ...form, categoria_carta: e.target.value })}
                />
              </label>
              <label>
                Date d'émission
                <input type="date" value={form.data_emissao} onChange={(e) => setForm({ ...form, data_emissao: e.target.value })} />
              </label>
              <label>
                Date d'expiration
                <input type="date" value={form.data_validade} onChange={(e) => setForm({ ...form, data_validade: e.target.value })} />
              </label>
              <label>
                Numéro de la carte
                <input placeholder="Ex: L-1234567" value={form.numero_carta} onChange={(e) => setForm({ ...form, numero_carta: e.target.value })} />
              </label>
              <label className="admin__grid-full">
                Notes
                <textarea rows={2} placeholder="Ex: Candidato transferido de outra escola" value={form.notas} onChange={(e) => setForm({ ...form, notas: e.target.value })} />
              </label>
            </div>
          </div>

          <button type="submit" disabled={creating}>
            {creating ? "Création…" : "Créer le dossier et envoyer l'email"}
          </button>

          {createError && <p className="admin__error">{createError}</p>}
          {createResult && (
            <p className={createResult.emailStatus === "ok" ? "admin__success" : "admin__warning"}>
              Dossier créé — code <strong>{createResult.codigo}</strong>.{" "}
              {createResult.emailStatus === "ok" ? "Email envoyé." : "L'envoi de l'email a échoué (vérifie l'Edge Function / RESEND_API_KEY)."}
            </p>
          )}
        </form>
      )}

      <div className="admin-panel">
        <h2>Dossiers existants</h2>
        {listLoading ? (
          <p>Chargement…</p>
        ) : (
          <div className="admin__table-wrap">
            <table className="admin__table">
              <thead>
                <tr>
                  <th>Photo</th>
                  <th>Code</th>
                  <th>Nom</th>
                  <th>Catégorie</th>
                  <th>Statut</th>
                  <th>Points</th>
                  <th>Créé le</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {dossiers.map((d) => (
                  <tr key={d.id}>
                    <td>
                      {d.foto_url ? (
                        <img src={d.foto_url} alt={d.nome} className="admin__table-photo" />
                      ) : (
                        <span className="admin__table-photo admin__table-photo--empty" />
                      )}
                    </td>
                    <td>{d.codigo}</td>
                    <td>
                      <Link to={`/admin/dossiers/${d.id}`} className="admin__table-link">
                        {d.nome}
                      </Link>
                    </td>
                    <td>{d.categoria_carta}</td>
                    <td>
                      <select value={d.estado} onChange={(e) => handleEstadoChange(d, e.target.value)}>
                        {ESTADOS_ADMIN.map((s) => (
                          <option key={s.value} value={s.value}>
                            {s.label}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td>
                      <span className="admin__pontos-badge" title="Calculé automatiquement selon le statut">
                        {d.pontos} / {PONTOS_MAX}
                      </span>
                    </td>
                    <td>{new Date(d.criado_em).toLocaleDateString("fr-FR")}</td>
                    <td>
                      <Link to={`/admin/dossiers/${d.id}`} className="admin__table-action">
                        Voir / Modifier
                      </Link>
                    </td>
                  </tr>
                ))}
                {dossiers.length === 0 && (
                  <tr>
                    <td colSpan={8} className="admin-empty">
                      Aucun dossier créé pour l'instant.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
