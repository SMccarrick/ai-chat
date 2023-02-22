<script lang="ts">
	import '@picocss/pico/css/pico.css';
	import { browser } from '$app/environment';
	import { QueryClientProvider, QueryClient } from '@tanstack/svelte-query';

	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				enabled: browser
			}
		}
	});
</script>

<svelte:head>
	<title>Svelte Query Star Wars Example</title>
	<style>
		html,
		body {
			height: 100%;
			margin: 0;
		}
	</style>
</svelte:head>

<QueryClientProvider client={queryClient}>
	<slot />
</QueryClientProvider>
