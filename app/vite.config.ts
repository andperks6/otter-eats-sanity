import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
			'@portabletext/svelte': '/node_modules/@portabletext/svelte/dist/index.js',
		  },
	}
});
