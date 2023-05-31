import preprocess from 'svelte-preprocess'
import seqPreprocessor from 'svelte-sequential-preprocessor'
import { preprocessThrelte } from '@threlte/preprocess'
import adapter from '@sveltejs/adapter-vercel';

const config = {
	// …
	preprocess: seqPreprocessor([preprocess(), preprocessThrelte()]),
	kit: {
		adapter: adapter({})
	}
}

export default config