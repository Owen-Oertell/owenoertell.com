<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import { slide } from "svelte/transition";
  import { ChevronRight } from "lucide-svelte";
  import publications from "./publications/pub_list.yaml";

  const allPapers = [
    ...publications.papers2025,
    ...publications.papers2024,
    ...publications.papers2023
  ];

  const categoryMap: Record<string, string[]> = {
    "LLM Alignment": [
      "heuristics-considered-harmful",
      "rebel",
      "drpo",
    ],
    "Diffusion & Generative Models": [
      "slcd",
      "consistency-model-convergence",
      "turbohopp",
      "rlcm",
      "sorl",
    ],
    "Bandits & RL Theory": [
      "delay-dependent-bandits",
      "distrl",
    ],
  };

  type Paper = typeof allPapers[0];

  const categories = Object.entries(categoryMap).map(([name, slugs]) => ({
    name,
    papers: slugs
      .map(slug => allPapers.find((p: Paper) => p.slug === slug))
      .filter(Boolean) as Paper[],
  }));

  let openCategories: Record<string, boolean> = {};

  function toggle(name: string) {
    openCategories[name] = !openCategories[name];
  }
</script>

<Seo title="Owen Oertell" description="machine learning researcher at Cornell University." />

<!-- About -->
<section class="layout-md text-lg space-y-5 mb-14">
  <p>
    I study computer science at Cornell University. My research
    interests are in decision-making (reinforcement learning, bandits) and
    generative modeling (diffusion models, LLMs). I am fortunate to work with
    professors <a class="link" href="https://wensun.github.io">Wen Sun</a>,
    <a class="link" href="https://www.cs.cornell.edu/~rdk/">Robert Kleinberg</a>,
    and
    <a class="link" href="https://xkianteb.github.io">Kianté Brantley</a>.
  </p>
  <p>
    Currently, I am a research scientist intern at <a class="link" href="https://www.databricks.com/">Databricks</a> working on deep research. Previously, I
    was a research intern at <a class="link" href="https://www.nvidia.com/">NVIDIA</a> and a software engineering intern at <a class="link" href="https://www.drw.com/">DRW</a>.
  </p>
  <p>
    Outside of research, I enjoy mathematics, <a class="link" href="https://artsandculture.google.com/entity/edward-hopper/m0hc3t">art</a>, music, literature, and
    drone photography. A picture of me can be found <a
      class="link"
      href="assets/images/owen_oertell.png">here</a
    >.
  </p>
</section>

<!-- Publications -->
<section id="publications" class="layout-md mb-14 scroll-mt-24">
  <h2 class="heading2">Publications</h2>
  <p class="text-neutral-500 mb-4">
    See my <a href="https://scholar.google.com/citations?user=y0B6gawAAAAJ&hl=en" class="link">Google Scholar</a> for the most up-to-date list.
  </p>

  <div class="space-y-6">
    {#each categories as category}
      <div>
        <button
          class="category-toggle"
          on:click={() => toggle(category.name)}
        >
          <span class="chevron" class:open={openCategories[category.name]}>
            <ChevronRight size={16} />
          </span>
          <span class="category-name">{category.name}</span>
          <span class="category-count">{category.papers.length}</span>
        </button>

        {#if openCategories[category.name]}
          <ul class="pub-list" transition:slide|local={{ duration: 200 }}>
            {#each category.papers as paper}
              <li class="pub-entry">
                <div class="pub-title">{paper.title}.</div>
                <div class="pub-authors">{paper.authors}</div>
                <div class="pub-meta">
                  <span class="pub-venue">{paper.venue}.</span>
                  {#if paper.link}
                    <a href={paper.link} class="pub-link" target="_blank" rel="noreferrer">[paper]</a>
                  {/if}
                  <a href={`/publications/${paper.slug}`} class="pub-link">[abstract]</a>
                </div>
              </li>
            {/each}
          </ul>
        {/if}
      </div>
    {/each}
  </div>
</section>

<!-- Contact -->
<section id="contact" class="layout-md scroll-mt-24">
  <h2 class="heading2">Contact</h2>
  <div class="contact-rows flex flex-col">
    <div class="row">
      <span>email</span>
      <hr />
      <a class="link" href="mailto:ojo2@cornell.edu">ojo2@cornell.edu</a>
    </div>
    <div class="row">
      <span>github</span>
      <hr />
      <a class="link" href="https://github.com/owen-oertell">@owen-oertell</a>
    </div>
    <div class="row">
      <span>scholar</span>
      <hr />
      <a class="link" href="https://scholar.google.com/citations?user=y0B6gawAAAAJ&hl=en">owen-oertell</a>
    </div>
  </div>
</section>

<style lang="postcss">
  .category-toggle {
    @apply flex items-center gap-2 w-full text-left py-1 cursor-pointer;
  }

  .chevron {
    @apply text-neutral-400 transition-transform duration-200 flex-shrink-0;
  }

  .chevron.open {
    transform: rotate(90deg);
  }

  .category-name {
    @apply text-black font-medium text-base;
  }

  .category-count {
    @apply text-neutral-400 text-sm;
  }

  .pub-list {
    @apply list-none pl-5 space-y-5 mt-3 ml-1;
  }

  .pub-entry {
    @apply text-base leading-relaxed;
  }

  .pub-title {
    @apply text-black font-medium;
  }

  .pub-authors {
    @apply text-neutral-500 text-sm mt-0.5;
  }

  .pub-meta {
    @apply mt-0.5;
  }

  .pub-venue {
    @apply text-neutral-500 italic text-sm;
  }

  .pub-link {
    @apply text-neutral-400 hover:text-black transition-colors text-sm ml-1;
  }

  .row {
    @apply flex items-center space-x-4;
  }

  .row a {
    @apply text-neutral-500 min-w-fit;
  }

  .row hr {
    @apply w-full mt-0.5 border-neutral-300 border-dotted;
  }
</style>
