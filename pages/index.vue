<template>
	<NuxtLayout name="layout">
		<div id="hero" class="text-center mt-24 md:mt-32 sm:text-left">
			<small class="text-lg opacity-75 color-secondary">Hi, I Am</small>
			<h1 class="text-4xl sm:text-5xl lg:text-6xl mt-2 mb-6 primary-white">
				<b>Berkin AKKAYA</b>
			</h1>
			<p
				class="text-base md:text-lg leading-8 about-text"
				style="max-width: 620px"
			>
				I am a <b class="color-secondary">Front-End Developer</b>. I also
				developed <a href="#">mobile games</a>,
				<a href="#">productivity apps</a>, <a href="#">npm packages</a>,
				<a href="#">cli tools</a> before.
			</p>

			<div class="mt-12 flex gap-12 justify-center sm:justify-start">
				<a href="https://github.com/berkinakkaya" target="_blank">
					<VueFeather type="github" stroke="white" size="64"></VueFeather>
				</a>
				<a href="https://twitter.com/berkinakkaya" target="_blank">
					<VueFeather type="twitter" stroke="white" size="64"></VueFeather>
				</a>
				<a href="https://linkedin.com/in/berkinakkaya" target="_blank">
					<VueFeather type="linkedin" stroke="white" size="64"></VueFeather>
				</a>
			</div>
		</div>
	</NuxtLayout>
</template>

<script>
import VueFeather from "vue-feather";

export default {
	components: { VueFeather },
};
</script>

<style lang="scss">
#hero {
	width: 570px;
	max-width: 100%;
	margin-inline: auto;

	.about-text a {
		color: var(--primary-white);
		position: relative;
		white-space: nowrap;

		&::after {
			content: "";
			width: 100%;
			height: 2px;
			position: absolute;
			left: 0;
			right: 0;
			bottom: -1px;
			transform: rotate(-1.2deg);
			background: var(--primary-white);
			opacity: 0.2;
		}

		&:hover::after {
			transform: rotate(0);
			width: calc(100% + 12px);
			left: -6px;
			bottom: -3px;
			opacity: 0.6;
		}
	}
}

.feather {
	stroke: #66ffdb;
	stroke-width: 1;

	&:hover {
		stroke-width: 2;
		stroke: white;
	}
}
</style>