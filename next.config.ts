import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Dominios externos permitidos para <Image />. Vacío por ahora:
    // si el parcial pide imágenes remotas, se descomenta y se ajusta el hostname.
    remotePatterns: [
      {
      protocol: 'https',
      hostname: 'dog.ceo',
      pathname: '/api/breed/<breed>/images/random',
      },
    ],
  },
};

export default nextConfig;
