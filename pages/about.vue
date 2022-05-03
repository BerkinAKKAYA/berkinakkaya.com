<template>
	<NuxtLayout name="layout">
		<div class="container px-8">
			<h1 class="text-2xl page-header"><b>About Me</b></h1>
			<p class="mt-6">
				I am a front-end developer located in Istanbul/Turkey. I'm a
				<b>minimalist</b>, <b>open sourcerer</b> and a <b>vim user</b>. I use
				<a class="link" href="https://archlinux.org/" target="_blank">Arch</a>
				by the way!
			</p>
		</div>
	</NuxtLayout>
</template>

<script>
import VueFeather from "vue-feather";

export default {
	components: { VueFeather },
};
</script>