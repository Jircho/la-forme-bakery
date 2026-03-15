import {
  MapPin,
  Phone,
  Clock,
  Instagram,
  Navigation,
} from "lucide-react";

const hours = [
  { day: "Pondělí – Pátek", time: "8:00 – 19:00" },
  { day: "Sobota", time: "8:00 – 19:00" },
  { day: "Neděle", time: "8:00 – 19:00" },
];

export default function Contact() {
  return (
    <section id="kontakt" className="py-20 md:py-28 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block font-body text-xs tracking-[0.3em] uppercase text-white/60 font-semibold mb-3">
            Přijďte nás navštívit
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Kde nás najdete
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto rounded-full" />
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Address Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/15">
            <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mb-5">
              <MapPin size={22} className="text-gold" strokeWidth={1.5} />
            </div>
            <h3 className="font-heading text-xl font-semibold text-white mb-3">
              Adresa
            </h3>
            <p className="font-body text-white/80 leading-relaxed mb-4">
              Jaselská 266/10
              <br />
              160 00 Praha 6 – Bubeneč
              <br />
              Česká republika
            </p>
            <a
              href="https://maps.google.com/?q=Jaselska+266/10+Praha+6"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer inline-flex items-center gap-2 text-gold hover:text-gold/80 font-body text-sm font-medium transition-colors duration-200"
            >
              <Navigation size={14} />
              Otevřít v mapách
            </a>
          </div>

          {/* Contact Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/15">
            <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mb-5">
              <Phone size={22} className="text-gold" strokeWidth={1.5} />
            </div>
            <h3 className="font-heading text-xl font-semibold text-white mb-3">
              Kontakt
            </h3>
            <div className="space-y-3">
              <a
                href="tel:+420608679000"
                className="cursor-pointer flex items-center gap-3 text-white/80 hover:text-white font-body transition-colors duration-200"
              >
                <Phone size={16} strokeWidth={1.5} />
                +420 608 679 000
              </a>
              <a
                href="https://instagram.com/laformecafe"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer flex items-center gap-3 text-white/80 hover:text-white font-body transition-colors duration-200"
              >
                <Instagram size={16} strokeWidth={1.5} />
                @laformecafe
              </a>
            </div>
          </div>

          {/* Hours Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/15">
            <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mb-5">
              <Clock size={22} className="text-gold" strokeWidth={1.5} />
            </div>
            <h3 className="font-heading text-xl font-semibold text-white mb-3">
              Otevírací doba
            </h3>
            <div className="space-y-2">
              {hours.map((h) => (
                <div
                  key={h.day}
                  className="flex items-center justify-between font-body text-sm"
                >
                  <span className="text-white/70">{h.day}</span>
                  <span className="text-white font-medium">{h.time}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="font-body text-xs text-green-300">
                Právě otevřeno
              </span>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="rounded-2xl overflow-hidden border border-white/15 h-64 md:h-80">
          <iframe
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=cs&amp;q=La%20Forme%20Cafe,%20Jaselsk%C3%A1%20266/10,%20160%2000%20Praha%206+(La%20Forme)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "saturate(0.8) contrast(1.1)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="La Forme Cafe na mapě"
          />
        </div>
      </div>
    </section>
  );
}
