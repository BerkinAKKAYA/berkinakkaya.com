<template>
	<div class="category-navigation mb-4">
		<NuxtLink v-for="(category, i) in filters" :key="category" :to="'/projects?filter=' + category" class="reveal" :style="'animation-delay: ' + i * 0.2 + 's'">
			<button :class="filter === category ? 'opacity-100' : 'opacity-50'">{{ category }}</button>
		</NuxtLink>
	</div>

	<div class="mb-12">
		<p class="text-center opacity-25 mt-2 text-sm">{{ projects.filter((x) => x.category === filter).length }} projects listed</p>

		<div
			v-for="(project, i) in projects.filter((x) => x.category === filter)"
			:key="project.name"
			class="my-8 reveal"
			:style="'animation-delay: ' + i * 0.2 + 's'"
		>
			<p class="opacity-50 text-sm">{{ project.description }}</p>

			<h3 class="text-lg">
				<b>{{ project.name }}</b>
			</h3>

			<div class="mt-3 flex gap-5">
				<a :href="project.githubLink" target="_blank">
					<VueFeather type="github" stroke="white" size="30" class="draw"></VueFeather>
				</a>

				<a :href="project.liveLink" target="_blank">
					<VueFeather type="external-link" stroke="white" size="30" class="draw"></VueFeather>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
import VueFeather from "vue-feather";
import Projects from "~~/content/projects";

definePageMeta({ layout: "main" });

export default {
	head: () => ({
		title: "Projects | Berkin Akkaya",
	}),
	components: { VueFeather },
	data: () => ({
		filter: "Web",
		filters: ["Games", "CLI", "Web", "NPM"],
		projects: Projects,
	}),
	watch: {
		"$route.query.filter": function (filter) {
			this.filter = this.filters.includes(filter) ? filter : "Web";
		},
	},
	created() {
		const filter = this.$route.query.filter;
		if (filter && this.filters.includes(filter)) {
			this.filter = filter;
		} else {
			this.$router.push("/projects");
		}
	},
};
</script>

<style lang="scss">
.category-navigation {
	max-width: 100%;
	overflow-x: auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-block: 1px solid rgba($color: #fff, $alpha: 0.4);

	button {
		white-space: nowrap;
		padding: 16px;
		margin: 0 8px;
		color: white;
	}
}
</style>
