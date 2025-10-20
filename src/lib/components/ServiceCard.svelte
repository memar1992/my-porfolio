<script lang="ts">
    export let title:string = 'My Service';
    export let description:string = 'My Service Description';
    export let isCustom:boolean = false;
    export let iconName:string = 'code';
</script>

{#if !isCustom}
    <div
        class="bg-white dark:bg-[#1c1c1c] p-6 rounded-sm shadow-sm transition-all duration-300 ease-in-out hover:shadow-md hover:-translate-y-1"
    >
        <div class="text-amber-600 mb-4 text-3xl">
            <i class="fas fa-{iconName}"></i>
        </div>
        <h3 class="text-xl font-semibold mb-2">{title}</h3>
        <p class="text-gray-600 dark:text-gray-400 text-sm">
            {description}
        </p>
    </div>
{:else}
    <div
    class="bg-gray-100 dark:bg-amber-500 p-6 rounded-sm shadow-sm transition-all duration-300 ease-in-out hover:shadow-md hover:-translate-y-1"
    >
        <div class="text-amber-600 dark:text-amber-800 mb-4 text-3xl">
            <i class="fas fa-laptop-file"></i>
        </div>
        <h3 class="text-xl font-semibold mb-2 dark:text-gray-800">{title}</h3>
        <p class="text-gray-600 dark:text-gray-900 text-sm">
            {description}
        </p>
    </div>
{/if}