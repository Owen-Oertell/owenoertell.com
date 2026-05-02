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
		client: {start:"_app/immutable/entry/start.CAwmPP0D.js",app:"_app/immutable/entry/app.BJ63X9Pw.js",imports:["_app/immutable/entry/start.CAwmPP0D.js","_app/immutable/chunks/COn9SJEB.js","_app/immutable/chunks/CTFc5pQp.js","_app/immutable/chunks/DPlBqZvs.js","_app/immutable/entry/app.BJ63X9Pw.js","_app/immutable/chunks/CTFc5pQp.js","_app/immutable/chunks/DUL2TMSj.js","_app/immutable/chunks/DPlBqZvs.js","_app/immutable/chunks/CqPvTlh5.js","_app/immutable/chunks/BoUBwXV2.js","_app/immutable/chunks/DMJFZJJE.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
