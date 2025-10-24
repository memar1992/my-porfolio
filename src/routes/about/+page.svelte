<script lang="ts">
    import Lottie from "$lib/Lottie.svelte";

</script>
<div class="rounded-sm dark:bg-[#1c1c1c] bg-[#f5f5f5] p-10 py-10">
    <div class="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        <!-- Left content -->
        <div>
        <h2 class="text-3xl font-bold mb-6">About Me</h2>
        <p class="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-6">
            I’m a full-stack developer who enjoys building practical, reliable software for real businesses.
        </p>
        <p class="text-gray-600 dark:text-gray-300 mb-6">
            Over the years, I’ve worked on web and mobile systems for different clients — from integration platforms and business tools 
            to mobile apps and custom plugins. My main tools include <span class="font-medium text-gray-900 dark:text-white">Laravel, Java (Play Framework), React, React Native, Vue, HTML, CSS,</span> and <span class="font-medium text-gray-900 dark:text-white">Ionic</span>.
        </p>
        <p class="text-gray-600 dark:text-gray-300 mb-6">
            Whether it’s a system that automates invoices, an internal dashboard, or a mobile app, 
            I make sure it runs smoothly and is easy to maintain long-term.
        </p>
        <p class="text-gray-600 dark:text-gray-300">
            If you’re looking for a dependable developer who can handle both frontend and backend, 
            I’d be happy to help bring your idea to life.
        </p>
        </div>
    
        <!-- Right highlights -->
        <div class="bg-white dark:bg-stone-900 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-800">
            <div class="flex flex-row items-center justify-center">
                <Lottie src='https://lottie.host/f3435df2-a8f2-4af9-9945-96b0f6630240/ken5TT6vG5.json' loop={true} autoplay={true} speed={1} />
            </div>
        <h3 class="text-xl font-semibold mb-4">I focus on three things in every project:</h3>
        <ul class="space-y-4">
            <li class="flex items-start gap-3">
            <span class="text-lime-500 text-xl mt-1"><i class="fas fa-code"></i></span>
            <span class="text-gray-700 dark:text-gray-300">Writing clean and maintainable code</span>
            </li>
            <li class="flex items-start gap-3">
            <span class="text-lime-500 text-xl mt-1"><i class="fas fa-comments"></i></span>
            <span class="text-gray-700 dark:text-gray-300">Keeping communication simple and honest</span>
            </li>
            <li class="flex items-start gap-3">
            <span class="text-lime-500 text-xl mt-1"><i class="fas fa-check-circle"></i></span>
            <span class="text-gray-700 dark:text-gray-300">Delivering useful results that make work easier</span>
            </li>
        </ul>
        </div>
    
    </div>   
</div>

