import { a4 as ensure_array_like, a5 as attr, a3 as escape_html, ad as stringify } from "../../../chunks/index.js";
import { S as Seo } from "../../../chunks/Seo.js";
import { F as Footer } from "../../../chunks/Footer.js";
import { d as data } from "../../../chunks/posts.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const allPosts = [...data.posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    function formatDate(date) {
      const d = new Date(date);
      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ];
      return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
    }
    Seo($$renderer2, {
      title: "Owen Oertell – Blog",
      description: "Writing about research, ideas, and things I find interesting."
    });
    $$renderer2.push(`<!----> <section class="layout-md py-8">`);
    if (allPosts.length === 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<p class="text-neutral-500 text-sm">No posts yet.</p>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div class="post-list svelte-u4k2t"><!--[-->`);
      const each_array = ensure_array_like(allPosts);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let post = each_array[$$index];
        $$renderer2.push(`<a${attr("href", `/blog/${stringify(post.slug)}`)} class="post-row svelte-u4k2t"><span class="post-date svelte-u4k2t">${escape_html(formatDate(post.date))}</span> <span class="post-title svelte-u4k2t">${escape_html(post.title)}</span> `);
        if (post.description) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<span class="post-desc svelte-u4k2t">${escape_html(post.description)}</span>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--></a>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    }
    $$renderer2.push(`<!--]--></section> `);
    Footer($$renderer2);
    $$renderer2.push(`<!---->`);
  });
}
export {
  _page as default
};
