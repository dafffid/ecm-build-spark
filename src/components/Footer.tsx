import logoEcm from "@/assets/logo-ecm-new.svg";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container-ecm px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img
              src={logoEcm}
              alt="E.C.M."
              className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto"
            />
          </div>

          <p className="text-muted-foreground text-sm text-center">
            © {currentYear} E.C.M. - ETUDES CONSTRUCTION MAINTENANCE. Tous droits réservés.
          </p>

          <div className="flex items-center gap-6 text-sm">
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
          </div>
        </div>
      </div>
    </footer>
  );
};
