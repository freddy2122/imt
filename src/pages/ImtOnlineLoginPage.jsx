import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ImtOnlineLoginPage.css";

const SKIN = "https://servicos.imt-ip.pt/Portals/_default/Skins/IMTT/images2";

export default function ImtOnlineLoginPage() {
  const navigate = useNavigate();
  const [codigo, setCodigo] = useState("");
  const [nif, setNif] = useState("");

  function handleAcompanhamento(e) {
    e.preventDefault();
    navigate(`/acompanhamento?codigo=${encodeURIComponent(codigo.trim())}&nif=${encodeURIComponent(nif.trim())}`);
  }

  return (
    <div className="imto">
      <div className="imto__inner">
        <header className="imto__header">
          <a href="/" className="imto__logo">
            <img src={`${SKIN}/IMTlogotipo.png`} alt="Logo IMTT" />
          </a>
        </header>

        <div className="imto__breadcrumb">
          &gt; <a href="/">Você está aqui</a> &gt; <span>Login</span>
        </div>

        <div className="imto__bar" />

        <div className="imto__panel">
          <div className="imto__columns">
            <div className="imto__col">
              <h2>Particulares</h2>
              <div className="imto__row">
                <p>Autenticação com Número de Contribuinte, Cartão de Cidadão ou Chave Móvel Digital</p>
                <button type="button" className="imto__btn">
                  » Entrar
                </button>
              </div>

              <h2>Validação de Documentos</h2>
              <div className="imto__row imto__row--single">
                <button type="button" className="imto__btn">
                  Validar
                </button>
              </div>

              <h2>Acompanhamento de Processos</h2>
              <form className="imto__box" onSubmit={handleAcompanhamento}>
                <h3>Consultar o Meu Dossier</h3>
                <label>
                  NIF
                  <input type="text" autoComplete="off" value={nif} onChange={(e) => setNif(e.target.value)} required />
                </label>
                <label>
                  Nº de Processo
                  <input
                    type="text"
                    autoComplete="off"
                    placeholder="IMT-XXXXXXXX"
                    value={codigo}
                    onChange={(e) => setCodigo(e.target.value)}
                    required
                  />
                </label>
                <button type="submit" className="imto__btn imto__btn--form">
                  » Entrar
                </button>
              </form>
            </div>

            <div className="imto__col">
              <h2>Empresas</h2>
              <div className="imto__row">
                <p>Autenticação com Nº de Contribuinte da Empresa</p>
                <button type="button" className="imto__btn">
                  » Entrar
                </button>
              </div>

              <form className="imto__box" onSubmit={(e) => e.preventDefault()}>
                <h3>Autenticação de Representantes</h3>
                <label>
                  NIF da Empresa
                  <input type="text" autoComplete="off" />
                </label>
                <label>
                  Utilizador
                  <input type="text" autoComplete="off" />
                </label>
                <label>
                  Password
                  <input type="password" autoComplete="off" />
                </label>
                <button type="submit" className="imto__btn imto__btn--form">
                  » Entrar
                </button>
              </form>

              <p className="imto__contact">
                Contacto: <a href="mailto:imtonline@imt-ip.pt">imtonline@imt-ip.pt</a>
              </p>
            </div>
          </div>
        </div>

        <footer className="imto__footer">
          <div className="imto__footer-links">
            <a href="/texto/politica-de-privacidade">Política de Privacidade</a>
            <span>|</span>
            <a href="https://www.imt-ip.pt/termos-de-utilizacao-e-responsabilidade/" target="_blank" rel="noreferrer">
              Condições de Utilização
            </a>
          </div>
          <div className="imto__footer-funds">
            <span>Cofinanciado por</span>
            <img src={`${SKIN}/Modelos-Barras-FUNDOS-v04_3logos-FEDER.gif`} alt="Feder" />
          </div>
          <div className="imto__footer-right">
            <span>Copyright 2020 IMT</span>
            <img src={`${SKIN}/access.gif`} alt="Logo Acessibilidade" />
            <img src={`${SKIN}/w3c_WAI-AA.gif`} alt="W3C WAI" />
          </div>
        </footer>
      </div>
    </div>
  );
}
