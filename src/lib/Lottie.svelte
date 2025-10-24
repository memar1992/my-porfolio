<script lang="ts">
    import lottie from 'lottie-web';
    import { onMount } from 'svelte';
  
    export let src: string; // path or URL to your .json animation
    export let loop: boolean = true;
    export let autoplay: boolean = true;
    export let speed: number = 1;
  
    let container: HTMLDivElement;
  
    onMount(() => {
      const anim = lottie.loadAnimation({
        container,
        renderer: 'svg',
        loop,
        autoplay,
        path: src
      });
  
      anim.setSpeed(speed);
  
      return () => anim.destroy();
    });
  </script>
  
  <div bind:this={container} class="w-32 h-32"></div>
  