<script lang="ts">
	import { button } from './button.css';

	export let label: string = '';
	export let type: 'button' | 'submit' | 'reset' | null | undefined = 'button';
</script>

<button on:click {type} class={button}>{label}</button>
