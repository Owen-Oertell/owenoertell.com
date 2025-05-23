<script lang="ts">
    import { page } from "$app/stores";
    import Seo from "$lib/components/Seo.svelte";
    import { error } from "@sveltejs/kit";
    import contentList from "../writing.yaml";

    // get slug from the URL
    let slug = $page.params.slug;
    let content = contentList.find(
        (content: { slug: string }) => content.slug === slug
    );

    if (!content) {
        // if content is not found, redirect to 404
        throw error(404, "Not found");
    }

    // load markdown content from static
    import { onMount } from "svelte";
    import MarkdownIt from "markdown-it";
    import markdownItKatex from "markdown-it-katex";
    import "katex/dist/katex.min.css";
    import { formatTime } from "$lib/utils";

    let htmlContent = "";

    // Initialize MarkdownIt with KaTeX plugin
    const md = new MarkdownIt({
        html: true,
        linkify: true,
        typographer: true,
    }).use(markdownItKatex);

    // Load the Markdown file
    onMount(async () => {
        const response = await fetch(`/assets/content/${slug}.md`);
        htmlContent = await response.text();
        htmlContent = md.render(htmlContent);

        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlContent, "text/html");
        doc.querySelectorAll("a").forEach((a) => {
            a.classList.add("link");
        });
        htmlContent = doc.body.innerHTML;
    });
</script>

<Seo title="Owen Oertell – {content.title}" description={content.title} />

<section>
    <!-- date and tags -->
    <div class="layout-md flex justify-between text-neutral-500">
        <div>{content.tags}</div>
        <div class="italic">
            {formatTime("%B %-d, %Y", content.date)}
        </div>
    </div>
    <!-- title and center it-->
    <h1 class="layout-md text-2xl py-5 font-bold text-black mb-6">
        {content.title}
    </h1>

    <!-- content (load from markdown) -->
    <div class="layout-md content">
        {@html htmlContent}
    </div>
</section>

<style>
    :global(.content h1) {
        font-size: 2em;
        margin-top: 0.67em;
        margin-bottom: 0.67em;
        font-weight: bold;
    }

    :global(.content h2) {
        font-size: 1.5em;
        margin-top: 0.83em;
        margin-bottom: 0.83em;
        font-weight: bold;
    }

    :global(.content h3) {
        font-size: 1.17em;
        margin-top: 1em;
        margin-bottom: 1em;
        font-weight: bold;
    }

    :global(.content p) {
        line-height: 1.6;
        margin-bottom: 1em;
    }

    :global(.content img) {
        max-width: 100%;
        height: auto;
        margin: 0 auto;
        display: block;
    }

    :global(.content img + em) {
        display: block;
        text-align: center;
    }

    :global(.content blockquote) {
        border-left: 4px solid #ddd;
        padding: 0 15px;
        margin: 0;
    }
</style>
