<script>
    import HamburgerMenu from '$lib/primitives/HamburgerMenu.svelte';
    import { AppBar, Avatar } from '@skeletonlabs/skeleton';
    import NavLinks from '../primitives/NavLinks.svelte';
</script>

<AppBar class="shadow-lg">
    <svelte:fragment slot="lead">
        <a href="/" class="flex items-center gap-2">
            <Avatar initials="AC" background="bg-primary-500"/>
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