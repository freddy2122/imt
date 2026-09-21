import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { supabase } from "../../lib/supabaseClient";
import { ESTADOS_ADMIN, PONTOS_MAX, pontosParaEstado } from "../../lib/estados";
import "./Admin.css";

export default function AdminDossierDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [dossier, setDossier] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  const [form, setForm] = useState(null);
  const [foto, setFoto] = useState(null);
  const [fotoPreview, setFotoPreview] = useState(null);

  const [saving, setSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState("");
  const [saveError, setSaveError] = useState("");

  useEffect(() => {
    load();
  }, [id]);

  useEffect(() => {
    return () => {
      if (fotoPreview) URL.revokeObjectURL(fotoPreview);
    };
  }, [fotoPreview]);

  async function load() {
    setLoading(true);
    const { data, error } = await supabase.from("dossiers").select("*").eq("id", id).single();
    if (error || !data) {
      setNotFound(true);
      setLoading(false);
      return;
    }
    setDossier(data);
    setForm({
      nome: data.nome || "",
      apelido: data.apelido || "",
      nif: data.nif || "",
      email: data.email || "",
      telefone: data.telefone || "",
      data_nascimento: data.data_nascimento || "",
      local_nascimento: data.local_nascimento || "",
      categoria_carta: data.categoria_carta || "",
      data_emissao: data.data_emissao || "",
      data_validade: data.data_validade || "",
      numero_carta: data.numero_carta || "",
      notas: data.notas || "",
    });
    setLoading(false);
  }

  function handleFotoChange(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    setFoto(file);
    setFotoPreview(URL.createObjectURL(file));
  }

  async function handleEstadoChange(novoEstado) {
    const pontos = pontosParaEstado(novoEstado);
    await supabase.from("dossiers").update({ estado: novoEstado, pontos }).eq("id", id);
    setDossier((d) => ({ ...d, estado: novoEstado, pontos }));
  }

  async function handleSave(e) {
    e.preventDefault();
    setSaving(true);
    setSaveMessage("");
    setSaveError("");

    let foto_url = dossier.foto_url;
    if (foto) {
      const path = `${Date.now()}-${foto.name.replace(/[^a-zA-Z0-9.]/g, "_")}`;
      const { error: uploadError } = await supabase.storage.from("fotos").upload(path, foto);
      if (uploadError) {
        setSaveError("Échec de l'envoi de la photo : " + uploadError.message);
        setSaving(false);
        return;
      }
      foto_url = supabase.storage.from("fotos").getPublicUrl(path).data.publicUrl;
    }

    const { data, error } = await supabase
      .from("dossiers")
      .update({
        ...form,
        data_nascimento: form.data_nascimento || null,
        data_emissao: form.data_emissao || null,
        data_validade: form.data_validade || null,
        foto_url,
      })
      .eq("id", id)
      .select()
      .single();

    setSaving(false);

    if (error) {
      setSaveError(error.message);
      return;
    }

    setDossier(data);
    setFoto(null);
    setFotoPreview(null);
    setSaveMessage("Modifications enregistrées.");
  }

  if (loading) return <div className="admin-page">Chargement…</div>;

  if (notFound) {
    return (
      <div className="admin-page">
        <p>Dossier introuvable.</p>
        <Link to="/admin/dossiers" className="admin-page__cta">
          Retour aux dossiers
        </Link>
      </div>
    );
  }

  return (
    <div className="admin-page">
      <div className="admin-page__header">
        <div>
          <Link to="/admin/dossiers" className="admin-detail__back">
            ← Retour aux dossiers
          </Link>
          <h1>{dossier.nome}</h1>
        </div>
        <span className="admin__pontos-badge">{dossier.pontos} / {PONTOS_MAX}</span>
      </div>

      <div className="admin-panel admin-detail__meta">
        <div>
          <span className="admin-detail__meta-label">Code</span>
          <strong>{dossier.codigo}</strong>
        </div>
        <div>
          <span className="admin-detail__meta-label">Statut</span>
          <select value={dossier.estado} onChange={(e) => handleEstadoChange(e.target.value)}>
            {ESTADOS_ADMIN.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <span className="admin-detail__meta-label">Créé le</span>
          <strong>{new Date(dossier.criado_em).toLocaleString("fr-FR")}</strong>
        </div>
        <div>
          <span className="admin-detail__meta-label">Mis à jour le</span>
          <strong>{new Date(dossier.atualizado_em).toLocaleString("fr-FR")}</strong>
        </div>
      </div>

      <form className="admin__create" onSubmit={handleSave}>
        <h2>Modifier le dossier</h2>
        <div className="admin__create-layout">
          <div className="admin__photo-field">
            <label className="admin__photo-box">
              {fotoPreview || dossier.foto_url ? (
                <img src={fotoPreview || dossier.foto_url} alt="Aperçu" />
              ) : (
                <span>Photo</span>
              )}
              <input type="file" accept="image/*" onChange={handleFotoChange} hidden />
            </label>
            <span className="admin__photo-hint">Format type passe (35×45mm)</span>
          </div>

          <div className="admin__grid">
            <label>
              Nom (propre) *
              <input required value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })} />
            </label>
            <label>
              Apelido (nom de famille)
              <input value={form.apelido} onChange={(e) => setForm({ ...form, apelido: e.target.value })} />
            </label>
            <label>
              NIF *
              <input required value={form.nif} onChange={(e) => setForm({ ...form, nif: e.target.value })} />
            </label>
            <label>
              Email *
              <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </label>
            <label>
              Téléphone
              <input value={form.telefone} onChange={(e) => setForm({ ...form, telefone: e.target.value })} />
            </label>
            <label>
              Date de naissance
              <input type="date" value={form.data_nascimento || ""} onChange={(e) => setForm({ ...form, data_nascimento: e.target.value })} />
            </label>
            <label>
              Lieu de naissance
              <input value={form.local_nascimento} onChange={(e) => setForm({ ...form, local_nascimento: e.target.value })} />
            </label>
            <label>
              Catégorie du permis *
              <input required value={form.categoria_carta} onChange={(e) => setForm({ ...form, categoria_carta: e.target.value })} />
            </label>
            <label>
              Date d'émission
              <input type="date" value={form.data_emissao || ""} onChange={(e) => setForm({ ...form, data_emissao: e.target.value })} />
            </label>
            <label>
              Date d'expiration
              <input type="date" value={form.data_validade || ""} onChange={(e) => setForm({ ...form, data_validade: e.target.value })} />
            </label>
            <label>
              Numéro de la carte
              <input value={form.numero_carta} onChange={(e) => setForm({ ...form, numero_carta: e.target.value })} />
            </label>
            <label className="admin__grid-full">
              Notes
              <textarea rows={3} value={form.notas} onChange={(e) => setForm({ ...form, notas: e.target.value })} />
            </label>
          </div>
        </div>

        <button type="submit" disabled={saving}>
          {saving ? "Enregistrement…" : "Enregistrer les modifications"}
        </button>

        {saveError && <p className="admin__error">{saveError}</p>}
        {saveMessage && <p className="admin__success">{saveMessage}</p>}
      </form>
    </div>
  );
}
