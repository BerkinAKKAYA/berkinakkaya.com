<template>
	<Head><Title>Blog | Berkin Akkaya</Title></Head>

	<div id="blog_posts" :class="mouseHovering ? 'hovering-a-post' : ''">
		<a
			v-for="post in POSTS"
			class="post-holder"
			:class="mouseHovering === post.slug ? 'hovering' : ''"
			:href="`/blog/${post.slug}`"
			@mouseenter="mouseHovering = post.slug"
			@mouseleave="mouseHovering = null"
		>
			<span class="post-date">{{ FormatDate(post.date) }}</span>
			<h3 class="post-title">{{ post.title }}</h3>

			<div class="tags">
				<span class="tag-pill" v-for="tag in post.tags">{{ tag }}</span>
			</div>
		</a>
	</div>

	<!--
	<ContentList path="/blog" v-slot="{ list }">
		<div v-for="article in list" :key="article._path">
			<a :href="article._path"><h2>{{ article.title }}</h2></a>
		</div>
	</ContentList>
	-->
</template>

<script>
import POSTS from "~/content/blog";
import { ShortMonthNames } from "~/content/months";

definePageMeta({ layout: "blog", title: "Blog | Berkin Akkaya" });

export default {
	data: () => ({
		mouseHovering: null,
		POSTS,
	}),
	methods: {
		FormatDate(dateObj) {
			const day = dateObj.getUTCDate();
			const month = dateObj.getUTCMonth();
			const year = dateObj.getUTCFullYear();
			return `${day} ${ShortMonthNames[month]}, ${year}`;
		},
	},
};
</script>

<style lang="scss">
#blog_posts {
	&.hovering-a-post {
		.post-holder {
			opacity: 0.55;

			&.hovering {
				opacity: 1;
			}
		}
	}

	.post-holder {
		display: block;
		margin: 36px 0;
		opacity: 0.85;
		transition: 0.3s;

		&.hovering {
			transform: translateX(4px);
		}

		.post-date {
			font-size: 0.9em;
			opacity: 0.6;
		}

		.post-title {
			font-size: 1.4em;

			@media (max-width: 800px) {
				font-size: 1.2em;
			}
		}

		.tags {
			display: flex;
			gap: 6px;
			margin-top: 3px;

			.tag-pill {
				border: 1px solid white;
				color: white;
				opacity: 0.4;
				padding: 0 6px;
				border-radius: 10px;
				font-size: 0.7em;
			}
		}
	}
}
</style>
