!function(){function t(t){return t&&t.__esModule?t.default:t}var r={};function e(t,r,e,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void e(t)}c.done?r(u):Promise.resolve(u).then(n,o)}Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(t){return function(){var r=this,n=arguments;return new Promise((function(o,a){var i=t.apply(r,n);function c(t){e(i,o,a,c,u,"next",t)}function u(t){e(i,o,a,c,u,"throw",t)}c(void 0)}))}};var n={},o=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(t){u=function(t,r,e){return t[r]=e}}function s(t,r,e,n){var o=r&&r.prototype instanceof y?r:y,a=Object.create(o.prototype),i=new O(n||[]);return a._invoke=function(t,r,e){var n=f;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===v){if("throw"===o)throw a;return P()}for(e.method=o,e.arg=a;;){var i=e.delegate;if(i){var c=j(i,e);if(c){if(c===g)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===f)throw n=v,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=p;var u=l(t,r,e);if("normal"===u.type){if(n=e.done?v:h,u.arg===g)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=v,e.method="throw",e.arg=u.arg)}}}(t,e,i),a}function l(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f="suspendedStart",h="suspendedYield",p="executing",v="completed",g={};function y(){}function d(){}function m(){}var w={};u(w,a,(function(){return this}));var x=Object.getPrototypeOf,L=x&&x(x(N([])));L&&L!==e&&n.call(L,a)&&(w=L);var b=m.prototype=y.prototype=Object.create(w);function _(t){["next","throw","return"].forEach((function(r){u(t,r,(function(t){return this._invoke(r,t)}))}))}function E(t,r){function e(o,a,i,c){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?r.resolve(f.__await).then((function(t){e("next",t,i,c)}),(function(t){e("throw",t,i,c)})):r.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return e("throw",t,i,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function a(){return new r((function(r,o){e(t,n,r,o)}))}return o=o?o.then(a,a):a()}}function j(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,j(t,e),"throw"===e.method))return g;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var o=l(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,g;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,g):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function k(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function S(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function N(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}return{next:P}}function P(){return{value:r,done:!0}}return d.prototype=m,u(b,"constructor",m),u(m,"constructor",d),d.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===d||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},_(E.prototype),u(E.prototype,i,(function(){return this})),t.AsyncIterator=E,t.async=function(r,e,n,o,a){void 0===a&&(a=Promise);var i=new E(s(r,e,n,o),a);return t.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},_(b),u(b,c,"Generator"),u(b,a,(function(){return this})),u(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=N,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=r&&r<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=r,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),g},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),S(e),g}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;S(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:N(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),g}},t}(n);try{regeneratorRuntime=o}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}var a={save:function(t,r){try{var e=JSON.stringify(r);localStorage.setItem(t,e)}catch(r){console.error("Error during saving ".concat(t," to local strage; "),r.message)}},load:function(t){try{var r=localStorage.getItem(t);return null===r?void 0:JSON.parse(r)}catch(r){console.error("Error during getting ".concat(t," from localStorage: "),r.message)}},del:function(t){try{localStorage.removeItem(t)}catch(r){console.error("Error during deleting ".concat(t,"! from localStorage: "),r.message)}}};function i(t){return c.apply(this,arguments)}function c(){return(c=t(r)(t(n).mark((function r(e){return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(v+"3/trending/movie/day?api_key=".concat(e));case 2:return t.next=4,t.sent.json();case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}}),r)})))).apply(this,arguments)}function u(t){return s.apply(this,arguments)}function s(){return(s=t(r)(t(n).mark((function r(e){var o;return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(v+"3/genre/movie/list?api_key=".concat(e,"&language=en-US"));case 2:return t.next=4,t.sent.json();case 4:return o=t.sent,a.save("genresList",o.genres),console.log("Genres were updated, and saved to localStorage for future"),t.abrupt("return",o.genres);case 8:case"end":return t.stop()}}),r)})))).apply(this,arguments)}function l(t){return f.apply(this,arguments)}function f(){return(f=t(r)(t(n).mark((function r(e){var o,i;return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.load("genresList")){t.next=3;break}return t.next=3,u(p);case 3:return o=a.load("genresList"),i=new Array,e.forEach((function(t){try{i.push(o.find((function(r){return r.id===t})).name)}catch(r){console.log("".concat(t," wasn't found in Local Storage, updating ganresList")),o=await(0,u)(p),i.push(o.find((function(r){return r.id===t})).name)}})),t.abrupt("return",i.join());case 7:case"end":return t.stop()}}),r)})))).apply(this,arguments)}function h(){return h=t(r)(t(n).mark((function e(o){var a,c;return t(n).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i(o);case 2:a=e.sent,a.total_pages,c=a.results,c.map(function(){var e=t(r)(t(n).mark((function r(e){var o,a,i,c,u,s,f,h,p,g,y,d,m,w,x,L;return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=e.title,a=e.original_title,i=e.name,c=e.original_name,u=e.overview,s=e.poster_path,f=e.genre_ids,h=e.popularity,p=e.release_date,g=e.first_air_date,y=e.vote_average,d=e.vote_count,m=o||i,w=a||c,x=p||g,t.t0=m,t.t1=w,t.t2=x.slice(0,4),t.next=9,l(f);case 9:return t.t3=t.sent,t.t4=h,t.t5=u,t.t6=y,t.t7=d,t.t8=v+"t/p/orginal"+s,L={title:t.t0,originalTitle:t.t1,year:t.t2,genres:t.t3,popularity:t.t4,overview:t.t5,rating:t.t6,voteCount:t.t7,imgPath:t.t8},console.log(L),t.abrupt("return",L);case 18:case"end":return t.stop()}}),r)})));return function(t){return e.apply(this,arguments)}}());case 6:case"end":return e.stop()}}),e)}))),h.apply(this,arguments)}var p="565e4989d784811de7dff7d665000157",v="https://api.themoviedb.org/";!function(t){h.apply(this,arguments)}(p)}();
//# sourceMappingURL=index.9fed6232.js.map
