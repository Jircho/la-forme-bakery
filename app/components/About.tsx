import Image from "next/image";
import { Clock, Dog, Heart, Coffee, ShoppingBag } from "lucide-react";

const features = [
  {
    icon: Coffee,
    title: "Specialty káva",
    description: "Pečlivě vybraná zrna pražená lokálními pražírnami",
  },
  {
    icon: Clock,
    title: "Otevřeno od 8:00",
    description: "Každý den včetně víkendů a svátků",
  },
  {
    icon: Dog,
    title: "Dog friendly",
    description: "Vaši čtyřnozí přátelé jsou u nás vítáni",
  },
  {
    icon: Heart,
    title: "LGBTQ+ friendly",
    description: "Bezpečné a přátelské prostředí pro všechny",
  },
  {
    icon: ShoppingBag,
    title: "S sebou i na místě",
    description: "Pohodlné sezení uvnitř i na naší zahrádce",
  },
];

export default function About() {
  return (
    <section id="o-nas" className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block font-body text-xs tracking-[0.3em] uppercase text-primary font-semibold mb-3">
            Náš příběh
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-6">
            Více než jen kavárna
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto rounded-full" />
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Image */}
          <div className="relative rounded-3xl overflow-hidden group">
            <div className="aspect-[4/3] relative">
              <img
                src="/la-forme-bakery/images/about.png"
                alt="Útulný interiér kavárny La Forme v Bubenči"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-lg">
              <p className="font-heading text-2xl font-bold text-primary">
                Od 2015
              </p>
              <p className="text-xs text-text-muted font-body">
                Kavárna v Bubenči
              </p>
            </div>
          </div>

          {/* Text */}
          <div>
            <h3 className="font-heading text-2xl md:text-3xl font-semibold text-text mb-6 leading-snug">
              Kde se snoubí francouzská pekařská tradice s moderní pražskou
              kávovou kulturou
            </h3>
            <p className="font-body text-text-muted text-base md:text-lg leading-relaxed mb-6">
              La Forme je místo, kde se zastavíte a nadechnete. Naše
              řemeslné croissanty pečeme každé ráno z toho nejkvalitnějšího
              francouzského másla, a naši baristé připravují specialty kávu s
              láskou a precizností.
            </p>
            <p className="font-body text-text-muted text-base md:text-lg leading-relaxed mb-8">
              Ať už hledáte klidný koutek na práci, místo pro přátelské
              setkání nebo si chcete jen tak vychutnat dokonalý croissant na
              naší zahrádce — u nás se budete cítit jako doma.
            </p>

            {/* Stats */}
            <div className="flex gap-8">
              <div>
                <p className="font-heading text-3xl md:text-4xl font-bold text-primary">
                  4.7
                </p>
                <p className="text-sm text-text-muted font-body">
                  hodnocení ★
                </p>
              </div>
              <div className="w-px bg-border" />
              <div>
                <p className="font-heading text-3xl md:text-4xl font-bold text-primary">
                  547
                </p>
                <p className="text-sm text-text-muted font-body">recenzí</p>
              </div>
              <div className="w-px bg-border" />
              <div>
                <p className="font-heading text-3xl md:text-4xl font-bold text-primary">
                  8:00
                </p>
                <p className="text-sm text-text-muted font-body">
                  otevíráme denně
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group bg-card rounded-2xl p-5 text-center shadow-sm hover:shadow-md transition-all duration-200 border border-border/50 hover:border-primary/20 cursor-pointer"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200">
                  <Icon size={22} className="text-primary" strokeWidth={1.5} />
                </div>
                <h4 className="font-body text-sm font-semibold text-text mb-1">
                  {feature.title}
                </h4>
                <p className="font-body text-xs text-text-muted leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
