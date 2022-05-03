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
	min-height: calc(100vh - 400px);
	margin: 40px 0 80px 0;
}
</style>