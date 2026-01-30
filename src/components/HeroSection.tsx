import { ChevronDown } from "lucide-react";
import photoAccueil from "@/assets/photo-accueil.jpg";

export const HeroSection = () => {
  const scrollToMetier = () => {
    const element = document.getElementById("metier");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="accueil"
      className="relative flex flex-col min-h-screen pt-40 md:pt-48 lg:pt-56"
    >
      {/* Title Section - Always visible and prioritized */}
      <div className="relative z-10 bg-foreground py-8 md:py-12 lg:py-16">
        <div className="container-ecm px-4 md:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight animate-fade-in-up">
            Génie Civil<br />
            <span className="text-primary">Consolidation et réparation</span><br />
            d'ouvrages d'art
          </h1>
        </div>
      </div>

      {/* Image Section - Full display on desktop, adapted on mobile */}
      <div className="relative flex-1 w-full bg-muted min-h-[40vh] md:min-h-[50vh] lg:min-h-[60vh]">
        <img
          src={photoAccueil}
          alt="Chantier ECM"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToMetier}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 text-foreground/60 hover:text-primary transition-colors animate-bounce"
        aria-label="Défiler vers le bas"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};
