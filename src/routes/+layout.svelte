<script lang="ts">
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
	<title>AI Chat</title>
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
