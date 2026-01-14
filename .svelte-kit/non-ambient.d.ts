
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/publications" | "/publications/[slug]" | "/resume" | "/writing" | "/writing/[slug]";
		RouteParams(): {
			"/publications/[slug]": { slug: string };
			"/writing/[slug]": { slug: string }
		};
		LayoutParams(): {
			"/": { slug?: string };
			"/publications": { slug?: string };
			"/publications/[slug]": { slug: string };
			"/resume": Record<string, never>;
			"/writing": { slug?: string };
			"/writing/[slug]": { slug: string }
		};
		Pathname(): "/" | "/publications" | "/publications/" | `/publications/${string}` & {} | `/publications/${string}/` & {} | "/resume" | "/resume/" | "/writing" | "/writing/" | `/writing/${string}` & {} | `/writing/${string}/` & {};
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/.DS_Store" | "/CNAME" | "/_redirects" | "/assets/.DS_Store" | "/assets/images/ai_research.jpeg" | "/assets/images/image_round_1.png" | "/assets/images/image_round_2.png" | "/assets/images/mathcalO.svg" | "/assets/images/mountain_climber.webp" | "/assets/images/owen_oertell.png" | "/favicon.ico" | string & {};
	}
}