<script>
// svelte docs: data prop that is given from +page.js
export let data;
import Breadcrumbs from '../../lib/primitives/Breadcrumbs.svelte';
</script>

<svelte:head>
	<title>AC - {data.slug}</title>
	<meta name="description" content="Awesome Cheatsheets for Web Developers">
</svelte:head>

<Breadcrumbs slug={data}/>
<h2>Hello!</h2>