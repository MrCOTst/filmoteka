!function(){var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},t={},a=n.parcelRequired76b;null==a&&((a=function(n){if(n in e)return e[n].exports;if(n in t){var a=t[n];delete t[n];var i={id:n,exports:{}};return e[n]=i,a.call(i.exports,i,i.exports),i.exports}var s=new Error("Cannot find module '"+n+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(n,e){t[n]=e},n.parcelRequired76b=a);var i=a("cJBkb"),s=a("jGe89");const l="565e4989d784811de7dff7d665000157",o={mainContainer:document.querySelector(".filmoteka__container"),openModalBtn:document.querySelector(".modal-footer-open"),searchResultText:document.querySelector(".form-text"),form:document.querySelector(".header_search"),enLangBTN:document.getElementById("e-lang-en"),uaLangBTN:document.getElementById("e-lang-ua")};var r=a("gQxnC");function g(n,e,t,a,i){return`<div class='pagination-decrement'>\n  <button class='btn-left btn' type='button'>\n   <\n  </button>\n</div>\n<ul class="pagination__list">\n <li class='pagination__item'>\n  <a class='pagination__page' id="preFirstPage" href=''>1</a>\n </li>\n <span class='pagination__ellipsis visually-hidden' id="ellipsisStart">...</span>\n  <li class='pagination__item'>\n  <a class='pagination__page' id="firstPage" href=''>${n}</a>\n </li>\n <li class='pagination__item'>\n  <a class='pagination__page' id ='thirdPage' href=''>${e}</a>\n </li>\n <li class='pagination__item'>\n  <a class='pagination__page' id ='fourthPage' href=''>${t}</a>\n </li>\n <li class='pagination__item'>\n  <a class='pagination__page' id ='fifthPage' href=''>${a}</a>\n </li>\n <li class='pagination__item' id="preLastItem">\n  <a class='pagination__page' id="lastPag" href=''>${i}</a>\n </li>\n  <span class='pagination__ellipsis' id="ellipsisEnd">...</span>\n <li class='pagination__item' id="lastItem">\n  <a class='pagination__page' id="preLastPag" href=''>${R}</a>\n </li>\n</ul>\n<div class='pagination-increment'>\n  <button class='btn-right btn' type='button'>\n    >\n  </button>\n</div>`}function c(n,e,t,a,i){return`<div class='pagination-decrement'>\n  <button class='btn-left btn' type='button'>\n   <\n  </button>\n</div>\n\n<ul class="pagination__list">\n<li class="pagination__item">\n  <a class='pagination__page' id="preFirstPage" href=''>1</a>\n</li>\n  <span class='pagination__ellipsis visually-hidden' id="ellipsisStart">...</span>\n<li class="pagination__item">\n  <a class='pagination__page' id="firstPage" href=''>${n}</a>\n</li>\n<li class="pagination__item">\n  <a class='pagination__page' id ='thirdPage' href=''>${e}</a>\n</li>\n<li class="pagination__item">\n  <a class='pagination__page' id ='fourthPage' href=''>${t}</a>\n</li>\n<li class="pagination__item">\n  <a class='pagination__page' id ='fifthPage' href=''>${a}</a>\n</li>\n<li class="pagination__item">\n  <a class='pagination__page' id="lastPag" href=''>${i}</a>\n</li>\n  <span class='pagination__ellipsis' id="ellipsisEnd">...</span>\n<li class="pagination__item">\n  <a class='pagination__page  pagination__page--activ' id="preLastPag" href=''>${R}</a>\n</li>\n\n</ul>\n\n<div class='pagination-increment'>\n  <button class='btn-right btn' type='button'>\n    >\n  </button>\n</div>`}const p=document.querySelector("#pagination");function u(n){const e=document.querySelector("#firstPage"),t=document.querySelector("#lastPag"),a={peg2:k,peg3:k,peg4:k,peg5:k,peg6:k};Number(t.textContent)===k&&m(a),(k===R||k>=R-4)&&f(a),Number(e.textContent)===k&&_(a),(1===k||k<=5)&&h()}function d(n){const e=document.querySelector("#firstPage"),t=document.querySelector("#lastPag"),a={peg2:k,peg3:k,peg4:k,peg5:k,peg6:k};k>=R-5&&f(a),k>Number(t.textContent)&&m(a),k<=5&&h(),k<Number(e.textContent)&&_(a)}function f(n){if(k>R)return;let{peg2:e,peg3:t,peg4:a,peg5:i,peg6:s}=n;p.innerHTML="",s=R-1,i=R-2,a=R-3,t=R-4,e=R-5,p.innerHTML=c(e,t,a,i,s)}function _(n){if(k<=2)return;p.innerHTML="";let{peg2:e,peg3:t,peg4:a,peg5:i,peg6:s}=n;i-=1,a-=2,t-=3,e-=4,p.innerHTML=g(e,t,a,i,s)}function m(n){if(k>=R-1)return;p.innerHTML="";let{peg2:e,peg3:t,peg4:a,peg5:i,peg6:s}=n;t+=1,a+=2,i+=3,s+=4,p.innerHTML=g(e,t,a,i,s)}function h(){if(R<7)return;p.innerHTML="",p.innerHTML=`<div class='pagination-decrement'>\n  <button class='btn-left btn' type='button' disabled>\n  <\n  </button>\n</div>\n\n<ul class="pagination__list">\n<li class="pagination__item">\n  <a class='pagination__page pagination__page--activ' id="preFirstPage" href=''>1</a>\n</li>\n<span class='pagination__ellipsis visually-hidden' id="ellipsisStart">...</span>\n<li class="pagination__item">\n  <a class='pagination__page' id="firstPage" href=''>2</a>\n</li>\n<li class="pagination__item">\n  <a class='pagination__page' id="thirdPage" href=''>3</a>\n</li>\n<li class="pagination__item">\n  <a class='pagination__page' id="fourthPage" href=''>4</a>\n</li>\n<li class="pagination__item">\n  <a class='pagination__page' id="fifthPage" href=''>5</a>\n</li>\n<li class="pagination__item">\n  <a class='pagination__page' id="lastPag" href=''>6</a>\n</li>\n  <span class='pagination__ellipsis' id="ellipsisEnd">...</span>\n<li class="pagination__item">\n  <a class='pagination__page' id="preLastPag" href=''>${R}</a>\n</li>\n\n</ul>\n\n<div class='pagination-increment'>\n  <button class='btn-right btn' type='button'>\n  >\n  </button>\n\n</div>`;const n=document.querySelector(".is-none");n&&n.classList.remove("is-none")}function v(){p.innerHTML="",p.innerHTML="<div class='pagination-decrement'>\n  <button class='btn-left btn' type='button' disabled>\n  <\n  </button>\n</div>\n  <ul class=\"pagination__list\">\n  <li class='pagination__item'>\n  <a class=\"pagination__page pagination__page--activ \" id=\"preFirstPage\" href=''>1</a>\n  </li>\n  </ul>\n<div class='pagination-increment'>\n  <button class='btn-right btn' type='button'>\n  >\n  </button>\n\n</div>";const n=[,,'id="firstPage"',"id ='thirdPage'","id ='fourthPage'","id ='fifthPage'",'id="lastPag"','id="preLastPag"'],e=document.querySelector(".pagination__list");let t="";for(let e=2;e<R+1;e+=1)t+=`<li class='pagination__item'><a class="pagination__page"  href='' ${n[e]}>${e}</a></li>`;e.insertAdjacentHTML("beforeend",t)}r=a("gQxnC");async function y(n){r.default.load("genresList")||await N(l);let e=r.default.load("genresList"),t=new Array;return n.forEach((async n=>{try{t.push(e.find((e=>e.id===n)).name)}catch(a){console.log(`${n} wasn't found in Local Storage, updating ganresList`),e=await N(l),t.push(e.find((e=>e.id===n)).name)}})),t.join(", ")}r=a("gQxnC");async function b(n){const e=await Promise.all(n.map((async({id:n,title:e,original_title:t,name:a,original_name:i,overview:s,poster_path:l,genre_ids:o,popularity:r,release_date:g,first_air_date:c,vote_average:p,vote_count:u})=>{const d=e||a,f=t||i,_=g||c,m=l?"https://image.tmdb.org/t/p/w300"+l:"",h=o.length>1&&await y(o),v=p?p.toFixed(1):0;return await{id:n,title:d,originalTitle:f,year:_?_.slice(0,4):void 0,genres:h,popularity:r,overview:s,rating:v,voteCount:u,imgPath:m}})));return r.default.save("currentPage",e),e}var P=a("gzo5i"),L=a("4FHbW");const S=new(0,(T=a("hBZCD")).default);async function w(n){n.preventDefault();const e=await async function(){return(await async function(n){return await(await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${n}&language=en-US&query=${U}&page=${k}`)).json()}(l)).results}(),t=await b(e);if(t.length)return(0,P.renderItems)(t),S.spinOff(),void(0,L.default)()}async function q(){const n=await G(l),e=await b(n);(0,P.renderItems)(e),S.spinOff(),(0,L.default)()}function C(){const n={firstPage:document.querySelector("#firstPage"),lastPage:document.querySelector("#lastPag"),ellipsisStart:document.querySelector("#ellipsisStart"),ellipsisEnd:document.querySelector("#ellipsisEnd")};n.firstPage.textContent>2&&n.ellipsisStart.classList.remove("visually-hidden"),n.lastPage.textContent>=R-1?n.ellipsisEnd.classList.add("visually-hidden"):n.ellipsisEnd.classList.remove("visually-hidden")}function $(){const n={leftBtn:document.querySelector(".btn-left"),rightBtn:document.querySelector(".btn-right")};k>1&&n.leftBtn.removeAttribute("disabled"),k!==R?n.rightBtn.removeAttribute("disabled"):n.rightBtn.setAttribute("disabled","disabled")}function x(n){const e={activ:document.querySelector(".pagination__page--activ"),pagination:document.querySelector("#pagination"),firstPage:document.querySelector("#firstPage"),thirdPage:document.querySelector("#thirdPage"),fourthPage:document.querySelector("#fourthPage"),fifthPage:document.querySelector("#fifthPage"),lastPag:document.querySelector("#lastPag"),preFirstPage:document.querySelector("#preFirstPage"),preLastPag:document.querySelector("#preLastPag")};e.activ&&e.activ.classList.remove("pagination__page--activ"),e.firstPage&&k==e.firstPage.textContent&&e.firstPage.classList.add("pagination__page--activ"),e.thirdPage&&k==e.thirdPage.textContent&&e.thirdPage.classList.add("pagination__page--activ"),e.fourthPage&&k==e.fourthPage.textContent&&e.fourthPage.classList.add("pagination__page--activ"),e.fifthPage&&k==e.fifthPage.textContent&&e.fifthPage.classList.add("pagination__page--activ"),e.lastPag&&k==e.lastPag.textContent&&e.lastPag.classList.add("pagination__page--activ"),e.preFirstPage&&k==e.preFirstPage.textContent&&e.preFirstPage.classList.add("pagination__page--activ"),e.preLastPag&&k==e.preLastPag.textContent&&e.preLastPag.classList.add("pagination__page--activ")}var T=a("hBZCD"),B=a("5S7aa");B=a("5S7aa");const M=new(0,T.default);let k=1;const H={form:document.querySelector(".header_search"),pagination:document.querySelector("#pagination"),paginationLib:document.querySelector("#pagination")};function E(n,e,t){n&&n.addEventListener(e,t)}function O(n,e,t){n&&n.removeEventListener(e,t)}O(H.paginationLib,"click",B.onlibraryLink),O(H.paginationLib,"click",B.onlibraryBtn),E(H.pagination,"click",(function(n){if(n.preventDefault(),"A"!==n.target.nodeName)return;k=Number(n.target.textContent),U?(M.spinOn(),w(n)):(M.spinOn(),q());console.log("Это меин"),R>1&&R<8?v():1!==R&&(u(),C());x(),$(),M.spinOff()})),E(H.pagination,"click",(function(n){if(n.preventDefault(),"BUTTON"!==n.target.nodeName)return;const e={leftBtn:document.querySelector(".btn-left"),rightBtn:document.querySelector(".btn-right")};n.target===e.rightBtn&&(k+=1);n.target===e.leftBtn&&(k-=1);U?(M.spinOn(),w(n)):(M.spinOn(),q());R>1&&R<8?v():1!==R&&(d(),C());x(),$(),M.spinOff()})),E(H.form,"submit",(n=>k=1));let F="ua";async function j(n){let e=localStorage.getItem("lang");return F="ua"===e?"uk":"en",await(await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${n}&language=${F}&page=${k}`)).json()}async function N(n,e){const t=await(await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${n}&language=${e}`)).json();return r.default.save("genresList",t.genres),console.log("Genres were updated, and saved to localStorage for future"),t.genres}async function I(n,e,t){t="en"===localStorage.getItem("lang")?"en":"uk";return await(await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${n}&language=e${t}&query=${e}`)).json()}P=a("gzo5i"),P=a("gzo5i");const D=new(0,(T=a("hBZCD")).default);async function A(){D.spinOn();const n=await G(l),e=await b(n);D.spinOff(),(0,P.renderItems)(e),h()}a("gQxnC");const Z=new(0,(T=a("hBZCD")).default),Q=document.querySelector("#pagination");let R,U,z="";async function G(n){const e=await j(n);return e.total_pages>0&&(R=e.total_pages),e.results}L=a("4FHbW");var Y=a("jS5ak"),W=a("lpZvY"),J=a("6tjHf");r=a("gQxnC");let K=(0,J.langCurrent)();function V(){const n=document.querySelector(".js-filter-years");n.innerHTML="";let e=(0,J.langCurrent)(),t="All Years";"ua"==(0,J.langCurrent)()&&(t="Усі роки",e="uk");let a=(new Date).getFullYear();n.innerHTML=(()=>{let n=`<option class="js-filter-year" value="" selected>${t}</option>`;for(let e=a;e>=1907;e-=1)n+=`<option value="${e}">${e}</option>`;return n})()}async function X(){const n=document.querySelector(".js-filter-genres");n.innerHTML="";let e=(0,J.langCurrent)(),t="All Genres",a=[];"ua"==(0,J.langCurrent)()&&(t="Усі жанри",e="uk"),K===(0,J.langCurrent)()&&r.default.load("genresList")?a=r.default.load("genresList"):(a=await N(l,e),K=(0,J.langCurrent)());let i=`<option class="js-filter-genres--default" value="" selected>${t}</option>`;i+=a.map((n=>`<option value="${n.id}">${n.name}</option>`)).join(""),n.innerHTML=i}a("gyZtm");J=a("6tjHf");function nn(n){(0,J.setIndexLang)(n),X(),V(),A()}X(),V(),o.mainContainer.addEventListener("click",s.openModal),o.openModalBtn.addEventListener("click",i.openModalFooter),o.form.addEventListener("submit",(async function(n){if(n.preventDefault(),Z.spinOn(),z=n.target.search.value,o.searchResultText.classList.add("visually-hidden"),!z)return A(),U="",void Z.spinOff();const e=await async function(){const n=await I(l,z);n.total_pages>0&&(R=n.total_pages);return n.results}(),t=await b(e);if(e.length&&(U=n.target.search.value),t.length)return(0,P.renderItems)(t),Q.innerHTML="",R>1&&R<8?v():1!==R&&h(),void Z.spinOff();o.searchResultText.classList.remove("visually-hidden"),Z.spinOff()})),o.enLangBTN.addEventListener("click",(()=>nn("en"))),o.uaLangBTN.addEventListener("click",(()=>nn("ua")));const en=(0,J.langCurrent)();A(),(0,J.setIndexLang)(en),(0,L.default)(),(0,Y.default)(),(0,W.default)(),(0,W.controlColorFilter)()}();
//# sourceMappingURL=index.b192f1de.js.map
