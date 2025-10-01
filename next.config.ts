import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
    images: {
        remotePatterns: [new URL("https://image.tmdb.org/t/p/**")]
    },
    experimental: {
        optimizePackageImports: ["lucide-react", "react-icons", "framer-motion"]
    },
}

export default nextConfig;
