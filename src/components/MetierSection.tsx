import logoCertification from "@/assets/logo-certification.png";
import metier1 from "@/assets/metier-1.jpg";
import metier2 from "@/assets/metier-2.jpg";
import metier3 from "@/assets/metier-3.jpg";

export const MetierSection = () => {
  return (
    <section id="metier" className="section-padding bg-secondary scroll-mt-40 md:scroll-mt-48 lg:scroll-mt-56">
      <div className="container-ecm">
        <div className="text-center mb-12">
          <h2 className="heading-section">Notre Métier</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-body">
              <strong className="text-foreground">Forte de 30 ans d'expérience</strong>, E.C.M. (Etudes Construction Maintenance) est un acteur majeur dans le domaine du Génie Civil, spécialisé dans les réparations d'ouvrages.
            </p>
            <p className="text-body">
              Nous sommes spécialisés dans le domaine du génie civil, <strong className="text-foreground">de la consolidation et réparation d'ouvrages d'art et du génie civil industriel</strong>.
            </p>
            <p className="text-body">
              Nous accompagnons des acteurs publics et privés dans leurs projets d'aménagement et de réhabilitation des ouvrages.
            </p>
            <p className="text-body">
              Notre entreprise à taille humaine garantit <strong className="text-foreground">une forte réactivité et une grande souplesse pour répondre aux besoins de nos clients</strong>.
            </p>
            <p className="text-body">
              Depuis 1991, nous avons pu acquérir un savoir-faire et des compétences dans <strong className="text-foreground">les travaux spéciaux</strong>.
            </p>
            <p className="text-body">
              Nous intervenons dans des environnements variés et particulièrement dans des <strong className="text-foreground">milieux difficiles</strong>.
            </p>
            <p className="text-body">
              Située au sud-ouest de Toulouse, nous intervenons principalement en région Occitanie et sur les zones centrales et orientales des Pyrénées.
            </p>
            <p className="text-body">
              Nous vous assurons une <strong className="text-foreground">relation privilégiée avec un interlocuteur de proximité</strong>.
            </p>
            <p className="text-body no-orphan">
              À l'écoute de nos partenaires et clients, nous sommes dans une démarche d'amélioration continue confirmée par une <strong className="text-foreground">certification MASE depuis&nbsp;2015</strong>.
            </p>
          </div>

          {/* Images - 3 images layout */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src={metier1}
              alt="Travaux de génie civil ECM"
              className="rounded-xl shadow-lg w-full h-48 md:h-56 object-cover"
            />
            <img
              src={metier2}
              alt="Réparation d'ouvrages ECM"
              className="rounded-xl shadow-lg w-full h-48 md:h-56 object-cover mt-8"
            />
            <img
              src={metier3}
              alt="Intervention en milieu difficile ECM"
              className="rounded-xl shadow-lg w-full h-48 md:h-56 object-cover col-span-2"
            />
          </div>
        </div>

        {/* Partner Logos */}
        <div className="border-t border-border pt-12">
          <div className="flex justify-center items-center">
            <img
              src={logoCertification}
              alt="Certifications MASE, STRRES, FNTP"
              className="max-w-full h-auto max-h-48 md:max-h-64"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
