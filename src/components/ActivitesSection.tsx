import activite1 from "@/assets/activite-1.jpg";
import activite2 from "@/assets/activite-2.jpg";
import activite3 from "@/assets/activite-3.jpg";
import activite4 from "@/assets/activite-4.jpg";

const activities = [
  {
    title: "Etudes",
    tagline: "Notre expertise en conception vous accompagne, de l'expression de votre besoin, et tout au long de votre projet.",
    subtitle: "Des compétences maîtrisées pour répondre à vos besoins",
    description:
      "ECM vous accompagne pour étudier les solutions les plus adaptées et les mettre en œuvre. Nos compétences permettent de gérer vos projets au niveau technique et documentaire.",
    items: [
      "Études de conception",
      "Définition sommaire de projet",
      "Études d'exécution",
      "Études de méthodes d'exécution",
      "Plans de récolement",
    ],
  },
  {
    title: "Construction",
    tagline: "Notre savoir-faire nous permet de répondre à toutes vos demandes afin de proposer des prestations adaptées.",
    subtitle: "Des compétences confirmées pour apporter des solutions sur mesure",
    description:
      "ECM réalise les travaux de constructions de structures en maçonnerie et en béton. Notre connaissance du métier et nos équipes expérimentées offrent des prestations de qualité.",
    categories: [
      {
        name: "Génie civil",
        items: ["Fondation", "Mur de soutènement", "Voiles banchés et pose de préfabriqués"],
      },
      {
        name: "Travaux spéciaux",
        items: ["Aménagement et protection hydraulique", "Barrage, travaux en galerie, prise d'eau", "Travaux sur cordes"],
      },
      {
        name: "Génie civil industriel",
        items: ["Réalisation de fosses et caniveaux techniques", "Extension et construction de bâtiments", "Démolition"],
      },
    ],
  },
  {
    title: "Maintenance",
    tagline: "Notre expérience vous apporte des solutions adaptées pour l'entretien et la pérennisation de vos ouvrages.",
    subtitle: "Des compétences spécialisées pour entretenir votre patrimoine",
    description:
      "ECM assure l'entretien, la réparation et le renforcement de vos ouvrages. Notre maîtrise des procédés spéciaux garantit le respect des ouvrages et de leur environnement.",
    categories: [
      {
        name: "Réhabilitation",
        items: ["Confortement de fondations.", "Béton et mortier projeté par voie sèche ou humide mortier projeté.", "Reconstruction de maçonnerie en pierres ou briques.", "Application ou injection de mortier hydraulique.", "Étanchéité."],
      },
      {
        name: "Renforcement",
        items: ["Renforcement de structures béton armé.", "Consolidation des structures par tirants ou injection.", "Renforts par structure béton.", "Élargissement d'ouvrages."],
      },
      {
        name: "Protection",
        items: ["Gabionnage, cloutage, perrés maçonnés.", "Enrochement.", "Ancrage."],
      },
    ],
  },
];

export const ActivitesSection = () => {
  return (
    <section id="activites" className="section-padding bg-background">
      <div className="container-ecm">
        <div className="text-center mb-12">
          <h2 className="heading-section">Nos Activités</h2>
        </div>

        {/* Activity Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {activities.map((activity, index) => (
          <div key={index} className="card-activity">
              <h3 className="text-xl font-bold text-foreground mb-2">{activity.title}</h3>
              <p className="text-sm font-bold text-foreground mb-2">{activity.tagline}</p>
              <p className="text-sm text-primary font-medium mb-4">{activity.subtitle}</p>
              <p className="text-body text-sm mb-6">{activity.description}</p>

              {activity.items && (
                <ul className="space-y-2">
                  {activity.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {activity.categories && (
                <div className="space-y-4">
                  {activity.categories.map((category, i) => (
                    <div key={i}>
                      <h4 className="font-semibold text-foreground text-sm mb-2">{category.name}</h4>
                      <ul className="space-y-1">
                        {category.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <span className="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Gallery - 4 images in a row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img
            src={activite1}
            alt="Travaux de fondation ECM"
            className="rounded-xl shadow-lg w-full h-40 md:h-48 object-cover"
          />
          <img
            src={activite2}
            alt="Construction industrielle ECM"
            className="rounded-xl shadow-lg w-full h-40 md:h-48 object-cover"
          />
          <img
            src={activite3}
            alt="Aménagement hydraulique ECM"
            className="rounded-xl shadow-lg w-full h-40 md:h-48 object-cover"
          />
          <img
            src={activite4}
            alt="Réparation de maçonnerie ECM"
            className="rounded-xl shadow-lg w-full h-40 md:h-48 object-cover"
          />
        </div>
      </div>
    </section>
  );
};
