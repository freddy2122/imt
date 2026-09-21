import { useState } from "react";
import { Link } from "react-router-dom";
import { megaMenu } from "../data/menu";
import "./MegaMenu.css";

function Chevron() {
  return (
    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.4">
      <polyline points="6 9 12 15 18 9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function NavA({ href, className, children }) {
  if (href && href.startsWith("/") && !href.startsWith("//")) {
    return (
      <Link to={href} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}

function Group({ group }) {
  return (
    <div className="mm-group">
      <NavA href={group.href} className="mm-group__heading">
        {group.heading}
      </NavA>
      {group.links?.length > 0 && (
        <ul className="mm-links">
          {group.links.map((link) => (
            <li key={link.label}>
              <NavA href={link.href}>{link.label}</NavA>
            </li>
          ))}
        </ul>
      )}
      {group.subgroups?.map((sub) => (
        <div key={sub.heading} className="mm-subgroup">
          <NavA href={sub.href} className="mm-subgroup__heading">
            {sub.heading}
          </NavA>
          <ul className="mm-links">
            {sub.links.map((link) => (
              <li key={link.label}>
                <NavA href={link.href}>{link.label}</NavA>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default function MegaMenu() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <nav className="mega-nav" onMouseLeave={() => setOpenIndex(null)}>
      <ul className="mega-nav__list">
        {megaMenu.map((item, index) => (
          <li
            key={item.label}
            className="mega-nav__item"
            onMouseEnter={() => setOpenIndex(index)}
          >
            <a
              href="#"
              className={`mega-nav__link ${item.light ? "is-light" : ""} ${openIndex === index ? "is-open" : ""}`}
              onClick={(e) => e.preventDefault()}
            >
              {item.label}
              <Chevron />
            </a>

            {openIndex === index && (
              <div className="mega-panel">
                <div className="mega-panel__inner">
                  {item.columns.map((col, colIndex) => (
                    <div key={colIndex} className="mega-panel__col" style={{ flexBasis: `${(col.width / 12) * 100}%` }}>
                      {col.groups.map((group) => (
                        <Group key={group.heading} group={group} />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
