<script lang="ts">
    export let label = 'PHP'
    export let percentage = "w-90/100 z-10"
    export let icon = 'fa-brands fa-php'
</script>

<div class="flex flex-col gap-2 items-start">
    <p class="text-sm text-zinc-700 dark:text-zinc-300">
        <i class={icon}></i> {label}
    </p>
    <div class="relative w-full">
        <div class="absolute top-0 left-0 h-2 rounded-full bg-zinc-900/70 dark:bg-white/65 {percentage}"></div>
        <div class="absolute top-0 left-0 h-2 rounded-full bg-zinc-900/10 dark:bg-white/10 w-full"></div>
    </div>
</div>