import { useState } from "react";
import PageHero from "../components/PageHero";
import { faqTopics, faqItems } from "../data/faq";
import "./FaqPage.css";

function ChevronIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.4">
      <polyline points="6 9 12 15 18 9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PlusMinusIcon({ open }) {
  return (
    <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2">
      <line x1="10" y1="4" x2="10" y2="16" style={{ display: open ? "none" : "block" }} strokeLinecap="round" />
      <line x1="4" y1="10" x2="16" y2="10" strokeLinecap="round" />
    </svg>
  );
}

export default function FaqPage() {
  const [topic, setTopic] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const results = topic ? faqItems.filter((item) => item.topic === topic) : [];

  return (
    <>
      <PageHero title="FAQ" />

      <section className="faq">
        <div className="faq__inner">
          <p className="faq__intro">
            Escolha o tema da sua dúvida para melhor encontrar a resposta. Caso não encontre a resposta que procura, contacte-nos através do nosso
            formulário de Contactos.
          </p>

          <div className="faq__dropdown">
            <button type="button" className="faq__dropbtn" onClick={() => setDropdownOpen((o) => !o)}>
              <span>{topic || "Tema"}</span>
              <ChevronIcon />
            </button>
            {dropdownOpen && (
              <div className="faq__dropcontent">
                {faqTopics.map((t) => (
                  <a
                    key={t}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setTopic(t);
                      setDropdownOpen(false);
                      setOpenIndex(null);
                    }}
                  >
                    {t}
                  </a>
                ))}
              </div>
            )}
          </div>

          {topic && (
            <div className="faq__list">
              {results.length === 0 && <p className="faq__empty">Ainda não há perguntas frequentes disponíveis para este tema.</p>}
              {results.map((item, index) => {
                const open = openIndex === index;
                return (
                  <div key={item.q} className="faq__item">
                    <button type="button" className={`faq__question ${open ? "is-open" : ""}`} onClick={() => setOpenIndex(open ? null : index)}>
                      {item.q}
                      <PlusMinusIcon open={open} />
                    </button>
                    {open && <div className="faq__answer">{item.a}</div>}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
