<script lang="ts">
	import type { NavType } from "$lib/types/NavType";
    import { page } from '$app/state';

    export let navs: NavType[] = [];
</script>

<div class="rounded-sm dark:bg-[#1c1c1c] bg-[#f5f5f5] p-3 py-10 h-full">    
    <nav class="flex flex-col items-center gap-10 mt-50">
        {#each navs as nav}
            <a href={nav.href} class="flex flex-col gap-1 items-center justify-center {page.url.pathname === nav.href ? 'text-gray-900 bg-lime-500 rounded-full w-15 h-15' : 'text-gray-300'}">
                <i class={nav.icon}></i>
                <span class="text-[10px] font-semibold">{nav.name}</span>
            </a>
        {/each}
    </nav>
</div>
