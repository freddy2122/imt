import PageHero from "./PageHero";
import "./TextPage.css";

function FileIcon() {
  return (
    <svg viewBox="0 0 16 20" width="16" height="20" fill="none">
      <path
        d="M9.17157 1H5C3.11438 1 2.17157 1 1.58579 1.58579C1 2.17157 1 3.11438 1 5V15C1 16.8856 1 17.8284 1.58579 18.4142C2.17157 19 3.11438 19 5 19H11C12.8856 19 13.8284 19 14.4142 18.4142C15 17.8284 15 16.8856 15 15V6.82843C15 6.41968 15 6.2153 14.9239 6.03153C14.8478 5.84776 14.7032 5.70324 14.4142 5.41421L10.5858 1.58579C10.2968 1.29676 10.1522 1.15224 9.96847 1.07612C9.7847 1 9.58032 1 9.17157 1Z"
        stroke="white"
      />
      <path d="M5 11L11 11" stroke="white" strokeLinecap="round" />
      <path d="M5 15L9 15" stroke="white" strokeLinecap="round" />
      <path d="M9 1V5C9 5.94281 9 6.41421 9.29289 6.70711C9.58579 7 10.0572 7 11 7H15" stroke="white" />
    </svg>
  );
}

function Block({ block }) {
  if (block.type === "h") {
    return <h3>{block.text}</h3>;
  }
  if (block.type === "ul") {
    return (
      <ul>
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
  if (block.type === "linkgroup") {
    return (
      <div className="text-page__linkgroup">
        <h4>{block.heading}</h4>
        {block.note && <p className="text-page__note">{block.note}</p>}
        <ul>
          {block.links.map((link) => (
            <li key={link.label}>
              <a href={link.href} target={link.href.startsWith("/") ? undefined : "_blank"} rel="noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  if (block.type === "docsection") {
    return (
      <div className="text-page__docsection">
        <div className="text-page__docsection-bar">{block.heading}</div>
        <div className="text-page__docsection-body">
          {block.docs.map((doc) => (
            <a key={doc.name} className="text-page__docsection-btn" href={doc.href} target="_blank" rel="noreferrer">
              <FileIcon />
              {doc.name}
            </a>
          ))}
        </div>
      </div>
    );
  }
  if (block.type === "docsection-row") {
    return (
      <div className="text-page__docsection-row">
        {block.sections.map((section) => (
          <div key={section.heading} className="text-page__docsection">
            <div className="text-page__docsection-bar">{section.heading}</div>
            <div className="text-page__docsection-body">
              {section.docs.map((doc) => (
                <a key={doc.name} className="text-page__docsection-btn" href={doc.href} target="_blank" rel="noreferrer">
                  <FileIcon />
                  {doc.name}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
  if (block.type === "bio") {
    const initials = block.name
      .split(" ")
      .filter((w) => w.length > 2)
      .slice(0, 2)
      .map((w) => w[0])
      .join("");
    return (
      <div className="text-page__bio">
        <div className="text-page__bio-avatar">{initials}</div>
        <div className="text-page__bio-content">
          <h4>{block.name}</h4>
          <p className="text-page__bio-title">{block.title}</p>
          {block.docLink && (
            <a className="text-page__bio-doclink" href={block.docLink.href} target="_blank" rel="noreferrer">
              {block.docLink.label}
            </a>
          )}
          {block.bio.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>
    );
  }
  return <p>{block.text}</p>;
}

export default function TextPage({ title, blocks, docs }) {
  return (
    <>
      <PageHero title={title} />

      <section className="text-page">
        <div className="text-page__inner">
          {blocks.map((block, i) => (
            <Block key={i} block={block} />
          ))}

          {docs?.length > 0 && (
            <div className="text-page__docs">
              {docs.map((doc) => (
                <div key={doc.name} className="text-page__doc">
                  <h4>{doc.name}</h4>
                  <a href={doc.href} target="_blank" rel="noreferrer">
                    <FileIcon />
                    Visualizar
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
