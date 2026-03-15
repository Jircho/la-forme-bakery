import type { Metadata } from "next";
import { Bodoni_Moda, Jost } from "next/font/google";
import "./globals.css";

const bodoniModa = Bodoni_Moda({
  variable: "--font-heading",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jost = Jost({
  variable: "--font-body",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "La Forme Cafe & Bakery | Kavárna a pekárna v Praze",
  description:
    "Výjimečná káva a francouzské pečivo v srdci Prahy 6. Řemeslné croissanty, máslové pečivo a specialty káva v útulném prostředí. Otevřeno denně od 8:00.",
  keywords: [
    "kavárna Praha",
    "pekárna Praha 6",
    "croissanty Praha",
    "specialty káva",
    "La Forme",
    "Bubeneč",
    "francouzské pečivo",
  ],
  openGraph: {
    title: "La Forme Cafe & Bakery",
    description:
      "Výjimečná káva a francouzské pečivo v srdci Prahy 6. Řemeslné croissanty a specialty káva.",
    type: "website",
    locale: "cs_CZ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className={`${bodoniModa.variable} ${jost.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
