<script>
    import Icon from '@iconify/svelte';
    export let url;
    export let icon;
    export let name;
</script>

<a href={url} class="flex items-center gap-2 hover:text-primary-500">
    <Icon icon={icon} width="22"/>{name}
</a>