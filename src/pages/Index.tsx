import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { MetierSection } from "@/components/MetierSection";
import { ActivitesSection } from "@/components/ActivitesSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <MetierSection />
        <ActivitesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
