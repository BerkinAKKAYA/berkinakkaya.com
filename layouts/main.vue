<template>
	<div>
		<Header />

		<main id="main_holder" class="mx-auto my-20">
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

#main_holder {
	display: grid;
	place-items: center;
	width: 600px;
	max-width: 90vw;
}
</style>
