import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import ComparisonSection from "@/components/ComparisonSection";
import WhyResults from "@/components/WhyResults";
import SubsidyList from "@/components/SubsidyList";
import CaseStudies from "@/components/CaseStudies";
import News from "@/components/News";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import AdPerformanceComparison from "@/components/AdPerformanceComparison";
import AiDevelopmentWorkflow from "@/components/AiDevelopmentWorkflow";
import AiServiceStrengths from "@/components/AiServiceStrengths";
import TalentDevelopment from "@/components/TalentDevelopment";
import AiEffectiveness from "@/components/AiEffectiveness";
import TrainingTimeline from "@/components/TrainingTimeline";
import SpeedComparison from "@/components/SpeedComparison";
import RstaffingFv from "@/components/RstaffingFv";
import ResourceDownloadCta from "@/components/ResourceDownloadCta";
import ServiceDifferentiation from "@/components/ServiceDifferentiation";
import Pricing from "@/components/Pricing";
import Flow from "@/components/Flow";
import Faq from "@/components/Faq";
import Chatbot from "@/components/Chatbot";

export default function Home() {
  return (
    <div id="page" className="site is-page-home">
      <Header />
      <main id="primary" className="site-main">
        <div>
          <HeroBanner />
          <RstaffingFv />
          <AiServiceStrengths />
          <AiDevelopmentWorkflow />
          <SpeedComparison />
          <AiEffectiveness />
          <AdPerformanceComparison />
          <ComparisonSection />
          <ServiceDifferentiation />
          <TalentDevelopment />
          <WhyResults />
          <TrainingTimeline />
          <Pricing />
          <SubsidyList />
          <CaseStudies />
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
