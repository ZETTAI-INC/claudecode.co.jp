import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CaseTabs from "./CaseTabs";

export const metadata: Metadata = {
  title: "事例・活用事例 | CLAUDE CODE リスキリング研修",
};

export default function CasePage() {
  return (
    <div id="page" className="site font-sans bg-white pb-10">
      <Header />
      <main id="primary" className="site-main">
        <CaseTabs />
      </main>
      <Footer />
    </div>
  );
}
