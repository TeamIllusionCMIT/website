<script lang="ts">
	export let href: string;
    export let away: boolean = false;
    export let back: boolean = false;
</script>

{#if back}
<a href={href} class="group text-white font-bold">
    <span class="inline-block font-normal group-hover:-translate-x-1 duration-500 ease-out">←</span>
    <slot/> 
</a>
{:else if away}
<a href={href} class="group text-white font-bold">
    <slot/> 
    <span class="inline-block font-normal group-hover:-translate-y-[0.125rem] group-hover:translate-x-[0.125rem] duration-500 ease-out">
        ↗
    </span>
</a>
{:else}
<a href={href} class="group text-white font-bold">
    <slot/> 
    <span class="inline-block font-normal group-hover:translate-x-[0.125rem] duration-500 ease-out">
        →
    </span>
</a>
{/if}