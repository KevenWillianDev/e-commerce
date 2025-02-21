import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true, // Use true para redirecionamento permanente (301), false para temporário (307)
      },
    ];
  },
};

export default nextConfig;
