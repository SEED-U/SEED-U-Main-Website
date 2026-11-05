import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import FocusSection from "./components/FocusSection";
import CTABanner from "./components/CTABanner";
import TeamSection from "./components/TeamSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <div className="section-divider" />
        <AboutSection />
        <div className="section-divider" />
        <FocusSection />
        <CTABanner />
        <div className="section-divider" />
        <TeamSection />
        <div className="section-divider" />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
