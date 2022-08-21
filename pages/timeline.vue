<style lang="scss">
.holder {
	--offset: 30px;
	width: calc(100% - var(--offset) - 30px);
}

.timeline-element {
	display: flex;
	gap: 16px;
	align-items: center;
	margin-left: calc(var(--offset) * -1);

	.year {
		min-width: 92px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-end;
		white-space: nowrap;

		b small {
			opacity: 0.7;
			font-size: 0.7em;
			font-style: italic;
		}
	}

	.seperator {
		min-width: 2px;
		height: 52px;
		background: white;
	}

	@media (max-width: 720px) {
		flex-direction: column;
		align-items: flex-start;
		gap: 5px;
		margin-left: 0;

		.year {
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
			gap: 10px;
		}

		.seperator {
			display: none;
		}

		p {
			position: relative;
			margin-left: 14px;

			&::before {
				content: "";
				position: absolute;
				top: 0;
				bottom: 0;
				left: -12px;
				width: 2px;
				background: white;
				opacity: 0.5;
			}
		}
	}
}
</style>

<template>
	<NuxtLayout name="layout">
		<div class="holder">
			<h1 class="text-2xl page-header reveal">My Timeline</h1>
			<p class="mt-3 mb-12 text-sm text-gray-500 reveal" style="animation-delay: 0.4s">Big events in my life, my works, studies and experiences...</p>

			<div class="mt-10 timeline-element reveal" v-for="(experience, i) in experiences" :key="i" :style="'animation-delay: ' + (0.8 + i * 0.3) + 's'">
				<div class="year">
					<b>
						<small v-if="experience.month">
							{{ months[experience.month - 1] }}
						</small>

						{{ experience.year }}
					</b>

					<small class="opacity-50">Age of {{ experience.year - 2001 }}</small>
				</div>

				<div class="seperator"></div>

				<p v-html="experience.content"></p>
			</div>
		</div>
	</NuxtLayout>
</template>

<script>
export default {
	head: () => ({
		title: "Experiences | Berkin Akkaya",
	}),
	data: () => ({
		months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
		experiences: [
			{
				year: 2017,
				month: null,
				content: "I quitted high school at 10th grade.",
			},
			{
				year: 2018,
				month: null,
				content: "Joined <a class='link' href='https://ldjam.com/users/berkin/games'>Ludum Dare</a> events. Built video games by myself and worked with teams.",
			},
			{
				year: 2019,
				month: 6,
				content: "Started studying <b>Information Security</b> at <b>Istanbul Gedik University</b>.",
			},
			{
				year: 2019,
				month: 7,
				content:
					"Published my first game in <a class='link' href='https://play.google.com/store/apps/developer?id=Berkin+Akkaya' target='_blank'>Google Play</a>.",
			},
			{
				year: 2019,
				month: 8,
				content: "Completed my internship at <b>Gedik Holding</b>.",
			},
			{
				year: 2020,
				month: 4,
				content: "I started working at <b>Gedik Holding</b> as a <b>Front-End Developer</b>.",
			},
			{
				year: 2022,
				month: 6,
				content: "Started working at Trendyol Group.",
			},
		],
	}),
};
</script>