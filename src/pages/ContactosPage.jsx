import PageHero from "../components/PageHero";
import "./ContactosPage.css";

const BASE = "https://www.imt-ip.pt";

const ASSUNTOS = [
  "Condutores – pedidos online",
  "Condutores - informações",
  "Cartão de estacionamento – pedidos online",
  "Troca de carta estrangeira – pedidos online",
  "Cartão Tacográfico de Condutores",
  "Licença Plataforma Eletrónica TVDE",
  "Marítimo-Portuárias",
  "Transportes – pedidos online",
  "Transportes - Informações",
  "Certificação Profissional (TCC/ADR/TVDE/CMT)",
  "Veículos – pedidos online",
  "Veículos - Informações",
  "Portal SIM (Pedidos registados no Portal SIM)",
  "Outras Informações",
];

const PRESENCIAL = [
  { title: "Norte", href: `${BASE}/contacto/norte/`, opacity: 0.3 },
  { title: "Centro", href: `${BASE}/contacto/centro/`, opacity: 0.2 },
  { title: "Lisboa Vale Tejo", href: `${BASE}/contacto/lisboa-vale-tejo/`, opacity: 0.1 },
  { title: "Alentejo", href: `${BASE}/contacto/alentejo/`, opacity: 0.2 },
  { title: "Algarve", href: `${BASE}/contacto/algarve/`, opacity: 0.3 },
];

const OUTROS = [
  { title: "Sede", href: `${BASE}/contacto/sede/`, opacity: 0.3 },
  { title: "Contactos para a Imprensa", href: `${BASE}/contacto/contactos-para-a-imprensa/`, opacity: 0.2 },
  { title: "Contraordenações", href: `${BASE}/contacto/contraordenacoes/`, opacity: 0.1 },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 25 17" width="25" height="17" fill="none">
      <path d="M15.6 16L24 8.5M24 8.5L15.6 1M24 8.5L0 8.5" stroke="white" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

export default function ContactosPage() {
  return (
    <>
      <PageHero title="Contactos" />

      <section className="contactos-form">
        <div className="contactos-form__inner">
          <h2>Contacte-nos</h2>
          <p className="contactos-form__note">
            Certifique-se, por favor, se preenche corretamente todos os campos obrigatórios (assinalados com asterisco).
          </p>

          <form onSubmit={(e) => e.preventDefault()}>
            <label>
              Assunto *
              <select required defaultValue="">
                <option value="" disabled>
                  Selecione um assunto
                </option>
                {ASSUNTOS.map((a) => (
                  <option key={a} value={a}>
                    {a}
                  </option>
                ))}
              </select>
            </label>

            <div className="contactos-form__row">
              <label>
                Nome *
                <input type="text" required />
              </label>
              <label>
                E-mail *
                <input type="email" required />
              </label>
            </div>

            <div className="contactos-form__row">
              <label>
                NIF *
                <input type="text" required />
              </label>
              <label>
                Nº de Carta de Condução
                <input type="text" />
              </label>
            </div>

            <label>
              Matrícula do Veículo
              <input type="text" />
            </label>

            <label>
              Mensagem
              <textarea rows={5} />
            </label>

            <label>
              Documento Adicional
              <div className="contactos-form__upload">Arraste ficheiros para aqui, ou clique para escolher</div>
            </label>

            <label className="contactos-form__captcha">
              Captcha *
              <span>12 × 15 =</span>
              <input type="text" required style={{ width: 80 }} />
            </label>

            <button type="submit">Enviar</button>
          </form>
        </div>
      </section>

      <section className="contactos-info">
        <div className="contactos-info__inner">
          <h3>Call Center IMT – 210 488 488</h3>
          <p>
            Horário de funcionamento do atendimento telefónico – 9:00 às 17:00 (chamadas nacionais e internacionais). Fora do horário de
            atendimento, o cidadão acede a uma gravação com informações sobre o horário de funcionamento do Call Center, e a chamada é
            desligada pela aplicação.
          </p>
          <p className="contactos-info__small">
            Custo da chamada para o Call Center: o custo de uma comunicação telefónica comum, em conformidade com o tarifário de
            telecomunicações acordado com o seu operador.
          </p>

          <h3>Atendimento online</h3>
          <p>
            Para questões sobre Condutores, Veículos, Transportes, Atividades Marítimo-Portuárias ou outras questões, utilize o formulário
            de contactos disponível neste site, ou os serviços do IMT já disponíveis online.
          </p>

          <h3>Canal do Utilizador</h3>
          <p>
            Para apresentação de elogios, sugestões e reclamações, aceda ao{" "}
            <a href="https://canalutilizador.imt-ip.pt/" target="_blank" rel="noreferrer">
              Canal do Utilizador
            </a>
            .
          </p>
        </div>
      </section>

      <section className="contactos-grid contactos-grid--navy">
        <div className="contactos-grid__inner">
          <h2>Atendimento Presencial</h2>
          <p>Aceda diretamente para confirmar os locais e o horário de atendimento ao público.</p>
          <div className="contactos-grid__cards">
            {PRESENCIAL.map((card) => (
              <a key={card.title} href={card.href} className="contactos-grid__card" style={{ background: `rgba(255,255,255,${card.opacity})` }}>
                <h3>{card.title}</h3>
                <span className="contactos-grid__arrow">
                  <ArrowIcon />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="contactos-grid">
        <div className="contactos-grid__inner">
          <h2>Outros Contactos</h2>
          <div className="contactos-grid__cards">
            {OUTROS.map((card) => (
              <a key={card.title} href={card.href} className="contactos-grid__card" style={{ background: `rgba(0,83,204,${card.opacity})` }}>
                <h3>{card.title}</h3>
                <span className="contactos-grid__arrow">
                  <ArrowIcon />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
