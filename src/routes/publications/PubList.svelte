<script lang="ts">
  import { Star } from "lucide-svelte";

  type Pub = {
    title: string;
    slug: string;
    date: Date;
    authors: string;
    link?: string;
    venue: string;
    subtitle?: string;
    highlight?: boolean;
    firstAuthor?: boolean;
    abstract?: string;
    bibtex?: string;
  };

  export let data: Pub[];

  let tableEl: HTMLDivElement;
  let highlightStyle = '';
  let isHovering = false;

  function formatDate(date: Date): string {
    const d = new Date(date);
    const months = ['Jan.', 'Feb.', 'March', 'April', 'May', 'June', 'July', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'];
    return `${months[d.getMonth()]} ${d.getFullYear()}`;
  }

  function handleMouseEnter(event: MouseEvent) {
    isHovering = true;
    updateHighlight(event);
  }

  function handleMouseMove(event: MouseEvent) {
    if (isHovering) {
      updateHighlight(event);
    }
  }

  function handleMouseLeave() {
    isHovering = false;
  }

  function updateHighlight(event: MouseEvent) {
    const target = (event.target as HTMLElement).closest('.pub-row') as HTMLElement;
    if (target && tableEl) {
      const tableRect = tableEl.getBoundingClientRect();
      const rowRect = target.getBoundingClientRect();
      const top = rowRect.top - tableRect.top;
      highlightStyle = `top: ${top}px; height: ${rowRect.height}px;`;
    }
  }
</script>

<div
  class="pub-table"
  bind:this={tableEl}
  on:mouseenter={handleMouseEnter}
  on:mousemove={handleMouseMove}
  on:mouseleave={handleMouseLeave}
  role="list"
>
  <div class="pub-header">
    <div class="header-date">Date</div>
    <div class="header-spacer"></div>
    <div class="header-title">Title</div>
    <div class="header-venue">Venue</div>
  </div>
  <div class="highlight-bar" class:visible={isHovering} style={highlightStyle}></div>
  {#each data as item}
    <a
      href={`/publications/${item.slug}`}
      class="pub-row"
    >
      <div class="pub-date-wrapper">
        <span class="pub-date">{formatDate(item.date)}</span>
        {#if item.firstAuthor}
          <span class="first-author-dot mobile-dot"></span>
        {/if}
      </div>
      <div class="pub-indicator">
        {#if item.firstAuthor}
          <span class="first-author-dot desktop-dot"></span>
        {/if}
      </div>
      <div class="pub-title-area">
        <span class="pub-title">{item.title}</span>
        <span class="pub-leader"></span>
        {#if item.subtitle}
          <span class="pub-subtitle">{item.subtitle}</span>
        {/if}
      </div>
      <div class="pub-venue">
        {#if item.highlight}
          <Star size={12} class="inline-block text-yellow-500 mr-1" fill="currentColor" />
        {/if}
        <span class="venue-tag">{item.venue}</span>
      </div>
    </a>
  {/each}
</div>

<style>
  .pub-table {
    display: flex;
    flex-direction: column;
    font-size: 0.875rem;
    position: relative;
  }

  .pub-header {
    display: grid;
    grid-template-columns: 75px 12px 1fr auto;
    gap: 8px;
    padding: 6px 8px;
    color: rgb(115, 115, 115);
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .header-spacer {
    width: 12px;
  }

  .highlight-bar {
    position: absolute;
    left: 0;
    right: 0;
    background-color: rgb(245, 245, 245);
    border-radius: 4px;
    pointer-events: none;
    opacity: 0;
    transition: top 0.06s ease-out, height 0.06s ease-out, opacity 0.1s ease-out;
    z-index: 0;
  }

  .highlight-bar.visible {
    opacity: 1;
  }

  :global(.dark) .highlight-bar {
    background-color: rgb(38, 38, 38);
  }

  .pub-row {
    display: grid;
    grid-template-columns: 75px 12px 1fr auto;
    gap: 8px;
    align-items: center;
    padding: 6px 8px;
    text-decoration: none;
    color: inherit;
    position: relative;
    z-index: 1;
  }

  .pub-date-wrapper {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .pub-date {
    color: rgb(115, 115, 115);
    font-size: 0.8rem;
    white-space: nowrap;
  }

  .pub-indicator {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 12px;
  }

  .first-author-dot {
    width: 6px;
    height: 6px;
    background-color: rgb(64, 64, 64);
    border-radius: 50%;
    flex-shrink: 0;
  }

  .mobile-dot {
    display: none;
  }

  :global(.dark) .first-author-dot {
    background-color: rgb(180, 180, 180);
  }

  .pub-title-area {
    display: flex;
    align-items: center;
    min-width: 0;
    overflow: hidden;
  }

  .pub-title {
    color: rgb(23, 23, 23);
    font-weight: 500;
    white-space: nowrap;
    flex-shrink: 0;
  }

  :global(.dark) .pub-title {
    color: rgb(245, 245, 245);
  }

  .pub-leader {
    flex: 1;
    border-bottom: 1px dotted rgb(200, 200, 200);
    margin: 0 8px;
    min-width: 20px;
  }

  :global(.dark) .pub-leader {
    border-bottom-color: rgb(64, 64, 64);
  }

  .pub-subtitle {
    color: rgb(115, 115, 115);
    white-space: nowrap;
    flex-shrink: 0;
    font-size: 0.8rem;
  }

  .pub-venue {
    display: flex;
    align-items: center;
    white-space: nowrap;
  }

  .venue-tag {
    background-color: rgb(243, 244, 246);
    color: rgb(75, 85, 99);
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 0.75rem;
  }

  :global(.dark) .venue-tag {
    background-color: rgb(55, 55, 55);
    color: rgb(180, 180, 180);
  }

  @media (max-width: 768px) {
    .pub-header {
      display: none;
    }

    .highlight-bar {
      display: none;
    }

    .pub-row {
      grid-template-columns: 1fr;
      gap: 2px;
      padding: 8px;
      border-radius: 4px;
    }

    .pub-row:active {
      background-color: rgb(245, 245, 245);
    }

    :global(.dark) .pub-row:active {
      background-color: rgb(38, 38, 38);
    }

    .pub-date-wrapper {
      order: 1;
    }

    .pub-indicator {
      display: none;
    }

    .mobile-dot {
      display: block;
    }

    .pub-title-area {
      order: 2;
      flex-direction: column;
      align-items: flex-start;
    }

    .pub-leader {
      display: none;
    }

    .pub-subtitle {
      margin-top: 2px;
    }

    .pub-venue {
      order: 3;
      text-align: left;
    }
  }
</style>
