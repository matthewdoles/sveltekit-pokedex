<script>
	import { onMount } from 'svelte';
	import FaLightbulb from 'svelte-icons/fa/FaLightbulb.svelte';
	let darkMode = false;

	onMount(() => {
		darkMode = document.documentElement.classList.contains('dark');
	});
</script>

<nav class="flex justify-center w-full items-center	">
	<a class="mx-4 text-lg dark:text-white" href="/">Home</a>
	<a class="mx-4 text-lg dark:text-white" href="/about">About</a>
	<div
		class="mx-4 text-lg dark:text-yellow-300 w-7 h-7 cursor-pointer"
		on:click={() => {
			document.documentElement.classList.toggle('dark');
			darkMode = !darkMode;
		}}
	>
		<FaLightbulb />
	</div>
</nav>
