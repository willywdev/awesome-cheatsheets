<script>
    import { AppBar } from '@skeletonlabs/skeleton';
    import HamburgerMenu from '../primitives/HamburgerMenu.svelte';
    import isMobile from '../stores/isMobile';
    $: hideSidebar = $isMobile
</script>

<AppBar>
    <svelte:fragment slot="lead">
        <strong class="text-xl uppercase">Awesome Cheatsheets</strong>
    </svelte:fragment>
    <svelte:fragment slot="trail">
        {#if !hideSidebar}
        <a
            class="btn btn-sm variant-ghost-surface"
            href="https://discord.gg/EXqV7W8MtY"
            target="_blank"
            rel="noreferrer"
        >
            Discord
        </a>
        <a
            class="btn btn-sm variant-ghost-surface"
            href="https://twitter.com/SkeletonUI"
            target="_blank"
            rel="noreferrer"
        >
            Twitter
        </a>
        <a
            class="btn btn-sm variant-ghost-surface"
            href="https://github.com/skeletonlabs/skeleton"
            target="_blank"
            rel="noreferrer"
        >
            GitHub
        </a>
        {:else}
            <HamburgerMenu />
        {/if}
    </svelte:fragment>
</AppBar>