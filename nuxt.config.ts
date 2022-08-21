import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	"typescript": { shim: false },
	"modules": ['@nuxtjs/tailwindcss'],
	"css": ['@/layouts/global.scss'],
	"vite.server.watch.usePolling": true,
	"app": {
		head: {
			link: [
				{ rel: 'icon', sizes: "192x192", href: '/favicon.ico' },
				{ rel: 'shortcut icon', type: "image/x-icon", href: '/favicon.ico' },
				{ rel: 'apple-touch-icon', type: "image/x-icon", href: '/favicon.ico' },
			]
		}
	}
})