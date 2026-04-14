import Header from "@/components/Header";
import FitAssessment from "@/components/FitAssessment";
import ReadinessCheck from "@/components/ReadinessCheck";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export const metadata = {
  title: "適正診断 | Claude Code研修",
  description:
    "御社がClaude Code研修に向いているか、30秒でチェックできます。向いている会社・向いていない会社の条件と、導入準備チェックリストをご用意しました。",
};

export default function FitCheckPage() {
  return (
    <div id="page" className="site">
      <Header />
      <main id="primary" className="site-main">
        <FitAssessment />
        <ReadinessCheck />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
