<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import PubList from "./PubList.svelte";
  import publications from "./pub_list.yaml";

  // Combine all papers and sort by date (newest first)
  $: allPapers = [
    ...publications.papers2025,
    ...publications.papers2024,
    ...publications.papers2023
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
</script>

<Seo
  title="Owen Oertell – Publications"
  description="publications"
/>

<section class="layout-md">
  To view the most up-to-date list of my publications, please visit my <a href="https://scholar.google.com/citations?user=y0B6gawAAAAJ&hl=en" class="link">Google Scholar</a> page.
  <br>
  <i><span class="inline-block w-1.5 h-1.5 bg-neutral-700 dark:bg-neutral-300 rounded-full align-middle mr-1"></span> denotes first/co-first author</i>
</section>

<section class="layout-lg py-12">
  <PubList data={allPapers} />
</section>