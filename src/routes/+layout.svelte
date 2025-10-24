<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import reymar_favicon from '$lib/assets/reymar.svg';
	import ProfileCard from '$lib/components/ProfileCard.svelte';
	import reymar from '$lib/assets/reymar_2.jpg';
	
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={reymar_favicon} />
</svelte:head>

<div class="bg-gray-100 text-gray-900 dark:bg-[#121212] dark:text-[#d5d5d5] h-auto">
	<div class="p-10">
		<div class="flex flex-row gap-10">
			<div class="basis-1/5">
				<ProfileCard image={reymar} name={'Reymar Ocero'} />
			</div>
  			<div class="flex-1">
				<main>
					{@render children?.()}
				</main>
			</div>
			<div class="w-24 flex-none">
				<nav class="flex flex-col">
					<a href="/" class:text-lime-500={$page.url.pathname === '/'}>Home</a>
					<a href="/about" class:text-lime-500={$page.url.pathname === '/about'}>About</a>
				</nav>
			</div>
		</div>
		
	</div>
</div>

