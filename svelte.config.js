import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [preprocess({ postcss: true })],

  kit: {
    adapter: adapter({
      strict: false
    }),
    prerender: {
      crawl: true,
      entries: ["*"],
    },
    paths: {
      relative: false
    }
  },
};

export default config;
