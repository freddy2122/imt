import { useState } from "react";
import "./Accordion.css";

function PlusMinusIcon({ open }) {
  return (
    <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2">
      <line x1="10" y1="4" x2="10" y2="16" style={{ display: open ? "none" : "block" }} strokeLinecap="round" />
      <line x1="4" y1="10" x2="16" y2="10" strokeLinecap="round" />
    </svg>
  );
}

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="accordion-list">
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <div key={item.q} className="accordion-item">
            <button type="button" className={`accordion-question ${open ? "is-open" : ""}`} onClick={() => setOpenIndex(open ? null : index)}>
              {item.q}
              <PlusMinusIcon open={open} />
            </button>
            {open && <div className="accordion-answer">{item.a}</div>}
          </div>
        );
      })}
    </div>
  );
}
