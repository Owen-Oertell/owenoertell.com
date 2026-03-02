<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import posts from "./posts.yaml";

  type Post = {
    title: string;
    slug: string;
    date: string;
    description?: string;
  };

  const allPosts: Post[] = [...posts.posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  function formatDate(date: string): string {
    const d = new Date(date);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
  }
</script>

<Seo title="Owen Oertell – Blog" description="Writing about research, ideas, and things I find interesting." />

<section class="layout-md py-8">
  {#if allPosts.length === 0}
    <p class="text-neutral-500 text-sm">No posts yet.</p>
  {:else}
    <div class="post-list">
      {#each allPosts as post}
        <a href="/blog/{post.slug}" class="post-row">
          <span class="post-date">{formatDate(post.date)}</span>
          <span class="post-title">{post.title}</span>
          {#if post.description}
            <span class="post-desc">{post.description}</span>
          {/if}
        </a>
      {/each}
    </div>
  {/if}
</section>

<Footer />

<style lang="postcss">
  .post-list {
    @apply flex flex-col divide-y divide-neutral-100;
  }

  .post-row {
    @apply flex flex-col gap-0.5 py-4 text-inherit no-underline;
    @apply hover:bg-neutral-50 transition-colors px-2 -mx-2 rounded;
  }

  :global(.dark) .post-row:hover {
    background-color: rgb(28, 28, 28);
  }

  .post-date {
    @apply text-neutral-400 text-xs;
  }

  .post-title {
    @apply text-black font-medium text-base;
  }

  :global(.dark) .post-title {
    color: rgb(245, 245, 245);
  }

  .post-desc {
    @apply text-neutral-500 text-sm;
  }
</style>
