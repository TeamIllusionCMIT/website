<script>
	import { Marquee } from '@selemondev/svelte-marquee';
	import '@selemondev/svelte-marquee/dist/style.css';
	import Background from '../components/Background.svelte';
	import links from '../data/links.json';
	import sponsors from '../data/sponsors.json';
</script>

<Background text="TEAMILLUSION" first={true} />
<div class="section-wrapper">
	<section class="section">
		<div class="text-left w-3/4 md:w-2/3">
			<h1
				class="text-white opacity-60 hover:opacity-100 duration-500 text-2xl my-0 font-800 -spacing-1 ease-out"
			>
				TEAM ILLUSION
			</h1>
			<h2
				class="text-5xl md:text-7xl my-0 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 font-800 -spacing-3"
			>
				<p class="md:custom-hidden inline">CMIT North's</p>
				 official VEX and FIRST robotics team.
			</h2>
			<div
				class="rise-wrapper whitespace-pre w-fit max-w-4/5 font-800 -spacing-1 flex flex-wrap flex-row"
			>
				{#each links as { href, text }, index}
					<a
						{href}
						class="rise-anim text-neutral-400 hover:text-white text-xl mr-5 decoration-none duration-500 ease-out w-fit"
						style={`--delay: ${index * 200 + 100}ms`}>{`${text}`}</a
					>
				{/each}
			</div>
		</div>
	</section>
	<div class="flex absolute bottom-10 w-screen items-center justify-center">
		<span
			class="font-spacemono text-neutral-500 font-bold px-5 text-center hover:text-white duration-500 ease-out"
			>FRC Team 4464 • VRC Team 23098A/23098B</span
		>
	</div>
</div>

<hr class="border-neutral-600 mx-auto opacity-40 w-1/4" />
<!-- sponsors -->
<Background text="SPONSORS" />
<div class="section-wrapper">
	<main class="section">
		<div class="text-left w-3/4 md:w-2/3">
			<h1
				class="text-neutral-400 hover:text-white duration-500 text-2xl my-0 font-800 -spacing-1 ease-out"
			>
				SPONSORS
			</h1>
			<h2
				class="text-5xl md:text-7xl my-0 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 font-800 -spacing-3"
			>
				The people who make it all possible.
			</h2>
			<p class="-spacing-1 text-2xl mt-1">Team Illusion is proudly sponsored by:</p>
		</div>
		<div
			class="bg-[neutral-600] bg-opacity-20 backdrop-blur-md w-screen md:max-w-4/5 p-10 my-10 rounded-xl text-center"
		>
			<div class="md:flex justify-center flex-wrap flex-gap-10 hidden">
				{#each sponsors as { logo, url, name }}
					<a href={url} target="_blank" class="hover-scale-110 scale-100 duration-250 ease-out">
						<img src={logo} height="100" alt={name} class="h-30 w-content" />
					</a>
				{/each}
			</div>
			<div class="md:hidden">
				<Marquee
					class="md:hidden py-2 -ml-20 w-screen [--duration:15s]"
					fade={true}
					pauseOnHover={true}
				>
					{#each sponsors as { logo, url, name }}
						<a
							href={url}
							target="_blank"
							class="hover-scale-110 scale-100 duration-250 ease-out mx-2"
						>
							<img src={logo} height="100" alt={name} class="h-30" />
						</a>
					{/each}
				</Marquee>
			</div>
			<a href="downloads/prospectus.pdf" class="button text-xl mt-5" style="font-family: Inter"
				><img
					src="attachment.svg"
					alt="paperclip denoting an attachment"
					class="h-[2em] text-xl"
				/>Want to be up here?
			</a>
		</div>
	</main>
</div>
<hr class="border-neutral-600 mx-auto opacity-40 w-1/4" />
<Background text="ABOUT" />
<div class="section-wrapper relative">
	<section class="section">
		<div class="text-left w-3/4 md:w-2/3">
			<h1
				class="text-neutral-400 hover:text-white duration-500 text-2xl my-0 font-800 -spacing-1 ease-out"
			>
				ABOUT
			</h1>
			<h2
				class="text-5xl md:text-7xl my-0 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 font-800 -spacing-3"
			>
				About Team Illusion.
			</h2>
			<p class="-spacing-1 text-xl mt-1">
				At Team Illusion, we believe in the power of innovation, collaboration, transparency, and
				creativity to create change. Our team is more than just a robotics club-- it is a diverse
				community of like-minded individuals who share a passion for science, technology,
				engineering, and mathematics.
			</p>
			<a href="about" style="letter-spacing: -0.5px" class="text-2xl button"
				><img
					src="message.svg"
					alt="paperclip denoting an attachment"
					class="h-[2em] text-xl"
				/>About us</a
			>
		</div>
	</section>
</div>
<hr class="border-neutral-600 mx-auto opacity-40 w-1/4" />
<Background text="CONTACT" last={true} />
<!-- a form that asks for a name, email, message, and has a dropdown for purpose of contact -->
<div class="section-wrapper relative">
	<section class="section">
		<div class="text-left w-3/4 md:w-2/3">
			<h1
				class="text-white opacity-60 hover:opacity-100 duration-500 text-2xl my-0 font-800 -spacing-1 ease-out"
			>
				CONTACT
			</h1>
			<h2
				class="text-5xl md:text-7xl my-0 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 font-800 -spacing-3 pb-2"
			>
				Let's talk.
			</h2>

			<form
				name="contact"
				method="POST"
				data-netlify="true"
				class="flex flex-col flex-gap-2 mt-2 font-[Inter] font-bold -spacing-1 text-lg text-neutral-500"
			>
				<input
					type="text"
					name="name"
					placeholder="Name"
					class="bg-neutral-800 rounded-lg text-md py-2 pl-4 b-neutral-700 b-none font-[Inter] font-bold -spacing-1 text-lg text-white"
				/>
				<input
					type="email"
					name="email"
					placeholder="Email"
					class="bg-neutral-800 rounded-lg text-md py-2 pl-4 b-neutral-700 b-none font-[Inter] font-bold -spacing-1 text-lg text-white"
				/>
				<textarea
					name="message"
					placeholder="Message"
					class="bg-neutral-800 rounded-lg text-md py-2 pl-4 b-neutral-700 b-none font-[Inter] font-bold -spacing-1 text-lg text-white"
				></textarea>
				<select
					name="purpose"
					class="bg-neutral-800 rounded-lg text-md py-2 pl-4 font-bold -spacing-1 text-lg text-white"
				>
					<!-- <option value="" disabled selected class="text-neutral-500">Contact Reason</option> -->
					<option value="general" class="text-white">General Inquiry</option>
					<option value="sponsorship">Sponsorships</option>
					<option value="other">Other</option>
				</select>
				<button type="submit" class="button mt-0 rounded-lg">Submit</button>
			</form>
		</div>
	</section>
	<div class="flex absolute bottom-5 md:bottom-10 w-screen items-center justify-center">
		<span
			class="font-spacemono text-white opacity-50 px-5 text-center hover:opacity-100 duration-500 ease-out"
		>
		</span>
	</div>
</div>

<style>
	button {
		background-color: #6000ff;
	}
</style>
