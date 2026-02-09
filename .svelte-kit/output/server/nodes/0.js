import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.BuVFTb2a.js","_app/immutable/chunks/ClOl9dmH.js","_app/immutable/chunks/BBPmyNM4.js","_app/immutable/chunks/CDJt_I-z.js","_app/immutable/chunks/BZXONuDF.js","_app/immutable/chunks/VOoZFfsa.js","_app/immutable/chunks/BSWeh_4s.js","_app/immutable/chunks/CChnDLSk.js","_app/immutable/chunks/CWSYvbSR.js","_app/immutable/chunks/TSY2CcxY.js","_app/immutable/chunks/4oz8gmgq.js","_app/immutable/chunks/DwrScgbY.js"];
export const stylesheets = ["_app/immutable/assets/0.BL-tmMuE.css"];
export const fonts = ["_app/immutable/assets/newsreader-vietnamese-400-italic.5jH_nNPT.woff2","_app/immutable/assets/newsreader-all-400-italic.-ckaCfus.woff","_app/immutable/assets/newsreader-latin-ext-400-italic.BeXXlEwr.woff2","_app/immutable/assets/newsreader-latin-400-italic.vX9thp4v.woff2"];
