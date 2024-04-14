<style lang="scss">
nav a {
	opacity: 0.3;
	transition: 0.35s ease;

	&.active {
		font-weight: bold;
	}

	&.active,
	&:hover {
		opacity: 1;
	}
}

/* prettier-ignore */
#mobile_menu {
	position: absolute;
	left: 0;
	top: 120px;
	right: 0;
	height: 100vh;
	max-height: calc(100vh - 120px);
	background: #09182e;
	z-index: 1;

	&:not(.show) {
		display: none;
	}

	a:nth-child(1) { animation-delay: 0.1s; }
	a:nth-child(2) { animation-delay: 0.2s; }
	a:nth-child(3) { animation-delay: 0.3s; }
	a:nth-child(4) { animation-delay: 0.4s; }
	a:nth-child(5) { animation-delay: 0.5s; }
	a:nth-child(6) { animation-delay: 0.6s; }
	a:nth-child(7) { animation-delay: 0.7s; }
	a:nth-child(8) { animation-delay: 0.8s; }
	a:nth-child(9) { animation-delay: 0.9s; }
}

#menu_icon {
	width: 60px;
	height: 45px;
	position: relative;
	transform: scale(0.75) rotate(0deg);
	transition: 0.5s ease-in-out;
	cursor: pointer;

	@media (max-width: 500px) {
		transform: scale(0.6);
	}

	span {
		display: block;
		position: absolute;
		height: 4px;
		width: 100%;
		background: var(--secondary-color);
		border-radius: 9px;
		opacity: 1;
		left: 0;
		transform: rotate(0deg);
		transition: 0.25s ease-in-out;

		&:nth-child(1) {
			top: 0px;
			transform-origin: left center;
		}

		&:nth-child(2) {
			top: 18px;
			transform-origin: left center;
		}

		&:nth-child(3) {
			top: 36px;
			transform-origin: left center;
		}
	}

	&.open span {
		&:nth-child(1) {
			transform: rotate(45deg);
			top: -3px;
			left: 8px;
		}

		&:nth-child(2) {
			width: 0%;
			opacity: 0;
		}

		&:nth-child(3) {
			transform: rotate(-45deg);
			top: 39px;
			left: 8px;
		}
	}
}
</style>

<template>
	<header class="flex flex-wrap items-center justify-between px-8 pt-12 sm:px-12 md:px-16">
		<NuxtLink to="/" class="text-lg text-left md:w-full md:text-center md:text-xl">
			<b>berkinakkaya</b>
			<span class="opacity-25">.com</span>
		</NuxtLink>

		<div id="menu_icon" class="md:hidden" @click="showMobileMenu = !showMobileMenu" :class="{ open: showMobileMenu }">
			<span></span>
			<span></span>
			<span></span>
		</div>
	</header>

	<nav class="justify-center items-center gap-10 mt-10 hidden md:flex">
		<NuxtLink
			v-for="item in navItems"
			:key="item.name"
			class="relative"
			:class="{ active: $route.name == item.name }"
			:to="item.route"
			:target="item.external ? '_blank' : ''"
		>
			{{ item.text }}
			<VueFeather type="external-link" stroke="white" size="16" v-if="item.external" class="absolute -right-5 -top-1"></VueFeather>
		</NuxtLink>
	</nav>

	<div id="mobile_menu" class="px-12 pt-8 sm:px-24 flex flex-col" :class="{ show: showMobileMenu }" @click="showMobileMenu = !showMobileMenu">
		<NuxtLink class="reveal text-xl p-6" v-for="item in navItems" :key="item.name" :class="{ active: $route.name == item.name }" :to="item.route">
			{{ item.text }}
		</NuxtLink>
	</div>
</template>

<script>
import VueFeather from "vue-feather";

export default {
	components: { VueFeather },
	data: () => ({
		showMobileMenu: false,
		activeRoute: "",
		navItems: [
			{ route: "/", name: "index", text: "Home" },
			{ route: "/about", name: "about", text: "About Me" },
			{ route: "/timeline", name: "timeline", text: "Timeline" },
			{ route: "/projects", name: "projects", text: "Projects" },
			{ route: "/contact", name: "contact", text: "Contact" },
			{ route: "https://medium.com/@berkinakkaya", name: "blog", text: "Blog", external: true },
		],
	}),
};
</script>

<style>
.feather {
	stroke: white !important;
}
</style>
