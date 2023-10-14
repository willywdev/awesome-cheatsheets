<script>
// svelte docs: data prop that is given from +page.js
export let data;
import changeStringFirstLetter from "$lib/utils/changeStringFirstLetter.js"

$: slug = changeStringFirstLetter(data.slug);
</script>

<svelte:head>
	<title>AC - {slug}</title>
	<meta name="description" content="Awesome Cheatsheets for Web Developers">
</svelte:head>


<h2>Hello!</h2>