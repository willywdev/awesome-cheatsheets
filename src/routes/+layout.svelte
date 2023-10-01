<script>
	import { AppShell } from '@skeletonlabs/skeleton';
	import '../app.postcss';
	import Header from '../lib/components/Header.svelte';
	import { checkIfMobile } from "../lib/utils/checkIfMobile";
	checkIfMobile()
	
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
	<!-- Page Route Content -->
	<slot />
</AppShell>
