<script>
	import isMobile from "@/stores/isMobile.js";
	import { AppShell } from "@skeletonlabs/skeleton";
	import Header from '../components/Header.svelte';
	import { checkIfMobile } from '../lib/utils/checkIfMobile';
	
  	checkIfMobile();
	$: hideSidebar = $isMobile
</script>

<svelte:head>
	<title>Awesome Cheatsheets</title>
	<meta name="description" content="Awesome Cheatsheets for Web Developers" />
</svelte:head>


<AppShell class="bg-primary-50-900-token">
	<svelte:fragment slot="header"><Header /></svelte:fragment>

	<svelte:fragment slot="sidebarLeft">
		{#if !hideSidebar }
		Sidebar Left
		{/if}
	</svelte:fragment>

	<!-- (sidebarRight) -->
	<!-- (pageHeader) -->
	<!-- Router Slot -->
	<main>
		<slot />
	</main>
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
	<!-- (footer) -->
</AppShell>


