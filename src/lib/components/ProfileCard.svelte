<script lang="ts">
	import SkillDetailsCard from "./SkillDetailsCard.svelte";

    export let image:string = '';
    export let name:string = 'Reymar Ocero'
</script>

<div class="surface-card p-5 h-full">
    <div class="flex flex-col px-2 gap-2">
        <div class="relative">
            <div class="w-4 h-4 absolute bottom-[20px] right-[65px] bg-black rounded-full ring-4 ring-white dark:bg-white dark:ring-black"></div>
            <img src={image} alt={name} class="w-24 h-24 rounded-full mx-auto mb-2 object-cover border border-zinc-900/20 dark:border-white/20" />
        </div>
        
        <span class="text-xl font-semibold text-center text-zinc-900 dark:text-white">{name}</span>
        <span class="text-sm text-zinc-600 dark:text-zinc-400 text-center">
            Full-stack developer
        </span>

        <!-- list of skills -->
        <span class="block mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-500">Programming Languages</span>

        <div class="flex flex-col gap-8 mb-10">
            <SkillDetailsCard
                label={'PHP'}
                percentage={'w-90/100 z-10'}
                icon={'fa-brands fa-php'}
            />

            <SkillDetailsCard
                label={'JavaScript'}
                percentage={'w-90/100 z-10'}
                icon={'fa-brands fa-js'}
            />

            <SkillDetailsCard
                label={'Java'}
                percentage={'w-90/100 z-10'}
                icon={'fa-brands fa-java'}
            />
            
        </div>

        <span class="block mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Frameworks Used</span>

        <div class="flex flex-col gap-8 mb-10">

            <SkillDetailsCard 
                label={'WordPress'}
                percentage={'w-100/100 z-10'}
                icon={'fa-brands fa-wordpress'}
            />

            <SkillDetailsCard 
                label={'Laravel'}
                percentage={'w-90/100 z-10'}
                icon={'fa-brands fa-laravel'}
            />

            <SkillDetailsCard 
                label={'Play Framework'}
                percentage={'w-80/100 z-10'}
                icon={'fas fa-play'}
            />

            <SkillDetailsCard 
                label={'NodeJS'}
                percentage={'w-90/100 z-10'}
                icon={'fa-brands fa-node-js'}
            />

            <SkillDetailsCard 
                label={'ExpressJS'}
                percentage={'w-70/100 z-10'}
                icon={'fas fa-thumbs-up'}
            />

            <SkillDetailsCard 
                label={'NestJS'}
                percentage={'w-50/100 z-10'}
                icon={'fas fa-thumbs-up'}
            />

            <SkillDetailsCard 
                label={'React'}
                percentage={'w-100/100 z-10'}
                icon={'fa-brands fa-react'}
            />

            <SkillDetailsCard 
                label={'React Native'}
                percentage={'w-100/100 z-10'}
                icon={'fa-brands fa-react'}
            />

            <SkillDetailsCard 
                label={'Flutter'}
                percentage={'w-60/100 z-10'}
                icon={'fa-brands fa-flutter'}
            />

            <SkillDetailsCard 
                label={'Svelte'}
                percentage={'w-100/100 z-10'}
                icon={'fas fa-code'}
            />
        </div>

        <span class="block mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Databases</span>

        <div class="flex flex-col gap-8 mb-10">
            <SkillDetailsCard 
                label={'MySQL'}
                percentage={'w-90/100 z-10'}
                icon={'fas fa-database'}
            />

            <SkillDetailsCard 
                label={'PostGreSQL'}
                percentage={'w-90/100 z-10'}
                icon={'fas fa-database'}
            />

            <SkillDetailsCard 
                label={'Supabase'}
                percentage={'w-90/100 z-10'}
                icon={'fas fa-database'}
            />
        </div>

        <span class="block mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Servers</span>

        <div class="flex flex-col gap-8 mb-10">
            <SkillDetailsCard 
                label={'Rackspace'}
                percentage={'w-90/100 z-10'}
                icon={'fas fa-database'}
            />

            <SkillDetailsCard 
                label={'AWS'}
                percentage={'w-90/100 z-10'}
                icon={'fas fa-database'}
            />
        </div>

        <span class="block mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Design tools</span>

        <div class="flex flex-col gap-8 mb-10">
            <SkillDetailsCard 
                label={'Figma'}
                percentage={'w-100/100 z-10'}
                icon={'fa-brands fa-figma'}
            />

            <SkillDetailsCard 
                label={'Adobe Products'}
                percentage={'w-100/100 z-10'}
                icon={'fas fa-check'}
            />
        </div>

        <span class="block mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Version control</span>

        <div class="flex flex-col gap-8 mb-10">
            <SkillDetailsCard 
                label={'Bitbucket'}
                percentage={'w-100/100 z-10'}
                icon={'fa-brands fa-bitbucket'}
            />

            <SkillDetailsCard 
                label={'GitHub'}
                percentage={'w-100/100 z-10'}
                icon={'fa-brands fa-github'}
            />
        </div>
        
    </div>
</div>

