<script lang="ts">
	import type { NavType } from "$lib/types/NavType";
    import { page } from '$app/state';

    export let navs: NavType[] = [];
	export let isDark = false;
	export let onToggleTheme: () => void = () => {};
</script>

<div class="surface-card p-3 py-8 h-full">    
    <div class="mb-4 flex justify-center lg:mt-4">
        <button
            type="button"
            on:click={onToggleTheme}
            class="flex h-12 w-12 items-center justify-center rounded-2xl border border-zinc-900/15 bg-black text-white transition-all hover:bg-zinc-800 dark:border-white/15 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDark ? 'Light mode' : 'Dark mode'}
        >
            <i class={isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon'}></i>
        </button>
    </div>

    <nav class="flex flex-col items-center gap-4 md:gap-6 lg:mt-24">
        {#each navs as nav}
            <a
                href={nav.href}
                class="flex h-14 w-14 flex-col items-center justify-center gap-1 rounded-2xl border text-[11px] font-semibold transition-all duration-200 {page.url.pathname === nav.href
                    ? 'border-zinc-900 bg-zinc-900 text-white shadow-[0_0_16px_rgba(0,0,0,0.25)] dark:border-white dark:bg-white dark:text-black dark:shadow-[0_0_18px_rgba(255,255,255,0.15)]'
                    : 'border-zinc-900/15 bg-black/5 text-zinc-600 hover:border-zinc-700 hover:text-zinc-900 dark:border-white/15 dark:bg-white/5 dark:text-zinc-400 dark:hover:border-white/40 dark:hover:text-white'}"
            >
                <i class={nav.icon}></i>
                <span class="text-[10px] font-semibold">{nav.name}</span>
            </a>
        {/each}
    </nav>
</div>
