import { c as create_ssr_component, v as validate_component } from "../../chunks/index2.js";
import { S as Seo } from "../../chunks/Seo.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Seo, "Seo").$$render(
    $$result,
    {
      title: "Owen Oertell",
      description: "machine learning."
    },
    {},
    {}
  )}
<div class="${"layout-md text-lg space-y-14 my-10"}"><div class="${"space-y-5"}"><p>I study computer science at Cornell University. My research
      interests are in decision-making (reinforcement learning, bandits) and
      generative modeling (diffusion models, LLMs). I am fortunate to work with
      professors <a class="${"link"}" href="${"https://wensun.github.io"}">Wen Sun</a>,
      <a class="${"link"}" href="${"https://www.cs.cornell.edu/~rdk/"}">Robert Kleinberg</a>, and
      <a class="${"link"}" href="${"https://xkianteb.github.io"}">Kianté Brantley</a>.
    </p>
    <p>Currently, I am a research scientist intern at <a class="${"link"}" href="${"https://www.databricks.com/"}">Databricks</a> working on deep research. Previously, I
      was a research intern at <a class="${"link"}" href="${"https://www.nvidia.com/"}">NVIDIA</a> and a software engineering intern at <a class="${"link"}" href="${"https://www.drw.com/"}">DRW</a>.
    </p>
    <p>Outside of research, I enjoy mathematics, <a class="${"link"}" href="${"https://artsandculture.google.com/entity/edward-hopper/m0hc3t"}">art</a>, music, literature, and
      drone photography. A picture of me can be found <a class="${"link"}" href="${"assets/images/owen_oertell.png"}">here</a>.
    </p></div></div>

`;
});
export {
  Page as default
};
