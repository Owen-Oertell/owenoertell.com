import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [preprocess({ postcss: true })],

  kit: {
    adapter: adapter(),
    prerender: {
      crawl: true,
      entries: ["*", "/writing/two-sides-of-ml-research"],
    }
  },
};

export default config;
