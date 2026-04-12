import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import AdoptionTimeline from "@/components/AdoptionTimeline";
import FitAssessment from "@/components/FitAssessment";
import ReadinessCheck from "@/components/ReadinessCheck";
import CaseStudies from "@/components/CaseStudies";
import ProgramGates from "@/components/ProgramGates";
import WhyResults from "@/components/WhyResults";
import ServiceDifferentiation from "@/components/ServiceDifferentiation";
import AiServiceStrengths from "@/components/AiServiceStrengths";
import AiDevelopmentWorkflow from "@/components/AiDevelopmentWorkflow";
import TalentDevelopment from "@/components/TalentDevelopment";
import SecurityCompliance from "@/components/SecurityCompliance";
import Pricing from "@/components/Pricing";
import SubsidyList from "@/components/SubsidyList";
import RstaffingFv from "@/components/RstaffingFv";
import ResourceDownloadCta from "@/components/ResourceDownloadCta";
import Flow from "@/components/Flow";
import Faq from "@/components/Faq";
import News from "@/components/News";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

export default function Home() {
  return (
    <div id="page" className="site is-page-home">
      <Header />
      <main id="primary" className="site-main">
        <div>
          <HeroBanner />
          <AdoptionTimeline />
          <RstaffingFv />
          <FitAssessment />
          <ReadinessCheck />
          <AiServiceStrengths />
          <AiDevelopmentWorkflow />
          <CaseStudies />
          <ProgramGates />
          <ServiceDifferentiation />
          <TalentDevelopment />
          <WhyResults />
          <SecurityCompliance />
          <Pricing />
          <SubsidyList />
          <Flow />
          <Faq />
          <News />
          <ResourceDownloadCta />
          <ContactForm />
        </div>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
