<template>
	<NuxtLayout name="layout">
		<div class="category-navigation mb-4">
			<NuxtLink v-for="(category, i) in filters" :key="category" :to="'/work?filter=' + category" class="reveal" :style="'animation-delay: ' + i * 0.2 + 's'">
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
	</NuxtLayout>
</template>

<script>
import VueFeather from "vue-feather";

export default {
	head: () => ({
		title: "Projects | Berkin Akkaya",
	}),
	components: { VueFeather },
	data: () => ({
		filter: "Web",
		filters: ["Games", "CLI", "Web", "NPM"],
		projects: [
			{
				name: "Stay In The Shadows",
				category: "Games",
				description: "Stealth Mobile Games",
				technologies: ["Unity", "C#"],
				githubLink: null,
				liveLink: "https://play.google.com/store/apps/details?id=com.BerkinAkkaya.StayintheShadows",
			},
			{
				name: "Split",
				category: "Games",
				description: "An Endless Mobile Games",
				technologies: ["Unity", "C#"],
				githubLink: "https://github.com/BerkinAKKAYA/Split",
				liveLink: "https://play.google.com/store/apps/details?id=com.BerkinAkkaya.Split",
			},
			{
				name: "Jumpy",
				category: "Games",
				description: "Hypercasual Climbing Games",
				technologies: ["Unity", "C#"],
				githubLink: "https://github.com/BerkinAKKAYA/Jumpy",
				liveLink: "https://play.google.com/store/apps/details?id=com.BerkinAkkaya.Jumpy",
			},
			{
				name: "Pete",
				category: "Games",
				description: "Platformer Games",
				technologies: ["Unity", "C#"],
				githubLink: null,
				liveLink: "https://berkinakkaya.itch.io/pete",
			},
			{
				name: "Keep It That Way",
				category: "Games",
				description: "Ludum Dare Application",
				technologies: ["Unity", "C#"],
				githubLink: null,
				liveLink: "https://berkinakkaya.itch.io/keep-it-that-way",
			},
			{
				name: "cli-timer",
				category: "CLI",
				description: "Stopwatch / Timer on Terminal",
				technologies: ["C"],
				githubLink: "https://github.com/BerkinAKKAYA/cli-timer",
				liveLink: null,
			},
			{
				name: "Weather Scraper",
				category: "CLI",
				description: "Get monthly forecast via terminal",
				technologies: ["Python", "Selenium"],
				githubLink: "https://github.com/BerkinAKKAYA/WeatherScraper",
				liveLink: null,
			},
			{
				name: "pythonls",
				category: "CLI",
				description: "ls alternative inspired by colorls",
				technologies: ["Python"],
				githubLink: "https://github.com/BerkinAKKAYA/pythonls",
				liveLink: null,
			},
			{
				name: "Pomolog",
				category: "Web",
				description: "Track your pomodoros with monthly charts",
				technologies: ["Pure JavaScript", "SCSS", "Firebase", "PWA"],
				githubLink: "https://github.com/BerkinAKKAYA/Pomolog",
				liveLink: "https://pomolog-berkinakkaya.web.app",
			},
			{
				name: "Vueweeter",
				category: "Web",
				description: "Realtime twitter clone",
				technologies: ["Vue", "Vuefire", "Firebase"],
				githubLink: "https://github.com/BerkinAKKAYA/vueweeter",
				liveLink: "https://berkinakkaya.github.io/vueweeter",
			},
			{
				name: "Focused YouTube",
				category: "Web",
				description: "YouTube Client Without Distractions",
				technologies: ["Svelte", "Firebase"],
				githubLink: "https://focused-yt.web.app",
			},
			{
				name: "bChat",
				category: "Web",
				description: "WhatsApp Clone on Web",
				technologies: ["Svelte", "Firebase", "PWA"],
				githubLink: "https://github.com/BerkinAKKAYA/bChat",
				githubLink: "https://berkinakkaya.github.io/bChat",
			},
			{
				name: "Habit Tracker",
				category: "Web",
				description: "Bullet Journal style habit tracker",
				technologies: ["Svelte", "Firebase"],
				githubLink: "https://github.com/BerkinAKKAYA/HabitTracker",
				liveLink: "https://habittracker-brkn.web.app",
			},
			{
				name: "Timeline",
				category: "Web",
				description: "Most Minimalistic Calendar Ever",
				technologies: ["Svelte", "Firebase"],
				githubLink: "https://github.com/BerkinAKKAYA/Timeline-Svelte",
				liveLink: "https://timeline-berkin.web.app",
			},
			{
				name: "Prisma Blog",
				category: "Web",
				description: "A Blog Example",
				technologies: ["React", "Next", "Next Auth", "Prisma", "PostgreSQL", "Material UI"],
				githubLink: "https://github.com/BerkinAKKAYA/prisma-blog",
				liveLink: "https://prisma-blog-flame.vercel.app",
			},
			{
				name: "berkinakkaya.dev",
				category: "Web",
				description: "This Website",
				technologies: ["Vue", "Tailwind"],
				githubLink: "https://github.com/BerkinAKKAYA/berkinakkaya.dev",
				liveLink: "https://berkinakkaya.dev",
			},
			{
				name: "Svelte Text Scramble",
				category: "NPM",
				description: "Implemented the scramble effect to svelte-typewriter",
				technologies: ["Svelte"],
				githubLink: "https://github.com/henriquehbr/svelte-typewriter",
				liveLink: "https://github.com/BerkinAKKAYA/you-have-been-hacked",
			},
			{
				name: "svelte-image-gallery",
				category: "NPM",
				description: "NPM Package with over 5K views in madewithsvelte.com",
				technologies: ["Svelte"],
				githubLink: "https://github.com/BerkinAKKAYA/svelte-image-gallery",
				liveLink: null,
			},
		],
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
			this.$router.push("/work");
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