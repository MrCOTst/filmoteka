var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},a=e.parcelRequired76b;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in t){var a=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,a.call(i.exports,i,i.exports),i.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,n){t[e]=n},e.parcelRequired76b=a);var i=a("34clH"),s=a("eTE0Z");const l={mainContainer:document.querySelector(".filmoteka__container"),openModalBtn:document.querySelector(".modal-footer-open"),searchResultText:document.querySelector(".form-text"),form:document.querySelector(".header_search"),enLangBTN:document.getElementById("e-lang-en"),uaLangBTN:document.getElementById("e-lang-ua")};var r=a("7GRT7");function o(e,n,t,a,i){return`<div class='pagination-decrement'>\n  <button class='btn-left btn' type='button'>\n   <\n  </button>\n</div>\n<ul class="pagination__list">\n <li class='pagination__item'>\n  <a class='pagination__page' id="preFirstPage" href=''>1</a>\n </li>\n <span class='pagination__ellipsis visually-hidden' id="ellipsisStart">...</span>\n  <li class='pagination__item'>\n  <a class='pagination__page' id="firstPage" href=''>${e}</a>\n </li>\n <li class='pagination__item'>\n  <a class='pagination__page' id ='thirdPage' href=''>${n}</a>\n </li>\n <li class='pagination__item'>\n  <a class='pagination__page' id ='fourthPage' href=''>${t}</a>\n </li>\n <li class='pagination__item'>\n  <a class='pagination__page' id ='fifthPage' href=''>${a}</a>\n </li>\n <li class='pagination__item' id="preLastItem">\n  <a class='pagination__page' id="lastPag" href=''>${i}</a>\n </li>\n  <span class='pagination__ellipsis' id="ellipsisEnd">...</span>\n <li class='pagination__item' id="lastItem">\n  <a class='pagination__page' id="preLastPag" href=''>${G}</a>\n </li>\n</ul>\n<div class='pagination-increment'>\n  <button class='btn-right btn' type='button'>\n    >\n  </button>\n</div>`}function g(e,n,t,a,i){return`<div class='pagination-decrement'>\n  <button class='btn-left btn' type='button'>\n   <\n  </button>\n</div>\n\n<ul class="pagination__list">\n<li class="pagination__item">\n  <a class='pagination__page' id="preFirstPage" href=''>1</a>\n</li>\n  <span class='pagination__ellipsis visually-hidden' id="ellipsisStart">...</span>\n<li class="pagination__item">\n  <a class='pagination__page' id="firstPage" href=''>${e}</a>\n</li>\n<li class="pagination__item">\n  <a class='pagination__page' id ='thirdPage' href=''>${n}</a>\n</li>\n<li class="pagination__item">\n  <a class='pagination__page' id ='fourthPage' href=''>${t}</a>\n</li>\n<li class="pagination__item">\n  <a class='pagination__page' id ='fifthPage' href=''>${a}</a>\n</li>\n<li class="pagination__item">\n  <a class='pagination__page' id="lastPag" href=''>${i}</a>\n</li>\n  <span class='pagination__ellipsis' id="ellipsisEnd">...</span>\n<li class="pagination__item">\n  <a class='pagination__page  pagination__page--activ' id="preLastPag" href=''>${G}</a>\n</li>\n\n</ul>\n\n<div class='pagination-increment'>\n  <button class='btn-right btn' type='button'>\n    >\n  </button>\n</div>`}const c=document.querySelector("#pagination");function p(e){const n=document.querySelector("#firstPage"),t=document.querySelector("#lastPag"),a={peg2:E,peg3:E,peg4:E,peg5:E,peg6:E};Number(t.textContent)===E&&_(a),(E===G||E>=G-4)&&u(a),Number(n.textContent)===E&&f(a),(1===E||E<=5)&&m()}function d(e){const n=document.querySelector("#firstPage"),t=document.querySelector("#lastPag"),a={peg2:E,peg3:E,peg4:E,peg5:E,peg6:E};E>=G-5&&u(a),E>Number(t.textContent)&&_(a),E<=5&&m(),E<Number(n.textContent)&&f(a)}function u(e){if(E>G)return;let{peg2:n,peg3:t,peg4:a,peg5:i,peg6:s}=e;c.innerHTML="",s=G-1,i=G-2,a=G-3,t=G-4,n=G-5,c.innerHTML=g(n,t,a,i,s)}function f(e){if(E<=2)return;c.innerHTML="";let{peg2:n,peg3:t,peg4:a,peg5:i,peg6:s}=e;i-=1,a-=2,t-=3,n-=4,c.innerHTML=o(n,t,a,i,s)}function _(e){if(E>=G-1)return;c.innerHTML="";let{peg2:n,peg3:t,peg4:a,peg5:i,peg6:s}=e;t+=1,a+=2,i+=3,s+=4,c.innerHTML=o(n,t,a,i,s)}function m(){if(G<7)return;c.innerHTML="",c.innerHTML=`<div class='pagination-decrement'>\n  <button class='btn-left btn' type='button' disabled>\n  <\n  </button>\n</div>\n\n<ul class="pagination__list">\n<li class="pagination__item">\n  <a class='pagination__page pagination__page--activ' id="preFirstPage" href=''>1</a>\n</li>\n<span class='pagination__ellipsis visually-hidden' id="ellipsisStart">...</span>\n<li class="pagination__item">\n  <a class='pagination__page' id="firstPage" href=''>2</a>\n</li>\n<li class="pagination__item">\n  <a class='pagination__page' id="thirdPage" href=''>3</a>\n</li>\n<li class="pagination__item">\n  <a class='pagination__page' id="fourthPage" href=''>4</a>\n</li>\n<li class="pagination__item">\n  <a class='pagination__page' id="fifthPage" href=''>5</a>\n</li>\n<li class="pagination__item">\n  <a class='pagination__page' id="lastPag" href=''>6</a>\n</li>\n  <span class='pagination__ellipsis' id="ellipsisEnd">...</span>\n<li class="pagination__item">\n  <a class='pagination__page' id="preLastPag" href=''>${G}</a>\n</li>\n\n</ul>\n\n<div class='pagination-increment'>\n  <button class='btn-right btn' type='button'>\n  >\n  </button>\n\n</div>`;const e=document.querySelector(".is-none");e&&e.classList.remove("is-none")}function h(){c.innerHTML="",c.innerHTML="<div class='pagination-decrement'>\n  <button class='btn-left btn' type='button' disabled>\n  <\n  </button>\n</div>\n  <ul class=\"pagination__list\">\n  <li class='pagination__item'>\n  <a class=\"pagination__page pagination__page--activ \" id=\"preFirstPage\" href=''>1</a>\n  </li>\n  </ul>\n<div class='pagination-increment'>\n  <button class='btn-right btn' type='button'>\n  >\n  </button>\n\n</div>";const e=[,,'id="firstPage"',"id ='thirdPage'","id ='fourthPage'","id ='fifthPage'",'id="lastPag"','id="preLastPag"'],n=document.querySelector(".pagination__list");let t="";for(let n=2;n<G+1;n+=1)t+=`<li class='pagination__item'><a class="pagination__page"  href='' ${e[n]}>${n}</a></li>`;n.insertAdjacentHTML("beforeend",t)}r=a("7GRT7");async function v(e){r.default.load("genresList")||await N("565e4989d784811de7dff7d665000157");let n=r.default.load("genresList"),t=new Array;return e.forEach((async e=>{try{t.push(n.find((n=>n.id===e)).name)}catch(a){console.log(`${e} wasn't found in Local Storage, updating ganresList`),n=await N("565e4989d784811de7dff7d665000157"),t.push(n.find((n=>n.id===e)).name)}})),t.join(", ")}r=a("7GRT7");async function y(e){const n=await Promise.all(e.map((async({id:e,title:n,original_title:t,name:a,original_name:i,overview:s,poster_path:l,genre_ids:r,popularity:o,release_date:g,first_air_date:c,vote_average:p,vote_count:d})=>{const u=n||a,f=t||i,_=g||c,m=l?"https://image.tmdb.org/t/p/w300"+l:"",h=r.length>1&&await v(r),y=p?p.toFixed(1):0;return await{id:e,title:u,originalTitle:f,year:_?_.slice(0,4):void 0,genres:h,popularity:o,overview:s,rating:y,voteCount:d,imgPath:m}})));return r.default.save("currentPage",n),n}var b=a("ccJnQ"),P=a("jWOqs");const L=new(0,(C=a("5SzY7")).default);async function S(e){e.preventDefault();const n=await async function(){return(await async function(e){return await(await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${e}&language=en-US&query=${D}&page=${E}`)).json()}("565e4989d784811de7dff7d665000157")).results}(),t=await y(n);if(t.length)return(0,b.renderItems)(t),L.spinOff(),void(0,P.default)()}async function w(){const e=await J("565e4989d784811de7dff7d665000157"),n=await y(e);(0,b.renderItems)(n),L.spinOff(),(0,P.default)()}function q(){const e={firstPage:document.querySelector("#firstPage"),lastPage:document.querySelector("#lastPag"),ellipsisStart:document.querySelector("#ellipsisStart"),ellipsisEnd:document.querySelector("#ellipsisEnd")};e.firstPage.textContent>2&&e.ellipsisStart.classList.remove("visually-hidden"),e.lastPage.textContent>=G-1?e.ellipsisEnd.classList.add("visually-hidden"):e.ellipsisEnd.classList.remove("visually-hidden")}function T(){const e={leftBtn:document.querySelector(".btn-left"),rightBtn:document.querySelector(".btn-right")};E>1&&e.leftBtn.removeAttribute("disabled"),E!==G?e.rightBtn.removeAttribute("disabled"):e.rightBtn.setAttribute("disabled","disabled")}function $(e){const n={activ:document.querySelector(".pagination__page--activ"),pagination:document.querySelector("#pagination"),firstPage:document.querySelector("#firstPage"),thirdPage:document.querySelector("#thirdPage"),fourthPage:document.querySelector("#fourthPage"),fifthPage:document.querySelector("#fifthPage"),lastPag:document.querySelector("#lastPag"),preFirstPage:document.querySelector("#preFirstPage"),preLastPag:document.querySelector("#preLastPag")};n.activ&&n.activ.classList.remove("pagination__page--activ"),n.firstPage&&E==n.firstPage.textContent&&n.firstPage.classList.add("pagination__page--activ"),n.thirdPage&&E==n.thirdPage.textContent&&n.thirdPage.classList.add("pagination__page--activ"),n.fourthPage&&E==n.fourthPage.textContent&&n.fourthPage.classList.add("pagination__page--activ"),n.fifthPage&&E==n.fifthPage.textContent&&n.fifthPage.classList.add("pagination__page--activ"),n.lastPag&&E==n.lastPag.textContent&&n.lastPag.classList.add("pagination__page--activ"),n.preFirstPage&&E==n.preFirstPage.textContent&&n.preFirstPage.classList.add("pagination__page--activ"),n.preLastPag&&E==n.preLastPag.textContent&&n.preLastPag.classList.add("pagination__page--activ")}var C=a("5SzY7"),x=a("JvLcY");x=a("JvLcY");const M=new(0,C.default);let E=1;const O={form:document.querySelector(".header_search"),pagination:document.querySelector("#pagination"),paginationLib:document.querySelector("#pagination")};function B(e,n,t){e&&e.addEventListener(n,t)}function k(e,n,t){e&&e.removeEventListener(n,t)}k(O.paginationLib,"click",x.onlibraryLink),k(O.paginationLib,"click",x.onlibraryBtn),B(O.pagination,"click",(function(e){if(e.preventDefault(),"A"!==e.target.nodeName)return;E=Number(e.target.textContent),D?(M.spinOn(),S(e)):(M.spinOn(),w());console.log("Это меин"),G>1&&G<8?h():1!==G&&(p(),q());$(),T(),M.spinOff()})),B(O.pagination,"click",(function(e){if(e.preventDefault(),"BUTTON"!==e.target.nodeName)return;const n={leftBtn:document.querySelector(".btn-left"),rightBtn:document.querySelector(".btn-right")};e.target===n.rightBtn&&(E+=1);e.target===n.leftBtn&&(E-=1);D?(M.spinOn(),S(e)):(M.spinOn(),w());G>1&&G<8?h():1!==G&&(d(),q());$(),T(),M.spinOff()})),B(O.form,"submit",(e=>E=1));let H="ua";async function F(e){let n=localStorage.getItem("lang");return H="ua"===n?"uk":"en",await(await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${e}&language=${H}&page=${E}`)).json()}async function N(e,n){const t=await(await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${e}&language=${n}`)).json();return r.default.save("genresList",t.genres),console.log("Genres were updated, and saved to localStorage for future"),t.genres}async function j(e,n,t){t="en"===localStorage.getItem("lang")?"en":"uk";return await(await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${e}&language=e${t}&query=${n}`)).json()}b=a("ccJnQ"),b=a("ccJnQ");const I=new(0,(C=a("5SzY7")).default);async function R(){I.spinOn();const e=await J("565e4989d784811de7dff7d665000157"),n=await y(e);I.spinOff(),(0,b.renderItems)(n),m()}a("7GRT7");const Y=new(0,(C=a("5SzY7")).default),A=document.querySelector("#pagination");let G,D,z="";async function J(e){const n=await F(e);return n.total_pages>0&&(G=n.total_pages),n.results}P=a("jWOqs");var U=a("z2zGY"),Z=a("6WRUV"),Q=a("2l4hZ");r=a("7GRT7");let W=(0,Q.langCurrent)();function V(){const e=document.querySelector(".js-filter-years");e.innerHTML="";let n=(0,Q.langCurrent)(),t="All Years";"ua"==(0,Q.langCurrent)()&&(t="Усі роки",n="uk");let a=(new Date).getFullYear();e.innerHTML=(()=>{let e=`<option class="js-filter-year" value="" selected>${t}</option>`;for(let n=a;n>=1907;n-=1)e+=`<option value="${n}">${n}</option>`;return e})()}async function K(){const e=document.querySelector(".js-filter-genres");e.innerHTML="";let n=(0,Q.langCurrent)(),t="All Genres",a=[];"ua"==(0,Q.langCurrent)()&&(t="Усі жанри",n="uk"),W===(0,Q.langCurrent)()&&r.default.load("genresList")?a=r.default.load("genresList"):(a=await N("565e4989d784811de7dff7d665000157",n),W=(0,Q.langCurrent)());let i=`<option class="js-filter-genres--default" value="" selected>${t}</option>`;i+=a.map((e=>`<option value="${e.id}">${e.name}</option>`)).join(""),e.innerHTML=i}a("f5Zbu");Q=a("2l4hZ");function X(e){(0,Q.setIndexLang)(e),K(),V(),R()}K(),V(),l.mainContainer.addEventListener("click",s.openModal),l.openModalBtn.addEventListener("click",i.openModalFooter),l.form.addEventListener("submit",(async function(e){if(e.preventDefault(),Y.spinOn(),z=e.target.search.value,l.searchResultText.classList.add("visually-hidden"),!z)return R(),D="",void Y.spinOff();const n=await async function(){const e=await j("565e4989d784811de7dff7d665000157",z);e.total_pages>0&&(G=e.total_pages);return e.results}(),t=await y(n);if(n.length&&(D=e.target.search.value),t.length)return(0,b.renderItems)(t),A.innerHTML="",G>1&&G<8?h():1!==G&&m(),void Y.spinOff();l.searchResultText.classList.remove("visually-hidden"),Y.spinOff()})),l.enLangBTN.addEventListener("click",(()=>X("en"))),l.uaLangBTN.addEventListener("click",(()=>X("ua")));const ee=(0,Q.langCurrent)();R(),(0,Q.setIndexLang)(ee),(0,P.default)(),(0,U.default)(),(0,Z.default)(),(0,Z.controlColorFilter)();
//# sourceMappingURL=index.27c4ba32.js.map
