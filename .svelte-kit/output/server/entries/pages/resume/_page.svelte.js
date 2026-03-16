import "clsx";
import { S as Seo } from "../../../chunks/Seo.js";
import { a5 as attr, a3 as escape_html, a9 as slot, aa as bind_props } from "../../../chunks/index.js";
function Workplace($$renderer, $$props) {
  let title = $$props["title"];
  let company = $$props["company"];
  let url = $$props["url"];
  let dates = $$props["dates"];
  let location = $$props["location"];
  $$renderer.push(`<div class="entry svelte-w6jacu"><div class="entry-header svelte-w6jacu"><div class="entry-left svelte-w6jacu"><a class="company-name svelte-w6jacu"${attr("href", url)} target="_blank" rel="noreferrer">${escape_html(company)}</a> <span class="role-title svelte-w6jacu">${escape_html(title)}</span></div> <div class="entry-right svelte-w6jacu"><span class="entry-dates svelte-w6jacu">${escape_html(dates)}</span> <span class="entry-location svelte-w6jacu">${escape_html(location)}</span></div></div> <ul class="entry-bullets svelte-w6jacu"><!--[-->`);
  slot($$renderer, $$props, "default", {});
  $$renderer.push(`<!--]--></ul></div>`);
  bind_props($$props, { title, company, url, dates, location });
}
function _page($$renderer) {
  Seo($$renderer, {
    title: "Owen Oertell – Resume",
    description: "Researcher, software engineer."
  });
  $$renderer.push(`<!----> <div class="layout-md py-8 space-y-12"><section><h2 class="section-heading svelte-1mijfb4">Education</h2> <div class="entry py-4 border-b border-neutral-100"><div class="flex justify-between items-start gap-4 flex-wrap"><div><div class="text-black font-semibold text-base">Cornell University</div> <div class="text-neutral-500 text-sm mt-0.5">B.S. in Computer Science — Minor in Mathematics</div></div> <div class="text-neutral-500 text-sm whitespace-nowrap">2022 — Present</div></div></div> <div class="sub-section svelte-1mijfb4"><h3 class="sub-heading svelte-1mijfb4">Teaching</h3> <ul class="item-list svelte-1mijfb4"><li class="svelte-1mijfb4"><span class="item-label svelte-1mijfb4">CS 4789</span> Introduction to Reinforcement Learning <span class="item-tags svelte-1mijfb4"><span class="tag svelte-1mijfb4">Sp24</span> <span class="tag svelte-1mijfb4">Sp25 Head TA</span></span></li> <li class="svelte-1mijfb4"><span class="item-label svelte-1mijfb4">CS 4820</span> Introduction to Analysis of Algorithms <span class="item-tags svelte-1mijfb4"><span class="tag svelte-1mijfb4">Fa23</span> <span class="tag svelte-1mijfb4">Sp23</span></span></li></ul></div> <div class="sub-section svelte-1mijfb4"><h3 class="sub-heading svelte-1mijfb4">Service</h3> <ul class="item-list svelte-1mijfb4"><li class="svelte-1mijfb4"><span class="item-label svelte-1mijfb4">ICLR</span> Reviewer 2025, 2026 <span class="item-tags svelte-1mijfb4"><span class="tag svelte-1mijfb4">Notable Reviewer 2025</span></span></li> <li class="svelte-1mijfb4"><span class="item-label svelte-1mijfb4">NeurIPS</span> Reviewer 2025</li> <li class="svelte-1mijfb4"><span class="item-label svelte-1mijfb4">RLC</span> Reviewer 2025</li> <li class="svelte-1mijfb4"><span class="item-label svelte-1mijfb4">COLM</span> Reviewer 2025</li> <li class="svelte-1mijfb4"><span class="item-label svelte-1mijfb4">ACL ARR</span> Reviewer 2025</li></ul></div></section> <section><h2 class="section-heading svelte-1mijfb4">Experience</h2> `);
  Workplace($$renderer, {
    title: "Research Scientist Intern",
    company: "Databricks",
    url: "https://databricks.com",
    dates: "Aug 2025 – Present",
    location: "New York, NY",
    children: ($$renderer2) => {
      $$renderer2.push(`<li>Deep Research Agents</li>`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> `);
  Workplace($$renderer, {
    title: "Research Intern",
    company: "NVIDIA",
    url: "https://nvidia.com",
    dates: "Jun 2025 – Aug 2025",
    location: "Santa Clara, CA",
    children: ($$renderer2) => {
      $$renderer2.push(`<li>RL + Compilers</li>`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> `);
  Workplace($$renderer, {
    title: "Research Intern",
    company: "NVIDIA",
    url: "https://nvidia.com",
    dates: "Aug 2024 – Dec 2024",
    location: "Santa Clara, CA",
    children: ($$renderer2) => {
      $$renderer2.push(`<li>ML + Compilers</li>`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> `);
  Workplace($$renderer, {
    title: "Software Engineering Intern",
    company: "DRW Holdings",
    url: "https://drw.com",
    dates: "Jun 2024 – Aug 2024",
    location: "Chicago, IL",
    children: ($$renderer2) => {
      $$renderer2.push(`<li>Commodities desk</li>`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> `);
  Workplace($$renderer, {
    title: "Researcher",
    company: "Sun Lab, Cornell University",
    url: "https://wensun.github.io",
    dates: "Sep 2022 – Present",
    location: "Ithaca, NY",
    children: ($$renderer2) => {
      $$renderer2.push(`<li>Reinforcement learning</li>`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----></section> <section><div class="contact-rows flex flex-col"><div class="row svelte-1mijfb4"><span class="svelte-1mijfb4">email</span> <hr class="svelte-1mijfb4"/> <a class="link svelte-1mijfb4" href="mailto:ojo2@cornell.edu">ojo2@cornell.edu</a></div> <div class="row svelte-1mijfb4"><span class="svelte-1mijfb4">github</span> <hr class="svelte-1mijfb4"/> <a class="link svelte-1mijfb4" href="https://github.com/owen-oertell">@owen-oertell</a></div> <div class="row svelte-1mijfb4"><span class="svelte-1mijfb4">scholar</span> <hr class="svelte-1mijfb4"/> <a class="link svelte-1mijfb4" href="https://scholar.google.com/citations?user=y0B6gawAAAAJ&amp;hl=en">owen-oertell</a></div></div></section></div>`);
}
export {
  _page as default
};
