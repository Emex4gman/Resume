!function(e){var t={};function c(s){if(t[s])return t[s].exports;var n=t[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=t,c.d=function(e,t,s){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(s,n,function(t){return e[t]}.bind(null,n));return s},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c(c.s=0)}([function(e,t){let c=document.querySelectorAll(".project-item");window.onload=()=>{fetch("data/projects.json").then(e=>e.json()).then(e=>{(e=>{for(item of e){item.tools.join("</button><button class='technology-btn'>");let e=`\n      <div class="project-item">\n              <div class="project-left">\n                <h2 class="project-title">${item.title}</h2>\n                <p class="project-subtext">${item.subTitle}</p>\n                <p>\n                 ${item.body}\n                </p>\n                <p><em>${item.rolePlayed}</em></p>\n\n                <ul>\n               \n                  <li>\n                  ${item.appFunctions.join("</li><li>")}\n                   \n                  </li>\n                </ul>\n                <a href="${item.applink}">\n                  <button class="technology-btn">MORE INFO</button>\n                </a>\n\n                <p>TECHNOLOGIES</p>\n                <button class="technology-btn">${item.tools.join('</button><button class="technology-btn">')}</button>\n              </div>\n              <div class="project-right">\n                <img\n                  class="project-image"\n                  src="${item.image}"\n                  alt=""\n                  srcset=""\n                />\n              </div>\n            </div>\n    `,t=document.querySelector(".projects-content");t.innerHTML=t.innerHTML+e,c=document.querySelectorAll(".project-item")}})(e)}),setTimeout(()=>{document.querySelector(".home-content").style.opacity=1,document.querySelector(".home-content").style.position="relative",document.querySelector(".home-content").style.left=0},350);let e=document.querySelector(".home"),t=document.querySelector(".about"),s=document.querySelector(".skills"),n=document.querySelector(".projects"),o=document.querySelector(".contact"),r=document.querySelector(".blog"),i=document.querySelector(".homeButton"),l=document.querySelector(".aboutButton"),a=document.querySelector(".skillsButton"),u=document.querySelectorAll(".projectsButton"),v=document.querySelector(".blogButton"),m=document.querySelectorAll(".contactButton");const d=()=>{n.classList.contains("active-screen")?(console.log(n.classList.contains("active-screen")),c.forEach(e=>{e.style.display="block"})):c.forEach(e=>{e.style.display="none"})};i.addEventListener("click",()=>{e.classList.add("active-screen"),t.classList.remove("active-screen"),s.classList.remove("active-screen"),n.classList.remove("active-screen"),r.classList.remove("active-screen"),o.classList.remove("active-screen"),d()}),l.addEventListener("click",()=>{t.classList.add("active-screen"),e.classList.remove("active-screen"),s.classList.remove("active-screen"),n.classList.remove("active-screen"),r.classList.remove("active-screen"),o.classList.remove("active-screen"),d()}),a.addEventListener("click",()=>{s.classList.add("active-screen"),e.classList.remove("active-screen"),t.classList.remove("active-screen"),n.classList.remove("active-screen"),r.classList.remove("active-screen"),o.classList.remove("active-screen"),d()}),u.forEach(c=>{c.addEventListener("click",()=>{n.classList.add("active-screen"),e.classList.remove("active-screen"),t.classList.remove("active-screen"),s.classList.remove("active-screen"),r.classList.remove("active-screen"),o.classList.remove("active-screen"),d()})}),v.addEventListener("click",()=>{r.classList.add("active-screen"),e.classList.remove("active-screen"),t.classList.remove("active-screen"),n.classList.remove("active-screen"),s.classList.remove("active-screen"),o.classList.remove("active-screen"),d()}),m.forEach(c=>{c.addEventListener("click",()=>{o.classList.add("active-screen"),e.classList.remove("active-screen"),t.classList.remove("active-screen"),s.classList.remove("active-screen"),n.classList.remove("active-screen"),r.classList.remove("active-screen"),d()})}),getDirection=(e,t)=>{}}}]);