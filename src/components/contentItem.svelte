<script lang="ts">
	import { expoOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';

	const sizeSpring = tweened(0, { duration: 250, easing: expoOut });
	const sizeUp = () => {
		sizeSpring.update((val) => (val = 60));
		console.log('size up');
	};
	const sizeDown = () => {
		sizeSpring.update((val) => (val = 0));
		console.log('size down');
	};

	function rand() {
		return Math.floor(Math.random() * 255 + 1);
	}

	export let name: string;
	export let title: string;
	export let thumbnail: string | undefined;
	export const clickHandle = () => console.log('Clicked');
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	on:click
	id="content-tile"
	style="background-color: rgba({rand()}, {rand()}, {rand()}, 20%) ;"
	on:mouseover={sizeUp}
	on:mouseleave={sizeDown}
	on:focus={sizeUp}
	on:blur={sizeDown}
>
	<div id="content-tile-information">
		<h2>{name}</h2>
	</div>
	<div
		id="tile-image"
		style="height:{$sizeSpring}%; background-image: url({thumbnail}); alt:{title}"
	/>
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
		h2 {
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
