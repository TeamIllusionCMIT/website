<script>
    import Background from "../components/Background.svelte";
    import Rise from "../components/Rise.svelte";
    let links = [
        { href: "/about", text: "About" },
        { href: "/contact", text: "Contact" },
        { href: "/stats", text: "Stats" },
    ];
</script>
<Background/>

<div class="h-screen w-screen" style="font-family: Inter">
    <header class="mx-auto flex flex-col items-center justify-center text-white lg:max-w-screen-xl w-screen h-screen m-auto">
        <div class="text-left w-2/3">
            <p class="text-neutral-400 hover:text-white duration-50 text-2xl my-0 font-800 -spacing-1">TEAM ILLUSION</p>
            <p class="text-7xl my-0 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 font-800 -spacing-3">CMIT's official VEX and FIRST robotics team.</p>
            <div class="rise-wrapper whitespace-pre w-fit font-800 -spacing-1">
                {#each links as {href, text}, index}
                    <a href={href} class="rise-anim md:inline-flex block text-neutral-400 text-xl mr-5 decoration-none hover:text-white duration-250" style={`--delay: ${index * 200 + 100}ms`}
                        >{`${text}`}</a
                    >
				{/each}
            </div>
        </div>
    </header>
</div>