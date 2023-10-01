<script>
    import isMobile from "@/stores/isMobile.js";
    import Hamburgermenu from '../primitives/Hamburgermenu.svelte';
$: showHamburger = $isMobile
</script>

<header class="p-5 flex items-center justify-between relative z-20 bg-surface-900">
    <h1 class="text-xl font-bold"><span class="gradient-heading">Awesome Cheatsheets</span></h1>
    {#if showHamburger}
    <Hamburgermenu />
    {/if}
</header>
