<script>
    import { Hamburger } from "svelte-hamburgers";
    import { slide } from "svelte/transition";
    import NavLinks from './NavLinks.svelte';
    let open;
</script>

<div class="z-50 md:hidden">
   <Hamburger --color="white" bind:open/>
</div>
{#if open}
   <div class="fixed inset-0 z-10 flex items-center justify-end md:hidden">
       <nav transition:slide={{
         axis: "x"
       }} class="flex flex-col items-center justify-end w-3/4 h-full gap-3 py-5 overflow-y-auto shadow-2xl bg-surface-50-900-token z-5">
           <NavLinks />
       </nav>
   </div>
{/if}