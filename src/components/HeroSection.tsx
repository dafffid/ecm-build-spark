import { ChevronDown } from "lucide-react";
import photoChantier1 from "@/assets/photo-chantier-1.png";

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
          src={photoChantier1}
          alt="Chantier ECM"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ecm-overlay/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-ecm px-4 md:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-primary font-semibold text-sm md:text-base tracking-widest uppercase mb-4 animate-fade-in-up">
            Depuis 1991
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in-up delay-100">
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
