<template>
	<div>
		<Header />

		<main>
			<slot />
		</main>

		<Footer />
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
	width: 600px;
	max-width: 90vw;
	max-height: calc(100vh - 340px);
	height: 100vh;
	margin: 70px auto 50px auto;
	overflow: hidden auto;

	@media (max-width: 720px) {
		margin: 60px auto;
		max-height: calc(100vh - 300px);
	}
}
</style>