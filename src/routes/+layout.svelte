<script>
	import Header from '$lib/components/Header.svelte';
	import { AppShell } from '@skeletonlabs/skeleton';
	import '../app.postcss';
	import Content from '../lib/components/Content.svelte';
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
	<Content>
		<slot />
	</Content>
</AppShell>
