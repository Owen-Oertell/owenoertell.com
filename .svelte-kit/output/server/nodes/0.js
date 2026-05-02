import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.DJfEvVza.js","_app/immutable/chunks/DUL2TMSj.js","_app/immutable/chunks/CTFc5pQp.js","_app/immutable/chunks/DBgJQBXs.js","_app/immutable/chunks/CqPvTlh5.js","_app/immutable/chunks/BoUBwXV2.js","_app/immutable/chunks/aO7iv0_i.js","_app/immutable/chunks/Dtaf2nt-.js","_app/immutable/chunks/BRfcY6OA.js","_app/immutable/chunks/CEpDHaN0.js","_app/immutable/chunks/BTpomqd3.js","_app/immutable/chunks/C4wKU2M6.js","_app/immutable/chunks/COn9SJEB.js","_app/immutable/chunks/DPlBqZvs.js"];
export const stylesheets = ["_app/immutable/assets/0.CiNDMGOM.css"];
export const fonts = ["_app/immutable/assets/newsreader-vietnamese-400-italic.5jH_nNPT.woff2","_app/immutable/assets/newsreader-all-400-italic.-ckaCfus.woff","_app/immutable/assets/newsreader-latin-ext-400-italic.BeXXlEwr.woff2","_app/immutable/assets/newsreader-latin-400-italic.vX9thp4v.woff2"];
