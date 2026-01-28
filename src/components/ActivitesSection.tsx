import { FileText, HardHat, Wrench } from "lucide-react";
import photoChantier4 from "@/assets/photo-chantier-4.png";
import photoChantier5 from "@/assets/photo-chantier-5.png";

const activities = [
  {
    icon: FileText,
    title: "Étude",
    subtitle: "Des compétences maîtrisées pour répondre à vos besoins",
    description:
      "ECM vous accompagne pour étudier les solutions les plus adaptées et les mettre en œuvre. Nos compétences permettent de gérer vos projets au niveau technique et documentaire.",
    items: [
      "Définition sommaire de projet",
      "Études d'exécution",
      "Études de méthodes d'exécution",
      "Plans de récolement",
    ],
  },
  {
    icon: HardHat,
    title: "Construction",
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
    icon: Wrench,
    title: "Maintenance",
    subtitle: "Des compétences spécialisées pour entretenir votre patrimoine",
    description:
      "ECM assure l'entretien, la réparation et le renforcement de vos ouvrages. Notre maîtrise des procédés spéciaux garantit le respect des ouvrages et de leur environnement.",
    categories: [
      {
        name: "Réhabilitation",
        items: ["Confortement de fondations", "Béton et mortier projeté", "Reconstruction de maçonnerie", "Étanchéité"],
      },
      {
        name: "Renforcement",
        items: ["Renforcement de structures béton armé", "Consolidation par tirants ou injection", "Élargissement d'ouvrages"],
      },
      {
        name: "Protection",
        items: ["Gabionnage, cloutage, perrés maçonnés", "Enrochement", "Ancrage"],
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
          <p className="text-body max-w-3xl mx-auto">
            De l'étude à la maintenance, nous vous accompagnons à chaque étape de votre projet
          </p>
        </div>

        {/* Activity Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {activities.map((activity, index) => (
            <div key={index} className="card-activity">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <activity.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{activity.title}</h3>
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

        {/* Gallery */}
        <div className="grid md:grid-cols-2 gap-6">
          <img
            src={photoChantier4}
            alt="Chantier de construction ECM"
            className="rounded-xl shadow-lg w-full h-64 md:h-80 object-cover"
          />
          <img
            src={photoChantier5}
            alt="Travaux de maintenance ECM"
            className="rounded-xl shadow-lg w-full h-64 md:h-80 object-cover"
          />
        </div>
      </div>
    </section>
  );
};
