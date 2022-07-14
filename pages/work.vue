<template>
	<NuxtLayout name="layout">
		<a href="github.com/berkinakkaya">GitHub</a>
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
export default {
	data: () => ({
		filter: "",
	}),
	watch: {
		"$route.query.filter": function (filter) {
			this.filter = filter;
		},
	},
	created() {
		this.filter = this.$route.query.filter;
	},
};
</script>