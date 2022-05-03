<template>
	<div>
		<Header />

		<main>
			<slot />
		</main>

		<footer
			class="
				fixed
				left-0
				right-0
				bottom-0
				flex
				justify-center
				items-center
				gap-10
			"
		>
			<NuxtLink to="/about">About</NuxtLink>
			<NuxtLink to="/experience">Experience</NuxtLink>
			<NuxtLink to="/work">Work</NuxtLink>
			<NuxtLink to="/contact">Contact</NuxtLink>
		</footer>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss">
header {
	height: 120px;
}

main {
	height: calc(100vh - 180px);
	margin-top: 120px;
	display: grid;
	place-items: center;
}

footer {
	backdrop-filter: blur(5px);
	height: 60px;

	button {
		text-shadow: 2px 2px 6px rgba($color: #000, $alpha: 0.6);
	}
}
</style>