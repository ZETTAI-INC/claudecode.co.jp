import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import RecommendSection from "@/components/RecommendSection";
import ComparisonSection from "@/components/ComparisonSection";
import ServiceDescription from "@/components/ServiceDescription";
import WhyResults from "@/components/WhyResults";
import Services from "@/components/Services";
import SubsidyList from "@/components/SubsidyList";
import RelatedServices from "@/components/RelatedServices";
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
import RecruitKnowhow from "@/components/RecruitKnowhow";
import RstaffingFv from "@/components/RstaffingFv";

export default function Home() {
  return (
    <div id="page" className="site is-page-home">
      <Header />
      <main id="primary" className="site-main">
        <div>
          <HeroBanner />
          <RecommendSection />
          <ServiceDescription />
          <AiDevelopmentWorkflow />
          <AiServiceStrengths />
          <AdPerformanceComparison />
          <AiEffectiveness />
          <SpeedComparison />
          <WhyResults />
          <Services />
          <TrainingTimeline />
          <TalentDevelopment />
          <SubsidyList />
          <RelatedServices />
          <CaseStudies />
          <News />
          <ComparisonSection />
          <RecruitKnowhow />
          <ContactForm />
          <RstaffingFv />
        </div>
      </main>
      <Footer />
    </div>
  );
}
