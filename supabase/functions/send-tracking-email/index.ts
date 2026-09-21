// Supabase Edge Function: envia o email com o código de acompanhamento do dossier.
// Deploy: supabase functions deploy send-tracking-email
// Secret necessário: supabase secrets set RESEND_API_KEY=re_xxxxxxxx

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore — resolvido pelo runtime Deno do Supabase, não pelo bundler do site
import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const FROM_EMAIL = Deno.env.get("TRACKING_EMAIL_FROM") || "IMT Online <onboarding@resend.dev>";
const TRACKING_URL_BASE = Deno.env.get("TRACKING_URL_BASE") || "http://localhost:5183/acompanhamento";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { codigo, nome, email } = await req.json();

    if (!codigo || !nome || !email) {
      return new Response(JSON.stringify({ error: "codigo, nome e email são obrigatórios" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (!RESEND_API_KEY) {
      return new Response(JSON.stringify({ error: "RESEND_API_KEY não configurada nos secrets da função" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const trackingLink = `${TRACKING_URL_BASE}?codigo=${encodeURIComponent(codigo)}`;

    const html = `
      <div style="font-family: Arial, Helvetica, sans-serif; color: #2e3d47; max-width: 480px; margin: 0 auto;">
        <h2 style="color: #0053cc;">IMT — Confirmação de Registo</h2>
        <p>Olá ${nome},</p>
        <p>O seu dossier foi criado com sucesso. Utilize o código abaixo para acompanhar a evolução do seu processo em qualquer momento.</p>
        <p style="font-size: 22px; font-weight: 700; letter-spacing: 1px; background: #f4f4f6; padding: 12px 16px; border-radius: 6px; text-align: center;">
          ${codigo}
        </p>
        <p>
          <a href="${trackingLink}" style="display:inline-block;background:#0053cc;color:#fff;text-decoration:none;font-weight:700;padding:10px 20px;border-radius:6px;">
            Consultar o meu dossier
          </a>
        </p>
        <p style="font-size: 12px; color: #6b7280;">Guarde este código — ser-lhe-á pedido, junto com o seu NIF, para consultar o estado do seu processo.</p>
      </div>
    `;

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [email],
        subject: "O seu código de acompanhamento IMT",
        html,
      }),
    });

    const result = await resendResponse.json();

    if (!resendResponse.ok) {
      return new Response(JSON.stringify({ error: result }), {
        status: resendResponse.status,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ ok: true, id: result.id }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
