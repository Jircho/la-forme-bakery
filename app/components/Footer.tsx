import { Instagram, Heart } from "lucide-react";

const quickLinks = [
  { label: "O nás", href: "#o-nas" },
  { label: "Menu", href: "#menu" },
  { label: "Recenze", href: "#recenze" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Footer() {
  return (
    <footer className="bg-primary-dark py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <a href="#" className="cursor-pointer inline-block" aria-label="La Forme — zpět na úvod">
              <span className="font-heading text-2xl font-bold text-white">
                La Forme
              </span>
              <span className="block text-[10px] text-white/50 tracking-[0.3em] uppercase font-body">
                Cafe & Bakery
              </span>
            </a>
            <p className="font-body text-white/50 text-sm mt-4 max-w-xs leading-relaxed">
              Výjimečná specialty káva a řemeslné francouzské pečivo v klidném
              srdci Prahy 6 – Bubeneč.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">
              Rychlé odkazy
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="cursor-pointer font-body text-sm text-white/50 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-body text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">
              Sledujte nás
            </h4>
            <a
              href="https://instagram.com/laformecafe"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer inline-flex items-center gap-2 text-white/50 hover:text-white font-body text-sm transition-colors duration-200"
            >
              <Instagram size={18} strokeWidth={1.5} />
              @laformecafe
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white/40">
            © {new Date().getFullYear()} La Forme Cafe & Bakery. Všechna práva
            vyhrazena.
          </p>
          <p className="font-body text-xs text-white/40 flex items-center gap-1">
            Vytvořeno s{" "}
            <Heart
              size={12}
              className="text-gold fill-gold"
              strokeWidth={1.5}
            />{" "}
            v Praze
          </p>
        </div>
      </div>
    </footer>
  );
}
