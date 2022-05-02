<template>
	<div class="mx-12 md:mx-36 my-12">
		<div class="flex justify-between items-center">
			<NuxtLink to="/">
				<h1 class="text-xl"><b>berkinakkaya.dev</b></h1>
			</NuxtLink>

			<nav class="flex justify-between gap-8">
				<a href="#">Blog</a>
				<a href="#">CV</a>
			</nav>
		</div>

		<slot />

		<footer
			class="
				fixed
				left-1
				right-1
				bottom-12
				flex
				justify-center
				items-center
				gap-10
			"
		>
			<button>About</button>
			<button>Experience</button>
			<button>Work</button>
			<button>Contact</button>
		</footer>
	</div>
</template>

<script>
export default {
	mounted() {
		feather.replace();
	},
};
</script>