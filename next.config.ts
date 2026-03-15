import type { NextConfig } from "next";

// Zjistíme, jestli se kód zrovna kompiluje pro GitHub Pages
const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Na GitHubu přidá název repozitáře, u tebe na PC (localhost) nepřidá nic
  basePath: isProd ? '/la-forme-bakery' : '',
  assetPrefix: isProd ? '/la-forme-bakery/' : '',
};

export default nextConfig;
