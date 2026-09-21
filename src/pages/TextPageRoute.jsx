import { useParams } from "react-router-dom";
import TextPage from "../components/TextPage";
import { textPages } from "../data/textPages";

export default function TextPageRoute() {
  const { slug } = useParams();
  const page = textPages[slug];

  if (!page) {
    return (
      <div style={{ padding: "80px 16px", textAlign: "center", fontFamily: "Segoe UI, Arial, sans-serif", color: "#4a4a68" }}>
        <h1>Página não encontrada</h1>
      </div>
    );
  }

  return <TextPage title={page.title} blocks={page.blocks} docs={page.docs} />;
}
