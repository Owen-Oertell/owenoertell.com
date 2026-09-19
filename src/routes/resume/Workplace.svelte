<script lang="ts">
  export let title: string;
  export let company: string;
  export let url: string;
  export let dates: string;
  export let location: string;
</script>

<article>
  <div class="entry-header">
    <h3 class="text-black font-medium">
      <a class="link" href={url}>{company}</a>
    </h3>
    <p class="text-sm text-neutral-500">{dates}</p>
  </div>
  <p class="mt-1 flex flex-wrap items-baseline justify-between gap-x-4">
    <span>{title}</span>
    <span class="text-neutral-500">{location}</span>
  </p>
  <p class="text-neutral-500 mt-1 leading-relaxed"><slot /></p>
</article>

<style lang="postcss">
  .entry-header {
    @apply flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4;
  }
</style>
