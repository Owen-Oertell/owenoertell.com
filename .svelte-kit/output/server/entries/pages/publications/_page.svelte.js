import "clsx";
import { S as Seo } from "../../../chunks/Seo.js";
import { ab as sanitize_props, ac as spread_props, a9 as slot, a6 as attr_class, ad as attr_style, a4 as ensure_array_like, a5 as attr, a3 as escape_html, aa as bind_props } from "../../../chunks/index.js";
import { I as Icon } from "../../../chunks/Icon.js";
import { d as data } from "../../../chunks/pub_list.js";
function Star($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.469.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    [
      "path",
      {
        "d": "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
      }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "star" },
    $$sanitized_props,
    {
      /**
       * @component @name Star
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTEuNTI1IDIuMjk1YS41My41MyAwIDAgMSAuOTUgMGwyLjMxIDQuNjc5YTIuMTIzIDIuMTIzIDAgMCAwIDEuNTk1IDEuMTZsNS4xNjYuNzU2YS41My41MyAwIDAgMSAuMjk0LjkwNGwtMy43MzYgMy42MzhhMi4xMjMgMi4xMjMgMCAwIDAtLjYxMSAxLjg3OGwuODgyIDUuMTRhLjUzLjUzIDAgMCAxLS43NzEuNTZsLTQuNjE4LTIuNDI4YTIuMTIyIDIuMTIyIDAgMCAwLTEuOTczIDBMNi4zOTYgMjEuMDFhLjUzLjUzIDAgMCAxLS43Ny0uNTZsLjg4MS01LjEzOWEyLjEyMiAyLjEyMiAwIDAgMC0uNjExLTEuODc5TDIuMTYgOS43OTVhLjUzLjUzIDAgMCAxIC4yOTQtLjkwNmw1LjE2NS0uNzU1YTIuMTIyIDIuMTIyIDAgMCAwIDEuNTk3LTEuMTZ6IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/star
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
function PubList($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let data2 = $$props["data"];
    let highlightStyle = "";
    let isHovering = false;
    function formatDate(date) {
      const d = new Date(date);
      const months = [
        "Jan.",
        "Feb.",
        "March",
        "April",
        "May",
        "June",
        "July",
        "Aug.",
        "Sept.",
        "Oct.",
        "Nov.",
        "Dec."
      ];
      return `${months[d.getMonth()]} ${d.getFullYear()}`;
    }
    $$renderer2.push(`<div class="pub-table svelte-1rd2lwb" role="list"><div class="pub-header svelte-1rd2lwb"><div class="header-date">Date</div> <div class="header-spacer svelte-1rd2lwb"></div> <div class="header-title">Title</div> <div class="header-venue">Venue</div></div> <div${attr_class("highlight-bar svelte-1rd2lwb", void 0, { "visible": isHovering })}${attr_style(highlightStyle)}></div> <!--[-->`);
    const each_array = ensure_array_like(data2);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let item = each_array[$$index];
      $$renderer2.push(`<a${attr("href", `/publications/${item.slug}`)} class="pub-row svelte-1rd2lwb"><div class="pub-date-wrapper svelte-1rd2lwb"><span class="pub-date svelte-1rd2lwb">${escape_html(formatDate(item.date))}</span> `);
      if (item.firstAuthor) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<span class="first-author-dot mobile-dot svelte-1rd2lwb"></span>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></div> <div class="pub-indicator svelte-1rd2lwb">`);
      if (item.firstAuthor) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<span class="first-author-dot desktop-dot svelte-1rd2lwb"></span>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></div> <div class="pub-title-area svelte-1rd2lwb"><span class="pub-title svelte-1rd2lwb">${escape_html(item.title)}</span> <span class="pub-leader svelte-1rd2lwb"></span> `);
      if (item.subtitle) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<span class="pub-subtitle svelte-1rd2lwb">${escape_html(item.subtitle)}</span>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></div> <div class="pub-venue svelte-1rd2lwb">`);
      if (item.highlight) {
        $$renderer2.push("<!--[-->");
        Star($$renderer2, {
          size: 12,
          class: "inline-block text-yellow-500 mr-1",
          fill: "currentColor"
        });
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> <span class="venue-tag svelte-1rd2lwb">${escape_html(item.venue)}</span></div></a>`);
    }
    $$renderer2.push(`<!--]--></div>`);
    bind_props($$props, { data: data2 });
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let allPapers;
    allPapers = [
      ...data.papers2025,
      ...data.papers2024,
      ...data.papers2023
    ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    Seo($$renderer2, {
      title: "Owen Oertell – Publications",
      description: "publications"
    });
    $$renderer2.push(`<!----> <section class="layout-md">To view the most up-to-date list of my publications, please visit my <a href="https://scholar.google.com/citations?user=y0B6gawAAAAJ&amp;hl=en" class="link">Google Scholar</a> page. <br/> <i><span class="inline-block w-1.5 h-1.5 bg-neutral-700 dark:bg-neutral-300 rounded-full align-middle mr-1"></span> denotes first/co-first author</i></section> <section class="layout-lg py-12">`);
    PubList($$renderer2, { data: allPapers });
    $$renderer2.push(`<!----></section>`);
  });
}
export {
  _page as default
};
