export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","CNAME","_redirects","assets/.DS_Store","assets/content/two-sides-of-ml-research.md","assets/images/ai_research.jpeg","assets/images/image_round_1.png","assets/images/image_round_2.png","assets/images/mathcalO.svg","assets/images/mountain_climber.webp","assets/images/owen_oertell.png","favicon.ico"]),
	mimeTypes: {".md":"text/markdown",".jpeg":"image/jpeg",".png":"image/png",".svg":"image/svg+xml",".webp":"image/webp",".ico":"image/vnd.microsoft.icon"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.1025890e.js","imports":["_app/immutable/entry/start.1025890e.js","_app/immutable/chunks/index.3ac5e79f.js","_app/immutable/chunks/singletons.5276739a.js","_app/immutable/chunks/control.e7f5239e.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.1604a27a.js","imports":["_app/immutable/entry/app.1604a27a.js","_app/immutable/chunks/index.3ac5e79f.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
