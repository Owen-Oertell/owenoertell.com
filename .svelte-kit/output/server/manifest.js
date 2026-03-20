export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","CNAME","_redirects","assets/.DS_Store","assets/images/ai_research.jpeg","assets/images/garden.jpeg","assets/images/image_round_1.png","assets/images/image_round_2.png","assets/images/mathcalO.svg","assets/images/mountain_climber.webp","assets/images/owen_oertell.png","assets/images/pub_heuristics.png","assets/images/pub_karl.png","assets/images/pub_rebel.png","assets/images/pub_slcd.png","favicon.ico"]),
	mimeTypes: {".jpeg":"image/jpeg",".png":"image/png",".svg":"image/svg+xml",".webp":"image/webp"},
	_: {
		client: {start:"_app/immutable/entry/start.Dmj76C57.js",app:"_app/immutable/entry/app.BjvkSt9F.js",imports:["_app/immutable/entry/start.Dmj76C57.js","_app/immutable/chunks/DCsKlMwY.js","_app/immutable/chunks/BgBjWlh1.js","_app/immutable/chunks/BA6G6jUo.js","_app/immutable/entry/app.BjvkSt9F.js","_app/immutable/chunks/BgBjWlh1.js","_app/immutable/chunks/J2exRR6P.js","_app/immutable/chunks/BA6G6jUo.js","_app/immutable/chunks/kgMkjAyL.js","_app/immutable/chunks/DM_2-J8O.js","_app/immutable/chunks/C7flYrCB.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/","/blog","/resume","/blog/hello-world","/publications/heuristics-considered-harmful","/publications/slcd","/publications/delay-dependent-bandits","/publications/sorl","/publications/consistency-model-convergence","/publications/turbohopp","/publications/rebel","/publications/rlcm","/publications/distrl","/publications/drpo","/publications/kernel-orbital-debris","/publications/eigenvector-orbit-determination","/publications/karl"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
