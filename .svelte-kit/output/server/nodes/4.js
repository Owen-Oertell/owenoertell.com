import * as universal from '../entries/pages/publications/_slug_/_page.ts.js';
import * as server from '../entries/pages/publications/_slug_/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/publications/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/publications/[slug]/+page.ts";
export { server };
export const server_id = "src/routes/publications/[slug]/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.S39oWiCd.js","_app/immutable/chunks/DTaW03Ab.js","_app/immutable/chunks/Dz53FERK.js","_app/immutable/chunks/BSR4x6mr.js","_app/immutable/chunks/Cj8c36AH.js","_app/immutable/chunks/DbBBqgaK.js","_app/immutable/chunks/QaTeJn9D.js","_app/immutable/chunks/FU22K00p.js","_app/immutable/chunks/CZAfZ2TC.js","_app/immutable/chunks/zWVKwaE7.js","_app/immutable/chunks/4M2XcKNR.js","_app/immutable/chunks/CaZPNLdo.js","_app/immutable/chunks/zMVmwvzQ.js","_app/immutable/chunks/8CgFLI95.js","_app/immutable/chunks/gnr87aIQ.js","_app/immutable/chunks/zfra-goi.js","_app/immutable/chunks/BwYDnMAX.js","_app/immutable/chunks/3VVrX6wI.js","_app/immutable/chunks/BzAdTnb_.js"];
export const stylesheets = ["_app/immutable/assets/4.IoD07seF.css"];
export const fonts = [];
