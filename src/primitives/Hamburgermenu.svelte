<script>
     import { Hamburger } from "svelte-hamburgers";
     import { fly } from "svelte/transition";

    let open;

</script>

<div class="z-50">
    <Hamburger --color="white" bind:open/>
</div>
{#if open}
    <div class="fixed inset-0 z-10 flex justify-end items-center">
        <nav transition:fly class="flex flex-col py-5 z-5 w-1/3 gap-3 items-center justify-center overflow-y-auto rounded-xl">
            <a href="/" class="text-white">Test 1</a>
            <a href="/">Test 2</a>
            <a href="/">Test 3</a>
            <a href="/">Test 4</a>
        </nav>
    </div>
{/if}