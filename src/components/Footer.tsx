import logoEcm from "@/assets/logo-ecm.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container-ecm px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img
              src={logoEcm}
              alt="E.C.M."
              className="h-10 w-auto brightness-0 invert"
            />
          </div>

          <p className="text-primary-foreground/70 text-sm text-center">
            © {currentYear} E.C.M. - Etude Construction Maintenance. Tous droits réservés.
          </p>

          <div className="flex items-center gap-6 text-sm">
            <a href="#accueil" className="text-primary-foreground/70 hover:text-primary transition-colors">
              Accueil
            </a>
            <a href="#metier" className="text-primary-foreground/70 hover:text-primary transition-colors">
              Notre Métier
            </a>
            <a href="#activites" className="text-primary-foreground/70 hover:text-primary transition-colors">
              Activités
            </a>
            <a href="#contact" className="text-primary-foreground/70 hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
