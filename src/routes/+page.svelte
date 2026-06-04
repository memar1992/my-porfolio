<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import ServiceCard from '$lib/components/ServiceCard.svelte';
	import { featuredProjects } from '$lib/data/projects';
	import { services } from '$lib/data/services';
</script>

<section class="section-wrap pt-10 md:pt-16">
	<div class="surface-card p-8 md:p-12">
		<span class="eyebrow">Simple software. Built properly.</span>
		<h1 class="mt-6 max-w-4xl text-4xl leading-tight md:text-6xl">
			Full-stack developer building practical software for real businesses.
		</h1>
		<p class="mt-6 max-w-3xl text-base leading-relaxed md:text-xl">
			I help teams turn messy workflows into clean web apps, mobile apps, dashboards, APIs, and
			automation tools.
		</p>
		<div class="mt-8 flex flex-wrap gap-3">
			<a href="#featured-projects" class="button-primary">View Projects</a>
			<a href="/contact" class="button-secondary">Contact Me</a>
		</div>
		<p class="stat-note"><i class="fa-solid fa-circle-check mr-2 text-[#0071e3]"></i>Available for freelance and contract work.</p>
	</div>
</section>

<section class="section-wrap border-t border-[#e5e5ea]">
	<div class="github-card surface-card p-8 md:p-12">
		<p class="eyebrow">GitHub Activity</p>
		<h2 class="mt-5 text-3xl leading-tight md:text-4xl">Building consistently.</h2>

		<div class="mt-6 overflow-x-auto rounded-xl border border-[#e5e5ea] bg-white p-4">
			<img
				src="https://ghchart.rshah.org/0A1020/memar1992"
				alt="GitHub contribution chart"
				class="min-w-[720px]"
				loading="lazy"
			/>
		</div>
	</div>
</section>

<section id="featured-projects" class="section-wrap border-t border-[#e5e5ea]">
	<div>
		<h2 class="section-title">Featured projects</h2>
		<p class="section-subtitle">
			Focused product work built for real usage, clear operations, and long-term maintainability.
		</p>
	</div>
	<div class="mt-8 grid gap-6 md:gap-8">
		{#each featuredProjects as project}
			<ProjectCard
				name={project.name}
				summary={project.summary}
				role={project.role}
				tech={project.tech}
				url={project.url}
				thumbnail={project.thumbnail}
				hideCta={project.hideCta ?? false}
				cta="See details"
			/>
		{/each}
	</div>
</section>

<section class="section-wrap border-t border-[#e5e5ea]">
	<div>
		<h2 class="section-title">What I build</h2>
		<p class="section-subtitle">
			Clear product scopes and stable implementation across web, mobile, and backend systems.
		</p>
	</div>
	<div class="mt-8 grid gap-5 md:grid-cols-2">
		{#each services as service}
			<ServiceCard title={service.title} description={service.description} icon={service.icon} />
		{/each}
	</div>
</section>

<section class="section-wrap border-t border-[#e5e5ea]">
	<div class="surface-card p-8 md:p-12">
		<h2 class="section-title">About</h2>
		<p class="section-subtitle mt-5 max-w-4xl">
			I’m Reymar, a full-stack developer focused on building software that is useful, stable, and easy
			to maintain. I like working on real business problems: booking flows, dashboards, admin systems,
			automation, APIs, mobile apps, and internal tools.
		</p>
	</div>
</section>

<section class="section-wrap border-t border-[#e5e5ea]">
	<div>
		<h2 class="section-title">Tech stack</h2>
		<p class="section-subtitle">Tools I use to ship production-ready software across product layers.</p>
	</div>
	<div class="mt-8 grid gap-5 md:grid-cols-2">
		<div class="surface-card p-6">
			<h3 class="text-lg"><i class="fa-solid fa-code mr-2 text-[#0071e3]"></i>Frontend</h3>
			<p class="mt-2 text-sm text-[#6e6e73]">React, Svelte, Vue, Alpine</p>
		</div>
		<div class="surface-card p-6">
			<h3 class="text-lg"><i class="fa-solid fa-database mr-2 text-[#0071e3]"></i>Backend</h3>
			<p class="mt-2 text-sm text-[#6e6e73]">Laravel, Node.js, Express, NestJS, Play Framework</p>
		</div>
		<div class="surface-card p-6">
			<h3 class="text-lg"><i class="fa-solid fa-mobile-screen-button mr-2 text-[#0071e3]"></i>Mobile</h3>
			<p class="mt-2 text-sm text-[#6e6e73]">Ionic, Capacitor, React Native, Flutter</p>
		</div>
		<div class="surface-card p-6">
			<h3 class="text-lg"><i class="fa-solid fa-server mr-2 text-[#0071e3]"></i>Database</h3>
			<p class="mt-2 text-sm text-[#6e6e73]">MySQL, PostgreSQL, Supabase</p>
		</div>
		<div class="surface-card p-6 md:col-span-2">
			<h3 class="text-lg"><i class="fa-solid fa-toolbox mr-2 text-[#0071e3]"></i>Tools</h3>
			<p class="mt-2 text-sm text-[#6e6e73]">GitHub, Bitbucket, AWS, Figma</p>
		</div>
	</div>
</section>
<section class="section-wrap border-t border-[#e5e5ea] pb-6 md:pb-10">
	<div class="surface-card p-8 text-center md:p-12">
		<h2 class="section-title">Have a project in mind?</h2>
		<p class="mx-auto mt-4 max-w-2xl text-base text-[#6e6e73] md:text-lg">
			Tell me what you’re trying to build, improve, or automate.
		</p>
		<a href="/contact" class="button-primary mt-8">Contact Me</a>
	</div>
</section>
