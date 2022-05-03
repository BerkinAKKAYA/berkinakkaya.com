<template>
	<footer class="text-center">
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
</template>

<style lang="scss" scoped>
footer {
	height: 100px;
	margin-bottom: 50px;
}
</style>

<script>
import VueFeather from "vue-feather";

export default {
	components: { VueFeather },
};
</script>