<script>
    import Icon from "@iconify/svelte";
    import { LightSwitch } from '@skeletonlabs/skeleton';
</script>


			

<a href="/" class="flex items-center gap-0.5 text-lg hover:text-primary-500"><Icon icon="ic:outline-home" color="bg-surcace-50-900-token" width="20"/> Home</a>
<details href="/" class="text-base cursor-pointer md:hidden "><summary class="hover:text-primary-500">Categories</summary>
    <div class="flex flex-col items-center gap-1">
        <a href="/" class="hover:text-primary-500">Test 1</a>
        <a href="/" class="hover:text-primary-500">Test 1</a>
        <a href="/" class="hover:text-primary-500">Test 1</a>
        <a href="/" class="hover:text-primary-500">Test 1</a>
        <a href="/" class="hover:text-primary-500">Test 1</a>
        <a href="/" class="hover:text-primary-500">Test 1</a>
        <a href="/" class="hover:text-primary-500">Test 1</a>
        <a href="/" class="hover:text-primary-500">Test 1</a>
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

