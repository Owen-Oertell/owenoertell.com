import { ag as fallback, a8 as head, aa as bind_props, a3 as escape_html, a5 as attr } from "./index.js";
function Seo($$renderer, $$props) {
  let title = $$props["title"];
  let ogTitle = fallback($$props["ogTitle"], null);
  let description = $$props["description"];
  head("gsrl61", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>${escape_html(title)}</title>`);
    });
    $$renderer2.push(`<meta name="description"${attr("content", description)}/> <meta property="og:title"${attr("content", ogTitle ?? title)}/> <meta property="og:description"${attr("content", description)}/> <meta property="og:image" content="https://www.owenoertell.com/assets/images/image_round_1.png"/> <meta name="twitter:card" content="summary_large_image"/>`);
  });
  bind_props($$props, { title, ogTitle, description });
}
export {
  Seo as S
};
