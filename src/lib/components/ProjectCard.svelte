<script lang="ts">
    import syncapss from '$lib/assets/syncapps.png';
    export let projectThumbnail:string = syncapss;
    export let title:string = 'My Project';
    export let description:string = 'My Project Description';
    export let projectUrl:string = '/';
    export let tech:string = 'Java, HTML, PostgreSQL';
    export let role:string = 'Backend Developer';
    export let buttonLabel:string = 'Visit Site';
    export let isHideButton:boolean = false;
</script>

<div class="surface-card grid items-center overflow-hidden lg:grid-cols-2">
    <!-- Left content -->
    <div class="h-full p-8 md:p-10 flex flex-col justify-center">
        <h2 class="mb-4 text-2xl font-semibold text-zinc-900 dark:text-white md:text-3xl">
            {title}
        </h2>
        <p class="mb-6 text-zinc-700 dark:text-zinc-300">
            {description}
        </p>

        {#if !isHideButton}
        <a
            href="{projectUrl}"
            target="_blank"
            class="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-zinc-900 bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-transparent hover:text-zinc-900 dark:border-white dark:bg-white dark:text-black dark:hover:text-white"
        >
            {buttonLabel}
            <i class="fas fa-external-link-alt"></i>
        </a>
        {/if}

        <div class="mt-auto border-t border-zinc-900/15 pt-4 dark:border-white/15">
            <p class="mb-4 text-sm text-zinc-600 dark:text-zinc-400"><span class="font-semibold text-zinc-900 dark:text-zinc-100">TECH:</span>
                {tech}
            </p>
        </div>
        <div class="border-t border-zinc-900/15 pt-4 dark:border-white/15">
            <p class="text-sm text-zinc-600 dark:text-zinc-400"><span class="font-semibold text-zinc-900 dark:text-zinc-100">ROLE:</span> 
                {role}
            </p>
        </div>
    </div>

    <!-- Right image -->
    <div class="h-full w-full border-t border-zinc-900/10 lg:border-l lg:border-t-0 dark:border-white/10">
        <img src={projectThumbnail} alt="{title}" class="h-full w-full object-cover object-left">
    </div>
</div>

