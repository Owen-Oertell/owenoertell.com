import "clsx";
import { S as Seo } from "../../../chunks/Seo.js";
import { ag as fallback, a6 as attr_class, a3 as escape_html, a5 as attr, a9 as slot, aa as bind_props } from "../../../chunks/index.js";
function Workplace($$renderer, $$props) {
  let title = $$props["title"];
  let company = $$props["company"];
  let url = $$props["url"];
  let dates = $$props["dates"];
  let location = $$props["location"];
  let defaultHidden = fallback($$props["defaultHidden"], false);
  let hidden = defaultHidden;
  $$renderer.push(`<div${attr_class("mb-8", void 0, { "cursor-pointer": hidden })}><h3 class="text-black text-lg leading-tight mb-1">${escape_html(title)} at <a class="link"${attr("href", url)}>${escape_html(company)}</a></h3> <p class="font-light mb-2"><span class="whitespace-nowrap">${escape_html(dates)}</span> <span class="px-0.5 text-gray-500">•</span> <span class="whitespace-nowrap">${escape_html(location)}</span></p> `);
  if (!hidden) {
    $$renderer.push("<!--[-->");
    $$renderer.push(`<ul class="list-disc pl-7 marker:text-neutral-400"><!--[-->`);
    slot($$renderer, $$props, "default", {});
    $$renderer.push(`<!--]--></ul>`);
  } else {
    $$renderer.push("<!--[!-->");
  }
  $$renderer.push(`<!--]--></div>`);
  bind_props($$props, { title, company, url, dates, location, defaultHidden });
}
function _page($$renderer) {
  Seo($$renderer, {
    title: "Owen Oertell – Resume",
    description: "Researcher, software engineer."
  });
  $$renderer.push(`<!----> <section class="layout-md py-12"><h2 class="heading2">Education</h2> <div class="mb-4"><div class="flex justify-between items-end"><h3 class="text-black text-lg">Cornell University</h3> <div class="text-neutral-500 mb-0.5">2022 — Current</div></div> <p class="byline svelte-1mijfb4">B.S. in Computer Science; Minor in Mathematics</p></div> <h4 class="font-medium mt-4 mb-1">Teaching:</h4> <ul class="svelte-1mijfb4"><li class="svelte-1mijfb4">TA for CS 4789 (Introduction to Reinforcement Learning). Sp24, Sp25 (Head TA)</li> <li class="svelte-1mijfb4">TA for CS 4820 (Introduction to Analysis of Algorithms). Fa23, Sp23</li></ul> <h4 class="font-medium mt-4 mb-1">Community Service:</h4> <ul class="svelte-1mijfb4"><li class="svelte-1mijfb4">ICLR 2025, 2026 Reviewer (2025 Notable Reviewer)</li> <li class="svelte-1mijfb4">NeurIPS 2025 Reviewer</li> <li class="svelte-1mijfb4">RLC 2025 Reviewer</li> <li class="svelte-1mijfb4">COLM 2025 Reviewer</li> <li class="svelte-1mijfb4">ACL ARR 2025 Reviewer</li></ul></section> <section class="layout-md py-5"><h2 class="heading2">Professional Experience</h2> `);
  Workplace($$renderer, {
    title: "Research Scientist Intern",
    company: "Databricks",
    url: "https://databricks.com",
    dates: "August 2025 – Present",
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
    dates: "June 2025 – August 2025",
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
    dates: "August 2024 – December 2024",
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
    dates: "June 2024 – August 2024",
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
    dates: "September 2022 – Current",
    location: "Ithaca, NY",
    children: ($$renderer2) => {
      $$renderer2.push(`<li>Reinforcement learning</li>`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----></section>`);
}
export {
  _page as default
};
