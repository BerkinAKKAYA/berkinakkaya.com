<template>
	<div>
		<Header />

		<main class="grid mt-20 mx-auto">
			<slot />
		</main>

		<footer class="text-center my-20 reveal" style="animation-delay: 1s">
			Inspired by <a href="https://brittanychiang.com/" target="_blank">Brittany Chiang</a>'s portfolio.
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
	place-items: center;
	width: 600px;
	max-width: 90vw;
}

footer {
	color: rgba($color: #fff, $alpha: 0.7);

	a {
		color: #66ffdb;
	}
}
</style>