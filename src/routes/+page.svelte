<script lang="ts">
	import { createMutation } from '@tanstack/svelte-query';
	import type { ChatCompletionResponseMessage } from 'openai';
	import openai from '../lib/openai';
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
	} from './layout.css';

	let prompt = '';
	let messages: Array<ChatCompletionResponseMessage> = [];

	const setCompletion = async (prompt: string) => {
		const res = openai.createChatCompletion({
			model: 'gpt-3.5-turbo',
			messages: [...messages, { role: 'user', content: prompt }]
		});
		const message = (await res).data.choices[0].message || { role: 'assistant', content: '' };

		messages = [
			...messages,
			{
				role: message.role,
				content: message.content.trim()
			}
		];
	};

	const mutation = createMutation({
		mutationKey: ['setPrompt'],
		mutationFn: setCompletion
	});

	const addPrompt = () => {
		messages = [...messages, { role: 'user', content: prompt }];
		$mutation.mutate(prompt);
		prompt = '';
	};
</script>

<main class={containerStyle}>
	<div class={sidebar}>
		<p>Sidebar</p>
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

		<form class={formContainerStyle} on:submit|preventDefault={addPrompt}>
			<input class={inputStyle} name="prompt" placeholder="enter prompt here" bind:value={prompt} />
			<div class={formButtonsStyle}>
				<Button type="submit" label="Ask" />
				<Button label="Amend filters" />
			</div>
		</form>
	</div>
</main>
