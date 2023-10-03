<script>
    import HamburgerMenu from '$lib/primitives/HamburgerMenu.svelte';
    import { AppBar, Avatar } from '@skeletonlabs/skeleton';
    import NavLinks from '../primitives/NavLinks.svelte';
</script>

<AppBar>
    <svelte:fragment slot="lead">
        <a href="/" class="flex items-center gap-2">
            <Avatar initials="AC" background="bg-primary-500"/>
            <strong class="text-xl uppercase">Awesome Cheatsheets</strong>
        </a>
    </svelte:fragment>
    <svelte:fragment slot="trail">
        <div class="items-center hidden gap-3 md:flex">
            <NavLinks />
        </div>
        <HamburgerMenu class="md:hidden"/>
    </svelte:fragment>
</AppBar>