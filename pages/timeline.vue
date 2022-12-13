<template>
	<Head><Title>Timeline | Berkin Akkaya</Title></Head>

	<div class="holder">
		<h1 class="text-2xl page-header reveal">Timeline</h1>
		<p class="mt-3 mb-12 text-sm text-gray-500 reveal" style="animation-delay: 0.4s">Big events in my life, my works, studies and experiences...</p>

		<div class="mt-10 timeline-element reveal" v-for="(event, i) in events" :key="i" :style="'animation-delay: ' + (0.8 + i * 0.3) + 's'">
			<div class="year">
				<b>
					<small v-if="event.month">
						{{ monthNames[event.month - 1] }}
					</small>

					{{ event.year }}
				</b>

				<small class="opacity-50">Age of {{ event.year - 2001 }}</small>
			</div>

			<div class="seperator"></div>

			<p v-html="event.content"></p>
		</div>
	</div>
</template>

<script>
import Events from "~~/content/timeline-events";
import { MonthNames } from "~~/content/months";

definePageMeta({ layout: "main" });

export default {
	data: () => ({
		monthNames: MonthNames,
		events: Events,
	}),
};
</script>

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
