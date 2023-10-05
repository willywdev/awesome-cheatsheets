<script>
	import Header from '$lib/components/Header.svelte';
	import { AppShell } from '@skeletonlabs/skeleton';
	import '../app.postcss';
	import LeftSidebar from '../lib/components/LeftSidebar.svelte';
</script>



<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<Header />
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<LeftSidebar />
	</svelte:fragment>
	<!-- Page Route Content -->
<div class="md:w-3/4 md:ml-auto md:mr-0">
	<main class="p-2 m-2 card variant-glass-surface">
		<slot/>
	</main>
</div>
</AppShell>
