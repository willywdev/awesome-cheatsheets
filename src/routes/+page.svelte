<script>
    import landingPageImage from "$lib/images/caspar-camille-rubin-0qvBNep1Y04-unsplash.jpg"
</script>

<svelte:head>
	<title>Awesome Cheatsheets</title>
	<meta name="description" content="Awesome Cheatsheets for Web Developers">
</svelte:head>

<section class="flex flex-col items-center ">
    <p class="text-center opacity-50">Click on Categories to check out Guides, Lists & Awesome Cheatsheets!</p>
    <div class="p-2">
        <img src={landingPageImage} alt="Landing Page" class="border-2 border-solid rounded-lg shadow-md border-primary-500 lg:w-[600px] lg:h-auto" loading="lazy">
    </div>
    <h2 class="mt-3 text-lg font-bold text-center text-primary-400" >Welcome to Awesome Cheatsheets!</h2>
    <p class="mt-2 text-lg text-center">Unlock the power of web development with our curated collection of resources. Whether you're diving into HTML, CSS, React or exploring the vast world of JavaScript frameworks, we've got you covered.</p>
    <p class="mt-2 text-lg text-center">Navigate through our extensive categories to find handpicked cheatsheets, guides, and valuable links to accelerate your learning journey.</p>
    <p class="mt-2 mb-5 text-lg text-center text-primary-400">Level up your skills, one cheat sheet at a time. Let's get started!</p>
</section>
