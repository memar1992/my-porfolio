<script>
	import reymar from '$lib/assets/reymar.png';
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
		<h2 class="text-3xl font-bold mb-10">My Services</h2>

		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			<!-- Service 1 -->
			<div
				class="bg-white dark:bg-[#1c1c1c] p-6 rounded-sm shadow-sm transition-all duration-300 ease-in-out hover:shadow-md hover:-translate-y-1"
			>
				<div class="text-amber-600 mb-4 text-3xl">
					<i class="fas fa-code"></i>
				</div>
				<h3 class="text-xl font-semibold mb-2">Web Application Development</h3>
				<p class="text-gray-600 dark:text-gray-400 text-sm">
					Custom business systems and dashboards using Laravel, Vue, Svelte, or React.
				</p>
			</div>
            <!-- Service 2 -->
			<div
            class="bg-white dark:bg-[#1c1c1c] p-6 rounded-sm shadow-sm transition-all duration-300 ease-in-out hover:shadow-md hover:-translate-y-1"
            >
                <div class="text-amber-600 mb-4 text-3xl">
                    <i class="fas fa-mobile-alt"></i>
                </div>
                <h3 class="text-xl font-semibold mb-2">Mobile App Development</h3>
                <p class="text-gray-600 dark:text-gray-400 text-sm">
                    Cross-platform mobile apps using React Native or Ionic.
                </p>
            </div>

            <!-- Service 3 -->
			<div
            class="bg-white dark:bg-[#1c1c1c] p-6 rounded-sm shadow-sm transition-all duration-300 ease-in-out hover:shadow-md hover:-translate-y-1"
            >
                <div class="text-amber-600 mb-4 text-3xl">
                    <i class="fas fa-users-gear"></i>
                </div>
                <h3 class="text-xl font-semibold mb-2">Backend & API Development</h3>
                <p class="text-gray-600 dark:text-gray-400 text-sm">
                    Secure APIs, integrations, and backend automation.
                </p>
            </div>

            <!-- Service 4 -->
			<div
            class="bg-white dark:bg-[#1c1c1c] p-6 rounded-sm shadow-sm transition-all duration-300 ease-in-out hover:shadow-md hover:-translate-y-1"
            >
                <div class="text-amber-600 mb-4 text-3xl">
                    <i class="fas fa-screwdriver-wrench"></i>
                </div>
                <h3 class="text-xl font-semibold mb-2">System Maintenance & Optimization</h3>
                <p class="text-gray-600 dark:text-gray-400 text-sm">
                    Fix bugs, add new features, and keep your system running smoothly.
                </p>
            </div>
            <!-- Service 5 -->
            <div
            class="bg-white dark:bg-[#1c1c1c] p-6 rounded-sm shadow-sm transition-all duration-300 ease-in-out hover:shadow-md hover:-translate-y-1"
            >
                <div class="text-amber-600 mb-4 text-3xl">
                    <i class="fas fa-puzzle-piece"></i>
                </div>
                <h3 class="text-xl font-semibold mb-2">Plugin & Integration Development</h3>
                <p class="text-gray-600 dark:text-gray-400 text-sm">
                    Custom plugins and connectors for tools like Capacitor or internal platforms.
                </p>
            </div>

            <!-- Service 6 -->
            <div
            class="bg-gray-100 dark:bg-amber-500 p-6 rounded-sm shadow-sm transition-all duration-300 ease-in-out hover:shadow-md hover:-translate-y-1"
            >
                <div class="text-amber-600 dark:text-amber-800 mb-4 text-3xl">
                    <i class="fas fa-laptop-file"></i>
                </div>
                <h3 class="text-xl font-semibold mb-2 dark:text-gray-800">Custom Development Services</h3>
                <p class="text-gray-600 dark:text-gray-900 text-sm">
                    Custom-built software that solves your real problems, not just adds more tools.
                </p>
            </div>
		</div>
	</div>
</section>
