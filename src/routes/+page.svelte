<script>
	import reymar from '$lib/assets/reymar.png';
    import syncapps from '$lib/assets/syncapps.png';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import ServiceCard from '$lib/components/ServiceCard.svelte';
</script>

<div class="rounded-sm dark:bg-[#1c1c1c] bg-[#f5f5f5] p-10 pb-0">
	<div class="flex flex-row gap-3 relative">
		<div class="basis-3/5 mb-10">
			<div class="flex flex-col gap-7">
				<h1 class="text-3xl font-bold">
					I’m a freelance full-stack developer who builds practical, reliable software for real
					businesses.
				</h1>
				<p class="dark:text-gray-400 text-gray-600">
					I build web and mobile applications that help businesses work smarter. I’ve worked on
					various custom tools and systems for automation and daily operations.
				</p>
				<div class="flex-none">
					<button
						class="transition duration-300 ease-in-out rounded-full text-amber-500 dark:text-gray-900 bg-amber-100 dark:bg-[#f48f40] px-10 py-4 text-center font-bold cursor-pointer hover:bg-gray-800 hover:text-white"
					>
						See my work
					</button>
				</div>
			</div>
		</div>
		<div class="absolute right-0 bottom-0 basis-2/5">
			<div class="w-70">
				<img src={reymar} alt="Reymar Ocero" class="w-auto" />
			</div>
		</div>
	</div>
</div>

<section class="py-16">
	<div class="text-center">
        <div class="flex justify-center px-6 text-center mb-10">
            <div class="flex flex-col gap-2 w-1/2">
                <h2 class="text-3xl font-bold">My Services</h2>
                <p class="text-gray-600 dark:text-gray-400 text-sm">
                    Whether you need a new app, a system upgrade, or a tool built just for your workflow, I can help bring it to life.
                </p>
            </div>
        </div>
		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			<!-- Service 1 -->
             <ServiceCard title="Web Application Development" description="Custom business systems and dashboards using Laravel, Vue, Svelte, or React." iconName="code" />
            <!-- Service 2 -->
             <ServiceCard title="Mobile App Development" description="Cross-platform mobile apps using React Native or Ionic." iconName="mobile-alt" />
            <!-- Service 3 -->
             <ServiceCard title="Backend & API Development" description="Secure APIs, integrations, and backend automation." iconName="users-gear" />
            <!-- Service 4 -->
             <ServiceCard title="System Maintenance & Optimization" description="Fix bugs, add new features, and keep your system running smoothly." iconName="screwdriver-wrench" />
            <!-- Service 5 -->
             <ServiceCard title="Plugin & Integration Development" description="Custom plugins and connectors for tools like Capacitor or internal platforms." iconName="puzzle-piece" />
            <!-- Service 6 -->
            <ServiceCard title="Custom Development Services" description="Custom-built software that solves your real problems, not just adds more tools." isCustom={true} iconName="laptop-file" />
		</div>
        <div class="flex justify-center px-6 text-center my-10">
            <div class="flex flex-col gap-2 w-1/2">
                <h2 class="text-3xl font-bold">Other Services</h2>
                <p class="text-gray-600 dark:text-gray-400 text-sm">
                    I also offer creative and visual services to support your brand or product.
                </p>
            </div>
        </div>
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ServiceCard title="Logo & Branding Design" description="Simple, memorable logos that capture your brand’s identity." iconName="palette" />
            <ServiceCard title="Animation & Motion Design" description="Smooth, modern animations using Lottie for web and mobile apps." iconName="film" />
            <ServiceCard title="Video Editing" description="Clean, professional edits for demos, social content, or presentations." iconName="video" />
        </div>
	</div>
</section>

<section>
    <div class="flex justify-center px-6 text-center mb-10">
        <div class="flex flex-col gap-2 w-1/2">
            <h2 class="text-3xl font-bold">My Projects</h2>
            <p class="text-gray-600 dark:text-gray-400 text-sm">
                Selected projects that showcase my experience in full-stack web and mobile development.
            </p>
        </div>
    </div>

    <div class="mx-auto flex flex-col gap-10">
        <ProjectCard 
            projectThumbnail={syncapps} 
            title="SyncApps Integration Platform" 
            description="A cloud-based platform that automates data synchronization between business apps, reducing manual work and errors. Built scalable backend flows and dashboards for managing integrations efficiently." 
            projectUrl="/#" 
            tech="Java (Play Framework), HTML, Alpine JS, PostgreSQL" 
            role="Backend and frontend developer — built automation logic, data sync flows, and internal dashboards."
            buttonLabel="Visit Site"
        />

        <ProjectCard 
            projectThumbnail={syncapps} 
            title="Cazoomi.com" 
            description="Corporate website for SyncApps by Cazoomi, showcasing products, pricing, and support." 
            projectUrl="/#" 
            tech="HTML, CSS, JavaScript, WordPress" 
            role="Full-stack developer — optimized loading speed, improved SEO, and built responsive layouts."
            buttonLabel="Visit Site"
        />

        <ProjectCard 
            projectThumbnail={syncapps} 
            title="STL Mobile Betting App" 
            description="Mobile app used by STL agents and bettors for submitting results and tracking daily reports." 
            projectUrl="/#" 
            tech="Laravel API, React, Ionic, Capacitor" 
            role="Lead Mobile developer, API integration, and Lead UX/UI designer."
            buttonLabel="Visit Site"
        />

        <ProjectCard 
            projectThumbnail={syncapps} 
            title="STL Admin System" 
            description="Admin dashboard for Small Town Lottery operations, managing results, agents, and reporting." 
            projectUrl="/#" 
            tech="Laravel, Alpine JS, MySQL" 
            role="Full-stack developer — built dashboards, role-based access, and analytics features."
            buttonLabel="Visit Site"
        />

        <ProjectCard 
            projectThumbnail={syncapps} 
            title="Auto Invoicing System" 
            description="A backend system that generates and emails invoices automatically based on usage and schedules." 
            projectUrl="/#" 
            tech="NodeJS" 
            role="Backend developer — built recurring billing logic, PDF generation, and email delivery."
            buttonLabel="Visit Site"
        />
    </div>
</section>
