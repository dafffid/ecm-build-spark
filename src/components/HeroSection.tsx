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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={photoAccueil}
          alt="Chantier ECM"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-ecm px-4 md:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in-up">
            Génie Civil<br />
            <span className="text-primary">Consolidation et réparation</span><br />
            d'ouvrages d'art
          </h1>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToMetier}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-primary-foreground/60 hover:text-primary transition-colors animate-bounce"
        aria-label="Défiler vers le bas"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};
