<script>
import CardContainer from '../../lib/primitives/CardContainer.svelte';
export let data;

$: cheatsheet = data.cheatsheets;
$: slug = data.slug;

</script>

<svelte:head>
	<title>Awesome Cheatsheets - {slug.toUpperCase()}</title>
	<meta name="description" content="Awesome Cheatsheets for Web Developers">
</svelte:head>

<h2 class="mt-3 mb-1 text-xl font-bold text-center text-primary-400" >{slug.toUpperCase()}</h2>
<CardContainer>
		{#each cheatsheet as item}
			<a href={item.url} target="_blank" class="block max-w-sm p-4 border rounded-lg shadow h-50 border-surface-300 bg-surface-100 hover:bg-gray-100 dark:bg-surface-700 dark:border-surface-500 dark:hover:bg-surface-500">
				<li class="relative">
					{#if item.isGoat}
					<div aria-label="recommended" class="absolute right-0">🐐</div>
					{/if}
					<h3 class="mb-1 text-lg font-bold tracking-tight">{item.title}</h3>
					<p class="font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
					<p class="text-sm text-gray-600 dark:text-gray-500">{new URL(item.url).hostname}</p>
				</li>
			</a>
		{/each}
</CardContainer>

