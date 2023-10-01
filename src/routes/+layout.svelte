<script>
  import isMobile from "@/stores/isMobile.js";
  import { AppShell } from "@skeletonlabs/skeleton";
  import "../app.postcss";
  import Header from '../components/Header.svelte';
  import { checkIfMobile } from '../lib/utils/checkIfMobile';
  import "./styles.css";
  checkIfMobile();
	$: hideSidebar = $isMobile

</script>

<svelte:head>
	<title>Awesome Cheatsheets</title>
	<meta name="description" content="Awesome Cheatsheets for Web Developers" />
</svelte:head>

<div class="app">
<AppShell>
	<svelte:fragment slot="header"><Header /></svelte:fragment>

	<svelte:fragment slot="sidebarLeft">
		{#if !hideSidebar }
		Sidebar Left
		{/if}
	</svelte:fragment>

	<!-- (sidebarRight) -->
	<!-- (pageHeader) -->
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
	<!-- (footer) -->
</AppShell>
</div>

<style>
</style>
