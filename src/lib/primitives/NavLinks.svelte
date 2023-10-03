<script>
    import Icon from "@iconify/svelte";
    import { LightSwitch } from '@skeletonlabs/skeleton';
</script>


			

<a href="/" class="flex items-center gap-0.5 text-base"><Icon icon="ic:outline-home" color="bg-surcace-50-900-token" width="20"/> Home</a>
<details href="/" class="text-base md:hidden"><summary>Categories</summary>
    <div class="flex flex-col items-center gap-1">
        <a href="/">Test 1</a>
        <a href="/">Test 1</a>
        <a href="/">Test 1</a>
        <a href="/">Test 1</a>
        <a href="/">Test 1</a>
        <a href="/">Test 1</a>
        <a href="/">Test 1</a>
        <a href="/">Test 1</a>
    </div>
</details>
<!--Bottom Row-->
<section class="flex items-center gap-2 p-4 card">
    <a
        class="btn-icon btn-icon-sm variant-filled"
        href="https://github.com/willywdev/awesome-cheatsheets"
        target="_blank"
        rel="noreferrer"
    ><Icon icon="teenyicons:github-solid" color="bg-surcace-50-900-token" width="22"/></a>
    <LightSwitch />
</section>

