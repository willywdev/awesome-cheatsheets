<script>
export let data;
import changeStringFirstLetter from "$lib/utils/changeStringFirstLetter.js"
import cheatsheets from "$lib/data/cheatsheets"

$: slug = changeStringFirstLetter(data.slug);
$: slugLowercase = data.slug.toLowerCase();

console.log(cheatsheets)
</script>

<svelte:head>
	<title>AC - {slug}</title>
	<meta name="description" content="Awesome Cheatsheets for Web Developers">
</svelte:head>


<h2 class="mt-3 mb-1 text-xl font-bold text-center text-primary-400" >{slug.toUpperCase()}</h2>
