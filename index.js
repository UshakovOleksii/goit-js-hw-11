import{a as d,S as f,i}from"./assets/vendor-CrlV4O_2.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const p="50380321-193e548b907b6421e1e4d79af",m="https://pixabay.com/api/";async function y(s){return(await d.get(m,{params:{key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const g=new f(".gallery a",{captionsData:"alt",captionDelay:250}),c=document.querySelector(".gallery"),l=document.querySelector(".loader");function h(s){const o=s.map(t=>`
        <li class="gallery-item">
          <a href="${t.largeImageURL}">
            <img src="${t.webformatURL}" alt="${t.tags}" loading="lazy" />
          </a>
          <div class="info">
            <p><b>Likes:</b> ${t.likes}</p>
            <p><b>Views:</b> ${t.views}</p>
            <p><b>Comments:</b> ${t.comments}</p>
            <p><b>Downloads:</b> ${t.downloads}</p>
          </div>
        </li>
      `).join("");c.insertAdjacentHTML("beforeend",o),g.refresh()}function b(){c.innerHTML=""}function L(){l.classList.remove("hidden")}function w(){l.classList.add("hidden")}const u=document.querySelector(".form"),v=u.elements["search-text"];u.addEventListener("submit",async s=>{s.preventDefault();const o=v.value.trim();if(o===""){i.warning({title:"Warning",message:"Please enter a search term!",position:"topRight"});return}L(),b();try{const t=await y(o);if(t.hits.length===0){i.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(t.hits)}catch(t){i.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"}),console.error(t)}finally{w()}});
//# sourceMappingURL=index.js.map
