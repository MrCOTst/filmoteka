var e={save:(e,t)=>{try{const n=JSON.stringify(t);localStorage.setItem(e,n)}catch(t){console.error(`Error during saving ${e} to local strage; `,t.message)}},load:e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(t){console.error(`Error during getting ${e} from localStorage: `,t.message)}},del:e=>{try{localStorage.removeItem(e)}catch(t){console.error(`Error during deleting ${e}! from localStorage: `,t.message)}}};async function t(t){e.load("genresList")||await _(x);let n=e.load("genresList"),a=new Array;return t.forEach((e=>{try{a.push(n.find((t=>t.id===e)).name)}catch(t){console.log(`${e} wasn't found in Local Storage, updating ganresList`),n=await(0,_)(x),a.push(n.find((t=>t.id===e)).name)}})),a.join(", ")}let n;async function a(e){const a=await v(e);n=a.total_pages;const i=a.results;return await Promise.all(i.map((async({id:e,title:n,original_title:a,name:i,original_name:o,overview:s,poster_path:r,genre_ids:l,popularity:c,release_date:d,first_air_date:u,vote_average:g,vote_count:p})=>{const m=n||i,f=a||o,v=d||u,_=r?"https://image.tmdb.org/t/p/w300"+r:"",y=l?await t(l):null,b=g?g.toFixed(1):0;return await{id:e,title:m,originalTitle:f,year:v.slice(0,4),genres:y,popularity:c,overview:s,rating:b,voteCount:p,imgPath:_}})))}function i(e,t,a,i,o){return`<div class='pagination-decrement'>\n  <button class='btn-left btn' type='button'>\n   \n  </button>\n</div>\n<a class='pagination__page ' href=''>1</a>\n<span class='pagination__ellipsisStart visually-hidden' id="ellipsisStart">...</span>\n<a class='pagination__page' id="firstPage" href=''>${e}</a>\n<a class='pagination__page' href=''>${t}</a>\n<a class='pagination__page' href=''>${a}</a>\n<a class='pagination__page' href=''>${i}</a>\n<a class='pagination__page' id="lastPag" href=''>${o}</a>\n<span class='pagination__ellipsisEnd' id="ellipsisEnd">...</span>\n<a class='pagination__lastPage' href=''>${n}</a>\n<div class='pagination-increment'>\n  <button class='btn-right btn' type='button'>\n    \n  </button>\n</div>`}const o=document.querySelector("#pagination");function s(){const e=document.querySelector("#firstPage"),t=document.querySelector("#lastPag"),a={peg2:p,peg3:p,peg4:p,peg5:p,peg6:p};if(p===n||p>=n-4)l(a);else{if(Number(t.textContent)===p){if(Number(t.textContent)===n-1)return;d(a)}if(Number(e.textContent)===p){if(2===Number(e.textContent))return;c(a)}(1===p||p<=5)&&u(),(p===n||p>n-2)&&l()}}function r(e){const t=document.querySelector("#firstPage"),a=document.querySelector("#lastPag"),i={peg2:p,peg3:p,peg4:p,peg5:p,peg6:p};if(p===n||p>=n-5)l(i);else{if(p>Number(a.textContent)){if(Number(a.textContent)===n-1)return;d(i)}if(5!==p){if(p<Number(t.textContent)){if(1===p)return;c(i)}}else u()}}function l(e){if(p>n)return;let{peg2:t,peg3:a,peg4:s,peg5:r,peg6:l}=e;o.innerHTML="",l=n-1,r=n-2,s=n-3,a=n-4,t=n-5,o.innerHTML=i(t,a,s,r,l)}function c(e){o.innerHTML="";let{peg2:t,peg3:n,peg4:a,peg5:s,peg6:r}=e;s-=1,a-=2,n-=3,t-=4,o.innerHTML=i(t,n,a,s,r)}function d(e){if(p>n)return;o.innerHTML="";let{peg2:t,peg3:a,peg4:s,peg5:r,peg6:l}=e;a+=1,s+=2,r+=3,l+=4,o.innerHTML=i(t,a,s,r,l)}function u(e){o.innerHTML="",o.innerHTML=`<div class='pagination-decrement'>\n  <button class='btn-left btn' type='button'>\n \n  </button>\n</div>\n<a class='pagination__page ' href=''>1</a>\n<span class='pagination__ellipsisStart visually-hidden' id="ellipsisStart">...</span>\n<a class='pagination__page' id="firstPage" href=''>2</a>\n<a class='pagination__page' href=''>3</a>\n<a class='pagination__page' href=''>4</a>\n<a class='pagination__page' href=''>5</a>\n<a class='pagination__page' id="lastPag" href=''>6</a>\n<span class='pagination__ellipsisEnd' id="ellipsisEnd">...</span>\n<a class='pagination__lastPage' href=''>${n}</a>\n<div class='pagination-increment'>\n  <button class='btn-right btn' type='button'>\n    \n  </button>\n \n</div>`}function g(){const e=document.querySelector("#firstPage"),t=document.querySelector("#lastPag"),a=document.querySelector("#ellipsisStart"),i=document.querySelector("#ellipsisEnd");e.textContent>2&&a.classList.remove("visually-hidden"),t.textContent>=n-1?i.classList.add("visually-hidden"):i.classList.remove("visually-hidden")}let p=1;const m=document.querySelector("#pagination"),f={mainContainer:document.querySelector(".filmoteka__container")};async function v(e){return await(await fetch(M+`3/trending/movie/day?api_key=${e}&page=${p}`)).json()}async function _(t){const n=await(await fetch(M+`3/genre/movie/list?api_key=${t}&language=en-US`)).json();return e.save("genresList",n.genres),console.log("Genres were updated, and saved to localStorage for future"),n.genres}async function y(e,t){return await(await fetch(M+`3/search/movie?api_key=${e}&language=en-US&query=${t}`)).json()}m.addEventListener("click",(function(e){if(e.preventDefault(),"A"!==e.target.nodeName)return;p=Number(e.target.textContent),f.mainContainer.innerHTML="",N(),s(),g()})),m.addEventListener("click",(function(e){if(e.preventDefault(),"BUTTON"!==e.target.nodeName)return;const t=document.querySelector(".btn-left"),n=document.querySelector(".btn-right");e.target===n&&(p+=1);e.target===t&&(p-=1);f.mainContainer.innerHTML="",N(),r(),g()}));let b="";const h={form:document.querySelector(".header_search"),mainContainer:document.querySelector(".filmoteka__container"),text:document.querySelector(".form-text")};h.form.addEventListener("submit",(n=>{n.preventDefault();const{elements:{search:a}}=n.target;b=a.value,async function(){const n=await async function(){const e=await y("c77f748b921c87e18a4a8be3b6f2e99b",b),n=(e.total_pages,e.results);return await Promise.all(n.map((async({id:e,title:n,original_title:a,name:i,original_name:o,overview:s,poster_path:r,genre_ids:l,popularity:c,release_date:d,first_air_date:u,vote_average:g,vote_count:p})=>{const m=n||i,f=a||o,v=d||u;let _=r?"https://image.tmdb.org/t/p/w300"+r:"";const y=l?await t(l):null,b=g||null;return await{id:e,title:m,originalTitle:f,year:v.slice(0,4),genres:y,popularity:c,overview:s,rating:b,voteCount:p,imgPath:_}})))}();if(0===n.length)return void h.text.classList.remove("visually-hidden");h.text.classList.add("visually-hidden"),e.save("currentPage",n);const a=n.map((({id:e,title:t,year:n,genres:a,popularity:i,imgPath:o})=>`<div class="filmoteka__item" data-id="${e}">\n        <a class="filmoteka__item-link" href="./">\n            <div class="filmoteka__item-wrapper">\n                <img class="filmoteka-img" src="${o}" alt="">\n                <div class="overlay-text">\n                    <h2 class="subtitle">${t}</h2>\n                    <p class="discription">${a}<span class="filmoteka__year"> ${n}</span> </p>\n                    <div class="filmoteka__rating">${i}</div>\n                </div>\n            </div>\n        </a>\n    </div>`));h.mainContainer.innerHTML="",h.mainContainer.insertAdjacentHTML("beforeend",a.join(""))}()}));const L={overlay:document.querySelector(".modal-footer-overlay"),modalFooter:document.querySelector(".modal-footer")};function w(e){"Escape"===e.code&&S()}function S(){document.querySelector(".modal-footer.active").classList.remove("active"),document.querySelector(".modal-footer-overlay").classList.remove("active"),document.body.classList.remove("modal-is-open")}const $=document.querySelector(".cross"),k=document.querySelector(".backdrop"),E=document.querySelector(".modal-container");function q(t){if(!t.target.classList.contains("filmoteka__item"))return;!function(t){const n=e.load("currentPage").find((e=>e.id===t)),{id:a,title:i,originalTitle:o,year:s,genres:r,popularity:l,overview:c,rating:d,voteCount:u,imgPath:g}=n,p=`<div class="modal-img">\n  <img\n    class="modal-img"\n    src="${g}"\n    alt="${i}"\n    width="370"\n    height="470"\n  />\n</div>\n<div class="film-info">\n  <h2 class="film-name">${i}</h2>\n  <table class="modal-table">\n    <tr class="modal-table__row">\n      <td><p class="modal-table__attribute">Vote / Votes</p></td>\n      <td>\n        <p class="modal-table__value">\n          <span class="modal-table__vote">${d}</span> /\n          <span class="modal-table__votes">${u}</span>\n        </p>\n      </td>\n    </tr>\n    <tr class="modal-table__row">\n      <td><p class="modal-table__attribute">Popularity</p></td>\n      <td><p class="modal-table__value">${l}</p></td>\n    </tr>\n    <tr class="modal-table__row">\n      <td><p class="modal-table__attribute">Original Title</p></td>\n      <td><p class="modal-table__value">${o}</p></td>\n    </tr>\n    <tr class="modal-table__row">\n      <td><p class="modal-table__attribute">Genre</p></td>\n      <td><p class="modal-table__value">${r}</p></td>\n    </tr>\n  </table>\n\n  <h3 class="film-about">About</h3>\n  <p class="film-description">\n    ${c}\n  </p>\n  <div class="modal-btn-wrap">\n    <button type="button" class="modal-btn">ADD TO WATCHED</button>\n    <button type="button" class="modal-btn">ADD TO QUEUE</button>\n  </div>\n</div>`;E.insertAdjacentHTML("beforeend",p)}(+t.target.dataset.id),k.classList.remove("visually-hidden"),document.body.style.overflow="hidden",$.addEventListener("click",T),k.addEventListener("click",P),window.addEventListener("keydown",C)}function T(){k.classList.add("visually-hidden"),document.body.style.overflow="",k.removeEventListener("click",P),$.removeEventListener("click",T),window.removeEventListener("keydown",C),E.innerHTML=""}function C(e){"Escape"===e.code&&T()}function P(e){e.target.classList.contains("backdrop")&&T()}const x="565e4989d784811de7dff7d665000157",M="https://api.themoviedb.org/",H={mainContainer:document.querySelector(".filmoteka__container"),openModalBtn:document.querySelector(".modal-footer-open")};async function N(){const t=await a(x);e.save("currentPage",t),console.log(t);const n=t.map((({id:e,title:t,year:n,genres:a,rating:i,imgPath:o})=>{let s=(a.match(/\,/g)||[]).length;for(;s>1;)s=((a=a.slice(0,a.lastIndexOf(","))+"...").match(/\,/g)||[]).length;return`<div class="filmoteka__item" data-id="${e}">\n            <div class="filmoteka__item-wrapper">\n                <img class="filmoteka-img" src="${o}" alt="">\n                <div class="overlay-text">\n                    <h2 class="subtitle">${t}</h2>\n                    <p class="discription">${a} <span class="filmoteka__year"> ${n}</span> </p>\n                    <div class="filmoteka__rating">${i}</div>\n                </div>\n            </div>\n    </div>`}));H.mainContainer.insertAdjacentHTML("beforeend",n.join("")),H.mainContainer.addEventListener("click",q),u()}N(),H.openModalBtn.addEventListener("click",(function(){L.overlay.classList.add("active"),L.modalFooter.classList.add("active"),document.body.classList.add("modal-is-open"),document.body.addEventListener("keydown",w),L.overlay.addEventListener("click",S)}));
//# sourceMappingURL=index.63744ef7.js.map
