<script lang="ts">
	import { fade, fly, slide } from 'svelte/transition';
	import ContentItem from '../components/contentItem.svelte';
	import routes from '../routes';
	import Router, { push } from 'svelte-spa-router';
	import linkedinIcon from '/static/images/icons/linkedIn.png';
	import githubIcon from '/static/images/icons/github.png';
	import artThumbnail from '/static/images/bubbles.png';
	import selfImage from '/static/images/me.jpg';
	import bg from '/static/images/galaxyBG.jpg';

	function itemClicked(route: string) {
		focusContent();
		push(`${route}`);
	}

	const focusContent = () => {
		contentFocused = !contentFocused;
	};

	const homeContent: any[] = [
		{ title: 'About', desc: 'About me', image:selfImage, route: '/about' },
		{ title: 'Code', desc: 'My Code Projects', image: bg, route: '/code' },
		{ title: 'Art', desc: 'My Art', image: artThumbnail, route: '/art' },
		{ title: 'Games', desc: 'My Games', image: artThumbnail, route: '/games' },
	];

	let contentFocused = false;
</script>

<div id="main-view" style="background: no-repeat center/100% url({bg});">
	{#if contentFocused}
		<div id="router-container" transition:fly>
			<Router {routes} />
		</div>
		<div
			id="dim-overlay"
			on:click={focusContent}
			on:keydown={focusContent}
			transition:fade={{ duration: 200 }}
		/>
	{/if}
	<div id="header">
		<h1>Brandon Conyers</h1>
	</div>
	<div id="content-box">
		<ul id="content-list">
			{#each homeContent as c}
				<li>
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
					<img src={linkedinIcon} alt="Brandon Conyers' Linkedin page" />
				</a>
			</li>
			<li>
				<a href="https://github.com/Mombasa3d" target="_blank">
					<img src={githubIcon} alt="Brandon Conyers' Github page" />
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
			width: 25%;
			display: flex;
		}
	}

	#social-links {
		padding: 20px 0px;
		width: 100%;
		align-items: center;
		display: flex;
		justify-content: center;
	}

	#router-container {
		z-index: 3;
		width: 70vw;
		position: fixed;
		height: 90vh;
		justify-content: center;
		align-items: center;
		background-color: #444;
		display: flex;
		flex-direction: column;
		padding: 0 5vw;
		border-radius: 15px;
	}

	#router {
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
	}
</style>
