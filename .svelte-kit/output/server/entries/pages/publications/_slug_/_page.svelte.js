import { ab as sanitize_props, ac as spread_props, a9 as slot, a2 as store_get, ae as stringify, a3 as escape_html, a5 as attr, a7 as unsubscribe_stores } from "../../../../chunks/index.js";
import { p as page } from "../../../../chunks/stores.js";
import { S as Seo } from "../../../../chunks/Seo.js";
import { error } from "@sveltejs/kit";
import { d as data } from "../../../../chunks/pub_list.js";
import MarkdownIt from "markdown-it";
import { I as Icon } from "../../../../chunks/Icon.js";
import { h as html } from "../../../../chunks/html.js";
function Arrow_up_right($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.469.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    ["path", { "d": "M7 7h10v10" }],
    ["path", { "d": "M7 17 17 7" }]
  ];
  Icon($$renderer, spread_props([
    { name: "arrow-up-right" },
    $$sanitized_props,
    {
      /**
       * @component @name ArrowUpRight
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNyA3aDEwdjEwIiAvPgogIDxwYXRoIGQ9Ik03IDE3IDE3IDciIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/arrow-up-right
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Copy($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.469.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    [
      "rect",
      {
        "width": "14",
        "height": "14",
        "x": "8",
        "y": "8",
        "rx": "2",
        "ry": "2"
      }
    ],
    [
      "path",
      {
        "d": "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
      }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "copy" },
    $$sanitized_props,
    {
      /**
       * @component @name Copy
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHg9IjgiIHk9IjgiIHJ4PSIyIiByeT0iMiIgLz4KICA8cGF0aCBkPSJNNCAxNmMtMS4xIDAtMi0uOS0yLTJWNGMwLTEuMS45LTIgMi0yaDEwYzEuMSAwIDIgLjkgMiAyIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/copy
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let abstractHtml;
    let slug = store_get($$store_subs ??= {}, "$page", page).params.slug;
    const allPapers = [
      ...data.papers2025,
      ...data.papers2024,
      ...data.papers2023
    ];
    let publication = allPapers.find((p) => p.slug === slug);
    if (!publication) {
      throw error(404, "Publication not found");
    }
    const md = new MarkdownIt({ html: true, linkify: true, typographer: true });
    abstractHtml = publication.abstract ? md.render(publication.abstract) : "";
    Seo($$renderer2, {
      title: `Owen Oertell – ${stringify(publication.shortName || publication.title)}`,
      description: publication.title
    });
    $$renderer2.push(`<!----> <section class="layout-md"><a href="/publications" class="text-neutral-500 hover:text-neutral-700 text-sm mb-4 inline-block">← back to publications</a> <h1 class="text-2xl font-bold text-black dark:text-white mb-2">${escape_html(publication.title)}</h1> <p class="text-neutral-600 dark:text-neutral-400 mb-4">${escape_html(publication.authors)}</p> <div class="flex flex-wrap gap-3 items-center mb-8"><span class="venue-tag svelte-13q5ovy">${escape_html(publication.venue)}</span> `);
    if (publication.link) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<a${attr("href", publication.link)} target="_blank" rel="noreferrer" class="action-btn svelte-13q5ovy">Paper `);
      Arrow_up_right($$renderer2, { size: 14 });
      $$renderer2.push(`<!----></a>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (publication.bibtex) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<button class="action-btn copy-btn svelte-13q5ovy"><span class="icon-wrapper svelte-13q5ovy">`);
      {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push(`<span class="icon svelte-13q5ovy">`);
        Copy($$renderer2, { size: 14 });
        $$renderer2.push(`<!----></span>`);
      }
      $$renderer2.push(`<!--]--></span> <span>Copy BibTeX</span></button>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div> `);
    if (publication.abstract) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="mb-8"><h2 class="text-sm uppercase text-neutral-500 mb-2">Abstract</h2> <div class="abstract-content text-neutral-700 dark:text-neutral-300 leading-relaxed svelte-13q5ovy">${html(abstractHtml)}</div></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></section>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _page as default
};
