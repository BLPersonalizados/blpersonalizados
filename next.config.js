/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Permite qualquer domínio remoto (ajuste conforme necessário)
      },
    ],
  },
};

module.exports = nextConfig;
