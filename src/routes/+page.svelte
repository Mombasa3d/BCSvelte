<script lang="ts">
	import ContentBoxMain from '../components/contentBoxMain.svelte';
	import { fade } from 'svelte/transition';

	export const focusContent = () => {
		contentFocused = true;
	};

	export const defocusContent = () => {
		contentFocused = false;
	};

	let contentFocused = true;
</script>

<div id="main-view">
	{#if contentFocused}
		<div
			id="dim-overlay"
			on:click={defocusContent}
			on:keydown={defocusContent}
			transition:fade={{ duration: 200 }}
		/>
	{/if}
	<div id="header">
		<h1>Brandon Conyers</h1>
		<!-- <h2>Developer - Artist</h2> -->
	</div>
	<ContentBoxMain />
	<div id="social-links">
		<ul>
			<li>
				<a href="https://www.linkedin.com/in/brandon-conyers" target="_blank">
					<img src="src\assets\icons\linkedIn.png" alt="Brandon Conyers' Linkedin page" />
				</a>
			</li>
			<li>
				<a href="https://github.com/Mombasa3d">
					<img src="src\assets\icons\github.png" alt="Brandon Conyers' Linkedin page" />
				</a>
			</li>
		</ul>
	</div>
</div>

<style lang="scss">
	#header {
		height: 10vw;
		justify-content: center;
		align-items: center;
		display: flex;
		flex-direction: column;
	}
	#main-view {
		background-color: black;
		width: 100%;
		height: 100%;
		padding: 0;
		margin: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
	#dim-overlay {
		background-color: rgba(0, 0, 0, 0.5);
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		z-index: 2;
		backdrop-filter: blur(5px);
	}

	h1 {
		color: white;
		font-family: 'Prompt', cursive;
		font-size: 50px;
	}

	ul {
		list-style: none;
	}

	li {
		color: white;
		display: inline;
	}

	img {
		width: 100px;
		height: 100px;
		background-color: white;
	}
	// #home-content-box {
	// 	width: 100vw;
	// 	height: 58vh;
	// 	background-color: #333;
	// }
</style>
