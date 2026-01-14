import { a2 as store_get, ae as stringify, a3 as escape_html, a7 as unsubscribe_stores } from "../../../../chunks/index.js";
import { p as page } from "../../../../chunks/stores.js";
import { S as Seo } from "../../../../chunks/Seo.js";
import { error } from "@sveltejs/kit";
import { d as data } from "../../../../chunks/writing.js";
import MarkdownIt from "markdown-it";
import markdownItKatex from "markdown-it-katex";
import { f as formatTime } from "../../../../chunks/utils2.js";
import { h as html } from "../../../../chunks/html.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let slug = store_get($$store_subs ??= {}, "$page", page).params.slug;
    let content = data.find((content2) => content2.slug === slug);
    if (!content) {
      throw error(404, "Not found");
    }
    let htmlContent = "";
    new MarkdownIt({ html: true, linkify: true, typographer: true }).use(markdownItKatex);
    Seo($$renderer2, {
      title: `Owen Oertell – ${stringify(content.title)}`,
      description: content.title
    });
    $$renderer2.push(`<!----> <section><div class="layout-md flex justify-between text-neutral-500"><div>${escape_html(content.tags)}</div> <div class="italic">${escape_html(formatTime("%B %-d, %Y", content.date))}</div></div> <h1 class="layout-md text-2xl py-5 font-bold text-black mb-6">${escape_html(content.title)}</h1> <div class="layout-md content">${html(htmlContent)}</div></section>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _page as default
};
