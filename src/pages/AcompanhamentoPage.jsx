import { useEffect, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import PageHero from "../components/PageHero";
import { supabase, supabaseConfigured } from "../lib/supabaseClient";
import SupabaseSetupNotice from "../components/SupabaseSetupNotice";
import { PONTOS_MAX } from "../lib/estados";
import "./AcompanhamentoPage.css";

const SESSAO_DURACAO_MS = 5 * 60 * 1000;

const CATEGORIAS_CARTA = [
  { value: "A1", icon: "🏍" },
  { value: "A", icon: "🏍" },
  { value: "B1", icon: "🚘" },
  { value: "B", icon: "🚗" },
  { value: "BE", icon: "🚗" },
  { value: "C1", icon: "🚚" },
  { value: "C", icon: "🚚" },
  { value: "C1E", icon: "🚛" },
  { value: "CE", icon: "🚛" },
  { value: "D1", icon: "🚐" },
  { value: "D", icon: "🚌" },
  { value: "D1E", icon: "🚐" },
  { value: "DE", icon: "🚌" },
];

function EuBadge() {
  const stars = Array.from({ length: 12 }, (_, i) => {
    const angle = (i / 12) * 2 * Math.PI - Math.PI / 2;
    return { x: 18 + 12.5 * Math.cos(angle), y: 18 + 12.5 * Math.sin(angle) };
  });

  return (
    <svg viewBox="0 0 36 36" className="carta-card__eu-badge" aria-hidden="true">
      <rect width="36" height="36" rx="4" fill="#003399" />
      {stars.map((s, i) => (
        <text key={i} x={s.x} y={s.y} fontSize="4.6" fill="#ffcc00" textAnchor="middle" dominantBaseline="middle">
          ★
        </text>
      ))}
      <text x="18" y="19" fontSize="15" fill="#fff" textAnchor="middle" dominantBaseline="middle" fontWeight="700">
        P
      </text>
    </svg>
  );
}

export default function AcompanhamentoPage() {
  const [searchParams] = useSearchParams();
  const [dossier, setDossier] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [expirado, setExpirado] = useState(false);
  const [slide, setSlide] = useState(0);
  const expiracaoTimer = useRef(null);
  const touchStartX = useRef(null);
  const TOTAL_SLIDES = 2;

  function prevSlide() {
    setSlide((s) => (s - 1 + TOTAL_SLIDES) % TOTAL_SLIDES);
  }

  function nextSlide() {
    setSlide((s) => (s + 1) % TOTAL_SLIDES);
  }

  function handleTouchStart(e) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e) {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > 50) prevSlide();
    else if (delta < -50) nextSlide();
    touchStartX.current = null;
  }

  async function runSearch(codigoVal, nifVal) {
    setLoading(true);
    setError("");
    setDossier(null);
    setSearched(true);
    setExpirado(false);
    setSlide(0);

    const { data, error: rpcError } = await supabase.rpc("consultar_dossier", { p_codigo: codigoVal, p_nif: nifVal });

    setLoading(false);

    if (rpcError || !data || data.length === 0) {
      setError("Não foi encontrado nenhum dossier com este código e NIF.");
      return;
    }

    setDossier(data[0]);
  }

  useEffect(() => {
    if (supabaseConfigured && searchParams.get("codigo") && searchParams.get("nif")) {
      runSearch(searchParams.get("codigo"), searchParams.get("nif"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!dossier) return undefined;

    expiracaoTimer.current = setTimeout(() => {
      setDossier(null);
      setExpirado(true);
      setSearched(false);
    }, SESSAO_DURACAO_MS);

    return () => clearTimeout(expiracaoTimer.current);
  }, [dossier]);

  if (!supabaseConfigured) return <SupabaseSetupNotice />;

  const temParametros = Boolean(searchParams.get("codigo") && searchParams.get("nif"));
  const categoriasPosuidas = new Set(
    (dossier?.categoria_carta || "")
      .split(/[\s,/]+/)
      .map((c) => c.trim().toUpperCase())
      .filter(Boolean)
  );

  return (
    <>
      <PageHero title="Acompanhamento do Dossier" />

      <section className="acomp">
        <div className="acomp__inner">
          {loading && <p className="acomp__loading">A consultar o seu dossier…</p>}

          {!temParametros && !dossier && !loading && (
            <p className="acomp__expirado">
              Aceda através da página <Link to="/imt-online">IMT Online</Link> com o seu código de acompanhamento e NIF para consultar o seu dossier.
            </p>
          )}

          {error && <p className="acomp__error">{error}</p>}

          {expirado && (
            <p className="acomp__expirado">
              A sua sessão expirou por motivos de segurança. Aceda novamente através da página{" "}
              <Link to="/imt-online">IMT Online</Link> para consultar os seus dados.
            </p>
          )}

          {dossier && (
            <div className="acomp__result">
              <div className="acomp__result-head">
                <div className="acomp__slide-pontos">
                  <span className="acomp__slide-pontos-num">{dossier.pontos}</span>
                  <span className="acomp__slide-pontos-max">/ {PONTOS_MAX}</span>
                  <span className="acomp__slide-pontos-label">pontos</span>
                </div>
                <div>
                  <h2>Olá, {dossier.nome}</h2>
                  <div className="acomp__meta">
                    <span>
                      Categoria: <strong>{dossier.categoria_carta}</strong>
                    </span>
                  </div>
                </div>
              </div>

              <div className="acomp__carousel">
                  <div
                    className="acomp__carousel-viewport"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                  >
                    <div className="acomp__carousel-track" style={{ transform: `translateX(-${slide * 100}%)` }}>
                      <div className="acomp__slide acomp__slide-info">
                        <div className="acomp__slide-photo">
                          {dossier.foto_url ? (
                            <img src={dossier.foto_url} alt={dossier.nome} />
                          ) : (
                            <span className="acomp__slide-photo--empty" />
                          )}
                          <p>{dossier.nome}</p>
                        </div>

                        <dl className="acomp__slide-table">
                          {dossier.apelido && (
                            <div>
                              <dt>Apelido</dt>
                              <dd>{dossier.apelido}</dd>
                            </div>
                          )}
                          {(dossier.data_nascimento || dossier.local_nascimento) && (
                            <div>
                              <dt>Data e local de nascimento</dt>
                              <dd>
                                {dossier.data_nascimento && new Date(dossier.data_nascimento).toLocaleDateString("pt-PT")}
                                {dossier.data_nascimento && dossier.local_nascimento && " — "}
                                {dossier.local_nascimento}
                              </dd>
                            </div>
                          )}
                          <div>
                            <dt>Emissão</dt>
                            <dd>{dossier.data_emissao ? new Date(dossier.data_emissao).toLocaleDateString("pt-PT") : "—"}</dd>
                          </div>
                          <div>
                            <dt>Expiração</dt>
                            <dd>{dossier.data_validade ? new Date(dossier.data_validade).toLocaleDateString("pt-PT") : "—"}</dd>
                          </div>
                        </dl>
                      </div>

                      <div className="acomp__slide acomp__slide-carta">
                        <div className="carta-card carta-card--frente">
                          <span className="carta-card__watermark" aria-hidden="true">
                            🇵🇹
                          </span>

                          <div className="carta-card__content">
                            <div className="carta-card__left-col">
                              <EuBadge />
                              <div className="carta-card__photo">
                                {dossier.foto_url ? <img src={dossier.foto_url} alt={dossier.nome} /> : <span className="carta-card__photo-empty" />}
                              </div>
                            </div>

                            <div className="carta-card__right-col">
                              <h3 className="carta-card__doc-title">
                                CARTA DE CONDUÇÃO <span className="carta-card__doc-title-sep">|</span> REPÚBLICA PORTUGUESA
                              </h3>

                              <div className="carta-card__fields-list">
                                <p className="carta-card__field">
                                  <b>1.</b> {dossier.apelido || "—"}
                                </p>
                                <p className="carta-card__field">
                                  <b>2.</b> {dossier.nome}
                                </p>
                                <p className="carta-card__field">
                                  <b>3.</b>{" "}
                                  {dossier.data_nascimento ? new Date(dossier.data_nascimento).toLocaleDateString("pt-PT") : "—"}
                                  {dossier.local_nascimento ? ` ${dossier.local_nascimento}` : ""}
                                </p>
                                <div className="carta-card__field-pair">
                                  <p className="carta-card__field">
                                    <b>4a.</b> {dossier.data_emissao ? new Date(dossier.data_emissao).toLocaleDateString("pt-PT") : "—"}
                                  </p>
                                  <p className="carta-card__field">
                                    <b>4c.</b> IMT
                                  </p>
                                </div>
                                <div className="carta-card__field-pair">
                                  <p className="carta-card__field">
                                    <b>4b.</b> {dossier.data_validade ? new Date(dossier.data_validade).toLocaleDateString("pt-PT") : "—"}
                                  </p>
                                  <p className="carta-card__field">
                                    <b>4d.</b> —
                                  </p>
                                </div>
                                <p className="carta-card__field">
                                  <b>5.</b> {dossier.numero_carta || "—"}
                                </p>
                                <p className="carta-card__field carta-card__field--signature">
                                  <b>7.</b>{" "}
                                  {dossier.assinatura_url ? (
                                    <img className="carta-card__signature-img" src={dossier.assinatura_url} alt="Assinatura" />
                                  ) : (
                                    <span className="carta-card__signature-text">{dossier.nome}</span>
                                  )}
                                </p>
                                <p className="carta-card__field">
                                  <b>8.</b> —
                                </p>
                              </div>
                            </div>
                          </div>

                          <p className="carta-card__field carta-card__categorias-line">
                            <b>9.</b> {[...categoriasPosuidas].join(", ") || "—"}
                          </p>
                        </div>

                        <div className="carta-card carta-card--verso">
                          <div className="carta-card__margin">
                            <span>13.</span>
                            <span>(14.)</span>
                          </div>
                          <table className="carta-card__table">
                            <thead>
                              <tr>
                                <th>9.</th>
                                <th>10.</th>
                                <th>11.</th>
                                <th>12.</th>
                              </tr>
                            </thead>
                            <tbody>
                              {CATEGORIAS_CARTA.map((cat) => {
                                const possui = categoriasPosuidas.has(cat.value);
                                return (
                                  <tr key={cat.value}>
                                    <td className="carta-card__cat-cell">
                                      <span className="carta-card__cat-icon">{cat.icon}</span>
                                      {cat.value}
                                    </td>
                                    <td>
                                      {possui && dossier.data_emissao
                                        ? new Date(dossier.data_emissao).toLocaleDateString("pt-PT")
                                        : "x x x"}
                                    </td>
                                    <td>
                                      {possui && dossier.data_validade
                                        ? new Date(dossier.data_validade).toLocaleDateString("pt-PT")
                                        : "x x x"}
                                    </td>
                                    <td>{possui ? "—" : "x x x"}</td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                          <p className="carta-card__legenda">
                            1. Apelidos 2. Nome 3. Data e local de nascimento 4a. Data de emissão da carta 4b. Data de
                            validade da carta 4c. Entidade emissora 4d. Número de controlo 5. Número da carta 6.
                            Fotografia do titular 7. Assinatura do titular 8. Morada 9. Categoria(s) de veículos 10.
                            Primeira data de emissão das categorias 11. Data de validade da categoria 12.
                            Menção(ões)/Restrição(ões)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="acomp__carousel-arrow acomp__carousel-arrow--prev"
                    onClick={prevSlide}
                    aria-label="Slide anterior"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    className="acomp__carousel-arrow acomp__carousel-arrow--next"
                    onClick={nextSlide}
                    aria-label="Slide seguinte"
                  >
                    ›
                  </button>

                  <div className="acomp__carousel-dots">
                    {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        className={`acomp__carousel-dot${slide === i ? " is-active" : ""}`}
                        onClick={() => setSlide(i)}
                        aria-label={`Ir para o slide ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
            </div>
          )}

          {searched && !dossier && !error && !loading && <p className="acomp__error">Sem resultados.</p>}
        </div>
      </section>
    </>
  );
}
