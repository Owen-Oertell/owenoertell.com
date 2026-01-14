import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.LoJgAxgn.js","_app/immutable/chunks/DTaW03Ab.js","_app/immutable/chunks/Dz53FERK.js","_app/immutable/chunks/BSR4x6mr.js","_app/immutable/chunks/DbBBqgaK.js","_app/immutable/chunks/QaTeJn9D.js","_app/immutable/chunks/BwYDnMAX.js","_app/immutable/chunks/4M2XcKNR.js","_app/immutable/chunks/Cj8c36AH.js","_app/immutable/chunks/gnr87aIQ.js","_app/immutable/chunks/CaZPNLdo.js","_app/immutable/chunks/BzAdTnb_.js","_app/immutable/chunks/zMVmwvzQ.js","_app/immutable/chunks/CZAfZ2TC.js","_app/immutable/chunks/zWVKwaE7.js"];
export const stylesheets = ["_app/immutable/assets/0.BdnSnL_z.css"];
export const fonts = ["_app/immutable/assets/newsreader-vietnamese-400-italic.5jH_nNPT.woff2","_app/immutable/assets/newsreader-all-400-italic.-ckaCfus.woff","_app/immutable/assets/newsreader-latin-ext-400-italic.BeXXlEwr.woff2","_app/immutable/assets/newsreader-latin-400-italic.vX9thp4v.woff2"];
