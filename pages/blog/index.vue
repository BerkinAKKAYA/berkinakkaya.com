<template>
	<ContentList path="/blog" v-slot="{ list }">
		<div v-for="article in list" :key="article._path">
			<a :href="article._path">
				<h2>{{ article.title }}</h2>
			</a>
		</div>
	</ContentList>
</template>

<script>
definePageMeta({ layout: "blog" });

export default {
	head: () => ({
		title: "Blog | Berkin Akkaya",
	}),
};
</script>
