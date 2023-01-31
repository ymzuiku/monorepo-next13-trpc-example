const isProd = process.env.NODE_ENV === "production";
module.exports = async (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    experimental: {
      appDir: true,
    },
    reactStrictMode: true,
    swcMinify: true,
    // Note: This experimental feature is required to use NextJS Image in SSG mode.
    // See https://nextjs.org/docs/messages/export-image-api for different workarounds.
    images: {
      unoptimized: true,
    },
    assetPrefix: isProd ? null : `http://127.0.0.1:3000`,
    async rewrites() {
      return [
        {
          source: "/v1/:path*",
          destination: `http://127.0.0.1:3001/v1/:path*`,
        },
      ];
    },
  };
  return nextConfig;
};
