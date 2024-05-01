<script lang="ts">
export let text: string;
export const _class: string = "";
export const text_class: string = "";
</script>

<div class={`rise-wrapper whitespace-pre w-fit ${_class}`}>
{#each text.split(" ") as word, index}
    <p class={`rise-anim md:inline-flex block text-xl mr-1 decoration-none duration-250 ${text_class}`} style={`--delay: ${index * 200 + 100}ms`}
        >{`${word}`}</p>
{/each}
</div>