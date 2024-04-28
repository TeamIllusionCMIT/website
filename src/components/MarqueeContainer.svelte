<!-- MarqueeContainer.svelte -->
<script>
import Marquee from "./Marquee.svelte";

const marqueeDirections = ["left", "right"];
</script>

<div class="marquee-container">
  {#each marqueeDirections as direction}
    <Marquee direction={direction} />
  {/each}
</div>

<style>
  .marquee-container {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
</style>
