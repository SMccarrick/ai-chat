<script lang="ts">
	import { createMutation } from '@tanstack/svelte-query';
	import type { ChatCompletionResponseMessage } from 'openai';
	import openai from '../lib/openai';
	import Button from '../components/button/Button.svelte';

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

<div class="container">
	<article class="conversation">
		{#if messages}
			{#each messages as message}
				<div class="chat-bubble">
					{message.content}
				</div>
			{/each}
		{/if}
	</article>
	<div class="push" />

	<form class="container form-container" on:submit|preventDefault={addPrompt}>
		<textarea class="input" name="prompt" placeholder="enter prompt here" bind:value={prompt} />
		<button class="button" type="submit">Ask</button>
		<Button label="label" />
	</form>
</div>

<style>
	.container {
		max-width: 800px;
	}
	.form-container {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 60px;
		display: flex;
		flex-direction: row;
		align-content: space-between;
		gap: 8px;
		padding: 1rem;
	}
	.input {
		height: 60px;
	}
	.button {
		max-width: 100px;
		height: 60px;
	}
	.push {
		height: 60px;
	}

	.conversation {
		display: flex;
		flex-direction: column;
	}

	div.chat-bubble:nth-of-type(2n) {
		white-space: pre-line;
		position: relative;
		display: inline-block;
		background-color: #e0e0e0;
		color: black;
		padding: 8px 12px;
		border-radius: 18px;
		max-width: 75%;
		font-size: 14px;
		line-height: 1.4;
		margin-bottom: 10px;
		width: fit-content;
	}

	div.chat-bubble:nth-of-type(2n + 1) {
		white-space: pre-line;
		position: relative;
		display: inline-block;
		padding: 8px 12px;
		border-radius: 18px;
		width: fit-content;
		font-size: 14px;
		line-height: 1.4;
		margin-bottom: 10px;
		background-color: #007aff;
		align-self: end;
		color: #fff;
	}
</style>
