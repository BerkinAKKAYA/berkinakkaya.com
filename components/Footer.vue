<template>
	<footer class="text-center px-5">
		<nav class="justify-center items-center gap-10">
			<NuxtLink to="/"> Home </NuxtLink>
			<NuxtLink to="/about"> About </NuxtLink>
			<NuxtLink to="/experience"> Experience </NuxtLink>
			<NuxtLink to="/work"> Projects </NuxtLink>
			<NuxtLink to="/contact"> Contact </NuxtLink>
		</nav>

		<div class="mt-6">
			Made with
			<img
				src="../resources/heart.svg"
				width="14"
				style="display: inline; filter: invert(1); padding-bottom: 4px"
			/>
			by Berkin AKKAYA
		</div>

		<small class="mt-1 primary-white opacity-80">
			Inspired by the portfolio of
			<a href="https://brittanychiang.com" target="_blank" class="link"
				>Brittany Chiang</a
			>.
		</small>
	</footer>
</template>

<style lang="scss">
svg {
	stroke: white !important;
}

footer nav {
	display: flex;

	@media (max-width: 720px) {
		display: none;
	}
}
</style>

<script>
import VueFeather from "vue-feather";

export default {
	components: { VueFeather },
};
</script>