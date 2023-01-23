const isProd = process.env.NODE_ENV === "production";
module.exports = async (phase, { defaultConfig }) => {
  let internalHost = null;
  if (!isProd) {
    const { internalIpV4 } = await import("internal-ip");
    internalHost = await internalIpV4();
  }
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
    // assetPrefix: isProd ? null : `http://${internalHost}:3000`,
    async rewrites() {
      return [
        {
          source: "/v1/:path*",
          destination: `http://${internalHost}:3001/v1/:path*`,
        },
      ];
    },
  };
  return nextConfig;
};
