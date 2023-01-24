/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		deviceSizes: [320, 640, 750, 828, 1080, 1200],
		remotePatterns: [
			{
				protocol: "http",
				hostname: "placekitten.com",
				port: "",
				// pathname: "/**",
			},
		],
	},
	experimental: {
		appDir: true,
	},
};

module.exports = nextConfig;
