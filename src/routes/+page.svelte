<script>
    import Background from "../components/Background.svelte";
    let links = [
        { href: "/", text: "Home" },
        { href: "/about", text: "About" },
        { href: "/contact", text: "Contact" },
        { href: "/stats", text: "Stats" },
    ];
</script>
<Background/>

<div class="h-screen w-screen" style="font-family: Array-Wide">
    <header class="mx-auto flex flex-col items-center justify-center text-white lg:max-w-screen-xl w-screen h-screen m-auto">
        <div class="text-left w-2/3">
            <h1 class="text-2xl my-0">TEAM ILLUSION</h1>
            <p class="text-7xl my-0 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">CMIT's official VEX and FIRST robotics team.</p>
            <div class="rise-wrapper whitespace-pre w-fit">
                {#each links as {href, text}, index}
                    <a href={href} class="rise-anim md:inline-flex block text-neutral-400 text-xl mr-5 decoration-none hover:text-white duration-250" style={`--delay: ${index * 200 + 100}ms; font-family: Array-Wide`}
                        >{`${text}`}</a
                    >
				{/each}
            </div>
        </div>
    </header>
</div>