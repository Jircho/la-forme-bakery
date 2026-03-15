"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "O nás", href: "#o-nas" },
  { label: "Menu", href: "#menu" },
  { label: "Recenze", href: "#recenze" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
      role="navigation"
      aria-label="Hlavní navigace"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="cursor-pointer group"
            aria-label="La Forme — zpět na úvod"
          >
            <span className="font-heading text-2xl md:text-3xl font-bold text-white tracking-wide">
              La Forme
            </span>
            <span className="block text-[10px] md:text-xs text-white/70 tracking-[0.3em] uppercase font-body">
              Cafe & Bakery
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="cursor-pointer text-white/80 hover:text-white font-body text-sm font-medium tracking-wide uppercase transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+420608679000"
              className="cursor-pointer bg-white/15 hover:bg-white/25 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-200 backdrop-blur-sm border border-white/20"
            >
              Zavolejte nám
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden cursor-pointer text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
            aria-label={isOpen ? "Zavřít menu" : "Otevřít menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-80 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-primary-dark/90 backdrop-blur-lg rounded-2xl p-4 space-y-1 border border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer block text-white/90 hover:text-white hover:bg-white/10 font-body text-base font-medium px-4 py-3 rounded-xl transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+420608679000"
              onClick={() => setIsOpen(false)}
              className="cursor-pointer block text-center bg-gold/90 hover:bg-gold text-white font-medium px-4 py-3 rounded-xl transition-all duration-200 mt-2"
            >
              Zavolejte nám
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
