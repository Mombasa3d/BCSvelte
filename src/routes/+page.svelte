<script lang="ts">
	import { fade } from 'svelte/transition';
	import ContentItem from '../components/contentItem.svelte';
	import { goto } from '$app/navigation';
	import About from './about/about.svelte';
	import Router from 'svelte-spa-router';

	function itemClicked(route: string) {
		focusContent();
	}

	const focusContent = () => {
		contentFocused = true;
	};
	const defocusContent = () => {
		contentFocused = false;
	};

	const testImg = 'src/assets/bubbles.png';
	const homeContent: any[] = [
		{ title: 'About', desc: 'Description here', image: testImg, route: '/about' },
		{ title: 'Code', desc: 'Also another description here', image: testImg, route: '/code' },
		{ title: 'Art', desc: 'Also another description here', image: testImg, route: '/art' },
		{ title: 'Games', desc: 'Also another description here', image: testImg, route: '/games' },
		{ title: 'Blog', desc: 'Also another description here', image: testImg, route: '/blog' }
	];

	let contentFocused = false;

	const routes = {
		'/about': About
	};
</script>

<div id="main-view">
	{#if contentFocused}
		<Router />
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
	<div id="content-box">
		<ul id="content-list">
			{#each homeContent as c}
				<li>
					<!-- ? Might need to change this from an onclick to just a link with a transition?  -->
					<ContentItem
						name={c.title}
						title={c.desc}
						thumbnail={c.image}
						on:click={() => itemClicked(c.route)}
					/>
				</li>
			{/each}
		</ul>
	</div>
	<div id="social-links">
		<ul>
			<li>
				<a href="https://www.linkedin.com/in/brandon-conyers" target="_blank">
					<img src="src\assets\icons\linkedIn.png" alt="Brandon Conyers' Linkedin page" />
				</a>
			</li>
			<li>
				<a href="https://github.com/Mombasa3d" target="_blank">
					<img src="src\assets\icons\github.png" alt="Brandon Conyers' Github page" />
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

	#content-box {
		background-color: #111;
		width: 100%;
		height: 60vh;
		padding: 0%;
		margin: 0%;
	}

	#content-list {
		list-style: none;
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 100%;
		padding: 0%;
		margin: 0%;
		justify-content: center;

		li {
			width: 20%;
			display: flex;
		}
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
</style>
