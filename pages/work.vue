<template>
	<NuxtLayout name="layout">
		<table class="mb-12">
			<thead>
				<tr>
					<th>Category</th>
					<th>Name</th>
					<th>GitHub Link</th>
					<th>Live Link</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="project in projects" :key="project.name">
					<td>{{ project.category }}</td>
					<td>{{ project.name }}</td>
					<td>
						<a target="_blank" :href="project.githubLink" v-if="project.githubLink">GitHub</a>
					</td>
					<td><a target="_blank" :href="project.liveLink" v-if="project.liveLink">Live</a></td>
				</tr>
			</tbody>
		</table>

		<p>https://berkinakkaya.itch.io/</p>

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
	head: () => ({
		title: "Projects | Berkin Akkaya",
	}),
	components: { VueFeather },
	data: () => ({
		projects: [
			{
				name: "Stay In The Shadows",
				category: "Game",
				description: "Stealth Mobile Game",
				technologies: ["Unity", "C#"],
				githubLink: null,
				liveLink: "https://play.google.com/store/apps/details?id=com.BerkinAkkaya.StayintheShadows",
			},
			{
				name: "Split",
				category: "Game",
				description: "An Endless Mobile Game",
				technologies: ["Unity", "C#"],
				githubLink: "https://github.com/BerkinAKKAYA/Split",
				liveLink: "https://play.google.com/store/apps/details?id=com.BerkinAkkaya.Split",
			},
			{
				name: "Jumpy",
				category: "Game",
				description: "Hypercasual Climbing Game",
				technologies: ["Unity", "C#"],
				githubLink: "https://github.com/BerkinAKKAYA/Jumpy",
				liveLink: "https://play.google.com/store/apps/details?id=com.BerkinAkkaya.Jumpy",
			},
			{
				name: "Pete",
				category: "Game",
				description: "Platformer Game",
				technologies: ["Unity", "C#"],
				githubLink: null,
				liveLink: "https://berkinakkaya.itch.io/pete",
			},
			{
				name: "Keep It That Way",
				category: "Game",
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
				description: "Get monthly forecast via terminal. (scrapes accuweather)",
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
				description: "YouTube Client Without Distractions and With Bookmarks",
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
				description: "A digital bullet journal style habit tracker",
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
};
</script>

<style lang="scss">
table {
	th,
	td {
		padding: 5px 15px;
		text-align: left;
	}
}
</style>