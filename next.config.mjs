/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverMinification: false,
    esmExternals: "loose",
  },
};

export default nextConfig;
