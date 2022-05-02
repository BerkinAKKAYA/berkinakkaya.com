import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	typescript: {
		shim: false
	},
	css: [
		'@/layouts/global.scss'
	],
	modules: ['@nuxtjs/tailwindcss'],
	vite: {
		server: {
			watch: {
				usePolling: true
			}
		},
	},
})
