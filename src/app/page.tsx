import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import ComparisonSection from "@/components/ComparisonSection";
import ServiceDescription from "@/components/ServiceDescription";
import Services from "@/components/Services";
import SubsidyList from "@/components/SubsidyList";
import RelatedServices from "@/components/RelatedServices";
import CaseStudies from "@/components/CaseStudies";
import News from "@/components/News";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div id="page" className="site is-page-home">
      <Header />
      <main id="primary" className="site-main">
        <div>
          <HeroBanner />
          <ComparisonSection />
          <ServiceDescription />
          <Services />
          <SubsidyList />
          <RelatedServices />
          <CaseStudies />
          <News />
        </div>
      </main>
      <Footer />
    </div>
  );
}
