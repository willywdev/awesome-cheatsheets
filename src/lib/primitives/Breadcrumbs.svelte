<script>
    // prop is getting set by sites
    export let slug;
    import changeStringFirstLetter from "$lib/utils/changeStringFirstLetter.js"

    const newSlug = changeStringFirstLetter(slug.slug)
</script>


<ol class="mt-2 breadcrumb">
	<li class="crumb-separator" aria-hidden>&rsaquo;</li>
	<li class="crumb"><a class="anchor" href="/">Home</a></li>
    {#if slug}
	<li class="crumb-separator" aria-hidden>&rsaquo;</li>
	<li>{newSlug}</li>
    {/if}
</ol>