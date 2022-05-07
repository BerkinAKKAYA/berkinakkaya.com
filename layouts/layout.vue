<template>
	<div>
		<Header />

		<main class="grid my-32 md:my-32 mx-auto">
			<slot />
		</main>
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
</style>