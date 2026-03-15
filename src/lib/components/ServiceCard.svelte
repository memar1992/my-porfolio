<script lang="ts">
    export let title:string = 'My Service';
    export let description:string = 'My Service Description';
    export let isCustom:boolean = false;
    export let iconName:string = 'code';
</script>

{#if !isCustom}
    <div
        class="surface-card p-6 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-zinc-900/25 hover:bg-black/5 dark:hover:border-white/25 dark:hover:bg-white/10"
    >
        <div class="mb-4 text-3xl text-zinc-900 dark:text-white">
            <i class="fas fa-{iconName}"></i>
        </div>
        <h3 class="mb-2 text-xl font-semibold text-zinc-900 dark:text-white">{title}</h3>
        <p class="text-sm text-zinc-600 dark:text-zinc-400">
            {description}
        </p>
    </div>
{:else}
    <div
    class="rounded-2xl border border-zinc-900 bg-zinc-900 p-6 text-white shadow-[0_0_24px_rgba(0,0,0,0.18)] transition-all duration-300 ease-in-out hover:-translate-y-1 dark:border-white dark:bg-white dark:text-black dark:shadow-[0_0_24px_rgba(255,255,255,0.2)]"
    >
        <div class="mb-4 text-3xl text-white dark:text-black">
            <i class="fas fa-laptop-file"></i>
        </div>
        <h3 class="mb-2 text-xl font-semibold text-white dark:text-black">{title}</h3>
        <p class="text-sm text-white/75 dark:text-black/70">
            {description}
        </p>
    </div>
{/if}