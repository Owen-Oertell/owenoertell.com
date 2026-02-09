import { a3 as ensure_array_like, a6 as escape_html, a4 as attr } from "../../chunks/index.js";
import { S as Seo } from "../../chunks/Seo.js";
import { d as data } from "../../chunks/pub_list.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let allPapers;
    allPapers = [
      ...data.papers2025,
      ...data.papers2024,
      ...data.papers2023
    ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    Seo($$renderer2, {
      title: "Owen Oertell",
      description: "machine learning researcher at Cornell University."
    });
    $$renderer2.push(`<!----> <section class="layout-md text-lg space-y-5 mb-24"><p>I study computer science at Cornell University. My research
    interests are in decision-making (reinforcement learning, bandits) and
    generative modeling (diffusion models, LLMs). I am fortunate to work with
    professors <a class="link" href="https://wensun.github.io">Wen Sun</a>, <a class="link" href="https://www.cs.cornell.edu/~rdk/">Robert Kleinberg</a>,
    and <a class="link" href="https://xkianteb.github.io">Kianté Brantley</a>.</p> <p>Currently, I am a research scientist intern at <a class="link" href="https://www.databricks.com/">Databricks</a> working on deep research. Previously, I
    was a research intern at <a class="link" href="https://www.nvidia.com/">NVIDIA</a> and a software engineering intern at <a class="link" href="https://www.drw.com/">DRW</a>.</p> <p>Outside of research, I enjoy mathematics, <a class="link" href="https://artsandculture.google.com/entity/edward-hopper/m0hc3t">art</a>, music, literature, and
    drone photography. A picture of me can be found <a class="link" href="assets/images/owen_oertell.png">here</a>.</p></section> <section id="publications" class="layout-md mb-24 scroll-mt-24"><h2 class="heading2">Publications</h2> <p class="text-neutral-500 mb-6">See my <a href="https://scholar.google.com/citations?user=y0B6gawAAAAJ&amp;hl=en" class="link">Google Scholar</a> for the most up-to-date list.</p> <ol class="pub-list svelte-1uha8ag"><!--[-->`);
    const each_array = ensure_array_like(allPapers);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let paper = each_array[$$index];
      $$renderer2.push(`<li class="pub-entry svelte-1uha8ag"><span class="pub-title svelte-1uha8ag">${escape_html(paper.title)}.</span> <span class="pub-authors svelte-1uha8ag">${escape_html(paper.authors)}</span> <span class="pub-venue svelte-1uha8ag">${escape_html(paper.venue)}.</span> `);
      if (paper.link) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<a${attr("href", paper.link)} class="pub-link svelte-1uha8ag" target="_blank" rel="noreferrer">[paper]</a>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> <a${attr("href", `/publications/${paper.slug}`)} class="pub-link svelte-1uha8ag">[abstract]</a></li>`);
    }
    $$renderer2.push(`<!--]--></ol></section> <section id="contact" class="layout-md scroll-mt-24"><h2 class="heading2">Contact</h2> <div class="contact-rows flex flex-col"><div class="row svelte-1uha8ag"><span class="svelte-1uha8ag">email</span> <hr class="svelte-1uha8ag"/> <a class="link svelte-1uha8ag" href="mailto:ojo2@cornell.edu">ojo2@cornell.edu</a></div> <div class="row svelte-1uha8ag"><span class="svelte-1uha8ag">github</span> <hr class="svelte-1uha8ag"/> <a class="link svelte-1uha8ag" href="https://github.com/owen-oertell">@owen-oertell</a></div> <div class="row svelte-1uha8ag"><span class="svelte-1uha8ag">scholar</span> <hr class="svelte-1uha8ag"/> <a class="link svelte-1uha8ag" href="https://scholar.google.com/citations?user=y0B6gawAAAAJ&amp;hl=en">owen-oertell</a></div></div></section>`);
  });
}
export {
  _page as default
};
