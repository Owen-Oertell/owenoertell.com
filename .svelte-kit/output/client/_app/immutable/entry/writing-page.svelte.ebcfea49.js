import{S as ie,i as oe,s as ue,k as H,l as N,m as $,h as k,p as F,b as E,g as Z,w as be,f as ge,d as q,_ as ve,r as V,a as O,z as K,u as W,c as U,A as Q,D as T,B as ee,v as C,C as te,n as pe}from"../chunks/index.3ac5e79f.js";import{S as De}from"../chunks/Seo.db64ad21.js";import{A as ye}from"../chunks/arrow-up-right.968743a3.js";import{d as Se}from"../chunks/writing.a79fa172.js";var re={},_e={get exports(){return re},set exports(g){re=g}};(function(g){(function(){var r={de_DE:{identifier:"de-DE",days:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],shortDays:["So","Mo","Di","Mi","Do","Fr","Sa"],months:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],shortMonths:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],AM:"AM",PM:"PM",am:"am",pm:"pm",formats:{c:"%a %d %b %Y %X %Z",D:"%d.%m.%Y",F:"%Y-%m-%d",R:"%H:%M",r:"%I:%M:%S %p",T:"%H:%M:%S",v:"%e-%b-%Y",X:"%T",x:"%D"}},en_CA:{identifier:"en-CA",days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],ordinalSuffixes:["st","nd","rd","th","th","th","th","th","th","th","th","th","th","th","th","th","th","th","th","th","st","nd","rd","th","th","th","th","th","th","th","st"],AM:"AM",PM:"PM",am:"am",pm:"pm",formats:{c:"%a %d %b %Y %X %Z",D:"%d/%m/%y",F:"%Y-%m-%d",R:"%H:%M",r:"%I:%M:%S %p",T:"%H:%M:%S",v:"%e-%b-%Y",X:"%r",x:"%D"}},en_US:{identifier:"en-US",days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],ordinalSuffixes:["st","nd","rd","th","th","th","th","th","th","th","th","th","th","th","th","th","th","th","th","th","st","nd","rd","th","th","th","th","th","th","th","st"],AM:"AM",PM:"PM",am:"am",pm:"pm",formats:{c:"%a %d %b %Y %X %Z",D:"%m/%d/%y",F:"%Y-%m-%d",R:"%H:%M",r:"%I:%M:%S %p",T:"%H:%M:%S",v:"%e-%b-%Y",X:"%r",x:"%D"}},es_MX:{identifier:"es-MX",days:["domingo","lunes","martes","miércoles","jueves","viernes","sábado"],shortDays:["dom","lun","mar","mié","jue","vie","sáb"],months:["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre"," diciembre"],shortMonths:["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"],AM:"AM",PM:"PM",am:"am",pm:"pm",formats:{c:"%a %d %b %Y %X %Z",D:"%d/%m/%Y",F:"%Y-%m-%d",R:"%H:%M",r:"%I:%M:%S %p",T:"%H:%M:%S",v:"%e-%b-%Y",X:"%T",x:"%D"}},fr_FR:{identifier:"fr-FR",days:["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],shortDays:["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],months:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],shortMonths:["janv.","févr.","mars","avril","mai","juin","juil.","août","sept.","oct.","nov.","déc."],AM:"AM",PM:"PM",am:"am",pm:"pm",formats:{c:"%a %d %b %Y %X %Z",D:"%d/%m/%Y",F:"%Y-%m-%d",R:"%H:%M",r:"%I:%M:%S %p",T:"%H:%M:%S",v:"%e-%b-%Y",X:"%T",x:"%D"}},it_IT:{identifier:"it-IT",days:["domenica","lunedì","martedì","mercoledì","giovedì","venerdì","sabato"],shortDays:["dom","lun","mar","mer","gio","ven","sab"],months:["gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre"],shortMonths:["gen","feb","mar","apr","mag","giu","lug","ago","set","ott","nov","dic"],AM:"AM",PM:"PM",am:"am",pm:"pm",formats:{c:"%a %d %b %Y %X %Z",D:"%d/%m/%Y",F:"%Y-%m-%d",R:"%H:%M",r:"%I:%M:%S %p",T:"%H:%M:%S",v:"%e-%b-%Y",X:"%T",x:"%D"}},nl_NL:{identifier:"nl-NL",days:["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"],shortDays:["zo","ma","di","wo","do","vr","za"],months:["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"],shortMonths:["jan","feb","mrt","apr","mei","jun","jul","aug","sep","okt","nov","dec"],AM:"AM",PM:"PM",am:"am",pm:"pm",formats:{c:"%a %d %b %Y %X %Z",D:"%d-%m-%y",F:"%Y-%m-%d",R:"%H:%M",r:"%I:%M:%S %p",T:"%H:%M:%S",v:"%e-%b-%Y",X:"%T",x:"%D"}},pt_BR:{identifier:"pt-BR",days:["domingo","segunda","terça","quarta","quinta","sexta","sábado"],shortDays:["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"],months:["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"],shortMonths:["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],AM:"AM",PM:"PM",am:"am",pm:"pm",formats:{c:"%a %d %b %Y %X %Z",D:"%d-%m-%Y",F:"%Y-%m-%d",R:"%H:%M",r:"%I:%M:%S %p",T:"%H:%M:%S",v:"%e-%b-%Y",X:"%T",x:"%D"}},ru_RU:{identifier:"ru-RU",days:["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"],shortDays:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],months:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],shortMonths:["янв","фев","мар","апр","май","июн","июл","авг","сен","окт","ноя","дек"],AM:"AM",PM:"PM",am:"am",pm:"pm",formats:{c:"%a %d %b %Y %X",D:"%d.%m.%y",F:"%Y-%m-%d",R:"%H:%M",r:"%I:%M:%S %p",T:"%H:%M:%S",v:"%e-%b-%Y",X:"%T",x:"%D"}},tr_TR:{identifier:"tr-TR",days:["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"],shortDays:["Paz","Pzt","Sal","Çrş","Prş","Cum","Cts"],months:["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"],shortMonths:["Oca","Şub","Mar","Nis","May","Haz","Tem","Ağu","Eyl","Eki","Kas","Ara"],AM:"ÖÖ",PM:"ÖS",am:"ÖÖ",pm:"ÖS",formats:{c:"%a %d %b %Y %X %Z",D:"%d-%m-%Y",F:"%Y-%m-%d",R:"%H:%M",r:"%I:%M:%S %p",T:"%H:%M:%S",v:"%e-%b-%Y",X:"%T",x:"%D"}},zh_CN:{identifier:"zh-CN",days:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],shortDays:["日","一","二","三","四","五","六"],months:["一月份","二月份","三月份","四月份","五月份","六月份","七月份","八月份","九月份","十月份","十一月份","十二月份"],shortMonths:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],AM:"上午",PM:"下午",am:"上午",pm:"下午",formats:{c:"%a %d %b %Y %X %Z",D:"%d/%m/%y",F:"%Y-%m-%d",R:"%H:%M",r:"%I:%M:%S %p",T:"%H:%M:%S",v:"%e-%b-%Y",X:"%r",x:"%D"}}},h=r.en_US,l=new n(h,0,!1);g.exports=l,typeof Date.now!="function"&&(Date.now=function(){return+new Date});function n(a,f,D){var x=a||h,S=f||0,A=D||!1,y=0,p;function _(v,e){var s;if(e){if(s=e.getTime(),A){var t=b(e);if(e=new Date(s+t+S),b(e)!==t){var d=b(e);e=new Date(s+d+S)}}}else{var M=Date.now();M>y?(y=M,p=new Date(y),s=y,A&&(p=new Date(y+b(p)+S))):s=y,e=p}return Y(v,e,x,s)}function Y(v,e,s,M){for(var t="",d=null,R=!1,me=v.length,G=!1,B=0;B<me;B++){var J=v.charCodeAt(B);if(R===!0){if(J===45){d="";continue}else if(J===95){d=" ";continue}else if(J===48){d="0";continue}else if(J===58){G&&P("[WARNING] detected use of unsupported %:: or %::: modifiers to strftime"),G=!0;continue}switch(J){case 37:t+="%";break;case 65:t+=s.days[e.getDay()];break;case 66:t+=s.months[e.getMonth()];break;case 67:t+=c(Math.floor(e.getFullYear()/100),d);break;case 68:t+=Y(s.formats.D,e,s,M);break;case 70:t+=Y(s.formats.F,e,s,M);break;case 72:t+=c(e.getHours(),d);break;case 73:t+=c(m(e.getHours()),d);break;case 76:t+=i(Math.floor(M%1e3));break;case 77:t+=c(e.getMinutes(),d);break;case 80:t+=e.getHours()<12?s.am:s.pm;break;case 82:t+=Y(s.formats.R,e,s,M);break;case 83:t+=c(e.getSeconds(),d);break;case 84:t+=Y(s.formats.T,e,s,M);break;case 85:t+=c(o(e,"sunday"),d);break;case 87:t+=c(o(e,"monday"),d);break;case 88:t+=Y(s.formats.X,e,s,M);break;case 89:t+=e.getFullYear();break;case 90:if(A&&S===0)t+="GMT";else{var le=I(e);t+=le||""}break;case 97:t+=s.shortDays[e.getDay()];break;case 98:t+=s.shortMonths[e.getMonth()];break;case 99:t+=Y(s.formats.c,e,s,M);break;case 100:t+=c(e.getDate(),d);break;case 101:t+=c(e.getDate(),d??" ");break;case 104:t+=s.shortMonths[e.getMonth()];break;case 106:var fe=new Date(e.getFullYear(),0,1),z=Math.ceil((e.getTime()-fe.getTime())/(1e3*60*60*24));t+=i(z);break;case 107:t+=c(e.getHours(),d??" ");break;case 108:t+=c(m(e.getHours()),d??" ");break;case 109:t+=c(e.getMonth()+1,d);break;case 110:t+=`
`;break;case 111:var z=e.getDate();s.ordinalSuffixes?t+=String(z)+(s.ordinalSuffixes[z-1]||u(z)):t+=String(z)+u(z);break;case 112:t+=e.getHours()<12?s.AM:s.PM;break;case 114:t+=Y(s.formats.r,e,s,M);break;case 115:t+=Math.floor(M/1e3);break;case 116:t+="	";break;case 117:var z=e.getDay();t+=z===0?7:z;break;case 118:t+=Y(s.formats.v,e,s,M);break;case 119:t+=e.getDay();break;case 120:t+=Y(s.formats.x,e,s,M);break;case 121:t+=(""+e.getFullYear()).slice(2);break;case 122:if(A&&S===0)t+=G?"+00:00":"+0000";else{var L;S!==0?L=S/(60*1e3):L=-e.getTimezoneOffset();var ce=L<0?"-":"+",he=G?":":"",de=Math.floor(Math.abs(L/60)),Me=Math.abs(L%60);t+=ce+c(de)+he+c(Me)}break;default:R&&(t+="%"),t+=v[B];break}d=null,R=!1;continue}if(J===37){R=!0;continue}t+=v[B]}return t}var w=_;return w.localize=function(v){return new n(v||x,S,A)},w.localizeByIdentifier=function(v){var e=r[v];return e?w.localize(e):(P('[WARNING] No locale found with identifier "'+v+'".'),w)},w.timezone=function(v){var e=S,s=A,M=typeof v;if(M==="number"||M==="string")if(s=!0,M==="string"){var t=v[0]==="-"?-1:1,d=parseInt(v.slice(1,3),10),R=parseInt(v.slice(3,5),10);e=t*(60*d+R)*60*1e3}else M==="number"&&(e=v*60*1e3);return new n(x,e,s)},w.utc=function(){return new n(x,S,!0)},w}function c(a,f){return f===""||a>9?a:(f==null&&(f="0"),f+a)}function i(a){return a>99?a:a>9?"0"+a:"00"+a}function m(a){return a===0?12:a>12?a-12:a}function o(a,f){f=f||"sunday";var D=a.getDay();f==="monday"&&(D===0?D=6:D--);var x=Date.UTC(a.getFullYear(),0,1),S=Date.UTC(a.getFullYear(),a.getMonth(),a.getDate()),A=Math.floor((S-x)/864e5),y=(A+7-D)/7;return Math.floor(y)}function u(a){var f=a%10,D=a%100;if(D>=11&&D<=13||f===0||f>=4)return"th";switch(f){case 1:return"st";case 2:return"nd";case 3:return"rd"}}function b(a){return(a.getTimezoneOffset()||0)*6e4}function I(a,f){return X(a,f)||j(a)}function X(a,f){if(f==null)return null;var D=a.toLocaleString(f,{timeZoneName:"short"}).match(/\s([\w]+)$/);return D&&D[1]}function j(a){var f=a.toString().match(/\(([\w\s]+)\)/);return f&&f[1]}function P(a){typeof console<"u"&&typeof console.warn=="function"&&console.warn(a)}})()})(_e);const ke=re,Te=ke.utc();function ae(g,r){return Te(g,new Date(r))}function se(g,r,h){const l=g.slice();return l[1]=r[h],l}function ne(g){let r,h,l,n=g[1].title+"",c,i,m,o,u,b,I,X=g[1].tags+"",j,P,a,f,D=ae("%B %-d, %Y",g[1].date)+"",x,S,A,y;return m=new ye({props:{size:18,class:"inline text-neutral-400"}}),{c(){r=H("a"),h=H("div"),l=H("div"),c=V(n),i=O(),K(m.$$.fragment),o=O(),u=H("div"),b=H("span"),I=V("tags: "),j=V(X),P=O(),a=H("div"),f=H("div"),x=V(D),S=O(),this.h()},l(p){r=N(p,"A",{href:!0,class:!0,rel:!0});var _=$(r);h=N(_,"DIV",{class:!0});var Y=$(h);l=N(Y,"DIV",{class:!0});var w=$(l);c=W(w,n),i=U(w),Q(m.$$.fragment,w),w.forEach(k),Y.forEach(k),o=U(_),u=N(_,"DIV",{});var v=$(u);b=N(v,"SPAN",{class:!0});var e=$(b);I=W(e,"tags: "),j=W(e,X),e.forEach(k),v.forEach(k),P=U(_),a=N(_,"DIV",{class:!0});var s=$(a);f=N(s,"DIV",{class:!0});var M=$(f);x=W(M,D),M.forEach(k),s.forEach(k),S=U(_),_.forEach(k),this.h()},h(){F(l,"class","text-black"),F(h,"class","flex flex-col sm:flex-row sm:items-end mb-1.5"),F(b,"class","text-neutral-500"),F(f,"class","italic"),F(a,"class","sm:ml-auto mb-0.5 text-neutral-500"),F(r,"href",A="/writing/"+g[1].slug),F(r,"class","block -mx-3 px-3 hover:bg-neutral-100 transition-colors"),F(r,"rel","noreferrer")},m(p,_){E(p,r,_),T(r,h),T(h,l),T(l,c),T(l,i),ee(m,l,null),T(r,o),T(r,u),T(u,b),T(b,I),T(b,j),T(r,P),T(r,a),T(a,f),T(f,x),T(r,S),y=!0},p(p,_){(!y||_&1)&&n!==(n=p[1].title+"")&&C(c,n),(!y||_&1)&&X!==(X=p[1].tags+"")&&C(j,X),(!y||_&1)&&D!==(D=ae("%B %-d, %Y",p[1].date)+"")&&C(x,D),(!y||_&1&&A!==(A="/writing/"+p[1].slug))&&F(r,"href",A)},i(p){y||(Z(m.$$.fragment,p),y=!0)},o(p){q(m.$$.fragment,p),y=!1},d(p){p&&k(r),te(m)}}}function Ae(g){let r,h,l=g[0],n=[];for(let i=0;i<l.length;i+=1)n[i]=ne(se(g,l,i));const c=i=>q(n[i],1,1,()=>{n[i]=null});return{c(){r=H("div");for(let i=0;i<n.length;i+=1)n[i].c();this.h()},l(i){r=N(i,"DIV",{class:!0});var m=$(r);for(let o=0;o<n.length;o+=1)n[o].l(m);m.forEach(k),this.h()},h(){F(r,"class","grid gap-y-4")},m(i,m){E(i,r,m);for(let o=0;o<n.length;o+=1)n[o].m(r,null);h=!0},p(i,[m]){if(m&1){l=i[0];let o;for(o=0;o<l.length;o+=1){const u=se(i,l,o);n[o]?(n[o].p(u,m),Z(n[o],1)):(n[o]=ne(u),n[o].c(),Z(n[o],1),n[o].m(r,null))}for(be(),o=l.length;o<n.length;o+=1)c(o);ge()}},i(i){if(!h){for(let m=0;m<l.length;m+=1)Z(n[m]);h=!0}},o(i){n=n.filter(Boolean);for(let m=0;m<n.length;m+=1)q(n[m]);h=!1},d(i){i&&k(r),ve(n,i)}}}function Ye(g,r,h){let{data:l}=r;return g.$$set=n=>{"data"in n&&h(0,l=n.data)},[l]}class we extends ie{constructor(r){super(),oe(this,r,Ye,Ae,ue,{data:0})}}function Fe(g){let r,h,l,n,c,i,m,o;return r=new De({props:{title:"Owen Oertell – Writings",description:"writings"}}),m=new we({props:{data:Se}}),{c(){K(r.$$.fragment),h=O(),l=H("section"),n=V("Some of my writings about machine learning and research."),c=O(),i=H("section"),K(m.$$.fragment),this.h()},l(u){Q(r.$$.fragment,u),h=U(u),l=N(u,"SECTION",{class:!0});var b=$(l);n=W(b,"Some of my writings about machine learning and research."),b.forEach(k),c=U(u),i=N(u,"SECTION",{class:!0});var I=$(i);Q(m.$$.fragment,I),I.forEach(k),this.h()},h(){F(l,"class","layout-md"),F(i,"class","layout-md py-12")},m(u,b){ee(r,u,b),E(u,h,b),E(u,l,b),T(l,n),E(u,c,b),E(u,i,b),ee(m,i,null),o=!0},p:pe,i(u){o||(Z(r.$$.fragment,u),Z(m.$$.fragment,u),o=!0)},o(u){q(r.$$.fragment,u),q(m.$$.fragment,u),o=!1},d(u){te(r,u),u&&k(h),u&&k(l),u&&k(c),u&&k(i),te(m)}}}class $e extends ie{constructor(r){super(),oe(this,r,null,Fe,ue,{})}}export{$e as default};
