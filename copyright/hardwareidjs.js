/**
 * HardwareIDJS v1.0.0 - Copyright (c) FixCraft, Inc, 2024 (https://fixcraft.org)
 *
 * TOS & Privacy Policy - https://vpn.fixcraft.org/privacy-policy - https://vpn.fixcraft.org/terms-conditions
 * Licensor: FixCraft, Inc.
 * Additional Use Grant: None
 * Copyright 2020-Present FixCraft, Inc.
 */

function getHWID(){
  function v4f(){
  var yo="!"
  var n=function(){return n=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},n.apply(this,arguments)};function e(n,e,t,r){return new(t||(t=Promise))((function(o,i){function a(n){try{u(r.next(n))}catch(e){i(e)}}function c(n){try{u(r.throw(n))}catch(e){i(e)}}function u(n){var e;n.done?o(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(a,c)}u((r=r.apply(n,e||[])).next())}))}function t(n,e){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(c){return function(u){return function(c){if(t)throw new TypeError("Generator is already executing.");for(;i&&(i=0,c[0]&&(a=0)),a;)try{if(t=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return a.label++,{value:c[1],done:!1};case 5:a.label++,r=c[1],c=[0];continue;case 7:c=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){a=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){a.label=c[1];break}if(6===c[0]&&a.label<o[1]){a.label=o[1],o=c;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(c);break}o[2]&&a.ops.pop(),a.trys.pop();continue}c=e.call(n,a)}catch(u){c=[6,u],r=0}finally{t=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,u])}}}function r(n,e,t){if(t||2===arguments.length)for(var r,o=0,i=e.length;o<i;o++)!r&&o in e||(r||(r=Array.prototype.slice.call(e,0,o)),r[o]=e[o]);return n.concat(r||Array.prototype.slice.call(e))}function o(n,e){return new Promise((function(t){return setTimeout(t,n,e)}))}function i(){return o(0)}function a(n){return!!n&&"function"==typeof n.then}function c(n,e){try{var t=n();a(t)?t.then((function(n){return e(!0,n)}),(function(n){return e(!1,n)})):e(!0,t)}catch(r){e(!1,r)}}function u(n,r,i){return void 0===i&&(i=16),e(this,void 0,void 0,(function(){var e,a,c,u;return t(this,(function(t){switch(t.label){case 0:e=Array(n.length),a=Date.now(),c=0,t.label=1;case 1:return c<n.length?(e[c]=r(n[c],c),(u=Date.now())>=a+i?(a=u,[4,o(0)]):[3,3]):[3,4];case 2:t.sent(),t.label=3;case 3:return++c,[3,1];case 4:return[2,e]}}))}))}function l(n){n.then(void 0,(function(){}))}function s(n){return parseInt(n)}function d(n){return parseFloat(n)}function f(n,e){return"number"==typeof n&&isNaN(n)?e:n}function m(n){return n.reduce((function(n,e){return n+(e?1:0)}),0)}function v(n,e){if(void 0===e&&(e=1),Math.abs(e)>=1)return Math.round(n/e)*e;var t=1/e;return Math.round(n*t)/t}function h(n,e){var t=n[0]>>>16,r=65535&n[0],o=n[1]>>>16,i=65535&n[1],a=e[0]>>>16,c=65535&e[0],u=e[1]>>>16,l=0,s=0,d=0,f=0;d+=(f+=i+(65535&e[1]))>>>16,f&=65535,s+=(d+=o+u)>>>16,d&=65535,l+=(s+=r+c)>>>16,s&=65535,l+=t+a,l&=65535,n[0]=l<<16|s,n[1]=d<<16|f}function p(n,e){var t=n[0]>>>16,r=65535&n[0],o=n[1]>>>16,i=65535&n[1],a=e[0]>>>16,c=65535&e[0],u=e[1]>>>16,l=65535&e[1],s=0,d=0,f=0,m=0;f+=(m+=i*l)>>>16,m&=65535,d+=(f+=o*l)>>>16,f&=65535,d+=(f+=i*u)>>>16,f&=65535,s+=(d+=r*l)>>>16,d&=65535,s+=(d+=o*u)>>>16,d&=65535,s+=(d+=i*c)>>>16,d&=65535,s+=t*l+r*u+o*c+i*a,s&=65535,n[0]=s<<16|d,n[1]=f<<16|m}function b(n,e){var t=n[0];32===(e%=64)?(n[0]=n[1],n[1]=t):e<32?(n[0]=t<<e|n[1]>>>32-e,n[1]=n[1]<<e|t>>>32-e):(e-=32,n[0]=n[1]<<e|t>>>32-e,n[1]=t<<e|n[1]>>>32-e)}function y(n,e){0!==(e%=64)&&(e<32?(n[0]=n[1]>>>32-e,n[1]=n[1]<<e):(n[0]=n[1]<<e-32,n[1]=0))}function g(n,e){n[0]^=e[0],n[1]^=e[1]}var w=[4283543511,3981806797],L=[3301882366,444984403];function k(n){var e=[0,n[0]>>>1];g(n,e),p(n,w),e[1]=n[0]>>>1,g(n,e),p(n,L),e[1]=n[0]>>>1,g(n,e)}var V=[2277735313,289559509],S=[1291169091,658871167],W=[0,5],Z=[0,1390208809],x=[0,944331445];function M(n,e){var t=function(n){for(var e=new Uint8Array(n.length),t=0;t<n.length;t++){var r=n.charCodeAt(t);if(r>127)return(new TextEncoder).encode(n);e[t]=r}return e}(n);e=e||0;var r,o=[0,t.length],i=o[1]%16,a=o[1]-i,c=[0,e],u=[0,e],l=[0,0],s=[0,0];for(r=0;r<a;r+=16)l[0]=t[r+4]|t[r+5]<<8|t[r+6]<<16|t[r+7]<<24,l[1]=t[r]|t[r+1]<<8|t[r+2]<<16|t[r+3]<<24,s[0]=t[r+12]|t[r+13]<<8|t[r+14]<<16|t[r+15]<<24,s[1]=t[r+8]|t[r+9]<<8|t[r+10]<<16|t[r+11]<<24,p(l,V),b(l,31),p(l,S),g(c,l),b(c,27),h(c,u),p(c,W),h(c,Z),p(s,S),b(s,33),p(s,V),g(u,s),b(u,31),h(u,c),p(u,W),h(u,x);l[0]=0,l[1]=0,s[0]=0,s[1]=0;var d=[0,0];switch(i){case 15:d[1]=t[r+14],y(d,48),g(s,d);case 14:d[1]=t[r+13],y(d,40),g(s,d);case 13:d[1]=t[r+12],y(d,32),g(s,d);case 12:d[1]=t[r+11],y(d,24),g(s,d);case 11:d[1]=t[r+10],y(d,16),g(s,d);case 10:d[1]=t[r+9],y(d,8),g(s,d);case 9:d[1]=t[r+8],g(s,d),p(s,S),b(s,33),p(s,V),g(u,s);case 8:d[1]=t[r+7],y(d,56),g(l,d);case 7:d[1]=t[r+6],y(d,48),g(l,d);case 6:d[1]=t[r+5],y(d,40),g(l,d);case 5:d[1]=t[r+4],y(d,32),g(l,d);case 4:d[1]=t[r+3],y(d,24),g(l,d);case 3:d[1]=t[r+2],y(d,16),g(l,d);case 2:d[1]=t[r+1],y(d,8),g(l,d);case 1:d[1]=t[r],g(l,d),p(l,V),b(l,31),p(l,S),g(c,l)}return g(c,o),g(u,o),h(c,u),h(u,c),k(c),k(u),h(c,u),h(u,c),("00000000"+(c[0]>>>0).toString(16)).slice(-8)+("00000000"+(c[1]>>>0).toString(16)).slice(-8)+("00000000"+(u[0]>>>0).toString(16)).slice(-8)+("00000000"+(u[1]>>>0).toString(16)).slice(-8)}function R(n){return"function"!=typeof n}function G(n,r,o){var i=Object.keys(n).filter((function(n){return!function(n,e){for(var t=0,r=n.length;t<r;++t)if(n[t]===e)return!0;return!1}(o,n)})),a=u(i,(function(e){return function(n,e){var t=new Promise((function(t){var r=Date.now();c(n.bind(null,e),(function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];var o=Date.now()-r;if(!n[0])return t((function(){return{error:n[1],duration:o}}));var i=n[1];if(R(i))return t((function(){return{value:i,duration:o}}));t((function(){return new Promise((function(n){var e=Date.now();c(i,(function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var i=o+Date.now()-e;if(!t[0])return n({error:t[1],duration:i});n({value:t[1],duration:i})}))}))}))}))}));return l(t),function(){return t.then((function(n){return n()}))}}(n[e],r)}));return l(a),function(){return e(this,void 0,void 0,(function(){var n,e,r,o;return t(this,(function(t){switch(t.label){case 0:return[4,a];case 1:return[4,u(t.sent(),(function(n){var e=n();return l(e),e}))];case 2:return n=t.sent(),[4,Promise.all(n)];case 3:for(e=t.sent(),r={},o=0;o<i.length;++o)r[i[o]]=e[o];return[2,r]}}))}))}}function F(n,e){var t=function(n){return R(n)?e(n):function(){var t=n();return a(t)?t.then(e):e(t)}};return function(e){var r=n(e);return a(r)?r.then(t):t(r)}}function I(){var n=window,e=navigator;return m(["MSCSSMatrix"in n,"msSetImmediate"in n,"msIndexedDB"in n,"msMaxTouchPoints"in e,"msPointerEnabled"in e])>=4}function Y(){var n=window,e=navigator;return m(["msWriteProfilerMark"in n,"MSStream"in n,"msLaunchUri"in e,"msSaveBlob"in e])>=3&&!I()}function j(){var n=window,e=navigator;return m(["webkitPersistentStorage"in e,"webkitTemporaryStorage"in e,0===e.vendor.indexOf("Google"),"webkitResolveLocalFileSystemURL"in n,"BatteryManager"in n,"webkitMediaStream"in n,"webkitSpeechGrammar"in n])>=5}function X(){var n=window,e=navigator;return m(["ApplePayError"in n,"CSSPrimitiveValue"in n,"Counter"in n,0===e.vendor.indexOf("Apple"),"getStorageUpdates"in e,"WebKitMediaKeys"in n])>=4}function P(){var n=window,e=n.HTMLElement,t=n.Document;return m(["safari"in n,!("ongestureend"in n),!("TouchEvent"in n),!("orientation"in n),e&&!("autocapitalize"in e.prototype),t&&"pointerLockElement"in t.prototype])>=4}function C(){var n,e=window;return n=e.print,!!/^function\s.*?\{\s*\[native code]\s*}$/.test(String(n))&&m(["[object WebPageNamespace]"===String(e.browser),"MicrodataExtractor"in e])>=1}function E(){var n,e,t=window;return m(["buildID"in navigator,"MozAppearance"in(null!==(e=null===(n=document.documentElement)||void 0===n?void 0:n.style)&&void 0!==e?e:{}),"onmozfullscreenchange"in t,"mozInnerScreenX"in t,"CSSMozDocumentRule"in t,"CanvasCaptureMediaStream"in t])>=4}function H(){var n=window,e=navigator,t=n.CSS,r=n.HTMLButtonElement;return m([!("getStorageUpdates"in e),r&&"popover"in r.prototype,"CSSCounterStyleRule"in n,t.supports("font-size-adjust: ex-height 0.5"),t.supports("text-transform: full-width")])>=4}function A(){var n=document;return n.fullscreenElement||n.msFullscreenElement||n.mozFullScreenElement||n.webkitFullscreenElement||null}function N(){var n=j(),e=E(),t=window,r=navigator,o="connection";return n?m([!("SharedWorker"in t),r[o]&&"ontypechange"in r[o],!("sinkId"in new window.Audio)])>=2:!!e&&m(["onorientationchange"in t,"orientation"in t,/android/i.test(navigator.appVersion)])>=2}function J(){var n=window,e=n.OfflineAudioContext||n.webkitOfflineAudioContext;if(!e)return-2;if(X()&&!P()&&!function(){var n=window;return m(["DOMRectList"in n,"RTCPeerConnectionIceEvent"in n,"SVGGeometryElement"in n,"ontransitioncancel"in n])>=3}())return-1;var t=new e(1,5e3,44100),r=t.createOscillator();r.type="triangle",r.frequency.value=1e4;var o=t.createDynamicsCompressor();o.threshold.value=-50,o.knee.value=40,o.ratio.value=12,o.attack.value=0,o.release.value=.25,r.connect(o),o.connect(t.destination),r.start(0);var i=function(n){var e=3,t=500,r=500,o=5e3,i=function(){};return[new Promise((function(c,u){var s=!1,d=0,f=0;n.oncomplete=function(n){return c(n.renderedBuffer)};var m=function(){setTimeout((function(){return u(T("timeout"))}),Math.min(r,f+o-Date.now()))},v=function(){try{var r=n.startRendering();switch(a(r)&&l(r),n.state){case"running":f=Date.now(),s&&m();break;case"suspended":document.hidden||d++,s&&d>=e?u(T("suspended")):setTimeout(v,t)}}catch(o){u(o)}};v(),i=function(){s||(s=!0,f>0&&m())}})),i]}(t),c=i[0],u=i[1],s=c.then((function(n){return function(n){for(var e=0,t=0;t<n.length;++t)e+=Math.abs(n[t]);return e}(n.getChannelData(0).subarray(4500))}),(function(n){if("timeout"===n.name||"suspended"===n.name)return-3;throw n}));return l(s),function(){return u(),s}}function T(n){var e=new Error(n);return e.name=n,e}function D(n,r,i){var a,c,u;return void 0===i&&(i=50),e(this,void 0,void 0,(function(){var e,l;return t(this,(function(t){switch(t.label){case 0:e=document,t.label=1;case 1:return e.body?[3,3]:[4,o(i)];case 2:return t.sent(),[3,1];case 3:l=e.createElement("iframe"),t.label=4;case 4:return t.trys.push([4,,10,11]),[4,new Promise((function(n,t){var o=!1,i=function(){o=!0,n()};l.onload=i,l.onerror=function(n){o=!0,t(n)};var a=l.style;a.setProperty("display","block","important"),a.position="absolute",a.top="0",a.left="0",a.visibility="hidden",r&&"srcdoc"in l?l.srcdoc=r:l.src="about:blank",e.body.appendChild(l);var c=function(){var n,e;o||("complete"===(null===(e=null===(n=l.contentWindow)||void 0===n?void 0:n.document)||void 0===e?void 0:e.readyState)?i():setTimeout(c,10))};c()}))];case 5:t.sent(),t.label=6;case 6:return(null===(c=null===(a=l.contentWindow)||void 0===a?void 0:a.document)||void 0===c?void 0:c.body)?[3,8]:[4,o(i)];case 7:return t.sent(),[3,6];case 8:return[4,n(l,l.contentWindow)];case 9:return[2,t.sent()];case 10:return null===(u=l.parentNode)||void 0===u||u.removeChild(l),[7];case 11:return[2]}}))}))}function _(n){for(var e=function(n){for(var e,t,r="Unexpected syntax '".concat(n,"'"),o=/^\s*([a-z-]*)(.*)$/i.exec(n),i=o[1]||void 0,a={},c=/([.:#][\w-]+|\[.+?\])/gi,u=function(n,e){a[n]=a[n]||[],a[n].push(e)};;){var l=c.exec(o[2]);if(!l)break;var s=l[0];switch(s[0]){case".":u("class",s.slice(1));break;case"#":u("id",s.slice(1));break;case"[":var d=/^\[([\w-]+)([~|^$*]?=("(.*?)"|([\w-]+)))?(\s+[is])?\]$/.exec(s);if(!d)throw new Error(r);u(d[1],null!==(t=null!==(e=d[4])&&void 0!==e?e:d[5])&&void 0!==t?t:"");break;default:throw new Error(r)}}return[i,a]}(n),t=e[0],r=e[1],o=document.createElement(null!=t?t:"div"),i=0,a=Object.keys(r);i<a.length;i++){var c=a[i],u=r[c].join(" ");"style"===c?z(o.style,u):o.setAttribute(c,u)}return o}function z(n,e){for(var t=0,r=e.split(";");t<r.length;t++){var o=r[t],i=/^\s*([\w-]+)\s*:\s*(.+?)(\s*!([\w-]+))?\s*$/.exec(o);if(i){var a=i[1],c=i[2],u=i[4];n.setProperty(a,c,u||"")}}}var B=["monospace","sans-serif","serif"],O=["sans-serif-thin","ARNO PRO","Agency FB","Arabic Typesetting","Arial Unicode MS","AvantGarde Bk BT","BankGothic Md BT","Batang","Bitstream Vera Sans Mono","Calibri","Century","Century Gothic","Clarendon","EUROSTILE","Franklin Gothic","Futura Bk BT","Futura Md BT","GOTHAM","Gill Sans","HELV","Haettenschweiler","Helvetica Neue","Humanst521 BT","Leelawadee","Letter Gothic","Levenim MT","Lucida Bright","Lucida Sans","Menlo","MS Mincho","MS Outlook","MS Reference Specialty","MS UI Gothic","MT Extra","MYRIAD PRO","Marlett","Meiryo UI","Microsoft Uighur","Minion Pro","Monotype Corsiva","PMingLiU","Pristina","SCRIPTINA","Segoe UI Light","Serifa","SimHei","Small Fonts","Staccato222 BT","TRAJAN PRO","Univers CE 55 Medium","Vrinda","ZWAdobeF"];function U(n){return e(this,void 0,void 0,(function(){var e,r,o,i,a,c,u;return t(this,(function(t){switch(t.label){case 0:return e=!1,i=function(){var n=document.createElement("canvas");return n.width=1,n.height=1,[n,n.getContext("2d")]}(),a=i[0],c=i[1],function(n,e){return!(!e||!n.toDataURL)}(a,c)?[3,1]:(r=o="unsupported",[3,4]);case 1:return e=function(n){return n.rect(0,0,10,10),n.rect(2,2,6,6),!n.isPointInPath(5,5,"evenodd")}(c),n?(r=o="skipped",[3,4]):[3,2];case 2:return[4,Q(a,c)];case 3:u=t.sent(),r=u[0],o=u[1],t.label=4;case 4:return[2,{winding:e,geometry:r,text:o}]}}))}))}function Q(n,r){return e(this,void 0,void 0,(function(){var e,o;return t(this,(function(t){switch(t.label){case 0:return function(n,e){n.width=240,n.height=60,e.textBaseline="alphabetic",e.fillStyle="#f60",e.fillRect(100,1,62,20),e.fillStyle="#069",e.font='11pt "Times New Roman"';var t="Cwm fjordbank gly ".concat(String.fromCharCode(55357,56835));e.fillText(t,2,15),e.fillStyle="rgba(102, 204, 0, 0.2)",e.font="18pt Arial",e.fillText(t,4,45)}(n,r),[4,i()];case 1:return t.sent(),e=K(n),o=K(n),e!==o?[2,["unstable","unstable"]]:(function(n,e){n.width=122,n.height=110,e.globalCompositeOperation="multiply";for(var t=0,r=[["#f2f",40,40],["#2ff",80,40],["#ff2",60,80]];t<r.length;t++){var o=r[t],i=o[0],a=o[1],c=o[2];e.fillStyle=i,e.beginPath(),e.arc(a,c,40,0,2*Math.PI,!0),e.closePath(),e.fill()}e.fillStyle="#f9c",e.arc(60,60,60,0,2*Math.PI,!0),e.arc(60,60,20,0,2*Math.PI,!0),e.fill("evenodd")}(n,r),[4,i()]);case 2:return t.sent(),[2,[K(n),e]]}}))}))}function K(n){return n.toDataURL()}function q(){var n=screen,e=function(n){return f(s(n),null)},t=[e(n.width),e(n.height)];return t.sort().reverse(),t}var $,nn;function en(){var n=this;return function(){if(void 0===nn){var n=function(){var e=tn();rn(e)?nn=setTimeout(n,2500):($=e,nn=void 0)};n()}}(),function(){return e(n,void 0,void 0,(function(){var n;return t(this,(function(e){switch(e.label){case 0:return rn(n=tn())?$?[2,r([],$,!0)]:A()?[4,(t=document,(t.exitFullscreen||t.msExitFullscreen||t.mozCancelFullScreen||t.webkitExitFullscreen).call(t))]:[3,2]:[3,2];case 1:e.sent(),n=tn(),e.label=2;case 2:return rn(n)||($=n),[2,n]}var t}))}))}}function tn(){var n=screen;return[f(d(n.availTop),null),f(d(n.width)-d(n.availWidth)-f(d(n.availLeft),0),null),f(d(n.height)-d(n.availHeight)-f(d(n.availTop),0),null),f(d(n.availLeft),null)]}function rn(n){for(var e=0;e<4;++e)if(n[e])return!1;return!0}function on(n){var r;return e(this,void 0,void 0,(function(){var e,a,c,u,l,s,d;return t(this,(function(t){switch(t.label){case 0:for(e=document,a=e.createElement("div"),c=new Array(n.length),u={},an(a),d=0;d<n.length;++d)"DIALOG"===(l=_(n[d])).tagName&&l.show(),an(s=e.createElement("div")),s.appendChild(l),a.appendChild(s),c[d]=l;t.label=1;case 1:return e.body?[3,3]:[4,o(50)];case 2:return t.sent(),[3,1];case 3:return e.body.appendChild(a),[4,i()];case 4:t.sent();try{for(d=0;d<n.length;++d)c[d].offsetParent||(u[n[d]]=!0)}finally{null===(r=a.parentNode)||void 0===r||r.removeChild(a)}return[2,u]}}))}))}function an(n){n.style.setProperty("visibility","hidden","important"),n.style.setProperty("display","block","important")}function cn(n){return matchMedia("(inverted-colors: ".concat(n,")")).matches}function un(n){return matchMedia("(forced-colors: ".concat(n,")")).matches}function ln(n){return matchMedia("(prefers-contrast: ".concat(n,")")).matches}function sn(n){return matchMedia("(prefers-reduced-motion: ".concat(n,")")).matches}function dn(n){return matchMedia("(prefers-reduced-transparency: ".concat(n,")")).matches}function fn(n){return matchMedia("(dynamic-range: ".concat(n,")")).matches}var mn=Math,vn=function(){return 0};var hn={default:[],apple:[{font:"-apple-system-body"}],serif:[{fontFamily:"serif"}],sans:[{fontFamily:"sans-serif"}],mono:[{fontFamily:"monospace"}],min:[{fontSize:"1px"}],system:[{fontFamily:"system-ui"}]};var pn=new Set([10752,2849,2884,2885,2886,2928,2929,2930,2931,2932,2960,2961,2962,2963,2964,2965,2966,2967,2968,2978,3024,3042,3088,3089,3106,3107,32773,32777,32777,32823,32824,32936,32937,32938,32939,32968,32969,32970,32971,3317,33170,3333,3379,3386,33901,33902,34016,34024,34076,3408,3410,3411,3412,3413,3414,3415,34467,34816,34817,34818,34819,34877,34921,34930,35660,35661,35724,35738,35739,36003,36004,36005,36347,36348,36349,37440,37441,37443,7936,7937,7938]),bn=new Set([34047,35723,36063,34852,34853,34854,34229,36392,36795,38449]),yn=["FRAGMENT_SHADER","VERTEX_SHADER"],gn=["LOW_FLOAT","MEDIUM_FLOAT","HIGH_FLOAT","LOW_INT","MEDIUM_INT","HIGH_INT"];function wn(n){if(n.webgl)return n.webgl.context;var e,t=document.createElement("canvas");t.addEventListener("webglCreateContextError",(function(){return e=void 0}));for(var r=0,o=["webgl","experimental-webgl"];r<o.length;r++){var i=o[r];try{e=t.getContext(i)}catch(a){}if(e)break}return n.webgl={context:e},e}function Ln(n,e,t){var r=n.getShaderPrecisionFormat(n[e],n[t]);return r?[r.rangeMin,r.rangeMax,r.precision]:[]}function kn(n){return Object.keys(n.__proto__).filter(Vn)}function Vn(n){return"string"==typeof n&&!n.match(/[^A-Z0-9_x]/)}function Sn(){return E()}function Wn(n){return"function"==typeof n.getParameter}var Zn={fonts:function(){var n=this;return D((function(r,o){var a=o.document;return e(n,void 0,void 0,(function(){var n,e,r,o,c,u,l,s,d,f,m;return t(this,(function(t){switch(t.label){case 0:return(n=a.body).style.fontSize="48px",(e=a.createElement("div")).style.setProperty("visibility","hidden","important"),r={},o={},c=function(n){var t=a.createElement("span"),r=t.style;return r.position="absolute",r.top="0",r.left="0",r.fontFamily=n,t.textContent="mmMwWLliI0O&1",e.appendChild(t),t},u=function(n,e){return c("'".concat(n,"',").concat(e))},l=function(){for(var n={},e=function(e){n[e]=B.map((function(n){return u(e,n)}))},t=0,r=O;t<r.length;t++){e(r[t])}return n},s=function(n){return B.some((function(e,t){return n[t].offsetWidth!==r[e]||n[t].offsetHeight!==o[e]}))},d=function(){return B.map(c)}(),f=l(),n.appendChild(e),[4,i()];case 1:for(t.sent(),m=0;m<B.length;m++)r[B[m]]=d[m].offsetWidth,o[B[m]]=d[m].offsetHeight;return[2,O.filter((function(n){return s(f[n])}))]}}))}))}))},domBlockers:function(n){var r=(void 0===n?{}:n).debug;return e(this,void 0,void 0,(function(){var n,e,o,i,a;return t(this,(function(t){switch(t.label){case 0:return X()||N()?(c=atob,n={abpIndo:["#Iklan-Melayang","#Kolom-Iklan-728","#SidebarIklan-wrapper",'[title="ALIENBOLA" i]',c("I0JveC1CYW5uZXItYWRz")],abpvn:[".quangcao","#mobileCatfish",c("LmNsb3NlLWFkcw=="),'[id^="bn_bottom_fixed_"]',"#pmadv"],adBlockFinland:[".mainostila",c("LnNwb25zb3JpdA=="),".ylamainos",c("YVtocmVmKj0iL2NsaWNrdGhyZ2guYXNwPyJd"),c("YVtocmVmXj0iaHR0cHM6Ly9hcHAucmVhZHBlYWsuY29tL2FkcyJd")],adBlockPersian:["#navbar_notice_50",".kadr",'TABLE[width="140px"]',"#divAgahi",c("YVtocmVmXj0iaHR0cDovL2cxLnYuZndtcm0ubmV0L2FkLyJd")],adBlockWarningRemoval:["#adblock-honeypot",".adblocker-root",".wp_adblock_detect",c("LmhlYWRlci1ibG9ja2VkLWFk"),c("I2FkX2Jsb2NrZXI=")],adGuardAnnoyances:[".hs-sosyal","#cookieconsentdiv",'div[class^="app_gdpr"]',".as-oil",'[data-cypress="soft-push-notification-modal"]'],adGuardBase:[".BetterJsPopOverlay",c("I2FkXzMwMFgyNTA="),c("I2Jhbm5lcmZsb2F0MjI="),c("I2NhbXBhaWduLWJhbm5lcg=="),c("I0FkLUNvbnRlbnQ=")],adGuardChinese:[c("LlppX2FkX2FfSA=="),c("YVtocmVmKj0iLmh0aGJldDM0LmNvbSJd"),"#widget-quan",c("YVtocmVmKj0iLzg0OTkyMDIwLnh5eiJd"),c("YVtocmVmKj0iLjE5NTZobC5jb20vIl0=")],adGuardFrench:["#pavePub",c("LmFkLWRlc2t0b3AtcmVjdGFuZ2xl"),".mobile_adhesion",".widgetadv",c("LmFkc19iYW4=")],adGuardGerman:['aside[data-portal-id="leaderboard"]'],adGuardJapanese:["#kauli_yad_1",c("YVtocmVmXj0iaHR0cDovL2FkMi50cmFmZmljZ2F0ZS5uZXQvIl0="),c("Ll9wb3BJbl9pbmZpbml0ZV9hZA=="),c("LmFkZ29vZ2xl"),c("Ll9faXNib29zdFJldHVybkFk")],adGuardMobile:[c("YW1wLWF1dG8tYWRz"),c("LmFtcF9hZA=="),'amp-embed[type="24smi"]',"#mgid_iframe1",c("I2FkX2ludmlld19hcmVh")],adGuardRussian:[c("YVtocmVmXj0iaHR0cHM6Ly9hZC5sZXRtZWFkcy5jb20vIl0="),c("LnJlY2xhbWE="),'div[id^="smi2adblock"]',c("ZGl2W2lkXj0iQWRGb3hfYmFubmVyXyJd"),"#psyduckpockeball"],adGuardSocial:[c("YVtocmVmXj0iLy93d3cuc3R1bWJsZXVwb24uY29tL3N1Ym1pdD91cmw9Il0="),c("YVtocmVmXj0iLy90ZWxlZ3JhbS5tZS9zaGFyZS91cmw/Il0="),".etsy-tweet","#inlineShare",".popup-social"],adGuardSpanishPortuguese:["#barraPublicidade","#Publicidade","#publiEspecial","#queTooltip",".cnt-publi"],adGuardTrackingProtection:["#qoo-counter",c("YVtocmVmXj0iaHR0cDovL2NsaWNrLmhvdGxvZy5ydS8iXQ=="),c("YVtocmVmXj0iaHR0cDovL2hpdGNvdW50ZXIucnUvdG9wL3N0YXQucGhwIl0="),c("YVtocmVmXj0iaHR0cDovL3RvcC5tYWlsLnJ1L2p1bXAiXQ=="),"#top100counter"],adGuardTurkish:["#backkapat",c("I3Jla2xhbWk="),c("YVtocmVmXj0iaHR0cDovL2Fkc2Vydi5vbnRlay5jb20udHIvIl0="),c("YVtocmVmXj0iaHR0cDovL2l6bGVuemkuY29tL2NhbXBhaWduLyJd"),c("YVtocmVmXj0iaHR0cDovL3d3dy5pbnN0YWxsYWRzLm5ldC8iXQ==")],bulgarian:[c("dGQjZnJlZW5ldF90YWJsZV9hZHM="),"#ea_intext_div",".lapni-pop-over","#xenium_hot_offers"],easyList:[".yb-floorad",c("LndpZGdldF9wb19hZHNfd2lkZ2V0"),c("LnRyYWZmaWNqdW5reS1hZA=="),".textad_headline",c("LnNwb25zb3JlZC10ZXh0LWxpbmtz")],easyListChina:[c("LmFwcGd1aWRlLXdyYXBbb25jbGljayo9ImJjZWJvcy5jb20iXQ=="),c("LmZyb250cGFnZUFkdk0="),"#taotaole","#aafoot.top_box",".cfa_popup"],easyListCookie:[".ezmob-footer",".cc-CookieWarning","[data-cookie-number]",c("LmF3LWNvb2tpZS1iYW5uZXI="),".sygnal24-gdpr-modal-wrap"],easyListCzechSlovak:["#onlajny-stickers",c("I3Jla2xhbW5pLWJveA=="),c("LnJla2xhbWEtbWVnYWJvYXJk"),".sklik",c("W2lkXj0ic2tsaWtSZWtsYW1hIl0=")],easyListDutch:[c("I2FkdmVydGVudGll"),c("I3ZpcEFkbWFya3RCYW5uZXJCbG9jaw=="),".adstekst",c("YVtocmVmXj0iaHR0cHM6Ly94bHR1YmUubmwvY2xpY2svIl0="),"#semilo-lrectangle"],easyListGermany:["#SSpotIMPopSlider",c("LnNwb25zb3JsaW5rZ3J1ZW4="),c("I3dlcmJ1bmdza3k="),c("I3Jla2xhbWUtcmVjaHRzLW1pdHRl"),c("YVtocmVmXj0iaHR0cHM6Ly9iZDc0Mi5jb20vIl0=")],easyListItaly:[c("LmJveF9hZHZfYW5udW5jaQ=="),".sb-box-pubbliredazionale",c("YVtocmVmXj0iaHR0cDovL2FmZmlsaWF6aW9uaWFkcy5zbmFpLml0LyJd"),c("YVtocmVmXj0iaHR0cHM6Ly9hZHNlcnZlci5odG1sLml0LyJd"),c("YVtocmVmXj0iaHR0cHM6Ly9hZmZpbGlhemlvbmlhZHMuc25haS5pdC8iXQ==")],easyListLithuania:[c("LnJla2xhbW9zX3RhcnBhcw=="),c("LnJla2xhbW9zX251b3JvZG9z"),c("aW1nW2FsdD0iUmVrbGFtaW5pcyBza3lkZWxpcyJd"),c("aW1nW2FsdD0iRGVkaWt1b3RpLmx0IHNlcnZlcmlhaSJd"),c("aW1nW2FsdD0iSG9zdGluZ2FzIFNlcnZlcmlhaS5sdCJd")],estonian:[c("QVtocmVmKj0iaHR0cDovL3BheTRyZXN1bHRzMjQuZXUiXQ==")],fanboyAnnoyances:["#ac-lre-player",".navigate-to-top","#subscribe_popup",".newsletter_holder","#back-top"],fanboyAntiFacebook:[".util-bar-module-firefly-visible"],fanboyEnhancedTrackers:[".open.pushModal","#issuem-leaky-paywall-articles-zero-remaining-nag","#sovrn_container",'div[class$="-hide"][zoompage-fontsize][style="display: block;"]',".BlockNag__Card"],fanboySocial:["#FollowUs","#meteored_share","#social_follow",".article-sharer",".community__social-desc"],frellwitSwedish:[c("YVtocmVmKj0iY2FzaW5vcHJvLnNlIl1bdGFyZ2V0PSJfYmxhbmsiXQ=="),c("YVtocmVmKj0iZG9rdG9yLXNlLm9uZWxpbmsubWUiXQ=="),"article.category-samarbete",c("ZGl2LmhvbGlkQWRz"),"ul.adsmodern"],greekAdBlock:[c("QVtocmVmKj0iYWRtYW4ub3RlbmV0LmdyL2NsaWNrPyJd"),c("QVtocmVmKj0iaHR0cDovL2F4aWFiYW5uZXJzLmV4b2R1cy5nci8iXQ=="),c("QVtocmVmKj0iaHR0cDovL2ludGVyYWN0aXZlLmZvcnRobmV0LmdyL2NsaWNrPyJd"),"DIV.agores300","TABLE.advright"],hungarian:["#cemp_doboz",".optimonk-iframe-container",c("LmFkX19tYWlu"),c("W2NsYXNzKj0iR29vZ2xlQWRzIl0="),"#hirdetesek_box"],iDontCareAboutCookies:['.alert-info[data-block-track*="CookieNotice"]',".ModuleTemplateCookieIndicator",".o--cookies--container","#cookies-policy-sticky","#stickyCookieBar"],icelandicAbp:[c("QVtocmVmXj0iL2ZyYW1ld29yay9yZXNvdXJjZXMvZm9ybXMvYWRzLmFzcHgiXQ==")],latvian:[c("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMjBweDsgaGVpZ2h0OiA0MHB4OyBvdmVyZmxvdzogaGlkZGVuOyBwb3NpdGlvbjogcmVsYXRpdmU7Il0="),c("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiA4OHB4OyBoZWlnaHQ6IDMxcHg7IG92ZXJmbG93OiBoaWRkZW47IHBvc2l0aW9uOiByZWxhdGl2ZTsiXQ==")],listKr:[c("YVtocmVmKj0iLy9hZC5wbGFuYnBsdXMuY28ua3IvIl0="),c("I2xpdmVyZUFkV3JhcHBlcg=="),c("YVtocmVmKj0iLy9hZHYuaW1hZHJlcC5jby5rci8iXQ=="),c("aW5zLmZhc3R2aWV3LWFk"),".revenue_unit_item.dable"],listeAr:[c("LmdlbWluaUxCMUFk"),".right-and-left-sponsers",c("YVtocmVmKj0iLmFmbGFtLmluZm8iXQ=="),c("YVtocmVmKj0iYm9vcmFxLm9yZyJd"),c("YVtocmVmKj0iZHViaXp6bGUuY29tL2FyLz91dG1fc291cmNlPSJd")],listeFr:[c("YVtocmVmXj0iaHR0cDovL3Byb21vLnZhZG9yLmNvbS8iXQ=="),c("I2FkY29udGFpbmVyX3JlY2hlcmNoZQ=="),c("YVtocmVmKj0id2Vib3JhbWEuZnIvZmNnaS1iaW4vIl0="),".site-pub-interstitiel",'div[id^="crt-"][data-criteo-id]'],officialPolish:["#ceneo-placeholder-ceneo-12",c("W2hyZWZePSJodHRwczovL2FmZi5zZW5kaHViLnBsLyJd"),c("YVtocmVmXj0iaHR0cDovL2Fkdm1hbmFnZXIudGVjaGZ1bi5wbC9yZWRpcmVjdC8iXQ=="),c("YVtocmVmXj0iaHR0cDovL3d3dy50cml6ZXIucGwvP3V0bV9zb3VyY2UiXQ=="),c("ZGl2I3NrYXBpZWNfYWQ=")],ro:[c("YVtocmVmXj0iLy9hZmZ0cmsuYWx0ZXgucm8vQ291bnRlci9DbGljayJd"),c("YVtocmVmXj0iaHR0cHM6Ly9ibGFja2ZyaWRheXNhbGVzLnJvL3Ryay9zaG9wLyJd"),c("YVtocmVmXj0iaHR0cHM6Ly9ldmVudC4ycGVyZm9ybWFudC5jb20vZXZlbnRzL2NsaWNrIl0="),c("YVtocmVmXj0iaHR0cHM6Ly9sLnByb2ZpdHNoYXJlLnJvLyJd"),'a[href^="/url/"]'],ruAd:[c("YVtocmVmKj0iLy9mZWJyYXJlLnJ1LyJd"),c("YVtocmVmKj0iLy91dGltZy5ydS8iXQ=="),c("YVtocmVmKj0iOi8vY2hpa2lkaWtpLnJ1Il0="),"#pgeldiz",".yandex-rtb-block"],thaiAds:["a[href*=macau-uta-popup]",c("I2Fkcy1nb29nbGUtbWlkZGxlX3JlY3RhbmdsZS1ncm91cA=="),c("LmFkczMwMHM="),".bumq",".img-kosana"],webAnnoyancesUltralist:["#mod-social-share-2","#social-tools",c("LmN0cGwtZnVsbGJhbm5lcg=="),".zergnet-recommend",".yt.btn-link.btn-md.btn"]},e=Object.keys(n),[4,on((a=[]).concat.apply(a,e.map((function(e){return n[e]}))))]):[2,void 0];case 1:return o=t.sent(),r&&function(n,e){for(var t="DOM blockers debug:\n```",r=0,o=Object.keys(n);r<o.length;r++){var i=o[r];t+="\n".concat(i,":");for(var a=0,c=n[i];a<c.length;a++){var u=c[a];t+="\n  ".concat(e[u]?"🚫":"➡️"," ").concat(u)}}console.log("".concat(t,"\n```"))}(n,o),(i=e.filter((function(e){var t=n[e];return m(t.map((function(n){return o[n]})))>.6*t.length}))).sort(),[2,i]}var c}))}))},fontPreferences:function(){return function(n,e){void 0===e&&(e=4e3);return D((function(t,o){var i=o.document,a=i.body,c=a.style;c.width="".concat(e,"px"),c.webkitTextSizeAdjust=c.textSizeAdjust="none",j()?a.style.zoom="".concat(1/o.devicePixelRatio):X()&&(a.style.zoom="reset");var u=i.createElement("div");return u.textContent=r([],Array(e/20<<0),!0).map((function(){return"word"})).join(" "),a.appendChild(u),n(i,a)}),'<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">')}((function(n,e){for(var t={},r={},o=0,i=Object.keys(hn);o<i.length;o++){var a=i[o],c=hn[a],u=c[0],l=void 0===u?{}:u,s=c[1],d=void 0===s?"mmMwWLliI0fiflO&1":s,f=n.createElement("span");f.textContent=d,f.style.whiteSpace="nowrap";for(var m=0,v=Object.keys(l);m<v.length;m++){var h=v[m],p=l[h];void 0!==p&&(f.style[h]=p)}t[a]=f,e.append(n.createElement("br"),f)}for(var b=0,y=Object.keys(hn);b<y.length;b++){r[a=y[b]]=t[a].getBoundingClientRect().width}return r}))},audio:function(){return X()&&H()&&C()?-4:J()},screenFrame:function(){var n=this;if(X()&&H()&&C())return function(){return Promise.resolve(void 0)};var r=en();return function(){return e(n,void 0,void 0,(function(){var n,e;return t(this,(function(t){switch(t.label){case 0:return[4,r()];case 1:return n=t.sent(),[2,[(e=function(n){return null===n?null:v(n,10)})(n[0]),e(n[1]),e(n[2]),e(n[3])]]}}))}))}},canvas:function(){return U(X()&&H()&&C())},osCpu:function(){return navigator.oscpu},languages:function(){var n,e=navigator,t=[],r=e.language||e.userLanguage||e.browserLanguage||e.systemLanguage;if(void 0!==r&&t.push([r]),Array.isArray(e.languages))j()&&m([!("MediaSettingsRange"in(n=window)),"RTCEncodedAudioFrame"in n,""+n.Intl=="[object Intl]",""+n.Reflect=="[object Reflect]"])>=3||t.push(e.languages);else if("string"==typeof e.languages){var o=e.languages;o&&t.push(o.split(","))}return t},colorDepth:function(){return window.screen.colorDepth},deviceMemory:function(){return f(d(navigator.deviceMemory),void 0)},screenResolution:function(){if(!(X()&&H()&&C()))return q()},hardwareConcurrency:function(){return f(s(navigator.hardwareConcurrency),void 0)},timezone:function(){var n,e=null===(n=window.Intl)||void 0===n?void 0:n.DateTimeFormat;if(e){var t=(new e).resolvedOptions().timeZone;if(t)return t}var r,o=(r=(new Date).getFullYear(),-Math.max(d(new Date(r,0,1).getTimezoneOffset()),d(new Date(r,6,1).getTimezoneOffset())));return"UTC".concat(o>=0?"+":"").concat(o)},sessionStorage:function(){try{return!!window.sessionStorage}catch(n){return!0}},localStorage:function(){try{return!!window.localStorage}catch(n){return!0}},indexedDB:function(){if(!I()&&!Y())try{return!!window.indexedDB}catch(n){return!0}},openDatabase:function(){return!!window.openDatabase},cpuClass:function(){return navigator.cpuClass},platform:function(){var n=navigator.platform;return"MacIntel"===n&&X()&&!P()?function(){if("iPad"===navigator.platform)return!0;var n=screen,e=n.width/n.height;return m(["MediaSource"in window,!!Element.prototype.webkitRequestFullscreen,e>.65&&e<1.53])>=2}()?"iPad":"iPhone":n},plugins:function(){var n=navigator.plugins;if(n){for(var e=[],t=0;t<n.length;++t){var r=n[t];if(r){for(var o=[],i=0;i<r.length;++i){var a=r[i];o.push({type:a.type,suffixes:a.suffixes})}e.push({name:r.name,description:r.description,mimeTypes:o})}}return e}},touchSupport:function(){var n,e=navigator,t=0;void 0!==e.maxTouchPoints?t=s(e.maxTouchPoints):void 0!==e.msMaxTouchPoints&&(t=e.msMaxTouchPoints);try{document.createEvent("TouchEvent"),n=!0}catch(r){n=!1}return{maxTouchPoints:t,touchEvent:n,touchStart:"ontouchstart"in window}},vendor:function(){return navigator.vendor||""},vendorFlavors:function(){for(var n=[],e=0,t=["chrome","safari","__crWeb","__gCrWeb","yandex","__yb","__ybro","__firefox__","__edgeTrackingPreventionStatistics","webkit","oprt","samsungAr","ucweb","UCShellJava","puffinDevice"];e<t.length;e++){var r=t[e],o=window[r];o&&"object"==typeof o&&n.push(r)}return n.sort()},cookiesEnabled:function(){var n=document;try{n.cookie="cookietest=1; SameSite=Strict;";var e=-1!==n.cookie.indexOf("cookietest=");return n.cookie="cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT",e}catch(t){return!1}},colorGamut:function(){for(var n=0,e=["rec2020","p3","srgb"];n<e.length;n++){var t=e[n];if(matchMedia("(color-gamut: ".concat(t,")")).matches)return t}},invertedColors:function(){return!!cn("inverted")||!cn("none")&&void 0},forcedColors:function(){return!!un("active")||!un("none")&&void 0},monochrome:function(){if(matchMedia("(min-monochrome: 0)").matches){for(var n=0;n<=100;++n)if(matchMedia("(max-monochrome: ".concat(n,")")).matches)return n;throw new Error("Too high value")}},contrast:function(){return ln("no-preference")?0:ln("high")||ln("more")?1:ln("low")||ln("less")?-1:ln("forced")?10:void 0},reducedMotion:function(){return!!sn("reduce")||!sn("no-preference")&&void 0},reducedTransparency:function(){return!!dn("reduce")||!dn("no-preference")&&void 0},hdr:function(){return!!fn("high")||!fn("standard")&&void 0},math:function(){var n,e=mn.acos||vn,t=mn.acosh||vn,r=mn.asin||vn,o=mn.asinh||vn,i=mn.atanh||vn,a=mn.atan||vn,c=mn.sin||vn,u=mn.sinh||vn,l=mn.cos||vn,s=mn.cosh||vn,d=mn.tan||vn,f=mn.tanh||vn,m=mn.exp||vn,v=mn.expm1||vn,h=mn.log1p||vn;return{acos:e(.12312423423423424),acosh:t(1e308),acoshPf:(n=1e154,mn.log(n+mn.sqrt(n*n-1))),asin:r(.12312423423423424),asinh:o(1),asinhPf:function(n){return mn.log(n+mn.sqrt(n*n+1))}(1),atanh:i(.5),atanhPf:function(n){return mn.log((1+n)/(1-n))/2}(.5),atan:a(.5),sin:c(-1e300),sinh:u(1),sinhPf:function(n){return mn.exp(n)-1/mn.exp(n)/2}(1),cos:l(10.000000000123),cosh:s(1),coshPf:function(n){return(mn.exp(n)+1/mn.exp(n))/2}(1),tan:d(-1e300),tanh:f(1),tanhPf:function(n){return(mn.exp(2*n)-1)/(mn.exp(2*n)+1)}(1),exp:m(1),expm1:v(1),expm1Pf:function(n){return mn.exp(n)-1}(1),log1p:h(10),log1pPf:function(n){return mn.log(1+n)}(10),powPI:function(n){return mn.pow(mn.PI,n)}(-100)}},pdfViewerEnabled:function(){return navigator.pdfViewerEnabled},architecture:function(){var n=new Float32Array(1),e=new Uint8Array(n.buffer);return n[0]=1/0,n[0]=n[0]-n[0],e[3]},applePay:function(){var n=window.ApplePaySession;if("function"!=typeof(null==n?void 0:n.canMakePayments))return-1;try{return n.canMakePayments()?1:0}catch(e){return function(n){if(n instanceof Error){if("InvalidAccessError"===n.name){if(/\bfrom\b.*\binsecure\b/i.test(n.message))return-2;if(/\bdifferent\b.*\borigin\b.*top.level\b.*\bframe\b/i.test(n.message))return-3}if("SecurityError"===n.name&&/\bthird.party iframes?.*\bnot.allowed\b/i.test(n.message))return-3}throw n}(e)}},privateClickMeasurement:function(){var n,e=document.createElement("a"),t=null!==(n=e.attributionSourceId)&&void 0!==n?n:e.attributionsourceid;return void 0===t?void 0:String(t)},audioBaseLatency:function(){if(window.AudioContext)return(new AudioContext).baseLatency},webGlBasics:function(n){var e,t,r,o,i,a,c=wn(n.cache);if(!c)return-1;if(!Wn(c))return-2;var u=Sn()?null:c.getExtension("WEBGL_debug_renderer_info");return{version:(null===(e=c.getParameter(c.VERSION))||void 0===e?void 0:e.toString())||"",vendor:(null===(t=c.getParameter(c.VENDOR))||void 0===t?void 0:t.toString())||"",vendorUnmasked:u?null===(r=c.getParameter(u.UNMASKED_VENDOR_WEBGL))||void 0===r?void 0:r.toString():"",renderer:(null===(o=c.getParameter(c.RENDERER))||void 0===o?void 0:o.toString())||"",rendererUnmasked:u?null===(i=c.getParameter(u.UNMASKED_RENDERER_WEBGL))||void 0===i?void 0:i.toString():"",shadingLanguageVersion:(null===(a=c.getParameter(c.SHADING_LANGUAGE_VERSION))||void 0===a?void 0:a.toString())||""}},webGlExtensions:function(n){var e=wn(n.cache);if(!e)return-1;if(!Wn(e))return-2;var t=e.getSupportedExtensions(),r=e.getContextAttributes(),o=[],i=[],a=[],c=[];if(r)for(var u=0,l=Object.keys(r);u<l.length;u++){var s=l[u];o.push("".concat(s,"=").concat(r[s]))}for(var d=0,f=kn(e);d<f.length;d++){var m=e[w=f[d]];i.push("".concat(w,"=").concat(m).concat(pn.has(m)?"=".concat(e.getParameter(m)):""))}if(t)for(var v=0,h=t;v<h.length;v++){var p=h[v];if(!("WEBGL_debug_renderer_info"===p&&Sn()||"WEBGL_polygon_mode"===p&&(j()||X()))){var b=e.getExtension(p);if(b)for(var y=0,g=kn(b);y<g.length;y++){var w;m=b[w=g[y]];a.push("".concat(w,"=").concat(m).concat(bn.has(m)?"=".concat(e.getParameter(m)):""))}}}for(var L=0,k=yn;L<k.length;L++)for(var V=k[L],S=0,W=gn;S<W.length;S++){var Z=W[S],x=Ln(e,V,Z);c.push("".concat(V,".").concat(Z,"=").concat(x.join(",")))}return a.sort(),i.sort(),{contextAttributes:o,parameters:i,shaderPrecisions:c,extensions:t,extensionParameters:a}}};function xn(n){var e=function(n){if(N())return.4;if(X())return!P()||H()&&C()?.3:.5;var e="value"in n.platform?n.platform.value:"";if(/^Win/.test(e))return.6;if(/^Mac/.test(e))return.5;return.7}(n),t=function(n){return v(.99+.01*n,1e-4)}(e);return{score:e,comment:"$ if upgrade to Pro: https://fpjs.dev/pro".replace(/\$/g,"".concat(t))}}function Mn(e){return JSON.stringify(e,(function(e,t){return t instanceof Error?n({name:(r=t).name,message:r.message,stack:null===(o=r.stack)||void 0===o?void 0:o.split("\n")},r):t;var r,o}),2)}function Rn(n){return M(function(n){for(var e="",t=0,r=Object.keys(n).sort();t<r.length;t++){var o=r[t],i=n[o],a="error"in i?"error":JSON.stringify(i.value);e+="".concat(e?"|":"").concat(o.replace(/([:|\\])/g,"\\$1"),":").concat(a)}return e}(n))}function Gn(n){return void 0===n&&(n=50),function(n,e){void 0===e&&(e=1/0);var t=window.requestIdleCallback;return t?new Promise((function(n){return t.call(window,(function(){return n()}),{timeout:e})})):o(Math.min(n,e))}(n,2*n)}function Fn(n,r){var o=Date.now();return{get:function(i){return e(this,void 0,void 0,(function(){var e,a,c;return t(this,(function(t){switch(t.label){case 0:return e=Date.now(),[4,n()];case 1:return a=t.sent(),c=function(n){var e;return{get visitorId(){return void 0===e&&(e=Rn(this.components)),e},set visitorId(n){e=n},confidence:xn(n),components:n,version:"4.4.0"}}(a),(r||(null==i?void 0:i.debug))&&console.log("Copy the text below to get the debug data:\n\n```\nversion: ".concat(c.version,"\nuserAgent: ").concat(navigator.userAgent,"\ntimeBetweenLoadAndGet: ").concat(e-o,"\nvisitorId: ").concat(c.visitorId,"\ncomponents: ").concat(Mn(a),"\n```")),[2,c]}}))}))}}}function In(n){return void 0===n&&(n={}),e(this,void 0,void 0,(function(){var e,r,o;return t(this,(function(t){switch(t.label){case 0:return n.monitoring,e=n.delayFallback,r=n.debug,[4,Gn(e)];case 1:return t.sent(),o=function(n){return G(Zn,n,[])}({cache:{},debug:r}),[2,Fn(o,r)]}}))}))}var Yn={load:In,hashComponents:Rn,componentsToDebugString:Mn},jn=M;
  Yn.load().then((fp) => fp.get())
	.then((result) => {
	  yo= result.visitorId;
	});
  function rpt(){
    setTimeout(function(){
    if(yo=="!"){
      rpt()
    }else{}},100)
  }
  rpt()


    return yo
  }
  function getinf(){
    infg=""

 var performance = window.performance || window.mozPerformance || window.msPerformance || window.webkitPerformance || {};

    const performanceKeys = [];
    for (var value in performance) {
      performanceKeys.push(value);
    }
    infg+=performanceKeys.sort().map((p) => p);

    const offscreen = new OffscreenCanvas(256, 256);
    const gl = offscreen.getContext("webgl");

    infg+=gl.getParameter(gl.RENDERER)
    infg+=gl.getParameter(gl.VENDOR)
    infg+=getUnmaskedInfo(gl).vendor
    infg+=getUnmaskedInfo(gl).renderer


    function getUnmaskedInfo(gl) {
      var unMaskedInfo = {
        renderer: '',
        vendor: ''
      };

      var dbgRenderInfo = gl.getExtension("WEBGL_debug_renderer_info");
      if (dbgRenderInfo != null) {
        unMaskedInfo.renderer = gl.getParameter(dbgRenderInfo.UNMASKED_RENDERER_WEBGL);
        unMaskedInfo.vendor = gl.getParameter(dbgRenderInfo.UNMASKED_VENDOR_WEBGL);
      }

      return unMaskedInfo;
    }
    return infg
  }
;(function() {
    'use strict';
  
    /** Used to determine if values are of the language type `Object`. */
    var objectTypes = {
      'function': true,
      'object': true
    };
  
    /** Used as a reference to the global object. */
    var root = (objectTypes[typeof window] && window) || this;
  
    /** Backup possible global object. */
    var oldRoot = root;
  
    /** Detect free variable `exports`. */
    var freeExports = objectTypes[typeof exports] && exports;
  
    /** Detect free variable `module`. */
    var freeModule = objectTypes[typeof module] && module && !module.nodeType && module;
  
    /** Detect free variable `global` from Node.js or Browserified code and use it as `root`. */
    var freeGlobal = freeExports && freeModule && typeof global == 'object' && global;
    if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal || freeGlobal.self === freeGlobal)) {
      root = freeGlobal;
    }
  
    /**
     * Used as the maximum length of an array-like object.
     * See the [ES6 spec](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength)
     * for more details.
     */
    var maxSafeInteger = Math.pow(2, 53) - 1;
  
    /** Regular expression to detect Opera. */
    var reOpera = /\bOpera/;
  
    /** Possible global object. */
    var thisBinding = this;
  
    /** Used for native method references. */
    var objectProto = Object.prototype;
  
    /** Used to check for own properties of an object. */
    var hasOwnProperty = objectProto.hasOwnProperty;
  
    /** Used to resolve the internal `[[Class]]` of values. */
    var toString = objectProto.toString;
  
    /*--------------------------------------------------------------------------*/
  
    /**
     * Capitalizes a string value.
     *
     * @private
     * @param {string} string The string to capitalize.
     * @returns {string} The capitalized string.
     */
    function capitalize(string) {
      string = String(string);
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  
    /**
     * A utility function to clean up the OS name.
     *
     * @private
     * @param {string} os The OS name to clean up.
     * @param {string} [pattern] A `RegExp` pattern matching the OS name.
     * @param {string} [label] A label for the OS.
     */
    function cleanupOS(os, pattern, label) {
      // Platform tokens are defined at:
      // http://msdn.microsoft.com/en-us/library/ms537503(VS.85).aspx
      // http://web.archive.org/web/20081122053950/http://msdn.microsoft.com/en-us/library/ms537503(VS.85).aspx
      var data = {
        '10.0': '10',
        '6.4':  '10 Technical Preview',
        '6.3':  '8.1',
        '6.2':  '8',
        '6.1':  'Server 2008 R2 / 7',
        '6.0':  'Server 2008 / Vista',
        '5.2':  'Server 2003 / XP 64-bit',
        '5.1':  'XP',
        '5.01': '2000 SP1',
        '5.0':  '2000',
        '4.0':  'NT',
        '4.90': 'ME'
      };
      // Detect Windows version from platform tokens.
      if (pattern && label && /^Win/i.test(os) && !/^Windows Phone /i.test(os) &&
          (data = data[/[\d.]+$/.exec(os)])) {
        os = 'Windows ' + data;
      }
      // Correct character case and cleanup string.
      os = String(os);
  
      if (pattern && label) {
        os = os.replace(RegExp(pattern, 'i'), label);
      }
  
      os = format(
        os.replace(/ ce$/i, ' CE')
          .replace(/\bhpw/i, 'web')
          .replace(/\bMacintosh\b/, 'Mac OS')
          .replace(/_PowerPC\b/i, ' OS')
          .replace(/\b(OS X) [^ \d]+/i, '$1')
          .replace(/\bMac (OS X)\b/, '$1')
          .replace(/\/(\d)/, ' $1')
          .replace(/_/g, '.')
          .replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, '')
          .replace(/\bx86\.64\b/gi, 'x86_64')
          .replace(/\b(Windows Phone) OS\b/, '$1')
          .replace(/\b(Chrome OS \w+) [\d.]+\b/, '$1')
          .split(' on ')[0]
      );
  
      return os;
    }
  
    /**
     * An iteration utility for arrays and objects.
     *
     * @private
     * @param {Array|Object} object The object to iterate over.
     * @param {Function} callback The function called per iteration.
     */
    function each(object, callback) {
      var index = -1,
          length = object ? object.length : 0;
  
      if (typeof length == 'number' && length > -1 && length <= maxSafeInteger) {
        while (++index < length) {
          callback(object[index], index, object);
        }
      } else {
        forOwn(object, callback);
      }
    }
  
    /**
     * Trim and conditionally capitalize string values.
     *
     * @private
     * @param {string} string The string to format.
     * @returns {string} The formatted string.
     */
    function format(string) {
      string = trim(string);
      return /^(?:webOS|i(?:OS|P))/.test(string)
        ? string
        : capitalize(string);
    }
  
    /**
     * Iterates over an object's own properties, executing the `callback` for each.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} callback The function executed per own property.
     */
    function forOwn(object, callback) {
      for (var key in object) {
        if (hasOwnProperty.call(object, key)) {
          callback(object[key], key, object);
        }
      }
    }
  
    /**
     * Gets the internal `[[Class]]` of a value.
     *
     * @private
     * @param {*} value The value.
     * @returns {string} The `[[Class]]`.
     */
    function getClassOf(value) {
      return value == null
        ? capitalize(value)
        : toString.call(value).slice(8, -1);
    }
  
    /**
     * Host objects can return type values that are different from their actual
     * data type. The objects we are concerned with usually return non-primitive
     * types of "object", "function", or "unknown".
     *
     * @private
     * @param {*} object The owner of the property.
     * @param {string} property The property to check.
     * @returns {boolean} Returns `true` if the property value is a non-primitive, else `false`.
     */
    function isHostType(object, property) {
      var type = object != null ? typeof object[property] : 'number';
      return !/^(?:boolean|number|string|undefined)$/.test(type) &&
        (type == 'object' ? !!object[property] : true);
    }
  
    /**
     * Prepares a string for use in a `RegExp` by making hyphens and spaces optional.
     *
     * @private
     * @param {string} string The string to qualify.
     * @returns {string} The qualified string.
     */
    function qualify(string) {
      return String(string).replace(/([ -])(?!$)/g, '$1?');
    }
  
    /**
     * A bare-bones `Array#reduce` like utility function.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} callback The function called per iteration.
     * @returns {*} The accumulated result.
     */
    function reduce(array, callback) {
      var accumulator = null;
      each(array, function(value, index) {
        accumulator = callback(accumulator, value, index, array);
      });
      return accumulator;
    }
  
    /**
     * Removes leading and trailing whitespace from a string.
     *
     * @private
     * @param {string} string The string to trim.
     * @returns {string} The trimmed string.
     */
    function trim(string) {
      return String(string).replace(/^ +| +$/g, '');
    }
  
    /*--------------------------------------------------------------------------*/
  
    /**
     * Creates a new platform object.
     *
     * @memberOf platform
     * @param {Object|string} [ua=navigator.userAgent] The user agent string or
     *  context object.
     * @returns {Object} A platform object.
     */
    function parse(ua) {
  
      /** The environment context object. */
      var context = root;
  
      /** Used to flag when a custom context is provided. */
      var isCustomContext = ua && typeof ua == 'object' && getClassOf(ua) != 'String';
  
      // Juggle arguments.
      if (isCustomContext) {
        context = ua;
        ua = null;
      }
  
      /** Browser navigator object. */
      var nav = context.navigator || {};
  
      /** Browser user agent string. */
      var userAgent = nav.userAgent || '';
  
      ua || (ua = userAgent);
  
      /** Used to flag when `thisBinding` is the [ModuleScope]. */
      var isModuleScope = isCustomContext || thisBinding == oldRoot;
  
      /** Used to detect if browser is like Chrome. */
      var likeChrome = isCustomContext
        ? !!nav.likeChrome
        : /\bChrome\b/.test(ua) && !/internal|\n/i.test(toString.toString());
  
      /** Internal `[[Class]]` value shortcuts. */
      var objectClass = 'Object',
          airRuntimeClass = isCustomContext ? objectClass : 'ScriptBridgingProxyObject',
          enviroClass = isCustomContext ? objectClass : 'Environment',
          javaClass = (isCustomContext && context.java) ? 'JavaPackage' : getClassOf(context.java),
          phantomClass = isCustomContext ? objectClass : 'RuntimeObject';
  
      /** Detect Java environments. */
      var java = /\bJava/.test(javaClass) && context.java;
  
      /** Detect Rhino. */
      var rhino = java && getClassOf(context.environment) == enviroClass;
  
      /** A character to represent alpha. */
      var alpha = java ? 'a' : '\u03b1';
  
      /** A character to represent beta. */
      var beta = java ? 'b' : '\u03b2';
  
      /** Browser document object. */
      var doc = context.document || {};
  
      /**
       * Detect Opera browser (Presto-based).
       * http://www.howtocreate.co.uk/operaStuff/operaObject.html
       * http://dev.opera.com/articles/view/opera-mini-web-content-authoring-guidelines/#operamini
       */
      var opera = context.operamini || context.opera;
  
      /** Opera `[[Class]]`. */
      var operaClass = reOpera.test(operaClass = (isCustomContext && opera) ? opera['[[Class]]'] : getClassOf(opera))
        ? operaClass
        : (opera = null);
  
      /*------------------------------------------------------------------------*/
  
      /** Temporary variable used over the script's lifetime. */
      var data;
  
      /** The CPU architecture. */
      var arch = ua;
  
      /** Platform description array. */
      var description = [];
  
      /** Platform alpha/beta indicator. */
      var prerelease = null;
  
      /** A flag to indicate that environment features should be used to resolve the platform. */
      var useFeatures = ua == userAgent;
  
      /** The browser/environment version. */
      var version = useFeatures && opera && typeof opera.version == 'function' && opera.version();
  
      /** A flag to indicate if the OS ends with "/ Version" */
      var isSpecialCasedOS;
  
      /* Detectable layout engines (order is important). */
      var layout = getLayout([
        { 'label': 'EdgeHTML', 'pattern': 'Edge' },
        'Trident',
        { 'label': 'WebKit', 'pattern': 'AppleWebKit' },
        'iCab',
        'Presto',
        'NetFront',
        'Tasman',
        'KHTML',
        'Gecko'
      ]);
  
      /* Detectable browser names (order is important). */
      var name = getName([
        'Adobe AIR',
        'Arora',
        'Avant Browser',
        'Breach',
        'Camino',
        'Electron',
        'Epiphany',
        'Fennec',
        'Flock',
        'Galeon',
        'GreenBrowser',
        'iCab',
        'Iceweasel',
        'K-Meleon',
        'Konqueror',
        'Lunascape',
        'Maxthon',
        { 'label': 'Microsoft Edge', 'pattern': '(?:Edge|Edg|EdgA|EdgiOS)' },
        'Midori',
        'Nook Browser',
        'PaleMoon',
        'PhantomJS',
        'Raven',
        'Rekonq',
        'RockMelt',
        { 'label': 'Samsung Internet', 'pattern': 'SamsungBrowser' },
        'SeaMonkey',
        { 'label': 'Silk', 'pattern': '(?:Cloud9|Silk-Accelerated)' },
        'Sleipnir',
        'SlimBrowser',
        { 'label': 'SRWare Iron', 'pattern': 'Iron' },
        'Sunrise',
        'Swiftfox',
        'Vivaldi',
        'Waterfox',
        'WebPositive',
        { 'label': 'Yandex Browser', 'pattern': 'YaBrowser' },
        { 'label': 'UC Browser', 'pattern': 'UCBrowser' },
        'Opera Mini',
        { 'label': 'Opera Mini', 'pattern': 'OPiOS' },
        'Opera',
        { 'label': 'Opera', 'pattern': 'OPR' },
        'Chromium',
        'Chrome',
        { 'label': 'Chrome', 'pattern': '(?:HeadlessChrome)' },
        { 'label': 'Chrome Mobile', 'pattern': '(?:CriOS|CrMo)' },
        { 'label': 'Firefox', 'pattern': '(?:Firefox|Minefield)' },
        { 'label': 'Firefox for iOS', 'pattern': 'FxiOS' },
        { 'label': 'IE', 'pattern': 'IEMobile' },
        { 'label': 'IE', 'pattern': 'MSIE' },
        'Safari'
      ]);
  
      /* Detectable products (order is important). */
      var product = getProduct([
        { 'label': 'BlackBerry', 'pattern': 'BB10' },
        'BlackBerry',
        { 'label': 'Galaxy S', 'pattern': 'GT-I9000' },
        { 'label': 'Galaxy S2', 'pattern': 'GT-I9100' },
        { 'label': 'Galaxy S3', 'pattern': 'GT-I9300' },
        { 'label': 'Galaxy S4', 'pattern': 'GT-I9500' },
        { 'label': 'Galaxy S5', 'pattern': 'SM-G900' },
        { 'label': 'Galaxy S6', 'pattern': 'SM-G920' },
        { 'label': 'Galaxy S6 Edge', 'pattern': 'SM-G925' },
        { 'label': 'Galaxy S7', 'pattern': 'SM-G930' },
        { 'label': 'Galaxy S7 Edge', 'pattern': 'SM-G935' },
        'Google TV',
        'Lumia',
        'iPad',
        'iPod',
        'iPhone',
        'Kindle',
        { 'label': 'Kindle Fire', 'pattern': '(?:Cloud9|Silk-Accelerated)' },
        'Nexus',
        'Nook',
        'PlayBook',
        'PlayStation Vita',
        'PlayStation',
        'TouchPad',
        'Transformer',
        { 'label': 'Wii U', 'pattern': 'WiiU' },
        'Wii',
        'Xbox One',
        { 'label': 'Xbox 360', 'pattern': 'Xbox' },
        'Xoom'
      ]);
  
      /* Detectable manufacturers. */
      var manufacturer = getManufacturer({
        'Apple': { 'iPad': 1, 'iPhone': 1, 'iPod': 1 },
        'Alcatel': {},
        'Archos': {},
        'Amazon': { 'Kindle': 1, 'Kindle Fire': 1 },
        'Asus': { 'Transformer': 1 },
        'Barnes & Noble': { 'Nook': 1 },
        'BlackBerry': { 'PlayBook': 1 },
        'Google': { 'Google TV': 1, 'Nexus': 1 },
        'HP': { 'TouchPad': 1 },
        'HTC': {},
        'Huawei': {},
        'Lenovo': {},
        'LG': {},
        'Microsoft': { 'Xbox': 1, 'Xbox One': 1 },
        'Motorola': { 'Xoom': 1 },
        'Nintendo': { 'Wii U': 1,  'Wii': 1 },
        'Nokia': { 'Lumia': 1 },
        'Oppo': {},
        'Samsung': { 'Galaxy S': 1, 'Galaxy S2': 1, 'Galaxy S3': 1, 'Galaxy S4': 1 },
        'Sony': { 'PlayStation': 1, 'PlayStation Vita': 1 },
        'Xiaomi': { 'Mi': 1, 'Redmi': 1 }
      });
  
      /* Detectable operating systems (order is important). */
      var os = getOS([
        'Windows Phone',
        'KaiOS',
        'Android',
        'CentOS',
        { 'label': 'Chrome OS', 'pattern': 'CrOS' },
        'Debian',
        { 'label': 'DragonFly BSD', 'pattern': 'DragonFly' },
        'Fedora',
        'FreeBSD',
        'Gentoo',
        'Haiku',
        'Kubuntu',
        'Linux Mint',
        'OpenBSD',
        'Red Hat',
        'SuSE',
        'Ubuntu',
        'Xubuntu',
        'Cygwin',
        'Symbian OS',
        'hpwOS',
        'webOS ',
        'webOS',
        'Tablet OS',
        'Tizen',
        'Linux',
        'Mac OS X',
        'Macintosh',
        'Mac',
        'Windows 98;',
        'Windows '
      ]);
  
      /*------------------------------------------------------------------------*/
  
      /**
       * Picks the layout engine from an array of guesses.
       *
       * @private
       * @param {Array} guesses An array of guesses.
       * @returns {null|string} The detected layout engine.
       */
      function getLayout(guesses) {
        return reduce(guesses, function(result, guess) {
          return result || RegExp('\\b' + (
            guess.pattern || qualify(guess)
          ) + '\\b', 'i').exec(ua) && (guess.label || guess);
        });
      }
  
      /**
       * Picks the manufacturer from an array of guesses.
       *
       * @private
       * @param {Array} guesses An object of guesses.
       * @returns {null|string} The detected manufacturer.
       */
      function getManufacturer(guesses) {
        return reduce(guesses, function(result, value, key) {
          // Lookup the manufacturer by product or scan the UA for the manufacturer.
          return result || (
            value[product] ||
            value[/^[a-z]+(?: +[a-z]+\b)*/i.exec(product)] ||
            RegExp('\\b' + qualify(key) + '(?:\\b|\\w*\\d)', 'i').exec(ua)
          ) && key;
        });
      }
  
      /**
       * Picks the browser name from an array of guesses.
       *
       * @private
       * @param {Array} guesses An array of guesses.
       * @returns {null|string} The detected browser name.
       */
      function getName(guesses) {
        return reduce(guesses, function(result, guess) {
          return result || RegExp('\\b' + (
            guess.pattern || qualify(guess)
          ) + '\\b', 'i').exec(ua) && (guess.label || guess);
        });
      }
  
      /**
       * Picks the OS name from an array of guesses.
       *
       * @private
       * @param {Array} guesses An array of guesses.
       * @returns {null|string} The detected OS name.
       */
      function getOS(guesses) {
        return reduce(guesses, function(result, guess) {
          var pattern = guess.pattern || qualify(guess);
          if (!result && (result =
                RegExp('\\b' + pattern + '(?:/[\\d.]+|[ \\w.]*)', 'i').exec(ua)
              )) {
            result = cleanupOS(result, pattern, guess.label || guess);
          }
          return result;
        });
      }
  
      /**
       * Picks the product name from an array of guesses.
       *
       * @private
       * @param {Array} guesses An array of guesses.
       * @returns {null|string} The detected product name.
       */
      function getProduct(guesses) {
        return reduce(guesses, function(result, guess) {
          var pattern = guess.pattern || qualify(guess);
          if (!result && (result =
                RegExp('\\b' + pattern + ' *\\d+[.\\w_]*', 'i').exec(ua) ||
                RegExp('\\b' + pattern + ' *\\w+-[\\w]*', 'i').exec(ua) ||
                RegExp('\\b' + pattern + '(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)', 'i').exec(ua)
              )) {
            // Split by forward slash and append product version if needed.
            if ((result = String((guess.label && !RegExp(pattern, 'i').test(guess.label)) ? guess.label : result).split('/'))[1] && !/[\d.]+/.test(result[0])) {
              result[0] += ' ' + result[1];
            }
            // Correct character case and cleanup string.
            guess = guess.label || guess;
            result = format(result[0]
              .replace(RegExp(pattern, 'i'), guess)
              .replace(RegExp('; *(?:' + guess + '[_-])?', 'i'), ' ')
              .replace(RegExp('(' + guess + ')[-_.]?(\\w)', 'i'), '$1 $2'));
          }
          return result;
        });
      }
  
      /**
       * Resolves the version using an array of UA patterns.
       *
       * @private
       * @param {Array} patterns An array of UA patterns.
       * @returns {null|string} The detected version.
       */
      function getVersion(patterns) {
        return reduce(patterns, function(result, pattern) {
          return result || (RegExp(pattern +
            '(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)', 'i').exec(ua) || 0)[1] || null;
        });
      }
  
      /**
       * Returns `platform.description` when the platform object is coerced to a string.
       *
       * @name toString
       * @memberOf platform
       * @returns {string} Returns `platform.description` if available, else an empty string.
       */
      function toStringPlatform() {
        return this.description || '';
      }
  
      /*------------------------------------------------------------------------*/
  
      // Convert layout to an array so we can add extra details.
      layout && (layout = [layout]);
  
      // Detect Android products.
      // Browsers on Android devices typically provide their product IDS after "Android;"
      // up to "Build" or ") AppleWebKit".
      // Example:
      // "Mozilla/5.0 (Linux; Android 8.1.0; Moto G (5) Plus) AppleWebKit/537.36
      // (KHTML, like Gecko) Chrome/70.0.3538.80 Mobile Safari/537.36"
      if (/\bAndroid\b/.test(os) && !product &&
          (data = /\bAndroid[^;]*;(.*?)(?:Build|\) AppleWebKit)\b/i.exec(ua))) {
        product = trim(data[1])
          // Replace any language codes (eg. "en-US").
          .replace(/^[a-z]{2}-[a-z]{2};\s*/i, '')
          || null;
      }
      // Detect product names that contain their manufacturer's name.
      if (manufacturer && !product) {
        product = getProduct([manufacturer]);
      } else if (manufacturer && product) {
        product = product
          .replace(RegExp('^(' + qualify(manufacturer) + ')[-_.\\s]', 'i'), manufacturer + ' ')
          .replace(RegExp('^(' + qualify(manufacturer) + ')[-_.]?(\\w)', 'i'), manufacturer + ' $2');
      }
      // Clean up Google TV.
      if ((data = /\bGoogle TV\b/.exec(product))) {
        product = data[0];
      }
      // Detect simulators.
      if (/\bSimulator\b/i.test(ua)) {
        product = (product ? product + ' ' : '') + 'Simulator';
      }
      // Detect Opera Mini 8+ running in Turbo/Uncompressed mode on iOS.
      if (name == 'Opera Mini' && /\bOPiOS\b/.test(ua)) {
        description.push('running in Turbo/Uncompressed mode');
      }
      // Detect IE Mobile 11.
      if (name == 'IE' && /\blike iPhone OS\b/.test(ua)) {
        data = parse(ua.replace(/like iPhone OS/, ''));
        manufacturer = data.manufacturer;
        product = data.product;
      }
      // Detect iOS.
      else if (/^iP/.test(product)) {
        name || (name = 'Safari');
        os = 'iOS' + ((data = / OS ([\d_]+)/i.exec(ua))
          ? ' ' + data[1].replace(/_/g, '.')
          : '');
      }
      // Detect Kubuntu.
      else if (name == 'Konqueror' && /^Linux\b/i.test(os)) {
        os = 'Kubuntu';
      }
      // Detect Android browsers.
      else if ((manufacturer && manufacturer != 'Google' &&
          ((/Chrome/.test(name) && !/\bMobile Safari\b/i.test(ua)) || /\bVita\b/.test(product))) ||
          (/\bAndroid\b/.test(os) && /^Chrome/.test(name) && /\bVersion\//i.test(ua))) {
        name = 'Android Browser';
        os = /\bAndroid\b/.test(os) ? os : 'Android';
      }
      // Detect Silk desktop/accelerated modes.
      else if (name == 'Silk') {
        if (!/\bMobi/i.test(ua)) {
          os = 'Android';
          description.unshift('desktop mode');
        }
        if (/Accelerated *= *true/i.test(ua)) {
          description.unshift('accelerated');
        }
      }
      // Detect UC Browser speed mode.
      else if (name == 'UC Browser' && /\bUCWEB\b/.test(ua)) {
        description.push('speed mode');
      }
      // Detect PaleMoon identifying as Firefox.
      else if (name == 'PaleMoon' && (data = /\bFirefox\/([\d.]+)\b/.exec(ua))) {
        description.push('identifying as Firefox ' + data[1]);
      }
      // Detect Firefox OS and products running Firefox.
      else if (name == 'Firefox' && (data = /\b(Mobile|Tablet|TV)\b/i.exec(ua))) {
        os || (os = 'Firefox OS');
        product || (product = data[1]);
      }
      // Detect false positives for Firefox/Safari.
      else if (!name || (data = !/\bMinefield\b/i.test(ua) && /\b(?:Firefox|Safari)\b/.exec(name))) {
        // Escape the `/` for Firefox 1.
        if (name && !product && /[\/,]|^[^(]+?\)/.test(ua.slice(ua.indexOf(data + '/') + 8))) {
          // Clear name of false positives.
          name = null;
        }
        // Reassign a generic name.
        if ((data = product || manufacturer || os) &&
            (product || manufacturer || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(os))) {
          name = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(os) ? os : data) + ' Browser';
        }
      }
      // Add Chrome version to description for Electron.
      else if (name == 'Electron' && (data = (/\bChrome\/([\d.]+)\b/.exec(ua) || 0)[1])) {
        description.push('Chromium ' + data);
      }
      // Detect non-Opera (Presto-based) versions (order is important).
      if (!version) {
        version = getVersion([
          '(?:Cloud9|CriOS|CrMo|Edge|Edg|EdgA|EdgiOS|FxiOS|HeadlessChrome|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$)|UCBrowser|YaBrowser)',
          'Version',
          qualify(name),
          '(?:Firefox|Minefield|NetFront)'
        ]);
      }
      // Detect stubborn layout engines.
      if ((data =
            layout == 'iCab' && parseFloat(version) > 3 && 'WebKit' ||
            /\bOpera\b/.test(name) && (/\bOPR\b/.test(ua) ? 'Blink' : 'Presto') ||
            /\b(?:Midori|Nook|Safari)\b/i.test(ua) && !/^(?:Trident|EdgeHTML)$/.test(layout) && 'WebKit' ||
            !layout && /\bMSIE\b/i.test(ua) && (os == 'Mac OS' ? 'Tasman' : 'Trident') ||
            layout == 'WebKit' && /\bPlayStation\b(?! Vita\b)/i.test(name) && 'NetFront'
          )) {
        layout = [data];
      }
      // Detect Windows Phone 7 desktop mode.
      if (name == 'IE' && (data = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(ua) || 0)[1])) {
        name += ' Mobile';
        os = 'Windows Phone ' + (/\+$/.test(data) ? data : data + '.x');
        description.unshift('desktop mode');
      }
      // Detect Windows Phone 8.x desktop mode.
      else if (/\bWPDesktop\b/i.test(ua)) {
        name = 'IE Mobile';
        os = 'Windows Phone 8.x';
        description.unshift('desktop mode');
        version || (version = (/\brv:([\d.]+)/.exec(ua) || 0)[1]);
      }
      // Detect IE 11 identifying as other browsers.
      else if (name != 'IE' && layout == 'Trident' && (data = /\brv:([\d.]+)/.exec(ua))) {
        if (name) {
          description.push('identifying as ' + name + (version ? ' ' + version : ''));
        }
        name = 'IE';
        version = data[1];
      }
      // Leverage environment features.
      if (useFeatures) {
        // Detect server-side environments.
        // Rhino has a global function while others have a global object.
        if (isHostType(context, 'global')) {
          if (java) {
            data = java.lang.System;
            arch = data.getProperty('os.arch');
            os = os || data.getProperty('os.name') + ' ' + data.getProperty('os.version');
          }
          if (rhino) {
            try {
              version = context.require('ringo/engine').version.join('.');
              name = 'RingoJS';
            } catch(e) {
              if ((data = context.system) && data.global.system == context.system) {
                name = 'Narwhal';
                os || (os = data[0].os || null);
              }
            }
            if (!name) {
              name = 'Rhino';
            }
          }
          else if (
            typeof context.process == 'object' && !context.process.browser &&
            (data = context.process)
          ) {
            if (typeof data.versions == 'object') {
              if (typeof data.versions.electron == 'string') {
                description.push('Node ' + data.versions.node);
                name = 'Electron';
                version = data.versions.electron;
              } else if (typeof data.versions.nw == 'string') {
                description.push('Chromium ' + version, 'Node ' + data.versions.node);
                name = 'NW.js';
                version = data.versions.nw;
              }
            }
            if (!name) {
              name = 'Node.js';
              arch = data.arch;
              os = data.platform;
              version = /[\d.]+/.exec(data.version);
              version = version ? version[0] : null;
            }
          }
        }
        // Detect Adobe AIR.
        else if (getClassOf((data = context.runtime)) == airRuntimeClass) {
          name = 'Adobe AIR';
          os = data.flash.system.Capabilities.os;
        }
        // Detect PhantomJS.
        else if (getClassOf((data = context.phantom)) == phantomClass) {
          name = 'PhantomJS';
          version = (data = data.version || null) && (data.major + '.' + data.minor + '.' + data.patch);
        }
        // Detect IE compatibility modes.
        else if (typeof doc.documentMode == 'number' && (data = /\bTrident\/(\d+)/i.exec(ua))) {
          // We're in compatibility mode when the Trident version + 4 doesn't
          // equal the document mode.
          version = [version, doc.documentMode];
          if ((data = +data[1] + 4) != version[1]) {
            description.push('IE ' + version[1] + ' mode');
            layout && (layout[1] = '');
            version[1] = data;
          }
          version = name == 'IE' ? String(version[1].toFixed(1)) : version[0];
        }
        // Detect IE 11 masking as other browsers.
        else if (typeof doc.documentMode == 'number' && /^(?:Chrome|Firefox)\b/.test(name)) {
          description.push('masking as ' + name + ' ' + version);
          name = 'IE';
          version = '11.0';
          layout = ['Trident'];
          os = 'Windows';
        }
        os = os && format(os);
      }
      // Detect prerelease phases.
      if (version && (data =
            /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(version) ||
            /(?:alpha|beta)(?: ?\d)?/i.exec(ua + ';' + (useFeatures && nav.appMinorVersion)) ||
            /\bMinefield\b/i.test(ua) && 'a'
          )) {
        prerelease = /b/i.test(data) ? 'beta' : 'alpha';
        version = version.replace(RegExp(data + '\\+?$'), '') +
          (prerelease == 'beta' ? beta : alpha) + (/\d+\+?/.exec(data) || '');
      }
      // Detect Firefox Mobile.
      if (name == 'Fennec' || name == 'Firefox' && /\b(?:Android|Firefox OS|KaiOS)\b/.test(os)) {
        name = 'Firefox Mobile';
      }
      // Obscure Maxthon's unreliable version.
      else if (name == 'Maxthon' && version) {
        version = version.replace(/\.[\d.]+/, '.x');
      }
      // Detect Xbox 360 and Xbox One.
      else if (/\bXbox\b/i.test(product)) {
        if (product == 'Xbox 360') {
          os = null;
        }
        if (product == 'Xbox 360' && /\bIEMobile\b/.test(ua)) {
          description.unshift('mobile mode');
        }
      }
      // Add mobile postfix.
      else if ((/^(?:Chrome|IE|Opera)$/.test(name) || name && !product && !/Browser|Mobi/.test(name)) &&
          (os == 'Windows CE' || /Mobi/i.test(ua))) {
        name += ' Mobile';
      }
      // Detect IE platform preview.
      else if (name == 'IE' && useFeatures) {
        try {
          if (context.external === null) {
            description.unshift('platform preview');
          }
        } catch(e) {
          description.unshift('embedded');
        }
      }
      // Detect BlackBerry OS version.
      // http://docs.blackberry.com/en/developers/deliverables/18169/HTTP_headers_sent_by_BB_Browser_1234911_11.jsp
      else if ((/\bBlackBerry\b/.test(product) || /\bBB10\b/.test(ua)) && (data =
            (RegExp(product.replace(/ +/g, ' *') + '/([.\\d]+)', 'i').exec(ua) || 0)[1] ||
            version
          )) {
        data = [data, /BB10/.test(ua)];
        os = (data[1] ? (product = null, manufacturer = 'BlackBerry') : 'Device Software') + ' ' + data[0];
        version = null;
      }
      // Detect Opera identifying/masking itself as another browser.
      // http://www.opera.com/support/kb/view/843/
      else if (this != forOwn && product != 'Wii' && (
            (useFeatures && opera) ||
            (/Opera/.test(name) && /\b(?:MSIE|Firefox)\b/i.test(ua)) ||
            (name == 'Firefox' && /\bOS X (?:\d+\.){2,}/.test(os)) ||
            (name == 'IE' && (
              (os && !/^Win/.test(os) && version > 5.5) ||
              /\bWindows XP\b/.test(os) && version > 8 ||
              version == 8 && !/\bTrident\b/.test(ua)
            ))
          ) && !reOpera.test((data = parse.call(forOwn, ua.replace(reOpera, '') + ';'))) && data.name) {
        // When "identifying", the UA contains both Opera and the other browser's name.
        data = 'ing as ' + data.name + ((data = data.version) ? ' ' + data : '');
        if (reOpera.test(name)) {
          if (/\bIE\b/.test(data) && os == 'Mac OS') {
            os = null;
          }
          data = 'identify' + data;
        }
        // When "masking", the UA contains only the other browser's name.
        else {
          data = 'mask' + data;
          if (operaClass) {
            name = format(operaClass.replace(/([a-z])([A-Z])/g, '$1 $2'));
          } else {
            name = 'Opera';
          }
          if (/\bIE\b/.test(data)) {
            os = null;
          }
          if (!useFeatures) {
            version = null;
          }
        }
        layout = ['Presto'];
        description.push(data);
      }
      // Detect WebKit Nightly and approximate Chrome/Safari versions.
      if ((data = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(ua) || 0)[1])) {
        // Correct build number for numeric comparison.
        // (e.g. "532.5" becomes "532.05")
        data = [parseFloat(data.replace(/\.(\d)$/, '.0$1')), data];
        // Nightly builds are postfixed with a "+".
        if (name == 'Safari' && data[1].slice(-1) == '+') {
          name = 'WebKit Nightly';
          prerelease = 'alpha';
          version = data[1].slice(0, -1);
        }
        // Clear incorrect browser versions.
        else if (version == data[1] ||
            version == (data[2] = (/\bSafari\/([\d.]+\+?)/i.exec(ua) || 0)[1])) {
          version = null;
        }
        // Use the full Chrome version when available.
        data[1] = (/\b(?:Headless)?Chrome\/([\d.]+)/i.exec(ua) || 0)[1];
        // Detect Blink layout engine.
        if (data[0] == 537.36 && data[2] == 537.36 && parseFloat(data[1]) >= 28 && layout == 'WebKit') {
          layout = ['Blink'];
        }
        // Detect JavaScriptCore.
        // http://stackoverflow.com/questions/6768474/how-can-i-detect-which-javascript-engine-v8-or-jsc-is-used-at-runtime-in-androi
        if (!useFeatures || (!likeChrome && !data[1])) {
          layout && (layout[1] = 'like Safari');
          data = (data = data[0], data < 400 ? 1 : data < 500 ? 2 : data < 526 ? 3 : data < 533 ? 4 : data < 534 ? '4+' : data < 535 ? 5 : data < 537 ? 6 : data < 538 ? 7 : data < 601 ? 8 : data < 602 ? 9 : data < 604 ? 10 : data < 606 ? 11 : data < 608 ? 12 : '12');
        } else {
          layout && (layout[1] = 'like Chrome');
          data = data[1] || (data = data[0], data < 530 ? 1 : data < 532 ? 2 : data < 532.05 ? 3 : data < 533 ? 4 : data < 534.03 ? 5 : data < 534.07 ? 6 : data < 534.10 ? 7 : data < 534.13 ? 8 : data < 534.16 ? 9 : data < 534.24 ? 10 : data < 534.30 ? 11 : data < 535.01 ? 12 : data < 535.02 ? '13+' : data < 535.07 ? 15 : data < 535.11 ? 16 : data < 535.19 ? 17 : data < 536.05 ? 18 : data < 536.10 ? 19 : data < 537.01 ? 20 : data < 537.11 ? '21+' : data < 537.13 ? 23 : data < 537.18 ? 24 : data < 537.24 ? 25 : data < 537.36 ? 26 : layout != 'Blink' ? '27' : '28');
        }
        // Add the postfix of ".x" or "+" for approximate versions.
        layout && (layout[1] += ' ' + (data += typeof data == 'number' ? '.x' : /[.+]/.test(data) ? '' : '+'));
        // Obscure version for some Safari 1-2 releases.
        if (name == 'Safari' && (!version || parseInt(version) > 45)) {
          version = data;
        } else if (name == 'Chrome' && /\bHeadlessChrome/i.test(ua)) {
          description.unshift('headless');
        }
      }
      // Detect Opera desktop modes.
      if (name == 'Opera' &&  (data = /\bzbov|zvav$/.exec(os))) {
        name += ' ';
        description.unshift('desktop mode');
        if (data == 'zvav') {
          name += 'Mini';
          version = null;
        } else {
          name += 'Mobile';
        }
        os = os.replace(RegExp(' *' + data + '$'), '');
      }
      // Detect Chrome desktop mode.
      else if (name == 'Safari' && /\bChrome\b/.exec(layout && layout[1])) {
        description.unshift('desktop mode');
        name = 'Chrome Mobile';
        version = null;
  
        if (/\bOS X\b/.test(os)) {
          manufacturer = 'Apple';
          os = 'iOS 4.3+';
        } else {
          os = null;
        }
      }
      // Newer versions of SRWare Iron uses the Chrome tag to indicate its version number.
      else if (/\bSRWare Iron\b/.test(name) && !version) {
        version = getVersion('Chrome');
      }
      // Strip incorrect OS versions.
      if (version && version.indexOf((data = /[\d.]+$/.exec(os))) == 0 &&
          ua.indexOf('/' + data + '-') > -1) {
        os = trim(os.replace(data, ''));
      }
      // Ensure OS does not include the browser name.
      if (os && os.indexOf(name) != -1 && !RegExp(name + ' OS').test(os)) {
        os = os.replace(RegExp(' *' + qualify(name) + ' *'), '');
      }
      // Add layout engine.
      if (layout && !/\b(?:Avant|Nook)\b/.test(name) && (
          /Browser|Lunascape|Maxthon/.test(name) ||
          name != 'Safari' && /^iOS/.test(os) && /\bSafari\b/.test(layout[1]) ||
          /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|SRWare Iron|Vivaldi|Web)/.test(name) && layout[1])) {
        // Don't add layout details to description if they are falsey.
        (data = layout[layout.length - 1]) && description.push(data);
      }
      // Combine contextual information.
      if (description.length) {
        description = ['(' + description.join('; ') + ')'];
      }
      // Append manufacturer to description.
      if (manufacturer && product && product.indexOf(manufacturer) < 0) {
        description.push('on ' + manufacturer);
      }
      // Append product to description.
      if (product) {
        description.push((/^on /.test(description[description.length - 1]) ? '' : 'on ') + product);
      }
      // Parse the OS into an object.
      if (os) {
        data = / ([\d.+]+)$/.exec(os);
        isSpecialCasedOS = data && os.charAt(os.length - data[0].length - 1) == '/';
        os = {
          'architecture': 32,
          'family': (data && !isSpecialCasedOS) ? os.replace(data[0], '') : os,
          'version': data ? data[1] : null,
          'toString': function() {
            var version = this.version;
            return this.family + ((version && !isSpecialCasedOS) ? ' ' + version : '') + (this.architecture == 64 ? ' 64-bit' : '');
          }
        };
      }
      // Add browser/OS architecture.
      if ((data = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(arch)) && !/\bi686\b/i.test(arch)) {
        if (os) {
          os.architecture = 64;
          os.family = os.family.replace(RegExp(' *' + data), '');
        }
        if (
            name && (/\bWOW64\b/i.test(ua) ||
            (useFeatures && /\w(?:86|32)$/.test(nav.cpuClass || nav.platform) && !/\bWin64; x64\b/i.test(ua)))
        ) {
          description.unshift('32-bit');
        }
      }
      // Chrome 39 and above on OS X is always 64-bit.
      else if (
          os && /^OS X/.test(os.family) &&
          name == 'Chrome' && parseFloat(version) >= 39
      ) {
        os.architecture = 64;
      }
  
      ua || (ua = null);
  
      /*------------------------------------------------------------------------*/
  
      /**
       * The platform object.
       *
       * @name platform
       * @type Object
       */
      var platform = {};
  
      /**
       * The platform description.
       *
       * @memberOf platform
       * @type string|null
       */
      platform.description = ua;
  
      /**
       * The name of the browser's layout engine.
       *
       * The list of common layout engines include:
       * "Blink", "EdgeHTML", "Gecko", "Trident" and "WebKit"
       *
       * @memberOf platform
       * @type string|null
       */
      platform.layout = layout && layout[0];
  
      /**
       * The name of the product's manufacturer.
       *
       * The list of manufacturers include:
       * "Apple", "Archos", "Amazon", "Asus", "Barnes & Noble", "BlackBerry",
       * "Google", "HP", "HTC", "LG", "Microsoft", "Motorola", "Nintendo",
       * "Nokia", "Samsung" and "Sony"
       *
       * @memberOf platform
       * @type string|null
       */
      platform.manufacturer = manufacturer;
  
      /**
       * The name of the browser/environment.
       *
       * The list of common browser names include:
       * "Chrome", "Electron", "Firefox", "Firefox for iOS", "IE",
       * "Microsoft Edge", "PhantomJS", "Safari", "SeaMonkey", "Silk",
       * "Opera Mini" and "Opera"
       *
       * Mobile versions of some browsers have "Mobile" appended to their name:
       * eg. "Chrome Mobile", "Firefox Mobile", "IE Mobile" and "Opera Mobile"
       *
       * @memberOf platform
       * @type string|null
       */
      platform.name = name;
  
      /**
       * The alpha/beta release indicator.
       *
       * @memberOf platform
       * @type string|null
       */
      platform.prerelease = prerelease;
  
      /**
       * The name of the product hosting the browser.
       *
       * The list of common products include:
       *
       * "BlackBerry", "Galaxy S4", "Lumia", "iPad", "iPod", "iPhone", "Kindle",
       * "Kindle Fire", "Nexus", "Nook", "PlayBook", "TouchPad" and "Transformer"
       *
       * @memberOf platform
       * @type string|null
       */
      platform.product = product;
  
      /**
       * The browser's user agent string.
       *
       * @memberOf platform
       * @type string|null
       */
      platform.ua = ua;
  
      /**
       * The browser/environment version.
       *
       * @memberOf platform
       * @type string|null
       */
      platform.version = name && version;
  
      /**
       * The name of the operating system.
       *
       * @memberOf platform
       * @type Object
       */
      platform.os = os || {
  
        /**
         * The CPU architecture the OS is built for.
         *
         * @memberOf platform.os
         * @type number|null
         */
        'architecture': null,
  
        /**
         * The family of the OS.
         *
         * Common values include:
         * "Windows", "Windows Server 2008 R2 / 7", "Windows Server 2008 / Vista",
         * "Windows XP", "OS X", "Linux", "Ubuntu", "Debian", "Fedora", "Red Hat",
         * "SuSE", "Android", "iOS" and "Windows Phone"
         *
         * @memberOf platform.os
         * @type string|null
         */
        'family': null,
  
        /**
         * The version of the OS.
         *
         * @memberOf platform.os
         * @type string|null
         */
        'version': null,
  
        /**
         * Returns the OS string.
         *
         * @memberOf platform.os
         * @returns {string} The OS string.
         */
        'toString': function() { return 'null'; }
      };
  
      platform.parse = parse;
      platform.toString = toStringPlatform;
  
      if (platform.version) {
        description.unshift(version);
      }
      if (platform.name) {
        description.unshift(name);
      }
      if (os && name && !(os == String(os).split(' ')[0] && (os == name.split(' ')[0] || product))) {
        description.push(product ? '(' + os + ')' : 'on ' + os);
      }
      if (description.length) {
        platform.description = description.join(' ');
      }
      return platform;
    }
  
    /*--------------------------------------------------------------------------*/
  
    // Export platform.
    var platform = parse();
  
    // Some AMD build optimizers, like r.js, check for condition patterns like the following:
    if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
      // Expose platform on the global object to prevent errors when platform is
      // loaded by a script tag in the presence of an AMD loader.
      // See http://requirejs.org/docs/errors.html#mismatch for more details.
      root.platform = platform;
  
      // Define as an anonymous module so platform can be aliased through path mapping.
      define(function() {
        return platform;
      });
    }
    // Check for `exports` after `define` in case a build optimizer adds an `exports` object.
    else if (freeExports && freeModule) {
      // Export for CommonJS support.
      forOwn(platform, function(value, key) {
        freeExports[key] = value;
      });
    }
    else {
      // Export to the global object.
      root.platform = platform;
    }
  }.call(this));

  var usera = platform.parse(navigator.userAgent);
  
  var sha256 = function sha256(ascii) {
    function rightRotate(value, amount) {
        return (value>>>amount) | (value<<(32 - amount));
    };
    
    var mathPow = Math.pow;
    var maxWord = mathPow(2, 32);
    var lengthProperty = 'length'
    var i, j; // Used as a counter across the whole file
    var result = ''

    var words = [];
    var asciiBitLength = ascii[lengthProperty]*8;
    
    //* caching results is optional - remove/add slash from front of this line to toggle
    // Initial hash value: first 32 bits of the fractional parts of the square roots of the first 8 primes
    // (we actually calculate the first 64, but extra values are just ignored)
    var hash = sha256.h = sha256.h || [];
    // Round constants: first 32 bits of the fractional parts of the cube roots of the first 64 primes
    var k = sha256.k = sha256.k || [];
    var primeCounter = k[lengthProperty];
    /*/
    var hash = [], k = [];
    var primeCounter = 0;
    //*/

    var isComposite = {};
    for (var candidate = 2; primeCounter < 64; candidate++) {
        if (!isComposite[candidate]) {
            for (i = 0; i < 313; i += candidate) {
                isComposite[i] = candidate;
            }
            hash[primeCounter] = (mathPow(candidate, .5)*maxWord)|0;
            k[primeCounter++] = (mathPow(candidate, 1/3)*maxWord)|0;
        }
    }
    
    ascii += '\x80' // Append Ƈ' bit (plus zero padding)
    while (ascii[lengthProperty]%64 - 56) ascii += '\x00' // More zero padding
    for (i = 0; i < ascii[lengthProperty]; i++) {
        j = ascii.charCodeAt(i);
        if (j>>8) return; // ASCII check: only accept characters in range 0-255
        words[i>>2] |= j << ((3 - i)%4)*8;
    }
    words[words[lengthProperty]] = ((asciiBitLength/maxWord)|0);
    words[words[lengthProperty]] = (asciiBitLength)
    
    // process each chunk
    for (j = 0; j < words[lengthProperty];) {
        var w = words.slice(j, j += 16); // The message is expanded into 64 words as part of the iteration
        var oldHash = hash;
        // This is now the undefinedworking hash", often labelled as variables a...g
        // (we have to truncate as well, otherwise extra entries at the end accumulate
        hash = hash.slice(0, 8);
        
        for (i = 0; i < 64; i++) {
            var i2 = i + j;
            // Expand the message into 64 words
            // Used below if 
            var w15 = w[i - 15], w2 = w[i - 2];

            // Iterate
            var a = hash[0], e = hash[4];
            var temp1 = hash[7]
                + (rightRotate(e, 6) ^ rightRotate(e, 11) ^ rightRotate(e, 25)) // S1
                + ((e&hash[5])^((~e)&hash[6])) // ch
                + k[i]
                // Expand the message schedule if needed
                + (w[i] = (i < 16) ? w[i] : (
                        w[i - 16]
                        + (rightRotate(w15, 7) ^ rightRotate(w15, 18) ^ (w15>>>3)) // s0
                        + w[i - 7]
                        + (rightRotate(w2, 17) ^ rightRotate(w2, 19) ^ (w2>>>10)) // s1
                    )|0
                );
            // This is only used once, so *could* be moved below, but it only saves 4 bytes and makes things unreadble
            var temp2 = (rightRotate(a, 2) ^ rightRotate(a, 13) ^ rightRotate(a, 22)) // S0
                + ((a&hash[1])^(a&hash[2])^(hash[1]&hash[2])); // maj
            
            hash = [(temp1 + temp2)|0].concat(hash); // We don't bother trimming off the extra ones, they're harmless as long as we're truncating when we do the slice()
            hash[4] = (hash[4] + temp1)|0;
        }
        
        for (i = 0; i < 8; i++) {
            hash[i] = (hash[i] + oldHash[i])|0;
        }
    }
    
    for (i = 0; i < 8; i++) {
        for (j = 3; j + 1; j--) {
            var b = (hash[i]>>(j*8))&255;
            result += ((b < 16) ? 0 : '') + b.toString(16);
        }
    }
    return result;
};

return v4f()}