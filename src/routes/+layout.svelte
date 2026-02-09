<script lang="ts">
  import "@fontsource/newsreader/400-italic.css";
  import "../App.css";

  import { browser, dev } from "$app/environment";

  import { fly } from "svelte/transition";

  import Header from "$lib/components/Header.svelte";
  import type { LayoutData } from "./$types";

  export let data: LayoutData;

  const isMobile = browser && /Android|iPhone/i.test(navigator.userAgent);
  const reducedMotion =
    browser && matchMedia("(prefers-reduced-motion: reduce)").matches;
</script>

<svelte:head>
  {#if !dev}
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-DTJQ3J1NVE"
    ></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());

      gtag("config", "G-DTJQ3J1NVE");
    </script>
  {/if}
</svelte:head>

<Header />

{#if isMobile || reducedMotion}
  <main>
    <slot />
  </main>
{:else}
  {#key data.pathname}
    <main
      in:fly={{ x: -10, duration: 150, delay: 150 }}
      out:fly={{ y: 5, duration: 150 }}
    >
      <slot />
    </main>
  {/key}
{/if}
