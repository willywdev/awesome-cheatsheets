<script>
    import HamburgerMenu from '$lib/primitives/HamburgerMenu.svelte';
    import { AppBar } from '@skeletonlabs/skeleton';
    import NavLinks from '../primitives/NavLinks.svelte';
    import Logo from "$lib/images/logo.svg"
</script>

<AppBar class="shadow-lg">
    <svelte:fragment slot="lead">
        <a href="/" class="flex items-center gap-2">
            <img src={Logo} alt="Logo" class="w-16 h-auto">
            <div class="flex flex-col">
                <strong class="text-xl uppercase">Awesome Cheatsheets</strong>
                <p class="hidden -mt-2 text-sm md:block">by willywdev</p>
            </div>
        </a>
    </svelte:fragment>
    <svelte:fragment slot="trail">
        <div class="items-center hidden gap-3 md:flex">
            <NavLinks />
        </div>
        <HamburgerMenu/>
    </svelte:fragment>
</AppBar>