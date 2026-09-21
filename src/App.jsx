import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ComunicacaoPage from "./pages/ComunicacaoPage";
import EstatisticasPage from "./pages/EstatisticasPage";
import FaqPage from "./pages/FaqPage";
import HubPage from "./pages/HubPage";
import MissaoValoresPage from "./pages/MissaoValoresPage";
import TextPageRoute from "./pages/TextPageRoute";
import RecrutamentoPage from "./pages/RecrutamentoPage";
import OrganizacaoPage from "./pages/OrganizacaoPage";
import QueroSerCondutorPage from "./pages/QueroSerCondutorPage";
import PrimeiraCartaPage from "./pages/PrimeiraCartaPage";
import AvaliacaoPsicologicaPage from "./pages/AvaliacaoPsicologicaPage";
import RevalidacaoCartaPage from "./pages/RevalidacaoCartaPage";
import Emissao2ViaPage from "./pages/Emissao2ViaPage";
import SubstituicaoCartaPage from "./pages/SubstituicaoCartaPage";
import CertidaoAutenticidadePage from "./pages/CertidaoAutenticidadePage";
import LicencaInternacionalPage from "./pages/LicencaInternacionalPage";
import CartaoEstacionamentoPage from "./pages/CartaoEstacionamentoPage";
import CancelamentoMatriculaPage from "./pages/CancelamentoMatriculaPage";
import CertidoesVeiculosPage from "./pages/CertidoesVeiculosPage";
import CancelamentoTemporarioPage from "./pages/CancelamentoTemporarioPage";
import CertificadoMatriculaPage from "./pages/CertificadoMatriculaPage";
import ClassificacaoPortagensPage from "./pages/ClassificacaoPortagensPage";
import DocumentosApreendidosPage from "./pages/DocumentosApreendidosPage";
import EconomiaCombustivelPage from "./pages/EconomiaCombustivelPage";
import IdentificacaoVeiculosPage from "./pages/IdentificacaoVeiculosPage";
import RegistoPropriedadePage from "./pages/RegistoPropriedadePage";
import VeiculosEletricosPage from "./pages/VeiculosEletricosPage";
import ContactosPage from "./pages/ContactosPage";
import NalPage from "./pages/NalPage";
import ImtOnlineLoginPage from "./pages/ImtOnlineLoginPage";
import AcompanhamentoPage from "./pages/AcompanhamentoPage";
import AdminLoginPage from "./pages/admin/AdminLoginPage";
import AdminLayout from "./pages/admin/AdminLayout";
import AdminOverviewPage from "./pages/admin/AdminOverviewPage";
import AdminDossiersPage from "./pages/admin/AdminDossiersPage";
import AdminDossierDetailPage from "./pages/admin/AdminDossierDetailPage";

export default function App() {
  const { pathname } = useLocation();
  const standalone = pathname === "/imt-online" || pathname.startsWith("/admin");

  return (
    <>
      {!standalone && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/comunicacao" element={<ComunicacaoPage />} />
        <Route path="/estatisticas" element={<EstatisticasPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/hub/:slug" element={<HubPage />} />
        <Route path="/quem-somos/missao-e-valores" element={<MissaoValoresPage />} />
        <Route path="/texto/:slug" element={<TextPageRoute />} />
        <Route path="/recursos-humanos/recrutamento" element={<RecrutamentoPage />} />
        <Route path="/recursos-humanos/organizacao" element={<OrganizacaoPage />} />
        <Route path="/condutores/quero-ser-condutor" element={<QueroSerCondutorPage />} />
        <Route path="/condutores/primeira-carta-de-conducao" element={<PrimeiraCartaPage />} />
        <Route path="/condutores/avaliacao-psicologica" element={<AvaliacaoPsicologicaPage />} />
        <Route path="/condutores/revalidacao-da-carta-de-conducao" element={<RevalidacaoCartaPage />} />
        <Route path="/condutores/emissao-de-2-a-via" element={<Emissao2ViaPage />} />
        <Route path="/condutores/substituicao-da-carta-de-conducao" element={<SubstituicaoCartaPage />} />
        <Route path="/condutores/certidao-de-autenticidade" element={<CertidaoAutenticidadePage />} />
        <Route path="/condutores/licenca-internacional-de-conducao" element={<LicencaInternacionalPage />} />
        <Route path="/condutores/cartao-de-estacionamento" element={<CartaoEstacionamentoPage />} />
        <Route path="/veiculos/cancelamento-matricula" element={<CancelamentoMatriculaPage />} />
        <Route path="/veiculos/certidoes-de-veiculos" element={<CertidoesVeiculosPage />} />
        <Route path="/veiculos/cancelamento-temporario-matricula" element={<CancelamentoTemporarioPage />} />
        <Route path="/veiculos/certificado-matricula" element={<CertificadoMatriculaPage />} />
        <Route path="/veiculos/classificacao-em-portagens" element={<ClassificacaoPortagensPage />} />
        <Route path="/veiculos/documentos-apreendidos" element={<DocumentosApreendidosPage />} />
        <Route path="/veiculos/economia-de-combustivel" element={<EconomiaCombustivelPage />} />
        <Route path="/veiculos/identificacao-veiculos" element={<IdentificacaoVeiculosPage />} />
        <Route path="/veiculos/registo-de-propriedade-pedidos-apreensao" element={<RegistoPropriedadePage />} />
        <Route path="/veiculos/veiculos-eletricos" element={<VeiculosEletricosPage />} />
        <Route path="/contactos" element={<ContactosPage />} />
        <Route path="/nal-novo-aeroporto-de-lisboa" element={<NalPage />} />
        <Route path="/imt-online" element={<ImtOnlineLoginPage />} />
        <Route path="/acompanhamento" element={<AcompanhamentoPage />} />
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminOverviewPage />} />
          <Route path="dossiers" element={<AdminDossiersPage />} />
          <Route path="dossiers/:id" element={<AdminDossierDetailPage />} />
        </Route>
      </Routes>
      {!standalone && <Footer />}
    </>
  );
}
