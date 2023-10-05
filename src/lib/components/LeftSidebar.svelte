<script>
    import Categories from '../primitives/Categories.svelte';
</script>

<section class="fixed hidden w-1/4 h-full pt-4 shadow-xl bg-surface-50-900-token md:block lg:w-1/12 lg:text-center" id="sidebarLeft">
    <h3 class="mb-2 text-xl text-center">Categories</h3>
    <div class="w-full h-0.5 mb-2 bg-surface-50"></div>
    <div class="flex justify-center pt-2">
        <Categories />
    </div>
</section>