<template>
	<NuxtLayout name="layout">
		<div class="holder">
			<h1 class="text-2xl page-header reveal">Study and Experiences</h1>

			<div class="mt-10 timeline-element reveal" style="animation-delay: 0.4s">
				<div class="year">
					<b>2017</b>
					<small class="opacity-50">Age of 16</small>
				</div>

				<div class="seperator"></div>

				<p>
					I quitted high school at 10th grade and continued my education & exam
					preparation at home.
				</p>
			</div>

			<div class="mt-10 timeline-element reveal" style="animation-delay: 0.7s">
				<div class="year">
					<b>2018</b>
					<small class="opacity-50">Age of 17</small>
				</div>

				<div class="seperator"></div>

				<p>
					Joined
					<a
						class="link"
						href="https://ldjam.com/users/berkin/games"
						target="_blank"
					>
						Ludum Dare</a
					>
					events. Built video games by myself and worked with teams.
				</p>
			</div>

			<div class="mt-10 timeline-element reveal" style="animation-delay: 1s">
				<div class="year">
					<b><small>June</small> 2019</b>
					<small class="opacity-50">Age of 18</small>
				</div>

				<div class="seperator"></div>

				<p>
					Started studying <b>Information Security</b> at
					<b>Istanbul Gedik University</b>.
				</p>
			</div>

			<div class="mt-10 timeline-element reveal" style="animation-delay: 1.2s">
				<div class="year">
					<b><small>July</small> 2019</b>
					<small class="opacity-50">Age of 18</small>
				</div>

				<div class="seperator"></div>

				<p>
					Published my first game in
					<a
						class="link"
						href="https://play.google.com/store/apps/developer?id=Berkin+Akkaya"
						target="_blank"
					>
						Google Play</a
					>.
				</p>
			</div>

			<div class="mt-10 timeline-element reveal" style="animation-delay: 1.4s">
				<div class="year">
					<b><small>August</small> 2019</b>
					<small class="opacity-50">Age of 18</small>
				</div>

				<div class="seperator"></div>

				<p>Completed my internship at <b>Gedik Holding</b>.</p>
			</div>

			<div class="mt-10 timeline-element reveal" style="animation-delay: 1.55s">
				<div class="year">
					<b><small>April</small> 2020</b>
					<small class="opacity-50">Age of 19</small>
				</div>

				<div class="seperator"></div>

				<p>
					After my internship, i started working at Gedik Holding as a Front-End
					Developer.
				</p>
			</div>
		</div>
	</NuxtLayout>
</template>

<style lang="scss">
.holder {
	--offset: 30px;
	width: calc(100% - var(--offset) - 30px);
}

.timeline-element {
	display: flex;
	gap: 10px;
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