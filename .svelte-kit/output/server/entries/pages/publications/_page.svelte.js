import { c as create_ssr_component, v as validate_component, f as add_attribute, d as each, e as escape } from "../../../chunks/index2.js";
import { S as Seo } from "../../../chunks/Seo.js";
import { I as Icon } from "../../../chunks/Icon.js";
import { d as data } from "../../../chunks/pub_list.js";
const Star = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "polygon",
      {
        "points": "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({ name: "star" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const PubList_svelte_svelte_type_style_lang = "";
const css = {
  code: ".pub-table.svelte-prrrs8{display:flex;flex-direction:column;font-size:0.875rem;position:relative}.pub-header.svelte-prrrs8{display:grid;grid-template-columns:75px 12px 1fr auto;gap:8px;padding:6px 8px;color:rgb(115, 115, 115);font-size:0.75rem;text-transform:uppercase;letter-spacing:0.05em}.header-spacer.svelte-prrrs8{width:12px}.highlight-bar.svelte-prrrs8{position:absolute;left:0;right:0;background-color:rgb(245, 245, 245);border-radius:4px;pointer-events:none;opacity:0;transition:top 0.06s ease-out, height 0.06s ease-out, opacity 0.1s ease-out;z-index:0}.highlight-bar.visible.svelte-prrrs8{opacity:1}.dark .highlight-bar.svelte-prrrs8{background-color:rgb(38, 38, 38)}.pub-row.svelte-prrrs8{display:grid;grid-template-columns:75px 12px 1fr auto;gap:8px;align-items:center;padding:6px 8px;text-decoration:none;color:inherit;position:relative;z-index:1}.pub-date.svelte-prrrs8{color:rgb(115, 115, 115);font-size:0.8rem;white-space:nowrap}.pub-indicator.svelte-prrrs8{display:flex;align-items:center;justify-content:center;width:12px}.first-author-dot.svelte-prrrs8{width:6px;height:6px;background-color:rgb(64, 64, 64);border-radius:50%}.dark .first-author-dot.svelte-prrrs8{background-color:rgb(180, 180, 180)}.pub-title-area.svelte-prrrs8{display:flex;align-items:center;min-width:0;overflow:hidden}.pub-title.svelte-prrrs8{color:rgb(23, 23, 23);font-weight:500;white-space:nowrap;flex-shrink:0}.dark .pub-title.svelte-prrrs8{color:rgb(245, 245, 245)}.pub-leader.svelte-prrrs8{flex:1;border-bottom:1px dotted rgb(200, 200, 200);margin:0 8px;min-width:20px}.dark .pub-leader.svelte-prrrs8{border-bottom-color:rgb(64, 64, 64)}.pub-subtitle.svelte-prrrs8{color:rgb(115, 115, 115);white-space:nowrap;flex-shrink:0;font-size:0.8rem}.pub-venue.svelte-prrrs8{display:flex;align-items:center;white-space:nowrap}.venue-tag.svelte-prrrs8{background-color:rgb(243, 244, 246);color:rgb(75, 85, 99);padding:2px 8px;border-radius:4px;font-size:0.75rem}.dark .venue-tag.svelte-prrrs8{background-color:rgb(55, 55, 55);color:rgb(180, 180, 180)}@media(max-width: 768px){.pub-header.svelte-prrrs8{display:none}.highlight-bar.svelte-prrrs8{display:none}.pub-row.svelte-prrrs8{grid-template-columns:1fr;gap:2px;padding:8px;border-radius:4px}.pub-row.svelte-prrrs8:active{background-color:rgb(245, 245, 245)}.dark .pub-row.svelte-prrrs8:active{background-color:rgb(38, 38, 38)}.pub-date.svelte-prrrs8{order:1}.pub-indicator.svelte-prrrs8{display:none}.pub-title-area.svelte-prrrs8{order:2;flex-direction:column;align-items:flex-start}.pub-leader.svelte-prrrs8{display:none}.pub-subtitle.svelte-prrrs8{margin-top:2px}.pub-venue.svelte-prrrs8{order:3;text-align:left}}",
  map: null
};
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
const PubList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data: data2 } = $$props;
  let tableEl;
  let highlightStyle = "";
  if ($$props.data === void 0 && $$bindings.data && data2 !== void 0)
    $$bindings.data(data2);
  $$result.css.add(css);
  return `<div class="${"pub-table svelte-prrrs8"}" role="${"list"}"${add_attribute("this", tableEl, 0)}><div class="${"pub-header svelte-prrrs8"}"><div class="${"header-date"}">Date</div>
    <div class="${"header-spacer svelte-prrrs8"}"></div>
    <div class="${"header-title"}">Title</div>
    <div class="${"header-venue"}">Venue</div></div>
  <div class="${["highlight-bar svelte-prrrs8", ""].join(" ").trim()}"${add_attribute("style", highlightStyle, 0)}></div>
  ${each(data2, (item) => {
    return `<a${add_attribute("href", `/publications/${item.slug}`, 0)} class="${"pub-row svelte-prrrs8"}"><div class="${"pub-date svelte-prrrs8"}">${escape(formatDate(item.date))}</div>
      <div class="${"pub-indicator svelte-prrrs8"}">${item.firstAuthor ? `<span class="${"first-author-dot svelte-prrrs8"}"></span>` : ``}</div>
      <div class="${"pub-title-area svelte-prrrs8"}"><span class="${"pub-title svelte-prrrs8"}">${escape(item.title)}</span>
        <span class="${"pub-leader svelte-prrrs8"}"></span>
        ${item.subtitle ? `<span class="${"pub-subtitle svelte-prrrs8"}">${escape(item.subtitle)}</span>` : ``}</div>
      <div class="${"pub-venue svelte-prrrs8"}">${item.highlight ? `${validate_component(Star, "Star").$$render(
      $$result,
      {
        size: 12,
        class: "inline-block text-yellow-500 mr-1",
        fill: "currentColor"
      },
      {},
      {}
    )}` : ``}
        <span class="${"venue-tag svelte-prrrs8"}">${escape(item.venue)}</span></div>
    </a>`;
  })}
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let allPapers;
  allPapers = [
    ...data.papers2025,
    ...data.papers2024,
    ...data.papers2023
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return `${validate_component(Seo, "Seo").$$render(
    $$result,
    {
      title: "Owen Oertell – Publications",
      description: "publications"
    },
    {},
    {}
  )}

<section class="${"layout-md"}">To view the most up-to-date list of my publications, please visit my <a href="${"https://scholar.google.com/citations?user=y0B6gawAAAAJ&hl=en"}" class="${"link"}">Google Scholar</a> page.
  <br>
  <i><span class="${"inline-block w-1.5 h-1.5 bg-neutral-700 dark:bg-neutral-300 rounded-full align-middle mr-1"}"></span> denotes first/co-first author</i></section>

<section class="${"layout-lg py-12"}">${validate_component(PubList, "PubList").$$render($$result, { data: allPapers }, {}, {})}</section>`;
});
export {
  Page as default
};
