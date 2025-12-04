import { c as create_ssr_component, v as validate_component, b as subscribe, e as escape, f as add_attribute } from "../../../../chunks/index2.js";
import { p as page } from "../../../../chunks/stores.js";
import { S as Seo } from "../../../../chunks/Seo.js";
import { e as error } from "../../../../chunks/index.js";
import { d as data } from "../../../../chunks/pub_list.js";
import { I as Icon } from "../../../../chunks/Icon.js";
import MarkdownIt from "markdown-it";
const Arrow_up_right = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "line",
      {
        "x1": "7",
        "y1": "17",
        "x2": "17",
        "y2": "7"
      }
    ],
    ["polyline", { "points": "7 7 17 7 17 17" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({ name: "arrow-up-right" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Copy = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "rect",
      {
        "x": "9",
        "y": "9",
        "width": "13",
        "height": "13",
        "rx": "2",
        "ry": "2"
      }
    ],
    [
      "path",
      {
        "d": "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({ name: "copy" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".venue-tag.svelte-diw56w.svelte-diw56w{background-color:rgb(243, 244, 246);color:rgb(75, 85, 99);padding:4px 12px;border-radius:4px;font-size:0.875rem}.dark .venue-tag.svelte-diw56w.svelte-diw56w{background-color:rgb(55, 55, 55);color:rgb(180, 180, 180)}.action-btn.svelte-diw56w.svelte-diw56w{display:flex;align-items:center;gap:4px;font-size:0.875rem;color:rgb(107, 114, 128);transition:color 0.15s}.action-btn.svelte-diw56w.svelte-diw56w:hover{color:rgb(55, 65, 81)}.dark .action-btn.svelte-diw56w.svelte-diw56w:hover{color:rgb(200, 200, 200)}.copy-btn.svelte-diw56w .icon-wrapper.svelte-diw56w{position:relative;width:14px;height:14px;display:flex;align-items:center;justify-content:center}.copy-btn.svelte-diw56w .icon.svelte-diw56w{position:absolute;display:flex;align-items:center;justify-content:center}.abstract-content.svelte-diw56w p{margin-bottom:1em}.abstract-content.svelte-diw56w p:last-child{margin-bottom:0}.abstract-content.svelte-diw56w a{text-decoration:underline;text-underline-offset:3px}.abstract-content.svelte-diw56w a:hover{color:black}.dark .abstract-content.svelte-diw56w a:hover{color:white}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let abstractHtml;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let slug = $page.params.slug;
  const allPapers = [
    ...data.papers2025,
    ...data.papers2024,
    ...data.papers2023
  ];
  let publication = allPapers.find((p) => p.slug === slug);
  if (!publication) {
    throw error(404, "Publication not found");
  }
  const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true
  });
  $$result.css.add(css);
  abstractHtml = publication.abstract ? md.render(publication.abstract) : "";
  $$unsubscribe_page();
  return `${validate_component(Seo, "Seo").$$render(
    $$result,
    {
      title: "Owen Oertell – " + (publication.shortName || publication.title),
      description: publication.title
    },
    {},
    {}
  )}

<section class="${"layout-md"}"><a href="${"/publications"}" class="${"text-neutral-500 hover:text-neutral-700 text-sm mb-4 inline-block"}">← back to publications
  </a>

  <h1 class="${"text-2xl font-bold text-black dark:text-white mb-2"}">${escape(publication.title)}</h1>

  <p class="${"text-neutral-600 dark:text-neutral-400 mb-4"}">${escape(publication.authors)}</p>

  <div class="${"flex flex-wrap gap-3 items-center mb-8"}"><span class="${"venue-tag svelte-diw56w"}">${escape(publication.venue)}</span>
    ${publication.link ? `<a${add_attribute("href", publication.link, 0)} target="${"_blank"}" rel="${"noreferrer"}" class="${"action-btn svelte-diw56w"}">Paper ${validate_component(Arrow_up_right, "ArrowUpRight").$$render($$result, { size: 14 }, {}, {})}</a>` : ``}
    ${publication.bibtex ? `<button class="${"action-btn copy-btn svelte-diw56w"}"><span class="${"icon-wrapper svelte-diw56w"}">${`<span class="${"icon svelte-diw56w"}">${validate_component(Copy, "Copy").$$render($$result, { size: 14 }, {}, {})}</span>`}</span>
        <span>Copy BibTeX</span></button>` : ``}</div>

  ${publication.abstract ? `<div class="${"mb-8"}"><h2 class="${"text-sm uppercase text-neutral-500 mb-2"}">Abstract</h2>
      <div class="${"abstract-content text-neutral-700 dark:text-neutral-300 leading-relaxed svelte-diw56w"}"><!-- HTML_TAG_START -->${abstractHtml}<!-- HTML_TAG_END --></div></div>` : ``}
</section>`;
});
export {
  Page as default
};
