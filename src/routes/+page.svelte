<script lang="ts">
	import ContentBoxMain from '../components/contentBoxMain.svelte';
</script>

<div id="main-view">
	<div id="header">
		<h1>Brandon Conyers</h1>
		<h2>Developer - Artist</h2>
	</div>
	<ContentBoxMain />
	<button id="main-content-collapse" />
</div>

<style lang="scss">
	h1 {
		color: white;
	}
	h2 {
		color: white;
		text-align: center;
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

	#header {
	}

	#main-content-collapse {
		width: 100px;
		height: 20px;
		background-color: #000;
		border: 1px solid #333;
		border-top-width: 0;
	}
</style>
