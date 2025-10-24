<script lang="ts">
	import SkillDetailsCard from "./SkillDetailsCard.svelte";

    export let image:string = '';
    export let name:string = 'Reymar Ocero'
</script>

<div class="rounded-sm dark:bg-[#1c1c1c] bg-[#f5f5f5] p-5">
    <div class="flex flex-col px-2 gap-2">
        <div class="relative">
            <div class="w-4 h-4 absolute bottom-[20px] right-[45px] bg-amber-600 rounded-full"></div>
            <img src={image} alt={name} class="w-24 h-24 rounded-full mx-auto mb-2 object-cover border-1" />
        </div>
        
        <span class="text-xl font-semibold text-center">{name}</span>
        <span class="text-sm text-amber-600 text-center">
            Full-stack developer
        </span>

        <!-- list of skills -->
        <span class="block mt-5 font-semibold text-gray-600">Programming Languages</span>

        <div class="flex flex-col gap-8 mb-10">
            <SkillDetailsCard
                label={'PHP'}
                percentage={90}
                icon={'fa-brands fa-php'}
            />

            <SkillDetailsCard
                label={'JavaScript'}
                percentage={90}
                icon={'fa-brands fa-js'}
            />

            <SkillDetailsCard
                label={'Java'}
                percentage={90}
                icon={'fa-brands fa-java'}
            />

            <SkillDetailsCard
                label={'HTML'}
                percentage={90}
                icon={'fa-brands fa-html5'}
            />

            <SkillDetailsCard
                label={'CSS'}
                percentage={90}
                icon={'fa-brands fa-css3'}
            />
            
        </div>

        <span class="block mt-5 font-semibold text-gray-600">Frameworks Used</span>

        <div class="flex flex-col gap-8 mb-10">
            <SkillDetailsCard 
                label={'Laravel'}
                percentage={90}
                icon={'fa-brands fa-laravel'}
            />

            <SkillDetailsCard 
                label={'Play Framework'}
                percentage={80}
                icon={'fas fa-play'}
            />

            <SkillDetailsCard 
                label={'NodeJS'}
                percentage={90}
                icon={'fa-brands fa-node-js'}
            />

            <SkillDetailsCard 
                label={'ExpressJS'}
                percentage={70}
                icon={'fas fa-thumbs-up'}
            />

            <SkillDetailsCard 
                label={'NestJS'}
                percentage={70}
                icon={'fas fa-thumbs-up'}
            />

            <SkillDetailsCard 
                label={'React'}
                percentage={100}
                icon={'fa-brands fa-react'}
            />

            <SkillDetailsCard 
                label={'React Native'}
                percentage={100}
                icon={'fa-brands fa-react'}
            />

            <SkillDetailsCard 
                label={'Flutter'}
                percentage={60}
                icon={'fa-brands fa-flutter'}
            />
        </div>

        <span class="block mt-5 font-semibold text-gray-600">Databases</span>

        <div class="flex flex-col gap-8 mb-10">
            <SkillDetailsCard 
                label={'MySQL'}
                percentage={90}
                icon={'fas fa-database'}
            />

            <SkillDetailsCard 
                label={'PostGreSQL'}
                percentage={90}
                icon={'fas fa-database'}
            />

            <SkillDetailsCard 
                label={'Supabase'}
                percentage={90}
                icon={'fas fa-database'}
            />
        </div>

        <span class="block mt-5 font-semibold text-gray-600">Servers</span>

        <div class="flex flex-col gap-8 mb-10">
            <SkillDetailsCard 
                label={'Rackspace'}
                percentage={90}
                color={'red'}
                icon={'fas fa-database'}
            />

            <SkillDetailsCard 
                label={'AWS'}
                percentage={90}
                color={'lime'}
                icon={'fas fa-database'}
            />
        </div>
        
    </div>
</div>

