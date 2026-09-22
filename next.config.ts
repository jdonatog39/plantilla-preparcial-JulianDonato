import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Dominios externos permitidos para <Image />. Vacío por ahora:
    // si el parcial pide imágenes remotas, se descomenta y se ajusta el hostname.
    remotePatterns: [
      // {
      //   protocol: 'https',
      //   hostname: 'ejemplo.com',
      //   pathname: '/ruta/**',
      // },
    ],
  },
};

export default nextConfig;
