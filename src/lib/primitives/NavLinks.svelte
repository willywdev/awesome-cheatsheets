<script>
    import Icon from "@iconify/svelte";
    import { LightSwitch } from '@skeletonlabs/skeleton';
    import Categories from './Categories.svelte';
</script>


<a href="/" class="flex items-center gap-0.5 text-lg hover:text-primary-500"><Icon icon="ic:outline-home" color="bg-surcace-50-900-token" width="20"/> Home</a>
<details href="/" class="text-lg cursor-pointer md:hidden "><summary class="hover:text-primary-500">Categories</summary>
    <div class="flex flex-col items-center gap-1">
        <Categories />
    </div>
</details>
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

