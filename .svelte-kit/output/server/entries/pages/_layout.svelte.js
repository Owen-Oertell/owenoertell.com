import { a2 as store_get, a3 as ensure_array_like, a4 as attr, a5 as attr_class, a6 as escape_html, a7 as unsubscribe_stores, a8 as head, a9 as slot, aa as bind_props } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
function Header($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let isResumePage;
    const links = [
      { name: "publications", href: "/#publications" },
      { name: "resume", href: "/resume" },
      { name: "contact", href: "/#contact" }
    ];
    isResumePage = store_get($$store_subs ??= {}, "$page", page).url.pathname === "/resume";
    $$renderer2.push(`<header class="layout-md flex justify-between items-start" data-sveltekit-noscroll="" data-sveltekit-preload-code="eager"><h1 class="font-bold text-black text-2xl mb-6"><a href="/">Owen Oertell</a> `);
    if (isResumePage) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<span class="page-title svelte-1elxaub"><span class="text-neutral-400 svelte-1elxaub">—</span> Resume</span>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></h1> <nav class="svelte-1elxaub"><!--[-->`);
    const each_array = ensure_array_like(links);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let link = each_array[$$index];
      $$renderer2.push(`<a${attr("href", link.href)}${attr_class("hover:text-black transition-colors svelte-1elxaub", void 0, { "text-black": isResumePage && link.href === "/resume" })}>${escape_html(link.name)}</a>`);
    }
    $$renderer2.push(`<!--]--></nav></header>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let data = $$props["data"];
    head("12qhfyh", $$renderer2, ($$renderer3) => {
      {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<script async src="https://www.googletagmanager.com/gtag/js?id=G-DTJQ3J1NVE"><\/script> <script>
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());

      gtag("config", "G-DTJQ3J1NVE");
    <\/script>`);
      }
      $$renderer3.push(`<!--]-->`);
    });
    Header($$renderer2);
    $$renderer2.push(`<!----> `);
    {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<!---->`);
      {
        $$renderer2.push(`<main><!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]--></main>`);
      }
      $$renderer2.push(`<!---->`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { data });
  });
}
export {
  _layout as default
};
