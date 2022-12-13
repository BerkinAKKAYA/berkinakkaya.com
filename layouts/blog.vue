<template>
	<div>
		<Header />

		<main id="blog_holder">
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
	display: block;
	margin: 40px auto;
	width: 900px;
	max-width: 80vw;
}
</style>
