<template>
	<div>
		<Header />

		<main>
			<slot />
		</main>

		<footer class="text-center mb-10">
			<div class="flex justify-center items-center gap-10">
				<NuxtLink to="/about">About</NuxtLink>
				<NuxtLink to="/experience">Experience</NuxtLink>
				<NuxtLink to="/work">Work</NuxtLink>
				<NuxtLink to="/contact">Contact</NuxtLink>
			</div>

			<div class="mt-6">
				Made with
				<VueFeather type="heart" stroke="white" size="14"></VueFeather>
				by Berkin AKKAYA
			</div>

			<small class="mt-1 primary-white opacity-80">
				Inspired by the portfolio of
				<a href="https://brittanychiang.com" target="_blank" class="link"
					>Brittany Chiang</a
				>.
			</small>
		</footer>
	</div>
</template>

<script>
import VueFeather from "vue-feather";

export default {
	components: { VueFeather },
};
</script>

<style lang="scss">
main {
	display: grid;
	place-items: center;
	min-height: calc(100vh - 360px);
	margin-block: 60px;
}
</style>