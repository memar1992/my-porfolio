<script lang="ts">
	import '../app.css';
	import reymar_favicon from '$lib/assets/reymar.svg';
	import ProfileCard from '$lib/components/ProfileCard.svelte';
	import reymar from '$lib/assets/reymar_2.jpg';

	import type { NavType } from '$lib/types/NavType';
	import NavCard from '$lib/components/NavCard.svelte';
	
	let { children } = $props();

	let navs: NavType[] = [
		{ name: 'Home', href: '/', icon: 'fa-solid fa-house' },
		{ name: 'About', href: '/about', icon: 'fa-solid fa-user-tie' },
		{ name: 'Contact', href: '/contact', icon: 'fa-solid fa-envelope' },
	]
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
				<NavCard navs={navs} />
			</div>
		</div>
		
	</div>
</div>

