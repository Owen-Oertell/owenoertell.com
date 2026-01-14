import { ab as sanitize_props, ac as spread_props, a9 as slot, a3 as escape_html, a2 as store_get, a7 as unsubscribe_stores } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
import { I as Icon } from "../../chunks/Icon.js";
function Bug($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.469.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const iconNode = [
    ["path", { "d": "m8 2 1.88 1.88" }],
    ["path", { "d": "M14.12 3.88 16 2" }],
    ["path", { "d": "M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" }],
    [
      "path",
      {
        "d": "M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6"
      }
    ],
    ["path", { "d": "M12 20v-9" }],
    ["path", { "d": "M6.53 9C4.6 8.8 3 7.1 3 5" }],
    ["path", { "d": "M6 13H2" }],
    ["path", { "d": "M3 21c0-2.1 1.7-3.9 3.8-4" }],
    ["path", { "d": "M20.97 5c0 2.1-1.6 3.8-3.5 4" }],
    ["path", { "d": "M22 13h-4" }],
    ["path", { "d": "M17.2 17c2.1.1 3.8 1.9 3.8 4" }]
  ];
  Icon($$renderer, spread_props([
    { name: "bug" },
    $$sanitized_props,
    {
      /**
       * @component @name Bug
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtOCAyIDEuODggMS44OCIgLz4KICA8cGF0aCBkPSJNMTQuMTIgMy44OCAxNiAyIiAvPgogIDxwYXRoIGQ9Ik05IDcuMTN2LTFhMy4wMDMgMy4wMDMgMCAxIDEgNiAwdjEiIC8+CiAgPHBhdGggZD0iTTEyIDIwYy0zLjMgMC02LTIuNy02LTZ2LTNhNCA0IDAgMCAxIDQtNGg0YTQgNCAwIDAgMSA0IDR2M2MwIDMuMy0yLjcgNi02IDYiIC8+CiAgPHBhdGggZD0iTTEyIDIwdi05IiAvPgogIDxwYXRoIGQ9Ik02LjUzIDlDNC42IDguOCAzIDcuMSAzIDUiIC8+CiAgPHBhdGggZD0iTTYgMTNIMiIgLz4KICA8cGF0aCBkPSJNMyAyMWMwLTIuMSAxLjctMy45IDMuOC00IiAvPgogIDxwYXRoIGQ9Ik0yMC45NyA1YzAgMi4xLTEuNiAzLjgtMy41IDQiIC8+CiAgPHBhdGggZD0iTTIyIDEzaC00IiAvPgogIDxwYXRoIGQ9Ik0xNy4yIDE3YzIuMS4xIDMuOCAxLjkgMy44IDQiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/bug
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
function _error($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    $$renderer2.push(`<div class="layout-md"><div class="pt-14 pb-40 sm:pt-20 sm:pb-80 text-xl flex justify-center items-center">`);
    Bug($$renderer2, { class: "mr-2" });
    $$renderer2.push(`<!----> <span class="font-medium">404</span> <div class="mx-4 h-8 border-l border-black"></div> ${escape_html(store_get($$store_subs ??= {}, "$page", page).error?.message)}</div></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _error as default
};
