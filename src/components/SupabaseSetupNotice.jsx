export default function SupabaseSetupNotice() {
  return (
    <div style={{ maxWidth: 560, margin: "80px auto", padding: "0 20px", fontFamily: "Arial, Helvetica, sans-serif", color: "#2e3d47" }}>
      <h1 style={{ fontSize: 22, marginBottom: 12 }}>Supabase não configurado</h1>
      <p style={{ lineHeight: 1.6 }}>
        Esta página precisa de uma ligação a um projeto Supabase. Cria um ficheiro <code>.env.local</code> na raiz do projeto (a partir de{" "}
        <code>.env.example</code>) com:
      </p>
      <pre style={{ background: "#f4f4f6", padding: "12px 16px", borderRadius: 6, fontSize: 13, overflowX: "auto" }}>
        {"VITE_SUPABASE_URL=https://xxxx.supabase.co\nVITE_SUPABASE_ANON_KEY=..."}
      </pre>
      <p style={{ lineHeight: 1.6 }}>
        Depois reinicia o servidor de desenvolvimento. Executa também <code>supabase/schema.sql</code> no SQL Editor do teu projeto Supabase.
      </p>
    </div>
  );
}
