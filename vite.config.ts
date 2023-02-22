import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, loadEnv, type UserConfig } from 'vite';

/** @type {import('vite').UserConfig} */
export default ({ mode }) => {
    // Extends 'process.env.*' with VITE_*-variables from '.env.(mode=production|development)'
    process.env = {...process.env, ...loadEnv(mode, process.cwd())};
    return defineConfig({
        plugins: [sveltekit()]
    });
};