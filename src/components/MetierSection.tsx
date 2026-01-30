import logoCertification from "@/assets/logo-certification.svg";
import metier1 from "@/assets/metier-1.jpg";
import metier2 from "@/assets/metier-2.jpg";
import metier3 from "@/assets/metier-3.jpg";

export const MetierSection = () => {
  return (
    <section id="metier" className="section-padding bg-secondary">
      <div className="container-ecm">
        <div className="text-center mb-12">
          <h2 className="heading-section">Notre Métier</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-body">
              <strong className="text-foreground">Forte de 30 ans d'expérience</strong>, E.C.M. (Etude Construction Maintenance) est un acteur majeur dans le domaine du Génie Civil spécialisée dans les réparations d'ouvrages.
            </p>
            <p className="text-body">
              Notre expertise en conception vous accompagne, de l'expression de votre besoin, et tout au long de votre projet.
            </p>
            <p className="text-body">
              Nous sommes spécialisés dans le domaine du <strong className="text-foreground">génie civil</strong>, de la <strong className="text-foreground">consolidation et réparation d'ouvrages d'art</strong> et du <strong className="text-foreground">génie civil industriel</strong>.
            </p>
            <p className="text-body">
              Nous accompagnons des acteurs publics et privés dans leurs projets d'aménagement et de réhabilitation des ouvrages. Notre entreprise à taille humaine garantit une forte réactivité et une grande souplesse pour répondre aux besoins de nos clients.
            </p>
            <p className="text-body">
              Depuis 1991, nous avons pu acquérir un savoir-faire et des compétences dans les travaux spéciaux. Nous intervenons dans des environnements variés et particulièrement dans des milieux difficiles.
            </p>
            <p className="text-body">
              Située au <strong className="text-foreground">sud-ouest de Toulouse</strong>, nous intervenons principalement en <strong className="text-foreground">région Occitanie</strong> et sur les zones centrales et orientales des Pyrénées. Nous vous assurons une relation privilégiée avec un interlocuteur de proximité.
            </p>
            <p className="text-body no-orphan">
              À l'écoute de nos partenaires et clients, nous sommes dans une démarche d'amélioration continue confirmée par une <strong className="text-foreground">certification MASE depuis&nbsp;2015.</strong>
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
              className="max-w-full h-auto max-h-24 md:max-h-32"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
