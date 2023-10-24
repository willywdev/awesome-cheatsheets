<script>
export let data;
import changeStringFirstLetter from "$lib/utils/changeStringFirstLetter.js"
import CardContainer from '../../lib/primitives/CardContainer.svelte';
$: slug = changeStringFirstLetter(data.slug);
$: sheet = data.sheet
</script>

<svelte:head>
	<title>AC - {slug.toUpperCase()}</title>
	<meta name="description" content="Awesome Cheatsheets for Web Developers">
</svelte:head>

<h2 class="mt-3 mb-1 text-xl font-bold text-center text-primary-400" >{slug.toUpperCase()}</h2>
<CardContainer>
		{#each sheet as item}
			<a href={item.url} target="_blank" class="block max-w-sm p-6 border rounded-lg shadow border-surface-300 bg-surface-100 hover:bg-gray-100 dark:bg-surface-700 dark:border-surface-500 dark:hover:bg-surface-500">
				<li>
					<h3 class="mb-2 text-xl font-bold tracking-tight">{item.title}</h3>
					<p>{item.description}</p>
				</li>
			</a>
		{/each}
</CardContainer>