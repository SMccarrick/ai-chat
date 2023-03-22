<script lang="ts">
	import type { ChatCompletionResponseMessage } from 'openai';
	import Button from '../components/button/Button.svelte';
	import {
		chatBubbleStyles,
		containerStyle,
		conversationContainer,
		conversationStyle,
		formButtonsStyle,
		formContainerStyle,
		inputStyle,
		sidebar
	} from './page.css';
	import { createMutation } from '@tanstack/svelte-query';
	import openai from '../lib/openai';

	let prompt = '';
	let messages: Array<ChatCompletionResponseMessage> = [];

	const setPrompt = async (prompt: string) => {
		const response = await openai.createChatCompletion({
			model: 'gpt-3.5-turbo',
			messages: [...messages, { role: 'user', content: prompt }]
		});

		const { data } = response;
		const message = data.choices[0].message || { role: 'assistant', content: '' };

		messages = [
			...messages,
			{
				role: message.role,
				content: message.content.trim()
			}
		];
	};

	export const setPromptMutation = createMutation({
		mutationKey: ['setPrompt'],
		mutationFn: setPrompt
	});

	const addPrompt = () => {
		if (!prompt) {
			return;
		}
		messages = [...messages, { role: 'user', content: prompt }];
		$setPromptMutation.mutate(prompt);
		prompt = '';
	};
</script>

<main class={containerStyle}>
	<div class={sidebar}>
		<Button label="new conversation" />
	</div>
	<div class={conversationContainer}>
		<article class={conversationStyle}>
			{#if messages}
				{#each messages as message}
					<div class={chatBubbleStyles}>
						{message.content}
					</div>
				{/each}
			{/if}
		</article>

		<form class={formContainerStyle} method="post" on:submit|preventDefault={addPrompt}>
			<input class={inputStyle} name="prompt" placeholder="enter prompt here" bind:value={prompt} />
			<div class={formButtonsStyle}>
				<Button type="submit" label="Ask" />
				<Button label="Add filters" />
			</div>
		</form>
	</div>
</main>
