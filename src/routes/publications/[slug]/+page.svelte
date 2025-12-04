<script lang="ts">
  import { page } from "$app/stores";
  import Seo from "$lib/components/Seo.svelte";
  import { error } from "@sveltejs/kit";
  import publications from "../pub_list.yaml";
  import { ArrowUpRight, Copy, Check } from "lucide-svelte";
  import { fade } from "svelte/transition";
  import MarkdownIt from "markdown-it";

  // Get slug from the URL
  let slug = $page.params.slug;

  // Combine all papers and find by slug
  const allPapers = [
    ...publications.papers2025,
    ...publications.papers2024,
    ...publications.papers2023
  ];

  let publication = allPapers.find((p: { slug: string }) => p.slug === slug);

  if (!publication) {
    throw error(404, "Publication not found");
  }

  // Initialize markdown parser
  const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
  });

  // Render abstract as markdown
  $: abstractHtml = publication.abstract ? md.render(publication.abstract) : '';

  let copied = false;

  async function copyBibtex() {
    const textToCopy = publication.bibtex || `BibTeX coming soon for: ${publication.title}`;
    await navigator.clipboard.writeText(textToCopy);
    copied = true;
    setTimeout(() => {
      copied = false;
    }, 700);
  }
</script>

<Seo title="Owen Oertell – {publication.shortName || publication.title}" description={publication.title} />

<section class="layout-md">
  <a href="/publications" class="text-neutral-500 hover:text-neutral-700 text-sm mb-4 inline-block">
    &larr; back to publications
  </a>

  <h1 class="text-2xl font-bold text-black dark:text-white mb-2">
    {publication.title}
  </h1>

  <p class="text-neutral-600 dark:text-neutral-400 mb-4">{publication.authors}</p>

  <div class="flex flex-wrap gap-3 items-center mb-8">
    <span class="venue-tag">{publication.venue}</span>
    {#if publication.link}
      <a
        href={publication.link}
        target="_blank"
        rel="noreferrer"
        class="action-btn"
      >
        Paper <ArrowUpRight size={14} />
      </a>
    {/if}
    {#if publication.bibtex}
    <button on:click={copyBibtex} class="action-btn copy-btn">
      <span class="icon-wrapper">
        {#if copied}
          <span class="icon" transition:fade={{ duration: 80 }}>
            <Check size={14} />
          </span>
        {:else}
          <span class="icon" transition:fade={{ duration: 80 }}>
            <Copy size={14} />
          </span>
        {/if}
      </span>
        <span>Copy BibTeX</span>
      </button>
    {/if}
  </div>

  {#if publication.abstract}
    <div class="mb-8">
      <h2 class="text-sm uppercase text-neutral-500 mb-2">Abstract</h2>
      <div class="abstract-content text-neutral-700 dark:text-neutral-300 leading-relaxed">
        {@html abstractHtml}
      </div>
    </div>
  {/if}
</section>

<style>
  .venue-tag {
    background-color: rgb(243, 244, 246);
    color: rgb(75, 85, 99);
    padding: 4px 12px;
    border-radius: 4px;
    font-size: 0.875rem;
  }

  :global(.dark) .venue-tag {
    background-color: rgb(55, 55, 55);
    color: rgb(180, 180, 180);
  }

  .action-btn {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 0.875rem;
    color: rgb(107, 114, 128);
    transition: color 0.15s;
  }

  .action-btn:hover {
    color: rgb(55, 65, 81);
  }

  :global(.dark) .action-btn:hover {
    color: rgb(200, 200, 200);
  }

  .copy-btn .icon-wrapper {
    position: relative;
    width: 14px;
    height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .copy-btn .icon {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .abstract-content :global(p) {
    margin-bottom: 1em;
  }

  .abstract-content :global(p:last-child) {
    margin-bottom: 0;
  }

  .abstract-content :global(a) {
    text-decoration: underline;
    text-underline-offset: 3px;
  }

  .abstract-content :global(a:hover) {
    color: black;
  }

  :global(.dark) .abstract-content :global(a:hover) {
    color: white;
  }
</style>
