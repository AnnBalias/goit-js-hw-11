import{i as c,S as f}from"./assets/vendor-5ObWk2rO.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();const u=s=>{const i=`https://pixabay.com/api/?${new URLSearchParams({key:"47396593-fa81edaacd7e53da3770e0abc",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;return fetch(i).then(l=>{if(!l.ok)throw new Error(l.status);return l.json()})},m=s=>s.map(e=>`<li class="gallery-item">
            <a class="gallery-link" href="${e.largeImageURL}">
                <img class="gallery-img" src="${e.webformatURL}" alt="${e.tags}" />
                <ul class="img-info-list">
                    <li class="img-info-item">
                        <p class="info-title">Likes</p>
                        <p class="info-value">${e.likes}</p>
                    </li>
                    <li class="img-info-item">
                        <p class="info-title">Views</p>
                       <p class="info-value">${e.views}</p>
                    </li>
                    <li class="img-info-item">
                        <p class="info-title">Comments</p>
                        <p class="info-value">${e.comments}</p>
                    </li>
                    <li class="img-info-item">
                        <p class="info-title">Downloads</p>
                        <p class="info-value">${e.downloads}</p>
                    </li>
                </ul>
            </a>
        </li>`).join("");c.settings({position:"topRight",maxWidth:"432px"});const p=document.querySelector(".form"),o=document.querySelector(".loader");o.style.display="none";const n=document.querySelector(".gallery-list"),d=new f(".gallery-item .gallery-link",{captionsData:"alt"});p.addEventListener("submit",y);function y(s){s.preventDefault();let e=s.target.elements.input.value.trim();if(e===""){o.style.display="none",c.warning({message:"The field is empty!"});return}e&&(o.style.display="block"),u(e).then(i=>{if(i.total===0)throw n.innerHTML="",new Error;return o.style.display="none",i.hits}).then(i=>{n.innerHTML="",o.style.display="none",n.innerHTML=m(i),d.refresh()}).catch(()=>{o.style.display="none",c.error({iconColor:"#ffffff",messageColor:"#ffffff",progressBarColor:"#ffffff",message:"Sorry, there are no images matching your search query. Please try again!"})}).finally(()=>{s.target.elements.input.value=""})}
//# sourceMappingURL=index.js.map
