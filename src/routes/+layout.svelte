<script>
	import Header from '$lib/components/Header.svelte';
	import { AppShell } from '@skeletonlabs/skeleton';
	import '../app.postcss';
	import Categories from '../lib/primitives/Categories.svelte';
</script>

<svelte:head>
	<title>Awesome Cheatsheets</title>
	<meta name="description" content="Awesome Cheatsheets for Web Developers">
</svelte:head>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<Header />
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<section class="fixed hidden w-1/4 h-full pt-4 shadow-xl bg-surface-50-900-token md:block lg:w-1/12 lg:text-center" id="sidebarLeft">
			<h3 class="mb-2 text-xl text-center">Categories</h3>
			<div class="w-full h-0.5 mb-2 bg-surface-50"></div>
			<div class="flex justify-center pt-2">
				<Categories />
			</div>
		</section>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
