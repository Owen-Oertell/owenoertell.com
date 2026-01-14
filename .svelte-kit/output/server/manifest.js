export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","CNAME","_redirects","assets/.DS_Store","assets/images/ai_research.jpeg","assets/images/image_round_1.png","assets/images/image_round_2.png","assets/images/mathcalO.svg","assets/images/mountain_climber.webp","assets/images/owen_oertell.png","favicon.ico"]),
	mimeTypes: {".jpeg":"image/jpeg",".png":"image/png",".svg":"image/svg+xml",".webp":"image/webp"},
	_: {
		client: {start:"_app/immutable/entry/start.wFcuGnxn.js",app:"_app/immutable/entry/app.67jT5tLp.js",imports:["_app/immutable/entry/start.wFcuGnxn.js","_app/immutable/chunks/CZAfZ2TC.js","_app/immutable/chunks/Dz53FERK.js","_app/immutable/chunks/zWVKwaE7.js","_app/immutable/entry/app.67jT5tLp.js","_app/immutable/chunks/Dz53FERK.js","_app/immutable/chunks/Cj8c36AH.js","_app/immutable/chunks/DTaW03Ab.js","_app/immutable/chunks/zWVKwaE7.js","_app/immutable/chunks/DbBBqgaK.js","_app/immutable/chunks/QaTeJn9D.js","_app/immutable/chunks/m6WN6vUz.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/","/publications","/resume","/writing","/publications/heuristics-considered-harmful","/publications/slcd","/publications/delay-dependent-bandits","/publications/sorl","/publications/consistency-model-convergence","/publications/turbohopp","/publications/rebel","/publications/rlcm","/publications/distrl","/publications/drpo","/publications/kernel-orbital-debris","/publications/eigenvector-orbit-determination","/writing/heuristics-considered-harmful"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
