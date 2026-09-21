import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase, supabaseConfigured } from "../../lib/supabaseClient";
import SupabaseSetupNotice from "../../components/SupabaseSetupNotice";
import "./Admin.css";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  if (!supabaseConfigured) return <SupabaseSetupNotice />;

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const { error: authError } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (authError) {
      setError("Identifiants invalides.");
      return;
    }
    navigate("/admin");
  }

  return (
    <div className="admin-login">
      <form className="admin-login__card" onSubmit={handleSubmit}>
        <h1>Panneau IMT — Accès Admin</h1>
        <label>
          Email
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required autoFocus />
        </label>
        <label>
          Mot de passe
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        {error && <p className="admin-login__error">{error}</p>}
        <button type="submit" disabled={loading}>
          {loading ? "Connexion…" : "Se connecter"}
        </button>
        <p className="admin-login__hint">
          Le compte admin se crée dans Supabase → Authentication → Users → Add user (pas d'inscription publique).
        </p>
      </form>
    </div>
  );
}
