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
<div class="${"layout-md text-lg space-y-14 my-10"}"><div class="${"space-y-5"}"><p>I study at Cornell University, where I am pursuing a B.S. in Computer Science.
    </p>
    <p>I am interested in reasoning, decision making (reinforcement learning, bandits), and generative modeling (diffusion, LLMs).
    </p>
    <p>I am fortunate to work with professor <a class="${"link"}" href="${"https://wensun.github.io"}">Wen Sun</a> and professor <a class="${"link"}" href="${"https://www.cs.cornell.edu/~rdk/"}">Robert Kleinberg</a>.
    </p>
    <p>Currently, I am a research intern at <a class="${"link"}" href="${"https://www.nvidia.com/"}">NVIDIA</a>. Last summer, I interned at <a class="${"link"}" href="${"https://www.drw.com/"}">DRW</a>.
    </p>
    <p>A picture of me can be found <a class="${"link"}" href="${"assets/images/owen_oertell.png"}">here</a>.
    </p>
    <p>Other interests: math, art, music, <a class="${"link"}" href="${"https://www.goodreads.com/user/show/117571286-owen"}">literature</a>, and drone photography.
  </p></div></div>

`;
});
export {
  Page as default
};
