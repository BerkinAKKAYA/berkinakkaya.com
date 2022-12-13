<template>
	<div>
		<Header />

		<main class="grid mt-20 mx-auto" id="main_holder">
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
	place-items: center;
	width: 600px;
	max-width: 90vw;
}
</style>
