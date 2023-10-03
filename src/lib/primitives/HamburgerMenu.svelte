<script>
    import { Hamburger } from "svelte-hamburgers";
    import { fly } from "svelte/transition";
    let open;
</script>

<div class="z-50 md:hidden">
   <Hamburger --color="white" bind:open/>
</div>
{#if open}
   <div class="fixed inset-0 z-10 flex items-center justify-end md:hidden">
       <nav transition:fly class="flex flex-col items-center justify-center w-1/2 gap-3 py-5 overflow-y-auto z-5 rounded-xl">
           <a href="/" class="text-white">Test 1</a>
           <a href="/">Test 2</a>
           <a href="/">Test 3</a>
           <a href="/">Test 4</a>
           <a
            class="btn btn-sm variant-ghost-surface"
            href="https://github.com/skeletonlabs/skeleton"
            target="_blank"
            rel="noreferrer"
        >
            GitHub
        </a>
       </nav>
   </div>
{/if}