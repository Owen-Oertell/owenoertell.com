<script lang="ts">
  import { page } from "$app/stores";
  import Seo from "$lib/components/Seo.svelte";
  import Markdown from "$lib/components/Markdown.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import { error } from "@sveltejs/kit";
  import posts from "../posts.yaml";

  const slug = $page.params.slug;

  type Post = {
    title: string;
    slug: string;
    date: string;
    description?: string;
    content?: string;
  };

  const post: Post | undefined = posts.posts.find((p: Post) => p.slug === slug);

  if (!post) {
    throw error(404, "Post not found");
  }

  function formatDate(date: string): string {
    const d = new Date(date);
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'];
    return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
  }
</script>

<Seo title="Owen Oertell – {post.title}" description={post.description ?? post.title} />

<section class="layout-md py-8">
  <a href="/blog" class="text-neutral-500 hover:text-neutral-700 text-sm mb-6 inline-block">
    &larr; blog
  </a>

  <h1 class="text-2xl font-bold text-black dark:text-white mb-1">{post.title}</h1>
  <p class="text-neutral-400 text-sm mb-8">{formatDate(post.date)}</p>

  {#if post.content}
    <div class="prose text-neutral-700 dark:text-neutral-300 leading-relaxed">
      <Markdown source={post.content} />
    </div>
  {/if}
</section>

<Footer />

<style lang="postcss">
  .prose :global(h2) {
    @apply text-xl font-semibold text-black mt-8 mb-3;
  }

  .prose :global(h3) {
    @apply text-lg font-semibold text-black mt-6 mb-2;
  }

  .prose :global(p) {
    @apply mb-4 leading-relaxed;
  }

  .prose :global(ul) {
    @apply list-disc pl-6 mb-4;
  }

  .prose :global(ul li + li),
  .prose :global(ol li + li) {
    @apply mt-1;
  }

  .prose :global(ol) {
    @apply list-decimal pl-6 mb-4;
  }

  .prose :global(blockquote) {
    @apply border-l-2 border-neutral-300 pl-4 text-neutral-500 italic my-4;
  }

  .prose :global(code) {
    @apply bg-neutral-100 rounded px-1 py-0.5 text-sm font-mono;
  }

  .prose :global(pre) {
    @apply bg-neutral-100 rounded p-4 overflow-x-auto mb-4;
  }

  .prose :global(pre code) {
    @apply bg-transparent p-0;
  }

  :global(.dark .prose h2),
  :global(.dark .prose h3) {
    color: rgb(245, 245, 245);
  }

  :global(.dark .prose code) {
    background-color: rgb(38, 38, 38);
  }

  :global(.dark .prose pre) {
    background-color: rgb(28, 28, 28);
  }
</style>
