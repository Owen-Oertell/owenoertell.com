import * as universal from '../entries/pages/publications/_slug_/_page.ts.js';
import * as server from '../entries/pages/publications/_slug_/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/publications/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/publications/[slug]/+page.ts";
export { server };
export const server_id = "src/routes/publications/[slug]/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.XKpBt9Ov.js","_app/immutable/chunks/ClOl9dmH.js","_app/immutable/chunks/BBPmyNM4.js","_app/immutable/chunks/CDJt_I-z.js","_app/immutable/chunks/BZXONuDF.js","_app/immutable/chunks/BSWeh_4s.js","_app/immutable/chunks/CWSYvbSR.js","_app/immutable/chunks/TSY2CcxY.js","_app/immutable/chunks/4oz8gmgq.js","_app/immutable/chunks/DwrScgbY.js","_app/immutable/chunks/BVP4zunF.js","_app/immutable/chunks/CChnDLSk.js","_app/immutable/chunks/zfra-goi.js","_app/immutable/chunks/VOoZFfsa.js","_app/immutable/chunks/DnSXSBc1.js"];
export const stylesheets = ["_app/immutable/assets/3.IoD07seF.css"];
export const fonts = [];
