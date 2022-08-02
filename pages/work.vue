<template>
	<NuxtLayout name="layout">
		<p class="text-center">
			<span class="opacity-50">This page is a work in progress. For now, you can visit my </span>
			<b><a href="github.com/berkinakkaya">GitHub</a></b>
		</p>

		<a href="https://github.com/berkinakkaya" target="_blank" class="mt-10">
			<VueFeather type="github" stroke="white" size="72" class="draw draw-delay-500"></VueFeather>
		</a>

		<!--
		<div>
			<NuxtLink to="/work?filter=a">a</NuxtLink>
			<NuxtLink to="/work?filter=b">b</NuxtLink>
			<NuxtLink to="/work?filter=c">c</NuxtLink>
			<NuxtLink to="/work?filter=d">d</NuxtLink>

			<p>work ({{ filter || "all" }})</p>
		</div>
		-->
	</NuxtLayout>
</template>

<script>
import VueFeather from "vue-feather";

export default {
	components: { VueFeather },
	// data: () => ({
	// 	filter: "",
	// }),
	// watch: {
	// 	"$route.query.filter": function (filter) {
	// 		this.filter = filter;
	// 	},
	// },
	// created() {
	// 	this.filter = this.$route.query.filter;
	// },
};
</script>