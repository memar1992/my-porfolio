<script>
	import reymar from '$lib/assets/reymar.png';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import ServiceCard from '$lib/components/ServiceCard.svelte';
    import login_animation_new from '$lib/assets/login_animation-min.png';
    import cazoomi_video from '$lib/assets/cazoomi_video.png';
    import syncapps_dashboard from '$lib/assets/syncapps_dashboard.png';
    import shortscribeDashboard from '$lib/assets/shortscribe_dashboard_2.png'
    import forecastedFitBanner from '$lib/assets/forecastedfit_banner.png';
    import cazoomi_site from '$lib/assets/cazoomi_site.png';
    import mobile_stl_app from '$lib/assets/mobile_stl_app.png';
    import stl_admin from '$lib/assets/stl_admin.png';
    import auto_invoice from '$lib/assets/auto_invoice.png';
</script>

<section class="surface-card overflow-hidden p-6 md:p-10">
    <div class="grid items-end gap-8 lg:grid-cols-[1.35fr_0.65fr]">
        <div class="flex flex-col gap-6">
            <span class="w-fit rounded-full border border-zinc-900/20 bg-black/5 px-4 py-1 text-xs uppercase tracking-[0.2em] text-zinc-600 dark:border-white/20 dark:bg-white/5 dark:text-zinc-400">
                Available for freelance projects
            </span>
            <h1 class="text-4xl font-semibold leading-tight md:text-5xl">
                I build practical digital products with clean execution.
            </h1>
            <p class="max-w-2xl text-zinc-700 dark:text-zinc-300 md:text-lg">
                I’m a full-stack developer focused on reliable business software—web apps, APIs, mobile experiences, and custom internal tools built for real operations.
            </p>
            <div class="flex flex-wrap items-center gap-4">
                <a href="/contact" class="rounded-full border border-zinc-900 bg-zinc-900 px-8 py-3 text-sm font-semibold text-white hover:bg-transparent hover:text-zinc-900 dark:border-white dark:bg-white dark:text-black dark:hover:text-white">
                    Start a Project
                </a>
                <div class="flex flex-row gap-3 text-xl text-zinc-500 dark:text-zinc-400">
                    <a href="https://github.com/memar1992/" target="_blank" rel="noopener" aria-label="Visit GitHub profile" class="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-900/15 bg-black/5 hover:border-zinc-900 hover:text-zinc-900 dark:border-white/15 dark:bg-white/5 dark:hover:border-white dark:hover:text-white">
                        <i class="fab fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/reymar-ocero-b252a8131/" target="_blank" rel="noopener" aria-label="Visit LinkedIn profile" class="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-900/15 bg-black/5 hover:border-zinc-900 hover:text-zinc-900 dark:border-white/15 dark:bg-white/5 dark:hover:border-white dark:hover:text-white">
                        <i class="fab fa-linkedin"></i>
                    </a>
                    <a href="https://www.facebook.com/reymar.maagad.ocero" target="_blank" rel="noopener" aria-label="Visit Facebook profile" class="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-900/15 bg-black/5 hover:border-zinc-900 hover:text-zinc-900 dark:border-white/15 dark:bg-white/5 dark:hover:border-white dark:hover:text-white">
                        <i class="fab fa-facebook"></i>
                    </a>
                </div>
            </div>
        </div>
        <div class="mx-auto flex h-full w-full max-w-xs items-end md:-mb-8 md:max-w-sm lg:-mb-14">
            <img src={reymar} alt="Reymar Ocero" class="block w-full object-contain grayscale contrast-125" />
        </div>
    </div>
</section>

<section class="py-14 md:py-16">
    <div class="mb-10 flex flex-col gap-3">
        <h2 class="section-title">Services</h2>
        <p class="section-subtitle">
            From product MVPs to production-ready systems, I help teams ship useful software with maintainable architecture and clear UX.
        </p>
    </div>
    <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <ServiceCard title="Web Application Development" description="Custom business systems and dashboards using Laravel, Vue, Svelte, or React." iconName="code" />
        <ServiceCard title="Mobile App Development" description="Cross-platform mobile apps using React Native or Ionic." iconName="mobile-alt" />
        <ServiceCard title="Backend & API Development" description="Secure APIs, integrations, and backend automation." iconName="users-gear" />
        <ServiceCard title="System Maintenance & Optimization" description="Fix bugs, add new features, and keep your system running smoothly." iconName="screwdriver-wrench" />
        <ServiceCard title="Plugin & Integration Development" description="Custom plugins and connectors for tools like Capacitor or internal platforms." iconName="puzzle-piece" />
        <ServiceCard title="Custom Development Services" description="Custom-built software that solves your real problems, not just adds more tools." isCustom={true} iconName="laptop-file" />
    </div>

    <div class="mb-10 mt-14 flex flex-col gap-3">
        <h2 class="section-title">Creative Services</h2>
        <p class="section-subtitle">
            I also support product storytelling through branding, motion design, and edited visual content.
        </p>
    </div>
    <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <ServiceCard title="Logo & Branding Design" description="Simple, memorable logos that capture your brand identity." iconName="palette" />
        <ServiceCard title="Animation & Motion Design" description="Modern Lottie-based animations optimized for web and mobile." iconName="film" />
        <ServiceCard title="Video Editing" description="Clean and professional edits for demos, social media, and presentations." iconName="video" />
    </div>
</section>

<section>
    <div class="mb-10 flex flex-col gap-3">
        <h2 class="section-title">Selected Projects</h2>
        <p class="section-subtitle">
            A curated set of production work across AI products, integrations, business systems, and mobile applications.
        </p>
    </div>

    <div class="mx-auto flex flex-col gap-8">

        <ProjectCard 
            projectThumbnail={forecastedFitBanner} 
            title="ForecastedFit" 
            description="ForecastedFit is an AI-powered weather outfit planner that helps you decide what to wear every day—based on real-time weather conditions and your personal style." 
            projectUrl="https://www.forecastedfit.com/" 
            tech="Flutter, Laravel, and MySQL" 
            role="Full-stack developer — built the app's UI, API, and data flows."
            buttonLabel="Download App"
        />

        <ProjectCard 
            projectThumbnail={shortscribeDashboard} 
            title="Shortscribe" 
            description="Turn your ideas into viral short-form scripts in seconds. Shortscribe rewrites your text into catchy, natural, and ready-to-record scripts for YouTube Shorts, TikTok, and Facebook Reels." 
            projectUrl="https://www.shortscribe.online/" 
            tech="Svelte, ExpressJS, and Supabase" 
            role="Backend and frontend developer — built rewrite logic with AI"
            buttonLabel="Visit Site"
        />

        <ProjectCard 
            projectThumbnail={syncapps_dashboard} 
            title="SyncApps Integration Platform" 
            description="A cloud-based platform that automates data synchronization between business apps, reducing manual work and errors. Built scalable backend flows and dashboards for managing integrations efficiently." 
            projectUrl="https://syncapps.cazoomi.com/login" 
            tech="Java (Play Framework), HTML, Alpine JS, PostgreSQL" 
            role="Backend and frontend developer — built automation logic, data sync flows, and internal dashboards."
            buttonLabel="Visit Site"
        />

        <ProjectCard 
            projectThumbnail={cazoomi_site} 
            title="Cazoomi.com" 
            description="Corporate website for SyncApps by Cazoomi, showcasing products, pricing, and support." 
            projectUrl="https://www.cazoomi.com/" 
            tech="HTML, CSS, JavaScript, WordPress" 
            role="Full-stack developer — optimized loading speed, improved SEO, and built responsive layouts."
            buttonLabel="Visit Site"
        />

        <ProjectCard 
            projectThumbnail={mobile_stl_app} 
            title="STL Mobile Betting App" 
            description="Mobile app used by STL agents and bettors for submitting results and tracking daily reports." 
            projectUrl="/#" 
            tech="Laravel API, React, Ionic, Capacitor" 
            role="Lead Mobile developer, API integration, and Lead UX/UI designer."
            buttonLabel="Visit Site"
            isHideButton={true}
        />

        <ProjectCard 
            projectThumbnail={stl_admin} 
            title="STL Admin System" 
            description="Admin dashboard for Small Town Lottery operations, managing results, agents, and reporting." 
            projectUrl="/#" 
            tech="Laravel, Alpine JS, MySQL" 
            role="Full-stack developer — built dashboards, role-based access, and analytics features."
            buttonLabel="Visit Site"
            isHideButton={true}
        />

        <ProjectCard 
            projectThumbnail={auto_invoice} 
            title="Auto Invoicing Command" 
            description="A backend system that generates and emails invoices automatically based on usage and schedules." 
            projectUrl="https://github.com/memar1992/invoice-generator" 
            tech="NodeJS" 
            role="Backend developer — built recurring billing logic, PDF generation, and email delivery."
            buttonLabel="Checkout Repo"
        />
    </div>

    <div class="mb-10 mt-14 flex flex-col gap-3">
        <h2 class="section-title">Creative Work</h2>
        <p class="section-subtitle">
            Projects focused on motion, storytelling, and interaction polish to elevate digital product experiences.
        </p>
    </div>
    <div class="mx-auto flex flex-col gap-8">
        <ProjectCard 
            projectThumbnail={login_animation_new} 
            title="SyncApps Login Animation" 
            description="Created a smooth login animation using Lottie to make the user experience more engaging and modern. Focused on clean motion, lightweight performance, and visual flow that complements the brand’s simplicity." 
            projectUrl="https://cdn.lottielab.com/l/7dpcHjQG7fq9gP.html" 
            tech="Lottie, JSON Animation, HTML" 
            role="Motion designer & front-end developer — integrated and optimized the animation for web."
            buttonLabel="View animation"
        />

        <ProjectCard 
            projectThumbnail={cazoomi_video} 
            title="Cazoomi Video" 
            description="Edited and produced a company video that introduces integration features and product highlights. Combined motion graphics, subtle transitions, and sound design to create a clear, professional story for the brand." 
            projectUrl="https://www.youtube.com/@SyncAppsbyCazoomi" 
            tech="Adobe Premiere Pro, After Effects, Lottie" 
            role="Video editor & motion designer — handled editing, animation, and overall creative direction."
            buttonLabel="View Videos"
        />
    </div>
</section>
