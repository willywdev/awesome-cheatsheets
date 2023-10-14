<script>
    import { backend, frontend, general, runtimes } from "$lib";
    import Icon from '@iconify/svelte';
</script>

<div>
    <nav class="flex flex-col gap-2 text-xl">
        {#each general as links}
            <a href={links.url} class="flex items-center gap-1 hover:text-primary-500"><Icon icon={links.icon} />{links.name}</a>
        {/each}
        {#each frontend as links}
            <a href={links.url} class="flex items-center gap-1 hover:text-primary-500"><Icon icon={links.icon} />{links.name}</a>
        {/each}
        {#each runtimes as links}
            <a href={links.url} class="flex items-center gap-1 hover:text-primary-500"><Icon icon={links.icon} />{links.name}</a>
        {/each}
        {#each backend as links}
            <a href={links.url} class="flex items-center gap-1 hover:text-primary-500"><Icon icon={links.icon} />{links.name}</a>
        {/each}
    </nav>
</div>
