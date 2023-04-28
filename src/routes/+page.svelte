<script>
    import Background from "../components/Background.svelte";
    let links = [
        { href: "/about", text: "About" },
        { href: "/contact", text: "Contact" },
        { href: "/finances", text: "Finances"}
    ];
</script>
<Background/>

<div class="h-screen w-screen" style="font-family: Inter">
    <header class="mx-auto flex flex-col items-center justify-center text-white lg:max-w-screen-xl w-screen h-screen m-auto">
        <div class="text-left w-3/4 md:w-2/3">
            <p class="text-neutral-400 hover:text-white duration-500 text-2xl my-0 font-800 -spacing-1 ease-out">TEAM ILLUSION</p>
            <p class="text-5xl md:text-7xl my-0 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 font-800 -spacing-3"><span class="hidden md:inline">Chesapeake Math & IT North's</span> <span class="md:hidden inherit">CMIT North's</span> official VEX and FIRST robotics team.</p>
            <div class="rise-wrapper whitespace-pre w-fit max-w-4/5 font-800 -spacing-1 flex flex-wrap flex-row">
                {#each links as {href, text}, index}
                    <a href={href} class="rise-anim text-neutral-400 text-xl mr-5 decoration-none hover:text-white duration-500 ease-out w-fit" style={`--delay: ${index * 200 + 100}ms`}
                        >{`${text}`}</a
                    >
				{/each}
            </div>
        </div>
    </header>
</div>