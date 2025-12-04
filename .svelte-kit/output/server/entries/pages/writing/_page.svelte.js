import { c as create_ssr_component, v as validate_component } from "../../../chunks/index2.js";
import { S as Seo } from "../../../chunks/Seo.js";
import "../../../chunks/utils.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Seo, "Seo").$$render(
    $$result,
    {
      title: "Owen Oertell – Writings",
      description: "writings"
    },
    {},
    {}
  )}

<section class="${"layout-md"}">Some of my writings about machine learning and research. Currently, it&#39;s empty. But check out my <a href="${"/publications"}" class="${"link"}">publications</a> page for more information.
</section>`;
});
export {
  Page as default
};
