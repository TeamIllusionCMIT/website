<script>
	import Background from '../components/Background.svelte';
	let links = [
		{ href: '/about', text: 'About' },
		{ href: '/contact', text: 'Contact' },
		{ href: '/finances', text: 'Finances' },
		{ href: 'https://bank.hackclub.com/donations/start/teamillusion', text: 'Donate' }
	];

	let sponsors = [
		{
			logo: 'sponsors/eba-engineering.svg',
			url: 'https://ebaengineering.com',
			name: 'EBA Engineering'
		},
		{ logo: 'sponsors/first.avif', url: 'https://www.firstinspires.org/', name: 'FIRST' },
		{
			logo: 'sponsors/hcb.svg',
			url: 'https://hackclub.com/fiscal-sponsorship/',
			name: 'Hack Club Bank'
		},
		{
			logo: 'sponsors/clf.avif',
			url: 'https://clfmd.org/',
			name: 'Chesapeake Lighthouse Foundation'
		}
	];
</script>

<Background />

<div class="h-screen w-screen" style="font-family: Inter">
	<header
		class="mx-auto flex flex-col items-center justify-center text-white lg:max-w-screen-xl w-screen h-screen m-auto overflow-x-clip"
	>
		<div class="text-left w-3/4 md:w-2/3">
			<p
				class="text-neutral-400 hover:text-white duration-500 text-2xl my-0 font-800 -spacing-1 ease-out"
			>
				TEAM ILLUSION
			</p>
			<p
				class="text-5xl md:text-7xl my-0 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 font-800 -spacing-3"
			>
				<span class="hidden md:inline">Chesapeake Math & IT North's</span>
				<span class="md:hidden inherit">CMIT North's</span> official VEX and FIRST robotics team.
			</p>
			<div
				class="rise-wrapper whitespace-pre w-fit max-w-4/5 font-800 -spacing-1 flex flex-wrap flex-row"
			>
				{#each links as { href, text }, index}
					<a
						{href}
						class="rise-anim text-neutral-400 text-xl mr-5 decoration-none hover:text-white duration-500 ease-out w-fit"
						style={`--delay: ${index * 200 + 100}ms`}>{`${text}`}</a
					>
				{/each}
			</div>
		</div>
		<div
			class="bg-neutral-600 bg-opacity-10 backdrop-blur-md max-w-4/5 mt-5 p-10 rounded-xl text-center"
		>
			<h2 class="mt-0">Proudly sponsored by:</h2>
			<div class="flex justify-center flex-gap-10">
				{#each sponsors as { logo, url, name }}
					<a href={url} target="_blank" class="hover-scale-110 scale-100 duration-250 ease-out">
						<img src={logo} height="100" alt={name} />
					</a>
				{/each}
			</div>
			<a
				href="mailto:terry@teamillusion.org?subject=Sponsorship%20Inquiry"
				class="button"
				style="font-family: Inter"
				><img src="attachment.svg" alt="paperclip denoting an attachment" class="h-[1.5em]" />Want
				to be up here?
			</a>
		</div>
	</header>
</div>
<div class="flex absolute bottom-5 w-screen items-center justify-center">
	<div class=""></div>
	<span class="font-spacemono text-neutral-500 font-bold">FRC 4464 • VEX 23098A/23098B</span>
</div>
