function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},s=n.parcelRequired7c6;null==s&&((s=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){i[e]=t},n.parcelRequired7c6=s),s.register("kyEFX",(function(t,n){var r,i;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return i}),(function(e){return i=e}));var s={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)s[t[n]]=e[t[n]]},i=function(e){var t=s[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),s("kyEFX").register(JSON.parse('{"5ZPII":"index.4f3371cf.js","k1O6U":"1@1x.db00108e.png","8ACfz":"1@2x.99bbcdd8.png","jnajA":"2@1x.06dcab52.png","dBCq2":"2@2x.4efcf615.png","jvO63":"3@1x.df4edb6e.png","hCLHb":"3@2x.4aed65b2.png","gymDr":"4@1x.ab16caaf.png","3ORAA":"4@2x.9e0c9cc8.png","jjhrJ":"5@1x.bf18ef5b.png","5hyp3":"5@2x.c32470cb.png","eT8AL":"6@1x.ef355718.png","ds41W":"6@2x.6da904ac.png","b3knl":"7@1x.b7dc4fbb.png","edWVY":"7@2x.0afb838d.png","gh96v":"8@1x.b2a797b7.png","2TCLA":"8@2x.fb8129e4.png","9dBAt":"9@1x.350a388c.png","9e8l3":"9@2x.243934d9.png"}'));const o=document.querySelector("button[data-menu-open]"),a=document.querySelector("button[data-menu-close]"),l=document.querySelector(".mob-menu");o.addEventListener("click",(()=>{l.classList.toggle("visually-hidden"),a.classList.toggle("visually-hidden"),o.classList.toggle("visually-hidden")})),a.addEventListener("click",(()=>{l.classList.toggle("visually-hidden"),a.classList.toggle("visually-hidden"),o.classList.toggle("visually-hidden")})),window.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector(".categories-list");fetch("https://books-backend.p.goit.global/books/category-list").then((e=>{if(e.ok)return e.json();throw new Error("Ошибка при выполнении запроса: "+e.status)})).then((t=>{if(Array.isArray(t)){t.map((e=>e.list_name)).forEach(((t,n)=>{const r=document.createElement("li");r.textContent=t,r.classList.add("categories-el"),e.appendChild(r),r.addEventListener("click",(e=>{e.stopPropagation()}))}))}else console.log("Данные не содержат список категорий.")})).catch((e=>{console.log("Произошла ошибка:",e.message)}))}));var c;c=new URL(s("kyEFX").resolve("k1O6U"),import.meta.url).toString();var u;u=new URL(s("kyEFX").resolve("8ACfz"),import.meta.url).toString();var d;d=new URL(s("kyEFX").resolve("jnajA"),import.meta.url).toString();var h;h=new URL(s("kyEFX").resolve("dBCq2"),import.meta.url).toString();var p;p=new URL(s("kyEFX").resolve("jvO63"),import.meta.url).toString();var f;f=new URL(s("kyEFX").resolve("hCLHb"),import.meta.url).toString();var m;m=new URL(s("kyEFX").resolve("gymDr"),import.meta.url).toString();var g;g=new URL(s("kyEFX").resolve("3ORAA"),import.meta.url).toString();var v;v=new URL(s("kyEFX").resolve("jjhrJ"),import.meta.url).toString();var y;y=new URL(s("kyEFX").resolve("5hyp3"),import.meta.url).toString();var w;w=new URL(s("kyEFX").resolve("eT8AL"),import.meta.url).toString();var b;b=new URL(s("kyEFX").resolve("ds41W"),import.meta.url).toString();var E;E=new URL(s("kyEFX").resolve("b3knl"),import.meta.url).toString();var T;T=new URL(s("kyEFX").resolve("edWVY"),import.meta.url).toString();var S;S=new URL(s("kyEFX").resolve("gh96v"),import.meta.url).toString();var _;_=new URL(s("kyEFX").resolve("2TCLA"),import.meta.url).toString();var I;I=new URL(s("kyEFX").resolve("9dBAt"),import.meta.url).toString();var C;function k(e){return null!==e&&"object"==typeof e&&"constructor"in e&&e.constructor===Object}function A(e={},t={}){Object.keys(t).forEach((n=>{void 0===e[n]?e[n]=t[n]:k(t[n])&&k(e[n])&&Object.keys(t[n]).length>0&&A(e[n],t[n])}))}C=new URL(s("kyEFX").resolve("9e8l3"),import.meta.url).toString();const O={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector:()=>null,querySelectorAll:()=>[],getElementById:()=>null,createEvent:()=>({initEvent(){}}),createElement:()=>({children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName:()=>[]}),createElementNS:()=>({}),importNode:()=>null,location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function R(){const e="undefined"!=typeof document?document:{};return A(e,O),e}const P={document:O,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle:()=>({getPropertyValue:()=>""}),Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia:()=>({}),requestAnimationFrame:e=>"undefined"==typeof setTimeout?(e(),null):setTimeout(e,0),cancelAnimationFrame(e){"undefined"!=typeof setTimeout&&clearTimeout(e)}};function x(){const e="undefined"!=typeof window?window:{};return A(e,P),e}function L(e){const t=e;Object.keys(t).forEach((e=>{try{t[e]=null}catch(e){}try{delete t[e]}catch(e){}}))}function M(e,t=0){return setTimeout(e,t)}function N(){return Date.now()}function D(e,t="x"){const n=x();let r,i,s;const o=function(e){const t=x();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}(e);return n.WebKitCSSMatrix?(i=o.transform||o.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map((e=>e.replace(",","."))).join(", ")),s=new n.WebKitCSSMatrix("none"===i?"":i)):(s=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=s.toString().split(",")),"x"===t&&(i=n.WebKitCSSMatrix?s.m41:16===r.length?parseFloat(r[12]):parseFloat(r[4])),"y"===t&&(i=n.WebKitCSSMatrix?s.m42:16===r.length?parseFloat(r[13]):parseFloat(r[5])),i||0}function U(e){return"object"==typeof e&&null!==e&&e.constructor&&"Object"===Object.prototype.toString.call(e).slice(8,-1)}function B(...e){const t=Object(e[0]),n=["__proto__","constructor","prototype"];for(let i=1;i<e.length;i+=1){const s=e[i];if(null!=s&&(r=s,!("undefined"!=typeof window&&void 0!==window.HTMLElement?r instanceof HTMLElement:r&&(1===r.nodeType||11===r.nodeType)))){const e=Object.keys(Object(s)).filter((e=>n.indexOf(e)<0));for(let n=0,r=e.length;n<r;n+=1){const r=e[n],i=Object.getOwnPropertyDescriptor(s,r);void 0!==i&&i.enumerable&&(U(t[r])&&U(s[r])?s[r].__swiper__?t[r]=s[r]:B(t[r],s[r]):!U(t[r])&&U(s[r])?(t[r]={},s[r].__swiper__?t[r]=s[r]:B(t[r],s[r])):t[r]=s[r])}}}var r;return t}function F(e,t,n){e.style.setProperty(t,n)}function j({swiper:e,targetPosition:t,side:n}){const r=x(),i=-e.translate;let s,o=null;const a=e.params.speed;e.wrapperEl.style.scrollSnapType="none",r.cancelAnimationFrame(e.cssModeFrameID);const l=t>i?"next":"prev",c=(e,t)=>"next"===l&&e>=t||"prev"===l&&e<=t,u=()=>{s=(new Date).getTime(),null===o&&(o=s);const l=Math.max(Math.min((s-o)/a,1),0),d=.5-Math.cos(l*Math.PI)/2;let h=i+d*(t-i);if(c(h,t)&&(h=t),e.wrapperEl.scrollTo({[n]:h}),c(h,t))return e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout((()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[n]:h})})),void r.cancelAnimationFrame(e.cssModeFrameID);e.cssModeFrameID=r.requestAnimationFrame(u)};u()}function z(e,t=""){return[...e.children].filter((e=>e.matches(t)))}function H(e,t=[]){const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:[t]),n}function $(e,t){const n=[];for(;e.previousElementSibling;){const r=e.previousElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function V(e,t){const n=[];for(;e.nextElementSibling;){const r=e.nextElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function G(e,t){return x().getComputedStyle(e,null).getPropertyValue(t)}function W(e){let t,n=e;if(n){for(t=0;null!==(n=n.previousSibling);)1===n.nodeType&&(t+=1);return t}}function q(e,t){const n=[];let r=e.parentElement;for(;r;)t?r.matches(t)&&n.push(r):n.push(r),r=r.parentElement;return n}function K(e,t,n){const r=x();return n?e["width"===t?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(e,null).getPropertyValue("width"===t?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(e,null).getPropertyValue("width"===t?"margin-left":"margin-bottom")):e.offsetWidth}let X,J,Y;function Q(){return X||(X=function(){const e=x(),t=R();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}()),X}function Z(e={}){return J||(J=function({userAgent:e}={}){const t=Q(),n=x(),r=n.navigator.platform,i=e||n.navigator.userAgent,s={ios:!1,android:!1},o=n.screen.width,a=n.screen.height,l=i.match(/(Android);?[\s\/]+([\d.]+)?/);let c=i.match(/(iPad).*OS\s([\d_]+)/);const u=i.match(/(iPod)(.*OS\s([\d_]+))?/),d=!c&&i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),h="Win32"===r;let p="MacIntel"===r;return!c&&p&&t.touch&&["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"].indexOf(`${o}x${a}`)>=0&&(c=i.match(/(Version)\/([\d.]+)/),c||(c=[0,1,"13_0_0"]),p=!1),l&&!h&&(s.os="android",s.android=!0),(c||d||u)&&(s.os="ios",s.ios=!0),s}(e)),J}function ee(){return Y||(Y=function(){const e=x();let t=!1;function n(){const t=e.navigator.userAgent.toLowerCase();return t.indexOf("safari")>=0&&t.indexOf("chrome")<0&&t.indexOf("android")<0}if(n()){const n=String(e.navigator.userAgent);if(n.includes("Version/")){const[e,r]=n.split("Version/")[1].split(" ")[0].split(".").map((e=>Number(e)));t=e<16||16===e&&r<2}}return{isSafari:t||n(),needPerspectiveFix:t,isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)}}()),Y}const te=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=t.closest(e.isElement?"swiper-slide":`.${e.params.slideClass}`);if(n){const t=n.querySelector(`.${e.params.lazyPreloaderClass}`);t&&t.remove()}},ne=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},re=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const r="auto"===e.params.slidesPerView?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),i=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const n=i,s=[n-t];return s.push(...Array.from({length:t}).map(((e,t)=>n+r+t))),void e.slides.forEach(((t,n)=>{s.includes(t.column)&&ne(e,n)}))}const s=i+r-1;if(e.params.rewind||e.params.loop)for(let r=i-t;r<=s+t;r+=1){const t=(r%n+n)%n;(t<i||t>s)&&ne(e,t)}else for(let r=Math.max(i-t,0);r<=Math.min(s+t,n-1);r+=1)r!==i&&(r>s||r<i)&&ne(e,r)};function ie({swiper:e,runCallbacks:t,direction:n,step:r}){const{activeIndex:i,previousIndex:s}=e;let o=n;if(o||(o=i>s?"next":i<s?"prev":"reset"),e.emit(`transition${r}`),t&&i!==s){if("reset"===o)return void e.emit(`slideResetTransition${r}`);e.emit(`slideChangeTransition${r}`),"next"===o?e.emit(`slideNextTransition${r}`):e.emit(`slidePrevTransition${r}`)}}function se(e){const t=this,n=R(),r=x(),i=t.touchEventsData;i.evCache.push(e);const{params:s,touches:o,enabled:a}=t;if(!a)return;if(!s.simulateTouch&&"mouse"===e.pointerType)return;if(t.animating&&s.preventInteractionOnTransition)return;!t.animating&&s.cssMode&&s.loop&&t.loopFix();let l=e;l.originalEvent&&(l=l.originalEvent);let c=l.target;if("wrapper"===s.touchEventsTarget&&!t.wrapperEl.contains(c))return;if("which"in l&&3===l.which)return;if("button"in l&&l.button>0)return;if(i.isTouched&&i.isMoved)return;const u=!!s.noSwipingClass&&""!==s.noSwipingClass,d=e.composedPath?e.composedPath():e.path;u&&l.target&&l.target.shadowRoot&&d&&(c=d[0]);const h=s.noSwipingSelector?s.noSwipingSelector:`.${s.noSwipingClass}`,p=!(!l.target||!l.target.shadowRoot);if(s.noSwiping&&(p?function(e,t=this){return function t(n){if(!n||n===R()||n===x())return null;n.assignedSlot&&(n=n.assignedSlot);const r=n.closest(e);return r||n.getRootNode?r||t(n.getRootNode().host):null}(t)}(h,c):c.closest(h)))return void(t.allowClick=!0);if(s.swipeHandler&&!c.closest(s.swipeHandler))return;o.currentX=l.pageX,o.currentY=l.pageY;const f=o.currentX,m=o.currentY,g=s.edgeSwipeDetection||s.iOSEdgeSwipeDetection,v=s.edgeSwipeThreshold||s.iOSEdgeSwipeThreshold;if(g&&(f<=v||f>=r.innerWidth-v)){if("prevent"!==g)return;e.preventDefault()}Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=f,o.startY=m,i.touchStartTime=N(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,s.threshold>0&&(i.allowThresholdMove=!1);let y=!0;c.matches(i.focusableElements)&&(y=!1,"SELECT"===c.nodeName&&(i.isTouched=!1)),n.activeElement&&n.activeElement.matches(i.focusableElements)&&n.activeElement!==c&&n.activeElement.blur();const w=y&&t.allowTouchMove&&s.touchStartPreventDefault;!s.touchStartForcePreventDefault&&!w||c.isContentEditable||l.preventDefault(),s.freeMode&&s.freeMode.enabled&&t.freeMode&&t.animating&&!s.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",l)}function oe(e){const t=R(),n=this,r=n.touchEventsData,{params:i,touches:s,rtlTranslate:o,enabled:a}=n;if(!a)return;if(!i.simulateTouch&&"mouse"===e.pointerType)return;let l=e;if(l.originalEvent&&(l=l.originalEvent),!r.isTouched)return void(r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",l));const c=r.evCache.findIndex((e=>e.pointerId===l.pointerId));c>=0&&(r.evCache[c]=l);const u=r.evCache.length>1?r.evCache[0]:l,d=u.pageX,h=u.pageY;if(l.preventedByNestedSwiper)return s.startX=d,void(s.startY=h);if(!n.allowTouchMove)return l.target.matches(r.focusableElements)||(n.allowClick=!1),void(r.isTouched&&(Object.assign(s,{startX:d,startY:h,prevX:n.touches.currentX,prevY:n.touches.currentY,currentX:d,currentY:h}),r.touchStartTime=N()));if(i.touchReleaseOnEdges&&!i.loop)if(n.isVertical()){if(h<s.startY&&n.translate<=n.maxTranslate()||h>s.startY&&n.translate>=n.minTranslate())return r.isTouched=!1,void(r.isMoved=!1)}else if(d<s.startX&&n.translate<=n.maxTranslate()||d>s.startX&&n.translate>=n.minTranslate())return;if(t.activeElement&&l.target===t.activeElement&&l.target.matches(r.focusableElements))return r.isMoved=!0,void(n.allowClick=!1);if(r.allowTouchCallbacks&&n.emit("touchMove",l),l.targetTouches&&l.targetTouches.length>1)return;s.currentX=d,s.currentY=h;const p=s.currentX-s.startX,f=s.currentY-s.startY;if(n.params.threshold&&Math.sqrt(p**2+f**2)<n.params.threshold)return;if(void 0===r.isScrolling){let e;n.isHorizontal()&&s.currentY===s.startY||n.isVertical()&&s.currentX===s.startX?r.isScrolling=!1:p*p+f*f>=25&&(e=180*Math.atan2(Math.abs(f),Math.abs(p))/Math.PI,r.isScrolling=n.isHorizontal()?e>i.touchAngle:90-e>i.touchAngle)}if(r.isScrolling&&n.emit("touchMoveOpposite",l),void 0===r.startMoving&&(s.currentX===s.startX&&s.currentY===s.startY||(r.startMoving=!0)),r.isScrolling||n.zoom&&n.params.zoom&&n.params.zoom.enabled&&r.evCache.length>1)return void(r.isTouched=!1);if(!r.startMoving)return;n.allowClick=!1,!i.cssMode&&l.cancelable&&l.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&l.stopPropagation();let m=n.isHorizontal()?p:f,g=n.isHorizontal()?s.currentX-s.previousX:s.currentY-s.previousY;i.oneWayMovement&&(m=Math.abs(m)*(o?1:-1),g=Math.abs(g)*(o?1:-1)),s.diff=m,m*=i.touchRatio,o&&(m=-m,g=-g);const v=n.touchesDirection;n.swipeDirection=m>0?"prev":"next",n.touchesDirection=g>0?"prev":"next";const y=n.params.loop&&!i.cssMode;if(!r.isMoved){if(y&&n.loopFix({direction:n.swipeDirection}),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const e=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});n.wrapperEl.dispatchEvent(e)}r.allowMomentumBounce=!1,!i.grabCursor||!0!==n.allowSlideNext&&!0!==n.allowSlidePrev||n.setGrabCursor(!0),n.emit("sliderFirstMove",l)}let w;r.isMoved&&v!==n.touchesDirection&&y&&Math.abs(m)>=1&&(n.loopFix({direction:n.swipeDirection,setTranslate:!0}),w=!0),n.emit("sliderMove",l),r.isMoved=!0,r.currentTranslate=m+r.startTranslate;let b=!0,E=i.resistanceRatio;if(i.touchReleaseOnEdges&&(E=0),m>0?(y&&!w&&r.currentTranslate>(i.centeredSlides?n.minTranslate()-n.size/2:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>n.minTranslate()&&(b=!1,i.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+m)**E))):m<0&&(y&&!w&&r.currentTranslate<(i.centeredSlides?n.maxTranslate()+n.size/2:n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-("auto"===i.slidesPerView?n.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),r.currentTranslate<n.maxTranslate()&&(b=!1,i.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-m)**E))),b&&(l.preventedByNestedSwiper=!0),!n.allowSlideNext&&"next"===n.swipeDirection&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&"prev"===n.swipeDirection&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),n.allowSlidePrev||n.allowSlideNext||(r.currentTranslate=r.startTranslate),i.threshold>0){if(!(Math.abs(m)>i.threshold||r.allowThresholdMove))return void(r.currentTranslate=r.startTranslate);if(!r.allowThresholdMove)return r.allowThresholdMove=!0,s.startX=s.currentX,s.startY=s.currentY,r.currentTranslate=r.startTranslate,void(s.diff=n.isHorizontal()?s.currentX-s.startX:s.currentY-s.startY)}i.followFinger&&!i.cssMode&&((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function ae(e){const t=this,n=t.touchEventsData,r=n.evCache.findIndex((t=>t.pointerId===e.pointerId));if(r>=0&&n.evCache.splice(r,1),["pointercancel","pointerout","pointerleave"].includes(e.type)){if(!("pointercancel"===e.type&&(t.browser.isSafari||t.browser.isWebView)))return}const{params:i,touches:s,rtlTranslate:o,slidesGrid:a,enabled:l}=t;if(!l)return;if(!i.simulateTouch&&"mouse"===e.pointerType)return;let c=e;if(c.originalEvent&&(c=c.originalEvent),n.allowTouchCallbacks&&t.emit("touchEnd",c),n.allowTouchCallbacks=!1,!n.isTouched)return n.isMoved&&i.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,void(n.startMoving=!1);i.grabCursor&&n.isMoved&&n.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);const u=N(),d=u-n.touchStartTime;if(t.allowClick){const e=c.path||c.composedPath&&c.composedPath();t.updateClickedSlide(e&&e[0]||c.target),t.emit("tap click",c),d<300&&u-n.lastClickTime<300&&t.emit("doubleTap doubleClick",c)}if(n.lastClickTime=N(),M((()=>{t.destroyed||(t.allowClick=!0)})),!n.isTouched||!n.isMoved||!t.swipeDirection||0===s.diff||n.currentTranslate===n.startTranslate)return n.isTouched=!1,n.isMoved=!1,void(n.startMoving=!1);let h;if(n.isTouched=!1,n.isMoved=!1,n.startMoving=!1,h=i.followFinger?o?t.translate:-t.translate:-n.currentTranslate,i.cssMode)return;if(i.freeMode&&i.freeMode.enabled)return void t.freeMode.onTouchEnd({currentPos:h});let p=0,f=t.slidesSizesGrid[0];for(let e=0;e<a.length;e+=e<i.slidesPerGroupSkip?1:i.slidesPerGroup){const t=e<i.slidesPerGroupSkip-1?1:i.slidesPerGroup;void 0!==a[e+t]?h>=a[e]&&h<a[e+t]&&(p=e,f=a[e+t]-a[e]):h>=a[e]&&(p=e,f=a[a.length-1]-a[a.length-2])}let m=null,g=null;i.rewind&&(t.isBeginning?g=i.virtual&&i.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(m=0));const v=(h-a[p])/f,y=p<i.slidesPerGroupSkip-1?1:i.slidesPerGroup;if(d>i.longSwipesMs){if(!i.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&(v>=i.longSwipesRatio?t.slideTo(i.rewind&&t.isEnd?m:p+y):t.slideTo(p)),"prev"===t.swipeDirection&&(v>1-i.longSwipesRatio?t.slideTo(p+y):null!==g&&v<0&&Math.abs(v)>i.longSwipesRatio?t.slideTo(g):t.slideTo(p))}else{if(!i.shortSwipes)return void t.slideTo(t.activeIndex);t.navigation&&(c.target===t.navigation.nextEl||c.target===t.navigation.prevEl)?c.target===t.navigation.nextEl?t.slideTo(p+y):t.slideTo(p):("next"===t.swipeDirection&&t.slideTo(null!==m?m:p+y),"prev"===t.swipeDirection&&t.slideTo(null!==g?g:p))}}function le(){const e=this,{params:t,el:n}=e;if(n&&0===n.offsetWidth)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:i,snapGrid:s}=e,o=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const a=o&&t.loop;!("auto"===t.slidesPerView||t.slidesPerView>1)||!e.isEnd||e.isBeginning||e.params.centeredSlides||a?e.params.loop&&!o?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0):e.slideTo(e.slides.length-1,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout((()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()}),500)),e.allowSlidePrev=i,e.allowSlideNext=r,e.params.watchOverflow&&s!==e.snapGrid&&e.checkOverflow()}function ce(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function ue(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;let i;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,0===e.translate&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();const s=e.maxTranslate()-e.minTranslate();i=0===s?0:(e.translate-e.minTranslate())/s,i!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function de(e){const t=this;te(t,e.target),t.params.cssMode||"auto"!==t.params.slidesPerView&&!t.params.autoHeight||t.update()}let he=!1;function pe(){}const fe=(e,t)=>{const n=R(),{params:r,el:i,wrapperEl:s,device:o}=e,a=!!r.nested,l="on"===t?"addEventListener":"removeEventListener",c=t;i[l]("pointerdown",e.onTouchStart,{passive:!1}),n[l]("pointermove",e.onTouchMove,{passive:!1,capture:a}),n[l]("pointerup",e.onTouchEnd,{passive:!0}),n[l]("pointercancel",e.onTouchEnd,{passive:!0}),n[l]("pointerout",e.onTouchEnd,{passive:!0}),n[l]("pointerleave",e.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&i[l]("click",e.onClick,!0),r.cssMode&&s[l]("scroll",e.onScroll),r.updateOnWindowResize?e[c](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",le,!0):e[c]("observerUpdate",le,!0),i[l]("load",e.onLoad,{capture:!0})};const me=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;var ge={init:!0,direction:"horizontal",oneWayMovement:!1,touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopedSlides:null,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function ve(e,t){return function(n={}){const r=Object.keys(n)[0],i=n[r];"object"==typeof i&&null!==i?(["navigation","pagination","scrollbar"].indexOf(r)>=0&&!0===e[r]&&(e[r]={auto:!0}),r in e&&"enabled"in i?(!0===e[r]&&(e[r]={enabled:!0}),"object"!=typeof e[r]||"enabled"in e[r]||(e[r].enabled=!0),e[r]||(e[r]={enabled:!1}),B(t,n)):B(t,n)):B(t,n)}}const ye={eventsEmitter:{on(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed)return r;if("function"!=typeof t)return r;const i=n?"unshift":"push";return e.split(" ").forEach((e=>{r.eventsListeners[e]||(r.eventsListeners[e]=[]),r.eventsListeners[e][i](t)})),r},once(e,t,n){const r=this;if(!r.eventsListeners||r.destroyed)return r;if("function"!=typeof t)return r;function i(...n){r.off(e,i),i.__emitterProxy&&delete i.__emitterProxy,t.apply(r,n)}return i.__emitterProxy=t,r.on(e,i,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed)return n;if("function"!=typeof e)return n;const r=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed)return t;if(!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed?n:n.eventsListeners?(e.split(" ").forEach((e=>{void 0===t?n.eventsListeners[e]=[]:n.eventsListeners[e]&&n.eventsListeners[e].forEach(((r,i)=>{(r===t||r.__emitterProxy&&r.__emitterProxy===t)&&n.eventsListeners[e].splice(i,1)}))})),n):n},emit(...e){const t=this;if(!t.eventsListeners||t.destroyed)return t;if(!t.eventsListeners)return t;let n,r,i;"string"==typeof e[0]||Array.isArray(e[0])?(n=e[0],r=e.slice(1,e.length),i=t):(n=e[0].events,r=e[0].data,i=e[0].context||t),r.unshift(i);return(Array.isArray(n)?n:n.split(" ")).forEach((e=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach((t=>{t.apply(i,[e,...r])})),t.eventsListeners&&t.eventsListeners[e]&&t.eventsListeners[e].forEach((e=>{e.apply(i,r)}))})),t}},update:{updateSize:function(){const e=this;let t,n;const r=e.el;t=void 0!==e.params.width&&null!==e.params.width?e.params.width:r.clientWidth,n=void 0!==e.params.height&&null!==e.params.height?e.params.height:r.clientHeight,0===t&&e.isHorizontal()||0===n&&e.isVertical()||(t=t-parseInt(G(r,"padding-left")||0,10)-parseInt(G(r,"padding-right")||0,10),n=n-parseInt(G(r,"padding-top")||0,10)-parseInt(G(r,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))},updateSlides:function(){const e=this;function t(t){return e.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}function n(e,n){return parseFloat(e.getPropertyValue(t(n))||0)}const r=e.params,{wrapperEl:i,slidesEl:s,size:o,rtlTranslate:a,wrongRTL:l}=e,c=e.virtual&&r.virtual.enabled,u=c?e.virtual.slides.length:e.slides.length,d=z(s,`.${e.params.slideClass}, swiper-slide`),h=c?e.virtual.slides.length:d.length;let p=[];const f=[],m=[];let g=r.slidesOffsetBefore;"function"==typeof g&&(g=r.slidesOffsetBefore.call(e));let v=r.slidesOffsetAfter;"function"==typeof v&&(v=r.slidesOffsetAfter.call(e));const y=e.snapGrid.length,w=e.slidesGrid.length;let b=r.spaceBetween,E=-g,T=0,S=0;if(void 0===o)return;"string"==typeof b&&b.indexOf("%")>=0?b=parseFloat(b.replace("%",""))/100*o:"string"==typeof b&&(b=parseFloat(b)),e.virtualSize=-b,d.forEach((e=>{a?e.style.marginLeft="":e.style.marginRight="",e.style.marginBottom="",e.style.marginTop=""})),r.centeredSlides&&r.cssMode&&(F(i,"--swiper-centered-offset-before",""),F(i,"--swiper-centered-offset-after",""));const _=r.grid&&r.grid.rows>1&&e.grid;let I;_&&e.grid.initSlides(h);const C="auto"===r.slidesPerView&&r.breakpoints&&Object.keys(r.breakpoints).filter((e=>void 0!==r.breakpoints[e].slidesPerView)).length>0;for(let i=0;i<h;i+=1){let s;if(I=0,d[i]&&(s=d[i]),_&&e.grid.updateSlide(i,s,h,t),!d[i]||"none"!==G(s,"display")){if("auto"===r.slidesPerView){C&&(d[i].style[t("width")]="");const o=getComputedStyle(s),a=s.style.transform,l=s.style.webkitTransform;if(a&&(s.style.transform="none"),l&&(s.style.webkitTransform="none"),r.roundLengths)I=e.isHorizontal()?K(s,"width",!0):K(s,"height",!0);else{const e=n(o,"width"),t=n(o,"padding-left"),r=n(o,"padding-right"),i=n(o,"margin-left"),a=n(o,"margin-right"),l=o.getPropertyValue("box-sizing");if(l&&"border-box"===l)I=e+i+a;else{const{clientWidth:n,offsetWidth:o}=s;I=e+t+r+i+a+(o-n)}}a&&(s.style.transform=a),l&&(s.style.webkitTransform=l),r.roundLengths&&(I=Math.floor(I))}else I=(o-(r.slidesPerView-1)*b)/r.slidesPerView,r.roundLengths&&(I=Math.floor(I)),d[i]&&(d[i].style[t("width")]=`${I}px`);d[i]&&(d[i].swiperSlideSize=I),m.push(I),r.centeredSlides?(E=E+I/2+T/2+b,0===T&&0!==i&&(E=E-o/2-b),0===i&&(E=E-o/2-b),Math.abs(E)<.001&&(E=0),r.roundLengths&&(E=Math.floor(E)),S%r.slidesPerGroup==0&&p.push(E),f.push(E)):(r.roundLengths&&(E=Math.floor(E)),(S-Math.min(e.params.slidesPerGroupSkip,S))%e.params.slidesPerGroup==0&&p.push(E),f.push(E),E=E+I+b),e.virtualSize+=I+b,T=I,S+=1}}if(e.virtualSize=Math.max(e.virtualSize,o)+v,a&&l&&("slide"===r.effect||"coverflow"===r.effect)&&(i.style.width=`${e.virtualSize+b}px`),r.setWrapperSize&&(i.style[t("width")]=`${e.virtualSize+b}px`),_&&e.grid.updateWrapperSize(I,p,t),!r.centeredSlides){const t=[];for(let n=0;n<p.length;n+=1){let i=p[n];r.roundLengths&&(i=Math.floor(i)),p[n]<=e.virtualSize-o&&t.push(i)}p=t,Math.floor(e.virtualSize-o)-Math.floor(p[p.length-1])>1&&p.push(e.virtualSize-o)}if(c&&r.loop){const t=m[0]+b;if(r.slidesPerGroup>1){const n=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/r.slidesPerGroup),i=t*r.slidesPerGroup;for(let e=0;e<n;e+=1)p.push(p[p.length-1]+i)}for(let n=0;n<e.virtual.slidesBefore+e.virtual.slidesAfter;n+=1)1===r.slidesPerGroup&&p.push(p[p.length-1]+t),f.push(f[f.length-1]+t),e.virtualSize+=t}if(0===p.length&&(p=[0]),0!==b){const n=e.isHorizontal()&&a?"marginLeft":t("marginRight");d.filter(((e,t)=>!(r.cssMode&&!r.loop)||t!==d.length-1)).forEach((e=>{e.style[n]=`${b}px`}))}if(r.centeredSlides&&r.centeredSlidesBounds){let e=0;m.forEach((t=>{e+=t+(b||0)})),e-=b;const t=e-o;p=p.map((e=>e<=0?-g:e>t?t+v:e))}if(r.centerInsufficientSlides){let e=0;if(m.forEach((t=>{e+=t+(b||0)})),e-=b,e<o){const t=(o-e)/2;p.forEach(((e,n)=>{p[n]=e-t})),f.forEach(((e,n)=>{f[n]=e+t}))}}if(Object.assign(e,{slides:d,snapGrid:p,slidesGrid:f,slidesSizesGrid:m}),r.centeredSlides&&r.cssMode&&!r.centeredSlidesBounds){F(i,"--swiper-centered-offset-before",-p[0]+"px"),F(i,"--swiper-centered-offset-after",e.size/2-m[m.length-1]/2+"px");const t=-e.snapGrid[0],n=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map((e=>e+t)),e.slidesGrid=e.slidesGrid.map((e=>e+n))}if(h!==u&&e.emit("slidesLengthChange"),p.length!==y&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),f.length!==w&&e.emit("slidesGridLengthChange"),r.watchSlidesProgress&&e.updateSlidesOffset(),!(c||r.cssMode||"slide"!==r.effect&&"fade"!==r.effect)){const t=`${r.containerModifierClass}backface-hidden`,n=e.el.classList.contains(t);h<=r.maxBackfaceHiddenSlides?n||e.el.classList.add(t):n&&e.el.classList.remove(t)}},updateAutoHeight:function(e){const t=this,n=[],r=t.virtual&&t.params.virtual.enabled;let i,s=0;"number"==typeof e?t.setTransition(e):!0===e&&t.setTransition(t.params.speed);const o=e=>r?t.slides[t.getSlideIndexByData(e)]:t.slides[e];if("auto"!==t.params.slidesPerView&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach((e=>{n.push(e)}));else for(i=0;i<Math.ceil(t.params.slidesPerView);i+=1){const e=t.activeIndex+i;if(e>t.slides.length&&!r)break;n.push(o(e))}else n.push(o(t.activeIndex));for(i=0;i<n.length;i+=1)if(void 0!==n[i]){const e=n[i].offsetHeight;s=e>s?e:s}(s||0===s)&&(t.wrapperEl.style.height=`${s}px`)},updateSlidesOffset:function(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=(e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop)-n-e.cssOverflowAdjustment()},updateSlidesProgress:function(e=this&&this.translate||0){const t=this,n=t.params,{slides:r,rtlTranslate:i,snapGrid:s}=t;if(0===r.length)return;void 0===r[0].swiperSlideOffset&&t.updateSlidesOffset();let o=-e;i&&(o=e),r.forEach((e=>{e.classList.remove(n.slideVisibleClass)})),t.visibleSlidesIndexes=[],t.visibleSlides=[];let a=n.spaceBetween;"string"==typeof a&&a.indexOf("%")>=0?a=parseFloat(a.replace("%",""))/100*t.size:"string"==typeof a&&(a=parseFloat(a));for(let e=0;e<r.length;e+=1){const l=r[e];let c=l.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(c-=r[0].swiperSlideOffset);const u=(o+(n.centeredSlides?t.minTranslate():0)-c)/(l.swiperSlideSize+a),d=(o-s[0]+(n.centeredSlides?t.minTranslate():0)-c)/(l.swiperSlideSize+a),h=-(o-c),p=h+t.slidesSizesGrid[e];(h>=0&&h<t.size-1||p>1&&p<=t.size||h<=0&&p>=t.size)&&(t.visibleSlides.push(l),t.visibleSlidesIndexes.push(e),r[e].classList.add(n.slideVisibleClass)),l.progress=i?-u:u,l.originalProgress=i?-d:d}},updateProgress:function(e){const t=this;if(void 0===e){const n=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*n||0}const n=t.params,r=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:s,isEnd:o,progressLoop:a}=t;const l=s,c=o;if(0===r)i=0,s=!0,o=!0;else{i=(e-t.minTranslate())/r;const n=Math.abs(e-t.minTranslate())<1,a=Math.abs(e-t.maxTranslate())<1;s=n||i<=0,o=a||i>=1,n&&(i=0),a&&(i=1)}if(n.loop){const n=t.getSlideIndexByData(0),r=t.getSlideIndexByData(t.slides.length-1),i=t.slidesGrid[n],s=t.slidesGrid[r],o=t.slidesGrid[t.slidesGrid.length-1],l=Math.abs(e);a=l>=i?(l-i)/o:(l+o-s)/o,a>1&&(a-=1)}Object.assign(t,{progress:i,progressLoop:a,isBeginning:s,isEnd:o}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),s&&!l&&t.emit("reachBeginning toEdge"),o&&!c&&t.emit("reachEnd toEdge"),(l&&!s||c&&!o)&&t.emit("fromEdge"),t.emit("progress",i)},updateSlidesClasses:function(){const e=this,{slides:t,params:n,slidesEl:r,activeIndex:i}=e,s=e.virtual&&n.virtual.enabled,o=e=>z(r,`.${n.slideClass}${e}, swiper-slide${e}`)[0];let a;if(t.forEach((e=>{e.classList.remove(n.slideActiveClass,n.slideNextClass,n.slidePrevClass)})),s)if(n.loop){let t=i-e.virtual.slidesBefore;t<0&&(t=e.virtual.slides.length+t),t>=e.virtual.slides.length&&(t-=e.virtual.slides.length),a=o(`[data-swiper-slide-index="${t}"]`)}else a=o(`[data-swiper-slide-index="${i}"]`);else a=t[i];if(a){a.classList.add(n.slideActiveClass);let e=V(a,`.${n.slideClass}, swiper-slide`)[0];n.loop&&!e&&(e=t[0]),e&&e.classList.add(n.slideNextClass);let r=$(a,`.${n.slideClass}, swiper-slide`)[0];n.loop,r&&r.classList.add(n.slidePrevClass)}e.emitSlidesClasses()},updateActiveIndex:function(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:r,params:i,activeIndex:s,realIndex:o,snapIndex:a}=t;let l,c=e;const u=e=>{let n=e-t.virtual.slidesBefore;return n<0&&(n=t.virtual.slides.length+n),n>=t.virtual.slides.length&&(n-=t.virtual.slides.length),n};if(void 0===c&&(c=function(e){const{slidesGrid:t,params:n}=e,r=e.rtlTranslate?e.translate:-e.translate;let i;for(let e=0;e<t.length;e+=1)void 0!==t[e+1]?r>=t[e]&&r<t[e+1]-(t[e+1]-t[e])/2?i=e:r>=t[e]&&r<t[e+1]&&(i=e+1):r>=t[e]&&(i=e);return n.normalizeSlideIndex&&(i<0||void 0===i)&&(i=0),i}(t)),r.indexOf(n)>=0)l=r.indexOf(n);else{const e=Math.min(i.slidesPerGroupSkip,c);l=e+Math.floor((c-e)/i.slidesPerGroup)}if(l>=r.length&&(l=r.length-1),c===s)return l!==a&&(t.snapIndex=l,t.emit("snapIndexChange")),void(t.params.loop&&t.virtual&&t.params.virtual.enabled&&(t.realIndex=u(c)));let d;d=t.virtual&&i.virtual.enabled&&i.loop?u(c):t.slides[c]?parseInt(t.slides[c].getAttribute("data-swiper-slide-index")||c,10):c,Object.assign(t,{previousSnapIndex:a,snapIndex:l,previousRealIndex:o,realIndex:d,previousIndex:s,activeIndex:c}),t.initialized&&re(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),o!==d&&t.emit("realIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&t.emit("slideChange")},updateClickedSlide:function(e){const t=this,n=t.params,r=e.closest(`.${n.slideClass}, swiper-slide`);let i,s=!1;if(r)for(let e=0;e<t.slides.length;e+=1)if(t.slides[e]===r){s=!0,i=e;break}if(!r||!s)return t.clickedSlide=void 0,void(t.clickedIndex=void 0);t.clickedSlide=r,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(r.getAttribute("data-swiper-slide-index"),10):t.clickedIndex=i,n.slideToClickedSlide&&void 0!==t.clickedIndex&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}},translate:{getTranslate:function(e=(this.isHorizontal()?"x":"y")){const{params:t,rtlTranslate:n,translate:r,wrapperEl:i}=this;if(t.virtualTranslate)return n?-r:r;if(t.cssMode)return r;let s=D(i,e);return s+=this.cssOverflowAdjustment(),n&&(s=-s),s||0},setTranslate:function(e,t){const n=this,{rtlTranslate:r,params:i,wrapperEl:s,progress:o}=n;let a,l=0,c=0;n.isHorizontal()?l=r?-e:e:c=e,i.roundLengths&&(l=Math.floor(l),c=Math.floor(c)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?l:c,i.cssMode?s[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-l:-c:i.virtualTranslate||(n.isHorizontal()?l-=n.cssOverflowAdjustment():c-=n.cssOverflowAdjustment(),s.style.transform=`translate3d(${l}px, ${c}px, 0px)`);const u=n.maxTranslate()-n.minTranslate();a=0===u?0:(e-n.minTranslate())/u,a!==o&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)},minTranslate:function(){return-this.snapGrid[0]},maxTranslate:function(){return-this.snapGrid[this.snapGrid.length-1]},translateTo:function(e=0,t=this.params.speed,n=!0,r=!0,i){const s=this,{params:o,wrapperEl:a}=s;if(s.animating&&o.preventInteractionOnTransition)return!1;const l=s.minTranslate(),c=s.maxTranslate();let u;if(u=r&&e>l?l:r&&e<c?c:e,s.updateProgress(u),o.cssMode){const e=s.isHorizontal();if(0===t)a[e?"scrollLeft":"scrollTop"]=-u;else{if(!s.support.smoothScroll)return j({swiper:s,targetPosition:-u,side:e?"left":"top"}),!0;a.scrollTo({[e?"left":"top"]:-u,behavior:"smooth"})}return!0}return 0===t?(s.setTransition(0),s.setTranslate(u),n&&(s.emit("beforeTransitionStart",t,i),s.emit("transitionEnd"))):(s.setTransition(t),s.setTranslate(u),n&&(s.emit("beforeTransitionStart",t,i),s.emit("transitionStart")),s.animating||(s.animating=!0,s.onTranslateToWrapperTransitionEnd||(s.onTranslateToWrapperTransitionEnd=function(e){s&&!s.destroyed&&e.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onTranslateToWrapperTransitionEnd),s.onTranslateToWrapperTransitionEnd=null,delete s.onTranslateToWrapperTransitionEnd,n&&s.emit("transitionEnd"))}),s.wrapperEl.addEventListener("transitionend",s.onTranslateToWrapperTransitionEnd))),!0}},transition:{setTransition:function(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`),n.emit("setTransition",e,t)},transitionStart:function(e=!0,t){const n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),ie({swiper:n,runCallbacks:e,direction:t,step:"Start"}))},transitionEnd:function(e=!0,t){const n=this,{params:r}=n;n.animating=!1,r.cssMode||(n.setTransition(0),ie({swiper:n,runCallbacks:e,direction:t,step:"End"}))}},slide:{slideTo:function(e=0,t=this.params.speed,n=!0,r,i){"string"==typeof e&&(e=parseInt(e,10));const s=this;let o=e;o<0&&(o=0);const{params:a,snapGrid:l,slidesGrid:c,previousIndex:u,activeIndex:d,rtlTranslate:h,wrapperEl:p,enabled:f}=s;if(s.animating&&a.preventInteractionOnTransition||!f&&!r&&!i)return!1;const m=Math.min(s.params.slidesPerGroupSkip,o);let g=m+Math.floor((o-m)/s.params.slidesPerGroup);g>=l.length&&(g=l.length-1);const v=-l[g];if(a.normalizeSlideIndex)for(let e=0;e<c.length;e+=1){const t=-Math.floor(100*v),n=Math.floor(100*c[e]),r=Math.floor(100*c[e+1]);void 0!==c[e+1]?t>=n&&t<r-(r-n)/2?o=e:t>=n&&t<r&&(o=e+1):t>=n&&(o=e)}if(s.initialized&&o!==d){if(!s.allowSlideNext&&(h?v>s.translate&&v>s.minTranslate():v<s.translate&&v<s.minTranslate()))return!1;if(!s.allowSlidePrev&&v>s.translate&&v>s.maxTranslate()&&(d||0)!==o)return!1}let y;if(o!==(u||0)&&n&&s.emit("beforeSlideChangeStart"),s.updateProgress(v),y=o>d?"next":o<d?"prev":"reset",h&&-v===s.translate||!h&&v===s.translate)return s.updateActiveIndex(o),a.autoHeight&&s.updateAutoHeight(),s.updateSlidesClasses(),"slide"!==a.effect&&s.setTranslate(v),"reset"!==y&&(s.transitionStart(n,y),s.transitionEnd(n,y)),!1;if(a.cssMode){const e=s.isHorizontal(),n=h?v:-v;if(0===t){const t=s.virtual&&s.params.virtual.enabled;t&&(s.wrapperEl.style.scrollSnapType="none",s._immediateVirtual=!0),t&&!s._cssModeVirtualInitialSet&&s.params.initialSlide>0?(s._cssModeVirtualInitialSet=!0,requestAnimationFrame((()=>{p[e?"scrollLeft":"scrollTop"]=n}))):p[e?"scrollLeft":"scrollTop"]=n,t&&requestAnimationFrame((()=>{s.wrapperEl.style.scrollSnapType="",s._immediateVirtual=!1}))}else{if(!s.support.smoothScroll)return j({swiper:s,targetPosition:n,side:e?"left":"top"}),!0;p.scrollTo({[e?"left":"top"]:n,behavior:"smooth"})}return!0}return s.setTransition(t),s.setTranslate(v),s.updateActiveIndex(o),s.updateSlidesClasses(),s.emit("beforeTransitionStart",t,r),s.transitionStart(n,y),0===t?s.transitionEnd(n,y):s.animating||(s.animating=!0,s.onSlideToWrapperTransitionEnd||(s.onSlideToWrapperTransitionEnd=function(e){s&&!s.destroyed&&e.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onSlideToWrapperTransitionEnd),s.onSlideToWrapperTransitionEnd=null,delete s.onSlideToWrapperTransitionEnd,s.transitionEnd(n,y))}),s.wrapperEl.addEventListener("transitionend",s.onSlideToWrapperTransitionEnd)),!0},slideToLoop:function(e=0,t=this.params.speed,n=!0,r){if("string"==typeof e){e=parseInt(e,10)}const i=this;let s=e;return i.params.loop&&(i.virtual&&i.params.virtual.enabled?s+=i.virtual.slidesBefore:s=i.getSlideIndexByData(s)),i.slideTo(s,t,n,r)},slideNext:function(e=this.params.speed,t=!0,n){const r=this,{enabled:i,params:s,animating:o}=r;if(!i)return r;let a=s.slidesPerGroup;"auto"===s.slidesPerView&&1===s.slidesPerGroup&&s.slidesPerGroupAuto&&(a=Math.max(r.slidesPerViewDynamic("current",!0),1));const l=r.activeIndex<s.slidesPerGroupSkip?1:a,c=r.virtual&&s.virtual.enabled;if(s.loop){if(o&&!c&&s.loopPreventsSliding)return!1;r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft}return s.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+l,e,t,n)},slidePrev:function(e=this.params.speed,t=!0,n){const r=this,{params:i,snapGrid:s,slidesGrid:o,rtlTranslate:a,enabled:l,animating:c}=r;if(!l)return r;const u=r.virtual&&i.virtual.enabled;if(i.loop){if(c&&!u&&i.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}function d(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}const h=d(a?r.translate:-r.translate),p=s.map((e=>d(e)));let f=s[p.indexOf(h)-1];if(void 0===f&&i.cssMode){let e;s.forEach(((t,n)=>{h>=t&&(e=n)})),void 0!==e&&(f=s[e>0?e-1:e])}let m=0;if(void 0!==f&&(m=o.indexOf(f),m<0&&(m=r.activeIndex-1),"auto"===i.slidesPerView&&1===i.slidesPerGroup&&i.slidesPerGroupAuto&&(m=m-r.slidesPerViewDynamic("previous",!0)+1,m=Math.max(m,0))),i.rewind&&r.isBeginning){const i=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(i,e,t,n)}return r.slideTo(m,e,t,n)},slideReset:function(e=this.params.speed,t=!0,n){return this.slideTo(this.activeIndex,e,t,n)},slideToClosest:function(e=this.params.speed,t=!0,n,r=.5){const i=this;let s=i.activeIndex;const o=Math.min(i.params.slidesPerGroupSkip,s),a=o+Math.floor((s-o)/i.params.slidesPerGroup),l=i.rtlTranslate?i.translate:-i.translate;if(l>=i.snapGrid[a]){const e=i.snapGrid[a];l-e>(i.snapGrid[a+1]-e)*r&&(s+=i.params.slidesPerGroup)}else{const e=i.snapGrid[a-1];l-e<=(i.snapGrid[a]-e)*r&&(s-=i.params.slidesPerGroup)}return s=Math.max(s,0),s=Math.min(s,i.slidesGrid.length-1),i.slideTo(s,e,t,n)},slideToClickedSlide:function(){const e=this,{params:t,slidesEl:n}=e,r="auto"===t.slidesPerView?e.slidesPerViewDynamic():t.slidesPerView;let i,s=e.clickedIndex;const o=e.isElement?"swiper-slide":`.${t.slideClass}`;if(t.loop){if(e.animating)return;i=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?s<e.loopedSlides-r/2||s>e.slides.length-e.loopedSlides+r/2?(e.loopFix(),s=e.getSlideIndex(z(n,`${o}[data-swiper-slide-index="${i}"]`)[0]),M((()=>{e.slideTo(s)}))):e.slideTo(s):s>e.slides.length-r?(e.loopFix(),s=e.getSlideIndex(z(n,`${o}[data-swiper-slide-index="${i}"]`)[0]),M((()=>{e.slideTo(s)}))):e.slideTo(s)}else e.slideTo(s)}},loop:{loopCreate:function(e){const t=this,{params:n,slidesEl:r}=t;if(!n.loop||t.virtual&&t.params.virtual.enabled)return;z(r,`.${n.slideClass}, swiper-slide`).forEach(((e,t)=>{e.setAttribute("data-swiper-slide-index",t)})),t.loopFix({slideRealIndex:e,direction:n.centeredSlides?void 0:"next"})},loopFix:function({slideRealIndex:e,slideTo:t=!0,direction:n,setTranslate:r,activeSlideIndex:i,byController:s,byMousewheel:o}={}){const a=this;if(!a.params.loop)return;a.emit("beforeLoopFix");const{slides:l,allowSlidePrev:c,allowSlideNext:u,slidesEl:d,params:h}=a;if(a.allowSlidePrev=!0,a.allowSlideNext=!0,a.virtual&&h.virtual.enabled)return t&&(h.centeredSlides||0!==a.snapIndex?h.centeredSlides&&a.snapIndex<h.slidesPerView?a.slideTo(a.virtual.slides.length+a.snapIndex,0,!1,!0):a.snapIndex===a.snapGrid.length-1&&a.slideTo(a.virtual.slidesBefore,0,!1,!0):a.slideTo(a.virtual.slides.length,0,!1,!0)),a.allowSlidePrev=c,a.allowSlideNext=u,void a.emit("loopFix");const p="auto"===h.slidesPerView?a.slidesPerViewDynamic():Math.ceil(parseFloat(h.slidesPerView,10));let f=h.loopedSlides||p;f%h.slidesPerGroup!=0&&(f+=h.slidesPerGroup-f%h.slidesPerGroup),a.loopedSlides=f;const m=[],g=[];let v=a.activeIndex;void 0===i?i=a.getSlideIndex(a.slides.filter((e=>e.classList.contains(h.slideActiveClass)))[0]):v=i;const y="next"===n||!n,w="prev"===n||!n;let b=0,E=0;if(i<f){b=Math.max(f-i,h.slidesPerGroup);for(let e=0;e<f-i;e+=1){const t=e-Math.floor(e/l.length)*l.length;m.push(l.length-t-1)}}else if(i>a.slides.length-2*f){E=Math.max(i-(a.slides.length-2*f),h.slidesPerGroup);for(let e=0;e<E;e+=1){const t=e-Math.floor(e/l.length)*l.length;g.push(t)}}if(w&&m.forEach((e=>{a.slides[e].swiperLoopMoveDOM=!0,d.prepend(a.slides[e]),a.slides[e].swiperLoopMoveDOM=!1})),y&&g.forEach((e=>{a.slides[e].swiperLoopMoveDOM=!0,d.append(a.slides[e]),a.slides[e].swiperLoopMoveDOM=!1})),a.recalcSlides(),"auto"===h.slidesPerView&&a.updateSlides(),h.watchSlidesProgress&&a.updateSlidesOffset(),t)if(m.length>0&&w)if(void 0===e){const e=a.slidesGrid[v],t=a.slidesGrid[v+b]-e;o?a.setTranslate(a.translate-t):(a.slideTo(v+b,0,!1,!0),r&&(a.touches[a.isHorizontal()?"startX":"startY"]+=t))}else r&&a.slideToLoop(e,0,!1,!0);else if(g.length>0&&y)if(void 0===e){const e=a.slidesGrid[v],t=a.slidesGrid[v-E]-e;o?a.setTranslate(a.translate-t):(a.slideTo(v-E,0,!1,!0),r&&(a.touches[a.isHorizontal()?"startX":"startY"]+=t))}else a.slideToLoop(e,0,!1,!0);if(a.allowSlidePrev=c,a.allowSlideNext=u,a.controller&&a.controller.control&&!s){const t={slideRealIndex:e,slideTo:!1,direction:n,setTranslate:r,activeSlideIndex:i,byController:!0};Array.isArray(a.controller.control)?a.controller.control.forEach((e=>{!e.destroyed&&e.params.loop&&e.loopFix(t)})):a.controller.control instanceof a.constructor&&a.controller.control.params.loop&&a.controller.control.loopFix(t)}a.emit("loopFix")},loopDestroy:function(){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const r=[];e.slides.forEach((e=>{const t=void 0===e.swiperSlideIndex?1*e.getAttribute("data-swiper-slide-index"):e.swiperSlideIndex;r[t]=e})),e.slides.forEach((e=>{e.removeAttribute("data-swiper-slide-index")})),r.forEach((e=>{n.append(e)})),e.recalcSlides(),e.slideTo(e.realIndex,0)}},grabCursor:{setGrabCursor:function(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n="container"===t.params.touchEventsTarget?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame((()=>{t.__preventObserver__=!1}))},unsetGrabCursor:function(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e["container"===e.params.touchEventsTarget?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame((()=>{e.__preventObserver__=!1})))}},events:{attachEvents:function(){const e=this,t=R(),{params:n}=e;e.onTouchStart=se.bind(e),e.onTouchMove=oe.bind(e),e.onTouchEnd=ae.bind(e),n.cssMode&&(e.onScroll=ue.bind(e)),e.onClick=ce.bind(e),e.onLoad=de.bind(e),he||(t.addEventListener("touchstart",pe),he=!0),fe(e,"on")},detachEvents:function(){fe(this,"off")}},breakpoints:{setBreakpoint:function(){const e=this,{realIndex:t,initialized:n,params:r,el:i}=e,s=r.breakpoints;if(!s||s&&0===Object.keys(s).length)return;const o=e.getBreakpoint(s,e.params.breakpointsBase,e.el);if(!o||e.currentBreakpoint===o)return;const a=(o in s?s[o]:void 0)||e.originalParams,l=me(e,r),c=me(e,a),u=r.enabled;l&&!c?(i.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!l&&c&&(i.classList.add(`${r.containerModifierClass}grid`),(a.grid.fill&&"column"===a.grid.fill||!a.grid.fill&&"column"===r.grid.fill)&&i.classList.add(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),["navigation","pagination","scrollbar"].forEach((t=>{if(void 0===a[t])return;const n=r[t]&&r[t].enabled,i=a[t]&&a[t].enabled;n&&!i&&e[t].disable(),!n&&i&&e[t].enable()}));const d=a.direction&&a.direction!==r.direction,h=r.loop&&(a.slidesPerView!==r.slidesPerView||d);d&&n&&e.changeDirection(),B(e.params,a);const p=e.params.enabled;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),u&&!p?e.disable():!u&&p&&e.enable(),e.currentBreakpoint=o,e.emit("_beforeBreakpoint",a),h&&n&&(e.loopDestroy(),e.loopCreate(t),e.updateSlides()),e.emit("breakpoint",a)},getBreakpoint:function(e,t="window",n){if(!e||"container"===t&&!n)return;let r=!1;const i=x(),s="window"===t?i.innerHeight:n.clientHeight,o=Object.keys(e).map((e=>{if("string"==typeof e&&0===e.indexOf("@")){const t=parseFloat(e.substr(1));return{value:s*t,point:e}}return{value:e,point:e}}));o.sort(((e,t)=>parseInt(e.value,10)-parseInt(t.value,10)));for(let e=0;e<o.length;e+=1){const{point:s,value:a}=o[e];"window"===t?i.matchMedia(`(min-width: ${a}px)`).matches&&(r=s):a<=n.clientWidth&&(r=s)}return r||"max"}},checkOverflow:{checkOverflow:function(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){const t=e.slides.length-1,n=e.slidesGrid[t]+e.slidesSizesGrid[t]+2*r;e.isLocked=e.size>n}else e.isLocked=1===e.snapGrid.length;!0===n.allowSlideNext&&(e.allowSlideNext=!e.isLocked),!0===n.allowSlidePrev&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}},classes:{addClasses:function(){const e=this,{classNames:t,params:n,rtl:r,el:i,device:s}=e,o=function(e,t){const n=[];return e.forEach((e=>{"object"==typeof e?Object.keys(e).forEach((r=>{e[r]&&n.push(t+r)})):"string"==typeof e&&n.push(t+e)})),n}(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&"column"===n.grid.fill},{android:s.android},{ios:s.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...o),i.classList.add(...t),e.emitContainerClasses()},removeClasses:function(){const{el:e,classNames:t}=this;e.classList.remove(...t),this.emitContainerClasses()}}},we={};class be{getSlideIndex(e){const{slidesEl:t,params:n}=this,r=W(z(t,`.${n.slideClass}, swiper-slide`)[0]);return W(e)-r}getSlideIndexByData(e){return this.getSlideIndex(this.slides.filter((t=>1*t.getAttribute("data-swiper-slide-index")===e))[0])}recalcSlides(){const{slidesEl:e,params:t}=this;this.slides=z(e,`.${t.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const n=this;e=Math.min(Math.max(e,0),1);const r=n.minTranslate(),i=(n.maxTranslate()-r)*e+r;n.translateTo(i,void 0===t?0:t),n.updateActiveIndex(),n.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter((t=>0===t.indexOf("swiper")||0===t.indexOf(e.params.containerModifierClass)));e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return t.destroyed?"":e.className.split(" ").filter((e=>0===e.indexOf("swiper-slide")||0===e.indexOf(t.params.slideClass))).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.forEach((n=>{const r=e.getSlideClasses(n);t.push({slideEl:n,classNames:r}),e.emit("_slideClass",n,r)})),e.emit("_slideClasses",t)}slidesPerViewDynamic(e="current",t=!1){const{params:n,slides:r,slidesGrid:i,slidesSizesGrid:s,size:o,activeIndex:a}=this;let l=1;if(n.centeredSlides){let e,t=r[a]?r[a].swiperSlideSize:0;for(let n=a+1;n<r.length;n+=1)r[n]&&!e&&(t+=r[n].swiperSlideSize,l+=1,t>o&&(e=!0));for(let n=a-1;n>=0;n-=1)r[n]&&!e&&(t+=r[n].swiperSlideSize,l+=1,t>o&&(e=!0))}else if("current"===e)for(let e=a+1;e<r.length;e+=1){(t?i[e]+s[e]-i[a]<o:i[e]-i[a]<o)&&(l+=1)}else for(let e=a-1;e>=0;e-=1){i[a]-i[e]<o&&(l+=1)}return l}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:n}=e;function r(){const t=e.rtlTranslate?-1*e.translate:e.translate,n=Math.min(Math.max(t,e.maxTranslate()),e.minTranslate());e.setTranslate(n),e.updateActiveIndex(),e.updateSlidesClasses()}let i;if(n.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach((t=>{t.complete&&te(e,t)})),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),n.freeMode&&n.freeMode.enabled&&!n.cssMode)r(),n.autoHeight&&e.updateAutoHeight();else{if(("auto"===n.slidesPerView||n.slidesPerView>1)&&e.isEnd&&!n.centeredSlides){const t=e.virtual&&n.virtual.enabled?e.virtual.slides:e.slides;i=e.slideTo(t.length-1,0,!1,!0)}else i=e.slideTo(e.activeIndex,0,!1,!0);i||r()}n.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t=!0){const n=this,r=n.params.direction;return e||(e="horizontal"===r?"vertical":"horizontal"),e===r||"horizontal"!==e&&"vertical"!==e||(n.el.classList.remove(`${n.params.containerModifierClass}${r}`),n.el.classList.add(`${n.params.containerModifierClass}${e}`),n.emitContainerClasses(),n.params.direction=e,n.slides.forEach((t=>{"vertical"===e?t.style.width="":t.style.height=""})),n.emit("changeDirection"),t&&n.update()),n}changeLanguageDirection(e){const t=this;t.rtl&&"rtl"===e||!t.rtl&&"ltr"===e||(t.rtl="rtl"===e,t.rtlTranslate="horizontal"===t.params.direction&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(e){const t=this;if(t.mounted)return!0;let n=e||t.params.el;if("string"==typeof n&&(n=document.querySelector(n)),!n)return!1;n.swiper=t,n.shadowEl&&(t.isElement=!0);const r=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let i=(()=>{if(n&&n.shadowRoot&&n.shadowRoot.querySelector){return n.shadowRoot.querySelector(r())}return z(n,r())[0]})();return!i&&t.params.createElements&&(i=H("div",t.params.wrapperClass),n.append(i),z(n,`.${t.params.slideClass}`).forEach((e=>{i.append(e)}))),Object.assign(t,{el:n,wrapperEl:i,slidesEl:t.isElement?n:i,mounted:!0,rtl:"rtl"===n.dir.toLowerCase()||"rtl"===G(n,"direction"),rtlTranslate:"horizontal"===t.params.direction&&("rtl"===n.dir.toLowerCase()||"rtl"===G(n,"direction")),wrongRTL:"-webkit-box"===G(i,"display")}),!0}init(e){const t=this;if(t.initialized)return t;return!1===t.mount(e)||(t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(),t.attachEvents(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach((e=>{e.complete?te(t,e):e.addEventListener("load",(e=>{te(t,e.target)}))})),re(t),t.initialized=!0,re(t),t.emit("init"),t.emit("afterInit")),t}destroy(e=!0,t=!0){const n=this,{params:r,el:i,wrapperEl:s,slides:o}=n;return void 0===n.params||n.destroyed||(n.emit("beforeDestroy"),n.initialized=!1,n.detachEvents(),r.loop&&n.loopDestroy(),t&&(n.removeClasses(),i.removeAttribute("style"),s.removeAttribute("style"),o&&o.length&&o.forEach((e=>{e.classList.remove(r.slideVisibleClass,r.slideActiveClass,r.slideNextClass,r.slidePrevClass),e.removeAttribute("style"),e.removeAttribute("data-swiper-slide-index")}))),n.emit("destroy"),Object.keys(n.eventsListeners).forEach((e=>{n.off(e)})),!1!==e&&(n.el.swiper=null,L(n)),n.destroyed=!0),null}static extendDefaults(e){B(we,e)}static get extendedDefaults(){return we}static get defaults(){return ge}static installModule(e){be.prototype.__modules__||(be.prototype.__modules__=[]);const t=be.prototype.__modules__;"function"==typeof e&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach((e=>be.installModule(e))),be):(be.installModule(e),be)}constructor(...e){let t,n;1===e.length&&e[0].constructor&&"Object"===Object.prototype.toString.call(e[0]).slice(8,-1)?n=e[0]:[t,n]=e,n||(n={}),n=B({},n),t&&!n.el&&(n.el=t);const r=R();if(n.el&&"string"==typeof n.el&&r.querySelectorAll(n.el).length>1){const e=[];return r.querySelectorAll(n.el).forEach((t=>{const r=B({},n,{el:t});e.push(new be(r))})),e}const i=this;i.__swiper__=!0,i.support=Q(),i.device=Z({userAgent:n.userAgent}),i.browser=ee(),i.eventsListeners={},i.eventsAnyListeners=[],i.modules=[...i.__modules__],n.modules&&Array.isArray(n.modules)&&i.modules.push(...n.modules);const s={};i.modules.forEach((e=>{e({params:n,swiper:i,extendParams:ve(n,s),on:i.on.bind(i),once:i.once.bind(i),off:i.off.bind(i),emit:i.emit.bind(i)})}));const o=B({},ge,s);return i.params=B({},o,we,n),i.originalParams=B({},i.params),i.passedParams=B({},n),i.params&&i.params.on&&Object.keys(i.params.on).forEach((e=>{i.on(e,i.params.on[e])})),i.params&&i.params.onAny&&i.onAny(i.params.onAny),Object.assign(i,{enabled:i.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:()=>"horizontal"===i.params.direction,isVertical:()=>"vertical"===i.params.direction,activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return 8388608*Math.trunc(this.translate/8388608)},allowSlideNext:i.params.allowSlideNext,allowSlidePrev:i.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:i.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,evCache:[]},allowClick:!0,allowTouchMove:i.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),i.emit("_swiper"),i.params.init&&i.init(),i}}Object.keys(ye).forEach((e=>{Object.keys(ye[e]).forEach((t=>{be.prototype[t]=ye[e][t]}))})),be.use([function({swiper:e,on:t,emit:n}){const r=x();let i=null,s=null;const o=()=>{e&&!e.destroyed&&e.initialized&&(n("beforeResize"),n("resize"))},a=()=>{e&&!e.destroyed&&e.initialized&&n("orientationchange")};t("init",(()=>{e.params.resizeObserver&&void 0!==r.ResizeObserver?e&&!e.destroyed&&e.initialized&&(i=new ResizeObserver((t=>{s=r.requestAnimationFrame((()=>{const{width:n,height:r}=e;let i=n,s=r;t.forEach((({contentBoxSize:t,contentRect:n,target:r})=>{r&&r!==e.el||(i=n?n.width:(t[0]||t).inlineSize,s=n?n.height:(t[0]||t).blockSize)})),i===n&&s===r||o()}))})),i.observe(e.el)):(r.addEventListener("resize",o),r.addEventListener("orientationchange",a))})),t("destroy",(()=>{s&&r.cancelAnimationFrame(s),i&&i.unobserve&&e.el&&(i.unobserve(e.el),i=null),r.removeEventListener("resize",o),r.removeEventListener("orientationchange",a)}))},function({swiper:e,extendParams:t,on:n,emit:r}){const i=[],s=x(),o=(t,n={})=>{const o=new(s.MutationObserver||s.WebkitMutationObserver)((t=>{if(e.__preventObserver__)return;if(1===t.length)return void r("observerUpdate",t[0]);const n=function(){r("observerUpdate",t[0])};s.requestAnimationFrame?s.requestAnimationFrame(n):s.setTimeout(n,0)}));o.observe(t,{attributes:void 0===n.attributes||n.attributes,childList:void 0===n.childList||n.childList,characterData:void 0===n.characterData||n.characterData}),i.push(o)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),n("init",(()=>{if(e.params.observer){if(e.params.observeParents){const t=q(e.el);for(let e=0;e<t.length;e+=1)o(t[e])}o(e.el,{childList:e.params.observeSlideChildren}),o(e.wrapperEl,{attributes:!1})}})),n("destroy",(()=>{i.forEach((e=>{e.disconnect()})),i.splice(0,i.length)}))}]);var Ee=be;function Te(e,t,n,r){return e.params.createElements&&Object.keys(r).forEach((i=>{if(!n[i]&&!0===n.auto){let s=z(e.el,`.${r[i]}`)[0];s||(s=H("div",r[i]),s.className=r[i],e.el.append(s)),n[i]=s,t[i]=s}})),n}function Se(e=""){return`.${e.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}const _e=[{image1:t(c),image1x2:t(u)},{image2:t(d),image2x2:t(h)},{image3:t(p),image3x2:t(f)},{image4:t(m),image4x2:t(g)},{image5:t(v),image5x2:t(y)},{image6:t(w),image6x2:t(b)},{image7:t(E),image7x2:t(T)},{image8:t(S),image8x2:t(_)},{image9:t(I),image9x2:t(C)}];Ee.use([function({swiper:e,extendParams:t,on:n,emit:r}){t({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};const i=e=>(Array.isArray(e)||(e=[e].filter((e=>!!e))),e);function s(t){let n;return t&&"string"==typeof t&&e.isElement&&(n=e.el.shadowRoot.querySelector(t),n)?n:(t&&("string"==typeof t&&(n=[...document.querySelectorAll(t)]),e.params.uniqueNavElements&&"string"==typeof t&&n.length>1&&1===e.el.querySelectorAll(t).length&&(n=e.el.querySelector(t))),t&&!n?t:n)}function o(t,n){const r=e.params.navigation;(t=i(t)).forEach((t=>{t&&(t.classList[n?"add":"remove"](...r.disabledClass.split(" ")),"BUTTON"===t.tagName&&(t.disabled=n),e.params.watchOverflow&&e.enabled&&t.classList[e.isLocked?"add":"remove"](r.lockClass))}))}function a(){const{nextEl:t,prevEl:n}=e.navigation;if(e.params.loop)return o(n,!1),void o(t,!1);o(n,e.isBeginning&&!e.params.rewind),o(t,e.isEnd&&!e.params.rewind)}function l(t){t.preventDefault(),(!e.isBeginning||e.params.loop||e.params.rewind)&&(e.slidePrev(),r("navigationPrev"))}function c(t){t.preventDefault(),(!e.isEnd||e.params.loop||e.params.rewind)&&(e.slideNext(),r("navigationNext"))}function u(){const t=e.params.navigation;if(e.params.navigation=Te(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!t.nextEl&&!t.prevEl)return;let n=s(t.nextEl),r=s(t.prevEl);Object.assign(e.navigation,{nextEl:n,prevEl:r}),n=i(n),r=i(r);const o=(n,r)=>{n&&n.addEventListener("click","next"===r?c:l),!e.enabled&&n&&n.classList.add(...t.lockClass.split(" "))};n.forEach((e=>o(e,"next"))),r.forEach((e=>o(e,"prev")))}function d(){let{nextEl:t,prevEl:n}=e.navigation;t=i(t),n=i(n);const r=(t,n)=>{t.removeEventListener("click","next"===n?c:l),t.classList.remove(...e.params.navigation.disabledClass.split(" "))};t.forEach((e=>r(e,"next"))),n.forEach((e=>r(e,"prev")))}n("init",(()=>{!1===e.params.navigation.enabled?h():(u(),a())})),n("toEdge fromEdge lock unlock",(()=>{a()})),n("destroy",(()=>{d()})),n("enable disable",(()=>{let{nextEl:t,prevEl:n}=e.navigation;t=i(t),n=i(n),[...t,...n].filter((e=>!!e)).forEach((t=>t.classList[e.enabled?"remove":"add"](e.params.navigation.lockClass)))})),n("click",((t,n)=>{let{nextEl:s,prevEl:o}=e.navigation;s=i(s),o=i(o);const a=n.target;if(e.params.navigation.hideOnClick&&!o.includes(a)&&!s.includes(a)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===a||e.pagination.el.contains(a)))return;let t;s.length?t=s[0].classList.contains(e.params.navigation.hiddenClass):o.length&&(t=o[0].classList.contains(e.params.navigation.hiddenClass)),r(!0===t?"navigationShow":"navigationHide"),[...s,...o].filter((e=>!!e)).forEach((t=>t.classList.toggle(e.params.navigation.hiddenClass)))}}));const h=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),d()};Object.assign(e.navigation,{enable:()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),u(),a()},disable:h,update:a,init:u,destroy:d})},function({swiper:e,extendParams:t,on:n,emit:r}){const i="swiper-pagination";let s;t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:e=>e,formatFractionTotal:e=>e,bulletClass:`${i}-bullet`,bulletActiveClass:`${i}-bullet-active`,modifierClass:`${i}-`,currentClass:`${i}-current`,totalClass:`${i}-total`,hiddenClass:`${i}-hidden`,progressbarFillClass:`${i}-progressbar-fill`,progressbarOppositeClass:`${i}-progressbar-opposite`,clickableClass:`${i}-clickable`,lockClass:`${i}-lock`,horizontalClass:`${i}-horizontal`,verticalClass:`${i}-vertical`,paginationDisabledClass:`${i}-disabled`}}),e.pagination={el:null,bullets:[]};let o=0;const a=e=>(Array.isArray(e)||(e=[e].filter((e=>!!e))),e);function l(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&0===e.pagination.el.length}function c(t,n){const{bulletActiveClass:r}=e.params.pagination;t&&(t=t[("prev"===n?"previous":"next")+"ElementSibling"])&&(t.classList.add(`${r}-${n}`),(t=t[("prev"===n?"previous":"next")+"ElementSibling"])&&t.classList.add(`${r}-${n}-${n}`))}function u(t){const n=t.target.closest(Se(e.params.pagination.bulletClass));if(!n)return;t.preventDefault();const r=W(n)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===r)return;const t=e.getSlideIndexByData(r),n=e.getSlideIndexByData(e.realIndex);t>e.slides.length-e.loopedSlides&&e.loopFix({direction:t>n?"next":"prev",activeSlideIndex:t,slideTo:!1}),e.slideToLoop(r)}else e.slideTo(r)}function d(){const t=e.rtl,n=e.params.pagination;if(l())return;let i,u,d=e.pagination.el;d=a(d);const h=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,p=e.params.loop?Math.ceil(h/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(u=e.previousRealIndex||0,i=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):void 0!==e.snapIndex?(i=e.snapIndex,u=e.previousSnapIndex):(u=e.previousIndex||0,i=e.activeIndex||0),"bullets"===n.type&&e.pagination.bullets&&e.pagination.bullets.length>0){const r=e.pagination.bullets;let a,l,h;if(n.dynamicBullets&&(s=K(r[0],e.isHorizontal()?"width":"height",!0),d.forEach((t=>{t.style[e.isHorizontal()?"width":"height"]=s*(n.dynamicMainBullets+4)+"px"})),n.dynamicMainBullets>1&&void 0!==u&&(o+=i-(u||0),o>n.dynamicMainBullets-1?o=n.dynamicMainBullets-1:o<0&&(o=0)),a=Math.max(i-o,0),l=a+(Math.min(r.length,n.dynamicMainBullets)-1),h=(l+a)/2),r.forEach((e=>{const t=[...["","-next","-next-next","-prev","-prev-prev","-main"].map((e=>`${n.bulletActiveClass}${e}`))].map((e=>"string"==typeof e&&e.includes(" ")?e.split(" "):e)).flat();e.classList.remove(...t)})),d.length>1)r.forEach((t=>{const r=W(t);r===i?t.classList.add(...n.bulletActiveClass.split(" ")):e.isElement&&t.setAttribute("part","bullet"),n.dynamicBullets&&(r>=a&&r<=l&&t.classList.add(...`${n.bulletActiveClass}-main`.split(" ")),r===a&&c(t,"prev"),r===l&&c(t,"next"))}));else{const t=r[i];if(t&&t.classList.add(...n.bulletActiveClass.split(" ")),e.isElement&&r.forEach(((e,t)=>{e.setAttribute("part",t===i?"bullet-active":"bullet")})),n.dynamicBullets){const e=r[a],t=r[l];for(let e=a;e<=l;e+=1)r[e]&&r[e].classList.add(...`${n.bulletActiveClass}-main`.split(" "));c(e,"prev"),c(t,"next")}}if(n.dynamicBullets){const i=Math.min(r.length,n.dynamicMainBullets+4),o=(s*i-s)/2-h*s,a=t?"right":"left";r.forEach((t=>{t.style[e.isHorizontal()?a:"top"]=`${o}px`}))}}d.forEach(((t,s)=>{if("fraction"===n.type&&(t.querySelectorAll(Se(n.currentClass)).forEach((e=>{e.textContent=n.formatFractionCurrent(i+1)})),t.querySelectorAll(Se(n.totalClass)).forEach((e=>{e.textContent=n.formatFractionTotal(p)}))),"progressbar"===n.type){let r;r=n.progressbarOpposite?e.isHorizontal()?"vertical":"horizontal":e.isHorizontal()?"horizontal":"vertical";const s=(i+1)/p;let o=1,a=1;"horizontal"===r?o=s:a=s,t.querySelectorAll(Se(n.progressbarFillClass)).forEach((t=>{t.style.transform=`translate3d(0,0,0) scaleX(${o}) scaleY(${a})`,t.style.transitionDuration=`${e.params.speed}ms`}))}"custom"===n.type&&n.renderCustom?(t.innerHTML=n.renderCustom(e,i+1,p),0===s&&r("paginationRender",t)):(0===s&&r("paginationRender",t),r("paginationUpdate",t)),e.params.watchOverflow&&e.enabled&&t.classList[e.isLocked?"add":"remove"](n.lockClass)}))}function h(){const t=e.params.pagination;if(l())return;const n=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length;let i=e.pagination.el;i=a(i);let s="";if("bullets"===t.type){let r=e.params.loop?Math.ceil(n/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&r>n&&(r=n);for(let n=0;n<r;n+=1)t.renderBullet?s+=t.renderBullet.call(e,n,t.bulletClass):s+=`<${t.bulletElement} ${e.isElement?'part="bullet"':""} class="${t.bulletClass}"></${t.bulletElement}>`}"fraction"===t.type&&(s=t.renderFraction?t.renderFraction.call(e,t.currentClass,t.totalClass):`<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),"progressbar"===t.type&&(s=t.renderProgressbar?t.renderProgressbar.call(e,t.progressbarFillClass):`<span class="${t.progressbarFillClass}"></span>`),e.pagination.bullets=[],i.forEach((n=>{"custom"!==t.type&&(n.innerHTML=s||""),"bullets"===t.type&&e.pagination.bullets.push(...n.querySelectorAll(Se(t.bulletClass)))})),"custom"!==t.type&&r("paginationRender",i[0])}function p(){e.params.pagination=Te(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const t=e.params.pagination;if(!t.el)return;let n;"string"==typeof t.el&&e.isElement&&(n=e.el.shadowRoot.querySelector(t.el)),n||"string"!=typeof t.el||(n=[...document.querySelectorAll(t.el)]),n||(n=t.el),n&&0!==n.length&&(e.params.uniqueNavElements&&"string"==typeof t.el&&Array.isArray(n)&&n.length>1&&(n=[...e.el.querySelectorAll(t.el)],n.length>1&&(n=n.filter((t=>q(t,".swiper")[0]===e.el))[0])),Array.isArray(n)&&1===n.length&&(n=n[0]),Object.assign(e.pagination,{el:n}),n=a(n),n.forEach((n=>{"bullets"===t.type&&t.clickable&&n.classList.add(t.clickableClass),n.classList.add(t.modifierClass+t.type),n.classList.add(e.isHorizontal()?t.horizontalClass:t.verticalClass),"bullets"===t.type&&t.dynamicBullets&&(n.classList.add(`${t.modifierClass}${t.type}-dynamic`),o=0,t.dynamicMainBullets<1&&(t.dynamicMainBullets=1)),"progressbar"===t.type&&t.progressbarOpposite&&n.classList.add(t.progressbarOppositeClass),t.clickable&&n.addEventListener("click",u),e.enabled||n.classList.add(t.lockClass)})))}function f(){const t=e.params.pagination;if(l())return;let n=e.pagination.el;n&&(n=a(n),n.forEach((n=>{n.classList.remove(t.hiddenClass),n.classList.remove(t.modifierClass+t.type),n.classList.remove(e.isHorizontal()?t.horizontalClass:t.verticalClass),t.clickable&&n.removeEventListener("click",u)}))),e.pagination.bullets&&e.pagination.bullets.forEach((e=>e.classList.remove(...t.bulletActiveClass.split(" "))))}n("changeDirection",(()=>{if(!e.pagination||!e.pagination.el)return;const t=e.params.pagination;let{el:n}=e.pagination;n=a(n),n.forEach((n=>{n.classList.remove(t.horizontalClass,t.verticalClass),n.classList.add(e.isHorizontal()?t.horizontalClass:t.verticalClass)}))})),n("init",(()=>{!1===e.params.pagination.enabled?m():(p(),h(),d())})),n("activeIndexChange",(()=>{void 0===e.snapIndex&&d()})),n("snapIndexChange",(()=>{d()})),n("snapGridLengthChange",(()=>{h(),d()})),n("destroy",(()=>{f()})),n("enable disable",(()=>{let{el:t}=e.pagination;t&&(t=a(t),t.forEach((t=>t.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass))))})),n("lock unlock",(()=>{d()})),n("click",((t,n)=>{const i=n.target;let{el:s}=e.pagination;if(Array.isArray(s)||(s=[s].filter((e=>!!e))),e.params.pagination.el&&e.params.pagination.hideOnClick&&s&&s.length>0&&!i.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&i===e.navigation.nextEl||e.navigation.prevEl&&i===e.navigation.prevEl))return;const t=s[0].classList.contains(e.params.pagination.hiddenClass);r(!0===t?"paginationShow":"paginationHide"),s.forEach((t=>t.classList.toggle(e.params.pagination.hiddenClass)))}}));const m=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:t}=e.pagination;t&&(t=a(t),t.forEach((t=>t.classList.add(e.params.pagination.paginationDisabledClass)))),f()};Object.assign(e.pagination,{enable:()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:t}=e.pagination;t&&(t=a(t),t.forEach((t=>t.classList.remove(e.params.pagination.paginationDisabledClass)))),p(),h(),d()},disable:m,render:h,update:d,init:p,destroy:f})}]);const Ie=document.querySelector(".swiper-wrapper");let Ce=(ke=_e,[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:null},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:null},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:null},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:null},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:null},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:null},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:null},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:null},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:null}].map(((e,t)=>{const n=ke[t],r=n[`image${t+1}`],i=n[`image${t+1}x2`];return`<li class="swiper-slide">\n        <a\n          class="charity-link"\n          rel="nofollow noreferrer noopener"\n          target="_blank"\n          href="${e.url}"\n        >\n          <img\n            src="${r}"\n            srcset="${i} 2x"\n            class="charity-img"\n            alt="${e.title}"\n          />\n        </a>\n      </li>`})).join(""));var ke;Ie.insertAdjacentHTML("beforeend",Ce);const Ae={direction:"vertical",spaceBetween:20,navigation:{nextEl:".swiper-button-next"},observer:!0,observeParents:!0,slidesPerColumnFill:"row",breakpoints:{320:{slidesPerView:4},780:{slidesPerView:6},1440:{slidesPerView:6}}},Oe=new Ee(".swiper",Ae),Re=document.querySelector(".swiper-button-up");function Pe(e,t){return function(){return e.apply(t,arguments)}}Re.addEventListener("click",(()=>{Oe.slideTo(0,800),Re.classList.add("is-hidden")})),Oe.on("slideChange",(()=>{Oe.activeIndex===Oe.slides.length-function(){const e=window.innerWidth;let t;t=e>=1440?Ae.breakpoints[1440].slidesPerView:e>=780?Ae.breakpoints[780].slidesPerView:Ae.breakpoints[320].slidesPerView;return t}()&&Re.classList.remove("is-hidden")}));const{toString:xe}=Object.prototype,{getPrototypeOf:Le}=Object,Me=(Ne=Object.create(null),e=>{const t=xe.call(e);return Ne[t]||(Ne[t]=t.slice(8,-1).toLowerCase())});var Ne;const De=e=>(e=e.toLowerCase(),t=>Me(t)===e),Ue=e=>t=>typeof t===e,{isArray:Be}=Array,Fe=Ue("undefined");const je=De("ArrayBuffer");const ze=Ue("string"),He=Ue("function"),$e=Ue("number"),Ve=e=>null!==e&&"object"==typeof e,Ge=e=>{if("object"!==Me(e))return!1;const t=Le(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},We=De("Date"),qe=De("File"),Ke=De("Blob"),Xe=De("FileList"),Je=De("URLSearchParams");function Ye(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let r,i;if("object"!=typeof e&&(e=[e]),Be(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),s=i.length;let o;for(r=0;r<s;r++)o=i[r],t.call(null,e[o],o,e)}}function Qe(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,i=n.length;for(;i-- >0;)if(r=n[i],t===r.toLowerCase())return r;return null}const Ze="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:n,et=e=>!Fe(e)&&e!==Ze;const tt=(nt="undefined"!=typeof Uint8Array&&Le(Uint8Array),e=>nt&&e instanceof nt);var nt;const rt=De("HTMLFormElement"),it=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),st=De("RegExp"),ot=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Ye(n,((n,i)=>{!1!==t(n,i,e)&&(r[i]=n)})),Object.defineProperties(e,r)},at={DIGIT:"0123456789",ALPHA:"abcdefghijklmnopqrstuvwxyz",ALPHA_DIGIT:"abcdefghijklmnopqrstuvwxyz"+"abcdefghijklmnopqrstuvwxyz".toUpperCase()+"0123456789"};const lt=De("AsyncFunction");var ct={isArray:Be,isArrayBuffer:je,isBuffer:function(e){return null!==e&&!Fe(e)&&null!==e.constructor&&!Fe(e.constructor)&&He(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||He(e.append)&&("formdata"===(t=Me(e))||"object"===t&&He(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&je(e.buffer),t},isString:ze,isNumber:$e,isBoolean:e=>!0===e||!1===e,isObject:Ve,isPlainObject:Ge,isUndefined:Fe,isDate:We,isFile:qe,isBlob:Ke,isRegExp:st,isFunction:He,isStream:e=>Ve(e)&&He(e.pipe),isURLSearchParams:Je,isTypedArray:tt,isFileList:Xe,forEach:Ye,merge:function e(){const{caseless:t}=et(this)&&this||{},n={},r=(r,i)=>{const s=t&&Qe(n,i)||i;Ge(n[s])&&Ge(r)?n[s]=e(n[s],r):Ge(r)?n[s]=e({},r):Be(r)?n[s]=r.slice():n[s]=r};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&Ye(arguments[e],r);return n},extend:(e,t,n,{allOwnKeys:r}={})=>(Ye(t,((t,r)=>{n&&He(t)?e[r]=Pe(t,n):e[r]=t}),{allOwnKeys:r}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let i,s,o;const a={};if(t=t||{},null==e)return t;do{for(i=Object.getOwnPropertyNames(e),s=i.length;s-- >0;)o=i[s],r&&!r(o,e,t)||a[o]||(t[o]=e[o],a[o]=!0);e=!1!==n&&Le(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:Me,kindOfTest:De,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(Be(e))return e;let t=e.length;if(!$e(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:rt,hasOwnProperty:it,hasOwnProp:it,reduceDescriptors:ot,freezeMethods:e=>{ot(e,((t,n)=>{if(He(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];He(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return Be(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t),findKey:Qe,global:Ze,isContextDefined:et,ALPHABET:at,generateString:(e=16,t=at.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n},isSpecCompliantForm:function(e){return!!(e&&He(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(Ve(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const i=Be(e)?[]:{};return Ye(e,((e,t)=>{const s=n(e,r+1);!Fe(s)&&(i[t]=s)})),t[r]=void 0,i}}return e};return n(e,0)},isAsyncFn:lt,isThenable:e=>e&&(Ve(e)||He(e))&&He(e.then)&&He(e.catch)};function ut(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}ct.inherits(ut,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:ct.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const dt=ut.prototype,ht={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{ht[e]={value:e}})),Object.defineProperties(ut,ht),Object.defineProperty(dt,"isAxiosError",{value:!0}),ut.from=(e,t,n,r,i,s)=>{const o=Object.create(dt);return ct.toFlatObject(e,o,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),ut.call(o,e.message,t,n,r,i),o.cause=e,o.name=e.name,s&&Object.assign(o,s),o};var pt,ft,mt,gt=ut;ft=function(e){var t,n,r=It(e),i=r[0],s=r[1],o=new Et(function(e,t,n){return 3*(t+n)/4-n}(0,i,s)),a=0,l=s>0?i-4:i;for(n=0;n<l;n+=4)t=bt[e.charCodeAt(n)]<<18|bt[e.charCodeAt(n+1)]<<12|bt[e.charCodeAt(n+2)]<<6|bt[e.charCodeAt(n+3)],o[a++]=t>>16&255,o[a++]=t>>8&255,o[a++]=255&t;2===s&&(t=bt[e.charCodeAt(n)]<<2|bt[e.charCodeAt(n+1)]>>4,o[a++]=255&t);1===s&&(t=bt[e.charCodeAt(n)]<<10|bt[e.charCodeAt(n+1)]<<4|bt[e.charCodeAt(n+2)]>>2,o[a++]=t>>8&255,o[a++]=255&t);return o},mt=function(e){for(var t,n=e.length,r=n%3,i=[],s=16383,o=0,a=n-r;o<a;o+=s)i.push(Ct(e,o,o+s>a?a:o+s));1===r?(t=e[n-1],i.push(wt[t>>2]+wt[t<<4&63]+"==")):2===r&&(t=(e[n-2]<<8)+e[n-1],i.push(wt[t>>10]+wt[t>>4&63]+wt[t<<2&63]+"="));return i.join("")}
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */;for(var vt,yt,wt=[],bt=[],Et="undefined"!=typeof Uint8Array?Uint8Array:Array,Tt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",St=0,_t=Tt.length;St<_t;++St)wt[St]=Tt[St],bt[Tt.charCodeAt(St)]=St;function It(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");return-1===n&&(n=t),[n,n===t?0:4-n%4]}function Ct(e,t,n){for(var r,i,s=[],o=t;o<n;o+=3)r=(e[o]<<16&16711680)+(e[o+1]<<8&65280)+(255&e[o+2]),s.push(wt[(i=r)>>18&63]+wt[i>>12&63]+wt[i>>6&63]+wt[63&i]);return s.join("")}bt["-".charCodeAt(0)]=62,bt["_".charCodeAt(0)]=63,vt=function(e,t,n,r,i){var s,o,a=8*i-r-1,l=(1<<a)-1,c=l>>1,u=-7,d=n?i-1:0,h=n?-1:1,p=e[t+d];for(d+=h,s=p&(1<<-u)-1,p>>=-u,u+=a;u>0;s=256*s+e[t+d],d+=h,u-=8);for(o=s&(1<<-u)-1,s>>=-u,u+=r;u>0;o=256*o+e[t+d],d+=h,u-=8);if(0===s)s=1-c;else{if(s===l)return o?NaN:1/0*(p?-1:1);o+=Math.pow(2,r),s-=c}return(p?-1:1)*o*Math.pow(2,s-r)},yt=function(e,t,n,r,i,s){var o,a,l,c=8*s-i-1,u=(1<<c)-1,d=u>>1,h=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,p=r?0:s-1,f=r?1:-1,m=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,o=u):(o=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-o))<1&&(o--,l*=2),(t+=o+d>=1?h/l:h*Math.pow(2,1-d))*l>=2&&(o++,l/=2),o+d>=u?(a=0,o=u):o+d>=1?(a=(t*l-1)*Math.pow(2,i),o+=d):(a=t*Math.pow(2,d-1)*Math.pow(2,i),o=0));i>=8;e[n+p]=255&a,p+=f,a/=256,i-=8);for(o=o<<i|a,c+=i;c>0;e[n+p]=255&o,p+=f,o/=256,c-=8);e[n+p-f]|=128*m};const kt="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;pt=Ot;function At(e){if(e>2147483647)throw new RangeError('The value "'+e+'" is invalid for option "size"');const t=new Uint8Array(e);return Object.setPrototypeOf(t,Ot.prototype),t}function Ot(e,t,n){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return xt(e)}return Rt(e,t,n)}function Rt(e,t,n){if("string"==typeof e)return function(e,t){"string"==typeof t&&""!==t||(t="utf8");if(!Ot.isEncoding(t))throw new TypeError("Unknown encoding: "+t);const n=0|Dt(e,t);let r=At(n);const i=r.write(e,t);i!==n&&(r=r.slice(0,i));return r}(e,t);if(ArrayBuffer.isView(e))return function(e){if(gn(e,Uint8Array)){const t=new Uint8Array(e);return Mt(t.buffer,t.byteOffset,t.byteLength)}return Lt(e)}(e);if(null==e)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(gn(e,ArrayBuffer)||e&&gn(e.buffer,ArrayBuffer))return Mt(e,t,n);if("undefined"!=typeof SharedArrayBuffer&&(gn(e,SharedArrayBuffer)||e&&gn(e.buffer,SharedArrayBuffer)))return Mt(e,t,n);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');const r=e.valueOf&&e.valueOf();if(null!=r&&r!==e)return Ot.from(r,t,n);const i=function(e){if(Ot.isBuffer(e)){const t=0|Nt(e.length),n=At(t);return 0===n.length||e.copy(n,0,0,t),n}if(void 0!==e.length)return"number"!=typeof e.length||vn(e.length)?At(0):Lt(e);if("Buffer"===e.type&&Array.isArray(e.data))return Lt(e.data)}(e);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return Ot.from(e[Symbol.toPrimitive]("string"),t,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function Pt(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function xt(e){return Pt(e),At(e<0?0:0|Nt(e))}function Lt(e){const t=e.length<0?0:0|Nt(e.length),n=At(t);for(let r=0;r<t;r+=1)n[r]=255&e[r];return n}function Mt(e,t,n){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(n||0))throw new RangeError('"length" is outside of buffer bounds');let r;return r=void 0===t&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,t):new Uint8Array(e,t,n),Object.setPrototypeOf(r,Ot.prototype),r}function Nt(e){if(e>=2147483647)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+2147483647..toString(16)+" bytes");return 0|e}function Dt(e,t){if(Ot.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||gn(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);const n=e.length,r=arguments.length>2&&!0===arguments[2];if(!r&&0===n)return 0;let i=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return pn(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return fn(e).length;default:if(i)return r?-1:pn(e).length;t=(""+t).toLowerCase(),i=!0}}function Ut(e,t,n){let r=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return Jt(this,t,n);case"utf8":case"utf-8":return qt(this,t,n);case"ascii":return Kt(this,t,n);case"latin1":case"binary":return Xt(this,t,n);case"base64":return Wt(this,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Yt(this,t,n);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}function Bt(e,t,n){const r=e[t];e[t]=e[n],e[n]=r}function Ft(e,t,n,r,i){if(0===e.length)return-1;if("string"==typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),vn(n=+n)&&(n=i?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(i)return-1;n=e.length-1}else if(n<0){if(!i)return-1;n=0}if("string"==typeof t&&(t=Ot.from(t,r)),Ot.isBuffer(t))return 0===t.length?-1:jt(e,t,n,r,i);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):jt(e,[t],n,r,i);throw new TypeError("val must be string, number or Buffer")}function jt(e,t,n,r,i){let s,o=1,a=e.length,l=t.length;if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(e.length<2||t.length<2)return-1;o=2,a/=2,l/=2,n/=2}function c(e,t){return 1===o?e[t]:e.readUInt16BE(t*o)}if(i){let r=-1;for(s=n;s<a;s++)if(c(e,s)===c(t,-1===r?0:s-r)){if(-1===r&&(r=s),s-r+1===l)return r*o}else-1!==r&&(s-=s-r),r=-1}else for(n+l>a&&(n=a-l),s=n;s>=0;s--){let n=!0;for(let r=0;r<l;r++)if(c(e,s+r)!==c(t,r)){n=!1;break}if(n)return s}return-1}function zt(e,t,n,r){n=Number(n)||0;const i=e.length-n;r?(r=Number(r))>i&&(r=i):r=i;const s=t.length;let o;for(r>s/2&&(r=s/2),o=0;o<r;++o){const r=parseInt(t.substr(2*o,2),16);if(vn(r))return o;e[n+o]=r}return o}function Ht(e,t,n,r){return mn(pn(t,e.length-n),e,n,r)}function $t(e,t,n,r){return mn(function(e){const t=[];for(let n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}(t),e,n,r)}function Vt(e,t,n,r){return mn(fn(t),e,n,r)}function Gt(e,t,n,r){return mn(function(e,t){let n,r,i;const s=[];for(let o=0;o<e.length&&!((t-=2)<0);++o)n=e.charCodeAt(o),r=n>>8,i=n%256,s.push(i),s.push(r);return s}(t,e.length-n),e,n,r)}function Wt(e,t,n){return 0===t&&n===e.length?mt(e):mt(e.slice(t,n))}function qt(e,t,n){n=Math.min(e.length,n);const r=[];let i=t;for(;i<n;){const t=e[i];let s=null,o=t>239?4:t>223?3:t>191?2:1;if(i+o<=n){let n,r,a,l;switch(o){case 1:t<128&&(s=t);break;case 2:n=e[i+1],128==(192&n)&&(l=(31&t)<<6|63&n,l>127&&(s=l));break;case 3:n=e[i+1],r=e[i+2],128==(192&n)&&128==(192&r)&&(l=(15&t)<<12|(63&n)<<6|63&r,l>2047&&(l<55296||l>57343)&&(s=l));break;case 4:n=e[i+1],r=e[i+2],a=e[i+3],128==(192&n)&&128==(192&r)&&128==(192&a)&&(l=(15&t)<<18|(63&n)<<12|(63&r)<<6|63&a,l>65535&&l<1114112&&(s=l))}}null===s?(s=65533,o=1):s>65535&&(s-=65536,r.push(s>>>10&1023|55296),s=56320|1023&s),r.push(s),i+=o}return function(e){const t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e);let n="",r=0;for(;r<t;)n+=String.fromCharCode.apply(String,e.slice(r,r+=4096));return n}(r)}Ot.TYPED_ARRAY_SUPPORT=function(){try{const e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),Ot.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(Ot.prototype,"parent",{enumerable:!0,get:function(){if(Ot.isBuffer(this))return this.buffer}}),Object.defineProperty(Ot.prototype,"offset",{enumerable:!0,get:function(){if(Ot.isBuffer(this))return this.byteOffset}}),Ot.poolSize=8192,Ot.from=function(e,t,n){return Rt(e,t,n)},Object.setPrototypeOf(Ot.prototype,Uint8Array.prototype),Object.setPrototypeOf(Ot,Uint8Array),Ot.alloc=function(e,t,n){return function(e,t,n){return Pt(e),e<=0?At(e):void 0!==t?"string"==typeof n?At(e).fill(t,n):At(e).fill(t):At(e)}(e,t,n)},Ot.allocUnsafe=function(e){return xt(e)},Ot.allocUnsafeSlow=function(e){return xt(e)},Ot.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==Ot.prototype},Ot.compare=function(e,t){if(gn(e,Uint8Array)&&(e=Ot.from(e,e.offset,e.byteLength)),gn(t,Uint8Array)&&(t=Ot.from(t,t.offset,t.byteLength)),!Ot.isBuffer(e)||!Ot.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let n=e.length,r=t.length;for(let i=0,s=Math.min(n,r);i<s;++i)if(e[i]!==t[i]){n=e[i],r=t[i];break}return n<r?-1:r<n?1:0},Ot.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},Ot.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return Ot.alloc(0);let n;if(void 0===t)for(t=0,n=0;n<e.length;++n)t+=e[n].length;const r=Ot.allocUnsafe(t);let i=0;for(n=0;n<e.length;++n){let t=e[n];if(gn(t,Uint8Array))i+t.length>r.length?(Ot.isBuffer(t)||(t=Ot.from(t)),t.copy(r,i)):Uint8Array.prototype.set.call(r,t,i);else{if(!Ot.isBuffer(t))throw new TypeError('"list" argument must be an Array of Buffers');t.copy(r,i)}i+=t.length}return r},Ot.byteLength=Dt,Ot.prototype._isBuffer=!0,Ot.prototype.swap16=function(){const e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)Bt(this,t,t+1);return this},Ot.prototype.swap32=function(){const e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)Bt(this,t,t+3),Bt(this,t+1,t+2);return this},Ot.prototype.swap64=function(){const e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)Bt(this,t,t+7),Bt(this,t+1,t+6),Bt(this,t+2,t+5),Bt(this,t+3,t+4);return this},Ot.prototype.toString=function(){const e=this.length;return 0===e?"":0===arguments.length?qt(this,0,e):Ut.apply(this,arguments)},Ot.prototype.toLocaleString=Ot.prototype.toString,Ot.prototype.equals=function(e){if(!Ot.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===Ot.compare(this,e)},Ot.prototype.inspect=function(){let e="";return e=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(e+=" ... "),"<Buffer "+e+">"},kt&&(Ot.prototype[kt]=Ot.prototype.inspect),Ot.prototype.compare=function(e,t,n,r,i){if(gn(e,Uint8Array)&&(e=Ot.from(e,e.offset,e.byteLength)),!Ot.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===r&&(r=0),void 0===i&&(i=this.length),t<0||n>e.length||r<0||i>this.length)throw new RangeError("out of range index");if(r>=i&&t>=n)return 0;if(r>=i)return-1;if(t>=n)return 1;if(this===e)return 0;let s=(i>>>=0)-(r>>>=0),o=(n>>>=0)-(t>>>=0);const a=Math.min(s,o),l=this.slice(r,i),c=e.slice(t,n);for(let e=0;e<a;++e)if(l[e]!==c[e]){s=l[e],o=c[e];break}return s<o?-1:o<s?1:0},Ot.prototype.includes=function(e,t,n){return-1!==this.indexOf(e,t,n)},Ot.prototype.indexOf=function(e,t,n){return Ft(this,e,t,n,!0)},Ot.prototype.lastIndexOf=function(e,t,n){return Ft(this,e,t,n,!1)},Ot.prototype.write=function(e,t,n,r){if(void 0===t)r="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)r=t,n=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(n)?(n>>>=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}const i=this.length-t;if((void 0===n||n>i)&&(n=i),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");let s=!1;for(;;)switch(r){case"hex":return zt(this,e,t,n);case"utf8":case"utf-8":return Ht(this,e,t,n);case"ascii":case"latin1":case"binary":return $t(this,e,t,n);case"base64":return Vt(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Gt(this,e,t,n);default:if(s)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),s=!0}},Ot.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Kt(e,t,n){let r="";n=Math.min(e.length,n);for(let i=t;i<n;++i)r+=String.fromCharCode(127&e[i]);return r}function Xt(e,t,n){let r="";n=Math.min(e.length,n);for(let i=t;i<n;++i)r+=String.fromCharCode(e[i]);return r}function Jt(e,t,n){const r=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>r)&&(n=r);let i="";for(let r=t;r<n;++r)i+=yn[e[r]];return i}function Yt(e,t,n){const r=e.slice(t,n);let i="";for(let e=0;e<r.length-1;e+=2)i+=String.fromCharCode(r[e]+256*r[e+1]);return i}function Qt(e,t,n){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>n)throw new RangeError("Trying to access beyond buffer length")}function Zt(e,t,n,r,i,s){if(!Ot.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<s)throw new RangeError('"value" argument is out of bounds');if(n+r>e.length)throw new RangeError("Index out of range")}function en(e,t,n,r,i){cn(t,r,i,e,n,7);let s=Number(t&BigInt(4294967295));e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,n}function tn(e,t,n,r,i){cn(t,r,i,e,n,7);let s=Number(t&BigInt(4294967295));e[n+7]=s,s>>=8,e[n+6]=s,s>>=8,e[n+5]=s,s>>=8,e[n+4]=s;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[n+3]=o,o>>=8,e[n+2]=o,o>>=8,e[n+1]=o,o>>=8,e[n]=o,n+8}function nn(e,t,n,r,i,s){if(n+r>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function rn(e,t,n,r,i){return t=+t,n>>>=0,i||nn(e,0,n,4),yt(e,t,n,r,23,4),n+4}function sn(e,t,n,r,i){return t=+t,n>>>=0,i||nn(e,0,n,8),yt(e,t,n,r,52,8),n+8}Ot.prototype.slice=function(e,t){const n=this.length;(e=~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),(t=void 0===t?n:~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e);const r=this.subarray(e,t);return Object.setPrototypeOf(r,Ot.prototype),r},Ot.prototype.readUintLE=Ot.prototype.readUIntLE=function(e,t,n){e>>>=0,t>>>=0,n||Qt(e,t,this.length);let r=this[e],i=1,s=0;for(;++s<t&&(i*=256);)r+=this[e+s]*i;return r},Ot.prototype.readUintBE=Ot.prototype.readUIntBE=function(e,t,n){e>>>=0,t>>>=0,n||Qt(e,t,this.length);let r=this[e+--t],i=1;for(;t>0&&(i*=256);)r+=this[e+--t]*i;return r},Ot.prototype.readUint8=Ot.prototype.readUInt8=function(e,t){return e>>>=0,t||Qt(e,1,this.length),this[e]},Ot.prototype.readUint16LE=Ot.prototype.readUInt16LE=function(e,t){return e>>>=0,t||Qt(e,2,this.length),this[e]|this[e+1]<<8},Ot.prototype.readUint16BE=Ot.prototype.readUInt16BE=function(e,t){return e>>>=0,t||Qt(e,2,this.length),this[e]<<8|this[e+1]},Ot.prototype.readUint32LE=Ot.prototype.readUInt32LE=function(e,t){return e>>>=0,t||Qt(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},Ot.prototype.readUint32BE=Ot.prototype.readUInt32BE=function(e,t){return e>>>=0,t||Qt(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},Ot.prototype.readBigUInt64LE=wn((function(e){un(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||dn(e,this.length-8);const r=t+256*this[++e]+65536*this[++e]+this[++e]*2**24,i=this[++e]+256*this[++e]+65536*this[++e]+n*2**24;return BigInt(r)+(BigInt(i)<<BigInt(32))})),Ot.prototype.readBigUInt64BE=wn((function(e){un(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||dn(e,this.length-8);const r=t*2**24+65536*this[++e]+256*this[++e]+this[++e],i=this[++e]*2**24+65536*this[++e]+256*this[++e]+n;return(BigInt(r)<<BigInt(32))+BigInt(i)})),Ot.prototype.readIntLE=function(e,t,n){e>>>=0,t>>>=0,n||Qt(e,t,this.length);let r=this[e],i=1,s=0;for(;++s<t&&(i*=256);)r+=this[e+s]*i;return i*=128,r>=i&&(r-=Math.pow(2,8*t)),r},Ot.prototype.readIntBE=function(e,t,n){e>>>=0,t>>>=0,n||Qt(e,t,this.length);let r=t,i=1,s=this[e+--r];for(;r>0&&(i*=256);)s+=this[e+--r]*i;return i*=128,s>=i&&(s-=Math.pow(2,8*t)),s},Ot.prototype.readInt8=function(e,t){return e>>>=0,t||Qt(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},Ot.prototype.readInt16LE=function(e,t){e>>>=0,t||Qt(e,2,this.length);const n=this[e]|this[e+1]<<8;return 32768&n?4294901760|n:n},Ot.prototype.readInt16BE=function(e,t){e>>>=0,t||Qt(e,2,this.length);const n=this[e+1]|this[e]<<8;return 32768&n?4294901760|n:n},Ot.prototype.readInt32LE=function(e,t){return e>>>=0,t||Qt(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},Ot.prototype.readInt32BE=function(e,t){return e>>>=0,t||Qt(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},Ot.prototype.readBigInt64LE=wn((function(e){un(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||dn(e,this.length-8);const r=this[e+4]+256*this[e+5]+65536*this[e+6]+(n<<24);return(BigInt(r)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+this[++e]*2**24)})),Ot.prototype.readBigInt64BE=wn((function(e){un(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||dn(e,this.length-8);const r=(t<<24)+65536*this[++e]+256*this[++e]+this[++e];return(BigInt(r)<<BigInt(32))+BigInt(this[++e]*2**24+65536*this[++e]+256*this[++e]+n)})),Ot.prototype.readFloatLE=function(e,t){return e>>>=0,t||Qt(e,4,this.length),vt(this,e,!0,23,4)},Ot.prototype.readFloatBE=function(e,t){return e>>>=0,t||Qt(e,4,this.length),vt(this,e,!1,23,4)},Ot.prototype.readDoubleLE=function(e,t){return e>>>=0,t||Qt(e,8,this.length),vt(this,e,!0,52,8)},Ot.prototype.readDoubleBE=function(e,t){return e>>>=0,t||Qt(e,8,this.length),vt(this,e,!1,52,8)},Ot.prototype.writeUintLE=Ot.prototype.writeUIntLE=function(e,t,n,r){if(e=+e,t>>>=0,n>>>=0,!r){Zt(this,e,t,n,Math.pow(2,8*n)-1,0)}let i=1,s=0;for(this[t]=255&e;++s<n&&(i*=256);)this[t+s]=e/i&255;return t+n},Ot.prototype.writeUintBE=Ot.prototype.writeUIntBE=function(e,t,n,r){if(e=+e,t>>>=0,n>>>=0,!r){Zt(this,e,t,n,Math.pow(2,8*n)-1,0)}let i=n-1,s=1;for(this[t+i]=255&e;--i>=0&&(s*=256);)this[t+i]=e/s&255;return t+n},Ot.prototype.writeUint8=Ot.prototype.writeUInt8=function(e,t,n){return e=+e,t>>>=0,n||Zt(this,e,t,1,255,0),this[t]=255&e,t+1},Ot.prototype.writeUint16LE=Ot.prototype.writeUInt16LE=function(e,t,n){return e=+e,t>>>=0,n||Zt(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},Ot.prototype.writeUint16BE=Ot.prototype.writeUInt16BE=function(e,t,n){return e=+e,t>>>=0,n||Zt(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},Ot.prototype.writeUint32LE=Ot.prototype.writeUInt32LE=function(e,t,n){return e=+e,t>>>=0,n||Zt(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},Ot.prototype.writeUint32BE=Ot.prototype.writeUInt32BE=function(e,t,n){return e=+e,t>>>=0,n||Zt(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},Ot.prototype.writeBigUInt64LE=wn((function(e,t=0){return en(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),Ot.prototype.writeBigUInt64BE=wn((function(e,t=0){return tn(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),Ot.prototype.writeIntLE=function(e,t,n,r){if(e=+e,t>>>=0,!r){const r=Math.pow(2,8*n-1);Zt(this,e,t,n,r-1,-r)}let i=0,s=1,o=0;for(this[t]=255&e;++i<n&&(s*=256);)e<0&&0===o&&0!==this[t+i-1]&&(o=1),this[t+i]=(e/s>>0)-o&255;return t+n},Ot.prototype.writeIntBE=function(e,t,n,r){if(e=+e,t>>>=0,!r){const r=Math.pow(2,8*n-1);Zt(this,e,t,n,r-1,-r)}let i=n-1,s=1,o=0;for(this[t+i]=255&e;--i>=0&&(s*=256);)e<0&&0===o&&0!==this[t+i+1]&&(o=1),this[t+i]=(e/s>>0)-o&255;return t+n},Ot.prototype.writeInt8=function(e,t,n){return e=+e,t>>>=0,n||Zt(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},Ot.prototype.writeInt16LE=function(e,t,n){return e=+e,t>>>=0,n||Zt(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},Ot.prototype.writeInt16BE=function(e,t,n){return e=+e,t>>>=0,n||Zt(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},Ot.prototype.writeInt32LE=function(e,t,n){return e=+e,t>>>=0,n||Zt(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},Ot.prototype.writeInt32BE=function(e,t,n){return e=+e,t>>>=0,n||Zt(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},Ot.prototype.writeBigInt64LE=wn((function(e,t=0){return en(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),Ot.prototype.writeBigInt64BE=wn((function(e,t=0){return tn(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),Ot.prototype.writeFloatLE=function(e,t,n){return rn(this,e,t,!0,n)},Ot.prototype.writeFloatBE=function(e,t,n){return rn(this,e,t,!1,n)},Ot.prototype.writeDoubleLE=function(e,t,n){return sn(this,e,t,!0,n)},Ot.prototype.writeDoubleBE=function(e,t,n){return sn(this,e,t,!1,n)},Ot.prototype.copy=function(e,t,n,r){if(!Ot.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),r||0===r||(r=this.length),t>=e.length&&(t=e.length),t||(t=0),r>0&&r<n&&(r=n),r===n)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),e.length-t<r-n&&(r=e.length-t+n);const i=r-n;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,n,r):Uint8Array.prototype.set.call(e,this.subarray(n,r),t),i},Ot.prototype.fill=function(e,t,n,r){if("string"==typeof e){if("string"==typeof t?(r=t,t=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),void 0!==r&&"string"!=typeof r)throw new TypeError("encoding must be a string");if("string"==typeof r&&!Ot.isEncoding(r))throw new TypeError("Unknown encoding: "+r);if(1===e.length){const t=e.charCodeAt(0);("utf8"===r&&t<128||"latin1"===r)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;let i;if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(i=t;i<n;++i)this[i]=e;else{const s=Ot.isBuffer(e)?e:Ot.from(e,r),o=s.length;if(0===o)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(i=0;i<n-t;++i)this[i+t]=s[i%o]}return this};const on={};function an(e,t,n){on[e]=class extends n{get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}}}function ln(e){let t="",n=e.length;const r="-"===e[0]?1:0;for(;n>=r+4;n-=3)t=`_${e.slice(n-3,n)}${t}`;return`${e.slice(0,n)}${t}`}function cn(e,t,n,r,i,s){if(e>n||e<t){const r="bigint"==typeof t?"n":"";let i;throw i=s>3?0===t||t===BigInt(0)?`>= 0${r} and < 2${r} ** ${8*(s+1)}${r}`:`>= -(2${r} ** ${8*(s+1)-1}${r}) and < 2 ** ${8*(s+1)-1}${r}`:`>= ${t}${r} and <= ${n}${r}`,new on.ERR_OUT_OF_RANGE("value",i,e)}!function(e,t,n){un(t,"offset"),void 0!==e[t]&&void 0!==e[t+n]||dn(t,e.length-(n+1))}(r,i,s)}function un(e,t){if("number"!=typeof e)throw new on.ERR_INVALID_ARG_TYPE(t,"number",e)}function dn(e,t,n){if(Math.floor(e)!==e)throw un(e,n),new on.ERR_OUT_OF_RANGE(n||"offset","an integer",e);if(t<0)throw new on.ERR_BUFFER_OUT_OF_BOUNDS;throw new on.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${t}`,e)}an("ERR_BUFFER_OUT_OF_BOUNDS",(function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),an("ERR_INVALID_ARG_TYPE",(function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`}),TypeError),an("ERR_OUT_OF_RANGE",(function(e,t,n){let r=`The value of "${e}" is out of range.`,i=n;return Number.isInteger(n)&&Math.abs(n)>2**32?i=ln(String(n)):"bigint"==typeof n&&(i=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(i=ln(i)),i+="n"),r+=` It must be ${t}. Received ${i}`,r}),RangeError);const hn=/[^+/0-9A-Za-z-_]/g;function pn(e,t){let n;t=t||1/0;const r=e.length;let i=null;const s=[];for(let o=0;o<r;++o){if(n=e.charCodeAt(o),n>55295&&n<57344){if(!i){if(n>56319){(t-=3)>-1&&s.push(239,191,189);continue}if(o+1===r){(t-=3)>-1&&s.push(239,191,189);continue}i=n;continue}if(n<56320){(t-=3)>-1&&s.push(239,191,189),i=n;continue}n=65536+(i-55296<<10|n-56320)}else i&&(t-=3)>-1&&s.push(239,191,189);if(i=null,n<128){if((t-=1)<0)break;s.push(n)}else if(n<2048){if((t-=2)<0)break;s.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;s.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;s.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return s}function fn(e){return ft(function(e){if((e=(e=e.split("=")[0]).trim().replace(hn,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function mn(e,t,n,r){let i;for(i=0;i<r&&!(i+n>=t.length||i>=e.length);++i)t[i+n]=e[i];return i}function gn(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function vn(e){return e!=e}const yn=function(){const e="0123456789abcdef",t=new Array(256);for(let n=0;n<16;++n){const r=16*n;for(let i=0;i<16;++i)t[r+i]=e[n]+e[i]}return t}();function wn(e){return"undefined"==typeof BigInt?bn:e}function bn(){throw new Error("BigInt not supported")}var En=pt;function Tn(e){return ct.isPlainObject(e)||ct.isArray(e)}function Sn(e){return ct.endsWith(e,"[]")?e.slice(0,-2):e}function _n(e,t,n){return e?e.concat(t).map((function(e,t){return e=Sn(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const In=ct.toFlatObject(ct,{},null,(function(e){return/^is[A-Z]/.test(e)}));var Cn=function(e,t,n){if(!ct.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const r=(n=ct.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!ct.isUndefined(t[e])}))).metaTokens,i=n.visitor||c,s=n.dots,o=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&ct.isSpecCompliantForm(t);if(!ct.isFunction(i))throw new TypeError("visitor must be a function");function l(e){if(null===e)return"";if(ct.isDate(e))return e.toISOString();if(!a&&ct.isBlob(e))throw new gt("Blob is not supported. Use a Buffer instead.");return ct.isArrayBuffer(e)||ct.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):En.from(e):e}function c(e,n,i){let a=e;if(e&&!i&&"object"==typeof e)if(ct.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(ct.isArray(e)&&function(e){return ct.isArray(e)&&!e.some(Tn)}(e)||(ct.isFileList(e)||ct.endsWith(n,"[]"))&&(a=ct.toArray(e)))return n=Sn(n),a.forEach((function(e,r){!ct.isUndefined(e)&&null!==e&&t.append(!0===o?_n([n],r,s):null===o?n:n+"[]",l(e))})),!1;return!!Tn(e)||(t.append(_n(i,n,s),l(e)),!1)}const u=[],d=Object.assign(In,{defaultVisitor:c,convertValue:l,isVisitable:Tn});if(!ct.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!ct.isUndefined(n)){if(-1!==u.indexOf(n))throw Error("Circular reference detected in "+r.join("."));u.push(n),ct.forEach(n,(function(n,s){!0===(!(ct.isUndefined(n)||null===n)&&i.call(t,n,ct.isString(s)?s.trim():s,r,d))&&e(n,r?r.concat(s):[s])})),u.pop()}}(e),t};function kn(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function An(e,t){this._pairs=[],e&&Cn(e,this,t)}const On=An.prototype;On.append=function(e,t){this._pairs.push([e,t])},On.toString=function(e){const t=e?function(t){return e.call(this,t,kn)}:kn;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};var Rn=An;function Pn(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function xn(e,t,n){if(!t)return e;const r=n&&n.encode||Pn,i=n&&n.serialize;let s;if(s=i?i(t,n):ct.isURLSearchParams(t)?t.toString():new Rn(t,n).toString(r),s){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}var Ln=class{use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){ct.forEach(this.handlers,(function(t){null!==t&&e(t)}))}constructor(){this.handlers=[]}},Mn={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1};var Nn={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:Rn,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},isStandardBrowserEnv:(()=>{let e;return("undefined"==typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&("undefined"!=typeof window&&"undefined"!=typeof document)})(),isStandardBrowserWebWorkerEnv:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,protocols:["http","https","file","blob","url","data"]};function Dn(e,t){return Cn(e,new Nn.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return Nn.isNode&&ct.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}var Un=function(e){function t(e,n,r,i){let s=e[i++];const o=Number.isFinite(+s),a=i>=e.length;if(s=!s&&ct.isArray(r)?r.length:s,a)return ct.hasOwnProp(r,s)?r[s]=[r[s],n]:r[s]=n,!o;r[s]&&ct.isObject(r[s])||(r[s]=[]);return t(e,n,r[s],i)&&ct.isArray(r[s])&&(r[s]=function(e){const t={},n=Object.keys(e);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],t[s]=e[s];return t}(r[s])),!o}if(ct.isFormData(e)&&ct.isFunction(e.entries)){const n={};return ct.forEachEntry(e,((e,r)=>{t(function(e){return ct.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null};const Bn={"Content-Type":void 0};const Fn={transitional:Mn,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,i=ct.isObject(e);i&&ct.isHTMLForm(e)&&(e=new FormData(e));if(ct.isFormData(e))return r&&r?JSON.stringify(Un(e)):e;if(ct.isArrayBuffer(e)||ct.isBuffer(e)||ct.isStream(e)||ct.isFile(e)||ct.isBlob(e))return e;if(ct.isArrayBufferView(e))return e.buffer;if(ct.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(i){if(n.indexOf("application/x-www-form-urlencoded")>-1)return Dn(e,this.formSerializer).toString();if((s=ct.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return Cn(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return i||r?(t.setContentType("application/json",!1),function(e,t,n){if(ct.isString(e))try{return(t||JSON.parse)(e),ct.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||Fn.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(e&&ct.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(e){if(n){if("SyntaxError"===e.name)throw gt.from(e,gt.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Nn.classes.FormData,Blob:Nn.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};ct.forEach(["delete","get","head"],(function(e){Fn.headers[e]={}})),ct.forEach(["post","put","patch"],(function(e){Fn.headers[e]=ct.merge(Bn)}));var jn=Fn;const zn=ct.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var Hn=e=>{const t={};let n,r,i;return e&&e.split("\n").forEach((function(e){i=e.indexOf(":"),n=e.substring(0,i).trim().toLowerCase(),r=e.substring(i+1).trim(),!n||t[n]&&zn[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t};const $n=Symbol("internals");function Vn(e){return e&&String(e).trim().toLowerCase()}function Gn(e){return!1===e||null==e?e:ct.isArray(e)?e.map(Gn):String(e)}function Wn(e,t,n,r,i){return ct.isFunction(r)?r.call(this,t,n):(i&&(t=n),ct.isString(t)?ct.isString(r)?-1!==t.indexOf(r):ct.isRegExp(r)?r.test(t):void 0:void 0)}let qn=Symbol.iterator,Kn=Symbol.toStringTag;class Xn{set(e,t,n){const r=this;function i(e,t,n){const i=Vn(t);if(!i)throw new Error("header name must be a non-empty string");const s=ct.findKey(r,i);(!s||void 0===r[s]||!0===n||void 0===n&&!1!==r[s])&&(r[s||t]=Gn(e))}const s=(e,t)=>ct.forEach(e,((e,n)=>i(e,n,t)));return ct.isPlainObject(e)||e instanceof this.constructor?s(e,t):ct.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())?s(Hn(e),t):null!=e&&i(t,e,n),this}get(e,t){if(e=Vn(e)){const n=ct.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(ct.isFunction(t))return t.call(this,e,n);if(ct.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=Vn(e)){const n=ct.findKey(this,e);return!(!n||void 0===this[n]||t&&!Wn(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function i(e){if(e=Vn(e)){const i=ct.findKey(n,e);!i||t&&!Wn(0,n[i],i,t)||(delete n[i],r=!0)}}return ct.isArray(e)?e.forEach(i):i(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const i=t[n];e&&!Wn(0,this[i],i,e,!0)||(delete this[i],r=!0)}return r}normalize(e){const t=this,n={};return ct.forEach(this,((r,i)=>{const s=ct.findKey(n,i);if(s)return t[s]=Gn(r),void delete t[i];const o=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(i):String(i).trim();o!==i&&delete t[i],t[o]=Gn(r),n[o]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return ct.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&ct.isArray(n)?n.join(", "):n)})),t}[qn](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Kn](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[$n]=this[$n]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=Vn(e);t[r]||(!function(e,t){const n=ct.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,i){return this[r].call(this,t,e,n,i)},configurable:!0})}))}(n,e),t[r]=!0)}return ct.isArray(e)?e.forEach(r):r(e),this}constructor(e){e&&this.set(e)}}Xn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),ct.freezeMethods(Xn.prototype),ct.freezeMethods(Xn);var Jn=Xn;function Yn(e,t){const n=this||jn,r=t||n,i=Jn.from(r.headers);let s=r.data;return ct.forEach(e,(function(e){s=e.call(n,s,i.normalize(),t?t.status:void 0)})),i.normalize(),s}function Qn(e){return!(!e||!e.__CANCEL__)}function Zn(e,t,n){gt.call(this,null==e?"canceled":e,gt.ERR_CANCELED,t,n),this.name="CanceledError"}ct.inherits(Zn,gt,{__CANCEL__:!0});var er=Zn;function tr(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new gt("Request failed with status code "+n.status,[gt.ERR_BAD_REQUEST,gt.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}var nr=Nn.isStandardBrowserEnv?{write:function(e,t,n,r,i,s){const o=[];o.push(e+"="+encodeURIComponent(t)),ct.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),ct.isString(r)&&o.push("path="+r),ct.isString(i)&&o.push("domain="+i),!0===s&&o.push("secure"),document.cookie=o.join("; ")},read:function(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function rr(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function ir(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?rr(e,t):t}var sr=Nn.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function r(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=ct.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0};function or(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}var ar=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i,s=0,o=0;return t=void 0!==t?t:1e3,function(a){const l=Date.now(),c=r[o];i||(i=l),n[s]=a,r[s]=l;let u=o,d=0;for(;u!==s;)d+=n[u++],u%=e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),l-i<t)return;const h=c&&l-c;return h?Math.round(1e3*d/h):void 0}};function lr(e,t){let n=0;const r=ar(50,250);return i=>{const s=i.loaded,o=i.lengthComputable?i.total:void 0,a=s-n,l=r(a);n=s;const c={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:l||void 0,estimated:l&&o&&s<=o?(o-s)/l:void 0,event:i};c[t?"download":"upload"]=!0,e(c)}}const cr={http:null,xhr:"undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){let r=e.data;const i=Jn.from(e.headers).normalize(),s=e.responseType;let o;function a(){e.cancelToken&&e.cancelToken.unsubscribe(o),e.signal&&e.signal.removeEventListener("abort",o)}ct.isFormData(r)&&(Nn.isStandardBrowserEnv||Nn.isStandardBrowserWebWorkerEnv?i.setContentType(!1):i.setContentType("multipart/form-data;",!1));let l=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(t+":"+n))}const c=ir(e.baseURL,e.url);function u(){if(!l)return;const r=Jn.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders());tr((function(e){t(e),a()}),(function(e){n(e),a()}),{data:s&&"text"!==s&&"json"!==s?l.response:l.responseText,status:l.status,statusText:l.statusText,headers:r,config:e,request:l}),l=null}if(l.open(e.method.toUpperCase(),xn(c,e.params,e.paramsSerializer),!0),l.timeout=e.timeout,"onloadend"in l?l.onloadend=u:l.onreadystatechange=function(){l&&4===l.readyState&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))&&setTimeout(u)},l.onabort=function(){l&&(n(new gt("Request aborted",gt.ECONNABORTED,e,l)),l=null)},l.onerror=function(){n(new gt("Network Error",gt.ERR_NETWORK,e,l)),l=null},l.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const r=e.transitional||Mn;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new gt(t,r.clarifyTimeoutError?gt.ETIMEDOUT:gt.ECONNABORTED,e,l)),l=null},Nn.isStandardBrowserEnv){const t=(e.withCredentials||sr(c))&&e.xsrfCookieName&&nr.read(e.xsrfCookieName);t&&i.set(e.xsrfHeaderName,t)}void 0===r&&i.setContentType(null),"setRequestHeader"in l&&ct.forEach(i.toJSON(),(function(e,t){l.setRequestHeader(t,e)})),ct.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),s&&"json"!==s&&(l.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&l.addEventListener("progress",lr(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",lr(e.onUploadProgress)),(e.cancelToken||e.signal)&&(o=t=>{l&&(n(!t||t.type?new er(null,e,l):t),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(o),e.signal&&(e.signal.aborted?o():e.signal.addEventListener("abort",o)));const d=or(c);d&&-1===Nn.protocols.indexOf(d)?n(new gt("Unsupported protocol "+d+":",gt.ERR_BAD_REQUEST,e)):l.send(r||null)}))}};ct.forEach(cr,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}}));var ur={getAdapter:e=>{e=ct.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let i=0;i<t&&(n=e[i],!(r=ct.isString(n)?cr[n.toLowerCase()]:n));i++);if(!r){if(!1===r)throw new gt(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(ct.hasOwnProp(cr,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!ct.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:cr};function dr(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new er(null,e)}function hr(e){dr(e),e.headers=Jn.from(e.headers),e.data=Yn.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return ur.getAdapter(e.adapter||jn.adapter)(e).then((function(t){return dr(e),t.data=Yn.call(e,e.transformResponse,t),t.headers=Jn.from(t.headers),t}),(function(t){return Qn(t)||(dr(e),t&&t.response&&(t.response.data=Yn.call(e,e.transformResponse,t.response),t.response.headers=Jn.from(t.response.headers))),Promise.reject(t)}))}const pr=e=>e instanceof Jn?e.toJSON():e;function fr(e,t){t=t||{};const n={};function r(e,t,n){return ct.isPlainObject(e)&&ct.isPlainObject(t)?ct.merge.call({caseless:n},e,t):ct.isPlainObject(t)?ct.merge({},t):ct.isArray(t)?t.slice():t}function i(e,t,n){return ct.isUndefined(t)?ct.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}function s(e,t){if(!ct.isUndefined(t))return r(void 0,t)}function o(e,t){return ct.isUndefined(t)?ct.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function a(n,i,s){return s in t?r(n,i):s in e?r(void 0,n):void 0}const l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(e,t)=>i(pr(e),pr(t),!0)};return ct.forEach(Object.keys(Object.assign({},e,t)),(function(r){const s=l[r]||i,o=s(e[r],t[r],r);ct.isUndefined(o)&&s!==a||(n[r]=o)})),n}const mr={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{mr[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const gr={};mr.transitional=function(e,t,n){function r(e,t){return"[Axios v1.4.0] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,i,s)=>{if(!1===e)throw new gt(r(i," has been removed"+(t?" in "+t:"")),gt.ERR_DEPRECATED);return t&&!gr[i]&&(gr[i]=!0,console.warn(r(i," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,i,s)}};var vr={assertOptions:function(e,t,n){if("object"!=typeof e)throw new gt("options must be an object",gt.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const s=r[i],o=t[s];if(o){const t=e[s],n=void 0===t||o(t,s,e);if(!0!==n)throw new gt("option "+s+" must be "+n,gt.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new gt("Unknown option "+s,gt.ERR_BAD_OPTION)}},validators:mr};const yr=vr.validators;class wr{request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=fr(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:i}=t;let s;void 0!==n&&vr.assertOptions(n,{silentJSONParsing:yr.transitional(yr.boolean),forcedJSONParsing:yr.transitional(yr.boolean),clarifyTimeoutError:yr.transitional(yr.boolean)},!1),null!=r&&(ct.isFunction(r)?t.paramsSerializer={serialize:r}:vr.assertOptions(r,{encode:yr.function,serialize:yr.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase(),s=i&&ct.merge(i.common,i[t.method]),s&&ct.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete i[e]})),t.headers=Jn.concat(s,i);const o=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,o.unshift(e.fulfilled,e.rejected))}));const l=[];let c;this.interceptors.response.forEach((function(e){l.push(e.fulfilled,e.rejected)}));let u,d=0;if(!a){const e=[hr.bind(this),void 0];for(e.unshift.apply(e,o),e.push.apply(e,l),u=e.length,c=Promise.resolve(t);d<u;)c=c.then(e[d++],e[d++]);return c}u=o.length;let h=t;for(d=0;d<u;){const e=o[d++],t=o[d++];try{h=e(h)}catch(e){t.call(this,e);break}}try{c=hr.call(this,h)}catch(e){return Promise.reject(e)}for(d=0,u=l.length;d<u;)c=c.then(l[d++],l[d++]);return c}getUri(e){return xn(ir((e=fr(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}constructor(e){this.defaults=e,this.interceptors={request:new Ln,response:new Ln}}}ct.forEach(["delete","get","head","options"],(function(e){wr.prototype[e]=function(t,n){return this.request(fr(n||{},{method:e,url:t,data:(n||{}).data}))}})),ct.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,i){return this.request(fr(i||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}wr.prototype[e]=t(),wr.prototype[e+"Form"]=t(!0)}));var br=wr;class Er{throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new Er((function(t){e=t})),cancel:e}}constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,i){n.reason||(n.reason=new er(e,r,i),t(n.reason))}))}}var Tr=Er;const Sr={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Sr).forEach((([e,t])=>{Sr[t]=e}));var _r=Sr;const Ir=function e(t){const n=new br(t),r=Pe(br.prototype.request,n);return ct.extend(r,br.prototype,n,{allOwnKeys:!0}),ct.extend(r,n,null,{allOwnKeys:!0}),r.create=function(n){return e(fr(t,n))},r}(jn);Ir.Axios=br,Ir.CanceledError=er,Ir.CancelToken=Tr,Ir.isCancel=Qn,Ir.VERSION="1.4.0",Ir.toFormData=Cn,Ir.AxiosError=gt,Ir.Cancel=Ir.CanceledError,Ir.all=function(e){return Promise.all(e)},Ir.spread=function(e){return function(t){return e.apply(null,t)}},Ir.isAxiosError=function(e){return ct.isObject(e)&&!0===e.isAxiosError},Ir.mergeConfig=fr,Ir.AxiosHeaders=Jn,Ir.formToJSON=e=>Un(ct.isHTMLForm(e)?new FormData(e):e),Ir.HttpStatusCode=_r,Ir.default=Ir;var Cr=Ir;const{Axios:kr,AxiosError:Ar,CanceledError:Or,isCancel:Rr,CancelToken:Pr,VERSION:xr,all:Lr,Cancel:Mr,isAxiosError:Nr,spread:Dr,toFormData:Ur,AxiosHeaders:Br,HttpStatusCode:Fr,formToJSON:jr,mergeConfig:zr}=Cr,Hr=document.querySelector(".book-list");!async function(){try{const e=(await Cr.get("https://books-backend.p.goit.global/books/category-list")).data,t=e.map((e=>({name:e.list_name})));console.log(t)}catch(e){throw console.log(e),new Error("There is no such category")}}(),async function(e){try{const t=await Cr.get(`https://books-backend.p.goit.global/books/category?category=${e}`),n=t.data.map((e=>{const t=e;return{image:t.book_image,title:t.title,author:t.author,id:t._id,description:t.description,links:t.buy_links}}));console.log(n)}catch(e){throw console.log(e),new Error("There is no such category")}}("Series Books"),async function(e){try{const t=(await Cr.get(`https://books-backend.p.goit.global/books/${e}`)).data;console.log(t)}catch(e){throw console.log(e),new Error("There is no such id")}}("643282b1e85766588626a083"),async function(e){try{const t=(await Cr.get(`${e}`)).data;return console.log(t),t}catch(e){throw console.log(e),new Error("Failed to find books")}}("https://books-backend.p.goit.global/books/top-books").then((e=>{console.log(e),function(e){const t=e.map((({list_name:e,books:t})=>`<li class="bestseller-list"><h2 class="category-heading">${e}</h2><ul class="category-block">`+t.map((({author:e,book_image:t,title:n,_id:r})=>`<li class="book-card" data-author="${e}" data-bookimage="${t}" data-id="${r}" data-title="${n}"><img src="${t}" alt="${n}" class="book-image"><h2  class="book-title">${n}</h2><h3  class="book-author">${e}</h3> <button class="see-morebtn">See more</button></li>`)).join("")+"</ul></li>")).join("");Hr.insertAdjacentHTML("beforeend",t),document.querySelectorAll(".book-card .see-morebtn").forEach((e=>{e.addEventListener("click",(e=>{const t=e.currentTarget.parentElement,n={author:t.dataset.author,title:t.dataset.title,image:t.dataset.bookimage,id:t.dataset.id};localStorage.setItem("bookinfo",JSON.stringify(n))}))}))}(e)}));var $r,Vr,Gr,Wr=$r={};function qr(){throw new Error("setTimeout has not been defined")}function Kr(){throw new Error("clearTimeout has not been defined")}function Xr(e){if(Vr===setTimeout)return setTimeout(e,0);if((Vr===qr||!Vr)&&setTimeout)return Vr=setTimeout,setTimeout(e,0);try{return Vr(e,0)}catch(t){try{return Vr.call(null,e,0)}catch(t){return Vr.call(this,e,0)}}}!function(){try{Vr="function"==typeof setTimeout?setTimeout:qr}catch(e){Vr=qr}try{Gr="function"==typeof clearTimeout?clearTimeout:Kr}catch(e){Gr=Kr}}();var Jr,Yr=[],Qr=!1,Zr=-1;function ei(){Qr&&Jr&&(Qr=!1,Jr.length?Yr=Jr.concat(Yr):Zr=-1,Yr.length&&ti())}function ti(){if(!Qr){var e=Xr(ei);Qr=!0;for(var t=Yr.length;t;){for(Jr=Yr,Yr=[];++Zr<t;)Jr&&Jr[Zr].run();Zr=-1,t=Yr.length}Jr=null,Qr=!1,function(e){if(Gr===clearTimeout)return clearTimeout(e);if((Gr===Kr||!Gr)&&clearTimeout)return Gr=clearTimeout,clearTimeout(e);try{Gr(e)}catch(t){try{return Gr.call(null,e)}catch(t){return Gr.call(this,e)}}}(e)}}function ni(e,t){this.fun=e,this.array=t}function ri(){}Wr.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];Yr.push(new ni(e,t)),1!==Yr.length||Qr||Xr(ti)},ni.prototype.run=function(){this.fun.apply(null,this.array)},Wr.title="browser",Wr.browser=!0,Wr.env={},Wr.argv=[],Wr.version="",Wr.versions={},Wr.on=ri,Wr.addListener=ri,Wr.once=ri,Wr.off=ri,Wr.removeListener=ri,Wr.removeAllListeners=ri,Wr.emit=ri,Wr.prependListener=ri,Wr.prependOnceListener=ri,Wr.listeners=function(e){return[]},Wr.binding=function(e){throw new Error("process.binding is not supported")},Wr.cwd=function(){return"/"},Wr.chdir=function(e){throw new Error("process.chdir is not supported")},Wr.umask=function(){return 0};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ii=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},si={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const i=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,c=i>>2,u=(3&i)<<4|o>>4;let d=(15&o)<<2|l>>6,h=63&l;a||(h=64,s||(d=64)),r.push(n[c],n[u],n[d],n[h])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ii(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==s||null==o||null==a)throw new oi;const l=i<<2|s>>4;if(r.push(l),64!==o){const e=s<<4&240|o>>2;if(r.push(e),64!==a){const e=o<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ai=function(e){return function(e){const t=ii(e);return si.encodeByteArray(t,!0)}(e).replace(/\./g,"")},li=function(e){try{return si.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ci=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n)return n;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,ui=()=>{try{return ci()||(()=>{if(void 0===$r||void 0===$r.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&li(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},di=e=>{var t,n;return null===(n=null===(t=ui())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},hi=()=>{var e;return null===(e=ui())||void 0===e?void 0:e.config},pi=e=>{var t;return null===(t=ui())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fi{wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function mi(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function gi(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function vi(){const e=mi();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function yi(){try{return"object"==typeof indexedDB}catch(e){return!1}}class wi extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,wi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,bi.prototype.create)}}class bi{create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?function(e,t){return e.replace(Ei,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new wi(r,o,n)}constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}}const Ei=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Si(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(_i(n)&&_i(s)){if(!Si(n,s))return!1}else if(n!==s)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function _i(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ii(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Ci(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function ki(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ai(e,t){const n=new Oi(e,t);return n.subscribe.bind(n)}class Oi{next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=Ri),void 0===r.error&&(r.error=Ri),void 0===r.complete&&(r.complete=Ri);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}}function Ri(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Pi(e){return e&&e._delegate?e._delegate:e}class xi{setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Li{get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new fi;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,"[DEFAULT]"===r?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class Mi{addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Li(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}constructor(e){this.name=e,this.providers=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ni=[];var Di,Ui;(Ui=Di||(Di={}))[Ui.DEBUG=0]="DEBUG",Ui[Ui.VERBOSE=1]="VERBOSE",Ui[Ui.INFO=2]="INFO",Ui[Ui.WARN=3]="WARN",Ui[Ui.ERROR=4]="ERROR",Ui[Ui.SILENT=5]="SILENT";const Bi={debug:Di.DEBUG,verbose:Di.VERBOSE,info:Di.INFO,warn:Di.WARN,error:Di.ERROR,silent:Di.SILENT},Fi=Di.INFO,ji={[Di.DEBUG]:"log",[Di.VERBOSE]:"log",[Di.INFO]:"info",[Di.WARN]:"warn",[Di.ERROR]:"error"},zi=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=ji[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class Hi{get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Di))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Bi[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Di.DEBUG,...e),this._logHandler(this,Di.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Di.VERBOSE,...e),this._logHandler(this,Di.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Di.INFO,...e),this._logHandler(this,Di.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Di.WARN,...e),this._logHandler(this,Di.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Di.ERROR,...e),this._logHandler(this,Di.ERROR,...e)}constructor(e){this.name=e,this._logLevel=Fi,this._logHandler=zi,this._userLogHandler=null,Ni.push(this)}}let $i,Vi;const Gi=new WeakMap,Wi=new WeakMap,qi=new WeakMap,Ki=new WeakMap,Xi=new WeakMap;let Ji={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Wi.get(e);if("objectStoreNames"===t)return e.objectStoreNames||qi.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Zi(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Yi(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Vi||(Vi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(es(this),t),Zi(Gi.get(this))}:function(...t){return Zi(e.apply(es(this),t))}:function(t,...n){const r=e.call(es(this),t,...n);return qi.set(r,t.sort?t.sort():[t]),Zi(r)}}function Qi(e){return"function"==typeof e?Yi(e):(e instanceof IDBTransaction&&function(e){if(Wi.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));Wi.set(e,t)}(e),t=e,($i||($i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,Ji):e);var t}function Zi(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(Zi(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&Gi.set(t,e)})).catch((()=>{})),Xi.set(t,e),t}(e);if(Ki.has(e))return Ki.get(e);const t=Qi(e);return t!==e&&(Ki.set(e,t),Xi.set(t,e)),t}const es=e=>Xi.get(e);function ts(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=Zi(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(Zi(o.result),e.oldVersion,e.newVersion,Zi(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}const ns=["get","getKey","getAll","getAllKeys","count"],rs=["put","add","delete","clear"],is=new Map;function ss(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(is.get(t))return is.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=rs.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!ns.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return is.set(t,s),s}Ji=(e=>({...e,get:(t,n,r)=>ss(t,n)||e.get(t,n,r),has:(t,n)=>!!ss(t,n)||e.has(t,n)}))(Ji);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class os{getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}constructor(e){this.container=e}}const as=new Hi("@firebase/app"),ls={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},cs=new Map,us=new Map;function ds(e,t){try{e.container.addComponent(t)}catch(n){as.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function hs(e){const t=e.name;if(us.has(t))return as.debug(`There were multiple attempts to register component ${t}.`),!1;us.set(t,e);for(const t of cs.values())ds(t,e);return!0}function ps(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const fs=new bi("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ms{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fs.create("app-deleted",{appName:this._name})}constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new xi("app",(()=>this),"PUBLIC"))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gs(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const r=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),i=r.name;if("string"!=typeof i||!i)throw fs.create("bad-app-name",{appName:String(i)});if(n||(n=hi()),!n)throw fs.create("no-options");const s=cs.get(i);if(s){if(Si(n,s.options)&&Si(r,s.config))return s;throw fs.create("duplicate-app",{appName:i})}const o=new Mi(i);for(const e of us.values())o.addComponent(e);const a=new ms(n,r,o);return cs.set(i,a),a}function vs(e="[DEFAULT]"){const t=cs.get(e);if(!t&&"[DEFAULT]"===e&&hi())return gs();if(!t)throw fs.create("no-app",{appName:e});return t}function ys(e,t,n){var r;let i=null!==(r=ls[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void as.warn(e.join(" "))}hs(new xi(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}let ws=null;function bs(){return ws||(ws=ts("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore("firebase-heartbeat-store")}}).catch((e=>{throw fs.create("idb-open",{originalErrorMessage:e.message})}))),ws}async function Es(e,t){try{const n=(await bs()).transaction("firebase-heartbeat-store","readwrite"),r=n.objectStore("firebase-heartbeat-store");await r.put(t,Ts(e)),await n.done}catch(e){if(e instanceof wi)as.warn(e.message);else{const t=fs.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});as.warn(t.message)}}}function Ts(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=_s();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=_s(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),Cs(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Cs(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=ai(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Is(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}}function _s(){return(new Date).toISOString().substring(0,10)}class Is{async runIndexedDBEnvironmentCheck(){return!!yi()&&new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{const t=await bs();return await t.transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(Ts(e))}catch(e){if(e instanceof wi)as.warn(e.message);else{const t=fs.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});as.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Es(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Es(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function Cs(e){return ai(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ks;ks="",hs(new xi("platform-logger",(e=>new os(e)),"PRIVATE")),hs(new xi("heartbeat",(e=>new Ss(e)),"PRIVATE")),ys("@firebase/app","0.9.13",ks),ys("@firebase/app","0.9.13","esm2017"),ys("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
ys("firebase","9.23.0","app");function As(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;function Os(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Rs=Os,Ps=new bi("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),xs=new Hi("@firebase/auth");function Ls(e,...t){xs.logLevel<=Di.ERROR&&xs.error(`Auth (9.23.0): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ms(e,...t){throw Bs(e,...t)}function Ns(e,...t){return Bs(e,...t)}function Ds(e,t,n){const r=Object.assign(Object.assign({},Rs()),{[t]:n});return new bi("auth","Firebase",r).create(t,{appName:e.name})}function Us(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&Ms(e,"argument-error"),Ds(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Bs(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Ps.create(e,...t)}function Fs(e,t,...n){if(!e)throw Bs(t,...n)}function js(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Ls(t),new Error(t)}function zs(e,t){e||js(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hs(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function $s(){return"http:"===Vs()||"https:"===Vs()}function Vs(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gs(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&($s()||gi()||"connection"in navigator))||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ws{get(){return Gs()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}constructor(e,t){this.shortDelay=e,this.longDelay=t,zs(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(mi())||"object"==typeof navigator&&"ReactNative"===navigator.product}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qs(e,t){zs(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void js("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void js("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void js("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xs={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},Js=new Ws(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ys(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Qs(e,t,n,r,i={}){return Zs(e,i,(async()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const o=Ii(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),Ks.fetch()(to(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))}))}async function Zs(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Xs),t);try{const t=new no(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw ro(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw ro(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw ro(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw ro(e,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw Ds(e,a,o);Ms(e,a)}}catch(t){if(t instanceof wi)throw t;Ms(e,"network-request-failed",{message:String(t)})}}async function eo(e,t,n,r,i={}){const s=await Qs(e,t,n,r,i);return"mfaPendingCredential"in s&&Ms(e,"multi-factor-auth-required",{_serverResponse:s}),s}function to(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?qs(e.config,i):`${e.config.apiScheme}://${i}`}class no{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(Ns(this.auth,"network-request-failed"))),Js.get())}))}}function ro(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ns(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function io(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function so(e){return 1e3*Number(e)}function oo(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return Ls("JWT malformed, contained fewer than 3 sections"),null;try{const e=li(n);return e?JSON.parse(e):(Ls("Failed to decode base64 JWT payload"),null)}catch(e){return Ls("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ao(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof wi&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class lo{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{_initializeTime(){this.lastSignInTime=io(this.lastLoginAt),this.creationTime=io(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uo(e){var t;const n=e.auth,r=await e.getIdToken(),i=await ao(e,async function(e,t){return Qs(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));Fs(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=As(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(l=e.providerData,c=o,[...l.filter((e=>!c.some((t=>t.providerId===e.providerId)))),...c]);var l,c;const u=e.isAnonymous,d=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),h=!!u&&d,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new co(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(e,p)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ho{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Fs(e.idToken,"internal-error"),Fs(void 0!==e.idToken,"internal-error"),Fs(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=oo(e);return Fs(t,"internal-error"),Fs(void 0!==t.exp,"internal-error"),Fs(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return Fs(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await Zs(e,{},(async()=>{const n=Ii({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=to(e,r,"/v1/token",`key=${i}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",Ks.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new ho;return n&&(Fs("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(Fs("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(Fs("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ho,this.toJSON())}_performRefresh(){return js("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(e,t){Fs("string"==typeof e||void 0===e,"internal-error",{appName:t})}class fo{async getIdToken(e){const t=await ao(this,this.stsTokenManager.getToken(this.auth,e));return Fs(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=Pi(e),r=await n.getIdToken(t),i=oo(r);Fs(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:io(so(i.auth_time)),issuedAtTime:io(so(i.iat)),expirationTime:io(so(i.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=Pi(e);await uo(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(Fs(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new fo(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Fs(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await uo(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ao(this,async function(e,t){return Qs(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,l,c;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,d=null!==(r=t.email)&&void 0!==r?r:void 0,h=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,p=null!==(s=t.photoURL)&&void 0!==s?s:void 0,f=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,v=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:y,emailVerified:w,isAnonymous:b,providerData:E,stsTokenManager:T}=t;Fs(y&&T,e,"internal-error");const S=ho.fromJSON(this.name,T);Fs("string"==typeof y,e,"internal-error"),po(u,e.name),po(d,e.name),Fs("boolean"==typeof w,e,"internal-error"),Fs("boolean"==typeof b,e,"internal-error"),po(h,e.name),po(p,e.name),po(f,e.name),po(m,e.name),po(g,e.name),po(v,e.name);const _=new fo({uid:y,auth:e,email:d,emailVerified:w,displayName:u,isAnonymous:b,photoURL:p,phoneNumber:h,tenantId:f,stsTokenManager:S,createdAt:g,lastLoginAt:v});return E&&Array.isArray(E)&&(_.providerData=E.map((e=>Object.assign({},e)))),m&&(_._redirectEventId=m),_}static async _fromIdTokenResponse(e,t,n=!1){const r=new ho;r.updateFromServerResponse(t);const i=new fo({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await uo(i),i}constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=As(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new lo(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new co(i.createdAt||void 0,i.lastLoginAt||void 0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mo=new Map;function go(e){zs(e instanceof Function,"Expected a class definition");let t=mo.get(e);return t?(zs(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,mo.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}constructor(){this.type="NONE",this.storage={}}}vo.type="NONE";const yo=vo;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wo(e,t,n){return`firebase:${e}:${t}:${n}`}class bo{setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?fo._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new bo(go(yo),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||go(yo);const s=wo(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(s);if(t){const r=fo._fromJSON(e,t);n!==i&&(o=r),i=n;break}}catch(e){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(e){}}))),new bo(i,e,n)):new bo(i,e,n)}constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=wo(this.userKey,r.apiKey,i),this.fullPersistenceKey=wo("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Io(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(To(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ko(t))return"Blackberry";if(Ao(t))return"Webos";if(So(t))return"Safari";if((t.includes("chrome/")||_o(t))&&!t.includes("edge/"))return"Chrome";if(Co(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function To(e=mi()){return/firefox\//i.test(e)}function So(e=mi()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function _o(e=mi()){return/crios\//i.test(e)}function Io(e=mi()){return/iemobile/i.test(e)}function Co(e=mi()){return/android/i.test(e)}function ko(e=mi()){return/blackberry/i.test(e)}function Ao(e=mi()){return/webos/i.test(e)}function Oo(e=mi()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Ro(){return vi()&&10===document.documentMode}function Po(e=mi()){return Oo(e)||Co(e)||Ao(e)||ko(e)||/windows phone/i.test(e)||Io(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function xo(e,t=[]){let n;switch(e){case"Browser":n=Eo(mi());break;case"Worker":n=`${Eo(mi())}-${e}`;break;default:n=e}return`${n}/JsCore/9.23.0/${t.length?t.join(","):"FirebaseCore-web"}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lo(e,t){return Qs(e,"GET","/v2/recaptchaConfig",Ys(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(e){return void 0!==e&&void 0!==e.enterprise}class No{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some((e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Do(e){return new Promise(((t,n)=>{const r=document.createElement("script");var i,s;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=Ns("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(s=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==s?s:document).appendChild(r)}))}function Uo(e){return`__${e}${Math.floor(1e6*Math.random())}`}class Bo{async verify(e="verify",t=!1){function n(t,n,r){const i=window.grecaptcha;Mo(i)?i.enterprise.ready((()=>{i.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n("NO_RECAPTCHA")}))})):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,r)=>{(async function(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{Lo(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new No(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))})(this.auth).then((i=>{if(!t&&Mo(window.grecaptcha))n(i,e,r);else{if("undefined"==typeof window)return void r(new Error("RecaptchaVerifier is only supported in browser"));Do("https://www.google.com/recaptcha/enterprise.js?render="+i).then((()=>{n(i,e,r)})).catch((e=>{r(e)}))}})).catch((e=>{r(e)}))}))}constructor(e){this.type="recaptcha-enterprise",this.auth=Ho(e)}}async function Fo(e,t,n,r=!1){const i=new Bo(e);let s;try{s=await i.verify(n)}catch(e){s=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{n(e(t))}catch(e){r(e)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}constructor(e){this.auth=e,this.queue=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=go(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await bo.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null==o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(e){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Fs(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await uo(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Pi(e):null;return t&&Fs(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Fs(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(go(e))}))}async initializeRecaptchaConfig(){const e=await Lo(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new No(e);if(null==this.tenantId?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled){new Bo(this).verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new bi("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&go(e)||this._popupRedirectResolver;Fs(t,this,"argument-error"),this.redirectPersistenceManager=await bo.create(this,[go(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return Fs(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Fs(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xo(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){xs.logLevel<=Di.WARN&&xs.warn(`Auth (9.23.0): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $o(this),this.idTokenSubscription=new $o(this),this.beforeStateQueue=new jo(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ps,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}}function Ho(e){return Pi(e)}class $o{get next(){return Fs(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(e){this.auth=e,this.observer=null,this.addObserver=Ai((e=>this.observer=e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vo(e,t,n){const r=Ho(e);Fs(r._canInitEmulator,r,"emulator-config-failed"),Fs(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null==n?void 0:n.disableWarnings),s=Go(t),{host:o,port:a}=function(e){const t=Go(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:Wo(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Wo(t)}}}(t),l=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function Go(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Wo(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class qo{toJSON(){return js("not implemented")}_getIdTokenResponse(e){return js("not implemented")}_linkToIdToken(e,t){return js("not implemented")}_getReauthenticationResolver(e){return js("not implemented")}constructor(e,t){this.providerId=e,this.signInMethod=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ko(e,t){return Qs(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Xo(e,t){return eo(e,"POST","/v1/accounts:signInWithPassword",Ys(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jo extends qo{static _fromEmailAndPassword(e,t){return new Jo(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Jo(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(t=e._getRecaptchaConfig())||void 0===t?void 0:t.emailPasswordEnabled){const t=await Fo(e,n,"signInWithPassword");return Xo(e,t)}return Xo(e,n).catch((async t=>{if("auth/missing-recaptcha-token"===t.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const t=await Fo(e,n,"signInWithPassword");return Xo(e,t)}return Promise.reject(t)}));case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return eo(e,"POST","/v1/accounts:signInWithEmailLink",Ys(e,t))}(e,{email:this._email,oobCode:this._password});default:Ms(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Ko(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return eo(e,"POST","/v1/accounts:signInWithEmailLink",Ys(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:Ms(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yo(e,t){return eo(e,"POST","/v1/accounts:signInWithIdp",Ys(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo extends qo{static _fromParams(e){const t=new Qo(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ms("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=As(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new Qo(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){return Yo(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Yo(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Yo(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ii(t)}return e}constructor(){super(...arguments),this.pendingToken=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ea extends qo{static _fromVerification(e,t){return new ea({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new ea({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return eo(e,"POST","/v1/accounts:signInWithPhoneNumber",Ys(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await eo(e,"POST","/v1/accounts:signInWithPhoneNumber",Ys(e,t));if(n.temporaryProof)throw ro(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return eo(e,"POST","/v1/accounts:signInWithPhoneNumber",Ys(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),Zo)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new ea({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}constructor(e){super("phone","phone"),this.params=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{static parseLink(e){const t=function(e){const t=Ci(ki(e)).link,n=t?Ci(ki(t)).deep_link_id:null,r=Ci(ki(e)).deep_link_id;return(r?Ci(ki(r)).link:null)||r||n||t||e}(e);try{return new ta(t)}catch(e){return null}}constructor(e){var t,n,r,i,s,o;const a=Ci(ki(e)),l=null!==(t=a.apiKey)&&void 0!==t?t:null,c=null!==(n=a.oobCode)&&void 0!==n?n:null,u=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=a.mode)&&void 0!==r?r:null);Fs(l&&c&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=c,this.continueUrl=null!==(i=a.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class na{static credential(e,t){return Jo._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=ta.parseLink(t);return Fs(n,"argument-error"),Jo._fromEmailAndCode(e,n.code,n.tenantId)}constructor(){this.providerId=na.PROVIDER_ID}}na.PROVIDER_ID="password",na.EMAIL_PASSWORD_SIGN_IN_METHOD="password",na.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ra{setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia extends ra{addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sa extends ia{static credential(e){return Qo._fromParams({providerId:sa.PROVIDER_ID,signInMethod:sa.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sa.credentialFromTaggedObject(e)}static credentialFromError(e){return sa.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return sa.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("facebook.com")}}sa.FACEBOOK_SIGN_IN_METHOD="facebook.com",sa.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class oa extends ia{static credential(e,t){return Qo._fromParams({providerId:oa.PROVIDER_ID,signInMethod:oa.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return oa.credentialFromTaggedObject(e)}static credentialFromError(e){return oa.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return oa.credential(t,n)}catch(e){return null}}constructor(){super("google.com"),this.addScope("profile")}}oa.GOOGLE_SIGN_IN_METHOD="google.com",oa.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class aa extends ia{static credential(e){return Qo._fromParams({providerId:aa.PROVIDER_ID,signInMethod:aa.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return aa.credentialFromTaggedObject(e)}static credentialFromError(e){return aa.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return aa.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("github.com")}}aa.GITHUB_SIGN_IN_METHOD="github.com",aa.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class la extends ia{static credential(e,t){return Qo._fromParams({providerId:la.PROVIDER_ID,signInMethod:la.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return la.credentialFromTaggedObject(e)}static credentialFromError(e){return la.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return la.credential(t,n)}catch(e){return null}}constructor(){super("twitter.com")}}la.TWITTER_SIGN_IN_METHOD="twitter.com",la.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ca{static async _fromIdTokenResponse(e,t,n,r=!1){const i=await fo._fromIdTokenResponse(e,n,r),s=ua(n);return new ca({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=ua(n);return new ca({user:e,providerId:r,_tokenResponse:n,operationType:t})}constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}}function ua(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class da extends wi{static _fromErrorAndOperation(e,t,n,r){return new da(e,t,n,r)}constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,da.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}}function ha(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw da._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pa(e,t,n=!1){const r=await ao(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return ca._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function fa(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await ao(e,ha(r,i,t,e),n);Fs(s.idToken,r,"internal-error");const o=oo(s.idToken);Fs(o,r,"internal-error");const{sub:a}=o;return Fs(e.uid===a,r,"user-mismatch"),ca._forOperation(e,i,s)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&Ms(r,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ma(e,t,n=!1){const r="signIn",i=await ha(e,r,t),s=await ca._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}new WeakMap;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ga{_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(e,t){this.storageRetriever=e,this.type=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va extends ga{forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Ro()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=mi();return So(e)||Oo(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=Po(),this._shouldAllowMigration=!0}}va.type="LOCAL";const ya=va;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa extends ga{_addListener(e,t){}_removeListener(e,t){}constructor(){super((()=>window.sessionStorage),"SESSION")}}wa.type="SESSION";const ba=wa;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ea{static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Ea(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ta(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ea.receivers=[];class Sa{removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const l=Ta("",20);r.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(c),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}constructor(e){this.target=e,this.handlers=new Set}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _a(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ia(){return void 0!==_a().WorkerGlobalScope&&"function"==typeof _a().importScripts}class Ca{toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}constructor(e){this.request=e}}function ka(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function Aa(){const e=indexedDB.open("firebaseLocalStorageDb",1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase("firebaseLocalStorageDb");return new Ca(e).toPromise()}(),t(await Aa()))}))}))}async function Oa(e,t,n){const r=ka(e,!0).put({fbase_key:t,value:n});return new Ca(r).toPromise()}function Ra(e,t){const n=ka(e,!0).delete(t);return new Ca(n).toPromise()}class Pa{async _openDb(){return this.db||(this.db=await Aa()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ia()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ea._getInstance(Ia()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Sa(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Aa();return await Oa(e,"__sak","1"),await Ra(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Oa(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=ka(e,!1).get(t),r=await new Ca(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Ra(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=ka(e,!1).getAll();return new Ca(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}Pa.type="LOCAL";const xa=Pa;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Uo("rcb"),new Ws(3e4,6e4);async function La(e,t,n){var r;const i=await n.verify();try{let s;if(Fs("string"==typeof i,e,"argument-error"),Fs("recaptcha"===n.type,e,"argument-error"),s="string"==typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){Fs("enroll"===t.type,e,"internal-error");const n=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return Qs(e,"POST","/v2/accounts/mfaEnrollment:start",Ys(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{Fs("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;Fs(n,e,"missing-multi-factor-info");const o=await function(e,t){return Qs(e,"POST","/v2/accounts/mfaSignIn:start",Ys(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return Qs(e,"POST","/v1/accounts:sendVerificationCode",Ys(e,t))}(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ma{verifyPhoneNumber(e,t){return La(this.auth,e,Pi(t))}static credential(e,t){return ea._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Ma.credentialFromTaggedObject(t)}static credentialFromError(e){return Ma.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?ea._fromTokenResponse(t,n):null}constructor(e){this.providerId=Ma.PROVIDER_ID,this.auth=Ho(e)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Na(e,t){return t?go(t):(Fs(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ma.PROVIDER_ID="phone",Ma.PHONE_SIGN_IN_METHOD="phone";class Da extends qo{_getIdTokenResponse(e){return Yo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Yo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Yo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}constructor(e){super("custom","custom"),this.params=e}}function Ua(e){return ma(e.auth,new Da(e),e.bypassAuthState)}function Ba(e){const{auth:t,user:n}=e;return Fs(n,t,"internal-error"),fa(n,new Da(e),e.bypassAuthState)}async function Fa(e){const{auth:t,user:n}=e;return Fs(n,t,"internal-error"),pa(n,new Da(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ua;case"linkViaPopup":case"linkViaRedirect":return Fa;case"reauthViaPopup":case"reauthViaRedirect":return Ba;default:Ms(this.auth,"internal-error")}}resolve(e){zs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){zs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const za=new Ws(2e3,1e4);async function Ha(e,t,n){const r=Ho(e);Us(e,t,ra);const i=Na(r,n);return new $a(r,"signInViaPopup",t,i).executeNotNull()}class $a extends ja{async executeNotNull(){const e=await this.execute();return Fs(e,this.auth,"internal-error"),e}async onExecution(){zs(1===this.filter.length,"Popup operations only handle one event");const e=Ta();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(Ns(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(Ns(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,$a.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Ns(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,za.get())};e()}constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,$a.currentPopupAction&&$a.currentPopupAction.cancel(),$a.currentPopupAction=this}}$a.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Va=new Map;class Ga extends ja{async execute(){let e=Va.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=Ka(t),r=qa(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Va.set(this.auth._key(),e)}return this.bypassAuthState||Va.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}}function Wa(e,t){Va.set(e._key(),t)}function qa(e){return go(e._redirectPersistence)}function Ka(e){return wo("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xa(e,t,n=!1){const r=Ho(e),i=Na(r,t),s=new Ga(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}class Ja{registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Qa(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Qa(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(Ns(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ya(e))}saveEventToCache(e){this.cachedEventUids.add(Ya(e)),this.lastProcessedEventTime=Date.now()}constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function Ya(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Qa({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Za=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,el=/^https?/;async function tl(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return Qs(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(nl(e))return}catch(e){}Ms(e,"unauthorized-domain")}function nl(e){const t=Hs(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!el.test(n))return!1;if(Za.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rl=new Ws(3e4,6e4);function il(){const e=_a().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let sl=null;function ol(e){return sl=sl||function(e){return new Promise(((t,n)=>{var r,i,s;function o(){il(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{il(),n(Ns(e,"network-request-failed"))},timeout:rl.get()})}if(null===(i=null===(r=_a().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=_a().gapi)||void 0===s?void 0:s.load)){const t=Uo("iframefcb");return _a()[t]=()=>{gapi.load?o():n(Ns(e,"network-request-failed"))},Do(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw sl=null,e}))}(e),sl}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const al=new Ws(5e3,15e3),ll={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},cl=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ul(e){const t=e.config;Fs(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?qs(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:"9.23.0"},i=cl.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ii(r).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const dl={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class hl{close(){if(this.window)try{this.window.close()}catch(e){}}constructor(e){this.window=e,this.associatedEvent=null}}function pl(e,t,n,r=500,i=600){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},dl),{width:r.toString(),height:i.toString(),top:s,left:o}),c=mi().toLowerCase();n&&(a=_o(c)?"_blank":n),To(c)&&(t=t||"http://localhost",l.scrollbars="yes");const u=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=mi()){var t;return Oo(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",a),new hl(null);const d=window.open(t||"",a,u);Fs(d,e,"popup-blocked");try{d.focus()}catch(e){}return new hl(d)}const fl=encodeURIComponent("fac");async function ml(e,t,n,r,i,s){Fs(e.config.authDomain,e,"auth-domain-config-required"),Fs(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:"9.23.0",eventId:i};if(t instanceof ra){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",Ti(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof ia){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];const l=await e._getAppCheckToken(),c=l?`#${fl}=${encodeURIComponent(l)}`:"";return`${function({config:e}){return e.emulator?qs(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${Ii(a).slice(1)}${c}`}const gl=class{async _openPopup(e,t,n,r){var i;zs(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return pl(e,await ml(e,t,n,Hs(),r),Ta())}async _openRedirect(e,t,n,r){await this._originValidation(e);return function(e){_a().location.href=e}(await ml(e,t,n,Hs(),r)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(zs(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await ol(e),n=_a().gapi;return Fs(n,e,"internal-error"),t.open({where:document.body,url:ul(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ll,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=Ns(e,"network-request-failed"),s=_a().setTimeout((()=>{r(i)}),al.get());function o(){_a().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}(e),n=new Ja(e);return t.register("authEvent",(t=>{Fs(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),Ms(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=tl(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Po()||So()||Oo()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ba,this._completeRedirectFn=Xa,this._overrideRedirectResult=Wa}};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vl{getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Fs(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(e){this.auth=e,this.internalListeners=new Map}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const yl=pi("authIdTokenMaxAge")||300;let wl=null;var bl;bl="Browser",hs(new xi("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:s,authDomain:o}=n.options;Fs(s&&!s.includes(":"),"invalid-api-key",{appName:n.name});const a={apiKey:s,authDomain:o,clientPlatform:bl,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xo(bl)},l=new zo(n,r,i,a);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(go);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(l,t),l}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),hs(new xi("auth-internal",(e=>{const t=Ho(e.getProvider("auth").getImmediate());return new vl(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),ys("@firebase/auth","0.23.2",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(bl)),ys("@firebase/auth","0.23.2","esm2017");const El=gs({apiKey:"AIzaSyAHDsXOAjR4OFAhwMJPcax0_Fo4dmXKi8U",authDomain:"bookshelf-testpr0ject-team-js.firebaseapp.com",projectId:"bookshelf-testpr0ject-team-js",storageBucket:"bookshelf-testpr0ject-team-js.appspot.com",messagingSenderId:"595814252252",appId:"1:595814252252:web:69e1af164ae4a242f8be19"}),Tl=new oa(El),Sl=function(e=vs()){const t=ps(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=ps(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(Si(n.getOptions(),null!=t?t:{}))return e;Ms(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:gl,persistence:[xa,ya,ba]}),r=pi("authTokenSyncURL");if(r){const e=(i=r,async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>yl)return;const r=null==t?void 0:t.token;wl!==r&&(wl=r,await fetch(i,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))});!function(e,t,n){Pi(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,r){Pi(e).onIdTokenChanged(t,n,r)}(n,(t=>e(t)))}var i;const s=di("auth");return s&&Vo(n,`http://${s}`),n}(El);({}).loginBtn.addEventListener("click",(e=>{Ha(Sl,Tl).then((e=>{oa.credentialFromResult(e).accessToken,e.user})).catch((e=>{e.code,e.message,e.customData.email,oa.credentialFromError(e)}))}));
//# sourceMappingURL=index.4f3371cf.js.map
