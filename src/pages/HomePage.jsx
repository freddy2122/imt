import Carousel from "../components/Carousel";
import Highlights from "../components/Highlights";
import CartaConducao from "../components/CartaConducao";
import CtaBanner from "../components/CtaBanner";
import PoliticasPublicas from "../components/PoliticasPublicas";
import ImtMais from "../components/ImtMais";
import Numeros from "../components/Numeros";

export default function HomePage() {
  return (
    <>
      <Carousel />
      <Highlights />
      <CartaConducao />
      <CtaBanner />
      <PoliticasPublicas />
      <ImtMais />
      <Numeros />
    </>
  );
}
