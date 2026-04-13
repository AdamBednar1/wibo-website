import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import CaseStudies from "@/components/CaseStudies";
import AiAssistant from "@/components/AiAssistant";
import Dashboards from "@/components/Dashboards";
import ContentSection from "@/components/ContentSection";
import WiboStudios from "@/components/WiboStudios";
import ProfileSteps from "@/components/ProfileSteps";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <CaseStudies />
        <AiAssistant />
        <Dashboards />
        <ContentSection />
        <WiboStudios />
        <ProfileSteps />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
