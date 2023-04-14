<script lang="ts">
	import { circIn, cubicIn, cubicInOut, linear } from 'svelte/easing';
	import { spread } from 'svelte/internal';
	import { spring, tweened } from 'svelte/motion';

	function rand() {
		return Math.floor(Math.random() * 255 + 1);
	}
	export let name: string;
	export let title: string;
	export let thumbnail: string | undefined;

	const activeAnimate = () => (active = !active);

	const sizeSpring = tweened(0, { duration: 200, easing: linear });
	const sizeIn = () => {
		sizeSpring.update((val) => (val = 60));
	};
	const sizeOut = () => {
		sizeSpring.update((val) => (val = 0));
	};

	let active = true;
</script>

<div
	id="content-tile"
	style="background-color: rgba({rand()}, {rand()}, {rand()}, 20%) ;"
	{title}
	on:mouseover={sizeIn}
	on:mouseleave={sizeOut}
>
	<div id="content-tile-information">
		<h3>{name}</h3>
	</div>
	<div id="tile-image" style="background-image: url({thumbnail}); height:{$sizeSpring}%" />
</div>

<style lang="scss">
	#content-tile {
		height: 100%;
		width: 97%;
		padding: 0px;
		margin: 0px 6px;
		align-items: center;
		justify-content: center;
		display: flex;
		flex-direction: column;
	}

	#content-tile-information {
		h3 {
			text-align: center;
			font-size: 38px;
			color: white;
			text-shadow: 4px 1px #000;
			font-family: 'Prompt', cursive;
		}
	}

	#tile-image {
		width: 100%;
		margin: 0%;
		background-size: cover;
		background-position: center;
	}
</style>
