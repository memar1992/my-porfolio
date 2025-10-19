<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import favicon from '$lib/assets/favicon.svg';
	
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="bg-gray-100 text-gray-900 dark:bg-[#121212] dark:text-[#d5d5d5] h-auto">
	<div class="p-10">
		<div class="flex flex-row gap-10">
			<div class="basis-1/4">
				<div class="flex flex-col text-center px-2">
					<img src="" alt="">
					Reymar Ocero
				</div>
			</div>
  			<div class="flex-1">
				<main>
					{@render children?.()}
				</main>
			</div>
			<div class="w-24 flex-none">
				<nav class="flex flex-col">
					<a href="/" class:text-amber-500={$page.url.pathname === '/'}>Home</a>
					<a href="/about" class:text-amber-500={$page.url.pathname === '/about'}>About</a>
				</nav>
			</div>
		</div>
		
	</div>
</div>

