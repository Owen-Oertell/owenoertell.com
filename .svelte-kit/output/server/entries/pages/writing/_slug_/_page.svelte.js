import { c as create_ssr_component, b as subscribe, v as validate_component, e as escape } from "../../../../chunks/index2.js";
import { p as page } from "../../../../chunks/stores.js";
import { S as Seo } from "../../../../chunks/Seo.js";
import { e as error } from "../../../../chunks/index.js";
import MarkdownIt from "markdown-it";
import markdownItKatex from "markdown-it-katex";
import { f as formatTime } from "../../../../chunks/utils.js";
var data = [{
  title: "Heuristics Considered Harmful: RL With Random Rewards Should Not Make LLMs Reason",
  date: new Date(17525376e5),
  slug: "heuristics-considered-harmful",
  tags: "research, rl, llm",
  link: "https://fuchsia-arch-d8e.notion.site/Heuristics-Considered-Harmful-RL-With-Random-Rewards-Should-Not-Make-LLMs-Reason-21ba29497c4180ca86ffce303f01923d"
}];
const katex_min = "";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".content h1{font-size:2em;margin-top:0.67em;margin-bottom:0.67em;font-weight:bold}.content h2{font-size:1.5em;margin-top:0.83em;margin-bottom:0.83em;font-weight:bold}.content h3{font-size:1.17em;margin-top:1em;margin-bottom:1em;font-weight:bold}.content p{line-height:1.6;margin-bottom:1em}.content img{max-width:100%;height:auto;margin:0 auto;display:block}.content img + em{display:block;text-align:center}.content blockquote{border-left:4px solid #ddd;padding:0 15px;margin:0}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let slug = $page.params.slug;
  let content = data.find((content2) => content2.slug === slug);
  if (!content) {
    throw error(404, "Not found");
  }
  let htmlContent = "";
  new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true
  }).use(markdownItKatex);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${validate_component(Seo, "Seo").$$render(
    $$result,
    {
      title: "Owen Oertell – " + content.title,
      description: content.title
    },
    {},
    {}
  )}

<section>
    <div class="${"layout-md flex justify-between text-neutral-500"}"><div>${escape(content.tags)}</div>
        <div class="${"italic"}">${escape(formatTime("%B %-d, %Y", content.date))}</div></div>
    
    <h1 class="${"layout-md text-2xl py-5 font-bold text-black mb-6"}">${escape(content.title)}</h1>

    
    <div class="${"layout-md content"}"><!-- HTML_TAG_START -->${htmlContent}<!-- HTML_TAG_END --></div>
</section>`;
});
export {
  Page as default
};
