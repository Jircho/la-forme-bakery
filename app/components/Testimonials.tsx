import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Markéta N.",
    text: "Vynikající káva, křupavé francouzské máslové pečivo, přátelský personál a hipsterové prostředí. Vracím se sem každý víkend!",
    rating: 5,
    date: "Únor 2026",
  },
  {
    name: "Tomáš K.",
    text: "Klidná část Dejvic, která přímo vybízí k posezení venku i uvnitř. Croissanty jsou nejlepší v Praze, bez diskuze.",
    rating: 5,
    date: "Leden 2026",
  },
  {
    name: "Lucie P.",
    text: "Velmi bohaté pečivo, naprosto dekadentní! Ovocné koláče jsou jako malá umělecká díla. Atmosféra je úžasná.",
    rating: 5,
    date: "Prosinec 2025",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`Hodnocení ${rating} z 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className={
            i < rating
              ? "text-gold fill-gold"
              : "text-border"
          }
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="recenze" className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block font-body text-xs tracking-[0.3em] uppercase text-primary font-semibold mb-3">
            Co říkají naši hosté
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-6">
            Recenze
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto rounded-full mb-8" />

          {/* Overall Rating Badge */}
          <div className="inline-flex items-center gap-4 bg-card rounded-2xl px-6 py-4 shadow-md border border-border/50">
            <div className="text-center">
              <p className="font-heading text-4xl font-bold text-primary">
                4.7
              </p>
              <div className="flex gap-0.5 mt-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={
                      i < 5
                        ? "text-gold fill-gold"
                        : "text-border"
                    }
                    strokeWidth={1.5}
                  />
                ))}
              </div>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-left">
              <p className="font-body text-sm font-semibold text-text">
                Google Recenze
              </p>
              <p className="font-body text-xs text-text-muted">
                547 hodnocení
              </p>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="group bg-card rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-border/50 hover:border-primary/20 relative cursor-pointer"
            >
              {/* Quote Icon */}
              <Quote
                size={32}
                className="text-primary/10 absolute top-6 right-6"
                strokeWidth={1.5}
              />

              <StarRating rating={review.rating} />

              <p className="font-body text-text text-base leading-relaxed mt-4 mb-6">
                &ldquo;{review.text}&rdquo;
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-heading text-sm font-bold text-primary">
                      {review.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <p className="font-body text-sm font-semibold text-text">
                      {review.name}
                    </p>
                    <p className="font-body text-xs text-text-muted">
                      {review.date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
