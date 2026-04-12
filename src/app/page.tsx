import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import AdoptionTimeline from "@/components/AdoptionTimeline";
import FitAssessment from "@/components/FitAssessment";
import CaseStudies from "@/components/CaseStudies";
import ProgramGates from "@/components/ProgramGates";
import ServiceDifferentiation from "@/components/ServiceDifferentiation";
import SecurityCompliance from "@/components/SecurityCompliance";
import Pricing from "@/components/Pricing";
import Flow from "@/components/Flow";
import Faq from "@/components/Faq";
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
          <FitAssessment />
          <CaseStudies />
          <ProgramGates />
          <ServiceDifferentiation />
          <SecurityCompliance />
          <Pricing />
          <Flow />
          <Faq />
          <ContactForm />
        </div>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
