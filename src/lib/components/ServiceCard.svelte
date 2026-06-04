<script lang="ts">
    export let title = 'My Service';
    export let description = 'My Service Description';
    export let icon = 'fa-circle';
</script>

<article class="surface-card p-6 md:p-7">
    <div class="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#e5e5ea] bg-[#f8f8fa] text-sm text-[#1d1d1f]">
        <i class={`fa-solid ${icon}`}></i>
    </div>
    <h3 class="text-xl">{title}</h3>
    <p class="mt-3 text-sm leading-relaxed text-[#6e6e73]">{description}</p>
</article>