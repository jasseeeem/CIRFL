(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9361:function(e,t){"use strict";t.Z=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},3454:function(e,t,n){"use strict";var i,a;e.exports=(null==(i=n.g.process)?void 0:i.env)&&"object"==typeof(null==(a=n.g.process)?void 0:a.env)?n.g.process:n(7663)},5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(7686)}])},5725:function(e,t,n){"use strict";var i={reactStrictMode:!0,swcMinify:!0,images:{unoptimized:!0,loader:"imgix",path:"/CIRFL"},basePath:"/CIRFL",assetPrefix:"/CIRFL/",publicRuntimeConfig:{basePath:n(3454).env.BASE_PATH||""}};e.exports=i},8045:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(9361).Z,a=n(4941).Z,r=n(3929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,n,l=e.src,s=e.sizes,g=e.unoptimized,p=void 0!==g&&g,x=e.priority,z=void 0!==x&&x,S=e.loading,N=e.lazyRoot,k=e.lazyBoundary,C=e.className,I=e.quality,E=e.width,L=e.height,P=e.style,R=e.objectFit,T=e.objectPosition,q=e.onLoadingComplete,F=e.placeholder,B=void 0===F?"empty":F,O=e.blurDataURL,W=c(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),M=d.useContext(m.ImageConfigContext),Z=d.useMemo(function(){var e=$||M||f.imageConfigDefault,t=r(e.deviceSizes).concat(r(e.imageSizes)).sort(function(e,t){return e-t}),n=e.deviceSizes.sort(function(e,t){return e-t});return o({},e,{allSizes:t,deviceSizes:n})},[M]),H=W,D=s?"responsive":"intrinsic";"layout"in H&&(H.layout&&(D=H.layout),delete H.layout);var V=j;if("loader"in H){if(H.loader){var G=H.loader;V=function(e){e.config;var t=c(e,["config"]);return G(t)}}delete H.loader}var U,Q,X="";if(U=l,"object"==typeof U&&(b(U)||void 0!==(Q=U).src)){var J=b(l)?l.default:l;if(!J.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(J)));if(O=O||J.blurDataURL,X=J.src,(!D||"fill"!==D)&&(L=L||J.height,E=E||J.width,!J.height||!J.width))throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(J)))}l="string"==typeof l?l:X;var K=!z&&("lazy"===S||void 0===S);(l.startsWith("data:")||l.startsWith("blob:"))&&(p=!0,K=!1),v.has(l)&&(K=!1),Z.unoptimized&&(p=!0);var Y=a(d.useState(!1),2),ee=Y[0],et=Y[1],en=a(h.useIntersection({rootRef:void 0===N?null:N,rootMargin:k||"200px",disabled:!K}),3),ei=en[0],ea=en[1],er=en[2],eo=!K||ea,el={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},es={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ec=!1,ed=_(E),eu=_(L),ef=_(I),eh=Object.assign({},P,{position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:R,objectPosition:T}),em="blur"!==B||ee?{}:{backgroundSize:R||"cover",backgroundPosition:T||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(O,'")')};if("fill"===D)el.display="block",el.position="absolute",el.top=0,el.left=0,el.bottom=0,el.right=0;else if(void 0!==ed&&void 0!==eu){var eg=eu/ed,ep=isNaN(eg)?"100%":"".concat(100*eg,"%");"responsive"===D?(el.display="block",el.position="relative",ec=!0,es.paddingTop=ep):"intrinsic"===D?(el.display="inline-block",el.position="relative",el.maxWidth="100%",ec=!0,es.maxWidth="100%",t="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(ed,"%27%20height=%27").concat(eu,"%27/%3e")):"fixed"===D&&(el.display="inline-block",el.position="relative",el.width=ed,el.height=eu)}var e$={src:y,srcSet:void 0,sizes:void 0};eo&&(e$=w({config:Z,src:l,unoptimized:p,layout:D,width:ed,quality:ef,sizes:s,loader:V}));var ev=l,ey="imagesizes";ey="imageSizes";var ex=(i(n={},"imageSrcSet",e$.srcSet),i(n,ey,e$.sizes),n),eb=d.default.useLayoutEffect,ew=d.useRef(q),e_=d.useRef(l);d.useEffect(function(){ew.current=q},[q]),eb(function(){e_.current!==l&&(er(),e_.current=l)},[er,l]);var e0=o({isLazy:K,imgAttributes:e$,heightInt:eu,widthInt:ed,qualityInt:ef,layout:D,className:C,imgStyle:eh,blurStyle:em,loading:S,config:Z,unoptimized:p,placeholder:B,loader:V,srcString:ev,onLoadingCompleteRef:ew,setBlurComplete:et,setIntersection:ei,isVisible:eo,noscriptSizes:s},H);return d.default.createElement(d.default.Fragment,null,d.default.createElement("span",{style:el},ec?d.default.createElement("span",{style:es},t?d.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:t}):null):null,d.default.createElement(A,Object.assign({},e0))),z?d.default.createElement(u.default,null,d.default.createElement("link",Object.assign({key:"__nimg-"+e$.src+e$.srcSet+e$.sizes,rel:"preload",as:"image",href:e$.srcSet?void 0:e$.src},ex))):null)};var o=n(6495).Z,l=n(2648).Z,s=n(1598).Z,c=n(7273).Z,d=s(n(7294)),u=l(n(5443)),f=n(9309),h=n(7190),m=n(9977);n(3794);var g=n(2392);function p(e){return"/"===e[0]?e.slice(1):e}var $={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/CIRFL/",loader:"imgix",dangerouslyAllowSVG:!1,unoptimized:!0},v=new Set,y="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",x=new Map([["default",function(e){var t=e.config,n=e.src,i=e.width,a=e.quality;return n.endsWith(".svg")&&!t.dangerouslyAllowSVG?n:"".concat(g.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(i,"&q=").concat(a||75)}],["imgix",function(e){var t=e.config,n=e.src,i=e.width,a=e.quality,r=new URL("".concat(t.path).concat(p(n))),o=r.searchParams;return o.set("auto",o.getAll("auto").join(",")||"format"),o.set("fit",o.get("fit")||"max"),o.set("w",o.get("w")||i.toString()),a&&o.set("q",a.toString()),r.href}],["cloudinary",function(e){var t,n=e.config,i=e.src,a=e.width,r=["f_auto","c_limit","w_"+a,"q_"+(e.quality||"auto")].join(",")+"/";return"".concat(n.path).concat(r).concat(p(i))}],["akamai",function(e){var t=e.config,n=e.src,i=e.width;return"".concat(t.path).concat(p(n),"?imwidth=").concat(i)}],["custom",function(e){var t=e.src;throw Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}],]);function b(e){return void 0!==e.default}function w(e){var t=e.config,n=e.src,i=e.unoptimized,a=e.layout,o=e.width,l=e.quality,s=e.sizes,c=e.loader;if(i)return{src:n,srcSet:void 0,sizes:void 0};var d=function(e,t,n,i){var a=e.deviceSizes,o=e.allSizes;if(i&&("fill"===n||"responsive"===n)){for(var l=/(^|\s)(1?\d?\d)vw/g,s=[];c=l.exec(i);c)s.push(parseInt(c[2]));if(s.length){var c,d,u=.01*(d=Math).min.apply(d,r(s));return{widths:o.filter(function(e){return e>=a[0]*u}),kind:"w"}}return{widths:o,kind:"w"}}return"number"!=typeof t||"fill"===n||"responsive"===n?{widths:a,kind:"w"}:{widths:r(new Set([t,2*t].map(function(e){return o.find(function(t){return t>=e})||o[o.length-1]}))),kind:"x"}}(t,o,a,s),u=d.widths,f=d.kind,h=u.length-1;return{sizes:s||"w"!==f?s:"100vw",srcSet:u.map(function(e,i){return"".concat(c({config:t,src:n,quality:l,width:e})," ").concat("w"===f?e:i+1).concat(f)}).join(", "),src:c({config:t,src:n,quality:l,width:u[h]})}}function _(e){return"number"==typeof e?e:"string"==typeof e?parseInt(e,10):void 0}function j(e){var t,n=(null==(t=e.config)?void 0:t.loader)||"default",i=x.get(n);if(i)return i(e);throw Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(n))}function z(e,t,n,i,a,r){e&&e.src!==y&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch(function(){}).then(function(){if(e.parentNode&&(v.add(t),"blur"===i&&r(!0),null==a?void 0:a.current)){var n=e.naturalWidth,o=e.naturalHeight;a.current({naturalWidth:n,naturalHeight:o})}}))}var A=function(e){var t=e.imgAttributes,n=(e.heightInt,e.widthInt),i=e.qualityInt,a=e.layout,r=e.className,l=e.imgStyle,s=e.blurStyle,u=e.isLazy,f=e.placeholder,h=e.loading,m=e.srcString,g=e.config,p=e.unoptimized,$=e.loader,v=e.onLoadingCompleteRef,y=e.setBlurComplete,x=e.setIntersection,b=e.onLoad,_=e.onError,j=(e.isVisible,e.noscriptSizes),A=c(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return h=u?"lazy":h,d.default.createElement(d.default.Fragment,null,d.default.createElement("img",Object.assign({},A,t,{decoding:"async","data-nimg":a,className:r,style:o({},l,s),ref:d.useCallback(function(e){x(e),(null==e?void 0:e.complete)&&z(e,m,a,f,v,y)},[x,m,a,f,v,y,]),onLoad:function(e){z(e.currentTarget,m,a,f,v,y),b&&b(e)},onError:function(e){"blur"===f&&y(!0),_&&_(e)}})),(u||"blur"===f)&&d.default.createElement("noscript",null,d.default.createElement("img",Object.assign({},A,w({config:g,src:m,unoptimized:p,layout:a,width:n,quality:i,sizes:j,loader:$}),{decoding:"async","data-nimg":a,style:l,className:r,loading:h}))))};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7686:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return $}});var i=n(5893),a=n(1351),r=n(1664),o=n.n(r);function l(e){var t=e.text,n=e.toLink,a=e.onClickFunction;return(0,i.jsx)(o(),{href:n&&"/".concat(n),children:(0,i.jsx)("button",{className:"py-3 px-7 text-white font-medium leading-5 bg-sky-700 rounded-full shadow-sm hover:bg-sky-800 transition",role:"button",onClick:function(){a&&a(),console.log(a)},children:t})})}l.defaultProps={text:"Button",toLink:"",onClickFunction:!1};var s=n(5675),c=n.n(s),d=n(5725);function u(e){var e=null!==e?e:(0,a.Z)(TypeError("Cannot destructure undefined")),t=d.publicRuntimeConfig.BASE_PATH;return(0,i.jsxs)("div",{className:"flex flex-row",children:[(0,i.jsxs)("div",{className:"md:w-1/2",children:[(0,i.jsx)("h6",{className:"md:pt-10 text-xl font-semibold leading-tight text-sky-700",children:"NIT Calicut"}),(0,i.jsx)("h4",{className:"pt-5 text-4xl font-bold",children:"Centre for International Relations and Foreign Languages"}),(0,i.jsxs)("p",{className:"py-7 font-light",children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt ornare magna ullamcorper sodales."," "]}),(0,i.jsx)(l,{toLink:"/learn-more",text:"Learn More"})]}),(0,i.jsx)("div",{className:"hidden md:block md:w-1/2 absolute -right-52 scale-150",children:(0,i.jsx)(c(),{src:"".concat(t,"/nitc.png"),alt:"A faded image of NITC",width:"100%",height:"40%",layout:"responsive",objectFit:"cover",className:"w-1/2 h-auto opacity-20 "})})]})}var f=n(471),h=n(9583),m=n(5434);function g(e){var e=null!==e?e:(0,a.Z)(TypeError("Cannot destructure undefined")),t=[{icon:f.qGB,boldText:"Strengthen",normalText:"international collaboration in the Academic and Research domain"},{icon:h.wQ2,boldText:"Establish",normalText:"a mechanism for the attainment of global standards among the NITC fraternity"},{icon:h.I$,boldText:"Mobilise",normalText:"International Academic Collaboration"},{icon:m.XIv,boldText:"Focus",normalText:"on creating world-class teaching practices and curriculum"},];return(0,i.jsx)("div",{className:"rounded-xl shadow-xl grid grid-cols-1 md:grid-cols-4 divide-y-2 md:divide-y-0 md:divide-x-2 items-start justify-between z-10",children:t.map(function(e){return(0,i.jsxs)("div",{className:"p-5 md:p-7 flex flex-col space-y-5 justify-center w-full h-full",children:[(0,i.jsx)("div",{className:"text-sky-700 flex justify-center",children:(0,i.jsx)(e.icon,{size:"35"})}),(0,i.jsxs)("p",{className:"text-sm text-center",children:[(0,i.jsx)("b",{children:e.boldText})," ",e.normalText]})]},e.icon)})})}function p(e){var t=e.heading1,n=e.paragraph1,a=e.heading2,r=e.paragraph2,o=e.imgSrc,l=e.imgAlt,s=d.publicRuntimeConfig.BASE_PATH;return(0,i.jsxs)("div",{className:"flex flex-col md:flex-row space-y-10 space-x-0 md:space-x-10 md:space-y-0 items-center",children:[(0,i.jsx)("div",{className:"md:w-1/2",children:(0,i.jsx)(c(),{src:"".concat(s,"/").concat(o),alt:l,width:"100%",height:"60%",layout:"responsive",objectFit:"cover",className:"w-full h-auto rounded-xl shadow-xl"})}),(0,i.jsxs)("div",{className:"flex flex-col space-y-7 md:w-1/2",children:[(0,i.jsxs)("div",{className:"flex flex-col space-y-2",children:[(0,i.jsx)("h2",{className:"text-sky-700 text-3xl font-semibold",children:t}),(0,i.jsx)("p",{className:"text-lg",children:n})]}),(0,i.jsxs)("div",{className:"flex flex-col space-y-2",children:[(0,i.jsx)("h2",{className:"text-sky-700 text-3xl font-semibold",children:a}),(0,i.jsx)("p",{className:"text-lg",children:r})]})]})]})}function $(){return(0,i.jsx)("div",{className:"py-7 px-1 mx-auto max-w-7xl",children:(0,i.jsxs)("div",{className:"flex flex-col",children:[(0,i.jsx)("div",{className:"mb-10 static -z-10",children:(0,i.jsx)(u,{})}),(0,i.jsx)(g,{}),(0,i.jsx)("div",{className:"mt-16",children:(0,i.jsx)(p,{heading1:"Our Mission",paragraph1:"Secure a niche for NITC in the global educational paradigm, foster healthy international collaboration to facilitate research and learning of global standards and support a vigorous international exchange of academia and scholastic talent",imgSrc:"nitc-board.jpg",heading2:"Our Vision",paragraph2:"To nourish people and the planet. We're a purpose-driven company that aims to set the standards of excellence for food retailers. Quality is a state of mind at Whole Foods Market.",alt:"An image of the board in front of NITC"})})]})})}p.defaultProps={heading:"Heading",paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt ornare magna ullamcorper sodales. ",imgSrc:"nitc.jpg",imgAlt:"Image Alternative"}},7663:function(e){!function(){var t={229:function(e){var t,n,i,a=e.exports={};function r(){throw Error("setTimeout has not been defined")}function o(){throw Error("clearTimeout has not been defined")}function l(e){if(t===setTimeout)return setTimeout(e,0);if((t===r||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(i){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:r}catch(e){t=r}try{n="function"==typeof clearTimeout?clearTimeout:o}catch(i){n=o}}();var s=[],c=!1,d=-1;function u(){c&&i&&(c=!1,i.length?s=i.concat(s):d=-1,s.length&&f())}function f(){if(!c){var e=l(u);c=!0;for(var t=s.length;t;){for(i=s,s=[];++d<t;)i&&i[d].run();d=-1,t=s.length}i=null,c=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(i){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}a.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new h(e,t)),1!==s.length||c||l(f)},h.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=m,a.addListener=m,a.once=m,a.off=m,a.removeListener=m,a.removeAllListeners=m,a.emit=m,a.prependListener=m,a.prependOnceListener=m,a.listeners=function(e){return[]},a.binding=function(e){throw Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw Error("process.chdir is not supported")},a.umask=function(){return 0}}},n={};function i(e){var a=n[e];if(void 0!==a)return a.exports;var r=n[e]={exports:{}},o=!0;try{t[e](r,r.exports,i),o=!1}finally{o&&delete n[e]}return r.exports}i.ab="//";var a=i(229);e.exports=a}()},5675:function(e,t,n){e.exports=n(8045)},8357:function(e,t,n){"use strict";n.d(t,{w_:function(){return s}});var i=n(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},r=i.createContext&&i.createContext(a),o=function(){return(o=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},l=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,i=Object.getOwnPropertySymbols(e);a<i.length;a++)0>t.indexOf(i[a])&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(n[i[a]]=e[i[a]]);return n};function s(e){return function(t){return i.createElement(c,o({attr:o({},e.attr)},t),function e(t){return t&&t.map(function(t,n){return i.createElement(t.tag,o({key:n},t.attr),e(t.child))})}(e.child))}}function c(e){var t=function(t){var n,a=e.attr,r=e.size,s=e.title,c=l(e,["attr","size","title"]),d=r||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),i.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,c,{className:n,style:o(o({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),s&&i.createElement("title",null,s),e.children)};return void 0!==r?i.createElement(r.Consumer,null,function(e){return t(e)}):t(a)}}},function(e){e.O(0,[228,445,955,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);