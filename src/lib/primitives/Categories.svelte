<script>
    import categories from "$lib/data/categories.json"
    import CategoryLink from './CategoryLink.svelte';
</script>

<div>
    <nav class="flex flex-col gap-2 text-xl">
        {#each categories as category}
            <CategoryLink url={category.url} name={category.name} icon={category.icon}/>
        {/each}
    </nav>
</div>
