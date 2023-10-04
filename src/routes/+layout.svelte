<script>
	import Header from '$lib/components/Header.svelte';
	import { AppShell } from '@skeletonlabs/skeleton';
	import '../app.postcss';
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
		<section class="fixed hidden w-1/4 h-full pt-4 pl-4 bg-surface-50-900-token md:block" id="sidebarLeft">
			<h3 class="text-lg">Categories</h3>
			
		</section>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
