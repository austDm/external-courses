!function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="dist/",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);class o{constructor(e,t,r,o,n,a,i){this.author={},this.author.firstName=e,this.author.lastName=t,this.categories=r,this.cost=o,this.createdAt=this.updatedAt=Date.now(),this.image_url=n,this.rating=a,this.title=i}}class n{constructor(e){this.book={},this.date=Date.now(),Object.assign(this.book,e)}}function a(e){return e.slice().sort(function(e,t){return e.rating>t.rating?-1:1})}function i(e){return e.toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",weekday:"long"})}function s(e,t){var r=document.createElement("div");document.getElementById("wrapperbooks").appendChild(r),r.className="books",r.setAttribute("id",e.id);var o=document.createElement("div");r.appendChild(o),o.className="cover",o.style.background="url("+e.image_url+") top center/cover";var n=document.createElement("h3");r.appendChild(n),n.className="name",n.innerHTML=e.title;var s=document.createElement("span");r.appendChild(s),s.className="author",s.innerHTML="by "+e.author.firstName+" "+e.author.lastName;var c=document.createElement("div");r.appendChild(c),c.className="rate";for(var u=0;u<5;u++){var l=document.createElement("div");l.className="star",c.appendChild(l),u+1<=e.rating&&l.classList.add("active")}!function(e,t,r){e.addEventListener("click",function(o){var n=o.target;if(n.classList.contains("star")){for(var i=0;i<5;i++)if(n===t[i]){var s=i;break}for(i=0;i<5;i++)i<=s?(t[i].classList.remove("oncursor"),t[i].classList.add("active")):t[i].classList.remove("active","oncursor");r.allBooks.forEach(function(t){t.id===e.getAttribute("id")&&(t.rating=s+1)}),r.sortedPopularBooks=a(r.allBooks)}}),e.addEventListener("mouseover",function(e){var r=e.target;if(r.classList.contains("star")){for(var o=0;o<5;o++)if(r===t[o])var n=o;for(o=0;o<5;o++)o<=n?t[o].classList.add("oncursor"):t[o].classList.remove("oncursor")}}),e.addEventListener("mouseout",function(){for(var e=0;e<5;e++)t[e].classList.remove("oncursor")})}(r,c.children,t);var d=document.createElement("span");r.appendChild(d),d.className="info";var p=new Date(e.updatedAt);d.innerHTML="price:"+e.cost+"$,<br /> updated:"+i(p)}function c(e){var t=document.querySelector(".history"),r=document.createElement("li");t.insertBefore(r,t.firstChild);var o=new Date(e.book.updatedAt);r.insertAdjacentHTML("afterBegin","You added <span>"+e.book.title+"</span>\tby <span>"+e.book.author.firstName+" "+e.book.author.lastName+"</span> to your <span> Must Read Titles.</span><br> in "+i(o)),t=document.querySelector(".history");var n=document.querySelectorAll(".history li");4===n.length&&t.removeChild(n[3])}function u(e,t){var r=1e3;e.forEach(function(e){e.id=t+r++})}function l(e){return e.slice().sort(function(e,t){return e.updatedAt>t.updatedAt?-1:1})}function d(e){var t=[];return e.slice().forEach(function(e){0===e.cost&&t.push(e)}),t}function p(e,t){t.push(e)}function m(e,t,r,o){var n=new XMLHttpRequest;n.onreadystatechange=function(){4==this.readyState&&(200==this.status?4===this.readyState&&o(n):console.log("ошибка: "+(this.status?this.statusText:"повторите позже")))},"GET"===e.toUpperCase()?(n.open(e.toUpperCase(),t),n.send()):"POST"===e.toUpperCase()&&(n.open(e.toUpperCase(),t),n.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),n.send(r))}function h(){for(var e=document.querySelector("#wrapperbooks");e.firstChild;)e.removeChild(e.firstChild)}var v,f,b=[],k={addedBooks:[]};document.querySelector("button").addEventListener("click",()=>(function(e,t){var r=document.createElement("div");document.body.appendChild(r),r.className="darkness";var i=document.createElement("div");document.body.appendChild(i),i.className="wrapperAdd";var m=document.createElement("form");i.appendChild(m),m.id="newBookForm";var h=document.createElement("div");h.innerHTML="Author's firstname: ",m.appendChild(h);var v=document.createElement("input");m.appendChild(v),v.setAttribute("type","text"),v.setAttribute("required",""),v.setAttribute("maxlength","15");var f=document.createElement("div");f.innerHTML="Author's lastname: ",m.appendChild(f);var b=document.createElement("input");m.appendChild(b),b.setAttribute("type","text"),b.setAttribute("required",""),b.setAttribute("maxlength","15");var k=document.createElement("div");k.innerHTML="Categories (use commas): ",m.appendChild(k);var y=document.createElement("input");m.appendChild(y),y.setAttribute("type","text"),y.setAttribute("required",""),y.setAttribute("maxlength","25");var E=document.createElement("div");E.innerHTML="Price, $: ",m.appendChild(E);var A=document.createElement("input");m.appendChild(A),A.setAttribute("type","number"),A.setAttribute("required",""),A.setAttribute("max","9999");var C=document.createElement("div");C.innerHTML="Book cover (URL): ",m.appendChild(C);var g=document.createElement("input");m.appendChild(g),g.setAttribute("type","url"),g.setAttribute("required",""),g.setAttribute("maxlength","100");var B=document.createElement("div");B.innerHTML="Rate (from 1 to 5): ",m.appendChild(B);var L=document.createElement("input");m.appendChild(L),L.setAttribute("type","text"),L.setAttribute("pattern","[1-5]"),L.setAttribute("required","");var T=document.createElement("div");T.innerHTML="Title: ",m.appendChild(T);var M=document.createElement("input");m.appendChild(M),M.setAttribute("type","text"),M.setAttribute("required",""),M.setAttribute("maxlength","15");var S=document.createElement("input");m.appendChild(S),S.setAttribute("type","reset"),S.setAttribute("value","Reset fields");var w=document.createElement("input");m.appendChild(w),w.setAttribute("type","submit"),w.setAttribute("value","Add Book"),r.addEventListener("click",function(){document.body.removeChild(this),document.body.removeChild(i)}),m.addEventListener("submit",function(){var m=new o(v.value,b.value,y.value.split(","),+A.value,g.value,L.value,M.value);e.addedBooks.push(m),s(m,e),e.allBooks.push(e.addedBooks[e.addedBooks.length-1]),u(e.allBooks,"book"),e.sortedRecentBooks=l(e.allBooks),e.sortedPopularBooks=a(e.allBooks),e.sortedFreeBooks=d(e.allBooks),document.body.removeChild(r),document.body.removeChild(i);var h=new n(m);c(h),p(h,t)})})(k,b)),v=k,f=b,m("GET","https://rsu-library-api.herokuapp.com/books","",function(e){var t=JSON.parse(e.responseText);v.allBooks=t.slice().sort(function(e,t){return e.title.toLowerCase()<t.title.toLowerCase()?-1:1}),v.allBooks.forEach(function(e){e.image_url||(e.image_url="https://rsu-library-api.herokuapp.com/static/images/nocover.jpg")}),v.addedBooks[0]&&v.addedBooks.forEach(function(e){v.allBooks.push(e)}),u(v.allBooks,"book"),v.sortedRecentBooks=l(v.allBooks),v.sortedPopularBooks=a(v.allBooks),v.sortedFreeBooks=d(v.allBooks),h(),v.allBooks.forEach(function(e){s(e,v)}),v.sortedRecentBooks.slice().reverse().forEach(function(e){var t=new n(e);c(t),p(t,f)}),function(e){var t=document.querySelector(".search");t.addEventListener("input",function(){for(var r=document.querySelectorAll(".menu li"),o=0;o<r.length&&!r[o].classList.contains("menu_active");o++);0===o?e.searchArray=e.allBooks.slice():1===o?e.searchArray=e.sortedRecentBooks.slice():2===o?e.searchArray=e.sortedPopularBooks.slice():3===o&&(e.searchArray=e.sortedFreeBooks.slice());for(var n=0;n<e.searchArray.length;n++)for(var a=0;a<t.value.length;a++)if(e.searchArray[n].title[a].toLowerCase()!==t.value[a].toLowerCase()){delete e.searchArray[n];break}e.searchArray=e.searchArray.filter(e=>e),h(),e.searchArray.forEach(function(t){s(t,e)})})}(v)}),function(e,t,r){m("GET",e,"",function(e){t=JSON.parse(e.responseText),r.allFilters=t.slice(),r.allFilters.forEach(function(e){!function(e){var t=document.createElement("li");document.querySelector(".menu").appendChild(t),t.innerHTML=e.title,e.active&&(t.className="menu_active")}(e)});var o=document.querySelectorAll(".menu li");!function(e,t,r){e.addEventListener("click",function(e){for(var o=e.target,n=0,a=0;a<t.length;a++)t[a]===o?(t[a].classList.add("menu_active"),n=a+1):t[a].classList.remove("menu_active");r.allFilters.forEach(function(e){e.id===n?e.active=!0:e.active=!1})}),e.addEventListener("click",function(e){var t=e.target;"All Books"===t.innerHTML&&(h(),r.allBooks.forEach(function(e){s(e,r)})),"Most Recent"===t.innerHTML&&(h(),r.sortedRecentBooks.forEach(function(e){s(e,r)})),"Most Popular"===t.innerHTML&&(h(),r.sortedPopularBooks.forEach(function(e){s(e,r)})),"Free Books"===t.innerHTML&&(h(),r.sortedFreeBooks.forEach(function(e){s(e,r)}))})}(document.querySelector(".menu"),o,r)})}("https://rsu-library-api.herokuapp.com/filters",[],k),function(e,t,r){m("GET",e,"",function(e){t=JSON.parse(e.responseText),r.allCategories=t.slice(),r.allCategories.forEach(function(e){!function(e){var t=document.createElement("div"),r=document.createElement("li");document.querySelector(".types").appendChild(r),r.innerHTML=e.title,r.appendChild(t),t.style.background=e.color}(e)})})}("https://rsu-library-api.herokuapp.com/categories",[],k)}]);