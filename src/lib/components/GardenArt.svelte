<script>
  import { onMount } from "svelte";

  let canvas;

  onMount(() => {
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.onload = () => {
      const w = 160;
      const h = 66;
      const dotSize = 2.5;
      const gap = 2;
      const step = dotSize + gap;

      canvas.width = w * step;
      canvas.height = h * step;

      // Draw image to offscreen canvas to sample pixels
      const off = document.createElement("canvas");
      off.width = w;
      off.height = h;
      const offCtx = off.getContext("2d");
      offCtx.drawImage(img, 0, 0, w, h);
      const data = offCtx.getImageData(0, 0, w, h).data;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
          const i = (y * w + x) * 4;
          const r = data[i], g = data[i+1], b = data[i+2];
          ctx.fillStyle = `rgb(${r},${g},${b})`;
          ctx.beginPath();
          ctx.arc(x * step + dotSize/2, y * step + dotSize/2, dotSize/2, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };
    img.src = "data:image/jpeg;base64,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";
  });
</script>

<div class="garden-art">
  <canvas bind:this={canvas} aria-hidden="true"></canvas>
  <p class="caption">dithered image of the humble administrator's garden. suzhou, china</p>
</div>

<style lang="postcss">
  .garden-art {
    @apply w-full overflow-hidden my-14 flex flex-col items-center;
  }
  canvas {
    max-width: 100%;
    height: auto;
    image-rendering: auto;
    filter: saturate(0.5) brightness(1.1);
  }
  :global(.dark) canvas {
    filter: saturate(0.5) brightness(1.5);
    opacity: 0.85;
  }
  .caption {
    @apply text-neutral-400 text-sm mt-3 italic;
  }
</style>
