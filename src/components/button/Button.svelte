<script lang="ts">
	import { button } from './button.css';

	export let label: string = '';
</script>

<button on:click type="button" class={button}>{label}</button>
