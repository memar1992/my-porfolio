<script lang="ts">
	export let thumbnail = '';
	export let name = 'Project Name';
	export let summary = 'One sentence summary of the project outcome.';
	export let role = 'Full-stack developer';
	export let tech: string[] = [];
	export let url = '/';
	export let cta = 'View case study';
	export let hideCta = false;
</script>

<article class="surface-card overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_36px_rgba(15,23,42,0.08)]">
	<div class="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
		<div class="p-7 md:p-9">
			<h3 class="text-2xl leading-tight md:text-[1.75rem]">{name}</h3>
			<p class="mt-3 text-base leading-relaxed text-[#6e6e73]">{summary}</p>

			<div class="mt-6 border-t border-[#e5e5ea] pt-4 text-sm text-[#6e6e73]">
				<p><span class="font-semibold text-[#1d1d1f]">My role:</span> {role}</p>
			</div>
			<div class="mt-3 border-t border-[#e5e5ea] pt-4 text-sm text-[#6e6e73]">
				<p><span class="font-semibold text-[#1d1d1f]">Tech stack:</span> {tech.join(', ')}</p>
			</div>

			{#if !hideCta}
				<a class="button-secondary mt-6" href={url} target="_blank" rel="noopener noreferrer">
					{cta}
				</a>
			{/if}
		</div>

		<div class="border-t border-[#e5e5ea] bg-[#f8f8fa] p-4 lg:border-t-0 lg:border-l">
			<img class="h-full w-full rounded-xl border border-[#e5e5ea] object-cover" src={thumbnail} alt={name} loading="lazy" />
		</div>
	</div>
</article>

