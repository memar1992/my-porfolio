<script lang="ts">
	import SkillDetailsCard from "./SkillDetailsCard.svelte";

    export let image:string = '';
    export let name:string = 'Reymar Ocero'
</script>

<div class="rounded-sm dark:bg-[#1c1c1c] bg-[#f5f5f5] p-5">
    <div class="flex flex-col px-2 gap-2">
        <div class="relative">
            <div class="w-4 h-4 absolute bottom-[20px] right-[65px] bg-lime-600 rounded-full"></div>
            <img src={image} alt={name} class="w-24 h-24 rounded-full mx-auto mb-2 object-cover border-1" />
        </div>
        
        <span class="text-xl font-semibold text-center">{name}</span>
        <span class="text-sm text-lime-600 text-center">
            Full-stack developer
        </span>

        <!-- list of skills -->
        <span class="block mt-5 font-semibold text-gray-600">Programming Languages</span>

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

            <SkillDetailsCard
                label={'HTML'}
                percentage={'w-90/100 z-10'}
                icon={'fa-brands fa-html5'}
            />

            <SkillDetailsCard
                label={'CSS'}
                percentage={'w-90/100 z-10'}
                icon={'fa-brands fa-css3'}
            />
            
        </div>

        <span class="block mt-5 font-semibold text-gray-600">Frameworks Used</span>

        <div class="flex flex-col gap-8 mb-10">
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
                percentage={'w-70/100 z-10'}
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
        </div>

        <span class="block mt-5 font-semibold text-gray-600">Databases</span>

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

        <span class="block mt-5 font-semibold text-gray-600">Servers</span>

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
        
    </div>
</div>

