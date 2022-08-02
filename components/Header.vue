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
</style>

<template>
	<header class="flex flex-wrap items-center justify-between px-12 pt-12 md:px-16">
		<NuxtLink to="/" class="text-lg text-left md:w-full md:text-center md:text-xl">
			<b>berkinakkaya.dev</b>
		</NuxtLink>

		<div class="md:hidden" @click="showMobileMenu = !showMobileMenu">
			<VueFeather type="menu" stroke="white" size="36"></VueFeather>
		</div>
	</header>

	<nav class="justify-center items-center gap-10 mt-10 hidden md:flex">
		<NuxtLink v-for="item in navItems" :key="item.name" :class="{ active: $route.name == item.name }" :to="item.route">
			{{ item.text }}
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
			{ route: "/about", name: "about", text: "About" },
			{ route: "/experience", name: "experience", text: "Experience" },
			{ route: "/work", name: "work", text: "Projects" },
			{ route: "/contact", name: "contact", text: "Contact" },
			{ route: "/blog", name: "blog", text: "Blog" },
		],
	}),
};
</script>