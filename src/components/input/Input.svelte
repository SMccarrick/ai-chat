<script lang="ts">
	import { input } from './input';

	export let id: string = '';
	export let value: string = '';
	export let type: string = '';
	export let label: string = '';
</script>

<label for={id}
	>{label}
	<input class={input} {id} name={id} {value} {type} on:change on:click />
</label>
