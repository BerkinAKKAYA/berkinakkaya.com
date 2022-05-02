<template>
	<NuxtLayout name="layout">
		<div id="hero" class="text-center mt-24 md:mt-32 sm:text-left">
			<small class="text-lg opacity-75 color-secondary">Hi, I Am</small>
			<h1 class="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl mt-2 mb-6">
				<b>Berkin AKKAYA</b>
			</h1>
			<p class="text-lg leading-8" style="max-width: 620px">
				I am a <b class="color-secondary">Front-End Developer</b>. I also
				developed <a href="#">mobile games</a>,
				<a href="#">productivity apps</a>, <a href="#">npm packages</a>,
				<a href="#">cli tools</a> before.
			</p>
		</div>
	</NuxtLayout>
</template>

<style lang="scss" scoped>
#hero a {
	color: hsl(216, 65%, 85%);
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
		background: hsl(216, 65%, 85%);
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
</style>