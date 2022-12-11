<template>
	<div>
		<Header />

		<main class="grid mt-20 mx-auto">
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
@import "./global.scss";

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
