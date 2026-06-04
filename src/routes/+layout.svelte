<script lang="ts">
	import '../app.css';
	import reymar_favicon from '$lib/assets/reymar.svg';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	import { dev } from '$app/environment';
	import { page } from '$app/state';
	
	let { children } = $props();

	const navs = [
		{ name: 'Home', href: '/', icon: 'fa-house' },
		{ name: 'About', href: '/about', icon: 'fa-user' },
		{ name: 'Contact', href: '/contact', icon: 'fa-envelope' }
	];

	injectAnalytics({ mode: dev ? 'development' : 'production' });
</script>

<svelte:head>
	<link rel="icon" href={reymar_favicon} />
</svelte:head>

<div class="min-h-screen">
	<header class="sticky top-0 z-40 border-b border-[#e5e5ea] bg-[#f5f5f7]/95 backdrop-blur-sm">
		<div class="page-shell flex items-center justify-between py-4">
			<a href="/" class="text-sm font-semibold tracking-[0.05em] text-[#1d1d1f] uppercase">Reymar Ocero</a>
			<nav class="flex items-center gap-2">
				{#each navs as nav}
					<a href={nav.href} class="nav-link" class:active={page.url.pathname === nav.href}>
						<i class={`fa-solid ${nav.icon} mr-2 text-xs`}></i>
						{nav.name}
					</a>
				{/each}
			</nav>
		</div>
	</header>

	<main class="page-shell py-8 md:py-10">
		{@render children?.()}
	</main>

	<footer class="border-t border-[#e5e5ea]">
		<div class="page-shell py-6 text-sm text-[#6e6e73]">
			Simple software. Built properly.
		</div>
	</footer>
</div>

