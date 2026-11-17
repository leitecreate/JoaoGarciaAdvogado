import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // As fotos entram em PNG e esta é a única compressão: não baixar nem recomprimir antes.
  images: { qualities: [90] },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
