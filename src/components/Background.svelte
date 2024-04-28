<script>
// biome-ignore lint/style/useConst: this actually does get redefined
export let text = "TEAMILLUSION";
// biome-ignore lint/style/useConst: this actually does get redefined
export let first = false;
// biome-ignore lint/style/useConst: this actually does get redefined
export let last = false;
const _text = text.repeat(500);
</script>


<div class="h-screen w-screen overflow-clip absolute -z-100 ">
    {#if !last}<div class="absolute left-0 bottom-0 w-screen h-40 bg-gradient-to-b opacity-85 from-transparent to-black z-10 mb-0 p-0"></div>{/if}
    {#if !first}<div class="absolute left-0 top-0 w-screen h-20 bg-gradient-to-t opacity-85 from-transparent to-black z-10 mb-0 p-0"></div>{/if}
    <div class="m-0 h-full w-[105vw] bg-black text-neutral-900 m-0 break-words" style="font-family: Array-Wide; font-size: 3rem; line-height:2.5rem">
        {_text}
    </div>
</div>