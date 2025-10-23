<script lang="ts">
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

        <div class="flex flex-col gap-8">
            <div class="flex flex-col gap-2 items-start">
                <p class="text-sm text-blue-600">
                    <i class="fa-brands fa-php"></i> PHP
                </p>
                <div class="relative w-full">
                    <div class="absolute top-0 left-0 h-2 bg-blue-600 rounded-full w-90/100 z-10"></div>
                    <div class="absolute top-0 left-0 h-2 bg-gray-800 rounded-full w-full"></div>
                </div>
            </div>

            <div class="flex flex-col gap-2 items-start">
                <p class="text-sm text-red-600">
                    <i class="fa-brands fa-java"></i> JAVA
                </p>
                <div class="relative w-full">
                    <div class="absolute top-0 left-0 h-2 bg-red-500 rounded-full w-80/100 z-10"></div>
                    <div class="absolute top-0 left-0 h-2 bg-gray-800 rounded-full w-full"></div>
                </div>
            </div>

            <div class="flex flex-col gap-2 items-start">
                <p class="text-sm text-yellow-600">
                    <i class="fa-brands fa-js"></i> JavaScript
                </p>
                <div class="relative w-full">
                    <div class="absolute top-0 left-0 h-2 bg-yellow-500 rounded-full w-100/100 z-10"></div>
                    <div class="absolute top-0 left-0 h-2 bg-gray-800 rounded-full w-full"></div>
                </div>
            </div>

            <div class="flex flex-col gap-2 items-start">
                <p class="text-sm text-orange-600">
                    <i class="fa-brands fa-html5"></i> HTML
                </p>
                <div class="relative w-full">
                    <div class="absolute top-0 left-0 h-2 bg-orange-500 rounded-full w-100/100 z-10"></div>
                    <div class="absolute top-0 left-0 h-2 bg-gray-800 rounded-full w-full"></div>
                </div>
            </div>

            <div class="flex flex-col gap-2 items-start">
                <p class="text-sm text-blue-600">
                    <i class="fa-brands fa-css3"></i> CSS3
                </p>
                <div class="relative w-full">
                    <div class="absolute top-0 left-0 h-2 bg-blue-500 rounded-full w-100/100 z-10"></div>
                    <div class="absolute top-0 left-0 h-2 bg-gray-800 rounded-full w-full"></div>
                </div>
            </div>

            <div class="flex flex-col gap-2 items-start">
                <p class="text-sm text-red-600">
                    <i class="fas fa-database"></i> MySQL
                </p>
                <div class="relative w-full">
                    <div class="absolute top-0 left-0 h-2 bg-red-500 rounded-full w-60/100 z-10"></div>
                    <div class="absolute top-0 left-0 h-2 bg-gray-800 rounded-full w-full"></div>
                </div>
            </div>
        </div>
        
    </div>
</div>

