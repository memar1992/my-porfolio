<script lang="ts">
    export let label = 'PHP'
    export let percentage = 80
    export let icon = 'fa-brands fa-php'
</script>

<div class="flex flex-col gap-2 items-start">
    <p class="text-sm text-lime-200">
        <i class={icon}></i> {label}
    </p>
    <div class="relative w-full">
        <div class="absolute top-0 left-0 h-2 bg-stone-500  rounded-full w-{percentage}/100 z-10"></div>
        <div class="absolute top-0 left-0 h-2 bg-gray-800 rounded-full w-full"></div>
    </div>
</div>