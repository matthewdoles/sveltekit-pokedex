<script>
	import Nav from '../components/Nav.svelte';
</script>

<div class="bg-white dark:bg-gray-900 h-full min-h-screen">
	<div class="p-8 max-w-6xl mx-auto">
		<Nav />
		<slot />
	</div>
</div>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
