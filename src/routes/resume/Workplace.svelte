<script lang="ts">
  export let title: string;
  export let company: string;
  export let url: string;
  export let dates: string;
  export let location: string;
</script>

<div class="entry">
  <div class="entry-header">
    <div class="entry-left">
      <a class="company-name" href={url} target="_blank" rel="noreferrer">{company}</a>
      <span class="role-title">{title}</span>
    </div>
    <div class="entry-right">
      <span class="entry-dates">{dates}</span>
      <span class="entry-location">{location}</span>
    </div>
  </div>
  <ul class="entry-bullets">
    <slot />
  </ul>
</div>

<style lang="postcss">
  .entry {
    @apply py-4 border-b border-neutral-100;
  }

  .entry:last-child {
    @apply border-b-0;
  }

  .entry-header {
    @apply flex justify-between items-start gap-4 flex-wrap;
  }

  .entry-left {
    @apply flex flex-col gap-0.5;
  }

  .company-name {
    @apply text-black font-semibold text-base leading-tight;
    @apply underline underline-offset-[3px] decoration-neutral-300 hover:decoration-black transition-colors;
  }

  :global(.dark) .company-name {
    color: rgb(245, 245, 245);
  }

  .role-title {
    @apply text-neutral-500 text-sm;
  }

  .entry-right {
    @apply flex flex-col items-end gap-0.5 flex-shrink-0;
  }

  .entry-dates {
    @apply text-neutral-500 text-sm whitespace-nowrap;
  }

  .entry-location {
    @apply text-neutral-400 text-xs whitespace-nowrap;
  }

  .entry-bullets {
    @apply mt-2 list-disc pl-5 marker:text-neutral-300;
  }

  .entry-bullets :global(li) {
    @apply text-neutral-600 text-sm;
  }

  :global(.dark) .entry-bullets :global(li) {
    color: rgb(160, 160, 160);
  }
</style>
