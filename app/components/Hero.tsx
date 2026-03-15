import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <img
        src="/la-forme-cafe/images/hero.png"
        alt="Interiér kavárny La Forme"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-primary/80" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pb-20 md:pb-12">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-xs sm:text-sm font-body font-medium px-4 py-2 rounded-full mb-8 tracking-wide uppercase">
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          Praha 6 — Bubeneč
        </div>

        {/* Main Heading */}
        <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] mb-6 tracking-tight">
          La Forme
          <span className="block text-gold text-3xl sm:text-4xl md:text-5xl font-normal italic mt-2">
            Cafe & Bakery
          </span>
        </h1>

        {/* Tagline */}
        <p className="font-body text-lg sm:text-xl md:text-2xl text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Výjimečná specialty káva a řemeslné francouzské pečivo{" "}
          <span className="text-gold">v srdci Prahy</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#menu"
            className="cursor-pointer group bg-gold hover:bg-gold/90 text-white font-body font-semibold text-base px-8 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2"
          >
            Prohlédnout menu
            <ChevronDown
              size={18}
              className="group-hover:translate-y-0.5 transition-transform duration-200"
            />
          </a>
          <a
            href="#kontakt"
            className="cursor-pointer bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-body font-medium text-base px-8 py-4 rounded-full transition-all duration-200 border border-white/25 hover:border-white/40"
          >
            Kde nás najdete
          </a>
        </div>

        {/* Quick Info */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-6 text-white/60 text-sm font-body">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            Otevřeno denně 8:00 – 19:00
          </span>
          <span className="hidden sm:block w-px h-4 bg-white/30" />
          <span>Dog & LGBTQ+ friendly</span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <a
          href="#o-nas"
          className="cursor-pointer flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors duration-300"
          aria-label="Posunout dolů"
        >
          <span className="text-xs font-body tracking-widest uppercase">
            Objevte více
          </span>
          <ChevronDown size={20} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
