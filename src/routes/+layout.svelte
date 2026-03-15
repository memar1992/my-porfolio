<script lang="ts">
	import '../app.css';
	import reymar_favicon from '$lib/assets/reymar.svg';
	import ProfileCard from '$lib/components/ProfileCard.svelte';
	import reymar from '$lib/assets/reymar_2.jpg';
	import { onMount } from 'svelte';
	import { injectAnalytics } from '@vercel/analytics/sveltekit'
	import { browser, dev } from '$app/environment';

	import type { NavType } from '$lib/types/NavType';
	import NavCard from '$lib/components/NavCard.svelte';
	
	let { children } = $props();
	let isDark = $state(false);

	let navs: NavType[] = [
		{ name: 'Home', href: '/', icon: 'fa-solid fa-house' },
		{ name: 'About', href: '/about', icon: 'fa-solid fa-user-tie' },
		{ name: 'Contact', href: '/contact', icon: 'fa-solid fa-envelope' },
	]

	injectAnalytics({ mode: dev ? 'development' : 'production' });

	function applyTheme() {
		if (!browser) return;
		document.documentElement.classList.toggle('dark', isDark);
	}

	function toggleTheme() {
		isDark = !isDark;
		applyTheme();
		if (browser) {
			localStorage.setItem('theme', isDark ? 'dark' : 'light');
		}
	}

	onMount(() => {
		const savedTheme = localStorage.getItem('theme');
		isDark = savedTheme === 'dark';
		applyTheme();
	});
</script>

<svelte:head>
	<link rel="icon" href={reymar_favicon} />
</svelte:head>

<div class="min-h-screen px-4 py-6 md:px-8 md:py-10">
	<div class="mx-auto grid max-w-[1400px] grid-cols-1 gap-6 lg:grid-cols-[300px_1fr_92px]">
		<aside class="lg:sticky lg:top-10 h-fit">
			<ProfileCard image={reymar} name={'Reymar Ocero'} />
		</aside>

		<main class="surface-card p-6 md:p-8">
			{@render children?.()}
		</main>

		<aside class="lg:sticky lg:top-10 h-fit">
			<NavCard navs={navs} {isDark} onToggleTheme={toggleTheme} />
		</aside>
	</div>
</div>

