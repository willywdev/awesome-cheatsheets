<script>
    import isMobile from "@/stores/isMobile.js";
    import Hamburgermenu from '../primitives/Hamburgermenu.svelte';
$: showHamburger = $isMobile
</script>

<header class="m-1 p-5 bg-gray-900 rounded-md flex items-center justify-between relative z-20">
    <h1 class="text-2xl font-bold"><span class="gradient-heading">Awesome Cheatsheets</span></h1>
    {#if showHamburger}
    <Hamburgermenu />
    {/if}
</header>
