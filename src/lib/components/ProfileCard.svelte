<script lang="ts">
    export let image:string = '';
    export let name:string = 'Reymar Ocero'
</script>

<div class="rounded-sm dark:bg-[#1c1c1c] bg-[#f5f5f5] p-10">
    <div class="flex flex-col text-center px-2 gap-2">
        <div class="relative">
            <div class="w-4 h-4 absolute bottom-[20px] right-[45px] bg-amber-600 rounded-full"></div>
            <img src={image} alt={name} class="w-24 h-24 rounded-full mx-auto mb-2 object-cover border-1" />
        </div>
        
        <span class="text-xl font-semibold">{name}</span>
        <span class="text-sm text-amber-600">
            Full-stack developer
        </span>
    </div>
</div>

