<script lang="ts">
  import { fade } from "svelte/transition";

  export let name: string;
  export let url: string;
  export let dates: string;
  export let location: string;
  export let defaultHidden = false;

  let hidden = defaultHidden;
</script>

<div
  class="mb-8"
  class:cursor-pointer={hidden}
  on:click={() => (hidden = false)}
  on:keypress={() => {}}
>
  <h3 class="text-black text-lg leading-tight mb-1">
    <a class="link" href={url}>{name}</a>
  </h3>
  <p class="font-light mb-2">
    <span class="whitespace-nowrap">{dates}</span>
    <span class="px-0.5 text-gray-500">•</span>
    <span class="whitespace-nowrap">{location}</span>
  </p>
  {#if !hidden}
    <ul class="list-disc pl-7 marker:text-neutral-400" in:fade|local>
      <slot />
    </ul>
  {/if}
</div>
