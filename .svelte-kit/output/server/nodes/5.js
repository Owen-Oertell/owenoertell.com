import * as universal from '../entries/pages/publications/_slug_/_page.ts.js';
import * as server from '../entries/pages/publications/_slug_/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/publications/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/publications/[slug]/+page.ts";
export { server };
export const server_id = "src/routes/publications/[slug]/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.BCEdc0pO.js","_app/immutable/chunks/DUL2TMSj.js","_app/immutable/chunks/CTFc5pQp.js","_app/immutable/chunks/DBgJQBXs.js","_app/immutable/chunks/CqPvTlh5.js","_app/immutable/chunks/BoUBwXV2.js","_app/immutable/chunks/Bm4Ql61E.js","_app/immutable/chunks/COn9SJEB.js","_app/immutable/chunks/DPlBqZvs.js","_app/immutable/chunks/Dtaf2nt-.js","_app/immutable/chunks/CEpDHaN0.js","_app/immutable/chunks/C4wKU2M6.js","_app/immutable/chunks/CKdbpswW.js","_app/immutable/chunks/BRfcY6OA.js","_app/immutable/chunks/zmSbk7pD.js","_app/immutable/chunks/aO7iv0_i.js","_app/immutable/chunks/ByquRO31.js","_app/immutable/chunks/BTpomqd3.js"];
export const stylesheets = ["_app/immutable/assets/5.IoD07seF.css"];
export const fonts = [];
