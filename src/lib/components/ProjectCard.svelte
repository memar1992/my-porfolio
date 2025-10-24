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

<div class="grid lg:grid-cols-2 items-center rounded-sm overflow-hidden">
    <!-- Left content -->
    <div class="bg-white dark:bg-[#1c1c1c] text-gray-100 p-10 h-full flex flex-col justify-center">
        <h2 class="text-2xl font-bold mb-4 text-lime-600">
            {title}
        </h2>
        <p class="text-gray-400 mb-6">
            {description}
        </p>

        {#if !isHideButton}
        <a href="{projectUrl}" target="_blank" class="text-white font-semibold inline-flex items-center gap-1 hover:underline mb-6">
            {buttonLabel}
            <i class="fas fa-external-link-alt"></i>
        </a>
        {/if}

        <div class="border-t border-gray-700 pt-4 mt-auto">
            <p class="text-sm mb-4 text-gray-400"><span class="font-semibold text-gray-300">TECH:</span>
                {tech}
            </p>
        </div>
        <div class="border-t border-gray-700 pt-4 mt-auto">
            <p class="text-sm text-gray-400"><span class="font-semibold text-gray-300">ROLE:</span> 
                {role}
            </p>
        </div>
    </div>

    <!-- Right image -->
    <div class="h-full w-full">
        <img src={projectThumbnail} alt="{title}" class="w-full h-full object-cover object-left">
    </div>
</div>

