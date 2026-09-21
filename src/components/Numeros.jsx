import { useEffect, useRef, useState } from "react";
import "./Numeros.css";

const stats = [
  { value: 917959, label: "Cartas Emitidas" },
  { value: 336184, label: "Veículos Matriculados" },
  { value: 4918635, label: "Inspeções Realizadas (ITV)" },
];

function useCountUp(target, start) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    const duration = 1600;
    const startTime = performance.now();

    function tick(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      setValue(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(tick);
    }

    const id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [start, target]);

  return value;
}

function Stat({ value, label, start }) {
  const count = useCountUp(value, start);
  return (
    <div className="numeros__stat">
      <h3>
        <span className="numeros__plus">+</span>
        {count.toLocaleString("pt-PT")}
      </h3>
      <p>{label}</p>
    </div>
  );
}

export default function Numeros() {
  const [start, setStart] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="numeros">
      <div className="numeros__inner">
        <div className="numeros__header">
          <h2>Números</h2>
          <a href="https://www.imt-ip.pt/condutores/informacoes-gerais/quero-ser-condutor/indicadores-imt-cartas-de-conducao-e-atendimento-ao-publico/" className="numeros__btn">
            SAIBA MAIS
          </a>
          <span className="numeros__date">* Agosto de 2026</span>
        </div>

        <div className="numeros__grid">
          {stats.map((stat) => (
            <Stat key={stat.label} value={stat.value} label={stat.label} start={start} />
          ))}
        </div>
      </div>
    </section>
  );
}
