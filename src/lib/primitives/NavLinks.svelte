<script>
    import Icon from "@iconify/svelte";
    import { LightSwitch } from '@skeletonlabs/skeleton';
    import Categories from './Categories.svelte';
</script>

<div class="flex flex-col items-center gap-1 md:hidden">
    <Categories />
</div>
<!--Bottom Row-->
<section class="flex items-center gap-2 p-4 card bg-surface-300-600-token hover:bg-surface-200-700-token">
    <a
        class="btn-icon btn-icon-sm variant-filled"
        href="https://github.com/willywdev/awesome-cheatsheets"
        target="_blank"
        rel="noreferrer"
    ><Icon icon="teenyicons:github-solid" color="bg-surcace-50-900-token" width="22"/></a>
    <LightSwitch />
</section>

