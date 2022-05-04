<template>
	<header
		class="flex flex-wrap items-center justify-between px-12 pt-12 sm:px-16"
	>
		<NuxtLink to="/">
			<h1 class="text-lg sm:text-xl"><b>berkinakkaya.dev</b></h1>
		</NuxtLink>

		<nav class="desktop">
			<NuxtLink to="/blog">Blog</NuxtLink>
			&nbsp;
			<a href="https://berkinakkaya.dev/resume.pdf" target="_blank"> Resume </a>
		</nav>

		<div class="mobile" @click="showMobileMenu = !showMobileMenu">
			<VueFeather type="menu" stroke="white" size="36"></VueFeather>
		</div>

		<div
			id="mobile_menu"
			class="px-12 sm:px-16"
			:class="{ show: showMobileMenu }"
		>
			test
		</div>
	</header>
</template>

<style lang="scss">
.mobile {
	display: none;
}

#mobile_menu {
	position: absolute;
	left: 0;
	top: 120px;
	right: 0;
	min-height: 100vh;
	background: #09182e;
	z-index: 1;

	&:not(.show) {
		display: none;
	}
}

@media (max-width: 720px) {
	.mobile {
		display: unset;
	}
	nav.desktop {
		display: none;
	}
}
</style>

<script>
import VueFeather from "vue-feather";

export default {
	components: { VueFeather },
	data: () => ({
		showMobileMenu: false,
	}),
};
</script>