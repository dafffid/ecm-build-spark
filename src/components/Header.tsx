import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoEcm from "@/assets/logo-ecm-nav.png";

const navItems = [
  { label: "Accueil", href: "#accueil" },
  { label: "Notre Métier", href: "#metier" },
  { label: "Nos Activités", href: "#activites" },
  { label: "Nous contacter", href: "#contact" },
];

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("accueil");

  useEffect(() => {
    const handleScroll = () => {
      // Determine active section
      const sections = navItems.map(item => item.href.substring(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background shadow-sm">
      <div className="container-ecm">
        <nav className="flex items-center justify-between h-40 md:h-48 lg:h-56 px-4 md:px-8">
          {/* Logo */}
          <a href="#accueil" onClick={() => handleNavClick("#accueil")} className="flex-shrink-0">
            <img
              src={logoEcm}
              alt="E.C.M. - Etude Construction Maintenance"
              className="h-56 sm:h-72 md:h-[22rem] lg:h-96 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => handleNavClick(item.href)}
                  className={`text-foreground font-medium transition-colors duration-200 hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full py-2 ${
                    activeSection === item.href.substring(1) ? "text-primary after:w-full" : ""
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border animate-fade-in">
            <ul className="flex flex-col py-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className={`w-full text-left px-6 py-3 font-medium transition-colors ${
                      activeSection === item.href.substring(1)
                        ? "text-primary bg-primary/5"
                        : "text-foreground hover:text-primary hover:bg-muted"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};
