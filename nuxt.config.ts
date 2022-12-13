export default {
	ssr: false,
	modules: ["@nuxtjs/tailwindcss", "@nuxt/content"],
	app: {
		head: {
			link: [
				{ rel: "icon", sizes: "192x192", href: "/favicon.ico" },
				{ rel: "shortcut icon", type: "image/x-icon", href: "/favicon.ico" },
				{ rel: "apple-touch-icon", type: "image/x-icon", href: "/favicon.ico" },
			],
		},
	},
};
