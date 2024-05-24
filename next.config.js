/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	webpack: (config, { isServer }) => {
		if (!isServer) {
			config.devtool = false
		}
		return config
	},
}

module.exports = nextConfig
