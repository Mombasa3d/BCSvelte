<script lang="ts">
	import ContentItem from './contentItem.svelte';
	import focusContent from '../routes/+page.svelte';
	const testImg = 'src/assets/bubbles.png';
	const content: any[] = [
		{ title: 'About', desc: 'Description here', image: testImg },
		{ title: 'Code', desc: 'Also another description here', image: testImg },
		{ title: 'Art', desc: 'Also another description here', image: testImg },
		{ title: 'Games', desc: 'Also another description here', image: testImg },
		{ title: 'Blog', desc: 'Also another description here', image: testImg }
	];
</script>

<div id="content-box">
	<ul id="content-list">
		{#each content as c}
			<li>
				<ContentItem name={c.title} title={c.desc} thumbnail={c.image} />
			</li>
		{/each}
	</ul>
</div>

<style lang="scss">
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
</style>
