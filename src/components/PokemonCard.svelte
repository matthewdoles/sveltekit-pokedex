<script>
	import { scale } from 'svelte/transition';
	export let pokemon;

	const cardClasses =
		'p-6 bg-gray-100 text-gray-800 text-center ' +
		'rounded-md shadow-sm hover:shadow-md flex flex-col items-center ' +
		'dark:bg-gray-700 dark:hover:shadow-[0px_0px_4px_rgba(255,255,255,0.7)]';
</script>

<a class={cardClasses} href={`/pokemon/${pokemon.id}`} in:scale>
	<img class="h-40 w-40" src={pokemon.image} alt={pokemon.name} />
	<h2 class="uppercase dark:text-white">{pokemon.id}. {pokemon.name}</h2>
</a>
