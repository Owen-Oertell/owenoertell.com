import * as universal from '../entries/pages/publications/_slug_/_page.ts.js';
import * as server from '../entries/pages/publications/_slug_/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/publications/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/publications/[slug]/+page.ts";
export { server };
export const server_id = "src/routes/publications/[slug]/+page.server.ts";
export const imports = ["_app/immutable/nodes/5._Ttgb5cy.js","_app/immutable/chunks/J2exRR6P.js","_app/immutable/chunks/BgBjWlh1.js","_app/immutable/chunks/DvSjV8Dt.js","_app/immutable/chunks/kgMkjAyL.js","_app/immutable/chunks/DM_2-J8O.js","_app/immutable/chunks/aWXT79Eg.js","_app/immutable/chunks/BjXCfHD9.js","_app/immutable/chunks/BA6G6jUo.js","_app/immutable/chunks/BhTZATZw.js","_app/immutable/chunks/CLVaxqoL.js","_app/immutable/chunks/BzaMCobw.js","_app/immutable/chunks/DlDVzIku.js","_app/immutable/chunks/g6Fxi1of.js","_app/immutable/chunks/zmSbk7pD.js","_app/immutable/chunks/C00GmUgo.js","_app/immutable/chunks/BlpvKRpP.js","_app/immutable/chunks/Btlb4kqP.js"];
export const stylesheets = ["_app/immutable/assets/5.IoD07seF.css"];
export const fonts = [];
