<script lang="ts">
    import Lottie from "$lib/Lottie.svelte";

</script>
<div class="grid gap-8 lg:grid-cols-2 lg:items-start">
    <div class="surface-card p-8 md:p-10">
        
        <!-- Left content -->
        <div>
        <h2 class="section-title mb-6">About Me</h2>
        <p class="mb-6 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
            I’m a full-stack developer who enjoys building practical, reliable software for real businesses.
        </p>
        <p class="mb-6 text-zinc-700 dark:text-zinc-300">
            Over the years, I’ve worked on web and mobile systems for different clients — from integration platforms and business tools
            to mobile apps and custom plugins. My main tools include <span class="font-medium text-zinc-900 dark:text-white">Laravel, Java (Play Framework), React, React Native, Vue, HTML, CSS,</span> and <span class="font-medium text-zinc-900 dark:text-white">Ionic</span>.
        </p>
        <p class="mb-6 text-zinc-700 dark:text-zinc-300">
            Whether it’s a system that automates invoices, an internal dashboard, or a mobile app, 
            I make sure it runs smoothly and is easy to maintain long-term.
        </p>
        <p class="text-zinc-700 dark:text-zinc-300">
            If you’re looking for a dependable developer who can handle both frontend and backend, 
            I’d be happy to help bring your idea to life.
        </p>
        </div>
    </div>
    
        <!-- Right highlights -->
        <div class="surface-card p-8 md:p-10">
            <div class="flex flex-row items-center justify-center">
                <Lottie src='https://lottie.host/f3435df2-a8f2-4af9-9945-96b0f6630240/ken5TT6vG5.json' loop={true} autoplay={true} speed={1} />
            </div>
        <h3 class="mb-4 text-xl font-semibold text-zinc-900 dark:text-white">I focus on three things in every project:</h3>
        <ul class="space-y-4">
            <li class="flex items-start gap-3">
            <span class="mt-1 text-xl text-zinc-900 dark:text-white"><i class="fas fa-code"></i></span>
            <span class="text-zinc-700 dark:text-zinc-300">Writing clean and maintainable code</span>
            </li>
            <li class="flex items-start gap-3">
            <span class="mt-1 text-xl text-zinc-900 dark:text-white"><i class="fas fa-comments"></i></span>
            <span class="text-zinc-700 dark:text-zinc-300">Keeping communication simple and honest</span>
            </li>
            <li class="flex items-start gap-3">
            <span class="mt-1 text-xl text-zinc-900 dark:text-white"><i class="fas fa-check-circle"></i></span>
            <span class="text-zinc-700 dark:text-zinc-300">Delivering useful results that make work easier</span>
            </li>
        </ul>
        </div>
</div>

