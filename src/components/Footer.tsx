import logoEcm from "@/assets/logo-ecm-nav.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container-ecm px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <img
              src={logoEcm}
              alt="E.C.M."
              className="h-auto w-48 sm:w-56 md:w-64 lg:w-72 object-contain"
            />
          </div>

          <div className="text-muted-foreground text-sm text-center">
            <p>© {currentYear} E.C.M. - ETUDES CONSTRUCTION MAINTENANCE.</p>
            <p>Tous droits réservés.</p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm">
            <a href="#accueil" className="text-muted-foreground hover:text-primary transition-colors">
              Accueil
            </a>
            <a href="#metier" className="text-muted-foreground hover:text-primary transition-colors">
              Notre Métier
            </a>
            <a href="#activites" className="text-muted-foreground hover:text-primary transition-colors">
              Nos Activités
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
              Nous contacter
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};
