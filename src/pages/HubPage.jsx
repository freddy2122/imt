import { useParams } from "react-router-dom";
import CtaGridPage from "../components/CtaGridPage";
import { hubPages } from "../data/hubPages";

export default function HubPage() {
  const { slug } = useParams();
  const page = hubPages[slug];

  if (!page) {
    return (
      <div style={{ padding: "80px 16px", textAlign: "center", fontFamily: "Segoe UI, Arial, sans-serif", color: "#4a4a68" }}>
        <h1>Página não encontrada</h1>
      </div>
    );
  }

  return <CtaGridPage title={page.title} cards={page.cards} tint={page.tint} extraCta={page.extraCta} />;
}
