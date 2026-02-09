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
		client: {start:"_app/immutable/entry/start.Dr3mmzAa.js",app:"_app/immutable/entry/app.CL_y1PA5.js",imports:["_app/immutable/entry/start.Dr3mmzAa.js","_app/immutable/chunks/4oz8gmgq.js","_app/immutable/chunks/BBPmyNM4.js","_app/immutable/chunks/DwrScgbY.js","_app/immutable/entry/app.CL_y1PA5.js","_app/immutable/chunks/BBPmyNM4.js","_app/immutable/chunks/ClOl9dmH.js","_app/immutable/chunks/DwrScgbY.js","_app/immutable/chunks/BZXONuDF.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/","/resume","/publications/heuristics-considered-harmful","/publications/slcd","/publications/delay-dependent-bandits","/publications/sorl","/publications/consistency-model-convergence","/publications/turbohopp","/publications/rebel","/publications/rlcm","/publications/distrl","/publications/drpo","/publications/kernel-orbital-debris","/publications/eigenvector-orbit-determination"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
