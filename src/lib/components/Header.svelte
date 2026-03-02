<script lang="ts">
  import { page } from "$app/stores";

  const links = [
    { name: "blog", href: "/blog" },
    { name: "resume", href: "/resume" },
    { name: "contact", href: "mailto:ojo2@cornell.edu" },
  ];

  $: pathname = $page.url.pathname;
  $: isResumePage = pathname === "/resume";
  $: isBlogPage = pathname.startsWith("/blog");

  const pageTitles: Record<string, string> = {
    "/resume": "Resume",
    "/blog": "Blog",
  };
  $: pageTitle = pageTitles[pathname] ?? (isBlogPage ? "Blog" : null);
</script>

<header
  class="layout-md flex justify-between items-start"
  data-sveltekit-noscroll
  data-sveltekit-preload-code="eager"
>
  <h1 class="font-bold text-black text-2xl mb-6">
    <a href="/">Owen Oertell</a>
    {#if pageTitle}
      <span class="page-title">
        <span class="text-neutral-400">—</span>
        {pageTitle}
      </span>
    {/if}
  </h1>
  <nav>
    {#each links as link (link)}
      <a
        href={link.href}
        class="hover:text-black transition-colors"
        class:text-black={(isResumePage && link.href === "/resume") || (isBlogPage && link.href === "/blog")}
      >
        {link.name}
      </a>
    {/each}
  </nav>
</header>

<style lang="postcss">
  nav {
    @apply flex items-start text-neutral-500 justify-end space-x-6 text-lg py-0.5;
  }

  .page-title {
    @apply font-light;
  }

  @media (max-width: 580px) {
    .page-title {
      @apply block text-xl;
    }

    .page-title :first-child {
      @apply hidden;
    }
  }

  @media (max-width: 420px) {
    nav {
      @apply flex-col items-end space-x-0;
    }
  }
</style>
