import { sveltekit } from '@sveltejs/kit/vite';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { defineConfig } from 'vite';
import { imagetools } from 'vite-imagetools';

// /** @type {import('vite').UserConfig} */
export default () => {
    // Extends 'process.env.*' with VITE_*-variables from '.env.(mode=production|development)'
    return defineConfig({
        plugins: [sveltekit(), vanillaExtractPlugin(), imagetools()],
        define: {
            'process.env.VITE_BUILD_TIME': JSON.stringify(new Date().toISOString()),
        },
        ssr:
		process.env.NODE_ENV === 'development'
			? {}
			: {
					noExternal: ['@vanilla-extract/css', '@vanilla-extract/css/fileScope'],
			  },
    });
};
