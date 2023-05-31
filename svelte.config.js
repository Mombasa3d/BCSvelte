import preprocess from 'svelte-preprocess'
import seqPreprocessor from 'svelte-sequential-preprocessor'
import { preprocessThrelte } from '@threlte/preprocess'
import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { importAssets } from 'svelte-preprocess-import-assets'

const config = {
	// …
	preprocess: seqPreprocessor([preprocess(), preprocessThrelte(), vitePreprocess(), importAssets()]),
	kit: {
		adapter: adapter({}),
		files: {
			assets: "src/assets"
		}
	}
}

export default config