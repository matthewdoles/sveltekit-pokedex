<script>
	import { pokemon } from '../stores/pokestore';
</script>

<svelte:head>
	<title>Pokedex</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">Svelte Kit Pokedex</h1>

{#each $pokemon as poke}
	<p>{poke.name}</p>
{/each}
