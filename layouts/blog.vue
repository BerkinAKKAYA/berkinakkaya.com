<template>
	<div>
		<Header />

		<main id="blog_holder" class="mx-auto mt-10 mb-20">
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
@import "./markdown.css";

#blog_holder {
	display: inline-block;
	max-width: 80vw;
	transform: translateX(-50%);
	left: 50%;
	position: relative;
}
</style>
