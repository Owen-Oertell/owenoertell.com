import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.N9I8GXaI.js","_app/immutable/chunks/J2exRR6P.js","_app/immutable/chunks/BgBjWlh1.js","_app/immutable/chunks/DvSjV8Dt.js","_app/immutable/chunks/kgMkjAyL.js","_app/immutable/chunks/DM_2-J8O.js","_app/immutable/chunks/C00GmUgo.js","_app/immutable/chunks/BhTZATZw.js","_app/immutable/chunks/g6Fxi1of.js","_app/immutable/chunks/CLVaxqoL.js","_app/immutable/chunks/Btlb4kqP.js","_app/immutable/chunks/BzaMCobw.js","_app/immutable/chunks/BjXCfHD9.js","_app/immutable/chunks/BA6G6jUo.js"];
export const stylesheets = ["_app/immutable/assets/0.Q8RVN_uF.css"];
export const fonts = ["_app/immutable/assets/newsreader-vietnamese-400-italic.5jH_nNPT.woff2","_app/immutable/assets/newsreader-all-400-italic.-ckaCfus.woff","_app/immutable/assets/newsreader-latin-ext-400-italic.BeXXlEwr.woff2","_app/immutable/assets/newsreader-latin-400-italic.vX9thp4v.woff2"];
