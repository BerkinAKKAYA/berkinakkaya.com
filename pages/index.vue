<template>
	<NuxtLayout name="layout">
		<div id="hero" class="text-center sm:text-left sm:ml-10 md:ml-20">
			<div class="inner">
				<small class="text-lg opacity-75 color-secondary reveal" style="animation-delay: 0.1s">Hi, I Am</small>
				<h1 class="text-3xl sm:text-4xl lg:text-5xl mt-2 mb-6 primary-white reveal" style="animation-delay: 0.5s">
					<b>Berkin AKKAYA</b>
				</h1>

				<p class="text-lg about-text mb-2 reveal" style="animation-delay: 1s">
					I am a <b class="color-secondary">Front-End Developer</b>. I also developed <NuxtLink to="/projects?filter=games">mobile games</NuxtLink>,
					<NuxtLink to="/projects?filter=npm">npm packages</NuxtLink> and
					<NuxtLink to="/projects?filter=cli">cli tools</NuxtLink>
					before.
				</p>

				<div class="mt-12 flex gap-8 justify-center sm:gap-12 sm:justify-start flex-wrap">
					<a href="https://github.com/berkinakkaya" target="_blank">
						<VueFeather type="github" stroke="white" size="52" class="draw draw-delay-500"></VueFeather>
					</a>
					<a href="https://twitter.com/berkinakkaya" target="_blank">
						<VueFeather type="twitter" stroke="white" size="52" class="draw draw-delay-1000"></VueFeather>
					</a>
					<a href="https://linkedin.com/in/berkinakkaya" target="_blank">
						<VueFeather type="linkedin" stroke="white" size="52" class="draw draw-delay-1500"></VueFeather>
					</a>
				</div>
			</div></div
	></NuxtLayout>
</template>

<script>
import VueFeather from "vue-feather";

export default {
	head: () => ({
		title: "Berkin Akkaya",
	}),
	components: { VueFeather },
};
</script>

<style lang="scss">
#hero {
	@media (max-width: 640px) {
		max-width: 410px;
		text-align: center;
	}

	.about-text a {
		color: var(--primary-white);
		position: relative;
		white-space: nowrap;

		&::after {
			content: "";
			height: 2px;
			position: absolute;
			left: 0;
			right: 0;
			bottom: -1px;
			transform: rotate(-1deg);
			border-bottom: 2px dashed var(--primary-white);
			opacity: 0.3;
			transition: 0.3s ease;
		}

		&:hover::after {
			transform: rotate(0);
			border-bottom: 2px solid var(--primary-white);
			opacity: 0.6;
			bottom: -3px;
		}
	}
}

.feather {
	stroke: #66ffdb;
	stroke-width: 1;
	transition: 0.5s ease;

	&:hover {
		stroke-width: 1.2;
		stroke: white;
	}
}

.about-text {
	color: #8892b0;
}
</style>
