import{S as G,i as Q,s as x,k as p,r as $,a as b,l as v,m as k,u as D,h as u,c as y,p as m,b as w,D as f,E as ie,n as O,F as ce,v as fe,G as K,H as ue,e as S,z as U,I as _e,A as W,B as X,g as L,d as j,C as Y,J as de,w as he,f as me,K as se,L as re,M as ne,N as oe,O as pe,P as ve,Q as ke}from"../chunks/index.3ac5e79f.js";import{f as Z}from"../chunks/index.4fc970bf.js";import{p as ge}from"../chunks/stores.468eaf66.js";function ee(c,e,l){const n=c.slice();return n[3]=e[l],n}function te(c){let e,l,n,a,s;return{c(){e=p("span"),l=p("span"),n=$("—"),a=b(),s=$(c[1]),this.h()},l(t){e=v(t,"SPAN",{class:!0});var r=k(e);l=v(r,"SPAN",{class:!0});var i=k(l);n=D(i,"—"),i.forEach(u),a=y(r),s=D(r,c[1]),r.forEach(u),this.h()},h(){m(l,"class","text-neutral-400 svelte-bgdsr9"),m(e,"class","page-title svelte-bgdsr9")},m(t,r){w(t,e,r),f(e,l),f(l,n),f(e,a),f(e,s)},p(t,r){r&2&&fe(s,t[1])},d(t){t&&u(e)}}}function le(c,e){let l,n=e[3].name+"",a,s;return{key:c,first:null,c(){l=p("a"),a=$(n),s=b(),this.h()},l(t){l=v(t,"A",{href:!0,class:!0});var r=k(l);a=D(r,n),s=y(r),r.forEach(u),this.h()},h(){m(l,"href",e[3].href),m(l,"class","hover:text-black transition-colors svelte-bgdsr9"),K(l,"text-black",e[0].url.pathname===e[3].href),this.first=l},m(t,r){w(t,l,r),f(l,a),f(l,s)},p(t,r){e=t,r&5&&K(l,"text-black",e[0].url.pathname===e[3].href)},d(t){t&&u(l)}}}function be(c){let e,l,n,a,s,t,r,i=[],g=new Map,d=c[1]&&te(c),A=c[2];const N=_=>_[3];for(let _=0;_<A.length;_+=1){let o=ee(c,A,_),h=N(o);g.set(h,i[_]=le(h,o))}return{c(){e=p("header"),l=p("h1"),n=p("a"),a=$("Owen Oertell"),s=b(),d&&d.c(),t=b(),r=p("nav");for(let _=0;_<i.length;_+=1)i[_].c();this.h()},l(_){e=v(_,"HEADER",{class:!0,"data-sveltekit-noscroll":!0,"data-sveltekit-preload-code":!0});var o=k(e);l=v(o,"H1",{class:!0});var h=k(l);n=v(h,"A",{href:!0});var E=k(n);a=D(E,"Owen Oertell"),E.forEach(u),s=y(h),d&&d.l(h),h.forEach(u),t=y(o),r=v(o,"NAV",{class:!0});var M=k(r);for(let I=0;I<i.length;I+=1)i[I].l(M);M.forEach(u),o.forEach(u),this.h()},h(){m(n,"href","/"),m(l,"class","font-bold text-black text-2xl mb-6"),m(r,"class","svelte-bgdsr9"),m(e,"class","layout-md flex justify-between items-start"),m(e,"data-sveltekit-noscroll",""),m(e,"data-sveltekit-preload-code","eager")},m(_,o){w(_,e,o),f(e,l),f(l,n),f(n,a),f(l,s),d&&d.m(l,null),f(e,t),f(e,r);for(let h=0;h<i.length;h+=1)i[h].m(r,null)},p(_,[o]){_[1]?d?d.p(_,o):(d=te(_),d.c(),d.m(l,null)):d&&(d.d(1),d=null),o&5&&(A=_[2],i=ie(i,o,N,1,_,A,g,r,ue,le,null,ee))},i:O,o:O,d(_){_&&u(e),d&&d.d();for(let o=0;o<i.length;o+=1)i[o].d()}}}function ye(c,e,l){let n;ce(c,ge,t=>l(0,n=t));const a=[{name:"writings",href:"/writing"},{name:"publications",href:"/publications"},{name:"resume",href:"/resume"}];let s=null;return c.$$.update=()=>{if(c.$$.dirty&1){const t=a.find(({href:r})=>n.url.pathname.includes(r));t?l(1,s=t.name.charAt(0).toUpperCase()+t.name.slice(1)):l(1,s=null)}},[n,s,a]}class we extends G{constructor(e){super(),Q(this,e,ye,be,x,{})}}function Ee(c){let e,l,n,a,s,t,r,i,g,d,A,N,_,o,h,E,M,I,C,J,F;return{c(){e=p("footer"),l=p("div"),n=$(`email
    `),a=p("hr"),s=b(),t=p("a"),r=$("ojo2@cornell.edu"),i=b(),g=p("div"),d=$(`github
    `),A=p("hr"),N=b(),_=p("a"),o=$("@owen-oertell"),h=b(),E=p("div"),M=$(`scholar
    `),I=p("hr"),C=b(),J=p("a"),F=$("owen-oertell"),this.h()},l(R){e=v(R,"FOOTER",{class:!0});var H=k(e);l=v(H,"DIV",{class:!0});var T=k(l);n=D(T,`email
    `),a=v(T,"HR",{class:!0}),s=y(T),t=v(T,"A",{class:!0,href:!0});var q=k(t);r=D(q,"ojo2@cornell.edu"),q.forEach(u),T.forEach(u),i=y(H),g=v(H,"DIV",{class:!0});var V=k(g);d=D(V,`github
    `),A=v(V,"HR",{class:!0}),N=y(V),_=v(V,"A",{class:!0,href:!0});var B=k(_);o=D(B,"@owen-oertell"),B.forEach(u),V.forEach(u),h=y(H),E=v(H,"DIV",{class:!0});var P=k(E);M=D(P,`scholar
    `),I=v(P,"HR",{class:!0}),C=y(P),J=v(P,"A",{class:!0,href:!0});var z=k(J);F=D(z,"owen-oertell"),z.forEach(u),P.forEach(u),H.forEach(u),this.h()},h(){m(a,"class","svelte-x197ko"),m(t,"class","link svelte-x197ko"),m(t,"href","mailto:ojo2@cornell.edu"),m(l,"class","row svelte-x197ko"),m(A,"class","svelte-x197ko"),m(_,"class","link svelte-x197ko"),m(_,"href","https://github.com/owen-oertell"),m(g,"class","row svelte-x197ko"),m(I,"class","svelte-x197ko"),m(J,"class","link svelte-x197ko"),m(J,"href","https://scholar.google.com/citations?user=y0B6gawAAAAJ&hl=en"),m(E,"class","row svelte-x197ko"),m(e,"class","layout-md mt-20 text-lg flex flex-col")},m(R,H){w(R,e,H),f(e,l),f(l,n),f(l,a),f(l,s),f(l,t),f(t,r),f(e,i),f(e,g),f(g,d),f(g,A),f(g,N),f(g,_),f(_,o),f(e,h),f(e,E),f(E,M),f(E,I),f(E,C),f(E,J),f(J,F)},p:O,i:O,o:O,d(R){R&&u(e)}}}class Ae extends G{constructor(e){super(),Q(this,e,null,Ee,x,{})}}function $e(c){let e,l,n,a,s;return{c(){e=p("script"),n=b(),a=p("script"),s=$(`window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());

      gtag("config", "G-DTJQ3J1NVE");`),this.h()},l(t){e=v(t,"SCRIPT",{src:!0});var r=k(e);r.forEach(u),n=y(t),a=v(t,"SCRIPT",{});var i=k(a);s=D(i,`window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());

      gtag("config", "G-DTJQ3J1NVE");`),i.forEach(u),this.h()},h(){e.async=!0,de(e.src,l="https://www.googletagmanager.com/gtag/js?id=G-DTJQ3J1NVE")||m(e,"src",l)},m(t,r){w(t,e,r),w(t,n,r),w(t,a,r),f(a,s)},d(t){t&&u(e),t&&u(n),t&&u(a)}}}function De(c){let e=c[0].pathname,l,n,a=ae(c);return{c(){a.c(),l=S()},l(s){a.l(s),l=S()},m(s,t){a.m(s,t),w(s,l,t),n=!0},p(s,t){t&1&&x(e,e=s[0].pathname)?(he(),j(a,1,1,O),me(),a=ae(s),a.c(),L(a,1),a.m(l.parentNode,l)):a.p(s,t)},i(s){n||(L(a),n=!0)},o(s){j(a),n=!1},d(s){s&&u(l),a.d(s)}}}function Ne(c){let e,l;const n=c[4].default,a=se(n,c,c[3],null);return{c(){e=p("main"),a&&a.c()},l(s){e=v(s,"MAIN",{});var t=k(e);a&&a.l(t),t.forEach(u)},m(s,t){w(s,e,t),a&&a.m(e,null),l=!0},p(s,t){a&&a.p&&(!l||t&8)&&re(a,n,s,s[3],l?oe(n,s[3],t,null):ne(s[3]),null)},i(s){l||(L(a,s),l=!0)},o(s){j(a,s),l=!1},d(s){s&&u(e),a&&a.d(s)}}}function ae(c){let e,l,n,a;const s=c[4].default,t=se(s,c,c[3],null);return{c(){e=p("main"),t&&t.c()},l(r){e=v(r,"MAIN",{});var i=k(e);t&&t.l(i),i.forEach(u)},m(r,i){w(r,e,i),t&&t.m(e,null),a=!0},p(r,i){t&&t.p&&(!a||i&8)&&re(t,s,r,r[3],a?oe(s,r[3],i,null):ne(r[3]),null)},i(r){a||(L(t,r),pe(()=>{n&&n.end(1),l=ve(e,Z,{x:-10,duration:350,delay:350}),l.start()}),a=!0)},o(r){j(t,r),l&&l.invalidate(),n=ke(e,Z,{y:5,duration:350}),a=!1},d(r){r&&u(e),t&&t.d(r),r&&n&&n.end()}}}function Ie(c){let e,l,n,a,s,t,r,i,g,d=$e();n=new we({});const A=[Ne,De],N=[];function _(o,h){return o[1]||o[2]?0:1}return s=_(c),t=N[s]=A[s](c),i=new Ae({}),{c(){d&&d.c(),e=S(),l=b(),U(n.$$.fragment),a=b(),t.c(),r=b(),U(i.$$.fragment)},l(o){const h=_e("svelte-1gx8tps",document.head);d&&d.l(h),e=S(),h.forEach(u),l=y(o),W(n.$$.fragment,o),a=y(o),t.l(o),r=y(o),W(i.$$.fragment,o)},m(o,h){d&&d.m(document.head,null),f(document.head,e),w(o,l,h),X(n,o,h),w(o,a,h),N[s].m(o,h),w(o,r,h),X(i,o,h),g=!0},p(o,[h]){t.p(o,h)},i(o){g||(L(n.$$.fragment,o),L(t),L(i.$$.fragment,o),g=!0)},o(o){j(n.$$.fragment,o),j(t),j(i.$$.fragment,o),g=!1},d(o){d&&d.d(o),u(e),o&&u(l),Y(n,o),o&&u(a),N[s].d(o),o&&u(r),Y(i,o)}}}function He(c,e,l){let{$$slots:n={},$$scope:a}=e,{data:s}=e;const t=/Android|iPhone/i.test(navigator.userAgent),r=matchMedia("(prefers-reduced-motion: reduce)").matches;return c.$$set=i=>{"data"in i&&l(0,s=i.data),"$$scope"in i&&l(3,a=i.$$scope)},[s,t,r,a,n]}class Me extends G{constructor(e){super(),Q(this,e,He,Ie,x,{data:0})}}export{Me as default};
