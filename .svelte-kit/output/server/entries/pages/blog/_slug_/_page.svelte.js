import { aa as bind_props, a2 as store_get, ad as stringify, a3 as escape_html, a7 as unsubscribe_stores } from "../../../../chunks/index.js";
import { p as page } from "../../../../chunks/stores.js";
import { S as Seo } from "../../../../chunks/Seo.js";
import { marked } from "marked";
import { h as html } from "../../../../chunks/html.js";
import { F as Footer } from "../../../../chunks/Footer.js";
import { error } from "@sveltejs/kit";
import { d as data } from "../../../../chunks/posts.js";
function Markdown($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let html$1;
    let source = $$props["source"];
    marked.use({
      renderer: {
        link(href, title, text) {
          let out = `<a rel="external" href="${encodeURI(href)}" class="link"`;
          if (title) {
            out += ' title="' + title + '"';
          }
          out += ">" + text + "</a>";
          return out;
        }
      }
    });
    html$1 = marked.parse(source, { smartLists: true, smartypants: true });
    $$renderer2.push(`<div class="md-output svelte-z28whr">${html(html$1)}</div>`);
    bind_props($$props, { source });
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const slug = store_get($$store_subs ??= {}, "$page", page).params.slug;
    const post = data.posts.find((p) => p.slug === slug);
    if (!post) {
      throw error(404, "Post not found");
    }
    function formatDate(date) {
      const d = new Date(date);
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
    }
    Seo($$renderer2, {
      title: `Owen Oertell – ${stringify(post.title)}`,
      description: post.description ?? post.title
    });
    $$renderer2.push(`<!----> <section class="layout-md py-8"><a href="/blog" class="text-neutral-500 hover:text-neutral-700 text-sm mb-6 inline-block">← blog</a> <h1 class="text-2xl font-bold text-black dark:text-white mb-1">${escape_html(post.title)}</h1> <p class="text-neutral-400 text-sm mb-8">${escape_html(formatDate(post.date))}</p> `);
    if (post.content) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="prose text-neutral-700 dark:text-neutral-300 leading-relaxed svelte-1teoznn">`);
      Markdown($$renderer2, { source: post.content });
      $$renderer2.push(`<!----></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></section> `);
    Footer($$renderer2);
    $$renderer2.push(`<!---->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _page as default
};
