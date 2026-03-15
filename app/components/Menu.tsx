import Image from "next/image";

const categories = [
  {
    id: "coffee",
    title: "Specialty Káva",
    subtitle: "Pečlivě vybraná zrna",
    items: [
      {
        name: "Espresso",
        description: "Klasické single-origin espresso s bohatou chutí",
        price: "65 Kč",
      },
      {
        name: "Flat White",
        description: "Hedvábná textura mléka s dvojitým espressem",
        price: "95 Kč",
      },
      {
        name: "Pour Over",
        description: "Filtrovaná káva pro milovníky čistých chutí",
        price: "110 Kč",
      },
    ],
    image: "/la-forme-cafe/images/coffee.png",
    imageAlt: "Latte art v La Forme kavárně",
  },
  {
    id: "croissants",
    title: "Croissanty",
    subtitle: "Pečené každé ráno",
    items: [
      {
        name: "Máslový croissant",
        description: "Klasický francouzský croissant z pravého másla",
        price: "75 Kč",
      },
      {
        name: "Čokoládový croissant",
        description: "S belgickou hořkou čokoládou uvnitř",
        price: "85 Kč",
      },
      {
        name: "Mandlový croissant",
        description: "Plněný mandlovou náplní, dozlatova zapečený",
        price: "95 Kč",
      },
    ],
    image: "/la-forme-cafe/images/croissant.png",
    imageAlt: "Řemeslné máslové croissanty",
  },
  {
    id: "pastries",
    title: "Pečivo & Dezerty",
    subtitle: "Umělecká díla na talíři",
    items: [
      {
        name: "Ovocný koláč",
        description:
          "Sezónní ovoce na křehkém korpusu s vanilkovým krémem",
        price: "120 Kč",
      },
      {
        name: "Pain au chocolat",
        description: "Tradiční francouzská vločka s čokoládou",
        price: "80 Kč",
      },
      {
        name: "Citronový tart",
        description: "Křupavý základ s lehkým citronovým krémem",
        price: "110 Kč",
      },
    ],
    image: "/la-forme-cafe/images/pastry.png",
    imageAlt: "Ovocný dezert z pekárny La Forme",
  },
];

export default function MenuSection() {
  return (
    <section id="menu" className="py-20 md:py-28 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block font-body text-xs tracking-[0.3em] uppercase text-primary font-semibold mb-3">
            Naše nabídka
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-6">
            Co u nás ochutnáte
          </h2>
          <p className="font-body text-text-muted text-lg max-w-2xl mx-auto">
            Každý den čerstvě připravené s láskou a péčí. Používáme pouze
            prémiové suroviny a tradiční francouzské postupy.
          </p>
          <div className="w-16 h-1 bg-gold mx-auto rounded-full mt-6" />
        </div>

        {/* Menu Categories */}
        <div className="space-y-16 md:space-y-24">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                index % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              {/* Image Side */}
              <div
                className={`relative rounded-3xl overflow-hidden group ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <div className="aspect-square relative">
                  <img
                    src={category.image}
                    alt={category.imageAlt}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Menu Items Side */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <span className="font-body text-xs tracking-[0.2em] uppercase text-primary/60 font-medium">
                  {category.subtitle}
                </span>
                <h3 className="font-heading text-3xl md:text-4xl font-bold text-text mt-1 mb-8">
                  {category.title}
                </h3>

                <div className="space-y-6">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="group bg-card rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-200 border border-border/50 hover:border-primary/20 cursor-pointer"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h4 className="font-body text-base font-semibold text-text group-hover:text-primary transition-colors duration-200">
                            {item.name}
                          </h4>
                          <p className="font-body text-sm text-text-muted mt-1 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                        <span className="font-heading text-lg font-bold text-primary whitespace-nowrap">
                          {item.price}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
