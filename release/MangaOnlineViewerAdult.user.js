// ==UserScript==
// @name          Manga OnlineViewer Adult
// @author        Tago
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/MangaOnlineViewerAdult.meta.js
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/MangaOnlineViewerAdult.user.js
// @supportURL    https://github.com/TagoDR/MangaOnlineViewer/issues
// @namespace     https://github.com/TagoDR
// @version       2025.12.18.build-2154
// @license       MIT
// @icon          https://cdn-icons-png.flaticon.com/32/9824/9824312.png
// @run-at        document-end
// @grant         unsafeWindow
// @grant         GM_getValue
// @grant         GM_setValue
// @grant         GM_listValues
// @grant         GM_deleteValue
// @grant         GM_xmlhttpRequest
// @grant         GM_addValueChangeListener
// @noframes      on
// @connect       *
// @require       https://cdn.jsdelivr.net/npm/colorjs.io@0.5.2/dist/color.global.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/jszip/3.9.1/jszip.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js
// @require       https://cdn.jsdelivr.net/npm/hotkeys-js@3.13.15/dist/hotkeys.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/bowser/2.12.1/bundled.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/blob-util/2.0.2/blob-util.min.js
// @include       /https?:\/\/(www\.)?akuma\.moe\/g\/.+\/.+/
// @include       /https?:\/\/(www\.)?bestporncomix.com\/gallery\/.+/
// @include       /https?:\/\/(www\.)?doujins.com\/.+/
// @include       /https?:\/\/(www\.)?dragontranslation.net\/leer\/.+/
// @include       /https?:\/\/(comics.)?8muses.(com|io)\/(comics\/)?picture\/.+/
// @include       /https?:\/\/(g\.)?(exhentai|e-hentai).org\/s\/.+\/.+/
// @include       /https?:\/\/(www\.)?fsicomics.com\/.+/
// @include       /https?:\/\/(www\.)?freeadultcomix.com\/.+/
// @include       /https?:\/\/(www\.)?gntai.net\/(?!(category|tags|autores))[^/]+\/.+/
// @include       /https?:\/\/(www\.)?hentai2read.com\/[^/]+\/\d+(.\d+)?\//
// @include       /https?:\/\/(www\.)?hentaiera.com\/view\/.+\/\d+\/?/
// @include       /https?:\/\/(www\.)?hentaiforce.net\/view\/.+\/\d+/
// @include       /https?:\/\/(www\.)?hentaifox.com\/g\/.+/
// @include       /https?:\/\/(www\.)?(hentaihand|nhentai).com\/.+\/reader/
// @include       /https?:\/\/(www\.)?hentaihere.com\/.+\/.+\/.+/
// @include       /https?:\/\/((www\.)?hentainexus.com|nexus.fakku.cc)\/read\/.+/
// @include       /https?:\/\/(www.)?hentalk.pw/
// @include       /https?:\/\/hitomi.la\/reader\/.+/
// @include       /https?:\/\/(www\.)?imhentai.xxx\/view\/.+\/.+\//
// @include       /https?:\/\/(www\.)?(kingcomix|chochox|comics18).(com|org)\/.+/
// @include       /https?:\/\/(www\.)?luscious.net\/.+\/read\/.+/
// @include       /https?:\/\/(www\.)?multporn.net\/(comics|hentai_manga)\/.+/
// @include       /https?:\/\/(www\.)?myhentaigallery.com\/g\/.+\/\d+/
// @include       /https?:\/\/(www\.)?(nhentai|lhentai).(net|xxx|com|to)\/g\/.+\/.+/
// @include       /https?:\/\/(www\.)?9hentai.(so)\/g\/.+\/.+/
// @include       /https?:\/\/(www\.)?porncomicshd.com\/es.*/
// @include       /https?:\/\/(www\.)?pururin.me\/(view|read)\/.+\/.+\/.+/
// @include       /https?:\/\/(www\.)?(niyaniya|shupogaki|hoshino).(moe|one)/
// @include       /https?:\/\/(www\.)?simply-hentai.com\/.+\/page\/.+/
// @include       /https?:\/\/(www\.)?tmohentai.com\/reader\/.+\/(paginated\/\d+|cascade)/
// @include       /https?:\/\/(www\.)?(3hentai|hentaivox).(net|com)\/(d|view)\/.+\/.+/
// @include       /https?:\/\/(www\.)?tsumino.com\/Read\/Index\/\d+(\?page=.+)?/
// @include       /https?:\/\/(www\.)?(vermangasporno|vercomicsporno).com\/.+/
// @include       /https?:\/\/(www\.)?wnacg.com\/photos-view-id-.+/
// @include       /https?:\/\/(www\.)?xlecx.one\/.+/
// @include       /https?:\/\/(www\.)?xyzcomics.com\/.+/
// @include       /https?:\/\/(www\.)?yabai.si\/g\/.+\/read/
// @include       /https?:\/\/.+\/(porncomic|read-scan|title)\/.+\/.+/
// ==/UserScript==
(function(){"use strict";function po(e){return e===null||typeof e>"u"||e===void 0||typeof e=="string"&&e===""||Array.isArray(e)&&e.length===0||typeof e=="object"&&Object.keys(e).length===0}function Pe(e){return po(e)||e===!1||e===0}function ki(e){return"listImages"in e&&!Pe(e.listImages)}function yi(e){return"listPages"in e&&!Pe(e.listPages)}function wa(e){return"bruteForce"in e&&!Pe(e.bruteForce)}var N=(e=>(e.ENGLISH="English",e.SPANISH="Spanish",e.PORTUGUESE="Portuguese",e.CHINESE="Chinese",e.RAW="Raw",e))(N||{}),B=(e=>(e.MANGA="manga",e.COMIC="comic",e.HENTAI="hentai",e))(B||{});function ka(e,t){return t in e}const ya={name:["3Hentai","HentaiVox"],url:/https?:\/\/(www\.)?(3hentai|hentaivox).(net|com)\/(d|view)\/.+\/.+/,homepage:["https://3hentai.net/","https://hentaivox.com/"],language:[N.ENGLISH],category:B.HENTAI,waitVar:"readerPages",run(){return{title:unsafeWindow.readerPages.title.replace(/- Page.+/,"").trim(),series:unsafeWindow.readerPages.baseUri.replace("%s",""),pages:unsafeWindow.readerPages.lastPage,prev:"#",next:"#",listImages:Object.keys(unsafeWindow.readerPages.pages).map(e=>unsafeWindow.readerPages.baseUriImg.replace("%s",unsafeWindow.readerPages.pages[e].f))}}};function Ea(e,t=document.body){return new Promise(n=>{const o=document.querySelector(e);if(o){n(o);return}const i=new MutationObserver(()=>{const r=document.querySelector(e);r&&(n(r),i.disconnect())});i.observe(t,{childList:!0,subtree:!0,attributes:!0})})}function go(e,t=250){return new Promise(n=>{const o=setInterval(()=>{e()&&(clearInterval(o),n(!0))},t)})}function Ei(e,t,n=document.body){return new Promise(o=>{const i=n.querySelector(e);if(i?.getAttribute(t)){o(i.getAttribute(t)??"");return}const r=new MutationObserver(()=>{const a=n.querySelector(e);a?.getAttribute(t)&&(o(a.getAttribute(t)??""),r.disconnect())});r.observe(n,{childList:!0,subtree:!0,attributes:!0,attributeFilter:[t]})})}function Ii(e,t=document.body){return new Promise(n=>{if(!Pe(unsafeWindow[e])){n(unsafeWindow[e]);return}const o=new MutationObserver(()=>{Pe(unsafeWindow[e])||(n(unsafeWindow[e]),o.disconnect())});o.observe(t,{childList:!0,subtree:!0,attributes:!0})})}function Ia(e=1e3,t){return new Promise(n=>{setTimeout(()=>n(t),e)})}async function xa(e,t=1e3){const[n]=await Promise.all([e,Ia(t)]);return n}async function xi(e,t,n,o,i="img",r="src"){const a=document.createElement("div");a.setAttribute("style","height: 100vh;width: 100vw;position: fixed;top: 0;left: 0;z-index: 100000;background: white;opacity: 0.5;"),document.body.append(a),e();const d=document.querySelector(n),p=document.querySelector(o),u=[];for(let h=1;h<=t;h+=1)u[h-1]=await xa(Ei(i,r,p??document.body),100),p?.querySelector(i)?.removeAttribute(r),d?.dispatchEvent(new Event("click"));return u}const Aa={name:["8Muses.com","8Muses.io"],obs:"Slow start, bruteforce may be required",url:/https?:\/\/(comics.)?8muses.(com|io)\/(comics\/)?picture\/.+/,homepage:["https://comics.8muses.com/","https://8muses.io/"],language:[N.ENGLISH],category:B.HENTAI,async run(){const e=unsafeWindow.link_images?.slice(1,unsafeWindow.link_images.length)??[],t=document.querySelector('link[rel="last"]')?.getAttribute("href")?.match(/\d+$/)?.at(0),n=e?.length??parseInt(t??"0",10),o={title:[...document.querySelectorAll(".top-menu-breadcrumb li:not(:last-child)")].map(i=>i?.textContent?.trim()).join("/"),series:document.querySelector(".top-menu-breadcrumb li:nth-last-child(2) a")?.getAttribute("href"),pages:n,prev:"#",next:"#",lazy:!1,timer:10,listImages:e,async before(){unsafeWindow.link_images?.length||(o.listImages=await xi(()=>{const i=document.querySelector(".page-prev");for(;document.querySelector(".c-dropdown-toggle")?.textContent?.match(/\d+/)?.at(0)!=="1";)i?.dispatchEvent(new Event("click"))},n,".page-next",".p-picture",".photo img","src"))}};return o}},Sa={name:"9Hentai",url:/https?:\/\/(www\.)?9hentai.(so)\/g\/.+\/.+/,homepage:"https://9hentai.so",language:[N.ENGLISH],category:B.HENTAI,waitAttr:["#jumpPageModal input","max"],async run(){const e={id:parseInt(/\d+/.exec(window.location.pathname)?.at(0)??"0",10)},t={method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}},n=await fetch("/api/getBookByID",t).then(async o=>o.json());return{title:n.results.title,series:`/g/${n.results.id}/`,pages:n.results.total_page,prev:"#",next:"#",listImages:Array(n.results.total_page).fill(0).map((o,i)=>`${n.results.image_server.replace(".com",".so")+n.results.id}/${i+1}.jpg`)}}},_a={name:"AkumaMoe",url:/https?:\/\/(www\.)?akuma\.moe\/g\/.+\/.+/,homepage:"https://akuma.moe",language:[N.RAW],category:B.HENTAI,waitFunc:()=>unsafeWindow.img_lst?.length===document.querySelectorAll(".reader-nav:first-child .nav-select option")?.length,async run(){return{title:document.querySelector("h1.sr-only")?.textContent?.trim().replace(/^Reading /,""),series:`https://akuma.moe/g/${/\/g\/([^/]+)\//.exec(window.location.pathname)?.[1]}/`,pages:unsafeWindow.img_lst.length,prev:"#",next:"#",listImages:unsafeWindow.img_lst.map(e=>`${unsafeWindow.img_prt}/${e}`)}}},Ma={name:"BestPornComix",url:/https?:\/\/(www\.)?bestporncomix.com\/gallery\/.+/,homepage:"https://www.bestporncomix.com",language:[N.ENGLISH],category:B.HENTAI,waitTime:5e3,run(){const e=[...document.querySelectorAll("figure a")];return{title:document.querySelector("h1.entry-title")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e.map(t=>t.getAttribute("href")??"")}}},Ca={name:"DoujinMoeNM",url:/https?:\/\/(www\.)?doujins.com\/.+/,homepage:"https://doujins.com/",language:[N.ENGLISH],category:B.HENTAI,waitEle:".doujin",run(){const e=[...document.querySelectorAll(".doujin")];return{title:document.querySelector(".folder-title a:last-child")?.textContent?.trim(),series:document.querySelector(".folder-title a:nth-last-child(2)")?.getAttribute("href"),pages:e.length,prev:"#",next:"#",listImages:e.map(t=>t.getAttribute("data-file")??"")}}},Oa={name:"Dragon Translation",url:/https?:\/\/(www\.)?dragontranslation.net\/leer\/.+/,homepage:"https://dragontranslation.net/es",language:[N.SPANISH],category:B.HENTAI,waitEle:"#chapter_imgs img",run(){const e=[...document.querySelectorAll("#chapter_imgs img")].map(t=>t.getAttribute("src")??"").filter(t=>t&&t!=="/discord2.jpg");return{title:document.querySelector("h1")?.textContent?.trim(),series:document.querySelector("h2 + div a")?.getAttribute("href"),pages:e.length,prev:document.querySelector(".fa-chevron-circle-left")?.parentElement?.getAttribute("href"),next:document.querySelector(".fa-chevron-circle-right")?.parentElement?.getAttribute("href"),listImages:e}}},Ta={name:["ExHentai","e-Hentai"],url:/https?:\/\/(g\.)?(exhentai|e-hentai).org\/s\/.+\/.+/,homepage:["https://exhentai.org/","https://e-hentai.org/"],language:[N.ENGLISH],obs:"May get your IP Banned, use with moderation",category:B.HENTAI,async run(){const e=parseInt(document.querySelector(".sn div span:nth-child(2)")?.textContent??"0",10),t=Math.ceil(e/20),n=document.querySelector(".sb a")?.getAttribute("href")?.replace(/\?p=\d+/,""),o=Array(t).fill(0).map(async(a,d)=>fetch(`${n}?p=${d}`).then(async p=>p.text()).then(p=>new DOMParser().parseFromString(p,"text/html"))),r=(await Promise.all(o)).flatMap(a=>[...a.querySelectorAll("#gdt a")].map(d=>d.getAttribute("href")??""));return{title:document.querySelector("#i1 h1")?.textContent?.trim(),series:n,pages:e,begin:parseInt(document.querySelector("div#i2 span")?.textContent??"1",10),prev:"#",next:"#",listPages:r,img:"#img",lazy:!0,async reload(a){const d=`${r[a-1]}`,p=await fetch(d).then(h=>h.text()).then(h=>/nl\('([\d-]+)'\)/.exec(h)?.[1]),u=`${d}${d.indexOf("?")?"&":"?"}nl=${p}`;return fetch(u).then(h=>h.text()).then(h=>new DOMParser()?.parseFromString(h,"text/html")?.querySelector("#img")?.getAttribute("src")??"")}}}},$a={name:"FreeAdultComix",url:/https?:\/\/(www\.)?freeadultcomix.com\/.+/,homepage:"https://www.freeadultcomix.com",language:[N.ENGLISH],category:B.HENTAI,waitTime:5e3,run(){const e=[...document.querySelectorAll(".foto img")];return{title:document.querySelector(".post-conteudo h1")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e.map(t=>t.getAttribute("src")??"")}}},La={name:"FSIComics",url:/https?:\/\/(www\.)?fsicomics.com\/.+/,homepage:"https://fsicomics.com/",language:[N.ENGLISH],category:B.HENTAI,run(){const e=[...document.querySelectorAll(".wp-block-gallery img")];return{title:document.querySelector(".s-title")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e.map(t=>t.getAttribute("data-large-file")??"")}}},Ra={name:"GNTAI.net",url:/https?:\/\/(www\.)?gntai.net\/(?!(category|tags|autores))[^/]+\/.+/,homepage:"https://www.gntai.net/",language:[N.SPANISH],category:B.HENTAI,run(){const e=document.querySelector("#main > script")?.innerHTML.match(/var pages = [^;]+/)?.at(0)?.toString().match(/https?[^"]+/g)??[];return{title:document.querySelector(".entry-header h1")?.textContent?.trim(),pages:e?.length,prev:"#",next:"#",listImages:e}}},Da={name:"Hentai2Read",url:/https?:\/\/(www\.)?hentai2read.com\/[^/]+\/\d+(.\d+)?\//,homepage:"https://hentai2read.com/",language:[N.ENGLISH],category:B.HENTAI,run(){return{title:document.querySelector(".reader-left-text")?.textContent?.trim(),series:unsafeWindow.gData.mainURL,pages:unsafeWindow.gData.images.length,prev:unsafeWindow.gData.previousURL,next:unsafeWindow.gData.nextURL,listImages:unsafeWindow.gData.images.map(e=>`https://static.hentaicdn.com/hentai${e}`)}}},Pa={name:"HentaiEra",url:/https?:\/\/(www\.)?hentaiera.com\/view\/.+\/\d+\/?/,homepage:"https://hentaiera.com/",language:[N.ENGLISH],category:B.HENTAI,run(){const e=parseInt(document.querySelector(".total_pages")?.textContent??"0",10);return{title:document.querySelector("h1")?.textContent?.trim().replace(/ - Page .+$/,""),series:document.querySelector(".return_btn ")?.getAttribute("href"),pages:e,prev:"#",next:"#",listPages:Array(e).fill(0).map((t,n)=>window.location.href.replace(/\/\d*\/?$/,`/${n+1}`)),img:"#gimg",lazyAttr:"data-src"}}},Na={name:"HentaiForce",url:/https?:\/\/(www\.)?hentaiforce.net\/view\/.+\/\d+/,homepage:"https://hentaiforce.net/",language:[N.ENGLISH],category:B.HENTAI,run(){return{title:document.querySelector("h1")?.textContent?.trim().replace(/ - Page .+$/,""),series:document.querySelector(".reader-go-back ")?.getAttribute("href"),pages:unsafeWindow.readerPages.lastPage,prev:"#",next:"#",listImages:Array(unsafeWindow.readerPages.lastPage).fill(0).map((e,t)=>unsafeWindow.readerPages.baseUriImg.replace("%c",unsafeWindow.readerPages.pages[t+1].l).replace("%s",unsafeWindow.readerPages.pages[t+1].f))}}},za=/^blob:(.+?)\/(.+)$/;function Ai(e){return/^data:image\/(png|jpg|jpeg|gif|svg)/.test(e)}function Si(e){return za.test(e)}function mo(e){switch(e){case"p":return"png";case"b":return"bmp";case"g":return"gif";case"w":return"webp";default:return"jpg"}}const Ba={name:"HentaiFox",url:/https?:\/\/(www\.)?hentaifox.com\/g\/.+/,homepage:"https://www.hentaifox.com/",language:[N.ENGLISH],category:B.HENTAI,waitVar:"g_th",waitFunc:()=>document.querySelector("#gimg")?.classList.contains("loaded")??!1,run(){const e=parseInt(document.querySelector(".total_pages")?.textContent??"",10),t=document.querySelector("#gimg")?.getAttribute("src")?.replace(/\d+.\w+$/,"")??"";return{title:document.querySelector("title")?.textContent?.replace(/ - Page .+/,"").trim(),series:document.querySelector(".browse_buttons a")?.getAttribute("href"),pages:e,prev:"#",next:"#",listImages:Array(e).fill(0).map((n,o)=>`${t+(o+1)}.${mo(unsafeWindow.g_th[o+1][0])}`)}}},Ha={name:["HentaiHand","nHentai.com"],url:/https?:\/\/(www\.)?(hentaihand|nhentai).com\/.+\/reader/,homepage:["https://hentaihand.com/","https://nhentai.com"],language:[N.ENGLISH],category:B.HENTAI,waitEle:".reader img",run(){const e=[...document.querySelectorAll(".reader img")];return{title:document.querySelector(".reader-header h5")?.textContent?.trim(),series:document.querySelector(".reader-header h5 a")?.getAttribute("href"),pages:e.length,prev:"#",next:"#",listImages:e.map(t=>t.getAttribute("data-src")??t.getAttribute("src")??"")}}},Fa={name:"HentaIHere",url:/https?:\/\/(www\.)?hentaihere.com\/.+\/.+\/.+/,homepage:"https://www.hentaihere.com/",language:[N.ENGLISH],category:B.HENTAI,waitVar:"rff_imageList",run(){const e=document.querySelector("#arf-reader-img")?.getAttribute("src")?.replace(/\d.+/,"");return{title:unsafeWindow.rff_pageTitle.replace(/.+\|/,"").trim(),series:unsafeWindow.rff_thisManga,pages:unsafeWindow.rff_imageList.length,prev:unsafeWindow.rff_previousChapter,next:unsafeWindow.rff_nextChapter,listImages:unsafeWindow.rff_imageList.map(t=>e+t)}}},Ga={name:"HentaiNexus",url:/https?:\/\/((www\.)?hentainexus.com|nexus.fakku.cc)\/read\/.+/,homepage:"https://hentainexus.com/",language:[N.ENGLISH],category:B.HENTAI,run(){const e=unsafeWindow.pageData?.map(t=>t.image)??unsafeWindow.images?.map(t=>t.url);return{title:document.querySelector("title")?.textContent?.replace(/^\[[\d/]+\]/,"").trim(),series:document.querySelector("#returnGalleryFooter a")?.getAttribute("href"),pages:e.length,prev:"#",next:"#",listImages:e}}},Va={name:"HenTalk",url:/https?:\/\/(www.)?hentalk.pw/,homepage:"https://hentalk.pw/",language:[N.ENGLISH],category:B.HENTAI,async run(){const e="https://hentalk.pw",t=await fetch(`${window.location.pathname}/__data.json?x-sveltekit-trailing-slash=1&x-sveltekit-invalidated=001`).then(async r=>r.json()).then(r=>r.nodes[2].data),n=t?.[t.find(r=>r?.gallery)?.gallery],o=t?.[n?.hash]||t?.[t.find(r=>r?.hash&&r?.id).hash],i=t?.[n.images].map(r=>t[r]).map(r=>t[r.filename]);return{title:t?.[n.title],series:window.location.href.replace(/read\/.+/,""),pages:i?.length,prev:"#",next:"#",listImages:i?.map(r=>`${e}/image/${o}/${r}`)}}},Ua={name:"Hitomi",url:/https?:\/\/hitomi.la\/reader\/.+/,homepage:"https://hitomi.la/",language:[N.ENGLISH],category:B.HENTAI,waitAttr:["#comicImages img","src"],waitVar:"galleryinfo",run(){return{title:document.querySelector("title")?.textContent?.replace("| Hitomi.la","").trim(),series:document.querySelector(".brand")?.getAttribute("href"),pages:unsafeWindow.galleryinfo.files.length,prev:"#",next:"#",listImages:unsafeWindow.galleryinfo.files.map(e=>unsafeWindow.url_from_url_from_hash(unsafeWindow.galleryinfo,e,"webp"))}}},Wa={name:"Imhentai",url:/https?:\/\/(www\.)?imhentai.xxx\/view\/.+\/.+\//,homepage:"https://imhentai.xxx/",language:[N.ENGLISH],category:B.HENTAI,waitVar:"g_th",async run(){const e=document.querySelector("#gallery_id")?.getAttribute("value"),t=document.querySelector("#image_dir")?.getAttribute("value"),n=parseInt(document.querySelector("#pages")?.getAttribute("value")??"",10),o=await Ii("random_server");return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector(".return_btn")?.getAttribute("href"),pages:n,prev:"#",next:"#",listImages:Array(n).fill(0).map((i,r)=>`//${o}/${t}/${e}/${r+1}.${mo(unsafeWindow.g_th[r+1][0])}`)}}},ja={name:["KingComix","Chochox","Comics18"],url:/https?:\/\/(www\.)?(kingcomix|chochox|comics18).(com|org)\/.+/,homepage:["https://kingcomix.com/","https://chochox.com/porno/","https://comics18.org/"],language:[N.ENGLISH,N.SPANISH],category:B.HENTAI,run(){const e=[...document.querySelectorAll("figure img, .entry-content img:not(a img), .wp-content img")];return{title:document.querySelector("h1.singleTitle-h1")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e.map(t=>t.getAttribute("data-src")??t.getAttribute("data-full-url")??t.getAttribute("data-lazy-src")??t.getAttribute("src")??"")}}},Za={name:"Luscious",url:/https?:\/\/(www\.)?luscious.net\/.+\/read\/.+/,homepage:"https://luscious.net/",language:[N.ENGLISH],category:B.HENTAI,waitEle:".album-info div",async run(){const e=parseInt(document.querySelector('input[name="page_number"] + span')?.textContent?.match(/\d+/)?.pop()??"0",10),t=Math.ceil(e/50),n=parseInt(document.querySelector(".album-heading a")?.getAttribute("href")?.match(/\d+\//)?.toString()??"0",10),o="&query=%20query%20PictureListInsideAlbum(%24input%3A%20PictureListInput!)%20%7B%20picture%20%7B%20list(input%3A%20%24input)%20%7B%20info%20%7B%20...FacetCollectionInfo%20%7D%20items%20%7B%20__typename%20id%20title%20description%20created%20like_status%20number_of_comments%20number_of_favorites%20moderation_status%20width%20height%20resolution%20aspect_ratio%20url_to_original%20url_to_video%20is_animated%20position%20permissions%20url%20tags%20%7B%20category%20text%20url%20%7D%20thumbnails%20%7B%20width%20height%20size%20url%20%7D%20%7D%20%7D%20%7D%20%7D%20fragment%20FacetCollectionInfo%20on%20FacetCollectionInfo%20%7B%20page%20has_next_page%20has_previous_page%20total_items%20total_pages%20items_per_page%20url_complete%20%7D%20",i=Array(t).fill(0).map(async(d,p)=>{const u=`https://apicdn.luscious.net/graphql/nobatch/?operationName=PictureListInsideAlbum&variables={"input":{"filters":[{"name":"album_id","value":"${n}"}],"display":"position","items_per_page":50,"page":${p+1}}}${o}`;return GM.xmlHttpRequest({method:"GET",url:u}).then(h=>JSON.parse(h.responseText))}),a=(await Promise.all(i)).flatMap(d=>d.data.picture.list.items.map(p=>p.url_to_original));return{title:document.querySelector(".album-heading a")?.textContent?.trim(),series:document.querySelector(".album-heading a")?.getAttribute("href"),pages:e,prev:"#",next:"#",listImages:a}}},_i=/^([\t\n])*(https?:\/\/)?.+\.(jpg|jpeg|png|gif|bmp|webp).*$/;function Mi(){return[...document.querySelectorAll(".wp-manga-chapter-img, .blocks-gallery-item img, .reading-content img, #chapter-images img, #chapterContent img")].map(e=>{const t=[...e.attributes].filter(n=>/.*(src|url).*/i.test(n.name)&&!/^.*(blank|lazy|loading).*$/.test(n.value));return t.length===0?"":t.find(n=>_i.test(n.value))?.value??e?.getAttribute("src")??""})}const Qa={...{name:["Madara WordPress Plugin","MangaHaus","Isekai Scan","Comic Kiba","Zinmanga","mangatx","Toonily","Mngazuki","JaiminisBox","DisasterScans","ManhuaPlus","TopManhua","NovelMic","Reset-Scans","LeviatanScans","Dragon Tea","SetsuScans","ToonGod","Hades Scans"],url:/https?:\/\/.+\/(manga|series|manhua|comic|ch|novel|webtoon|tmo)\/.+\/.+/,homepage:["https://mangabooth.com/","https://manhuaus.com","https://isekaiscan.com/","https://comickiba.com/","https://zinmanga.com/","https://mangatx.com/","https://toonily.net/","https://mangazuki.me/","https://jaiminisbox.net","https://disasterscans.com/","https://manhuaplus.org/","https://www.topmanhua.com/","https://novelmic.com/","https://reset-scans.com/","https://leviatanscans.com/","https://dragontea.ink/","https://setsuscans.com/","https://toongod.org/home/","https://lectorhades.latamtoon.com"],language:[N.ENGLISH],obs:"Any Site that uses Madara WordPress Plugin",category:B.MANGA,waitFunc:()=>{const e=Mi();return e.length>0&&e.every(t=>t&&_i.test(t))},run(){const e=Mi();return{title:document.querySelector("#chapter-heading")?.textContent?.trim(),series:(document.querySelector(".breadcrumb li:nth-child(3) a")??document.querySelector(".breadcrumb li:nth-child(2) a"))?.getAttribute("href"),pages:e.length,prev:document.querySelector(".prev_page")?.getAttribute("href"),next:document.querySelector(".next_page")?.getAttribute("href"),listImages:e}}},name:["Madara WordPress Plugin","AllPornComic","Manytoon","Manga District"],url:/https?:\/\/.+\/(porncomic|read-scan|title)\/.+\/.+/,homepage:["#","https://allporncomic.com/","https://manytoon.com/","https://mangadistrict.com/"],category:B.HENTAI},qa={name:"MultPorn",url:/https?:\/\/(www\.)?multporn.net\/(comics|hentai_manga)\/.+/,homepage:"https://multporn.net/",language:[N.ENGLISH],category:B.HENTAI,async run(){const e=/"configUrl":"(.+?)",/.exec(document.head.textContent)?.at(1)?.replaceAll("\\","")??"",n=[...(await fetch(e).then(async o=>o.text()).then(o=>new DOMParser().parseFromString(o,"text/xml"))).querySelectorAll("image")];return{title:document.querySelector("#page-title")?.textContent?.trim(),pages:n.length,prev:"#",next:"#",listImages:n.map(o=>o.getAttribute("imageURL")??"")}}},Ya={name:"MyHentaiGallery",url:/https?:\/\/(www\.)?myhentaigallery.com\/g\/.+\/\d+/,homepage:"https://www.myhentaigallery.com",language:[N.ENGLISH],category:B.HENTAI,run(){const e=document.getElementById("js__pagination__next")?.parentElement?.previousElementSibling?.querySelector("a"),t=parseInt(e?.textContent??"",10);return{title:document.querySelector("title")?.textContent?.trim(),series:document.querySelector(".back-to-gallery a")?.getAttribute("href"),pages:t,prev:"#",next:"#",listPages:Array(t).fill(0).map((n,o)=>window.location.href.replace(/\/\d+$/,`/${o+1}`)),img:".gallery-slide img"}}},Xa={name:["nHentai.net","nHentai.xxx","lhentai"],url:/https?:\/\/(www\.)?(nhentai|lhentai).(net|xxx|com|to)\/g\/.+\/.+/,homepage:["https://nhentai.net/","https://nhentai.xxx/","https://lhentai.com/"],language:[N.ENGLISH],category:B.HENTAI,run(){const e=parseInt(document.querySelector(".num-pages")?.textContent??"",10),t=document.querySelector("#image-container img")?.getAttribute("src")?.replace(/\d+.\w+$/,""),n=unsafeWindow._gallery?.images?.pages?.map(o=>mo(o.t));return{title:document.querySelector("title")?.textContent?.split("- Page")[0].trim(),series:document.querySelector(".go-back")?.getAttribute("href"),pages:e,prev:"#",next:"#",listImages:Array(e).fill(0).map((o,i)=>`${t}${i+1}.${n[i]}`)}}},Ka={name:"PornComicsHD",url:/https?:\/\/(www\.)?porncomicshd.com\/es.*/,homepage:"https://porncomicshd.com/es",language:[N.SPANISH],category:B.HENTAI,waitEle:"app-comic-reader img",async run(){const e=[...document.querySelectorAll("app-comic-reader img")];return{title:document.querySelector("h1")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",lazy:!1,listImages:e.map(t=>t.getAttribute("src")??"")}}},Ja={name:"Pururin",url:/https?:\/\/(www\.)?pururin.me\/(view|read)\/.+\/.+\/.+/,homepage:"https://pururin.me/",language:[N.ENGLISH],category:B.HENTAI,waitAttr:[".img-viewer img","src"],run(){const e=document.querySelector(".img-viewer img")?.getAttribute("src")??"",t=[...document.querySelectorAll(".img-select option")];return{title:document.querySelector(".title")?.textContent?.trim(),series:document.querySelector(".breadcrumb-item:nth-child(4) a")?.getAttribute("href"),pages:t.length,prev:"#",next:"#",listImages:t.map((n,o)=>e.replace(/\/\d+\./,`/${o+1}.`))}}},es={name:"SchaleNetwork",url:/https?:\/\/(www\.)?(niyaniya|shupogaki|hoshino).(moe|one)/,homepage:"https://schale.network/",language:[N.ENGLISH],category:B.HENTAI,waitEle:"nav select option",async run(){const e=history.state.memo.gallery,t=e.resolution,{base:n,entries:o}=history.state.memo.data,i=o.map(r=>`${n}/${r.path}?w=${t}`);return{title:e.title,series:`/g/${e.id}/${e.key}/`,pages:i.length,prev:"#",next:"#",fetchOptions:{method:"GET",redirect:"follow"},listImages:i}}},ts={name:"Simply-Hentai",url:/https?:\/\/(www\.)?simply-hentai.com\/.+\/page\/.+/,homepage:"https://simply-hentai.com/",language:[N.ENGLISH],category:B.HENTAI,waitEle:"#__NEXT_DATA__",async run(){const t=JSON.parse(document.querySelector("#__NEXT_DATA__")?.innerHTML??"").props.pageProps.data.pages.map(n=>n.sizes.full);return{title:document.querySelector(".content-headline a")?.textContent?.trim(),series:document.querySelector(".content-headline a")?.getAttribute("href"),pages:t.length,prev:"#",next:"#",listImages:t}}},ns={name:"TMOHentai",url:/https?:\/\/(www\.)?tmohentai.com\/reader\/.+\/(paginated\/\d+|cascade)/,homepage:"https://tmohentai.com/",language:[N.SPANISH],category:B.HENTAI,run(){const e=[...document.querySelectorAll(".content-image")].map(t=>t.getAttribute("data-original")??t.getAttribute("src")??"");return{before(){window.location.pathname.includes("paginated")&&(window.location.pathname=window.location.pathname.replace(/paginated.*/,"cascade"))},title:document.querySelector(".reader-title")?.textContent?.trim(),series:document.querySelector(".nav-justified li a")?.getAttribute("href"),pages:e.length,prev:"#",next:"#",listImages:e}}},os={name:"Tsumino",url:/https?:\/\/(www\.)?tsumino.com\/Read\/Index\/\d+(\?page=.+)?/,homepage:"https://tsumino.com/",language:[N.ENGLISH],category:B.HENTAI,async run(){const e=document.querySelector("#image-container")?.getAttribute("data-opt"),t=document.querySelector("#image-container")?.getAttribute("data-cdn")??"",n=`https://www.tsumino.com/Read/Load?q=${e}`,o=await fetch(n).then(async i=>i.json());return{title:document.querySelector("title")?.textContent?.replace(/.+Read/,"").trim(),series:o.reader_start_url,pages:o.reader_page_total,prev:"#",next:"#",listImages:Array(o.reader_page_total).fill(0).map((i,r)=>t.replace("[PAGE]",`${r+1}`))}}},is={name:["vermangasporno","vercomicsporno"],url:/https?:\/\/(www\.)?(vermangasporno|vercomicsporno).com\/.+/,homepage:["https://vermangasporno.com/","https://vercomicsporno.com/"],language:[N.SPANISH],category:B.HENTAI,waitEle:'img[loading="lazy"].size-full, .comicimg picture img, .wp-content img',run(){const e=[...document.querySelectorAll('img[loading="lazy"].size-full, .comicimg picture img, .wp-content img')];return{title:document.querySelector("h1.titl, title")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e.map(t=>t.getAttribute("data-lazy-src")??t.getAttribute("data-src")??t.getAttribute("src")??"")}}},rs={name:"wnacg",url:/https?:\/\/(www\.)?wnacg.com\/photos-view-id-.+/,homepage:"https://wnacg.com/",language:[N.ENGLISH,N.RAW,N.CHINESE],category:B.HENTAI,run(){const e=[...document.querySelectorAll(".pageselect option")];return{title:document.querySelector(".bread a:last-of-type")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listPages:e.map(t=>window.location.pathname.replace(/\d+/,t.value)),img:"#picarea"}}},as={name:"XlecxOne",url:/https?:\/\/(www\.)?xlecx.one\/.+/,homepage:"https://xlecx.one/",language:[N.ENGLISH],category:B.HENTAI,run(){const e=[...new Set([...document.querySelectorAll("article .page__text img , article #content-2 img")].map(t=>t.getAttribute("data-src")??t.getAttribute("data-srce")??t.closest("a")?.getAttribute("href")??t.getAttribute("src")??""))];return{title:document.querySelector("title")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e}}},ss={name:"xyzcomics",url:/https?:\/\/(www\.)?xyzcomics.com\/.+/,homepage:"https://xyzcomics.com/",language:[N.ENGLISH],category:B.HENTAI,run(){const e=[...document.querySelectorAll(".jig-link")];return{title:document.querySelector(".entry-title")?.textContent?.trim(),pages:e.length,prev:"#",next:"#",listImages:e.map(t=>t.getAttribute("href")??"")}}},ls={name:"Yabai",url:/https?:\/\/(www\.)?yabai.si\/g\/.+\/read/,homepage:"https://yabai.si/",language:[N.ENGLISH],category:B.HENTAI,async run(){const e=document.querySelectorAll("nav select option").length,t={title:document.querySelector("title")?.textContent?.trim(),series:"../",pages:e,prev:"#",next:"#",listImages:[""],async before(){t.listImages=await xi(()=>{const n=document.querySelector("select option");n&&(n.selected=!0),document.querySelector("select")?.dispatchEvent(new Event("change"))},e,'button[title="Next"]',"h1 + div","img.mx-auto","src")}};return t}},cs=[_a,Ma,Ca,Oa,Aa,Ta,La,$a,Ra,Da,Pa,Na,Ba,Ha,Fa,Ga,Va,Ua,Wa,ja,Za,qa,Ya,Xa,Sa,Ka,Ja,es,ts,ns,ya,os,is,rs,as,ss,ls,Qa];function ds(e,t){typeof unsafeWindow<"u"&&(unsafeWindow[e]=t),typeof window<"u"&&(window[e]=t)}function O(...e){return console.log("MangaOnlineViewer-adult: ",...e),e}function Ne(...e){return["dev","development"].includes("adult")&&console.info("MangaOnlineViewer: ",...e),e}function Ci(e){typeof GM_deleteValue<"u"?GM_deleteValue(e):Ne("Fake Removing: ",e)}const fo=typeof GM_info<"u"?GM_info:{scriptHandler:"Console",script:{name:"Debug",version:"Testing"}};function hs(e,t){return typeof GM_getValue<"u"?GM_getValue(e,t):(Ne("Fake Getting: ",e," = ",t),t)}function Oi(e,t){const n=hs(e,t);if(typeof n=="string"&&n.trim()!=="")try{return JSON.parse(n)}catch(o){return O("Failed to parse JSON from storage",e,o),t}return n}function us(e){return Oi("settings",e)}function ps(e){return Oi(window.location.hostname,e)}function Ti(e,t){return typeof GM_setValue<"u"?(GM_setValue(e,t),O("Setting: ",e," = ",t),t.toString()):(Ne("Fake Setting: ",e," = ",t),String(t))}function gs(e){return Ti("settings",e)}function $i(e){return Ti(window.location.hostname,e)}function ms(){const e=bowser.getParser(window.navigator.userAgent).getBrowser();return`${e.name} ${e.version}`}function fs(){return fo.scriptHandler??"Greasemonkey"}const Wt=()=>{const t=bowser.getParser(window.navigator.userAgent).getPlatformType(!0);return t==="mobile"||window.matchMedia("screen and (max-width: 600px)").matches?"mobile":t==="tablet"||window.matchMedia("screen and (max-width: 992px)").matches?"tablet":"desktop"},vs=()=>Wt()==="mobile"||Wt()==="tablet",Li=(e,t="settings")=>{if(typeof GM_addValueChangeListener<"u")try{return GM_addValueChangeListener(t,(n,o,i,r)=>{r&&e(i)})}catch(n){O("Failed to add settings listener",n)}};async function jt(e,t,n,o){if(e!==void 0){O(n);const i=await t(e);O(o,i)}}async function bs(e){await jt(e.waitAttr,t=>Ei(t?.[0],t?.[1]),`Waiting for Attribute ${e.waitAttr?.[1]} of ${e.waitAttr?.[0]}`,`Found Attribute ${e.waitAttr?.[1]} of ${e.waitAttr?.[0]} =`),await jt(e.waitEle,Ea,`Waiting for Element ${e.waitEle}`,"Found Element"),await jt(e.waitVar,Ii,`Waiting for Variable ${e.waitVar}`,"Found Variable"),await jt(e.waitFunc,go,`Waiting to pass Function check ${e.waitFunc}`,"Found Function check"),await jt(e.waitTime,t=>new Promise(n=>setTimeout(n,t)),`Waiting for ${e.waitTime} milliseconds`,"Continuing after timer")}const ws="@moaqzdev/toast",Zt={_dispatchToast(e,t){Object.assign(t,{type:e});const n=new CustomEvent(ws,{detail:t});document.dispatchEvent(n)},success(e){this._dispatchToast("success",e)},error(e){this._dispatchToast("error",e)},warning(e){this._dispatchToast("warning",e)},info(e){this._dispatchToast("info",e)},confirm(e){this._dispatchToast("confirm",e)}};let Fe=[],st=0;const Sn=4;let _n=0;const Ri=e=>{let t=[],n={get(){return n.lc||n.listen(()=>{})(),n.value},lc:0,listen(o){return n.lc=t.push(o),()=>{for(let r=st+Sn;r<Fe.length;)Fe[r]===o?Fe.splice(r,Sn):r+=Sn;let i=t.indexOf(o);~i&&(t.splice(i,1),--n.lc||n.off())}},notify(o,i){_n++;let r=!Fe.length;for(let a of t)Fe.push(a,n.value,o,i);if(r){for(st=0;st<Fe.length;st+=Sn)Fe[st](Fe[st+1],Fe[st+2],Fe[st+3]);Fe.length=0}},off(){},set(o){let i=n.value;i!==o&&(n.value=o,n.notify(i))},subscribe(o){let i=n.listen(o);return o(n.value),i},value:e};return n},ks=5,Mn=6,Cn=10;let ys=(e,t,n,o)=>(e.events=e.events||{},e.events[n+Cn]||(e.events[n+Cn]=o(i=>{e.events[n].reduceRight((r,a)=>(a(r),r),{shared:{},...i})})),e.events[n]=e.events[n]||[],e.events[n].push(t),()=>{let i=e.events[n],r=i.indexOf(t);i.splice(r,1),i.length||(delete e.events[n],e.events[n+Cn](),delete e.events[n+Cn])}),Es=1e3,Is=(e,t)=>ys(e,o=>{let i=t(o);i&&e.events[Mn].push(i)},ks,o=>{let i=e.listen;e.listen=(...a)=>(!e.lc&&!e.active&&(e.active=!0,o()),i(...a));let r=e.off;return e.events[Mn]=[],e.off=()=>{r(),setTimeout(()=>{if(e.active&&!e.lc){e.active=!1;for(let a of e.events[Mn])a();e.events[Mn]=[]}},Es)},()=>{e.listen=i,e.off=r}}),xs=(e,t,n)=>{Array.isArray(e)||(e=[e]);let o,i,r=()=>{if(i===_n)return;i=_n;let u=e.map(h=>h.get());if(!o||u.some((h,E)=>h!==o[E])){o=u;let h=t(...u);h&&h.then&&h.t?h.then(E=>{o===u&&a.set(E)}):(a.set(h),i=_n)}},a=Ri(void 0),d=a.get;a.get=()=>(r(),d());let p=r;return Is(a,()=>{let u=e.map(h=>h.listen(p));return r(),()=>{for(let h of u)h()}}),a};const As=(e,t)=>xs(e,t),Di=(e={})=>{let t=Ri(e);return t.setKey=function(n,o){let i=t.value;typeof o>"u"&&n in t.value?(t.value={...t.value},delete t.value[n],t.notify(i,n)):t.value[n]!==o&&(t.value={...t.value,[n]:o},t.notify(i,n))},t};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vo=globalThis,On=vo.trustedTypes,Pi=On?On.createPolicy("lit-html",{createHTML:e=>e}):void 0,Ni="$lit$",lt=`lit$${Math.random().toFixed(9).slice(2)}$`,zi="?"+lt,Ss=`<${zi}>`,dt=document,Qt=()=>dt.createComment(""),qt=e=>e===null||typeof e!="object"&&typeof e!="function",bo=Array.isArray,_s=e=>bo(e)||typeof e?.[Symbol.iterator]=="function",wo=`[ 	
\f\r]`,Yt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Bi=/-->/g,Hi=/>/g,ht=RegExp(`>|${wo}(?:([^\\s"'>=/]+)(${wo}*=${wo}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Fi=/'/g,Gi=/"/g,Vi=/^(?:script|style|textarea|title)$/i,Ms=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),w=Ms(1),Ke=Symbol.for("lit-noChange"),z=Symbol.for("lit-nothing"),Ui=new WeakMap,ut=dt.createTreeWalker(dt,129);function Wi(e,t){if(!bo(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Pi!==void 0?Pi.createHTML(t):t}const Cs=(e,t)=>{const n=e.length-1,o=[];let i,r=t===2?"<svg>":t===3?"<math>":"",a=Yt;for(let d=0;d<n;d++){const p=e[d];let u,h,E=-1,y=0;for(;y<p.length&&(a.lastIndex=y,h=a.exec(p),h!==null);)y=a.lastIndex,a===Yt?h[1]==="!--"?a=Bi:h[1]!==void 0?a=Hi:h[2]!==void 0?(Vi.test(h[2])&&(i=RegExp("</"+h[2],"g")),a=ht):h[3]!==void 0&&(a=ht):a===ht?h[0]===">"?(a=i??Yt,E=-1):h[1]===void 0?E=-2:(E=a.lastIndex-h[2].length,u=h[1],a=h[3]===void 0?ht:h[3]==='"'?Gi:Fi):a===Gi||a===Fi?a=ht:a===Bi||a===Hi?a=Yt:(a=ht,i=void 0);const M=a===ht&&e[d+1].startsWith("/>")?" ":"";r+=a===Yt?p+Ss:E>=0?(o.push(u),p.slice(0,E)+Ni+p.slice(E)+lt+M):p+lt+(E===-2?d:M)}return[Wi(e,r+(e[n]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),o]};class Xt{constructor({strings:t,_$litType$:n},o){let i;this.parts=[];let r=0,a=0;const d=t.length-1,p=this.parts,[u,h]=Cs(t,n);if(this.el=Xt.createElement(u,o),ut.currentNode=this.el.content,n===2||n===3){const E=this.el.content.firstChild;E.replaceWith(...E.childNodes)}for(;(i=ut.nextNode())!==null&&p.length<d;){if(i.nodeType===1){if(i.hasAttributes())for(const E of i.getAttributeNames())if(E.endsWith(Ni)){const y=h[a++],M=i.getAttribute(E).split(lt),P=/([.?@])?(.*)/.exec(y);p.push({type:1,index:r,name:P[2],strings:M,ctor:P[1]==="."?Ts:P[1]==="?"?$s:P[1]==="@"?Ls:Tn}),i.removeAttribute(E)}else E.startsWith(lt)&&(p.push({type:6,index:r}),i.removeAttribute(E));if(Vi.test(i.tagName)){const E=i.textContent.split(lt),y=E.length-1;if(y>0){i.textContent=On?On.emptyScript:"";for(let M=0;M<y;M++)i.append(E[M],Qt()),ut.nextNode(),p.push({type:2,index:++r});i.append(E[y],Qt())}}}else if(i.nodeType===8)if(i.data===zi)p.push({type:2,index:r});else{let E=-1;for(;(E=i.data.indexOf(lt,E+1))!==-1;)p.push({type:7,index:r}),E+=lt.length-1}r++}}static createElement(t,n){const o=dt.createElement("template");return o.innerHTML=t,o}}function xt(e,t,n=e,o){if(t===Ke)return t;let i=o!==void 0?n._$Co?.[o]:n._$Cl;const r=qt(t)?void 0:t._$litDirective$;return i?.constructor!==r&&(i?._$AO?.(!1),r===void 0?i=void 0:(i=new r(e),i._$AT(e,n,o)),o!==void 0?(n._$Co??=[])[o]=i:n._$Cl=i),i!==void 0&&(t=xt(e,i._$AS(e,t.values),i,o)),t}class Os{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:o}=this._$AD,i=(t?.creationScope??dt).importNode(n,!0);ut.currentNode=i;let r=ut.nextNode(),a=0,d=0,p=o[0];for(;p!==void 0;){if(a===p.index){let u;p.type===2?u=new Kt(r,r.nextSibling,this,t):p.type===1?u=new p.ctor(r,p.name,p.strings,this,t):p.type===6&&(u=new Rs(r,this,t)),this._$AV.push(u),p=o[++d]}a!==p?.index&&(r=ut.nextNode(),a++)}return ut.currentNode=dt,i}p(t){let n=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,n),n+=o.strings.length-2):o._$AI(t[n])),n++}}class Kt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,n,o,i){this.type=2,this._$AH=z,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=o,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&t?.nodeType===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=xt(this,t,n),qt(t)?t===z||t==null||t===""?(this._$AH!==z&&this._$AR(),this._$AH=z):t!==this._$AH&&t!==Ke&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):_s(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==z&&qt(this._$AH)?this._$AA.nextSibling.data=t:this.T(dt.createTextNode(t)),this._$AH=t}$(t){const{values:n,_$litType$:o}=t,i=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=Xt.createElement(Wi(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===i)this._$AH.p(n);else{const r=new Os(i,this),a=r.u(this.options);r.p(n),this.T(a),this._$AH=r}}_$AC(t){let n=Ui.get(t.strings);return n===void 0&&Ui.set(t.strings,n=new Xt(t)),n}k(t){bo(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let o,i=0;for(const r of t)i===n.length?n.push(o=new Kt(this.O(Qt()),this.O(Qt()),this,this.options)):o=n[i],o._$AI(r),i++;i<n.length&&(this._$AR(o&&o._$AB.nextSibling,i),n.length=i)}_$AR(t=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class Tn{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,o,i,r){this.type=1,this._$AH=z,this._$AN=void 0,this.element=t,this.name=n,this._$AM=i,this.options=r,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=z}_$AI(t,n=this,o,i){const r=this.strings;let a=!1;if(r===void 0)t=xt(this,t,n,0),a=!qt(t)||t!==this._$AH&&t!==Ke,a&&(this._$AH=t);else{const d=t;let p,u;for(t=r[0],p=0;p<r.length-1;p++)u=xt(this,d[o+p],n,p),u===Ke&&(u=this._$AH[p]),a||=!qt(u)||u!==this._$AH[p],u===z?t=z:t!==z&&(t+=(u??"")+r[p+1]),this._$AH[p]=u}a&&!i&&this.j(t)}j(t){t===z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ts extends Tn{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===z?void 0:t}}class $s extends Tn{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==z)}}class Ls extends Tn{constructor(t,n,o,i,r){super(t,n,o,i,r),this.type=5}_$AI(t,n=this){if((t=xt(this,t,n,0)??z)===Ke)return;const o=this._$AH,i=t===z&&o!==z||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,r=t!==z&&(o===z||i);i&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Rs{constructor(t,n,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){xt(this,t)}}const Ds=vo.litHtmlPolyfillSupport;Ds?.(Xt,Kt),(vo.litHtmlVersions??=[]).push("3.3.1");const Ps=(e,t,n)=>{const o=n?.renderBefore??t;let i=o._$litPart$;if(i===void 0){const r=n?.renderBefore??null;o._$litPart$=i=new Kt(t.insertBefore(Qt(),r),r,void 0,n??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ns=e=>e.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $n={ATTRIBUTE:1,CHILD:2},Jt=e=>(...t)=>({_$litDirective$:e,values:t});let Ln=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,o){this._$Ct=t,this._$AM=n,this._$Ci=o}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const en=(e,t)=>{const n=e._$AN;if(n===void 0)return!1;for(const o of n)o._$AO?.(t,!1),en(o,t);return!0},Rn=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},ji=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),Hs(t)}};function zs(e){this._$AN!==void 0?(Rn(this),this._$AM=e,ji(this)):this._$AM=e}function Bs(e,t=!1,n=0){const o=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(o))for(let r=n;r<o.length;r++)en(o[r],!1),Rn(o[r]);else o!=null&&(en(o,!1),Rn(o));else en(this,e)}const Hs=e=>{e.type==$n.CHILD&&(e._$AP??=Bs,e._$AQ??=zs)};let Fs=class extends Ln{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,n,o){super._$AT(t,n,o),ji(this),this.isConnected=t._$AU}_$AO(t,n=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),n&&(en(this,t),Rn(this))}setValue(t){if(Ns(this._$Ct))this._$Ct._$AI(t,this);else{const n=[...this._$Ct._$AH];n[this._$Ci]=t,this._$Ct._$AI(n,this,0)}}disconnected(){}reconnected(){}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ko=()=>new Gs;let Gs=class{};const yo=new WeakMap,Eo=Jt(class extends Fs{render(e){return z}update(e,[t]){const n=t!==this.G;return n&&this.G!==void 0&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),z}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let n=yo.get(t);n===void 0&&(n=new WeakMap,yo.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?yo.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),At=[{ID:"en_US",NAME:"English (US)",STARTING:"Starting Manga OnlineViewer",RESUME:"Resuming reading from Page ",WAITING:"Please wait, 3 seconds...",CHOOSE_BEGINNING:"Choose the Page to start from:",BUTTON_START:"Start Manga OnlineViewer",SETTINGS:"Settings",LANGUAGE:"Language",COLOR_SCHEME:"Color Scheme",THEME:"Theme",THEME_COLOR:"Color",THEME_HUE:"Color Hue",THEME_SHADE:"Color Shade",DEFAULT_LOAD_MODE:"Default Load Mode",LOAD_MODE_NORMAL:"Normal(Wait 3 sec)",LOAD_MODE_ALWAYS:"Always(Immediately)",LOAD_MODE_NEVER:"Never(Manually)",LOAD_SPEED:"Load Speed Pages/Second",DEFAULT_ZOOM:"Default Zoom (between 5 and 200)",DEFAULT_ZOOM_MODE:"Default Zoom Mode",MINIMUM_ZOOM:"Minimum Zoom relative to the width of screen (between 30 and 100)",ZOOM_STEP:"Zoom Change Step (between 5 and 50)",DEFAULT_VIEW_MODE:"Default View Mode",VIEW_MODE_VERTICAL:"Vertical",VIEW_MODE_LEFT:"Left to Right",VIEW_MODE_RIGHT:"Right to Left",VIEW_MODE_WEBCOMIC:"WebComic",FIT_WIDTH_OVERSIZED:"Fit Width if Oversized",SHOW_THUMBNAILS:"Show Thumbnails",HIDE_CONTROLS:"Always Hide Page Controls",HEADER_TYPE:"Change Header Type",HEADER_HOVER:"Hover",HEADER_SCROLL:"Scroll",HEADER_CLICK:"Click",HEADER_FIXED:"Fixed",HEADER_SIMPLE:"Simple",BUTTON_DOWNLOAD:"Download",DOWNLOAD_ZIP:"Download Zip file",DOWNLOAD_IMAGES:"Download Images as Zip Automatically",BUTTON_NEXT:"Next",NEXT_CHAPTER:"Next Chapter",BUTTON_PREVIOUS:"Previous",PREVIOUS_CHAPTER:"Previous Chapter",BOOKMARKS:"Bookmarks",BOOKMARK:"Bookmark",BOOKMARK_REMOVED:"Bookmark Removed",BOOKMARK_SAVED:"Bookmark Saved",BOOKMARK_MESSAGE:"Next time you open this chapter it will resume from: Page ##num## (Only ONCE per Bookmark)",KEYBINDINGS:"Keybindings",EDIT_KEYBINDS:"Edit KeyBindings",SAVE_KEYBINDS:"Save KeyBindings",BUTTON_EDIT:"Edit",BUTTON_SAVE:"Save",KEYBIND_RULES:`
    <h3>Supported Keys</h3>
    Allowed modifiers: shift, option, alt, ctrl, control, command. <br/>
    Special keys: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br/>
    Examples: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,ATTENTION:"Attention",WARNING:"Warning",BUTTON_RESET_SETTINGS:"Reset Settings",SETTINGS_RESET:"Settings have been reset, reload the page to take effect",LANGUAGE_CHANGED:"Language has been changed, reload the page to take effect",AUTO_DOWNLOAD:"Next time a chapter finish loading you will be prompted to save automatically",LAZY_LOAD:"Lazy load is incompatible with zip download, you will not be able to download with this setting ON.<br/> Suggestion: <span style='color:red;font-weight:bold'>Disable Thumbnails</span> to save Bandwidth/Memory.",LAZY_LOAD_IMAGES_ENABLE:"Enable Lazy Load Images",LAZY_LOAD_IMAGES:"Lazy Start From Page (between 5 and 100)",RETURN_CHAPTER_LIST:"Return to Chapter List",PAGES_LOADED:"Pages Loaded",GO_TO_PAGE:"Go to Page",ENLARGE:"Enlarge",RESTORE:"Restore",REDUCE:"Reduce",FIT_WIDTH:"Fit Width",FIT_HEIGHT:"Fit Height",PERCENT:"Percent",TOGGLE_CONTROLS:"Toggle page controls",ZOOM_IN:"Zoom In",ZOOM_OUT:"Zoom Out",ZOOM_RESET:"Zoom Reset",ZOOM_WIDTH:"Zoom to Width",ZOOM_HEIGHT:"Zoom to Height",HIDE:"Hide",RELOAD:"Reload",SLOWLY:"Slowly",NORMAL:"Normal",FAST:"Fast",EXTREME:"Extreme",ALL_PAGES:"All Pages",SPEED_WARNING:"Loading Speed too High",SPEED_WARNING_MESSAGE:"This speed is not recommended.<br/> It may hurt some servers or get your IP marked as DDoS attacker.<br/> Please use with caution!",SCROLL_UP:"Scroll Up",SCROLL_DOWN:"Scroll Down",CLOSE:"Close",LIST_EMPTY:"List Empty",SCROLL_START:"Toggle Auto Scroll",INCREASE_SPEED:"Increase Scroll Speed",DECREASE_SPEED:"Decrease Scroll Speed",AUTO_SCROLL_HEIGHT:"Auto Scroll Speed in Pixels",VERTICAL_SEPARATOR:"Show Vertical Separators",END:"End",SCOPE:"Scope",GLOBAL:"Global",GENERAL:"General",LOADING:"Loading",ZOOM:"Zoom",OTHERS:"Others",NAVBAR_TYPE:"Change Navbar Type",NAVBAR_BOTTOM:"Bottom",NAVBAR_LEFT:"Left",NAVBAR_RIGHT:"Right",NAVBAR_DISABLED:"Disabled",PAGINATION_TYPE:"Pagination Type",PAGINATION_DISABLED:"Disabled",PAGINATION_SLIDER:"Slider",PAGINATION_ARROWS:"Side Arrows",PAGINATION_BOTH:"Both",FILE_MENU:"Main Menu",VIEW_MENU:"View Menu",ZOOM_MENU:"Zoom Menu"},{ID:"es_ES",NAME:"Espa\xF1ol (ES)",STARTING:"Iniciando Manga OnlineViewer",RESUME:"Continuando lectura desde la P\xE1gina ",WAITING:"Por favor espere, 3 segundos...",CHOOSE_BEGINNING:"Elija la p\xE1gina en la que comenzar:",BUTTON_START:"Iniciar Manga OnlineViewer",SETTINGS:"Ajustes",LANGUAGE:"Idioma",COLOR_SCHEME:"Esquema de color",THEME:"Tema",THEME_COLOR:"Color",THEME_HUE:"Matiz del color",THEME_SHADE:"Saturaci\xF3n del color",DEFAULT_LOAD_MODE:"Modo de carga por defecto",LOAD_MODE_NORMAL:"Normal (Espera 3s)",LOAD_MODE_ALWAYS:"Siempre (Inmediatamente)",LOAD_MODE_NEVER:"Nunca (Manualmente)",LOAD_SPEED:"Velocidad carga p\xE1gina/segundo",DEFAULT_ZOOM:"Zoom por defecto (entre 5 y 200)",DEFAULT_ZOOM_MODE:"Modo de zoom por defecto",MINIMUM_ZOOM:"Zoom m\xEDnimo relativo al ancho de la pantalla",ZOOM_STEP:"Paso entre cambios de zoom (entre 5 y 50)",DEFAULT_VIEW_MODE:"Modo de visualizaci\xF3n por defecto",VIEW_MODE_VERTICAL:"Vertical",VIEW_MODE_LEFT:"Izquierda a derecha",VIEW_MODE_RIGHT:"Derecha a izquierda",VIEW_MODE_WEBCOMIC:"WebComic",FIT_WIDTH_OVERSIZED:"Ajustar ancho si es demasiado grande",SHOW_THUMBNAILS:"Mostrar miniaturas",HIDE_CONTROLS:"Ocultar siempre la barra de controles",HEADER_TYPE:"Cambiar tipo de cabecera",HEADER_HOVER:"Pasar por encima",HEADER_SCROLL:"Desplazamiento",HEADER_CLICK:"Hacer click",HEADER_FIXED:"Fijo",HEADER_SIMPLE:"Sencillo",BUTTON_DOWNLOAD:"Descargar",DOWNLOAD_ZIP:"Descargar fichero Zip",DOWNLOAD_IMAGES:"Autodescargar im\xE1genes como Zip",BUTTON_NEXT:"Siguiente",NEXT_CHAPTER:"Siguiente cap\xEDtulo",BUTTON_PREVIOUS:"Anterior",PREVIOUS_CHAPTER:"Cap\xEDtulo anterior",BOOKMARKS:"Marcadores",BOOKMARK:"Marcador",BOOKMARK_REMOVED:"Marcador eliminado",BOOKMARK_SAVED:"Marcador guardado",BOOKMARK_MESSAGE:"La pr\xF3xima vez que abra este cap\xEDtulo, continuar\xE1 desde la p\xE1gina ##num## (S\xF3lo UNA VEZ por Marcador)",KEYBINDINGS:"Atajos de teclado",EDIT_KEYBINDS:"Editar atajos",SAVE_KEYBINDS:"Guardar atajos",BUTTON_EDIT:"Editar",BUTTON_SAVE:"Guardar",KEYBIND_RULES:`
    <h3>Teclas soportadas</h3>
    Modificadores permitidos: shift, option, alt, ctrl, control, command. <br/>
    Teclas especiales: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br/>
    Ejemplos: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,ATTENTION:"Atenci\xF3n",WARNING:"Alerta",BUTTON_RESET_SETTINGS:"Reiniciar ajustes(Reset Settings)",SETTINGS_RESET:"Se han restablecido los ajustes, vuelve a cargar la p\xE1gina para que surta efecto",LANGUAGE_CHANGED:"Se ha cambiado el idioma, vuelve a cargar la p\xE1gina para que surta efecto",AUTO_DOWNLOAD:"La pr\xF3xima vez que termine de cargarse un cap\xEDtulo, se le pedir\xE1 que guarde autom\xE1ticamente",LAZY_LOAD:"La carga diferida es incompatible con la descarga zip, no podr\xE1 descargar con este ajuste activado.<br/> Sugerencia: <span style='color:red;font-weight:bold'>Desactivar miniaturas</span> para ahorrar Ancho de banda/Memoria.",LAZY_LOAD_IMAGES_ENABLE:"Habilitar carga de im\xE1genes diferida",LAZY_LOAD_IMAGES:"Empezar carga diferida a partir de la p\xE1gina (entre 5 y 100)",RETURN_CHAPTER_LIST:"Regresar a la lista de cap\xEDtulos",PAGES_LOADED:"P\xE1ginas cargadas",GO_TO_PAGE:"Ir a p\xE1gina",ENLARGE:"Agrandar",RESTORE:"Restaurar",REDUCE:"Reducir",FIT_WIDTH:"Ajustar al ancho",FIT_HEIGHT:"Ajustar al alto",PERCENT:"Porcentual",TOGGLE_CONTROLS:"Alternar controles de p\xE1gina",ZOOM_IN:"Acercar",ZOOM_OUT:"Alejar",ZOOM_RESET:"Restablecer zoom",ZOOM_WIDTH:"Zoom al ancho",ZOOM_HEIGHT:"Zoom al alto",HIDE:"Ocultar",RELOAD:"Recargar",SLOWLY:"Lento",NORMAL:"Normal",FAST:"R\xE1pido",EXTREME:"Extremo",ALL_PAGES:"Todas las p\xE1ginas",SPEED_WARNING:"Velocidad de carga muy alta",SPEED_WARNING_MESSAGE:"No se recomienda esta velocidad.<br/> Puede da\xF1ar algunos servidores o marcar su IP como atacante DDoS.<br/> \xA1Util\xEDcelo con precauci\xF3n!",SCROLL_UP:"Desplazar arriba",SCROLL_DOWN:"Desplazar abajo",CLOSE:"Cerrar",LIST_EMPTY:"Lista vac\xEDa",SCROLL_START:"Alternar desplazamiento autom\xE1tico",INCREASE_SPEED:"Aumentar la velocidad de desplazamiento",DECREASE_SPEED:"Disminuir la velocidad de desplazamiento",AUTO_SCROLL_HEIGHT:"Velocidad de desplazamiento autom\xE1tico en p\xEDxeles",VERTICAL_SEPARATOR:"Mostrar separadores verticales",END:"Fin",SCOPE:"Alcance",GLOBAL:"Global",GENERAL:"General",LOADING:"Carga",ZOOM:"Zoom",OTHERS:"Otros",NAVBAR_TYPE:"Cambiar el tipo de barra de navegaci\xF3n",NAVBAR_BOTTOM:"Abajo",NAVBAR_LEFT:"Izquierda",NAVBAR_RIGHT:"Derecha",NAVBAR_DISABLED:"Desactivado",PAGINATION_TYPE:"Tipo de paginaci\xF3n",PAGINATION_DISABLED:"Desactivado",PAGINATION_SLIDER:"Control deslizante",PAGINATION_ARROWS:"Flechas laterales",PAGINATION_BOTH:"Ambos",FILE_MENU:"Men\xFA principal",VIEW_MENU:"Ver men\xFA",ZOOM_MENU:"Men\xFA Zoom"},{ID:"pt_BR",NAME:"Portugues (Brasil)",STARTING:"Iniciando Manga OnlineViewer",RESUME:"Continuando leitura na Pagina ",WAITING:"Por Favor espere, 3 segundos...",CHOOSE_BEGINNING:"Escolha a pagina de onde come\xE7ar:",BUTTON_START:"Iniciar Manga OnlineViewer",SETTINGS:"Configura\xE7\xF5es",LANGUAGE:"Idioma",COLOR_SCHEME:"Esquema de Color",THEME:"Tema",THEME_COLOR:"Cor",THEME_HUE:"Tom da Cor",THEME_SHADE:"Satura\xE7\xE3o da Cor",DEFAULT_LOAD_MODE:"Forma de Carregamento Padr\xE3o",LOAD_MODE_NORMAL:"Normal(Esperando 3 sec)",LOAD_MODE_ALWAYS:"Sempre(Imediatamente)",LOAD_MODE_NEVER:"Nunca(Manualmente)",LOAD_SPEED:"Velocidade de Carregamento Paginas/Segundo",DEFAULT_ZOOM:"Zoom padr\xE3o (entre 5 e 200)",DEFAULT_ZOOM_MODE:"Modo de Zoom padr\xE3o",MINIMUM_ZOOM:"Zoom minimo, relativo ao tamanho da tela (entre 30 e 100)",ZOOM_STEP:"Precis\xE3o da Mudan\xE7a do Zoom (entre 5 e 50)",DEFAULT_VIEW_MODE:"Modo de Visualiza\xE7\xE3o Padr\xE3o",VIEW_MODE_VERTICAL:"Vertical",VIEW_MODE_LEFT:"Esquerda para Direita",VIEW_MODE_RIGHT:"Direita para Esquerda",VIEW_MODE_WEBCOMIC:"WebComic",FIT_WIDTH_OVERSIZED:"Encher a tela se grande demais",SHOW_THUMBNAILS:"Mostra Miniaturas",HIDE_CONTROLS:"Sempre esconder controles das paginas",HEADER_TYPE:"Mudar Tipo de Cabe\xE7alho",HEADER_HOVER:"Passar por perto",HEADER_SCROLL:"Rolagem do Mouse",HEADER_CLICK:"Click",HEADER_FIXED:"Fixo",HEADER_SIMPLE:"Simples",BUTTON_DOWNLOAD:"Download",DOWNLOAD_ZIP:"Baixar arquivo Zip",DOWNLOAD_IMAGES:"Download das Imagens como Zip Automaticamente",BUTTON_NEXT:"Proximo",NEXT_CHAPTER:"Proximo Capitulo",BUTTON_PREVIOUS:"Anterior",PREVIOUS_CHAPTER:"Capitulo Anterior",BOOKMARKS:"Marca paginas",BOOKMARK:"Marcar pagina",BOOKMARK_REMOVED:"Marca pagina Removido",BOOKMARK_SAVED:"Marca pagina Salvo",BOOKMARK_MESSAGE:"Proxima vez que abrir este capitulo continuar\xE1 a partir da Pagina ##num## (Apenas UMA VEZ por marca pagina)",KEYBINDINGS:"Atalhos",EDIT_KEYBINDS:"Editar Atalhos",SAVE_KEYBINDS:"Salvar Atalhos",BUTTON_EDIT:"Editar",BUTTON_SAVE:"Salvar",KEYBIND_RULES:`
    <h3>Teclas Suportadas</h3>
    Modificadores permitidos: shift, option, alt, ctrl, control, command. <br/>
    Teclas Especiais: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide.<br/>
    Exemplos: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,ATTENTION:"Aten\xE7\xE3o",WARNING:"Alerta",BUTTON_RESET_SETTINGS:"Limpar Configura\xE7\xF5es(Reset Settings)",SETTINGS_RESET:"Configura\xE7\xF5es foram limpas, recarregue o site para efetivar a altera\xE7\xE3o",LANGUAGE_CHANGED:"Idioma foi alterado, recarregue o site para efetivar a altera\xE7\xE3o",AUTO_DOWNLOAD:"Proxima vez que abrir um capitulo download iniciara automaticamente",LAZY_LOAD:"Carregamento pregui\xE7oso n\xE3o \xE9 compativel com download de zip, n\xE3o conseguira com essa configura\xE7\xE3o ativa.<br/> Sugest\xE3o: <span style='color:red;font-weight:bold'>Desative Miniaturas</span> para economizar memoria e cota de internet.",LAZY_LOAD_IMAGES_ENABLE:"Ativar Carregamento de imagens pregui\xE7oso",LAZY_LOAD_IMAGES:"Carregamento de paginas pregui\xE7oso come\xE7a a partir de (entre 5 e 100)",RETURN_CHAPTER_LIST:"Voltar a lista de Capitulos",PAGES_LOADED:"Paginas Carregadas",GO_TO_PAGE:"Pular para",ENLARGE:"Aumentar",RESTORE:"Restaurar",REDUCE:"Diminuir",FIT_WIDTH:"Preencher Largura",FIT_HEIGHT:"Preencher Altura ",PERCENT:"Percentual",TOGGLE_CONTROLS:"Mostar controles de pagina",ZOOM_IN:"Mais Zoom",ZOOM_OUT:"Menos Zoom",ZOOM_RESET:"Resetar Zoom",ZOOM_WIDTH:"Zoom para Largura",ZOOM_HEIGHT:"Zoom para Altura",HIDE:"Esconder",RELOAD:"Recarregar",SLOWLY:"Devagar",NORMAL:"Normal",FAST:"Rapido",EXTREME:"Extremo",ALL_PAGES:"Todas as Paginas",SPEED_WARNING:"Velocidade de Carregamento muito alta",SPEED_WARNING_MESSAGE:"Essa velocidade n\xE3o \xE9 recomendada.<br/> Ela pode derrubar um servidor or marcar voce como um ataque hacker de DDoS.<br/> Use com cuidado!",SCROLL_UP:"Subir Pagina",SCROLL_DOWN:"Descer Pagina",CLOSE:"Fechar",LIST_EMPTY:"Lista Vazia",SCROLL_START:"Ativar Rolagem Automatica",INCREASE_SPEED:"Aumentar Valocidade da Rolagem",DECREASE_SPEED:"Diminuir Valocidade da Rolagem",AUTO_SCROLL_HEIGHT:"Velocidade da Rolagem Automatica em Pixels",VERTICAL_SEPARATOR:"Mostrar Separadores Verticais",END:"Fin",SCOPE:"Escopo",GLOBAL:"Global",GENERAL:"Geral",LOADING:"Carregamento",ZOOM:"Zoom",OTHERS:"Outros",NAVBAR_TYPE:"Mudar barra de navega\xE7\xE3o",NAVBAR_BOTTOM:"Embaixo",NAVBAR_LEFT:"Esquerda",NAVBAR_RIGHT:"Direita",NAVBAR_DISABLED:"Desativado",PAGINATION_TYPE:"Tipo de Pagina\xE7\xE3o",PAGINATION_DISABLED:"Desativado",PAGINATION_SLIDER:"Controle deslizante",PAGINATION_ARROWS:"Setas Laterais",PAGINATION_BOTH:"Ambos",FILE_MENU:"Menu Principal",VIEW_MENU:"Menu de Visualiza\xE7\xF5es",ZOOM_MENU:"Menu de Zoom"},{ID:"zh_CN",NAME:"\u4E2D\u6587 (\u7B80\u4F53)",STARTING:"\u6B63\u5728\u542F\u52A8 Manga OnlineViewer",RESUME:"\u4ECE\u9875\u9762\u7EE7\u7EED\u9605\u8BFB ",WAITING:"\u8BF7\u7B49\u5F853\u79D2\u949F...",CHOOSE_BEGINNING:"\u9009\u62E9\u8981\u5F00\u59CB\u7684\u9875\u6570:",BUTTON_START:"\u542F\u52A8Manga OnlineViewer",SETTINGS:"\u8BBE\u7F6E",LANGUAGE:"\u8BED\u8A00",COLOR_SCHEME:"\u914D\u8272\u65B9\u6848",THEME:"\u4E3B\u9898",THEME_COLOR:"\u989C\u8272",THEME_HUE:"\u8272\u76F8",THEME_SHADE:"\u8272\u5EA6",DEFAULT_LOAD_MODE:"\u9ED8\u8BA4\u52A0\u8F7D\u6A21\u5F0F",LOAD_MODE_NORMAL:"\u7B49\u5F85\u6A21\u5F0F(\u7B49\u5F853\u79D2\u81EA\u52A8\u52A0\u8F7D )",LOAD_MODE_ALWAYS:"\u81EA\u52A8\u6A21\u5F0F(\u65E0\u9700\u7B49\u5F85)",LOAD_MODE_NEVER:"\u624B\u52A8\u6A21\u5F0F(\u70B9\u51FB\u542F\u52A8)",LOAD_SPEED:"\u52A0\u8F7D\u901F\u5EA6\u9875\u6570/\u79D2",DEFAULT_ZOOM:"\u9ED8\u8BA4\u7F29\u653E (\u6700\u5C0F 5 \u6700\u5927 200)",DEFAULT_ZOOM_MODE:"\u9ED8\u8BA4\u7F29\u653E\u6A21\u5F0F",MINIMUM_ZOOM:"\u76F8\u5BF9\u4E8E\u5C4F\u5E55\u5BBD\u5EA6\u7684\u6700\u5C0F\u7F29\u653E (\u6700\u5C0F 30 \u6700\u5927 100)",ZOOM_STEP:"\u7F29\u653E\u7EA7\u522B (\u6700\u5C0F 5 \u6700\u5927 50)",DEFAULT_VIEW_MODE:"\u9ED8\u8BA4\u89C6\u56FE\u6A21\u5F0F",VIEW_MODE_VERTICAL:"\u5782\u76F4\u6709\u7F1D",VIEW_MODE_LEFT:"\u4ECE\u5DE6\u5230\u53F3",VIEW_MODE_RIGHT:"\u4ECE\u53F3\u5230\u5DE6",VIEW_MODE_WEBCOMIC:"\u5782\u76F4\u65E0\u7F1D",FIT_WIDTH_OVERSIZED:"\u5982\u679C\u5C3A\u5BF8\u8FC7\u5927\u3001\u5219\u9002\u5408\u5BBD\u5EA6",SHOW_THUMBNAILS:"\u663E\u793A\u7F29\u7565\u56FE",HIDE_CONTROLS:"\u59CB\u7EC8\u9690\u85CF\u9875\u9762\u63A7\u4EF6",HEADER_TYPE:"\u66F4\u6539\u6807\u9898\u663E\u793A\u65B9\u5F0F",HEADER_HOVER:"\u60AC\u505C",HEADER_SCROLL:"\u6EDA\u52A8",HEADER_CLICK:"\u70B9\u51FB",HEADER_FIXED:"\u56FA\u5B9A",HEADER_SIMPLE:"\u7B80\u5355",BUTTON_DOWNLOAD:"\u4E0B\u8F7D",DOWNLOAD_ZIP:"\u4E0B\u8F7D\u538B\u7F29\u6587\u4EF6",DOWNLOAD_IMAGES:"\u81EA\u52A8\u5C06\u56FE\u7247\u4E0B\u8F7D\u6210ZIP",BUTTON_NEXT:"\u4E0B\u4E00\u9875",NEXT_CHAPTER:"\u4E0B\u4E00\u7AE0",BUTTON_PREVIOUS:"\u4E0A\u4E00\u9875",PREVIOUS_CHAPTER:"\u4E0A\u4E00\u7AE0",BOOKMARKS:"\u4E66\u7B7E",BOOKMARK:"Bookmark",BOOKMARK_REMOVED:"\u5220\u9664\u4E66\u7B7E",BOOKMARK_SAVED:"\u4FDD\u5B58\u4E66\u7B7E",BOOKMARK_MESSAGE:"\u4E0B\u6B21\u6253\u5F00\u672C\u7AE0\u65F6\uFF0C\u5C06\u4ECE: \u9875\u7801 ##num## (\u4EC5\u4E00\u6B21 \u6BCF\u4E2A\u4E66\u7B7E)",KEYBINDINGS:"\u5FEB\u6377\u952E",EDIT_KEYBINDS:"\u7F16\u8F91\u952E\u7ED1\u5B9A",SAVE_KEYBINDS:"\u4FDD\u5B58\u952E\u7ED1\u5B9A",BUTTON_EDIT:"\u7F16\u8F91",BUTTON_SAVE:"\u6551",KEYBIND_RULES:`
    <h3>\u652F\u6301\u7684\u5BC6\u94A5</h3>
    \u5141\u8BB8\u7684\u4FEE\u9970\u7B26: shift, option, alt, ctrl, control, command. <br/>
    \u7279\u6B8A\u952E: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide.<br/>
    \u4F8B\u5B50: <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,ATTENTION:"\u6CE8\u610F",WARNING:"\u8B66\u544A",BUTTON_RESET_SETTINGS:"\u91CD\u7F6E\u8BBE\u7F6E(Reset Settings)",SETTINGS_RESET:"\u8BBE\u7F6E\u5DF2\u91CD\u7F6E\u3001\u91CD\u65B0\u52A0\u8F7D\u9875\u9762\u624D\u80FD\u751F\u6548",LANGUAGE_CHANGED:"\u8BED\u8A00\u5DF2\u66F4\u6539\u3001\u91CD\u65B0\u52A0\u8F7D\u9875\u9762\u624D\u80FD\u751F\u6548",AUTO_DOWNLOAD:"\u4E0B\u6B21\u7AE0\u8282\u52A0\u8F7D\u5B8C\u6210\u65F6\u3001\u7CFB\u7EDF\u5C06\u63D0\u793A\u60A8\u81EA\u52A8\u4FDD\u5B58",LAZY_LOAD:"\u5EF6\u8FDF\u52A0\u8F7D\u4E0Ezip\u4E0B\u8F7D\u4E0D\u517C\u5BB9\u3001\u60A8\u5C06\u65E0\u6CD5\u4F7F\u7528\u6B64\u8BBE\u7F6E\u4E0B\u8F7D.<br/> \u5EFA\u8BAE: <span style='color:red;font-weight:bold'>\u7981\u7528\u7F29\u7565\u56FE</span> \u4EE5\u8282\u7701\u6D41\u91CF\u548C\u5185\u5B58.",LAZY_LOAD_IMAGES_ENABLE:"\u542F\u7528\u5EF6\u8FDF\u52A0\u8F7D\u56FE\u50CF",LAZY_LOAD_IMAGES:"\u60F0\u6027\u52A0\u8F7D\u4ECE\u9875\u9762 (\u6700\u5C0F 5 \u6700\u5927 100)",RETURN_CHAPTER_LIST:"\u8FD4\u56DE\u7AE0\u8282\u5217\u8868",PAGES_LOADED:"\u5DF2\u52A0\u8F7D\u7684\u9875\u6570",GO_TO_PAGE:"\u8F6C\u5230\u9875\u6570",ENLARGE:"\u653E\u5927",RESTORE:"\u8FD8\u539F",REDUCE:"\u7F29\u5C0F",FIT_WIDTH:"\u9002\u5408\u5BBD\u5EA6",FIT_HEIGHT:"\u9002\u5408\u9AD8\u5EA6",PERCENT:"\u767E\u5206\u4E4B",TOGGLE_CONTROLS:"\u663E\u793A\u9690\u85CF\u9875\u9762\u63A7\u4EF6",ZOOM_IN:"\u653E\u5927",ZOOM_OUT:"\u7F29\u5C0F",ZOOM_RESET:"\u8FD8\u539F",ZOOM_WIDTH:"\u9002\u5408\u5BBD\u5EA6",ZOOM_HEIGHT:"\u9002\u5408\u9AD8\u5EA6",HIDE:"\u663E\u793A\u9690\u85CF\u9875\u9762\u63A7\u4EF6",RELOAD:"\u91CD\u65B0\u52A0\u8F7D",SLOWLY:"\u6162\u901F",NORMAL:"\u6B63\u5E38",FAST:"\u5FEB\u901F",EXTREME:"\u6781\u7AEF",ALL_PAGES:"\u6240\u6709\u9875\u9762",SPEED_WARNING:"\u52A0\u8F7D\u901F\u5EA6\u8FC7\u9AD8",SPEED_WARNING_MESSAGE:"\u4E0D\u5EFA\u8BAE\u4F7F\u7528\u6B64\u901F\u5EA6.<br/>\u5B83\u53EF\u80FD\u4F1A\u4F24\u5BB3\u67D0\u4E9B\u670D\u52A1\u5668\u6216\u5C06\u60A8\u7684 IP \u6807\u8BB0\u4E3A DDoS \u653B\u51FB\u8005.<br/>\u8BF7\u8C28\u614E\u4F7F\u7528!",SCROLL_UP:"\u5411\u4E0A\u6EDA\u52A8",SCROLL_DOWN:"\u5411\u4E0B\u6EDA\u52A8",CLOSE:"\u5173\u95ED",LIST_EMPTY:"\u6CA1\u6709\u6536\u85CF\u4E66\u7B7E",SCROLL_START:"\u5207\u6362\u81EA\u52A8\u6EDA\u52A8",INCREASE_SPEED:"\u589E\u52A0\u6EDA\u52A8\u901F\u5EA6",DECREASE_SPEED:"\u964D\u4F4E\u6EDA\u52A8\u901F\u5EA6",AUTO_SCROLL_HEIGHT:"\u81EA\u52A8\u6EDA\u52A8\u901F\u5EA6\uFF08\u4EE5\u50CF\u7D20\u4E3A\u5355\u4F4D\uFF09",VERTICAL_SEPARATOR:"\u663E\u793A\u5782\u76F4\u5206\u9694\u7B26",END:"\u7ED3\u5C3E",SCOPE:"\u8303\u56F4",GLOBAL:"\u5168\u7403",GENERAL:"\u5E38\u89C4",LOADING:"\u88C5\u8F7D",ZOOM:"\u7F29\u653E",OTHERS:"\u522B\u4EBA",NAVBAR_TYPE:"\u66F4\u6539\u5BFC\u822A\u680F\u7C7B\u578B",NAVBAR_BOTTOM:"\u5E95\u90E8",NAVBAR_LEFT:"\u5DE6\u8FB9",NAVBAR_RIGHT:"\u6B63\u786E\u7684",NAVBAR_DISABLED:"\u5DF2\u7981\u7528",PAGINATION_TYPE:"\u5206\u9875\u7C7B\u578B",PAGINATION_DISABLED:"\u5DF2\u7981\u7528",PAGINATION_SLIDER:"\u6ED1\u5757",PAGINATION_ARROWS:"\u4FA7\u8FB9\u7BAD\u5934",PAGINATION_BOTH:"\u4E24\u8005",FILE_MENU:"\u4E3B\u83DC\u5355",VIEW_MENU:"\u67E5\u770B\u83DC\u5355",ZOOM_MENU:"\u7F29\u653E\u83DC\u5355"},{ID:"de_DE",NAME:"Deutsch",STARTING:"Starte Manga OnlineViewer",RESUME:"Fortsetzen ab Seite ",WAITING:"Bitte warten, 3 Sekunden...",CHOOSE_BEGINNING:"W\xE4hle die Startseite:",BUTTON_START:"Manga OnlineViewer starten",SETTINGS:"Einstellungen",LANGUAGE:"Sprache",COLOR_SCHEME:"Farbschema",THEME:"Design",THEME_COLOR:"Farbe",THEME_HUE:"Farbton",THEME_SHADE:"Schattierung",DEFAULT_LOAD_MODE:"Standard-Lademodus",LOAD_MODE_NORMAL:"Normal (3 Sek. warten)",LOAD_MODE_ALWAYS:"Immer (sofort)",LOAD_MODE_NEVER:"Nie (manuell)",LOAD_SPEED:"Ladegeschwindigkeit Seiten/Sekunde",DEFAULT_ZOOM:"Standard-Zoom (zwischen 5 und 200)",DEFAULT_ZOOM_MODE:"Standard-Zoommodus",MINIMUM_ZOOM:"Minimaler Zoom relativ zur Bildschirmbreite (zwischen 30 und 100)",ZOOM_STEP:"Zoom-Schrittgr\xF6\xDFe (zwischen 5 und 50)",DEFAULT_VIEW_MODE:"Standard-Ansichtsmodus",VIEW_MODE_VERTICAL:"Vertikal",VIEW_MODE_LEFT:"Links nach Rechts",VIEW_MODE_RIGHT:"Rechts nach Links",VIEW_MODE_WEBCOMIC:"WebComic",FIT_WIDTH_OVERSIZED:"Breite anpassen bei \xDCbergr\xF6\xDFe",SHOW_THUMBNAILS:"Miniaturansichten anzeigen",HIDE_CONTROLS:"Seitensteuerung immer ausblenden",HEADER_TYPE:"Kopfbereichstyp \xE4ndern",HEADER_HOVER:"Hover",HEADER_SCROLL:"Scrollen",HEADER_CLICK:"Klicken",HEADER_FIXED:"Fixiert",HEADER_SIMPLE:"Einfach",BUTTON_DOWNLOAD:"Herunterladen",DOWNLOAD_ZIP:"Zip-Datei herunterladen",DOWNLOAD_IMAGES:"Bilder automatisch als Zip herunterladen",BUTTON_NEXT:"Weiter",NEXT_CHAPTER:"N\xE4chstes Kapitel",BUTTON_PREVIOUS:"Zur\xFCck",PREVIOUS_CHAPTER:"Vorheriges Kapitel",BOOKMARKS:"Lesezeichen",BOOKMARK:"Lesezeichen",BOOKMARK_REMOVED:"Lesezeichen entfernt",BOOKMARK_SAVED:"Lesezeichen gespeichert",BOOKMARK_MESSAGE:"Beim n\xE4chsten \xD6ffnen dieses Kapitels wird ab fortgesetzt: Seite ##num## (Nur EINMAL pro Lesezeichen)",KEYBINDINGS:"Tastenk\xFCrzel",EDIT_KEYBINDS:"Tastenk\xFCrzel bearbeiten",SAVE_KEYBINDS:"Tastenk\xFCrzel speichern",BUTTON_EDIT:"Bearbeiten",BUTTON_SAVE:"Speichern",KEYBIND_RULES:`
    <h3>Unterst\xFCtzte Tasten</h3>
    Erlaubte Modifikatoren: shift, option, alt, ctrl, control, command. <br/>
    Spezielle Tasten: backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br/>
    Beispiele: <kbd>a</kbd>, <kbd>ctrl+a</kbd>, <kbd>shift+a</kbd>, <kbd>num_2</kbd>, <kbd>2</kbd>
  `,ATTENTION:"Achtung",WARNING:"Warnung",BUTTON_RESET_SETTINGS:"Einstellungen zur\xFCcksetzen(Reset Settings)",SETTINGS_RESET:"Die Einstellungen wurden zur\xFCckgesetzt, bitte Seite neu laden",LANGUAGE_CHANGED:"Die Sprache wurde ge\xE4ndert, bitte Seite neu laden",AUTO_DOWNLOAD:"Beim n\xE4chsten Laden eines Kapitels wirst du automatisch gefragt, ob du speichern m\xF6chtest",LAZY_LOAD:"Lazy Load ist mit Zip-Download nicht kompatibel, mit dieser Einstellung kannst du nicht herunterladen.<br/> Empfehlung: <span style='color:red;font-weight:bold'>Miniaturansichten deaktivieren</span> um Bandbreite/Speicher zu sparen.",LAZY_LOAD_IMAGES_ENABLE:"Lazy Load Bilder aktivieren",LAZY_LOAD_IMAGES:"Lazy Start ab Seite (zwischen 5 und 100)",RETURN_CHAPTER_LIST:"Zur Kapitel\xFCbersicht zur\xFCckkehren",PAGES_LOADED:"Seiten geladen",GO_TO_PAGE:"Gehe zu Seite",ENLARGE:"Vergr\xF6\xDFern",RESTORE:"Wiederherstellen",REDUCE:"Wiederherstellen",FIT_WIDTH:"Breite anpassen",FIT_HEIGHT:"H\xF6he anpassen",PERCENT:"Prozent",TOGGLE_CONTROLS:"Seitensteuerung umschalten",ZOOM_IN:"Hineinzoomen",ZOOM_OUT:"Herauszoomen",ZOOM_RESET:"Zoom zur\xFCcksetzen",ZOOM_WIDTH:"Auf Breite zoomen",ZOOM_HEIGHT:"Auf H\xF6he zoomen",HIDE:"Ausblenden",RELOAD:"Neu laden",SLOWLY:"Langsam",NORMAL:"Normal",FAST:"Schnell",EXTREME:"Extrem",ALL_PAGES:"Alle Seiten",SPEED_WARNING:"Ladegeschwindigkeit zu hoch",SPEED_WARNING_MESSAGE:"Diese Geschwindigkeit wird nicht empfohlen.<br/> Sie kann einige Server \xFCberlasten oder deine IP als DDoS-Angreifer markieren.<br/> Bitte mit Vorsicht verwenden!",SCROLL_UP:"Nach oben scrollen",SCROLL_DOWN:"Nach unten scrollen",CLOSE:"Schlie\xDFen",LIST_EMPTY:"Liste leer",SCROLL_START:"Auto-Scroll umschalten",INCREASE_SPEED:"Scrollgeschwindigkeit erh\xF6hen",DECREASE_SPEED:"Scrollgeschwindigkeit verringern",AUTO_SCROLL_HEIGHT:"Auto-Scroll-Geschwindigkeit in Pixel",VERTICAL_SEPARATOR:"Vertikale Trenner anzeigen",END:"Ende",SCOPE:"Bereich",GLOBAL:"Global",GENERAL:"Allgemein",LOADING:"L\xE4dt",ZOOM:"Zoom",OTHERS:"Sonstiges",NAVBAR_TYPE:"Navigationsleistentyp \xE4ndern",NAVBAR_BOTTOM:"Unten",NAVBAR_LEFT:"Links",NAVBAR_RIGHT:"Rechts",NAVBAR_DISABLED:"Deaktiviert",PAGINATION_TYPE:"Paginierungstyp",PAGINATION_DISABLED:"Deaktiviert",PAGINATION_SLIDER:"Schieberegler",PAGINATION_ARROWS:"Seitenpfeile",PAGINATION_BOTH:"Beides",FILE_MENU:"Hauptmen\xFC",VIEW_MENU:"Men\xFC \u201EAnsicht\u201C",ZOOM_MENU:"Zoom-Men\xFC"},{ID:"fr_FR",NAME:"Fran\xE7ais (FR)",STARTING:"D\xE9marrage Manga OnlineViewer",RESUME:"Reprise de la lecture \xE0 partir de la Page ",WAITING:"Veuillez patienter, 3 secondes...",CHOOSE_BEGINNING:"Choisissez la page par laquelle commencer :",BUTTON_START:"D\xE9marrer Manga OnlineViewer",SETTINGS:"Param\xE8tres",LANGUAGE:"Langue",COLOR_SCHEME:"Palette de couleurs",THEME:"Th\xE8me",THEME_COLOR:"Couleur",THEME_HUE:"Teinte de couleur",THEME_SHADE:"Nuance de couleur",DEFAULT_LOAD_MODE:"Mode de chargement par d\xE9faut",LOAD_MODE_NORMAL:"Normal (attendre 3 s)",LOAD_MODE_ALWAYS:"Toujours (imm\xE9diatement)",LOAD_MODE_NEVER:"Jamais (manuellement)",LOAD_SPEED:"Vitesse de chargement des pages/seconde",DEFAULT_ZOOM:"Zoom par d\xE9faut (entre 5 et 200)",DEFAULT_ZOOM_MODE:"Mode de zoom par d\xE9faut",MINIMUM_ZOOM:"Zoom minimum par rapport \xE0 la largeur de l'\xE9cran (entre 30 et 100)",ZOOM_STEP:"Pas de changement de zoom (entre 5 et 50)",DEFAULT_VIEW_MODE:"Mode d'affichage par d\xE9faut",VIEW_MODE_VERTICAL:"Vertical",VIEW_MODE_LEFT:"De gauche \xE0 droite",VIEW_MODE_RIGHT:"De droite \xE0 gauche",VIEW_MODE_WEBCOMIC:"WebComic",FIT_WIDTH_OVERSIZED:"Ajuster \xE0 la largeur si surdimensionn\xE9",SHOW_THUMBNAILS:"Afficher les vignettes",HIDE_CONTROLS:"Toujours masquer les contr\xF4les de page",HEADER_TYPE:"Changer le type d'en-t\xEAte",HEADER_HOVER:"Survol",HEADER_SCROLL:"D\xE9filement",HEADER_CLICK:"Clic",HEADER_FIXED:"Fixe",HEADER_SIMPLE:"Simple",BUTTON_DOWNLOAD:"T\xE9l\xE9charger",DOWNLOAD_ZIP:"T\xE9l\xE9charger le fichier Zip",DOWNLOAD_IMAGES:"T\xE9l\xE9charger les images en Zip automatiquement",BUTTON_NEXT:"Suivant",NEXT_CHAPTER:"Chapitre suivant",BUTTON_PREVIOUS:"Pr\xE9c\xE9dent",PREVIOUS_CHAPTER:"Chapitre pr\xE9c\xE9dent",BOOKMARKS:"Favoris",BOOKMARK:"Favori",BOOKMARK_REMOVED:"Favori supprim\xE9",BOOKMARK_SAVED:"Favori enregistr\xE9",BOOKMARK_MESSAGE:"La prochaine fois que vous ouvrirez ce chapitre, il reprendra \xE0 partir de: Page ##num## (Seulement UNE FOIS par favori)",KEYBINDINGS:"Raccourcis clavier",EDIT_KEYBINDS:"Modifier les raccourcis clavier",SAVE_KEYBINDS:"Enregistrer les raccourcis clavier",BUTTON_EDIT:"Modifier",BUTTON_SAVE:"Enregistrer",KEYBIND_RULES:`
    <h3>Touches prises en charge</h3>
    Modificateurs autoris\xE9s : shift, option, alt, ctrl, control, command. <br/>
    Touches sp\xE9ciales : backspace, tab, clear, enter, return, esc, escape, space, up, down, left, right, home, end, pageup, pagedown, del, delete, f1 - f19, num_0 - num_9, num_multiply, num_add, num_enter, num_subtract, num_decimal, num_divide. <br/>
    Exemples : <kbd>a</kbd>, <kbd>ctrl+a</kbd> , <kbd>shift+a</kbd> , <kbd>num_2</kbd> , <kbd>2</kbd>
  `,ATTENTION:"Attention",WARNING:"Avertissement",BUTTON_RESET_SETTINGS:"R\xE9initialiser les param\xE8tres",SETTINGS_RESET:"Les param\xE8tres ont \xE9t\xE9 r\xE9initialis\xE9s, rechargez la page pour prendre effet",LANGUAGE_CHANGED:"La langue a \xE9t\xE9 modifi\xE9e, rechargez la page pour prendre effet",AUTO_DOWNLOAD:"La prochaine fois qu'un chapitre finira de se charger, il vous sera propos\xE9 de l'enregistrer automatiquement",LAZY_LOAD:"Le chargement paresseux est incompatible avec le t\xE9l\xE9chargement zip, vous ne pourrez pas t\xE9l\xE9charger avec ce param\xE8tre activ\xE9.<br/> Suggestion : <span style='color:red;font-weight:bold'>D\xE9sactivez les vignettes</span> pour \xE9conomiser de la bande passante/m\xE9moire.",LAZY_LOAD_IMAGES_ENABLE:"Activer le chargement paresseux des images",LAZY_LOAD_IMAGES:"D\xE9but du chargement paresseux \xE0 partir de la page (entre 5 et 100)",RETURN_CHAPTER_LIST:"Retour \xE0 la liste des chapitres",PAGES_LOADED:"Pages charg\xE9es",GO_TO_PAGE:"Aller \xE0 la page",ENLARGE:"Agrandir",RESTORE:"Restaurer",REDUCE:"R\xE9duire",FIT_WIDTH:"Ajuster \xE0 la largeur",FIT_HEIGHT:"Ajuster \xE0 la hauteur",PERCENT:"Pourcentage",TOGGLE_CONTROLS:"Basculer les contr\xF4les de page",ZOOM_IN:"Zoom avant",ZOOM_OUT:"Zoom arri\xE8re",ZOOM_RESET:"R\xE9initialiser le zoom",ZOOM_WIDTH:"Zoomer \xE0 la largeur",ZOOM_HEIGHT:"Zoomer \xE0 la hauteur",HIDE:"Masquer",RELOAD:"Recharger",SLOWLY:"Lentement",NORMAL:"Normal",FAST:"Rapide",EXTREME:"Extr\xEAme",ALL_PAGES:"Toutes les pages",SPEED_WARNING:"Vitesse de chargement trop \xE9lev\xE9e",SPEED_WARNING_MESSAGE:"Cette vitesse n'est pas recommand\xE9e.<br/> Elle peut nuire \xE0 certains serveurs ou marquer votre IP comme un attaquant DDoS.<br/> Veuillez l'utiliser avec prudence !",SCROLL_UP:"Faire d\xE9filer vers le haut",SCROLL_DOWN:"Faire d\xE9filer vers le bas",CLOSE:"Fermer",LIST_EMPTY:"Liste vide",SCROLL_START:"Basculer le d\xE9filement automatique",INCREASE_SPEED:"Augmenter la vitesse de d\xE9filement",DECREASE_SPEED:"Diminuer la vitesse de d\xE9filement",AUTO_SCROLL_HEIGHT:"Vitesse de d\xE9filement automatique en pixels",VERTICAL_SEPARATOR:"Afficher les s\xE9parateurs verticaux",END:"Fin",SCOPE:"Port\xE9e",GLOBAL:"Global",GENERAL:"G\xE9n\xE9ral",LOADING:"Chargement",ZOOM:"Zoom",OTHERS:"Autres",NAVBAR_TYPE:"Changer le type de barre de navigation",NAVBAR_BOTTOM:"Bas",NAVBAR_LEFT:"Gauche",NAVBAR_RIGHT:"Droite",NAVBAR_DISABLED:"D\xE9sactiv\xE9",PAGINATION_TYPE:"Type de pagination",PAGINATION_DISABLED:"D\xE9sactiv\xE9",PAGINATION_SLIDER:"Curseur",PAGINATION_ARROWS:"Fl\xE8ches lat\xE9rales",PAGINATION_BOTH:"Les deux",FILE_MENU:"Menu principal",VIEW_MENU:"Menu Affichage",ZOOM_MENU:"Menu Zoom"}],tn=(e,t)=>{const n=(o,i)=>_.transform(o,(r,a,d)=>{_.isEqual(a,i[d])||(_.isObject(a)&&_.isObject(i[d])&&!_.isArray(a)?r[d]=n(a,i[d]):r[d]=a)});return n(e,t)},Zi={bookmarks:[],colorScheme:"dark",downloadZip:!1,enabled:!1,fitWidthIfOversize:!0,header:"scroll",hidePageControls:!1,lazyLoadImages:!1,lazyStart:50,loadMode:"wait",locale:"en_US",maxReload:5,minZoom:30,navbar:"bottom",pagination:"disabled",scrollHeight:25,theme:"#29487D",throttlePageLoad:1e3,viewMode:"WebComic",zoomMode:"percent",zoomStep:30,zoomValue:100,keybinds:{SCROLL_UP:["up","W","num_8"],SCROLL_DOWN:["down","S","num_2"],NEXT_CHAPTER:["right","/","D","num_6"],PREVIOUS_CHAPTER:["left",";","A","num_4"],RETURN_CHAPTER_LIST:["backspace","del"],ENLARGE:["-","num_add","E"],REDUCE:["=","num_subtract","Q"],RESTORE:["9","num_divide","R"],FIT_WIDTH:["0","num_multiply","F"],FIT_HEIGHT:["H","num_0"],SETTINGS:["num_divide","num_5","X"],VIEW_MODE_WEBCOMIC:["C"],VIEW_MODE_VERTICAL:["V"],VIEW_MODE_LEFT:["N"],VIEW_MODE_RIGHT:["B"],SCROLL_START:["space"],INCREASE_SPEED:["."],DECREASE_SPEED:[","]}},Vs={lazyLoadImages:!0,fitWidthIfOversize:!0,navbar:"disabled",viewMode:"WebComic",header:"scroll",hidePageControls:!0,pagination:"disabled"};function Ge(e=!0){return vs()?_.defaultsDeep(Vs,{...Zi,theme:e?"#29487D":"#004526"}):{...Zi,theme:e?"#29487D":"#004526"}}function Us(e,t){if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;const n=r=>`${r.url}-${r.date}`,o=[...e].sort((r,a)=>n(r).localeCompare(n(a))),i=[...t].sort((r,a)=>n(r).localeCompare(n(a)));return _.isEqual(o,i)}}function Ws(e,t){if(e&&typeof e=="object"&&t&&typeof t=="object"){const n=e,o=t,i=Object.keys(n).sort((a,d)=>a.localeCompare(d)),r=Object.keys(o).sort((a,d)=>a.localeCompare(d));if(!_.isEqual(i,r))return!1;for(const a of i){const d=n[a]?[...n[a]].sort((u,h)=>u.localeCompare(h)):[],p=o[a]?[...o[a]].sort((u,h)=>u.localeCompare(h)):[];if(!_.isEqual(d,p))return!1}return!0}}function Qi(e,t,n){if(n==="bookmarks")return Us(e,t);if(n==="keybinds")return Ws(e,t)}function Dn(e,t,n){if(e===t)return!1;if(n){const o={[n]:e},i={[n]:t};return!_.isEqualWith(o,i,Qi)}return!_.isEqualWith(e,t,Qi)}let xe=_.defaultsDeep(us(Ge()),Ge()),Ae=_.defaultsDeep(ps(Ge(!1)),Ge(!1));const pt=()=>Ae?.enabled===!0,Io=e=>pt()&&!["locale","bookmarks","keybinds"].includes(e),he=Di(pt()?{...Ae,locale:xe.locale,keybinds:xe.keybinds,bookmarks:xe.bookmarks}:xe),St=As(he,e=>At.find(t=>t.ID===e.locale)??At[1]),Se=Di({autoScroll:!1,chapter:ko(),currentPage:0,device:Wt(),loaded:0,manga:void 0,panel:"none",scrollToPage:void 0});function gt(e){if(e){const t=Io(e)?Ae[e]:xe[e],n=he.get()?.[e];Dn(n,t,e)&&(he.setKey(e,t),O("Refreshed Settings",e,t));return}for(const t in he.get()){const n=he.get()[t],o=Io(t)?Ae[t]:xe[t];Dn(n,o)&&he.setKey(t,o)}O("Refreshed All Settings")}function js(e){const t=_.defaultsDeep(e,Ge()),n=xe?tn(t,xe):t;if(!Pe(n)){O("Imported Global Settings",n),xe=t;for(const o in n)gt(o)}}Li(_.debounce(js,300),"settings");function Zs(e){const t=_.defaultsDeep(e,Ge(!1)),n=Ae?tn(t,Ae):t;if(!Pe(n)){O("Imported Local Settings",n),Ae=t;for(const o in n)gt(o)}}Li(_.debounce(Zs,300),location.hostname);function m(e){return he.get()?.[e]}function _t(e,t){const n=he.get()?.[e];Dn(n,t,e)&&he.setKey(e,t)}function se(e,t){const n=m(e);Dn(n,t,e)&&(he.setKey(e,t),Io(e)?(Ae[e]=t,$i(tn(Ae,Ge(!1)))):(xe[e]=t,gs(tn(xe,Ge()))))}function nn(e,t){const n=m(e),o=t(n);_t(e,o)}function I(e){return Se.get()[e]}function Z(e,t){const n=Se.get()[e];_.isEqual(n,t)||Se.setKey(e,t)}function on(e,t){const n=Se.get()[e],o=t(n);_.isEqual(n,o)||Se.setKey(e,o)}function xo(e,t){on("images",n=>({...n,[e]:{...n?.[e],...t(n?.[e]??{})}}))}function f(e){const t=At.find(n=>n.ID===m("locale"))??At[1];return ka(t,e)?t?.[e]??At[1]?.[e]:`##MISSING_STRING_${e}##`}function qi(e=!1){return Ae.enabled=e,$i(tn(Ae,Ge(!1))),O("Local Settings ",e?"Enabled":"Disabled"),Zt.info({title:"Changed Settings to",description:pt()?"Local":"Global",duration:2e3}),pt()}function Qs(){pt()?(Ci(location.hostname),Ae=Ge(!1),qi(!1)):(Ci("settings"),xe=Ge(),gt()),O("Settings Reset")}function Mt(e=location.href){return m("bookmarks").find(t=>t.url===e)?.page}function qs(e=null){Ne("Current Settings (Local:",pt(),") ",e?he.get()[e]:he.get(),`
Global Settings`,e?xe[e]:xe,`
Local Settings`,e?Ae[e]:Ae,`
AppState`,Se.get())}ds("MOVSettings",qs);const Ct=34,Ys=(e,t,n)=>{if(n&&!["bookmarks","zoomValue"].includes(n)){const o=t[n],i=e[n];Zt.info({title:`${n} Changed`,description:`from ${JSON.stringify(o)} to ${JSON.stringify(i)}`,duration:2e3})}};he.listen(_.debounce(Ys,300));const Yi=(e,...t)=>t.length===0?e[0]:String.raw({raw:e},...t),Ot=Yi,Xi=Yi,Ao={navy:"#001f3f",darkblue:"#1e4f7a",blue:"#1A2F4B",darkgreen:"#062925",green:"#1A3636",grass:"#1B3C53",teal:"#044A42",darkpurple:"#1B0044",purple:"#363062",grape:"#31326F",maroon:"#44000D"},le={dark:{50:"#C1C2C5",100:"#A6A7AB",200:"#909296",300:"#5c5f66",400:"#373A40",500:"#2C2E33",600:"#25262b",700:"#1A1B1E",800:"#141517",900:"#101113",950:"#000000"},slate:{50:"oklch(98.4% 0.003 247.858)",100:"oklch(96.8% 0.007 247.896)",200:"oklch(92.9% 0.013 255.508)",300:"oklch(86.9% 0.022 252.894)",400:"oklch(70.4% 0.04 256.788)",500:"oklch(55.4% 0.046 257.417)",600:"oklch(44.6% 0.043 257.281)",700:"oklch(37.2% 0.044 257.287)",800:"oklch(27.9% 0.041 260.031)",900:"oklch(20.8% 0.042 265.755)",950:"oklch(12.9% 0.042 264.695)"},gray:{50:"oklch(98.5% 0.002 247.839)",100:"oklch(96.7% 0.003 264.542)",200:"oklch(92.8% 0.006 264.531)",300:"oklch(87.2% 0.01 258.338)",400:"oklch(70.7% 0.022 261.325)",500:"oklch(55.1% 0.027 264.364)",600:"oklch(44.6% 0.03 256.802)",700:"oklch(37.3% 0.034 259.733)",800:"oklch(27.8% 0.033 256.848)",900:"oklch(21% 0.034 264.665)",950:"oklch(13% 0.028 261.692)"},zinc:{50:"oklch(98.5% 0 0)",100:"oklch(96.7% 0.001 286.375)",200:"oklch(92% 0.004 286.32)",300:"oklch(87.1% 0.006 286.286)",400:"oklch(70.5% 0.015 286.067)",500:"oklch(55.2% 0.016 285.938)",600:"oklch(44.2% 0.017 285.786)",700:"oklch(37% 0.013 285.805)",800:"oklch(27.4% 0.006 286.033)",900:"oklch(21% 0.006 285.885)",950:"oklch(14.1% 0.005 285.823)"},neutral:{50:"oklch(98.5% 0 0)",100:"oklch(97% 0 0)",200:"oklch(92.2% 0 0)",300:"oklch(87% 0 0)",400:"oklch(70.8% 0 0)",500:"oklch(55.6% 0 0)",600:"oklch(43.9% 0 0)",700:"oklch(37.1% 0 0)",800:"oklch(26.9% 0 0)",900:"oklch(20.5% 0 0)",950:"oklch(14.5% 0 0)"},stone:{50:"oklch(98.5% 0.001 106.423)",100:"oklch(97% 0.001 106.424)",200:"oklch(92.3% 0.003 48.717)",300:"oklch(86.9% 0.005 56.366)",400:"oklch(70.9% 0.01 56.259)",500:"oklch(55.3% 0.013 58.071)",600:"oklch(44.4% 0.011 73.639)",700:"oklch(37.4% 0.01 67.558)",800:"oklch(26.8% 0.007 34.298)",900:"oklch(21.6% 0.006 56.043)",950:"oklch(14.7% 0.004 49.25)"},red:{50:"oklch(97.1% 0.013 17.38)",100:"oklch(93.6% 0.032 17.717)",200:"oklch(88.5% 0.062 18.334)",300:"oklch(80.8% 0.114 19.571)",400:"oklch(70.4% 0.191 22.216)",500:"oklch(63.7% 0.237 25.331)",600:"oklch(57.7% 0.245 27.325)",700:"oklch(50.5% 0.213 27.518)",800:"oklch(44.4% 0.177 26.899)",900:"oklch(39.6% 0.141 25.723)",950:"oklch(25.8% 0.092 26.042)"},orange:{50:"oklch(98% 0.016 73.684)",100:"oklch(95.4% 0.038 75.164)",200:"oklch(90.1% 0.076 70.697)",300:"oklch(83.7% 0.128 66.29)",400:"oklch(75% 0.183 55.934)",500:"oklch(70.5% 0.213 47.604)",600:"oklch(64.6% 0.222 41.116)",700:"oklch(55.3% 0.195 38.402)",800:"oklch(47% 0.157 37.304)",900:"oklch(40.8% 0.123 38.172)",950:"oklch(26.6% 0.079 36.259)"},amber:{50:"oklch(98.7% 0.022 95.277)",100:"oklch(96.2% 0.059 95.617)",200:"oklch(92.4% 0.12 95.746)",300:"oklch(87.9% 0.169 91.605)",400:"oklch(82.8% 0.189 84.429)",500:"oklch(76.9% 0.188 70.08)",600:"oklch(66.6% 0.179 58.318)",700:"oklch(55.5% 0.163 48.998)",800:"oklch(47.3% 0.137 46.201)",900:"oklch(41.4% 0.112 45.904)",950:"oklch(27.9% 0.077 45.635)"},yellow:{50:"oklch(98.7% 0.026 102.212)",100:"oklch(97.3% 0.071 103.193)",200:"oklch(94.5% 0.129 101.54)",300:"oklch(90.5% 0.182 98.111)",400:"oklch(85.2% 0.199 91.936)",500:"oklch(79.5% 0.184 86.047)",600:"oklch(68.1% 0.162 75.834)",700:"oklch(55.4% 0.135 66.442)",800:"oklch(47.6% 0.114 61.907)",900:"oklch(42.1% 0.095 57.708)",950:"oklch(28.6% 0.066 53.813)"},lime:{50:"oklch(98.6% 0.031 120.757)",100:"oklch(96.7% 0.067 122.328)",200:"oklch(93.8% 0.127 124.321)",300:"oklch(89.7% 0.196 126.665)",400:"oklch(84.1% 0.238 128.85)",500:"oklch(76.8% 0.233 130.85)",600:"oklch(64.8% 0.2 131.684)",700:"oklch(53.2% 0.157 131.589)",800:"oklch(45.3% 0.124 130.933)",900:"oklch(40.5% 0.101 131.063)",950:"oklch(27.4% 0.072 132.109)"},green:{50:"oklch(98.2% 0.018 155.826)",100:"oklch(96.2% 0.044 156.743)",200:"oklch(92.5% 0.084 155.995)",300:"oklch(87.1% 0.15 154.449)",400:"oklch(79.2% 0.209 151.711)",500:"oklch(72.3% 0.219 149.579)",600:"oklch(62.7% 0.194 149.214)",700:"oklch(52.7% 0.154 150.069)",800:"oklch(44.8% 0.119 151.328)",900:"oklch(39.3% 0.095 152.535)",950:"oklch(26.6% 0.065 152.934)"},emerald:{50:"oklch(97.9% 0.021 166.113)",100:"oklch(95% 0.052 163.051)",200:"oklch(90.5% 0.093 164.15)",300:"oklch(84.5% 0.143 164.978)",400:"oklch(76.5% 0.177 163.223)",500:"oklch(69.6% 0.17 162.48)",600:"oklch(59.6% 0.145 163.225)",700:"oklch(50.8% 0.118 165.612)",800:"oklch(43.2% 0.095 166.913)",900:"oklch(37.8% 0.077 168.94)",950:"oklch(26.2% 0.051 172.552)"},teal:{50:"oklch(98.4% 0.014 180.72)",100:"oklch(95.3% 0.051 180.801)",200:"oklch(91% 0.096 180.426)",300:"oklch(85.5% 0.138 181.071)",400:"oklch(77.7% 0.152 181.912)",500:"oklch(70.4% 0.14 182.503)",600:"oklch(60% 0.118 184.704)",700:"oklch(51.1% 0.096 186.391)",800:"oklch(43.7% 0.078 188.216)",900:"oklch(38.6% 0.063 188.416)",950:"oklch(27.7% 0.046 192.524)"},cyan:{50:"oklch(98.4% 0.019 200.873)",100:"oklch(95.6% 0.045 203.388)",200:"oklch(91.7% 0.08 205.041)",300:"oklch(86.5% 0.127 207.078)",400:"oklch(78.9% 0.154 211.53)",500:"oklch(71.5% 0.143 215.221)",600:"oklch(60.9% 0.126 221.723)",700:"oklch(52% 0.105 223.128)",800:"oklch(45% 0.085 224.283)",900:"oklch(39.8% 0.07 227.392)",950:"oklch(30.2% 0.056 229.695)"},sky:{50:"oklch(97.7% 0.013 236.62)",100:"oklch(95.1% 0.026 236.824)",200:"oklch(90.1% 0.058 230.902)",300:"oklch(82.8% 0.111 230.318)",400:"oklch(74.6% 0.16 232.661)",500:"oklch(68.5% 0.169 237.323)",600:"oklch(58.8% 0.158 241.966)",700:"oklch(50% 0.134 242.749)",800:"oklch(44.3% 0.11 240.79)",900:"oklch(39.1% 0.09 240.876)",950:"oklch(29.3% 0.066 243.157)"},blue:{50:"oklch(97% 0.014 254.604)",100:"oklch(93.2% 0.032 255.585)",200:"oklch(88.2% 0.059 254.128)",300:"oklch(80.9% 0.105 251.813)",400:"oklch(70.7% 0.165 254.624)",500:"oklch(62.3% 0.214 259.815)",600:"oklch(54.6% 0.245 262.881)",700:"oklch(48.8% 0.243 264.376)",800:"oklch(42.4% 0.199 265.638)",900:"oklch(37.9% 0.146 265.522)",950:"oklch(28.2% 0.091 267.935)"},indigo:{50:"oklch(96.2% 0.018 272.314)",100:"oklch(93% 0.034 272.788)",200:"oklch(87% 0.065 274.039)",300:"oklch(78.5% 0.115 274.713)",400:"oklch(67.3% 0.182 276.935)",500:"oklch(58.5% 0.233 277.117)",600:"oklch(51.1% 0.262 276.966)",700:"oklch(45.7% 0.24 277.023)",800:"oklch(39.8% 0.195 277.366)",900:"oklch(35.9% 0.144 278.697)",950:"oklch(25.7% 0.09 281.288)"},violet:{50:"oklch(96.9% 0.016 293.756)",100:"oklch(94.3% 0.029 294.588)",200:"oklch(89.4% 0.057 293.283)",300:"oklch(81.1% 0.111 293.571)",400:"oklch(70.2% 0.183 293.541)",500:"oklch(60.6% 0.25 292.717)",600:"oklch(54.1% 0.281 293.009)",700:"oklch(49.1% 0.27 292.581)",800:"oklch(43.2% 0.232 292.759)",900:"oklch(38% 0.189 293.745)",950:"oklch(28.3% 0.141 291.089)"},purple:{50:"oklch(97.7% 0.014 308.299)",100:"oklch(94.6% 0.033 307.174)",200:"oklch(90.2% 0.063 306.703)",300:"oklch(82.7% 0.119 306.383)",400:"oklch(71.4% 0.203 305.504)",500:"oklch(62.7% 0.265 303.9)",600:"oklch(55.8% 0.288 302.321)",700:"oklch(49.6% 0.265 301.924)",800:"oklch(43.8% 0.218 303.724)",900:"oklch(38.1% 0.176 304.987)",950:"oklch(29.1% 0.149 302.717)"},fuchsia:{50:"oklch(97.7% 0.017 320.058)",100:"oklch(95.2% 0.037 318.852)",200:"oklch(90.3% 0.076 319.62)",300:"oklch(83.3% 0.145 321.434)",400:"oklch(74% 0.238 322.16)",500:"oklch(66.7% 0.295 322.15)",600:"oklch(59.1% 0.293 322.896)",700:"oklch(51.8% 0.253 323.949)",800:"oklch(45.2% 0.211 324.591)",900:"oklch(40.1% 0.17 325.612)",950:"oklch(29.3% 0.136 325.661)"},pink:{50:"oklch(97.1% 0.014 343.198)",100:"oklch(94.8% 0.028 342.258)",200:"oklch(89.9% 0.061 343.231)",300:"oklch(82.3% 0.12 346.018)",400:"oklch(71.8% 0.202 349.761)",500:"oklch(65.6% 0.241 354.308)",600:"oklch(59.2% 0.249 0.584)",700:"oklch(52.5% 0.223 3.958)",800:"oklch(45.9% 0.187 3.815)",900:"oklch(40.8% 0.153 2.432)",950:"oklch(28.4% 0.109 3.907)"},rose:{50:"oklch(96.9% 0.015 12.422)",100:"oklch(94.1% 0.03 12.58)",200:"oklch(89.2% 0.058 10.001)",300:"oklch(81% 0.117 11.638)",400:"oklch(71.2% 0.194 13.428)",500:"oklch(64.5% 0.246 16.439)",600:"oklch(58.6% 0.253 17.585)",700:"oklch(51.4% 0.222 16.935)",800:"oklch(45.5% 0.188 13.697)",900:"oklch(41% 0.159 10.272)",950:"oklch(27.1% 0.105 12.094)"}};function Xs(e){if(!Color.parse(e))return!0;const t=Color.contrast(e,"white","Lstar"),n=Color.contrast(e,"black","Lstar");return t>n}function Tt(e){return Xs(e)?"#FFFFFF":"#000000"}function rn(e){const t=e.replace(/[\t\n\r]/gim,"").replace(/\s\s+/g," ");return`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(t).replace(/\(/g,"%28").replace(/\)/g,"%29")}`}const Pn=e=>e%100===0?15:e%50===0?10:e%25===0?5:2.5;function Ks(e,t,n,o){let i="";for(let r=0;r<=e;r+=5){const a=Ot` <line
      x1="${r}"
      y1="0"
      x2="${r}"
      y2="${Pn(r)}"
    />`;if(i+=a,r!==0&&r%50===0){const d=Ot` <text
        x="${r}"
        y="25"
        text-anchor="middle"
        font-size="${Pn(r)}px"
      >
        ${r}
      </text>`;i+=d}}for(let r=0;r<=t;r+=5){const a=Ot` <line
      x1="0"
      y1="${r}"
      x2="${Pn(r)}"
      y2="${r}"
    />`;if(i+=a,r!==0&&r%50===0){const d=Ot` <text
        x="25"
        y="${r}"
        text-anchor="middle"
        dominant-baseline="middle"
        font-size="${Pn(r)}px"
      >
        ${r}
      </text>`;i+=d}}return Ot` <svg
    xmlns="http://www.w3.org/2000/svg"
    width="${e}"
    height="${t}"
    viewBox="0 0 ${e} ${t}"
  >
    <rect
      width="${e}"
      height="${t}"
      fill="${n}"
    />
    <text
      fill="${o}"
      font-family="Verdana, Arial, Helvetica, sans-serif"
      font-size="30"
      dy="10.5"
      font-weight="bold"
      x="50%"
      y="50%"
      text-anchor="middle"
    >
      ${e}x${t}
    </text>
    <g
      stroke-width="1"
      font-family="Verdana, Arial, Helvetica, sans-serif"
      font-size="10px"
      font-weight="100"
      fill="${o}"
      stroke="${o}"
    >
      ${i}
    </g>
  </svg>`}function $t(e,t,n="#0F1C3F",o="#ECEAD9"){const i=Ks(e,t,n,o);return rn(i)}const Ki=Object.values(le).map(e=>e[900]),Ji=[400,600,900,1200,1400,1600,1970],er=[600,800,1e3,1200,1400,2e3,2600];function Js(){const e=Math.floor(Math.random()*Ji.length),t=Math.floor(Math.random()*er.length),n=Math.floor(Math.random()*Ki.length);return $t(Ji[e],er[t],Ki[n])}const tr={name:"Local Files",url:/(file:\/\/\/.+(index)?.html)/,homepage:"/index.html?raw=1",language:[N.RAW],category:B.MANGA,run(){const e=parseInt(/\d+/.exec(window.location.search)?.toString()??"5",10);return{title:"Placeholder Manga Loaded",series:"?reload",pages:e,begin:1,prev:"?pages=50",next:"?pages=1",listImages:[$t(1970,1400,"#2D1657"),$t(985,1400,"#152C55"),$t(985,1400,"#7A1420"),$t(985,1400,"#0F5B30"),$t(1970,1400,"#806D15"),...Array(e).fill(0).map(Js)]}}},el=["image/apng","image/bmp","image/gif","image/jpeg","image/pjpeg","image/png","image/svg+xml","image/tiff","image/webp","image/x-icon"],tl=/.(png|jpg|jpeg|gif|bmp|webp)$/i,nr=(e,t)=>e.localeCompare(t,navigator.languages[0]||navigator.language,{numeric:!0,ignorePunctuation:!0});function nl(e){return el.includes(e.type)}const ol=e=>{const t=new Uint8Array(e),n=new Blob([t.buffer]);return URL.createObjectURL(n)};async function il(e){const t=await JSZip.loadAsync(e),n=t.filter((o,i)=>!i.dir&&tl.test(i.name)).sort((o,i)=>nr(o.name,i.name));return O("Files in zip:",t.files),Promise.all(n.map(o=>o.async("arraybuffer").then(ol)))}function or(e,t){jr([{...tr,start:"always"},{title:e,series:"?reload",pages:t.length,begin:1,prev:"#",next:"#",lazy:!1,listImages:t}]).then(()=>O("Page loaded"))}async function rl(e){const t=await il(e);or(typeof e=="string"?e:e.name,t)}function ir(e){const t=e.target,n=Array.from(t.files).filter(nl).sort((o,i)=>nr(o.webkitRelativePath||o.name,i.webkitRelativePath||i.name));O("Local Files: ",n,n.map(o=>o.webkitRelativePath||o.name)),t.files?.[0]&&or(t.files[0].webkitRelativePath.split("/")[0]||"Local Images",n.map(URL.createObjectURL))}function al(){return tr.url.test(window.location.href)?(document.querySelector("#MangaOnlineViewer, #LocalTest")&&(document.querySelector("#LocalTest")?.setAttribute("style","display:none"),document.querySelector("#file")?.addEventListener("change",e=>{const t=e.target;t.files?.[0]&&rl(t.files[0])}),document.querySelector("#folder")?.addEventListener("change",ir),document.querySelector("#images")?.addEventListener("change",ir),O("Waiting for zip/images upload")),!0):!1}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nn=globalThis,So=Nn.ShadowRoot&&(Nn.ShadyCSS===void 0||Nn.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,_o=Symbol(),rr=new WeakMap;let ar=class{constructor(t,n,o){if(this._$cssResult$=!0,o!==_o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(So&&t===void 0){const o=n!==void 0&&n.length===1;o&&(t=rr.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&rr.set(n,t))}return t}toString(){return this.cssText}};const _e=e=>new ar(typeof e=="string"?e:e+"",void 0,_o),ve=(e,...t)=>{const n=e.length===1?e[0]:t.reduce(((o,i,r)=>o+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[r+1]),e[0]);return new ar(n,e,_o)},sl=(e,t)=>{if(So)e.adoptedStyleSheets=t.map((n=>n instanceof CSSStyleSheet?n:n.styleSheet));else for(const n of t){const o=document.createElement("style"),i=Nn.litNonce;i!==void 0&&o.setAttribute("nonce",i),o.textContent=n.cssText,e.appendChild(o)}},sr=So?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const o of t.cssRules)n+=o.cssText;return _e(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ll,defineProperty:cl,getOwnPropertyDescriptor:dl,getOwnPropertyNames:hl,getOwnPropertySymbols:ul,getPrototypeOf:pl}=Object,zn=globalThis,lr=zn.trustedTypes,gl=lr?lr.emptyScript:"",ml=zn.reactiveElementPolyfillSupport,an=(e,t)=>e,Bn={toAttribute(e,t){switch(t){case Boolean:e=e?gl:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},Mo=(e,t)=>!ll(e,t),cr={attribute:!0,type:String,converter:Bn,reflect:!1,useDefault:!1,hasChanged:Mo};Symbol.metadata??=Symbol("metadata"),zn.litPropertyMetadata??=new WeakMap;class Lt extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=cr){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(t,n),!n.noAccessor){const o=Symbol(),i=this.getPropertyDescriptor(t,o,n);i!==void 0&&cl(this.prototype,t,i)}}static getPropertyDescriptor(t,n,o){const{get:i,set:r}=dl(this.prototype,t)??{get(){return this[n]},set(a){this[n]=a}};return{get:i,set(a){const d=i?.call(this);r?.call(this,a),this.requestUpdate(t,d,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??cr}static _$Ei(){if(this.hasOwnProperty(an("elementProperties")))return;const t=pl(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(an("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(an("properties"))){const n=this.properties,o=[...hl(n),...ul(n)];for(const i of o)this.createProperty(i,n[i])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[o,i]of n)this.elementProperties.set(o,i)}this._$Eh=new Map;for(const[n,o]of this.elementProperties){const i=this._$Eu(n,o);i!==void 0&&this._$Eh.set(i,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const i of o)n.unshift(sr(i))}else t!==void 0&&n.push(sr(t));return n}static _$Eu(t,n){const o=n.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const o of n.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return sl(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,n,o){this._$AK(t,o)}_$ET(t,n){const o=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,o);if(i!==void 0&&o.reflect===!0){const r=(o.converter?.toAttribute!==void 0?o.converter:Bn).toAttribute(n,o.type);this._$Em=t,r==null?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,n){const o=this.constructor,i=o._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const r=o.getPropertyOptions(i),a=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:Bn;this._$Em=i;const d=a.fromAttribute(n,r.type);this[i]=d??this._$Ej?.get(i)??d,this._$Em=null}}requestUpdate(t,n,o){if(t!==void 0){const i=this.constructor,r=this[t];if(o??=i.getPropertyOptions(t),!((o.hasChanged??Mo)(r,n)||o.useDefault&&o.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,o))))return;this.C(t,n,o)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,n,{useDefault:o,reflect:i,wrapped:r},a){o&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??n??this[t]),r!==!0||a!==void 0)||(this._$AL.has(t)||(this.hasUpdated||o||(n=void 0),this._$AL.set(t,n)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,r]of this._$Ep)this[i]=r;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[i,r]of o){const{wrapped:a}=r,d=this[i];a!==!0||this._$AL.has(i)||d===void 0||this.C(i,void 0,r,d)}}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),this._$EO?.forEach((o=>o.hostUpdate?.())),this.update(n)):this._$EM()}catch(o){throw t=!1,this._$EM(),o}t&&this._$AE(n)}willUpdate(t){}_$AE(t){this._$EO?.forEach((n=>n.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((n=>this._$ET(n,this[n]))),this._$EM()}updated(t){}firstUpdated(t){}}Lt.elementStyles=[],Lt.shadowRootOptions={mode:"open"},Lt[an("elementProperties")]=new Map,Lt[an("finalized")]=new Map,ml?.({ReactiveElement:Lt}),(zn.reactiveElementVersions??=[]).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Co=globalThis;let X=class extends Lt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ps(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Ke}};X._$litElement$=!0,X.finalized=!0,Co.litElementHydrateSupport?.({LitElement:X});const fl=Co.litElementPolyfillSupport;fl?.({LitElement:X}),(Co.litElementVersions??=[]).push("4.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const te=e=>(t,n)=>{n!==void 0?n.addInitializer((()=>{customElements.define(e,t)})):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vl={attribute:!0,type:String,converter:Bn,reflect:!1,hasChanged:Mo},bl=(e=vl,t,n)=>{const{kind:o,metadata:i}=n;let r=globalThis.litPropertyMetadata.get(i);if(r===void 0&&globalThis.litPropertyMetadata.set(i,r=new Map),o==="setter"&&((e=Object.create(e)).wrapped=!0),r.set(n.name,e),o==="accessor"){const{name:a}=n;return{set(d){const p=t.get.call(this);t.set.call(this,d),this.requestUpdate(a,p,e)},init(d){return d!==void 0&&this.C(a,void 0,e,d),d}}}if(o==="setter"){const{name:a}=n;return function(d){const p=this[a];t.call(this,d),this.requestUpdate(a,p,e)}}throw Error("Unsupported decorator location: "+o)};function k(e){return(t,n)=>typeof n=="object"?bl(e,t,n):((o,i,r)=>{const a=i.hasOwnProperty(r);return i.constructor.createProperty(r,o),a?Object.getOwnPropertyDescriptor(i,r):void 0})(e,t,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Te(e){return k({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wl=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,n),n);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function mt(e,t){return(n,o,i)=>{const r=a=>a.renderRoot?.querySelector(e)??null;return wl(n,o,{get(){return r(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Hn=class extends Ln{constructor(t){if(super(t),this.it=z,t.type!==$n.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===z||t==null)return this._t=void 0,this.it=t;if(t===Ke)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const n=[t];return n.raw=n,this._t={_$litType$:this.constructor.resultType,strings:n,values:[]}}};Hn.directiveName="unsafeHTML",Hn.resultType=1;const dr=Jt(Hn);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Oo extends Hn{}Oo.directiveName="unsafeSVG",Oo.resultType=2;const hr=Jt(Oo);function kl(e){return e.startsWith("Icon")&&!e.includes("-")&&!e.includes("_")?e:`Icon${(e.startsWith("Icon")?e.substring(4):e).split(/[-_]/).map(i=>i.charAt(0).toUpperCase()+i.slice(1)).join("")}`}const yl=`.icon-tabler-file-download > :nth-child(n + 4) {
  color: gold;
}

.icon-tabler-arrow-autofit-width > :nth-child(n + 3) {
  color: yellow;
}

.icon-tabler-arrow-autofit-height > :nth-child(n + 3) {
  color: yellow;
}

.icon-tabler-zoom-in-area > :nth-child(2),
.icon-tabler-zoom-in-area > :nth-child(3) {
  color: lime;
}

.icon-tabler-zoom-out-area > :nth-child(2) {
  color: red;
}

.icon-tabler-zoom-pan > :nth-child(n + 4) {
  color: #9966ff;
}

.icon-tabler-arrow-autofit-down > :nth-child(n + 3) {
  color: #28ffbf;
}

.icon-tabler-arrow-autofit-left > :nth-child(n + 3) {
  color: #28ffbf;
}

.icon-tabler-arrow-autofit-right > :nth-child(n + 3) {
  color: #28ffbf;
}

.icon-tabler-spacing-vertical > :nth-child(4) {
  color: fuchsia;
}

.icon-tabler-list-numbers > :nth-child(n + 5) {
  color: #e48900;
}

.icon-tabler-bookmarks > :nth-child(n + 2) {
  color: orange;
}

.icon-tabler-bookmark > :nth-child(2) {
  color: orange;
}

.icon-tabler-bookmark-off > :nth-child(2) {
  color: orange;
}

.icon-tabler-bookmark-off > :nth-child(3) {
  color: red;
}

.icon-tabler-eye-off > :nth-child(4) {
  color: red;
}

.icon-tabler-zoom-cancel > :nth-child(3),
.icon-tabler-zoom-cancel > :nth-child(4) {
  color: #9966ff;
}

.icon-tabler-zoom-in > :nth-child(3),
.icon-tabler-zoom-in > :nth-child(4) {
  color: lime;
}

.icon-tabler-zoom-out > :nth-child(3) {
  color: red;
}

.icon-tabler-refresh > :nth-child(n + 2) {
  color: cyan;
}

.icon-tabler-photo > :nth-child(n + 2) {
  color: silver;
}

.icon-tabler-photo-off > :nth-child(n + 2) {
  color: silver;
}

.icon-tabler-photo-off > :nth-child(6) {
  color: orange;
}

.icon-tabler-message > :nth-child(2),
.icon-tabler-message > :nth-child(3) {
  color: greenyellow;
}

.icon-tabler-book-return > g {
  color: greenyellow;
}

.icon-tabler-file-percent > :nth-child(2),
.icon-tabler-file-percent > :nth-child(5),
.icon-tabler-file-percent > :nth-child(6) {
  color: yellow;
}

.icon-tabler-settings-off > :nth-child(4) {
  color: red;
}
`,ur=Object.freeze(Object.defineProperty({__proto__:null,IconAdjustmentsHorizontal:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-adjustments-horizontal"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M4 6l8 0" /><path d="M16 6l4 0" /><path d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M4 12l2 0" /><path d="M10 12l10 0" /><path d="M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M4 18l11 0" /><path d="M19 18l1 0" /></svg>',IconAlertCircle:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-alert-circle"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
  <path d="M12 8v4" />
  <path d="M12 16h.01" />
</svg>
`,IconArrowAutofitDown:`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-arrow-autofit-down"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8" />
  <path d="M18 4v17" />
  <path d="M15 18l3 3l3 -3" />
</svg>
`,IconArrowAutofitHeight:`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-arrow-autofit-height"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h6" />
  <path d="M18 14v7" />
  <path d="M18 3v7" />
  <path d="M15 18l3 3l3 -3" />
  <path d="M15 6l3 -3l3 3" />
</svg>
`,IconArrowAutofitLeft:`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-arrow-autofit-left"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8" />
  <path d="M20 18h-17" />
  <path d="M6 15l-3 3l3 3" />
</svg>
`,IconArrowAutofitRight:`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-arrow-autofit-right"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M20 12v-6a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v8" />
  <path d="M4 18h17" />
  <path d="M18 15l3 3l-3 3" />
</svg>
`,IconArrowAutofitWidth:`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-arrow-autofit-width"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6" />
  <path d="M10 18h-7" />
  <path d="M21 18h-7" />
  <path d="M6 15l-3 3l3 3" />
  <path d="M18 15l3 3l-3 3" />
</svg>
`,IconArrowBigLeft:`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-arrow-big-left"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path
    d="M20 15h-8v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h8a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1z"
  />
</svg>
`,IconArrowBigRight:`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-arrow-big-right"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path
    d="M4 9h8v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1z"
  />
</svg>
`,IconArrowsHorizontal:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-horizontal"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 8l-4 4l4 4" /><path d="M17 8l4 4l-4 4" /><path d="M3 12l18 0" /></svg>',IconArrowsLeftRight:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-left-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M21 17l-18 0" /><path d="M6 10l-3 -3l3 -3" /><path d="M3 7l18 0" /><path d="M18 20l3 -3l-3 -3" /></svg>',IconArrowsMove:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-move"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M18 9l3 3l-3 3" />
  <path d="M15 12h6" />
  <path d="M6 9l-3 3l3 3" />
  <path d="M3 12h6" />
  <path d="M9 18l3 3l3 -3" />
  <path d="M12 15v6" />
  <path d="M15 6l-3 -3l-3 3" />
  <path d="M12 3v6" />
</svg>
`,IconArrowsMoveVertical:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-move-vertical"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M9 18l3 3l3 -3" />
  <path d="M12 15v6" />
  <path d="M15 6l-3 -3l-3 3" />
  <path d="M12 3v6" />
</svg>
`,IconArrowsVertical:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-arrows-vertical"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M8 7l4 -4l4 4" />
  <path d="M8 17l4 4l4 -4" />
  <path d="M12 3l0 18" />
</svg>
`,IconBook:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-book"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
  <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
  <path d="M3 6l0 13" />
  <path d="M12 6l0 13" />
  <path d="M21 6l0 13" />
</svg>
`,IconBookReturn:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-return"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 2 -1" />
  <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
  <path d="M3 6l0 13" />
  <path d="M12 6l0 13" />
  <path d="M21 6l0 4" />
  <g transform="rotate(-90, 19, 15)">
    <path d="M15 16l3 -3l3 3" />
    <path d="M18 13v9" />
  </g>
</svg>
`,IconBookUpload:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-book-upload"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M14 20h-8a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12v5" />
  <path d="M11 16h-5a2 2 0 0 0 -2 2" />
  <path d="M15 16l3 -3l3 3" />
  <path d="M18 13v9" />
</svg>
`,IconBookmark:`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-bookmark"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M18 7v14l-6 -4l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4z" />
</svg>
`,IconBookmarkOff:`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-bookmark-off"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path
    d="M7.708 3.721a3.982 3.982 0 0 1 2.292 -.721h4a4 4 0 0 1 4 4v7m0 4v3l-6 -4l-6 4v-14c0 -.308 .035 -.609 .1 -.897"
  />
  <path d="M3 3l18 18" />
</svg>
`,IconBookmarks:`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-bookmarks"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M15 10v11l-5 -3l-5 3v-11a3 3 0 0 1 3 -3h4a3 3 0 0 1 3 3z" />
  <path d="M11 3h5a3 3 0 0 1 3 3v11" />
</svg>
`,IconBoxAlignTop:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-box-align-top"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M4 10.005h16v-5a1 1 0 0 0 -1 -1h-14a1 1 0 0 0 -1 1v5z" />
  <path d="M4 15.005v-.01" />
  <path d="M4 20.005v-.01" />
  <path d="M9 20.005v-.01" />
  <path d="M15 20.005v-.01" />
  <path d="M20 20.005v-.01" />
  <path d="M20 15.005v-.01" />
</svg>
`,IconCategory:`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-category"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M4 4h6v6h-6z" />
  <path d="M14 4h6v6h-6z" />
  <path d="M4 14h6v6h-6z" />
  <path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
</svg>
`,IconCheck:`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-check"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M5 12l5 5l10 -10" />
</svg>
`,IconChevronLeft:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 6l-6 6l6 6" /></svg>',IconChevronRight:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M9 6l6 6l-6 6" />
</svg>
`,IconCircleCheck:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-circle-check"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  <path d="M9 12l2 2l4 -4" />
</svg>
`,IconCircleX:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-circle-x"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  <path d="M10 10l4 4m0 -4l-4 4" />
</svg>
`,IconComic1:`<?xml version="1.0" encoding="UTF-8"?>
<svg
  xmlns="http://www.w3.org/2000/svg"
  version="1.1"
  id="Capa_1"
  x="0px"
  y="0px"
  viewBox="0 0 512 512"
  style="enable-background: new 0 0 512 512"
  xml:space="preserve"
  width="512"
  height="512"
>
  <g>
    <g>
      <g>
        <path
          style="fill: #f2eff2"
          d="M422.485,504.5H89.515c-5.523,0-10-4.477-10-10v-477c0-5.523,4.477-10,10-10h332.971&#10;&#9;&#9;&#9;&#9;c5.523,0,10,4.477,10,10v477C432.485,500.023,428.008,504.5,422.485,504.5z"
        />
      </g>
    </g>
    <g>
      <g>
        <path
          style="fill: #e1dde1"
          d="M432.49,17.5v477c0,5.52-4.48,10-10,10h-40.03c5.52,0,10-4.48,10-10v-477c0-5.52-4.48-10-10-10&#10;&#9;&#9;&#9;&#9;h40.03C428.01,7.5,432.49,11.98,432.49,17.5z"
        />
      </g>
    </g>
    <g>
      <path
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        d="&#10;&#9;&#9;&#9;M334.56,7.5H89.515c-5.523,0-10,4.477-10,10v477c0,5.523,4.477,10,10,10h332.971c5.523,0,10-4.477,10-10v-477&#10;&#9;&#9;&#9;c0-5.523-4.477-10-10-10h-54.763"
      />
    </g>
    <g>
      <path
        style="fill: #3ad1e0"
        d="M313.86,452.74L159.16,55.63c-0.75-1.92-2.6-3.18-4.66-3.18h-29.96c-2.76,0-5,2.24-5,5v397.1&#10;&#9;&#9;&#9;c0,2.76,2.24,5,5,5h184.67C312.72,459.55,315.14,456.01,313.86,452.74z"
      />
      <path
        style="fill: #22c7db"
        d="M309.21,459.55h-30.02c3.51,0,5.93-3.54,4.65-6.81L129.14,55.63c-0.74-1.9-2.56-3.16-4.6-3.18&#10;&#9;&#9;&#9;h29.96c2.06,0,3.91,1.26,4.66,3.18l154.7,397.11C315.14,456.01,312.72,459.55,309.21,459.55z"
      />
      <path
        style="fill: #fb33a8"
        d="M258.193,309.845c-9.05-1.894-18.424-2.909-28.037-2.909c-45.55,0-85.862,22.354-110.616,56.676&#10;&#9;&#9;&#9;v90.938c0,2.76,2.24,5,5,5h184.67c3.51,0,5.93-3.54,4.65-6.81L258.193,309.845z"
      />
      <path
        style="fill: #ee2d9a"
        d="M193.362,311.966c-5.64,10.161-16.48,17.055-28.912,17.055c-0.57,0-1.14-0.01-1.72-0.04&#10;&#9;&#9;&#9;c-4.02-0.2-6.72,3.06-6.72,6.44c0,1.66,0.65,3.35,2.12,4.67c7.27,6.57,10.91,15.56,10.91,24.55s-3.64,17.99-10.91,24.55&#10;&#9;&#9;&#9;c-4.37,3.94-1.51,11.12,4.24,11.12c0.12,0,0.24,0,0.36-0.01c19-0.97,34.76,14.2,34.76,33c0,0.57-0.01,1.14-0.04,1.72&#10;&#9;&#9;&#9;c-0.21,4.02,3.05,6.72,6.43,6.72c1.67,0,3.36-0.65,4.68-2.12c6.56-7.27,15.56-10.91,24.55-10.91c8.99,0,17.98,3.64,24.55,10.91&#10;&#9;&#9;&#9;c3.94,4.37,11.12,1.51,11.12-4.24c0-0.12,0-0.24-0.01-0.36c-0.264-5.151,0.666-10.058,2.527-14.479l12.543,32.197&#10;&#9;&#9;&#9;c1.28,3.27-1.14,6.81-4.65,6.81h30.02c3.51,0,5.93-3.54,4.65-6.81l-55.667-142.895L193.362,311.966z"
      />
      <path
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        d="&#10;&#9;&#9;&#9;M230.156,306.937c-45.55,0-85.862,22.354-110.616,56.676"
      />
      <path
        style="fill: #fcb44d"
        d="M392.46,57.45v148.5c0,2.76-2.24,5-5,5H260.65c-2.06,0-3.91-1.26-4.66-3.18l-57.85-148.5&#10;&#9;&#9;&#9;c-1.28-3.28,1.14-6.82,4.65-6.82h184.67C390.22,52.45,392.46,54.69,392.46,57.45z"
      />
      <path
        style="fill: #fb9927"
        d="M392.46,57.45v148.5c0,2.76-2.24,5-5,5h-30.021c2.76,0,5-2.24,5-5V57.45c0-2.76-2.24-5-5-5h30.021&#10;&#9;&#9;&#9;C390.22,52.45,392.46,54.69,392.46,57.45z"
      />
      <g>
        <path
          style="fill: #ae6ad8"
          d="M356.4,183.26v27.69h-78.45v-27.69c0-21.67,17.57-39.23,39.23-39.23&#10;&#9;&#9;&#9;&#9;c10.83,0,20.64,4.39,27.73,11.49C352.01,162.62,356.4,172.42,356.4,183.26z"
        />
        <path
          style="fill: #975bbb"
          d="M356.402,183.26v27.69h-28.38v-27.69c0-10.84-4.39-20.64-11.49-27.74&#10;&#9;&#9;&#9;&#9;c-3.82-3.82-8.42-6.86-13.54-8.84c4.4-1.71,9.19-2.65,14.19-2.65c10.83,0,20.64,4.39,27.73,11.49&#10;&#9;&#9;&#9;&#9;C352.012,162.62,356.402,172.42,356.402,183.26z"
        />
        <path
          style="
            fill: none;
            stroke: #000000;
            stroke-width: 15;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 10;
          "
          d="&#10;&#9;&#9;&#9;&#9;M277.95,210.95v-27.69c0-21.67,17.57-39.23,39.23-39.23c10.83,0,20.64,4.39,27.73,11.49c7.1,7.1,11.49,16.9,11.49,27.74v27.69"
        />
        <g>
          <circle
            style="fill: #f2eff2"
            cx="317.179"
            cy="125.438"
            r="25.456"
          />

          <circle
            style="
              fill: none;
              stroke: #000000;
              stroke-width: 15;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
            "
            cx="317.179"
            cy="125.438"
            r="25.456"
          />
        </g>
      </g>
      <path
        style="fill: #23f1a8"
        d="M392.46,250.95v67.96c0,2.761-2.239,5-5,5h-82.812c-2.061,0-3.911-1.265-4.659-3.185l-26.474-67.96&#10;&#9;&#9;&#9;c-1.277-3.278,1.141-6.815,4.659-6.815H387.46C390.221,245.95,392.46,248.189,392.46,250.95z"
      />
      <path
        style="fill: #27e19d"
        d="M392.46,250.95v67.96c0,2.76-2.24,5-5,5h-30.021c2.76,0,5-2.24,5-5v-67.96c0-2.76-2.24-5-5-5&#10;&#9;&#9;&#9;h30.021C390.22,245.95,392.46,248.19,392.46,250.95z"
      />
      <path
        style="fill: #23f1a8"
        d="M322.184,358.91h65.276c2.761,0,5,2.239,5,5v90.64c0,2.761-2.239,5-5,5h-29.962&#10;&#9;&#9;&#9;c-2.061,0-3.911-1.265-4.659-3.185l-35.314-90.64C316.248,362.447,318.666,358.91,322.184,358.91z"
      />
      <path
        style="fill: #27e19d"
        d="M392.46,363.91v90.64c0,2.76-2.24,5-5,5h-30.021c2.76,0,5-2.24,5-5v-90.64c0-2.76-2.24-5-5-5&#10;&#9;&#9;&#9;h30.021C390.22,358.91,392.46,361.15,392.46,363.91z"
      />
      <path
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        d="&#10;&#9;&#9;&#9;M119.54,242.003V454.55c0,2.761,2.239,5,5,5h184.666c3.518,0,5.936-3.537,4.659-6.815l-154.704-397.1&#10;&#9;&#9;&#9;c-0.748-1.92-2.598-3.185-4.659-3.185H124.54c-2.761,0-5,2.239-5,5v151.391"
      />
      <path
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        d="&#10;&#9;&#9;&#9;M392.46,57.45v148.5c0,2.761-2.239,5-5,5H260.648c-2.061,0-3.911-1.265-4.659-3.185l-57.854-148.5&#10;&#9;&#9;&#9;c-1.277-3.278,1.141-6.815,4.659-6.815H387.46C390.221,52.45,392.46,54.689,392.46,57.45z"
      />
      <path
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        d="&#10;&#9;&#9;&#9;M306.627,245.95h-28.454c-3.518,0-5.936,3.537-4.659,6.815l26.474,67.96c0.748,1.92,2.598,3.185,4.659,3.185h82.812&#10;&#9;&#9;&#9;c2.761,0,5-2.239,5-5v-67.96c0-2.761-2.239-5-5-5h-47.67"
      />
      <path
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        d="&#10;&#9;&#9;&#9;M322.184,358.91h65.276c2.761,0,5,2.239,5,5v90.64c0,2.761-2.239,5-5,5h-29.962c-2.061,0-3.911-1.265-4.659-3.185l-35.314-90.64&#10;&#9;&#9;&#9;C316.248,362.447,318.666,358.91,322.184,358.91z"
      />
    </g>
    <g>
      <path
        style="fill: #fdef63"
        d="M268.77,409.35c0.01,0.12,0.01,0.24,0.01,0.36c0,5.75-7.18,8.61-11.12,4.24&#10;&#9;&#9;&#9;c-6.57-7.27-15.56-10.91-24.55-10.91c-8.99,0-17.99,3.64-24.55,10.91c-1.32,1.47-3.01,2.12-4.68,2.12c-3.38,0-6.64-2.7-6.43-6.72&#10;&#9;&#9;&#9;c0.03-0.58,0.04-1.15,0.04-1.72c0-18.8-15.76-33.97-34.76-33c-0.12,0.01-0.24,0.01-0.36,0.01c-5.75,0-8.61-7.18-4.24-11.12&#10;&#9;&#9;&#9;c7.27-6.56,10.91-15.56,10.91-24.55s-3.64-17.98-10.91-24.55c-1.47-1.32-2.12-3.01-2.12-4.67c0-3.38,2.7-6.64,6.72-6.44&#10;&#9;&#9;&#9;c0.58,0.03,1.15,0.04,1.72,0.04c18.8,0,33.97-15.76,33-34.75c-0.01-0.12-0.01-0.24-0.01-0.36c0-5.76,7.18-8.61,11.12-4.25&#10;&#9;&#9;&#9;c6.56,7.27,15.56,10.91,24.55,10.91c3.65,0,7.29-0.6,10.77-1.79l41.28,105.96C274.88,385.07,268.11,396.46,268.77,409.35z"
      />
      <path
        style="fill: #f3d730"
        d="M268.151,412.468c0.394-0.814,0.629-1.738,0.629-2.758c0-0.12,0-0.24-0.01-0.36&#10;&#9;&#9;&#9;c-0.66-12.89,6.11-24.28,16.39-30.28l-41.28-105.96c-3.48,1.19-7.12,1.79-10.77,1.79c-7.758,0-15.52-2.717-21.718-8.132&#10;&#9;&#9;&#9;L268.151,412.468z"
      />
      <path
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        d="&#10;&#9;&#9;&#9;M268.77,409.35c0.01,0.12,0.01,0.24,0.01,0.36c0,5.75-7.18,8.61-11.12,4.24c-6.57-7.27-15.56-10.91-24.55-10.91&#10;&#9;&#9;&#9;c-8.99,0-17.99,3.64-24.55,10.91c-1.32,1.47-3.01,2.12-4.68,2.12c-3.38,0-6.64-2.7-6.43-6.72c0.03-0.58,0.04-1.15,0.04-1.72&#10;&#9;&#9;&#9;c0-18.8-15.76-33.97-34.76-33c-0.12,0.01-0.24,0.01-0.36,0.01c-5.75,0-8.61-7.18-4.24-11.12c7.27-6.56,10.91-15.56,10.91-24.55&#10;&#9;&#9;&#9;s-3.64-17.98-10.91-24.55c-1.47-1.32-2.12-3.01-2.12-4.67c0-3.38,2.7-6.64,6.72-6.44c0.58,0.03,1.15,0.04,1.72,0.04&#10;&#9;&#9;&#9;c18.8,0,33.97-15.76,33-34.75c-0.01-0.12-0.01-0.24-0.01-0.36c0-5.76,7.18-8.61,11.12-4.25c6.56,7.27,15.56,10.91,24.55,10.91&#10;&#9;&#9;&#9;c3.65,0,7.29-0.6,10.77-1.79l41.28,105.96C274.88,385.07,268.11,396.46,268.77,409.35z"
      />
    </g>
    <g>
      <line
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        x1="230.156"
        y1="339.714"
        x2="230.156"
        y2="311.299"
      />

      <line
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        x1="230.156"
        y1="364.644"
        x2="230.156"
        y2="366.646"
      />
    </g>
    <g>
      <line
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        x1="240.429"
        y1="83.83"
        x2="258.124"
        y2="83.83"
      />

      <line
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        x1="248.276"
        y1="107.911"
        x2="265.97"
        y2="107.911"
      />
    </g>
  </g>
</svg>
`,IconComic1Flat:`<svg
  id="Capa_1"
  enable-background="new 0 0 512 512"
  height="512"
  viewBox="0 0 512 512"
  width="512"
  xmlns="http://www.w3.org/2000/svg"
>
  <g>
    <g>
      <g>
        <path
          d="m427.508 512h-343.02c-5.69 0-10.302-4.612-10.302-10.302v-491.396c0-5.69 4.612-10.302 10.302-10.302h343.02c5.69 0 10.302 4.612 10.302 10.302v491.396c-.001 5.69-4.613 10.302-10.302 10.302z"
          fill="#f2eff2"
        />
      </g>
    </g>
    <path
      d="m427.512 0h-41.238c5.687 0 10.302 4.615 10.302 10.302v41.156l-18.039 71.714 18.039 81.268v46.358l-18.039 45.164 18.039 24.847v46.358l-10.302 61.227 10.302 32.149v41.156c0 5.687-4.615 10.302-10.302 10.302h41.238c5.687 0 10.302-4.615 10.302-10.302v-491.397c0-5.687-4.615-10.302-10.302-10.302z"
      fill="#e1dde1"
    />
    <g>
      <path
        d="m243.51 273.63-47.48 104.08-80.61-10.85v-315.4c0-2.85 2.31-5.15 5.15-5.15h30.86c2.13 0 4.03 1.29 4.8 3.27z"
        fill="#3ad1e0"
      />
      <path
        d="m243.51 273.63-16.68 36.56-101.52-260.61c-.76-1.95-2.64-3.25-4.74-3.27h30.86c2.13 0 4.03 1.29 4.8 3.27z"
        fill="#22c7db"
      />
      <path
        d="m310.81 465.69h-190.24c-2.84 0-5.15-2.3-5.15-5.15v-93.68c25.18-34.92 65.99-57.81 112.19-58.37l-16.07 35.21 74.5 39.08 29.56 75.9c1.32 3.37-1.17 7.01-4.79 7.01z"
        fill="#fb33a8"
      />
      <path
        d="m310.81 465.69h-30.92c3.61 0 6.11-3.64 4.79-7.01l-12.92-33.17c-1.92 4.55-2.88 9.61-2.61 14.91.01.13.01.25.01.38 0 5.92-7.39 8.87-11.45 4.36-6.77-7.49-16.03-11.24-25.29-11.24s-18.54 3.75-25.29 11.24c-1.36 1.52-3.11 2.19-4.83 2.19-3.48 0-6.84-2.78-6.62-6.93.03-.59.04-1.18.04-1.77 0-19.36-16.23-34.99-35.81-33.99-.12.01-.24.01-.37.01-5.92 0-8.87-7.4-4.37-11.46 7.49-6.76 11.24-16.03 11.24-25.29s-3.75-18.52-11.24-25.29c-1.51-1.36-2.18-3.1-2.18-4.81 0-3.48 2.78-6.84 6.92-6.64.6.04 1.19.05 1.77.05 12.81 0 23.98-7.11 29.79-17.57l34.29-1.12-14.22 31.16 74.5 39.08 29.56 75.9c1.32 3.37-1.17 7.01-4.79 7.01z"
        fill="#fb33a8"
      />
      <path
        d="m396.58 51.46v152.98c0 2.84-2.31 5.15-5.15 5.15h-32l-40.41-29.31-40.41 29.31h-17.82c-2.12 0-4.03-1.3-4.8-3.28l-59.6-152.98c-1.32-3.38 1.18-7.02 4.79-7.02h190.25c2.84 0 5.15 2.3 5.15 5.15z"
        fill="#fcb44d"
      />
      <path
        d="m396.576 51.457v152.982c0 2.843-2.308 5.151-5.151 5.151h-30.927c2.843 0 5.151-2.308 5.151-5.151v-152.982c0-2.843-2.308-5.151-5.151-5.151h30.927c2.843.001 5.151 2.308 5.151 5.151z"
        fill="#fb9927"
      />
      <g>
        <path
          d="m359.428 181.065v28.526h-80.818v-28.526c0-22.324 18.1-40.414 40.414-40.414 11.157 0 21.263 4.522 28.567 11.837 7.314 7.314 11.837 17.409 11.837 28.577z"
          fill="#ae6ad8"
        />
        <path
          d="m359.43 181.065v28.526h-29.237v-28.526c0-11.167-4.522-21.263-11.837-28.577-3.935-3.935-8.674-7.067-13.949-9.107 4.533-1.762 9.467-2.73 14.618-2.73 11.157 0 21.263 4.522 28.567 11.837 7.316 7.314 11.838 17.409 11.838 28.577z"
          fill="#975bbb"
        />
        <g>
          <g>
            <circle
              cx="319.023"
              cy="121.497"
              fill="#f2eff2"
              r="26.224"
            />
          </g>
        </g>
      </g>
      <path
        d="m396.576 250.798v70.011c0 2.845-2.306 5.151-5.151 5.151h-85.311c-2.123 0-4.029-1.303-4.8-3.281l-27.273-70.011c-1.316-3.377 1.175-7.021 4.8-7.021h112.585c2.844 0 5.15 2.306 5.15 5.151z"
        fill="#23f1a8"
      />
      <path
        d="m396.576 250.798v70.011c0 2.843-2.308 5.151-5.151 5.151h-30.927c2.843 0 5.151-2.308 5.151-5.151v-70.011c0-2.843-2.308-5.151-5.151-5.151h30.927c2.843 0 5.151 2.307 5.151 5.151z"
        fill="#27e19d"
      />
      <path
        d="m324.179 362.016h67.246c2.845 0 5.151 2.306 5.151 5.151v93.376c0 2.845-2.306 5.151-5.151 5.151h-30.866c-2.123 0-4.029-1.303-4.799-3.281l-36.38-93.376c-1.316-3.377 1.175-7.021 4.799-7.021z"
        fill="#23f1a8"
      />
      <path
        d="m396.576 367.167v93.376c0 2.843-2.308 5.151-5.151 5.151h-30.927c2.843 0 5.151-2.308 5.151-5.151v-93.376c0-2.843-2.308-5.151-5.151-5.151h30.927c2.843 0 5.151 2.308 5.151 5.151z"
        fill="#27e19d"
      />
    </g>
    <g>
      <path
        d="m269.153 413.978c.01.124.01.247.01.371 0 5.924-7.397 8.87-11.456 4.368-6.768-7.489-16.03-11.239-25.291-11.239s-18.533 3.75-25.291 11.239c-1.36 1.514-3.101 2.184-4.821 2.184-3.482 0-6.84-2.782-6.624-6.923.031-.597.041-1.185.041-1.772 0-19.367-16.236-34.995-35.809-33.996-.124.01-.247.01-.371.01-5.924 0-8.87-7.397-4.368-11.456 7.489-6.758 11.239-16.03 11.239-25.291s-3.75-18.523-11.239-25.291c-1.514-1.36-2.184-3.101-2.184-4.811 0-3.482 2.782-6.84 6.923-6.634.597.031 1.185.041 1.772.041 19.367 0 34.995-16.236 33.996-35.799-.01-.124-.01-.247-.01-.371 0-5.934 7.397-8.87 11.456-4.378 6.758 7.489 16.03 11.239 25.291 11.239 3.76 0 7.51-.618 11.095-1.844l42.526 109.158c-10.591 6.183-17.565 17.916-16.885 31.195z"
        fill="#fdef63"
      />
      <path
        d="m268.516 417.19c.406-.839.648-1.79.648-2.841 0-.123 0-.247-.01-.371-.68-13.279 6.294-25.013 16.885-31.194l-42.526-109.158c-3.585 1.226-7.335 1.844-11.095 1.844-7.992 0-15.988-2.799-22.374-8.378z"
        fill="#f3d730"
      />
    </g>
    <g>
      <g>
        <path
          d="m229.374 349.967c-4.267 0-7.726-3.459-7.726-7.726v-29.272c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v29.272c0 4.267-3.459 7.726-7.726 7.726z"
          fill="#554e55"
        />
      </g>
      <g>
        <path
          d="m229.374 377.711c-4.267 0-7.726-3.459-7.726-7.726v-2.061c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v2.061c0 4.267-3.459 7.726-7.726 7.726z"
          fill="#554e55"
        />
      </g>
    </g>
    <g>
      <g>
        <path
          d="m258.185 86.361h-18.228c-4.267 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h18.228c4.267 0 7.726 3.459 7.726 7.726 0 4.266-3.459 7.726-7.726 7.726z"
          fill="#f2eff2"
        />
      </g>
      <g>
        <path
          d="m266.269 111.168h-18.229c-4.267 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h18.228c4.267 0 7.726 3.459 7.726 7.726s-3.458 7.726-7.725 7.726z"
          fill="#f2eff2"
        />
      </g>
    </g>
  </g>
</svg>
`,IconComic2:`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->

<svg
  version="1.1"
  id="svg5007"
  xml:space="preserve"
  width="682.66669"
  height="682.66669"
  viewBox="0 0 682.66669 682.66669"
  xmlns="http://www.w3.org/2000/svg"
>
  <defs id="defs5011">
    <clipPath
      clipPathUnits="userSpaceOnUse"
      id="clipPath5021"
    >
      <path
        d="M 0,512 H 512 V 0 H 0 Z"
        id="path5019"
      />
    </clipPath>
  </defs>
  <g
    id="g5013"
    transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)"
  >
    <g id="g5015">
      <g
        id="g5017"
        clip-path="url(#clipPath5021)"
      >
        <g
          id="g5023"
          transform="translate(446,7.5)"
        >
          <path
            d="m 0,0 h -380 c -11.046,0 -20,8.954 -20,20 v 457 c 0,11.046 8.954,20 20,20 H 0 c 11.046,0 20,-8.954 20,-20 V 20 C 20,8.954 11.046,0 0,0"
            style="fill: #efe6e6; fill-opacity: 1; fill-rule: nonzero; stroke: none"
            id="path5025"
          />
        </g>
        <g
          id="g5027"
          transform="translate(465.9996,47.5)"
        >
          <path
            d="m 0,0 c -209.868,0 -380,170.132 -380,380 v 77 h -20 c -11.045,0 -20,-8.954 -20,-20 V -20 c 0,-11.046 8.955,-20 20,-20 h 380 c 11.046,0 20,8.954 20,20 z"
            style="fill: #e2d7d7; fill-opacity: 1; fill-rule: nonzero; stroke: none"
            id="path5029"
          />
        </g>
        <g
          id="g5031"
          transform="translate(236,199.8333)"
        >
          <path
            d="M 0,0 H 190 V 264.667 H 80 Z"
            style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none"
            id="path5033"
          />
        </g>
        <g
          id="g5035"
          transform="translate(236,199.8333)"
        >
          <path
            d="M 0,0 H 190 V 264.667 H 80 Z"
            style="fill: #5ad6ff; fill-opacity: 1; fill-rule: nonzero; stroke: none"
            id="path5037"
          />
        </g>
        <g
          id="g5039"
          transform="translate(86,199.8333)"
        >
          <path
            d="m 0,0 h 110 l 80,264.667 H 0 Z"
            style="fill: #f4e74d; fill-opacity: 1; fill-rule: nonzero; stroke: none"
            id="path5041"
          />
        </g>
        <g
          id="g5043"
          transform="translate(86,427.4996)"
        >
          <path
            d="M 0,0 V -227.666 H 75.725 C 28.171,-164.213 0,-85.397 0,0"
            style="fill: #eedb00; fill-opacity: 1; fill-rule: nonzero; stroke: none"
            id="path5045"
          />
        </g>
        <path
          d="M 426,47.5 H 86 v 112.333 h 340 z"
          style="fill: #b18cd9; fill-opacity: 1; fill-rule: nonzero; stroke: none"
          id="path5047"
        />
        <g
          id="g5049"
          transform="translate(196.2775,159.8334)"
        >
          <path
            d="m 0,0 h -110.278 v -112.333 h 340 v 2.085 C 140.254,-100.888 60.026,-60.484 0,0"
            style="fill: #996acc; fill-opacity: 1; fill-rule: nonzero; stroke: none"
            id="path5051"
          />
        </g>
        <g
          id="g5053"
          transform="translate(214.5152,99.0695)"
        >
          <path
            d="m 0,0 c 0,-10.669 -10.861,-19.318 -24.258,-19.318 -13.397,0 -24.257,8.649 -24.257,19.318 0,10.669 10.86,19.317 24.257,19.317 C -10.861,19.317 0,10.669 0,0"
            style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none"
            id="path5055"
          />
        </g>
        <g
          id="g5057"
          transform="translate(297.4848,99.0695)"
        >
          <path
            d="m 0,0 c 0,-10.669 10.861,-19.318 24.258,-19.318 13.397,0 24.257,8.649 24.257,19.318 0,10.669 -10.86,19.317 -24.257,19.317 C 10.861,19.317 0,10.669 0,0"
            style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none"
            id="path5059"
          />
        </g>
        <g
          id="g5061"
          transform="translate(204.3949,127.5815)"
        >
          <path
            d="M 0,0 V -9.916"
            style="
              fill: none;
              stroke: #000000;
              stroke-width: 15;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
            id="path5063"
          />
        </g>
        <g
          id="g5065"
          transform="translate(307.605,127.5815)"
        >
          <path
            d="M 0,0 V -9.916"
            style="
              fill: none;
              stroke: #000000;
              stroke-width: 15;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
            id="path5067"
          />
        </g>
        <g
          id="g5069"
          transform="translate(242.3946,117.9604)"
        >
          <path
            d="m 0,0 c 3.308,-3.796 8.175,-6.198 13.605,-6.198 5.431,0 10.298,2.402 13.606,6.198"
            style="
              fill: none;
              stroke: #000000;
              stroke-width: 15;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
            id="path5071"
          />
        </g>
        <g
          id="g5073"
          transform="translate(153.1665,442.2645)"
        >
          <path
            d="m 0,0 32.456,22.235 h -99.623 v -156.568 l 20.756,70.454 58.203,-44.799 -24.62,69.199 73.42,-2.032 z"
            style="fill: #fd5c6f; fill-opacity: 1; fill-rule: nonzero; stroke: none"
            id="path5075"
          />
        </g>
        <g
          id="g5077"
          transform="translate(86,427.4996)"
        >
          <path
            d="m 0,0 v -119.568 l 9.825,33.351 C 3.399,-58.516 0,-29.655 0,0"
            style="fill: #f6334c; fill-opacity: 1; fill-rule: nonzero; stroke: none"
            id="path5079"
          />
        </g>
        <g
          id="g5081"
          transform="translate(426,270.6974)"
        >
          <path
            d="m 0,0 -56.008,-43.108 23.692,66.587 -70.65,-1.955 58.306,39.945 -58.306,39.945 70.65,-1.955 -23.692,66.588 L 0,122.939 Z"
            style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none"
            id="path5083"
          />
        </g>
        <g
          id="g5085"
          transform="translate(446,7.5)"
        >
          <path
            d="m 0,0 h -380 c -11.046,0 -20,8.954 -20,20 v 457 c 0,11.046 8.954,20 20,20 H 0 c 11.046,0 20,-8.954 20,-20 V 20 C 20,8.954 11.046,0 0,0 Z"
            style="
              fill: none;
              stroke: #000000;
              stroke-width: 15;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
            id="path5087"
          />
        </g>
        <g
          id="g5089"
          transform="translate(426,346.167)"
        >
          <path
            d="m 0,0 v 118.333 h -110 l -80,-264.667 H 0 V -28"
            style="
              fill: none;
              stroke: #000000;
              stroke-width: 15;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
            id="path5091"
          />
        </g>
        <g
          id="g5093"
          transform="translate(86,199.8333)"
        >
          <path
            d="m 0,0 h 110 l 80,264.667 H 0 Z"
            style="
              fill: none;
              stroke: #000000;
              stroke-width: 15;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
            id="path5095"
          />
        </g>
        <g
          id="g5097"
          transform="translate(154.0172,159.8334)"
        >
          <path
            d="m 0,0 h 271.983 v -112.333 h -340 V 0 H -28"
            style="
              fill: none;
              stroke: #000000;
              stroke-width: 15;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
            id="path5099"
          />
        </g>
        <g
          id="g5101"
          transform="translate(86,307.9314)"
        >
          <path
            d="m 0,0 20.756,70.454 58.203,-44.799 -24.62,69.199 73.419,-2.032 -60.591,41.511 32.455,22.236"
            style="
              fill: none;
              stroke: #000000;
              stroke-width: 15;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
            id="path5103"
          />
        </g>
        <g
          id="g5105"
          transform="translate(426,270.6974)"
        >
          <path
            d="m 0,0 -56.008,-43.108 23.692,66.587 -70.65,-1.955 58.306,39.945 -58.306,39.945 70.65,-1.955 -23.692,66.588 L 0,122.939"
            style="
              fill: none;
              stroke: #000000;
              stroke-width: 15;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
            id="path5107"
          />
        </g>
      </g>
    </g>
  </g>
</svg>
`,IconComic2Flat:`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->

<svg
  version="1.1"
  id="svg3390"
  xml:space="preserve"
  width="682.66669"
  height="682.66669"
  viewBox="0 0 682.66669 682.66669"
  xmlns="http://www.w3.org/2000/svg"
>
  <defs id="defs3394">
    <clipPath
      clipPathUnits="userSpaceOnUse"
      id="clipPath3404"
    >
      <path
        d="M 0,512 H 512 V 0 H 0 Z"
        id="path3402"
      />
    </clipPath>
  </defs>
  <g
    id="g3396"
    transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)"
  >
    <g id="g3398">
      <g
        id="g3400"
        clip-path="url(#clipPath3404)"
      >
        <g
          id="g3406"
          transform="translate(451.7344)"
        >
          <path
            d="m 0,0 h -391.469 c -11.379,0 -20.603,9.225 -20.603,20.604 v 470.792 c 0,11.379 9.224,20.604 20.603,20.604 L 0,512 c 11.379,0 20.604,-9.225 20.604,-20.604 V 20.604 C 20.604,9.225 11.379,0 0,0"
            style="fill: #efe6e6; fill-opacity: 1; fill-rule: nonzero; stroke: none"
            id="path3408"
          />
        </g>
        <g
          id="g3410"
          transform="translate(472.3376,41.2072)"
        >
          <path
            d="m 0,0 c -216.202,0 -391.468,175.266 -391.468,391.468 v 79.325 h -20.604 c -11.379,0 -20.604,-9.225 -20.604,-20.604 V -20.604 c 0,-11.379 9.225,-20.603 20.604,-20.603 H -20.603 C -9.224,-41.207 0,-31.983 0,-20.604 Z"
            style="fill: #e2d7d7; fill-opacity: 1; fill-rule: nonzero; stroke: none"
            id="path3412"
          />
        </g>
        <g
          id="g3414"
          transform="translate(235.3964,198.1382)"
        >
          <path
            d="M 0,0 H 195.734 V 272.655 H 82.414 Z"
            style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none"
            id="path3416"
          />
        </g>
        <g
          id="g3418"
          transform="translate(235.3964,198.1382)"
        >
          <path
            d="M 0,0 H 195.734 V 272.655 H 82.414 Z"
            style="fill: #5ad6ff; fill-opacity: 1; fill-rule: nonzero; stroke: none"
            id="path3420"
          />
        </g>
        <g
          id="g3422"
          transform="translate(80.8692,198.1382)"
        >
          <path
            d="m 0,0 h 113.32 l 82.414,272.655 H 0 Z"
            style="fill: #f4e74d; fill-opacity: 1; fill-rule: nonzero; stroke: none"
            id="path3424"
          />
        </g>
        <g
          id="g3426"
          transform="translate(80.8692,432.6757)"
        >
          <path
            d="M 0,0 V -234.537 H 78.01 C 29.021,-169.169 0,-87.974 0,0"
            style="fill: #eedb00; fill-opacity: 1; fill-rule: nonzero; stroke: none"
            id="path3428"
          />
        </g>
        <path
          d="M 431.131,41.207 H 80.869 v 115.724 h 350.262 z"
          style="fill: #b18cd9; fill-opacity: 1; fill-rule: nonzero; stroke: none"
          id="path3430"
        />
        <g
          id="g3432"
          transform="translate(194.475,156.931)"
        >
          <path
            d="m 0,0 h -113.606 v -115.724 h 350.262 v 2.149 C 144.487,-103.933 61.838,-62.31 0,0"
            style="fill: #996acc; fill-opacity: 1; fill-rule: nonzero; stroke: none"
            id="path3434"
          />
        </g>
        <g
          id="g3436"
          transform="translate(213.2632,94.3332)"
        >
          <path
            d="m 0,0 c 0,-10.991 -11.188,-19.901 -24.99,-19.901 -13.801,0 -24.989,8.91 -24.989,19.901 0,10.991 11.188,19.9 24.989,19.9 C -11.188,19.9 0,10.991 0,0"
            style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none"
            id="path3438"
          />
        </g>
        <g
          id="g3440"
          transform="translate(298.7368,94.3332)"
        >
          <path
            d="m 0,0 c 0,-10.991 11.188,-19.901 24.99,-19.901 13.801,0 24.989,8.91 24.989,19.901 0,10.991 -11.188,19.9 -24.989,19.9 C 11.188,19.9 0,10.991 0,0"
            style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none"
            id="path3442"
          />
        </g>
        <g
          id="g3444"
          transform="translate(202.8374,123.7057)"
        >
          <path
            d="M 0,0 V -10.216"
            style="
              fill: none;
              stroke: #3d4751;
              stroke-width: 15;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
            id="path3446"
          />
        </g>
        <g
          id="g3448"
          transform="translate(309.1625,123.7057)"
        >
          <path
            d="M 0,0 V -10.216"
            style="
              fill: none;
              stroke: #3d4751;
              stroke-width: 15;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
            id="path3450"
          />
        </g>
        <g
          id="g3452"
          transform="translate(241.984,113.7942)"
        >
          <path
            d="m 0,0 c 3.408,-3.911 8.421,-6.385 14.016,-6.385 5.595,0 10.608,2.474 14.016,6.385"
            style="
              fill: none;
              stroke: #3d4751;
              stroke-width: 15;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
            id="path3454"
          />
        </g>
        <g
          id="g3456"
          transform="translate(150.0629,447.8862)"
        >
          <path
            d="m 0,0 33.436,22.907 h -102.63 v -161.294 l 21.382,72.58 59.96,-46.151 -25.363,71.287 75.636,-2.093 z"
            style="fill: #fd5c6f; fill-opacity: 1; fill-rule: nonzero; stroke: none"
            id="path3458"
          />
        </g>
        <g
          id="g3460"
          transform="translate(80.8692,432.6757)"
        >
          <path
            d="m 0,0 v -123.177 l 10.122,34.358 C 3.502,-60.282 0,-30.55 0,0"
            style="fill: #f6334c; fill-opacity: 1; fill-rule: nonzero; stroke: none"
            id="path3462"
          />
        </g>
        <g
          id="g3464"
          transform="translate(431.1308,271.141)"
        >
          <path
            d="m 0,0 -57.698,-44.41 24.406,68.598 -72.782,-2.014 60.066,41.15 -60.066,41.151 72.782,-2.014 -24.406,68.597 L 0,126.649 Z"
            style="fill: #ffffff; fill-opacity: 1; fill-rule: nonzero; stroke: none"
            id="path3466"
          />
        </g>
      </g>
    </g>
  </g>
</svg>
`,IconComic3:`<?xml version="1.0" encoding="UTF-8"?>
<svg
  xmlns="http://www.w3.org/2000/svg"
  version="1.1"
  id="Capa_1"
  x="0px"
  y="0px"
  viewBox="0 0 512 512"
  style="enable-background: new 0 0 512 512"
  xml:space="preserve"
  width="512"
  height="512"
>
  <g>
    <g>
      <g>
        <path
          style="fill: #f2eff2"
          d="M422.485,504.5H89.515c-5.523,0-10-4.477-10-10v-477c0-5.523,4.477-10,10-10h332.971&#10;&#9;&#9;&#9;&#9;c5.523,0,10,4.477,10,10v477C432.485,500.023,428.008,504.5,422.485,504.5z"
        />
      </g>
    </g>
    <g>
      <g>
        <path
          style="fill: #e1dde1"
          d="M432.49,17.5v477c0,5.52-4.48,10-10,10h-40.03c5.52,0,10-4.48,10-10v-477c0-5.52-4.48-10-10-10&#10;&#9;&#9;&#9;&#9;h40.03C428.01,7.5,432.49,11.98,432.49,17.5z"
        />
      </g>
    </g>
    <g>
      <path
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        d="&#10;&#9;&#9;&#9;M158.639,7.5H89.515c-5.523,0-10,4.477-10,10v477c0,5.523,4.477,10,10,10h332.971c5.523,0,10-4.477,10-10v-477&#10;&#9;&#9;&#9;c0-5.523-4.477-10-10-10H191.801"
      />
    </g>
    <path
      style="fill: #3ad1e0"
      d="M392.482,52.5v83.99c0,2.761-2.239,5-5,5H241.866c-2.761,0-5-2.239-5-5V52.5c0-2.761,2.239-5,5-5&#10;&#9;&#9;h145.617C390.244,47.5,392.482,49.739,392.482,52.5z"
    />
    <path
      style="fill: #20bfd5"
      d="M392.482,52.5v83.99c0,2.76-2.24,5-5,5h-30.02c2.76,0,5-2.24,5-5V52.5c0-2.76-2.24-5-5-5h30.02&#10;&#9;&#9;C390.242,47.5,392.482,49.74,392.482,52.5z"
    />
    <path
      style="fill: #26d192"
      d="M280.6,47.5h-38.735c-2.761,0-5,2.239-5,5v83.99c0,2.761,2.239,5,5,5H280.6V47.5z"
    />

    <line
      style="
        fill: none;
        stroke: #000000;
        stroke-width: 15;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-miterlimit: 10;
      "
      x1="280.6"
      y1="141.49"
      x2="280.6"
      y2="47.5"
    />
    <path
      style="fill: #23f1a8"
      d="M124.512,370.51h125.143c1.706,0,3.295,0.87,4.214,2.308l53.65,83.99&#10;&#9;&#9;c2.126,3.328-0.264,7.692-4.214,7.692H124.512c-2.761,0-5-2.239-5-5v-83.99C119.512,372.749,121.751,370.51,124.512,370.51z"
    />
    <g>
      <path
        style="fill: #ae6ad8"
        d="M227.87,437.622V464.5h-76.148v-26.878c0-21.034,17.054-38.079,38.079-38.079&#10;&#9;&#9;&#9;c10.512,0,20.034,4.261,26.916,11.153C223.609,417.588,227.87,427.1,227.87,437.622z"
      />
      <path
        style="fill: #975bbb"
        d="M227.872,437.62v26.88h-28.21v-26.88c0-10.52-4.26-20.03-11.15-26.92&#10;&#9;&#9;&#9;c-3.62-3.63-7.97-6.53-12.82-8.46c4.36-1.74,9.13-2.7,14.11-2.7c10.51,0,20.03,4.26,26.92,11.16&#10;&#9;&#9;&#9;C223.612,417.59,227.872,427.1,227.872,437.62z"
      />
      <path
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        d="&#10;&#9;&#9;&#9;M151.722,464.5v-26.878c0-21.034,17.054-38.079,38.079-38.079c10.512,0,20.034,4.261,26.916,11.153&#10;&#9;&#9;&#9;c6.892,6.892,11.153,16.404,11.153,26.926V464.5"
      />
    </g>
    <path
      style="fill: #27e19d"
      d="M303.302,464.5h-30.02c3.95,0,6.34-4.36,4.22-7.69l-53.65-83.99c-0.92-1.44-2.51-2.31-4.22-2.31&#10;&#9;&#9;h30.02c1.71,0,3.3,0.87,4.22,2.31l53.65,83.99C309.642,460.14,307.252,464.5,303.302,464.5z"
    />
    <path
      style="fill: #ae6ad8"
      d="M387.482,370.51h-78.73c-3.949,0-6.34,4.363-4.214,7.692l53.65,83.99&#10;&#9;&#9;c0.919,1.438,2.507,2.308,4.214,2.308h25.08c2.761,0,5-2.239,5-5v-83.99C392.482,372.749,390.244,370.51,387.482,370.51z"
    />
    <path
      style="fill: #975bbb"
      d="M392.482,375.51v83.99c0,2.76-2.24,5-5,5h-25.08c-0.88,0-1.72-0.23-2.46-0.66&#10;&#9;&#9;c1.51-0.86,2.52-2.48,2.52-4.34v-83.99c0-2.76-2.24-5-5-5h30.02C390.242,370.51,392.482,372.75,392.482,375.51z"
    />
    <path
      style="
        fill: none;
        stroke: #000000;
        stroke-width: 15;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-miterlimit: 10;
      "
      d="&#10;&#9;&#9;M392.482,52.5v83.99c0,2.761-2.239,5-5,5H241.866c-2.761,0-5-2.239-5-5V52.5c0-2.761,2.239-5,5-5h145.617&#10;&#9;&#9;C390.244,47.5,392.482,49.739,392.482,52.5z"
    />
    <g>
      <path
        style="fill: #3ad1e0"
        d="M197.374,52.5v83.99c0,2.761-2.239,5-5,5h-67.862c-2.761,0-5-2.239-5-5V52.5c0-2.761,2.239-5,5-5&#10;&#9;&#9;&#9;h67.862C195.135,47.5,197.374,49.739,197.374,52.5z"
      />
      <path
        style="fill: #20bfd5"
        d="M197.372,52.5v83.99c0,2.76-2.24,5-5,5h-30.02c2.76,0,5-2.24,5-5V52.5c0-2.76-2.24-5-5-5h30.02&#10;&#9;&#9;&#9;C195.132,47.5,197.372,49.74,197.372,52.5z"
      />
      <path
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        d="&#10;&#9;&#9;&#9;M197.374,52.5v83.99c0,2.761-2.239,5-5,5h-67.862c-2.761,0-5-2.239-5-5V52.5c0-2.761,2.239-5,5-5h67.862&#10;&#9;&#9;&#9;C195.135,47.5,197.374,49.739,197.374,52.5z"
      />
    </g>
    <g>
      <path
        style="fill: #fb54b6"
        d="M124.512,181.49h262.97c2.761,0,5,2.239,5,5v139.02c0,2.761-2.239,5-5,5h-262.97&#10;&#9;&#9;&#9;c-2.761,0-5-2.239-5-5V186.49C119.512,183.729,121.751,181.49,124.512,181.49z"
      />
    </g>
    <path
      style="fill: #fb9927"
      d="M154.537,330.51c0-56.038,45.427-101.465,101.465-101.465s101.465,45.427,101.465,101.465H154.537z"
    />
    <path
      style="fill: #f98824"
      d="M357.462,330.51h-34.36c0-50.18-36.42-91.84-84.28-100.01c5.58-0.95,11.32-1.45,17.18-1.45&#10;&#9;&#9;C312.042,229.05,357.462,274.47,357.462,330.51z"
    />
    <path
      style="
        fill: none;
        stroke: #000000;
        stroke-width: 15;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-miterlimit: 10;
      "
      d="&#10;&#9;&#9;M154.537,330.51c0-56.038,45.427-101.465,101.465-101.465s101.465,45.427,101.465,101.465"
    />
    <g>
      <path
        style="fill: #fb33a8"
        d="M392.482,186.49v139.02c0,2.76-2.24,5-5,5h-30.02c2.76,0,5-2.24,5-5V186.49c0-2.76-2.24-5-5-5&#10;&#9;&#9;&#9;h30.02C390.242,181.49,392.482,183.73,392.482,186.49z"
      />
    </g>
    <g>
      <g>
        <path
          style="fill: #fdef63"
          d="M342.812,247.29c-0.14,0-0.29,0-0.44-0.01c-23.32-1.19-42.66,17.42-42.66,40.5&#10;&#9;&#9;&#9;&#9;c0,0.7,0.02,1.4,0.05,2.11c0.26,4.93-3.74,8.24-7.89,8.24c-2.05,0-4.12-0.79-5.74-2.6c-8.05-8.92-19.1-13.39-30.13-13.39&#10;&#9;&#9;&#9;&#9;s-22.08,4.47-30.13,13.39c-1.62,1.81-3.69,2.6-5.74,2.6c-4.15,0-8.15-3.31-7.89-8.24c0.03-0.71,0.04-1.41,0.04-2.11&#10;&#9;&#9;&#9;&#9;c0-23.08-19.34-41.69-42.65-40.5c-0.15,0.01-0.3,0.01-0.45,0.01c-7.05,0-10.56-8.81-5.2-13.65c8.92-8.05,13.39-19.09,13.39-30.13&#10;&#9;&#9;&#9;&#9;c0-7.68-2.16-15.35-6.49-22.02h170.24c-4.33,6.67-6.49,14.34-6.49,22.02c0,11.04,4.47,22.08,13.39,30.13&#10;&#9;&#9;&#9;&#9;C353.382,238.48,349.872,247.29,342.812,247.29z"
        />
        <g>
          <line
            id="XMLID_00000127012381744132405410000009872483291948348836_"
            style="
              fill: none;
              stroke: #000000;
              stroke-width: 15;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
            "
            x1="279.433"
            y1="224.908"
            x2="279.433"
            y2="224.805"
          />

          <line
            id="XMLID_00000080918978500845250090000017315552773041050031_"
            style="
              fill: none;
              stroke: #000000;
              stroke-width: 15;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
            "
            x1="256.002"
            y1="224.908"
            x2="256.002"
            y2="224.805"
          />

          <line
            id="XMLID_00000140711681861242238370000008769002181148908969_"
            style="
              fill: none;
              stroke: #000000;
              stroke-width: 15;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
            "
            x1="232.572"
            y1="224.908"
            x2="232.572"
            y2="224.805"
          />
        </g>
        <path
          style="fill: #f3d730"
          d="M342.812,247.3c-0.15,0-0.29,0-0.43-0.02c-23.33-1.19-42.66,17.43-42.66,40.5&#10;&#9;&#9;&#9;&#9;c0,0.7,0.01,1.39,0.05,2.11c0.25,4.93-3.75,8.25-7.89,8.25c-2.06,0-4.13-0.8-5.75-2.61c-6.75-7.46-15.58-11.81-24.76-13.03&#10;&#9;&#9;&#9;&#9;c29.09-14.37,49.1-44.34,49.1-78.98c0-7.61-0.97-14.99-2.78-22.03h33.42c-4.32,6.67-6.48,14.35-6.48,22.02&#10;&#9;&#9;&#9;&#9;c0,11.04,4.47,22.09,13.38,30.14C353.382,238.47,349.882,247.3,342.812,247.3z"
        />
      </g>
      <path
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        d="&#10;&#9;&#9;&#9;M341.122,181.49c-4.33,6.67-6.49,14.34-6.49,22.02c0,11.04,4.47,22.08,13.39,30.13c5.36,4.84,1.85,13.65-5.21,13.65&#10;&#9;&#9;&#9;c-0.14,0-0.29,0-0.44-0.01c-23.32-1.19-42.66,17.42-42.66,40.5c0,0.7,0.02,1.4,0.05,2.11c0.26,4.93-3.74,8.24-7.89,8.24&#10;&#9;&#9;&#9;c-2.05,0-4.12-0.79-5.74-2.6c-8.05-8.92-19.1-13.39-30.13-13.39s-22.08,4.47-30.13,13.39c-1.62,1.81-3.69,2.6-5.74,2.6&#10;&#9;&#9;&#9;c-4.15,0-8.15-3.31-7.89-8.24c0.03-0.71,0.04-1.41,0.04-2.11c0-23.08-19.34-41.69-42.65-40.5c-0.15,0.01-0.3,0.01-0.45,0.01&#10;&#9;&#9;&#9;c-7.05,0-10.56-8.81-5.2-13.65c8.92-8.05,13.39-19.09,13.39-30.13c0-7.68-2.16-15.35-6.49-22.02"
      />
    </g>
    <g>
      <path
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        d="&#10;&#9;&#9;&#9;M208.726,181.49h-84.213c-2.761,0-5,2.239-5,5v139.02c0,2.761,2.239,5,5,5h262.97c2.761,0,5-2.239,5-5V186.49c0-2.761-2.239-5-5-5&#10;&#9;&#9;&#9;H241.888"
      />
    </g>
    <path
      style="
        fill: none;
        stroke: #000000;
        stroke-width: 15;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-miterlimit: 10;
      "
      d="&#10;&#9;&#9;M124.512,370.51h125.143c1.706,0,3.295,0.87,4.214,2.308l53.65,83.99c2.126,3.328-0.264,7.692-4.214,7.692H124.512&#10;&#9;&#9;c-2.761,0-5-2.239-5-5v-83.99C119.512,372.749,121.751,370.51,124.512,370.51z"
    />
    <path
      style="
        fill: none;
        stroke: #000000;
        stroke-width: 15;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-miterlimit: 10;
      "
      d="&#10;&#9;&#9;M392.482,397.976V375.51c0-2.761-2.239-5-5-5h-78.73c-3.949,0-6.34,4.363-4.214,7.692l53.65,83.99&#10;&#9;&#9;c0.919,1.438,2.507,2.308,4.214,2.308h25.08c2.761,0,5-2.239,5-5v-28.362"
    />
    <g>
      <g>
        <g>
          <circle
            style="fill: #d8b2ec"
            cx="189.8"
            cy="381.497"
            r="24.709"
          />

          <circle
            style="
              fill: none;
              stroke: #000000;
              stroke-width: 15;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 10;
            "
            cx="189.8"
            cy="381.497"
            r="24.709"
          />
        </g>
      </g>
    </g>
    <g>
      <line
        id="XMLID_00000028301319025648580530000009457246182494066313_"
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        x1="314.674"
        y1="108.185"
        x2="354.689"
        y2="108.075"
      />

      <line
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        x1="333.566"
        y1="80.805"
        x2="354.689"
        y2="80.805"
      />
    </g>
  </g>
</svg>
`,IconComic3Flat:`<svg
  id="Capa_1"
  enable-background="new 0 0 512 512"
  height="512"
  viewBox="0 0 512 512"
  width="512"
  xmlns="http://www.w3.org/2000/svg"
>
  <g>
    <g>
      <g>
        <path
          d="m427.508 512h-343.02c-5.69 0-10.302-4.612-10.302-10.302v-491.396c0-5.69 4.612-10.302 10.302-10.302h343.02c5.69 0 10.302 4.612 10.302 10.302v491.396c-.001 5.69-4.613 10.302-10.302 10.302z"
          fill="#f2eff2"
        />
      </g>
    </g>
    <path
      d="m427.512 0h-41.238c5.687 0 10.302 4.615 10.302 10.302v36.12l-18.016 49.462 18.016 36.952v51.701l-13.787 87.003 13.787 55.974v51.669l-18.016 52.406 18.016 34.008v36.1c0 5.687-4.615 10.302-10.302 10.302h41.238c5.687 0 10.302-4.615 10.302-10.302v-491.395c0-5.687-4.615-10.302-10.302-10.302z"
      fill="#e1dde1"
    />
    <path
      d="m396.6 46.36v86.52c0 2.85-2.31 5.15-5.15 5.15h-110.11l-22.53-48.41 22.53-48.41h110.11c2.84 0 5.15 2.3 5.15 5.15z"
      fill="#3ad1e0"
    />
    <path
      d="m396.599 46.358v86.525c0 2.843-2.308 5.151-5.151 5.151h-30.926c2.843 0 5.151-2.308 5.151-5.151v-86.525c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z"
      fill="#20bfd5"
    />
    <path
      d="m281.34 41.207h-39.904c-2.845 0-5.151 2.306-5.151 5.151v86.525c0 2.845 2.306 5.151 5.151 5.151h39.904z"
      fill="#23f1a8"
    />
    <path
      d="m304.73 470.79h-77.71l-39.22-20.29-39.23 20.29h-28.03c-2.84 0-5.15-2.3-5.15-5.15v-86.52c0-2.85 2.31-5.15 5.15-5.15h128.92c1.76 0 3.4.89 4.34 2.37l55.27 86.53c2.19 3.43-.27 7.92-4.34 7.92z"
      fill="#23f1a8"
    />
    <g>
      <path
        d="m227.019 443.104v27.689h-78.446v-27.689c0-21.669 17.569-39.228 39.228-39.228 10.83 0 20.639 4.39 27.729 11.489 7.099 7.1 11.489 16.899 11.489 27.739z"
        fill="#ae6ad8"
      />
      <path
        d="m227.021 443.101v27.691h-29.061v-27.691c0-10.838-4.389-20.634-11.486-27.732-3.729-3.74-8.211-6.727-13.207-8.715 4.492-1.793 9.406-2.782 14.536-2.782 10.827 0 20.635 4.389 27.732 11.497 7.097 7.098 11.486 16.895 11.486 27.732z"
        fill="#975bbb"
      />
    </g>
    <path
      d="m304.728 470.793h-30.926c4.069 0 6.531-4.492 4.347-7.922l-55.269-86.525c-.948-1.483-2.586-2.38-4.347-2.38h30.926c1.762 0 3.4.896 4.347 2.38l55.269 86.525c2.184 3.43-.278 7.922-4.347 7.922z"
      fill="#27e19d"
    />
    <path
      d="m391.448 373.966h-81.106c-4.068 0-6.531 4.495-4.341 7.924l55.269 86.525c.946 1.482 2.583 2.378 4.341 2.378h25.837c2.845 0 5.151-2.306 5.151-5.151v-86.525c0-2.845-2.306-5.151-5.151-5.151z"
      fill="#ae6ad8"
    />
    <path
      d="m396.599 379.117v86.525c0 2.843-2.308 5.151-5.151 5.151h-25.837c-.907 0-1.772-.237-2.534-.68 1.556-.886 2.596-2.555 2.596-4.471v-86.525c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z"
      fill="#975bbb"
    />
    <g>
      <path
        d="m195.602 46.358v86.525c0 2.845-2.306 5.151-5.151 5.151h-69.91c-2.845 0-5.151-2.306-5.151-5.151v-86.525c0-2.845 2.306-5.151 5.151-5.151h69.91c2.845 0 5.151 2.306 5.151 5.151z"
        fill="#3ad1e0"
      />
      <path
        d="m195.6 46.358v86.525c0 2.843-2.308 5.151-5.151 5.151h-30.926c2.843 0 5.151-2.308 5.151-5.151v-86.525c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z"
        fill="#20bfd5"
      />
    </g>
    <g>
      <path
        d="m396.6 184.39v143.22c0 2.84-2.31 5.15-5.15 5.15h-30.93l-104.53-27.53-104.52 27.53h-30.93c-2.84 0-5.15-2.31-5.15-5.15v-143.22c0-2.84 2.31-5.15 5.15-5.15h47.77l87.68 16.15 87.69-16.15h47.77c2.84 0 5.15 2.31 5.15 5.15z"
        fill="#fb54b6"
      />
    </g>
    <path
      d="m151.473 332.759c0-57.729 46.798-104.527 104.527-104.527s104.527 46.798 104.527 104.527z"
      fill="#fb9927"
    />
    <path
      d="m360.522 332.759h-35.397c0-51.694-37.519-94.612-86.824-103.028 5.748-.979 11.662-1.494 17.699-1.494 57.731 0 104.522 46.79 104.522 104.522z"
      fill="#f98824"
    />
    <g>
      <path
        d="m396.599 184.392v143.216c0 2.843-2.308 5.151-5.151 5.151h-30.926c2.843 0 5.151-2.308 5.151-5.151v-143.216c0-2.843-2.308-5.151-5.151-5.151h30.926c2.844 0 5.151 2.308 5.151 5.151z"
        fill="#fb33a8"
      />
    </g>
    <g>
      <g>
        <path
          d="m345.43 247.027c-.144 0-.299 0-.453-.01-24.024-1.226-43.947 17.946-43.947 41.722 0 .721.021 1.442.051 2.174.268 5.079-3.853 8.489-8.128 8.489-2.112 0-4.244-.814-5.913-2.678-8.293-9.189-19.676-13.794-31.039-13.794s-22.746 4.605-31.039 13.794c-1.669 1.865-3.801 2.678-5.913 2.678-4.275 0-8.396-3.41-8.128-8.489.031-.731.041-1.453.041-2.174 0-23.777-19.924-42.948-43.937-41.722-.155.01-.309.01-.464.01-7.263 0-10.879-9.076-5.357-14.062 9.189-8.293 13.794-19.666 13.794-31.039 0-7.912-2.225-15.813-6.686-22.685h175.378c-4.461 6.871-6.686 14.773-6.686 22.685 0 11.373 4.605 22.746 13.794 31.039 5.521 4.986 1.905 14.062-5.368 14.062z"
          fill="#fdef63"
        />
        <g>
          <g id="XMLID_00000127012381744132405410000009872483291948348836_">
            <path
              d="m280.138 231.696c-4.268 0-7.726-3.459-7.726-7.726v-.107c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v.107c0 4.267-3.459 7.726-7.726 7.726z"
              fill="#554e55"
            />
          </g>
          <g id="XMLID_00000080918978500845250090000017315552773041050031_">
            <path
              d="m256 231.696c-4.267 0-7.726-3.459-7.726-7.726v-.107c0-4.267 3.459-7.726 7.726-7.726 4.268 0 7.726 3.459 7.726 7.726v.107c0 4.267-3.458 7.726-7.726 7.726z"
              fill="#554e55"
            />
          </g>
          <g id="XMLID_00000140711681861242238370000008769002181148908969_">
            <path
              d="m231.862 231.696c-4.267 0-7.726-3.459-7.726-7.726v-.107c0-4.267 3.459-7.726 7.726-7.726s7.726 3.459 7.726 7.726v.107c.001 4.267-3.459 7.726-7.726 7.726z"
              fill="#554e55"
            />
          </g>
        </g>
        <path
          d="m345.43 247.037c-.155 0-.299 0-.443-.021-24.034-1.226-43.948 17.956-43.948 41.722 0 .721.01 1.432.052 2.174.258 5.079-3.863 8.499-8.128 8.499-2.122 0-4.255-.824-5.924-2.689-6.954-7.685-16.05-12.167-25.507-13.423 29.968-14.804 50.582-45.678 50.582-81.364 0-7.84-.999-15.442-2.864-22.695h34.429c-4.45 6.871-6.676 14.783-6.676 22.685 0 11.373 4.605 22.757 13.784 31.05 5.532 4.966 1.926 14.062-5.357 14.062z"
          fill="#f3d730"
        />
      </g>
    </g>
    <g>
      <g>
        <g>
          <circle
            cx="187.8"
            cy="385.284"
            fill="#d8b2ec"
            r="25.455"
          />
        </g>
      </g>
    </g>
    <g>
      <g id="XMLID_00000028301319025648580530000009457246182494066313_">
        <path
          d="m316.443 111.45c-4.258 0-7.714-3.445-7.726-7.705-.012-4.267 3.438-7.736 7.705-7.747l41.222-.114h.021c4.258 0 7.714 3.445 7.726 7.705.012 4.267-3.438 7.736-7.705 7.747l-41.222.114c-.007 0-.014 0-.021 0z"
          fill="#f2eff2"
        />
      </g>
      <g>
        <path
          d="m357.665 83.243h-21.761c-4.268 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h21.761c4.268 0 7.726 3.459 7.726 7.726s-3.458 7.726-7.726 7.726z"
          fill="#f2eff2"
        />
      </g>
    </g>
  </g>
</svg>
`,IconDeviceFloppy:`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-device-floppy"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2" />
  <path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M14 4l0 4l-6 0l0 -4" />
</svg>
`,IconDotsVertical:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
</svg>
`,IconEReader1:`<svg
  version="1.1"
  id="Capa_1"
  xmlns="http://www.w3.org/2000/svg"
  x="0px"
  y="0px"
  viewBox="0 0 512 512"
  style="enable-background: new 0 0 512 512"
  xml:space="preserve"
>
  <g>
    <path
      style="fill: #636978"
      d="M366,504.5H146c-44.183,0-80-35.817-80-80v-337c0-44.183,35.817-80,80-80h220&#10;&#9;&#9;c44.183,0,80,35.817,80,80v337C446,468.683,410.183,504.5,366,504.5z"
    />
    <path
      style="fill: #555a66"
      d="M226,444.5v-377c0-33.137,26.863-60,60-60H146c-44.183,0-80,35.817-80,80v337&#10;&#9;&#9;c0,44.183,35.817,80,80,80h140C252.863,504.5,226,477.637,226,444.5z"
    />
    <path
      style="fill: #96e8ff"
      d="M366,67.5H146c-11.046,0-20,8.954-20,20v327c0,11.046,8.954,20,20,20h220c11.046,0,20-8.954,20-20&#10;&#9;&#9;v-327C386,76.454,377.046,67.5,366,67.5z"
    />
    <path
      style="fill: #80dbff"
      d="M126,87.5v327c0,11.046,8.954,20,20,20h80v-367h-80C134.954,67.5,126,76.454,126,87.5z"
    />
    <path
      style="fill: #ffffff"
      d="M256,115.517c-26.85-7.998-53.509-8.858-80.318-2.577c-5.664,1.327-9.682,6.363-9.682,12.18&#10;&#9;&#9;c0,39.161,0,53.805,0,92.965c0,6.374,5.886,11.128,12.113,9.768c23.172-5.058,46.241-4.777,69.425,0.841&#10;&#9;&#9;c5.563,1.348,11.361,1.348,16.924,0c23.184-5.618,46.252-5.898,69.425-0.841c6.227,1.359,12.113-3.395,12.113-9.768&#10;&#9;&#9;c0-39.161,0-53.805,0-92.965c0-5.818-4.018-10.853-9.682-12.18C309.509,106.659,282.85,107.518,256,115.517z"
    />
    <path
      style="fill: #f5fafc"
      d="M175.682,112.94c-5.664,1.327-9.682,6.363-9.682,12.18c0,39.161,0,53.805,0,92.965&#10;&#9;&#9;c0,6.374,5.886,11.128,12.113,9.769c23.172-5.058,46.241-4.777,69.425,0.841c2.782,0.674,5.622,1.011,8.462,1.011V115.517&#10;&#9;&#9;C229.15,107.518,202.491,106.659,175.682,112.94z"
    />
    <path
      style="fill: #e1f1fa"
      d="M206.53,108.873c-10.274,0.306-20.551,1.654-30.85,4.067c-5.663,1.327-9.681,6.368-9.681,12.184&#10;&#9;&#9;c0,39.155,0,53.801,0,92.955c0,6.355,5.86,11.141,12.068,9.785c23.188-5.068,46.271-4.791,69.47,0.831&#10;&#9;&#9;c2.782,0.674,8.462,1.011,8.462,1.011c0-12.844-13.338-21.214-26.163-26.293c-14.114-5.59-23.307-19.322-23.307-34.502V108.873z"
    />
    <g>
      <path
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        d="&#10;&#9;&#9;&#9;M366,504.5H146c-44.183,0-80-35.817-80-80v-337c0-44.183,35.817-80,80-80h220c44.183,0,80,35.817,80,80v337&#10;&#9;&#9;&#9;C446,468.683,410.183,504.5,366,504.5z"
      />
      <path
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        d="&#10;&#9;&#9;&#9;M126,398.01v16.49c0,11.046,8.954,20,20,20h220c11.046,0,20-8.954,20-20v-327c0-11.046-8.954-20-20-20H146&#10;&#9;&#9;&#9;c-11.046,0-20,8.954-20,20v280.51"
      />

      <line
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        x1="176"
        y1="281.01"
        x2="336"
        y2="281.01"
      />

      <line
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        x1="176"
        y1="321.01"
        x2="336"
        y2="321.01"
      />
      <path
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        d="&#10;&#9;&#9;&#9;M286.144,109.53c-10.033,0.992-20.075,2.987-30.144,5.986c-26.85-7.998-53.509-8.858-80.318-2.577&#10;&#9;&#9;&#9;c-5.664,1.327-9.682,6.363-9.682,12.18c0,39.161,0,53.805,0,92.965c0,6.374,5.886,11.128,12.113,9.768&#10;&#9;&#9;&#9;c23.172-5.058,46.241-4.777,69.425,0.841c5.563,1.348,11.361,1.348,16.924,0c23.184-5.618,46.252-5.898,69.425-0.841&#10;&#9;&#9;&#9;c6.227,1.359,12.113-3.395,12.113-9.768c0-39.161,0-53.805,0-92.965c0-5.818-4.018-10.853-9.682-12.18&#10;&#9;&#9;&#9;c-6.702-1.57-13.395-2.694-20.084-3.372"
      />

      <line
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        x1="256"
        y1="115.517"
        x2="256"
        y2="229.706"
      />
      <g>
        <line
          style="
            fill: none;
            stroke: #000000;
            stroke-width: 15;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 10;
          "
          x1="193.551"
          y1="362.07"
          x2="193.551"
          y2="374.07"
        />

        <line
          style="
            fill: none;
            stroke: #000000;
            stroke-width: 15;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 10;
          "
          x1="318.449"
          y1="362.07"
          x2="318.449"
          y2="374.07"
        />
        <path
          style="
            fill: none;
            stroke: #000000;
            stroke-width: 15;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 10;
          "
          d="&#10;&#9;&#9;&#9;&#9;M239.536,373.713c4.003,4.594,9.892,7.501,16.464,7.501c6.572,0,12.461-2.907,16.464-7.501"
        />
      </g>
    </g>
  </g>
  <g></g>
  <g></g>
  <g></g>
  <g></g>
  <g></g>
  <g></g>
  <g></g>
  <g></g>
  <g></g>
  <g></g>
  <g></g>
  <g></g>
  <g></g>
  <g></g>
  <g></g>
</svg>
`,IconEReader1Flat:`<svg
  id="Capa_1"
  enable-background="new 0 0 512 512"
  viewBox="0 0 512 512"
  xmlns="http://www.w3.org/2000/svg"
>
  <g>
    <g>
      <path
        d="m369.32 512h-226.64c-45.516 0-82.414-36.898-82.414-82.414v-347.172c0-45.516 36.898-82.414 82.414-82.414h226.64c45.516 0 82.414 36.898 82.414 82.414v347.171c0 45.517-36.898 82.415-82.414 82.415z"
        fill="#636978"
      />
    </g>
    <g>
      <path
        d="m225.095 450.189v-388.378c0-34.137 27.673-61.811 61.81-61.811h-144.225c-45.516 0-82.414 36.898-82.414 82.414v347.171c0 45.516 36.898 82.414 82.414 82.414h144.225c-34.137.001-61.81-27.673-61.81-61.81z"
        fill="#555a66"
      />
    </g>
    <g>
      <path
        d="m369.32 61.811h-226.64c-11.379 0-20.604 9.225-20.604 20.604v336.869c0 11.379 9.225 20.604 20.604 20.604h226.64c11.379 0 20.604-9.225 20.604-20.604v-336.87c0-11.379-9.225-20.603-20.604-20.603z"
        fill="#96e8ff"
      />
    </g>
    <g>
      <path
        d="m122.076 82.414v336.869c0 11.379 9.225 20.604 20.604 20.604h82.414v-378.076h-82.414c-11.379 0-20.604 9.224-20.604 20.603z"
        fill="#80dbff"
      />
    </g>
    <g>
      <path
        d="m256 111.277c-27.66-8.24-55.124-9.125-82.742-2.655-5.835 1.367-9.975 6.555-9.975 12.548v95.771c0 6.566 6.064 11.463 12.479 10.063 23.872-5.21 47.636-4.921 71.52.866 5.731 1.389 11.704 1.389 17.435 0 23.884-5.788 47.648-6.077 71.52-.866 6.415 1.4 12.479-3.497 12.479-10.063 0-40.343 0-55.429 0-95.771 0-5.993-4.139-11.181-9.975-12.548-27.617-6.471-55.081-5.585-82.741 2.655z"
        fill="#fff"
      />
    </g>
    <g>
      <path
        d="m173.258 108.622c-5.835 1.367-9.975 6.555-9.975 12.548v95.771c0 6.566 6.064 11.463 12.479 10.063 23.872-5.21 47.636-4.921 71.52.866 2.866.694 5.791 1.041 8.717 1.041v-117.634c-27.659-8.24-55.123-9.126-82.741-2.655z"
        fill="#f5fafc"
      />
    </g>
    <g>
      <path
        d="m205.037 104.432c-10.584.315-21.171 1.704-31.781 4.19-5.834 1.367-9.973 6.56-9.973 12.552v95.761c0 6.547 6.037 11.478 12.432 10.08 23.888-5.221 47.667-4.935 71.567.856 2.866.694 8.717 1.042 8.717 1.042 0-13.231-13.741-21.854-26.952-27.087-14.54-5.759-24.011-19.905-24.011-35.544v-61.85z"
        fill="#e1f1fa"
      />
    </g>
    <g>
      <g>
        <path
          d="m338.414 289.266h-164.829c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h164.829c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z"
          fill="#19cffc"
        />
      </g>
      <g>
        <path
          d="m338.414 330.473h-164.829c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h164.829c4.143 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z"
          fill="#19cffc"
        />
      </g>
      <g>
        <g>
          <path
            d="m191.667 385.134c-4.142 0-7.5-3.357-7.5-7.5v-12.362c0-4.143 3.358-7.5 7.5-7.5s7.5 3.357 7.5 7.5v12.362c0 4.142-3.358 7.5-7.5 7.5z"
            fill="#495560"
          />
        </g>
        <g>
          <path
            d="m320.333 385.134c-4.143 0-7.5-3.357-7.5-7.5v-12.362c0-4.143 3.357-7.5 7.5-7.5s7.5 3.357 7.5 7.5v12.362c0 4.142-3.357 7.5-7.5 7.5z"
            fill="#495560"
          />
        </g>
        <g>
          <path
            d="m256 392.493c-8.668 0-16.911-3.754-22.615-10.3-2.721-3.123-2.396-7.86.727-10.582 3.122-2.721 7.86-2.396 10.582.727 2.855 3.276 6.976 5.155 11.307 5.155s8.452-1.879 11.307-5.155c2.723-3.122 7.457-3.447 10.582-.727 3.122 2.722 3.448 7.459.727 10.582-5.706 6.546-13.949 10.3-22.617 10.3z"
            fill="#495560"
          />
        </g>
      </g>
    </g>
  </g>
  <g />
  <g />
  <g />
  <g />
  <g />
  <g />
  <g />
  <g />
  <g />
  <g />
  <g />
  <g />
  <g />
  <g />
  <g />
</svg>
`,IconEReader2:`<?xml version="1.0" encoding="UTF-8"?>
<svg
  xmlns="http://www.w3.org/2000/svg"
  version="1.1"
  id="Capa_1"
  x="0px"
  y="0px"
  viewBox="0 0 511.941 511.941"
  style="enable-background: new 0 0 511.941 511.941"
  xml:space="preserve"
  width="512"
  height="512"
>
  <g>
    <g>
      <path
        style="fill: #808fa4"
        d="M444.211,67.5v376.94c0,33.14-26.87,60-60,60H127.73c-33.13,0-60-26.86-60-60V67.5&#10;&#9;&#9;&#9;c0-33.14,26.87-60,60-60h256.48C417.341,7.5,444.211,34.361,444.211,67.5z"
      />
      <path
        style="fill: #64768e"
        d="M190.421,504.44h-62.69c-33.13,0-60-26.86-60-60V67.5c0-33.14,26.87-60,60-60h48.86&#10;&#9;&#9;&#9;c-7.15,6.38-14.77,17.56-14.77,36.26v411.44C161.821,455.201,161.611,484.551,190.421,504.44z"
      />
      <path
        style="fill: #c5ced6"
        d="M414.091,67.62v143.17l-188.56,12.65l75.62-185.82h82.94&#10;&#9;&#9;&#9;C400.661,37.62,414.091,51.051,414.091,67.62z"
      />
      <polygon
        style="fill: #abb6c4"
        points="271.031,37.62 225.531,223.44 161.821,217.131 97.85,210.79 118.08,74.5 162.111,37.62 &#9;&#9;&#10;&#9;&#9;&#9;"
      />
      <path
        style="fill: #9ca9ba"
        d="M162.111,37.62c-0.19,1.95-0.29,4-0.29,6.14v173.37l-63.97-6.34V67.62c0-16.57,13.43-30,30-30&#10;&#9;&#9;&#9;H162.111z"
      />
      <polygon
        style="fill: #c5ced6"
        points="311.951,223.44 293.62,414.091 161.821,414.091 111.611,379.181 97.85,240.911 &#10;&#9;&#9;&#9;161.821,235.69 &#9;&#9;"
      />
      <path
        style="fill: #abb6c4"
        d="M97.85,240.911l63.97-5.22v178.4h-33.97c-16.57,0-30-13.43-30-30V240.911z"
      />
      <path
        style="fill: #64768e"
        d="M414.091,240.911v143.18c0,16.57-13.43,30-30,30h-60.36l-11.78-190.65L414.091,240.911z"
      />
      <path
        style="fill: #64768e"
        d="M286.088,474.324h-60.235c-8.317,0-15.059-6.742-15.059-15.059v0&#10;&#9;&#9;&#9;c0-8.317,6.742-15.059,15.059-15.059h60.235c8.317,0,15.059,6.742,15.059,15.059v0&#10;&#9;&#9;&#9;C301.147,467.581,294.405,474.324,286.088,474.324z"
      />
      <path
        style="fill: #e8ecf9"
        d="M414.091,210.79v30.12h-75.36c-8.28,0-15,6.72-15,15v158.18h-30.11v-158.18c0-8.28-6.72-15-15-15&#10;&#9;&#9;&#9;h-116.8l-12.76-12.88l12.76-17.24h42.84c6.52,0,12.3-4.22,14.29-10.43l52.08-162.74h30.12l-49.16,153.6&#10;&#9;&#9;&#9;c-3.09,9.68,4.13,19.57,14.29,19.57H414.091z"
      />
      <rect
        x="97.85"
        y="210.79"
        style="fill: #d7ddf5"
        width="63.97"
        height="30.12"
      />
    </g>
    <g>
      <path
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        d="&#10;&#9;&#9;&#9;M384.206,504.441H127.735c-33.137,0-60-26.863-60-60V67.5c0-33.137,26.863-60,60-60h256.471c33.137,0,60,26.863,60,60v376.941&#10;&#9;&#9;&#9;C444.206,477.578,417.343,504.441,384.206,504.441z"
      />
      <path
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        d="&#10;&#9;&#9;&#9;M384.088,414.088H127.853c-16.569,0-30-13.431-30-30V67.618c0-16.569,13.431-30,30-30h256.235c16.569,0,30,13.431,30,30v316.471&#10;&#9;&#9;&#9;C414.088,400.657,400.657,414.088,384.088,414.088z"
      />
      <path
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        d="&#10;&#9;&#9;&#9;M286.088,474.324h-60.235c-8.317,0-15.059-6.742-15.059-15.059c0-8.317,6.742-15.059,15.059-15.059h60.235&#10;&#9;&#9;&#9;c8.317,0,15.059,6.742,15.059,15.059C301.147,467.581,294.405,474.324,286.088,474.324z"
      />
      <path
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        d="&#10;&#9;&#9;&#9;M100.85,210.79h103.811c6.523,0,12.298-4.215,14.286-10.428L270.56,39.09"
      />
      <path
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        d="&#10;&#9;&#9;&#9;M293.62,410.091v-154.18c0-8.284-6.716-15-15-15H100.85"
      />
      <path
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        d="&#10;&#9;&#9;&#9;M411.091,240.911h-72.36c-8.284,0-15,6.716-15,15v154.18"
      />
      <path
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        d="&#10;&#9;&#9;&#9;M300.616,39.291l-48.622,151.927c-3.098,9.679,4.124,19.572,14.286,19.572h144.81"
      />
      <g>
        <line
          style="
            fill: none;
            stroke: #000000;
            stroke-width: 15;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 10;
          "
          x1="133.2"
          y1="310.695"
          x2="133.2"
          y2="322.695"
        />

        <line
          style="
            fill: none;
            stroke: #000000;
            stroke-width: 15;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 10;
          "
          x1="258.098"
          y1="310.695"
          x2="258.098"
          y2="322.695"
        />
        <g>
          <path
            style="
              fill: none;
              stroke: #000000;
              stroke-width: 15;
              stroke-linecap: round;
              stroke-miterlimit: 10;
            "
            d="M195.831,329.85&#10;&#9;&#9;&#9;&#9;&#9;c0,7.984-6.472,14.456-14.456,14.456s-14.456-6.472-14.456-14.456"
          />
          <path
            style="
              fill: none;
              stroke: #000000;
              stroke-width: 15;
              stroke-linecap: round;
              stroke-miterlimit: 10;
            "
            d="M224.742,329.85&#10;&#9;&#9;&#9;&#9;&#9;c0,7.984-6.472,14.456-14.456,14.456s-14.456-6.472-14.456-14.456"
          />
        </g>
      </g>
    </g>
  </g>
</svg>
`,IconEReader2Flat:`<svg
  id="Capa_1"
  enable-background="new 0 0 512 512"
  height="512"
  viewBox="0 0 512 512"
  width="512"
  xmlns="http://www.w3.org/2000/svg"
>
  <g>
    <path
      d="m449.945 61.818v388.363c0 34.144-27.684 61.818-61.818 61.818h-264.254c-34.134 0-61.818-27.674-61.818-61.818v-388.363c0-34.144 27.684-61.818 61.818-61.818h264.253c34.135 0 61.819 27.674 61.819 61.818z"
      fill="#808fa4"
    />
    <path
      d="m188.464 512h-64.59c-34.134 0-61.818-27.674-61.818-61.818v-388.364c-.001-34.144 27.683-61.818 61.817-61.818h50.341c-7.367 6.574-15.218 18.092-15.218 37.359v423.909c.001 0-.215 30.24 29.468 50.732z"
      fill="#64768e"
    />
    <path
      d="m418.912 61.942v147.509l-194.274 13.033 77.912-191.451h85.453c17.072 0 30.909 13.837 30.909 30.909z"
      fill="#c5ced6"
    />
    <path
      d="m271.516 31.033-46.878 191.451-65.641-6.501-65.909-6.532 20.843-140.421 45.365-37.997z"
      fill="#abb6c4"
    />
    <path
      d="m159.296 31.033c-.196 2.009-.299 4.121-.299 6.326v178.624l-65.909-6.532v-147.509c0-17.072 13.837-30.909 30.909-30.909z"
      fill="#9ca9ba"
    />
    <path
      d="m313.676 222.484-18.885 196.428h-135.794l-51.732-35.968-14.177-142.46 65.909-5.379z"
      fill="#c5ced6"
    />
    <path
      d="m93.088 240.484 65.909-5.378v183.807h-35c-17.072 0-30.909-13.837-30.909-30.909z"
      fill="#abb6c4"
    />
    <path
      d="m418.912 240.484v147.519c0 17.072-13.837 30.909-30.909 30.909h-62.19l-12.137-196.428z"
      fill="#64768e"
    />
    <path
      d="m287.487 480.971h-62.974c-8.317 0-15.059-6.742-15.059-15.059v-.913c0-8.317 6.742-15.059 15.059-15.059h62.974c8.317 0 15.059 6.742 15.059 15.059v.913c0 8.316-6.743 15.059-15.059 15.059z"
      fill="#64768e"
    />
    <path
      d="m418.912 209.451v31.033h-77.644c-8.531 0-15.455 6.924-15.455 15.455v162.974h-31.022v-162.975c0-8.531-6.923-15.455-15.455-15.455h-120.34l-13.147-13.27 13.147-17.763h44.138c6.718 0 12.673-4.348 14.723-10.746l53.658-167.672h31.033l-50.65 158.255c-3.183 9.974 4.255 20.163 14.723 20.163h152.291z"
      fill="#e8ecf9"
    />
    <path
      d="m93.088 209.451h65.909v31.033h-65.909z"
      fill="#d7ddf5"
    />
    <g>
      <g>
        <path
          d="m129.509 332.474c-4.268 0-7.727-3.459-7.727-7.727v-12.364c0-4.268 3.459-7.727 7.727-7.727s7.727 3.459 7.727 7.727v12.364c0 4.268-3.459 7.727-7.727 7.727z"
          fill="#495560"
        />
      </g>
      <g>
        <path
          d="m258.191 332.474c-4.268 0-7.727-3.459-7.727-7.727v-12.364c0-4.268 3.459-7.727 7.727-7.727s7.727 3.459 7.727 7.727v12.364c.001 4.268-3.458 7.727-7.727 7.727z"
          fill="#495560"
        />
      </g>
      <path
        d="m223.825 324.391c-4.268 0-7.727 3.459-7.727 7.727 0 3.952-3.215 7.167-7.166 7.167-3.952 0-7.167-3.215-7.167-7.167 0-4.268-3.459-7.727-7.727-7.727s-7.727 3.459-7.727 7.727c0 3.952-3.215 7.167-7.166 7.167-3.952 0-7.167-3.215-7.167-7.167 0-4.268-3.459-7.727-7.727-7.727s-7.727 3.459-7.727 7.727c0 12.473 10.148 22.621 22.621 22.621 5.7 0 10.911-2.124 14.894-5.616 3.982 3.492 9.193 5.616 14.894 5.616 12.473 0 22.62-10.148 22.62-22.621-.001-4.268-3.46-7.727-7.728-7.727z"
        fill="#495560"
      />
    </g>
  </g>
</svg>
`,IconExternalLink:`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-external-link"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
  <path d="M11 13l9 -9" />
  <path d="M15 4h5v5" />
</svg>
`,IconEye:`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-eye"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
  <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
</svg>
`,IconEyeOff:`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-eye-off"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" />
  <path
    d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87"
  />
  <path d="M3 3l18 18" />
</svg>
`,IconFileDownload:`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-file-download"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M14 3v4a1 1 0 0 0 1 1h4" />
  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
  <path d="M12 17v-6" />
  <path d="M9.5 14.5l2.5 2.5l2.5 -2.5" />
</svg>
`,IconFilePercent:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-file-percent"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M10 17l4 -4" />
  <path d="M14 3v4a1 1 0 0 0 1 1h4" />
  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
  <path d="M10 13h.01" />
  <path d="M14 17h.01" />
</svg>
`,IconHandClick:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-hand-click"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M8 13v-8.5a1.5 1.5 0 0 1 3 0v7.5" />
  <path d="M11 11.5v-2a1.5 1.5 0 0 1 3 0v2.5" />
  <path d="M14 10.5a1.5 1.5 0 0 1 3 0v1.5" />
  <path
    d="M17 11.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7l-.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47"
  />
  <path d="M5 3l-1 -1" />
  <path d="M4 7h-1" />
  <path d="M14 3l1 -1" />
  <path d="M15 6h1" />
</svg>
`,IconHelp:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-help"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  <path d="M12 17l0 .01" />
  <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
</svg>
`,IconInfoCircle:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-info-circle"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
  <path d="M12 9h.01" />
  <path d="M11 12h1v4h1" />
</svg>
`,IconKeyboard:`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-keyboard"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M2 6m0 2a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2z" />
  <path d="M6 10l0 .01" />
  <path d="M10 10l0 .01" />
  <path d="M14 10l0 .01" />
  <path d="M18 10l0 .01" />
  <path d="M6 14l0 .01" />
  <path d="M18 14l0 .01" />
  <path d="M10 14l4 .01" />
</svg>
`,IconLayoutBottombar:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-layout-bottombar"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
  <path d="M4 15l16 0" />
</svg>
`,IconLayoutBottombarInactive:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-layout-bottombar-inactive"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />
  <path d="M4 15h1" />
  <path d="M19 15h1" />
  <path d="M9 15h1" />
  <path d="M14 15h1" />
</svg>
`,IconLayoutSidebar:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
  <path d="M9 4l0 16" />
</svg>
`,IconLayoutSidebarInactive:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar-inactive"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />
  <path d="M9 4v1" />
  <path d="M9 9v1" />
  <path d="M9 14v1" />
  <path d="M9 19v1" />
</svg>
`,IconLayoutSidebarRight:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar-right"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
  <path d="M15 4l0 16" />
</svg>
`,IconLayoutSidebarRightInactive:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar-right-inactive"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M4 6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />
  <path d="M15 4v1" />
  <path d="M15 9v1" />
  <path d="M15 14v1" />
  <path d="M15 19v1" />
</svg>
`,IconListNumbers:`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-list-numbers"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M11 6h9" />
  <path d="M11 12h9" />
  <path d="M12 18h8" />
  <path d="M4 16a2 2 0 1 1 4 0c0 .591 -.5 1 -1 1.5l-3 2.5h4" />
  <path d="M6 10v-6l-2 2" />
</svg>
`,IconLoader2:`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-loader-2"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M12 3a9 9 0 1 0 9 9" />
</svg>
`,IconLocationCog:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-location-cog"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M12 18l-2 -4l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5l-3.14 8.697" />
  <path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M19.001 15.5v1.5" />
  <path d="M19.001 21v1.5" />
  <path d="M22.032 17.25l-1.299 .75" />
  <path d="M17.27 20l-1.3 .75" />
  <path d="M15.97 17.25l1.3 .75" />
  <path d="M20.733 20l1.3 .75" />
</svg>
`,IconMenu2:`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-menu-2"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M4 6l16 0" />
  <path d="M4 12l16 0" />
  <path d="M4 18l16 0" />
</svg>
`,IconMenuDeep:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-menu-deep"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M4 6h16" />
  <path d="M7 12h13" />
  <path d="M10 18h10" />
</svg>
`,IconMessage:`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-message"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M8 9h8" />
  <path d="M8 13h6" />
  <path
    d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"
  />
</svg>
`,IconMoon:`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-moon"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
</svg>
`,IconPage:`<?xml version="1.0" encoding="UTF-8"?>
<svg
  xmlns="http://www.w3.org/2000/svg"
  version="1.1"
  id="Capa_1"
  x="0px"
  y="0px"
  viewBox="0 0 511.94 511.94"
  style="enable-background: new 0 0 511.94 511.94"
  xml:space="preserve"
  width="512"
  height="512"
>
  <g>
    <g>
      <path
        style="fill: #e8ecf9"
        d="M444.21,67.5v376.94c0,33.14-26.87,60-60,60H127.73c-33.13,0-60-26.86-60-60V67.5&#10;&#9;&#9;&#9;c0-33.14,26.87-60,60-60h256.48C417.34,7.5,444.21,34.36,444.21,67.5z"
      />
      <path
        style="fill: #d7ddf5"
        d="M208.95,504.44h-81.22c-33.13,0-60-26.86-60-60V67.5c0-33.14,26.87-60,60-60h77.64&#10;&#9;&#9;&#9;c-10.96,3.32-26.02,12.08-26.02,35.19v424.02C179.35,492.41,198.62,501.44,208.95,504.44z"
      />
      <path
        style="fill: #c5ced6"
        d="M399.03,67.68v135.64c0,8.29-6.72,15-15,15H179.35l-50.04-21.09V76.2l50.04-23.52h204.68&#10;&#9;&#9;&#9;C392.31,52.68,399.03,59.39,399.03,67.68z"
      />
      <path
        style="fill: #abb6c4"
        d="M179.35,52.68v165.64h-51.44c-8.28,0-15-6.71-15-15V67.68c0-8.29,6.72-15,15-15H179.35z"
      />
      <path
        style="fill: #c5ced6"
        d="M218.32,278.5v7.8l-38.97,40.54l-8.55,8.9l-57.89,4.18l11.97-51.63l54.47-24.79h23.97&#10;&#9;&#9;&#9;C211.61,263.5,218.32,270.22,218.32,278.5z"
      />
      <path
        style="fill: #abb6c4"
        d="M127.91,263.5h51.44v63.34l-8.55,8.9l-57.89,4.18V278.5C112.91,270.22,119.63,263.5,127.91,263.5z"
      />
      <polygon
        style="fill: #c5ced6"
        points="218.32,332.03 218.32,390.66 179.35,432.82 175.27,437.23 112.91,428.85 121.23,408.1 &#10;&#9;&#9;&#9;112.91,382.33 162.16,332.03 &#9;&#9;"
      />
      <polygon
        style="fill: #abb6c4"
        points="179.35,332.03 179.35,432.82 175.27,437.23 112.91,428.85 112.91,382.33 162.16,332.03 &#9;&#9;&#10;&#9;&#9;&#9;"
      />
      <path
        style="fill: #808fa4"
        d="M218.32,286.3v45.73c-2.74,1.68-4.97,4.24-6.2,7.47c-2.29,6-8.01,9.69-14.07,9.69&#10;&#9;&#9;&#9;c-1.79,0-3.61-0.32-5.38-1c-0.53-0.2-1.06-0.37-1.59-0.51c-1.26-0.33-2.52-0.49-3.78-0.49c-2.83,0-5.58,0.8-7.95,2.27&#10;&#9;&#9;&#9;l-10.72-14.45l10.72-31.34c1,0.16,2,0.42,2.98,0.8c0.57,0.22,1.14,0.4,1.72,0.54c1.21,0.31,2.44,0.46,3.66,0.46&#10;&#9;&#9;&#9;c6.06,0,11.78-3.69,14.07-9.69c0.08-0.2,0.16-0.4,0.25-0.59c2.42-5.65,7.95-9.1,13.82-9.1&#10;&#9;&#9;&#9;C216.67,286.09,217.49,286.16,218.32,286.3z"
      />
      <path
        style="fill: #64768e"
        d="M179.35,303.67v45.79c-2.7,1.68-4.9,4.22-6.12,7.42c-0.19,0.49-0.39,0.96-0.63,1.41&#10;&#9;&#9;&#9;c-2.59,5.16-7.87,8.27-13.44,8.27c-0.3,0-0.6-0.01-0.9-0.03c-1.49-0.09-3-0.4-4.47-0.97c-1.77-0.68-3.59-1-5.38-1&#10;&#9;&#9;&#9;c-6.06,0-11.78,3.69-14.07,9.69s-8,9.69-14.07,9.69c-1.78,0-3.6-0.32-5.37-1c-0.66-0.25-1.32-0.46-1.99-0.61v-42.41&#10;&#9;&#9;&#9;c4.89-0.99,9.18-4.39,11.09-9.39c2.29-6,8.01-9.69,14.07-9.69c1.79,0,3.6,0.32,5.37,1c1.77,0.68,3.6,1,5.39,1&#10;&#9;&#9;&#9;c1.08,0,2.16-0.12,3.2-0.35c2.81-0.61,5.41-2.02,7.46-4.07c1.45-1.45,2.62-3.22,3.4-5.26c2.29-6,8-9.69,14.07-9.69&#10;&#9;&#9;&#9;C177.75,303.47,178.55,303.53,179.35,303.67z"
      />
      <path
        style="fill: #808fa4"
        d="M218.32,390.66v53.6c0,8.29-6.71,15-15,15h-23.97l-15.06-23.57l15.06-27.59&#10;&#9;&#9;&#9;c1.83-1.57,3.3-3.61,4.22-6.02c2.29-5.99,8.01-9.68,14.07-9.68c1.79,0,3.61,0.32,5.38,1c1.77,0.68,3.58,1,5.37,1&#10;&#9;&#9;&#9;c1.14,0,2.28-0.13,3.37-0.39h0.01C214.19,393.45,216.45,392.3,218.32,390.66z"
      />
      <path
        style="fill: #64768e"
        d="M169.5,411.77c3.63,0,7.13-1.32,9.85-3.67v51.16h-51.44c-8.28,0-15-6.71-15-15v-15.41&#10;&#9;&#9;&#9;c3.69-1.91,8.15-2.3,12.33-0.7c1.77,0.68,3.59,1,5.38,1c6.06,0,11.78-3.69,14.07-9.69c2.29-6,8-9.69,14.07-9.69&#10;&#9;&#9;&#9;c1.78,0,3.6,0.32,5.37,1C165.9,411.45,167.72,411.77,169.5,411.77z"
      />
      <path
        style="fill: #808fa4"
        d="M399.03,348.77v95.49c0,8.29-6.72,15-15,15h-67.02l-53.51-90.93V278.5c0-8.28,6.72-15,15-15h61.06&#10;&#9;&#9;&#9;L399.03,348.77z"
      />
      <path
        style="fill: #abb6c4"
        d="M376.44,331.26l-59.43,128H278.5c-8.28,0-15-6.71-15-15v-75.93l75.29-52.12L376.44,331.26z"
      />
      <path
        style="fill: #c5ced6"
        d="M399.03,278.5v70.27c-6.85,3.26-14.51,5.08-22.59,5.08c-3.43,0-6.79-0.33-10.04-0.96&#10;&#9;&#9;&#9;c-16.83-3.24-30.81-14.49-37.81-29.62c-3.12-6.72-4.86-14.22-4.86-22.12c0-14.75,6.06-28.09,15.83-37.65h44.47&#10;&#9;&#9;&#9;C392.31,263.5,399.03,270.22,399.03,278.5z"
      />
      <g>
        <g>
          <ellipse
            style="fill: #ffffff"
            cx="175.162"
            cy="150.402"
            rx="29.816"
            ry="23.744"
          />
          <ellipse
            style="fill: #ffffff"
            cx="336.778"
            cy="150.402"
            rx="29.816"
            ry="23.744"
          />
        </g>
      </g>
    </g>
    <g>
      <path
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        d="&#10;&#9;&#9;&#9;M67.73,402.54v41.9c0,33.14,26.87,60,60,60h256.48c33.13,0,60-26.86,60-60V67.5c0-33.14-26.87-60-60-60H127.73&#10;&#9;&#9;&#9;c-33.13,0-60,26.86-60,60v300.04"
      />
      <path
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        d="&#10;&#9;&#9;&#9;M359,52.68h25.03c8.28,0,15,6.71,15,15v135.64c0,8.29-6.72,15-15,15H127.91c-8.28,0-15-6.71-15-15V67.68c0-8.29,6.72-15,15-15H324&#10;&#9;&#9;&#9;"
      />
      <path
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        d="&#10;&#9;&#9;&#9;M203.323,459.264h-75.412c-8.284,0-15-6.716-15-15V278.499c0-8.284,6.716-15,15-15h75.412c8.284,0,15,6.716,15,15v165.765&#10;&#9;&#9;&#9;C218.323,452.548,211.607,459.264,203.323,459.264z"
      />
      <path
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        d="&#10;&#9;&#9;&#9;M399.03,278.5v165.76c0,8.29-6.72,15-15,15H278.5c-8.28,0-15-6.71-15-15V278.5c0-8.28,6.72-15,15-15h105.53&#10;&#9;&#9;&#9;C392.31,263.5,399.03,270.22,399.03,278.5z"
      />

      <line
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        x1="264.641"
        y1="367.54"
        x2="327.14"
        y2="324.275"
      />

      <line
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        x1="335.24"
        y1="420"
        x2="317.58"
        y2="458.04"
      />

      <line
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        x1="365.42"
        y1="354.99"
        x2="349.98"
        y2="388.25"
      />
      <path
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        d="&#10;&#9;&#9;&#9;M337.07,266.11c-14.481,16.226-16.955,38.907-8.48,57.16c12.198,26.365,43.179,37.557,69.06,26.13"
      />
      <path
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        d="&#10;&#9;&#9;&#9;M114.09,339.63c4.39-1.26,8.16-4.51,9.91-9.1c2.29-6,8.01-9.69,14.07-9.69c4.907,0,5.826,2,10.76,2&#10;&#9;&#9;&#9;c6.016,0,11.752-3.643,14.06-9.68c2.29-6,8-9.69,14.07-9.69c3.551,0,5.135,1.068,7.09,1.54c7.171,1.837,14.948-1.942,17.73-9.23&#10;&#9;&#9;&#9;c2.653-6.632,8.993-10.222,15.36-9.63"
      />
      <path
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        d="&#10;&#9;&#9;&#9;M114.09,382.66c0.973,0.288,2.952,1.28,6.18,1.28c6.07,0,11.78-3.69,14.07-9.69c2.29-6,8.01-9.69,14.07-9.69&#10;&#9;&#9;&#9;c4.605,0,5.534,1.709,9.85,1.97c6.213,0.414,12.476-3.218,14.97-9.65c2.891-7.576,11.422-11.716,19.44-8.69&#10;&#9;&#9;&#9;c7.75,2.977,16.481-0.911,19.45-8.69c1.05-2.75,2.82-5.02,5.02-6.66"
      />
      <path
        style="
          fill: none;
          stroke: #000000;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        "
        d="&#10;&#9;&#9;&#9;M114.09,428.31c3.44-1.43,7.41-1.59,11.15-0.16c7.75,2.977,16.481-0.911,19.45-8.69c2.29-6,8-9.69,14.07-9.69&#10;&#9;&#9;&#9;c4.886,0,5.854,2,10.74,2c6.07,0,11.78-3.69,14.07-9.69c2.29-5.99,8.01-9.68,14.07-9.68c4.907,0,5.856,2,10.75,2&#10;&#9;&#9;&#9;c3.118,0,6.213-0.998,8.75-2.81"
      />
      <g>
        <g>
          <g>
            <path
              style="
                fill: none;
                stroke: #000000;
                stroke-width: 15;
                stroke-linecap: round;
                stroke-miterlimit: 10;
              "
              d="M255.97,129.317&#10;&#9;&#9;&#9;&#9;&#9;&#9;c0,7.984-6.472,14.456-14.456,14.456c-7.984,0-14.456-6.472-14.456-14.456"
            />
            <path
              style="
                fill: none;
                stroke: #000000;
                stroke-width: 15;
                stroke-linecap: round;
                stroke-miterlimit: 10;
              "
              d="M284.881,129.317&#10;&#9;&#9;&#9;&#9;&#9;&#9;c0,7.984-6.472,14.456-14.456,14.456c-7.984,0-14.456-6.472-14.456-14.456"
            />
          </g>
        </g>
        <path
          style="
            fill: none;
            stroke: #000000;
            stroke-width: 15;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 10;
          "
          d="&#10;&#9;&#9;&#9;&#9;M208.213,117.501c0-7.602-6.163-13.765-13.765-13.765c-7.602,0-13.765,6.163-13.765,13.765"
        />
        <path
          style="
            fill: none;
            stroke: #000000;
            stroke-width: 15;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 10;
          "
          d="&#10;&#9;&#9;&#9;&#9;M303.727,117.501c0-7.602,6.163-13.765,13.765-13.765c7.602,0,13.765,6.163,13.765,13.765"
        />
      </g>
    </g>
  </g>
</svg>
`,IconPageFlat:`<svg
  id="Capa_1"
  enable-background="new 0 0 512 512"
  height="512"
  viewBox="0 0 512 512"
  width="512"
  xmlns="http://www.w3.org/2000/svg"
>
  <g>
    <path
      d="m449.945 61.818v388.363c0 34.144-27.684 61.818-61.818 61.818h-264.253c-34.134 0-61.818-27.674-61.818-61.818v-388.363c-.001-34.144 27.684-61.818 61.818-61.818h264.253c34.133 0 61.818 27.674 61.818 61.818z"
      fill="#e8ecf9"
    />
    <path
      d="m207.555 512h-83.681c-34.134 0-61.818-27.674-61.818-61.818v-388.364c-.001-34.144 27.684-61.818 61.818-61.818h79.993c-11.292 3.421-26.809 12.446-26.809 36.256v436.87c0 26.479 19.854 35.783 30.497 38.874z"
      fill="#d7ddf5"
    />
    <path
      d="m403.396 62.004v139.751c0 8.541-6.924 15.455-15.455 15.455h-210.883l-51.556-21.729v-124.699l51.556-24.233h210.883c8.531 0 15.455 6.913 15.455 15.455z"
      fill="#c5ced6"
    />
    <path
      d="m177.058 46.549v170.66h-52.999c-8.531 0-15.455-6.913-15.455-15.455v-139.75c0-8.541 6.924-15.455 15.455-15.455z"
      fill="#abb6c4"
    />
    <path
      d="m217.209 279.213v8.036l-40.151 41.769-8.809 9.17-59.644 4.307 12.333-53.195 56.121-25.541h24.696c8.541-.001 15.454 6.923 15.454 15.454z"
      fill="#c5ced6"
    />
    <path
      d="m124.059 263.758h52.999v65.26l-8.809 9.17-59.644 4.307v-63.281c-.001-8.532 6.923-15.456 15.454-15.456z"
      fill="#abb6c4"
    />
    <path
      d="m217.209 334.365v60.407l-40.151 43.438-4.204 4.543-64.25-8.634 8.573-21.379-8.573-26.551 50.743-51.824z"
      fill="#c5ced6"
    />
    <path
      d="m177.058 334.365v103.845l-4.204 4.543-64.25-8.634v-47.93l50.743-51.824z"
      fill="#abb6c4"
    />
    <path
      d="m217.209 287.249v47.116c-2.823 1.731-5.121 4.368-6.388 7.696-2.359 6.182-8.253 9.984-14.496 9.984-1.844 0-3.719-.33-5.543-1.03-.546-.206-1.092-.381-1.638-.525-1.298-.34-2.596-.505-3.895-.505-2.916 0-5.749.824-8.191 2.339l-11.045-14.888 11.045-32.29c1.03.165 2.061.433 3.07.824.587.227 1.175.412 1.772.556 1.247.319 2.514.474 3.771.474 6.244 0 12.137-3.802 14.496-9.984.082-.206.165-.412.258-.608 2.493-5.821 8.191-9.376 14.239-9.376.845.001 1.69.073 2.545.217z"
      fill="#808fa4"
    />
    <path
      d="m177.058 305.146v47.178c-2.782 1.731-5.049 4.348-6.305 7.645-.196.505-.402.989-.649 1.453-2.669 5.316-8.108 8.521-13.847 8.521-.309 0-.618-.01-.927-.031-1.535-.093-3.091-.412-4.605-.999-1.824-.701-3.699-1.03-5.543-1.03-6.244 0-12.137 3.802-14.496 9.984s-8.242 9.984-14.496 9.984c-1.834 0-3.709-.33-5.533-1.03-.68-.258-1.36-.474-2.05-.628v-43.695c5.038-1.02 9.458-4.523 11.426-9.674 2.359-6.182 8.253-9.984 14.496-9.984 1.844 0 3.709.33 5.533 1.03 1.824.701 3.709 1.03 5.553 1.03 1.113 0 2.226-.124 3.297-.361 2.895-.629 5.574-2.081 7.686-4.193 1.494-1.494 2.699-3.318 3.503-5.419 2.359-6.182 8.242-9.984 14.496-9.984.813-.003 1.637.058 2.461.203z"
      fill="#64768e"
    />
    <path
      d="m217.209 394.772v55.224c0 8.541-6.913 15.455-15.455 15.455h-24.696l-15.516-24.284 15.516-28.426c1.885-1.618 3.4-3.719 4.348-6.202 2.359-6.172 8.253-9.973 14.496-9.973 1.844 0 3.719.33 5.543 1.03 1.824.701 3.689 1.03 5.533 1.03 1.175 0 2.349-.134 3.472-.402h.01c2.494-.578 4.822-1.762 6.749-3.452z"
      fill="#808fa4"
    />
    <path
      d="m166.91 416.522c3.74 0 7.346-1.36 10.148-3.781v52.71h-52.999c-8.531 0-15.455-6.913-15.455-15.455v-15.877c3.802-1.968 8.397-2.37 12.704-.721 1.824.701 3.699 1.03 5.543 1.03 6.244 0 12.137-3.802 14.496-9.984s8.242-9.984 14.496-9.984c1.834 0 3.709.33 5.533 1.03 1.824.702 3.7 1.032 5.534 1.032z"
      fill="#64768e"
    />
    <path
      d="m403.396 351.612v98.384c0 8.541-6.924 15.455-15.455 15.455h-69.051l-55.132-93.686v-92.552c0-8.531 6.924-15.455 15.455-15.455h62.91z"
      fill="#808fa4"
    />
    <path
      d="m380.121 333.572-61.231 131.879h-39.677c-8.531 0-15.455-6.913-15.455-15.455v-78.231l77.572-53.699z"
      fill="#abb6c4"
    />
    <path
      d="m403.396 279.213v72.4c-7.058 3.359-14.95 5.234-23.275 5.234-3.534 0-6.996-.34-10.344-.989-17.34-3.338-31.744-14.929-38.956-30.518-3.215-6.924-5.007-14.651-5.007-22.79 0-15.197 6.244-28.941 16.31-38.791h45.818c8.53-.001 15.454 6.923 15.454 15.454z"
      fill="#c5ced6"
    />
    <g>
      <g>
        <ellipse
          cx="172.744"
          cy="147.233"
          fill="#fff"
          rx="30.72"
          ry="24.464"
        />
        <ellipse
          cx="339.256"
          cy="147.233"
          fill="#fff"
          rx="30.72"
          ry="24.464"
        />
        <path
          d="m285.787 117.781c-4.268 0-7.727 3.46-7.727 7.727 0 3.952-3.215 7.166-7.166 7.166s-7.166-3.215-7.166-7.166c0-4.268-3.46-7.727-7.727-7.727-4.268 0-7.727 3.46-7.727 7.727 0 3.952-3.215 7.166-7.166 7.166-3.952 0-7.166-3.215-7.166-7.166 0-4.268-3.46-7.727-7.727-7.727-4.268 0-7.727 3.46-7.727 7.727 0 12.473 10.148 22.621 22.621 22.621 5.701 0 10.911-2.124 14.894-5.616 3.982 3.492 9.193 5.616 14.894 5.616 12.473 0 22.621-10.148 22.621-22.621-.003-4.267-3.463-7.727-7.731-7.727z"
          fill="#495560"
        />
      </g>
      <g>
        <path
          d="m206.795 121.062c-4.268 0-7.727-3.46-7.727-7.727 0-3.559-2.896-6.454-6.455-6.454s-6.455 2.895-6.455 6.454c0 4.268-3.46 7.727-7.727 7.727-4.268 0-7.727-3.46-7.727-7.727 0-12.081 9.829-21.909 21.91-21.909s21.91 9.828 21.91 21.909c-.001 4.267-3.461 7.727-7.729 7.727z"
          fill="#495560"
        />
      </g>
      <g>
        <path
          d="m333.569 121.062c-4.268 0-7.727-3.46-7.727-7.727 0-3.559-2.896-6.454-6.455-6.454s-6.455 2.895-6.455 6.454c0 4.268-3.46 7.727-7.727 7.727-4.268 0-7.727-3.46-7.727-7.727 0-12.081 9.829-21.909 21.91-21.909s21.91 9.828 21.91 21.909c-.001 4.267-3.461 7.727-7.729 7.727z"
          fill="#495560"
        />
      </g>
    </g>
  </g>
</svg>
`,IconPalette:`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-palette"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path
    d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25"
  />
  <path d="M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
</svg>
`,IconPencil:`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-pencil"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
  <path d="M13.5 6.5l4 4" />
</svg>
`,IconPencilCog:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-pencil-cog"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
  <path d="M13.5 6.5l4 4" />
  <path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M19.001 15.5v1.5" />
  <path d="M19.001 21v1.5" />
  <path d="M22.032 17.25l-1.299 .75" />
  <path d="M17.27 20l-1.3 .75" />
  <path d="M15.97 17.25l1.3 .75" />
  <path d="M20.733 20l1.3 .75" />
</svg>
`,IconPhoto:`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-photo"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M15 8h.01" />
  <path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z" />
  <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5" />
  <path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3" />
</svg>
`,IconPhotoOff:`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-photo-off"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M15 8h.01" />
  <path
    d="M7 3h11a3 3 0 0 1 3 3v11m-.856 3.099a2.991 2.991 0 0 1 -2.144 .901h-12a3 3 0 0 1 -3 -3v-12c0 -.845 .349 -1.608 .91 -2.153"
  />
  <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5" />
  <path d="M16.33 12.338c.574 -.054 1.155 .166 1.67 .662l3 3" />
  <path
    d="M3 3l18 18"
    color="orange"
  />
</svg>
`,IconPin:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-pin"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M15 4.5l-4 4l-4 1.5l-1.5 1.5l7 7l1.5 -1.5l1.5 -4l4 -4" />
  <path d="M9 15l-4.5 4.5" />
  <path d="M14.5 4l5.5 5.5" />
</svg>
`,IconPlayerPause:`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-player-pause"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M6 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
  <path d="M14 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
</svg>
`,IconPlayerPlay:`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-player-play"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M7 4v16l13 -8z" />
</svg>
`,IconRefresh:`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-refresh"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
  <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
</svg>
`,IconSettings:`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-settings"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path
    d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"
  />
  <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
</svg>
`,IconSettingsOff:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-settings-off"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path
    d="M9.451 5.437c.418 -.218 .75 -.609 .874 -1.12c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35c-.486 .118 -.894 .44 -1.123 .878m-.188 3.803c-.517 .523 -1.349 .734 -2.125 .262a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.472 -.774 -.262 -1.604 .259 -2.121"
  />
  <path d="M9.889 9.869a3 3 0 1 0 4.226 4.26m.592 -3.424a3.012 3.012 0 0 0 -1.419 -1.415" />
  <path d="M3 3l18 18" />
</svg>
`,IconSpacingVertical:`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-spacing-vertical"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M4 20v-2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v2" />
  <path d="M4 4v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
  <path d="M16 12h-8" />
</svg>
`,IconSun:`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-sun"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
  <path
    d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"
  />
</svg>
`,IconTrash:`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-trash"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M4 7l16 0" />
  <path d="M10 11l0 6" />
  <path d="M14 11l0 6" />
  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
</svg>
`,IconWorldCog:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-world-cog"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M21 12a9 9 0 1 0 -8.979 9" />
  <path d="M3.6 9h16.8" />
  <path d="M3.6 15h8.9" />
  <path d="M11.5 3a17 17 0 0 0 0 18" />
  <path d="M12.5 3a16.992 16.992 0 0 1 2.522 10.376" />
  <path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M19.001 15.5v1.5" />
  <path d="M19.001 21v1.5" />
  <path d="M22.032 17.25l-1.299 .75" />
  <path d="M17.27 20l-1.3 .75" />
  <path d="M15.97 17.25l1.3 .75" />
  <path d="M20.733 20l1.3 .75" />
</svg>
`,IconX:`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-x"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M18 6l-12 12" />
  <path d="M6 6l12 12" />
</svg>
`,IconZoom:`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-zoom"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
  <path d="M21 21l-6 -6" />
</svg>
`,IconZoomCancel:`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-zoom-cancel"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
  <path d="M8 8l4 4" />
  <path d="M12 8l-4 4" />
  <path d="M21 21l-6 -6" />
</svg>
`,IconZoomIn:`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-zoom-in"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
  <path d="M7 10l6 0" />
  <path d="M10 7l0 6" />
  <path d="M21 21l-6 -6" />
</svg>
`,IconZoomInArea:`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-zoom-in-area"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M15 13v4" />
  <path d="M13 15h4" />
  <path d="M15 15m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
  <path d="M22 22l-3 -3" />
  <path d="M6 18h-1a2 2 0 0 1 -2 -2v-1" />
  <path d="M3 11v-1" />
  <path d="M3 6v-1a2 2 0 0 1 2 -2h1" />
  <path d="M10 3h1" />
  <path d="M15 3h1a2 2 0 0 1 2 2v1" />
</svg>
`,IconZoomOut:`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-zoom-out"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
  <path d="M7 10l6 0" />
  <path d="M21 21l-6 -6" />
</svg>
`,IconZoomOutArea:`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-zoom-out-area"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M13 15h4" />
  <path d="M15 15m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
  <path d="M22 22l-3 -3" />
  <path d="M6 18h-1a2 2 0 0 1 -2 -2v-1" />
  <path d="M3 11v-1" />
  <path d="M3 6v-1a2 2 0 0 1 2 -2h1" />
  <path d="M10 3h1" />
  <path d="M15 3h1a2 2 0 0 1 2 2v1" />
</svg>
`,IconZoomPan:`<svg
  xmlns="http://www.w3.org/2000/svg"
  class="icon icon-tabler icon-tabler-zoom-pan"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  stroke-width="2"
  stroke="currentColor"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path
    stroke="none"
    d="M0 0h24v24H0z"
    fill="none"
  />
  <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M17 17l-2.5 -2.5" />
  <path d="M10 5l2 -2l2 2" />
  <path d="M19 10l2 2l-2 2" />
  <path d="M5 10l-2 2l2 2" />
  <path d="M10 19l2 2l2 -2" />
</svg>
`},Symbol.toStringTag,{value:"Module"}));function El(e){const t=/([^{}]+)\s*\{([^}]+)\}/g;return[...e.matchAll(t)].map(n=>{const o=n[1].trim(),i=n[2],r=/color:\s*([^;]+)/.exec(i);if(r){const a=r[1].trim();return{selectors:o.split(",").map(p=>p.trim().replace(/\s\s+/g," ")),color:a}}return null}).filter(n=>n!==null)}const Il=El(yl),Fn=new Map;for(const e of Il)for(const t of e.selectors){const n=t.match(/^\s*\.([^ ]+)\s*(.*)$/);if(!n)continue;const[,o,i]=n;let r=i.trim();r.startsWith(">")&&(r=r.substring(1).trim()),r===""&&(r="*"),Fn.has(o)||Fn.set(o,[]),Fn.get(o)?.push({subSelector:r,color:e.color})}const xl=new DOMParser,Al=new XMLSerializer;function Sl(e,t){const n=Fn.get(t);if(!n?.length)return e;const i=xl.parseFromString(e,"image/svg+xml").documentElement;if(i.querySelector("parsererror"))return console.error(`Error parsing SVG for ${t}`),e;for(const{subSelector:r,color:a}of n)try{i.querySelectorAll(r).forEach(p=>{p.setAttribute("stroke",a)})}catch(d){console.error(`Invalid selector "${r}" for ${t}`,d)}return Al.serializeToString(i)}const _l=Object.fromEntries(Object.keys(ur).map(e=>{const t=e.replace(/^Icon/,"").replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),n=ur[e],o=`icon-tabler-${t}`,i=Sl(n,o);return[e,i]})),{IconAdjustmentsHorizontal:Ml,IconArrowsHorizontal:Cl,IconArrowsLeftRight:Ol,IconArrowAutofitDown:Tl,IconArrowAutofitHeight:$l,IconArrowAutofitLeft:Ll,IconArrowAutofitRight:Rl,IconArrowAutofitWidth:Dl,IconArrowBigLeft:Pl,IconArrowBigRight:Nl,IconArrowsMove:zl,IconArrowsMoveVertical:Bl,IconArrowsVertical:Hl,IconBook:Fl,IconBookReturn:Gl,IconBookUpload:Vl,IconBookmark:Ul,IconBookmarkOff:Wl,IconBookmarks:jl,IconBoxAlignTop:Zl,IconCategory:Ql,IconCheck:ql,IconChevronLeft:Yl,IconChevronRight:Xl,IconAlertCircle:Kl,IconCircleCheck:Jl,IconCircleX:ec,IconHelp:tc,IconInfoCircle:nc,IconComic1:oc,IconComic1Flat:ic,IconComic2:rc,IconComic2Flat:ac,IconComic3:sc,IconComic3Flat:lc,IconDeviceFloppy:cc,IconDotsVertical:dc,IconEReader1:hc,IconEReader1Flat:uc,IconEReader2:pc,IconEReader2Flat:gc,IconExternalLink:mc,IconEye:fc,IconEyeOff:vc,IconFileDownload:bc,IconFilePercent:wc,IconHandClick:kc,IconKeyboard:yc,IconLayoutBottombar:Ec,IconLayoutBottombarInactive:Ic,IconLayoutSidebar:xc,IconLayoutSidebarInactive:Ac,IconLayoutSidebarRight:Sc,IconLayoutSidebarRightInactive:_c,IconListNumbers:Mc,IconLoader2:Cc,IconLocationCog:Oc,IconMenu2:Tc,IconMenuDeep:$c,IconMessage:Lc,IconMoon:Rc,IconPage:Dc,IconPageFlat:Pc,IconPalette:Nc,IconPencil:zc,IconPencilCog:Bc,IconPhoto:To,IconPhotoOff:$o,IconPin:Hc,IconPlayerPause:Fc,IconPlayerPlay:Gc,IconRefresh:Vc,IconSettings:Uc,IconSettingsOff:Wc,IconSpacingVertical:jc,IconSun:Zc,IconTrash:Qc,IconWorldCog:qc,IconX:Yc,IconZoom:Xc,IconZoomCancel:Kc,IconZoomIn:Jc,IconZoomInArea:e0,IconZoomOut:t0,IconZoomOutArea:n0,IconZoomPan:o0}=_l,pr=Object.freeze(Object.defineProperty({__proto__:null,IconAdjustmentsHorizontal:Ml,IconAlertCircle:Kl,IconArrowAutofitDown:Tl,IconArrowAutofitHeight:$l,IconArrowAutofitLeft:Ll,IconArrowAutofitRight:Rl,IconArrowAutofitWidth:Dl,IconArrowBigLeft:Pl,IconArrowBigRight:Nl,IconArrowsHorizontal:Cl,IconArrowsLeftRight:Ol,IconArrowsMove:zl,IconArrowsMoveVertical:Bl,IconArrowsVertical:Hl,IconBook:Fl,IconBookReturn:Gl,IconBookUpload:Vl,IconBookmark:Ul,IconBookmarkOff:Wl,IconBookmarks:jl,IconBoxAlignTop:Zl,IconCategory:Ql,IconCheck:ql,IconChevronLeft:Yl,IconChevronRight:Xl,IconCircleCheck:Jl,IconCircleX:ec,IconComic1:oc,IconComic1Flat:ic,IconComic2:rc,IconComic2Flat:ac,IconComic3:sc,IconComic3Flat:lc,IconDeviceFloppy:cc,IconDotsVertical:dc,IconEReader1:hc,IconEReader1Flat:uc,IconEReader2:pc,IconEReader2Flat:gc,IconExternalLink:mc,IconEye:fc,IconEyeOff:vc,IconFileDownload:bc,IconFilePercent:wc,IconHandClick:kc,IconHelp:tc,IconInfoCircle:nc,IconKeyboard:yc,IconLayoutBottombar:Ec,IconLayoutBottombarInactive:Ic,IconLayoutSidebar:xc,IconLayoutSidebarInactive:Ac,IconLayoutSidebarRight:Sc,IconLayoutSidebarRightInactive:_c,IconListNumbers:Mc,IconLoader2:Cc,IconLocationCog:Oc,IconMenu2:Tc,IconMenuDeep:$c,IconMessage:Lc,IconMoon:Rc,IconPage:Dc,IconPageFlat:Pc,IconPalette:Nc,IconPencil:zc,IconPencilCog:Bc,IconPhoto:To,IconPhotoOff:$o,IconPin:Hc,IconPlayerPause:Fc,IconPlayerPlay:Gc,IconRefresh:Vc,IconSettings:Uc,IconSettingsOff:Wc,IconSpacingVertical:jc,IconSun:Zc,IconTrash:Qc,IconWorldCog:qc,IconX:Yc,IconZoom:Xc,IconZoomCancel:Kc,IconZoomIn:Jc,IconZoomInArea:e0,IconZoomOut:t0,IconZoomOutArea:n0,IconZoomPan:o0},Symbol.toStringTag,{value:"Module"}));var i0=Object.defineProperty,r0=Object.getOwnPropertyDescriptor,Gn=(e,t,n,o)=>{for(var i=o>1?void 0:o?r0(t,n):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(i=(o?a(t,n,i):a(i))||i);return o&&i&&i0(t,n,i),i};let Rt=class extends X{constructor(){super(...arguments),this.name="",this.label="",this.size=""}render(){const e=kl(this.name),t=pr[e],n=this.size?`--mov-icon-size: ${this.size};`:"";return w`<span
      role=${this.label?"img":z}
      aria-label=${this.label||z}
      aria-hidden=${this.label?z:"true"}
      style=${n}
      >${hr(t)}</span
    >`}};Rt.styles=ve`
    :host {
      --mov-icon-size: 1rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      vertical-align: middle;
      line-height: 1;
    }
    :host([hidden]) {
      display: none;
    }
    svg {
      width: var(--mov-icon-size, 1rem);
      height: var(--mov-icon-size, 1rem);
      display: block;
      color: inherit; /* This will inherit from the host element */
    }
  `,Gn([k({type:String})],Rt.prototype,"name",2),Gn([k({type:String})],Rt.prototype,"label",2),Gn([k({type:String})],Rt.prototype,"size",2),Rt=Gn([te("mov-icon")],Rt);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const be=Jt(class extends Ln{constructor(e){if(super(e),e.type!==$n.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((o=>o!==""))));for(const o in t)t[o]&&!this.nt?.has(o)&&this.st.add(o);return this.render(t)}const n=e.element.classList;for(const o of this.st)o in t||(n.remove(o),this.st.delete(o));for(const o in t){const i=!!t[o];i===this.st.has(o)||this.nt?.has(o)||(i?(n.add(o),this.st.add(o)):(n.remove(o),this.st.delete(o)))}return Ke}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $e=e=>e??z,a0=`:host {
  display: inline-block;
  --mov-font-size-scale: 1;
  --mov-font-size-m: calc(1rem * var(--mov-font-size-scale));
  --mov-font-size-s: round(calc(var(--mov-font-size-m) / 1.125), 1px);
  --mov-font-size-l: round(calc(var(--mov-font-size-m) * 1.125 * 1.125), 1px);
  --mov-border-width-s: 0.0625rem;
  --mov-border-radius-m: 0.375rem;
  --mov-border-radius-pill: 9999px;
  --mov-transition-fast: 75ms;
  --mov-font-weight-action: 500;
  --mov-focus-ring: solid 0.1875rem var(--mov-color-fill-loud);
  --mov-focus-ring-offset: 0.0625rem;
  --mov-line-height-condensed: 1.2;
  --mov-form-control-padding-block: 0.75em;
  --mov-form-control-padding-inline: 1em;
  --mov-form-control-height: round(
    calc(2 * var(--mov-form-control-padding-block) + 1em * var(--mov-line-height-condensed)),
    1px
  );
}

:host([size="small"]) {
  font-size: var(--mov-font-size-s);
}
:host([size="medium"]) {
  font-size: var(--mov-font-size-m);
}
:host([size="large"]) {
  font-size: var(--mov-font-size-l);
}

.button {
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  user-select: none;
  white-space: nowrap;
  vertical-align: middle;
  transition-property: background, border, box-shadow, color;
  transition-duration: var(--mov-transition-fast);
  cursor: pointer;
  padding: 0 var(--mov-form-control-padding-inline);
  font-family: inherit;
  font-size: inherit;
  font-weight: var(--mov-font-weight-action);
  line-height: calc(var(--mov-form-control-height) - var(--mov-border-width-s) * 2);
  height: var(--mov-form-control-height);
  border-radius: var(--mov-border-radius-m);
  border-style: solid;
  border-width: var(--mov-border-width-s);
  background-color: var(--mov-color-fill-loud);
  color: var(--mov-color-on-loud);
  border-color: transparent;
}

/* Appearance modifiers */
:host([appearance~="plain"]) {
  .button {
    color: var(--mov-color-on-quiet);
    background-color: transparent;
    border-color: transparent;
  }
  @media (hover: hover) {
    .button:not(.disabled):not(.loading):hover {
      color: var(--mov-color-on-quiet);
      background-color: var(--mov-color-fill-quiet);
    }
  }
  .button:not(.disabled):not(.loading):active {
    color: var(--mov-color-on-quiet);
    background-color: color-mix(in oklab, var(--mov-color-fill-quiet), var(--mov-color-mix-active));
  }
}

:host([appearance~="outlined"]) {
  .button {
    color: var(--mov-color-on-quiet);
    background-color: transparent;
    border-color: var(--mov-color-border-loud);
  }
  @media (hover: hover) {
    .button:not(.disabled):not(.loading):hover {
      color: var(--mov-color-on-quiet);
      background-color: var(--mov-color-fill-quiet);
    }
  }
  .button:not(.disabled):not(.loading):active {
    color: var(--mov-color-on-quiet);
    background-color: color-mix(in oklab, var(--mov-color-fill-quiet), var(--mov-color-mix-active));
  }
}

:host([appearance~="filled"]) {
  .button {
    color: var(--mov-color-on-normal);
    background-color: var(--mov-color-fill-normal);
    border-color: transparent;
  }
  @media (hover: hover) {
    .button:not(.disabled):not(.loading):hover {
      color: var(--mov-color-on-normal);
      background-color: color-mix(
        in oklab,
        var(--mov-color-fill-normal),
        var(--mov-color-mix-hover)
      );
    }
  }
  .button:not(.disabled):not(.loading):active {
    color: var(--mov-color-on-normal);
    background-color: color-mix(
      in oklab,
      var(--mov-color-fill-normal),
      var(--mov-color-mix-active)
    );
  }
}

:host([appearance~="filled"][appearance~="outlined"]) .button {
  border-color: var(--mov-color-border-normal);
}

:host([appearance~="accent"]) {
  .button {
    color: var(--mov-color-on-loud);
    background-color: var(--mov-color-fill-loud);
    border-color: transparent;
  }
  @media (hover: hover) {
    .button:not(.disabled):not(.loading):hover {
      background-color: color-mix(in oklab, var(--mov-color-fill-loud), var(--mov-color-mix-hover));
    }
  }
  .button:not(.disabled):not(.loading):active {
    background-color: color-mix(in oklab, var(--mov-color-fill-loud), var(--mov-color-mix-active));
  }
}
/* Focus states */
.button:focus {
  outline: none;
}
.button:focus-visible {
  outline: var(--mov-focus-ring);
  outline-offset: var(--mov-focus-ring-offset);
}

/* Disabled state */
.button.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.button.disabled * {
  pointer-events: none;
}

/* Icon buttons */
.button.is-icon-button {
  outline-offset: 2px;
  width: var(--mov-form-control-height);
  aspect-ratio: 1;
}

/* Pill modifier */
:host([pill]) .button {
  border-radius: var(--mov-border-radius-pill);
}

.start,
.end {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  pointer-events: none;
}

.label {
  display: inline-block;
}
.is-icon-button .label {
  display: flex;
}

mov-icon[part~="caret"] {
  display: flex;
  align-self: center;
  align-items: center;
}
mov-icon[part~="caret"]::part(svg) {
  width: 0.875em;
  height: 0.875em;
}

.loading {
  position: relative;
  cursor: wait;
}
.loading .start,
.loading .label,
.loading .end,
.loading .caret {
  visibility: hidden;
}

.spinner {
  --indicator-color: currentColor;
  --track-color: color-mix(in oklab, currentColor, transparent 90%);
  position: absolute;
  font-size: 1em;
  height: 1em;
  width: 1em;
  top: calc(50% - 0.5em);
  left: calc(50% - 0.5em);
  border-radius: 50%;
  border: 2px solid var(--track-color);
  border-top-color: var(--indicator-color);
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

slot[name="start"]::slotted(*) {
  margin-inline-end: 0.75em;
}
slot[name="end"]::slotted(*),
.button:not(.visually-hidden-label) [part~="caret"] {
  margin-inline-start: 0.75em;
}
`;var s0=Object.defineProperty,l0=Object.getOwnPropertyDescriptor,ne=(e,t,n,o)=>{for(var i=o>1?void 0:o?l0(t,n):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(i=(o?a(t,n,i):a(i))||i);return o&&i&&s0(t,n,i),i};let ee=class extends X{constructor(){super(...arguments),this.isIconButton=!1,this.hasLabel=!1,this.hasStart=!1,this.hasEnd=!1,this.title="",this.appearance="accent",this.size="medium",this.withCaret=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type="button",this.form=null}handleClick(e){(this.disabled||this.loading)&&(e.preventDefault(),e.stopPropagation())}click(){this.button?.click()}focus(e){this.button?.focus(e)}blur(){this.button?.blur()}render(){const e=!!this.href,t={button:!0,"with-caret":this.withCaret,disabled:this.disabled,loading:this.loading,pill:this.pill,"has-label":this.hasLabel,"has-start":this.hasStart,"has-end":this.hasEnd,"is-icon-button":this.isIconButton},n=w`
      <slot
        name="start"
        @slotchange=${this.handleLabelSlotChange}
        part="start"
        class="start"
      ></slot>
      <slot
        @slotchange=${this.handleLabelSlotChange}
        part="label"
        class="label"
      ></slot>
      <slot
        name="end"
        @slotchange=${this.handleLabelSlotChange}
        part="end"
        class="end"
      ></slot>
      ${this.withCaret?w`<mov-icon
            part="caret"
            class="caret"
            name="IconChevronRight"
            style="transform: rotate(90deg)"
          ></mov-icon>`:""}
      ${this.loading?w`<span
            part="spinner"
            class="spinner"
          ></span>`:""}
    `;return e?w`
        <a
          part="base"
          class=${be(t)}
          href=${$e(this.href)}
          target=${$e(this.target)}
          title=${$e(this.title)}
          role="button"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          download=${$e(this.download)}
          @click=${this.handleClick}
        >
          ${n}
        </a>
      `:w`
        <button
          part="base"
          class=${be(t)}
          ?disabled=${this.disabled||this.loading}
          type=${$e(this.type)}
          title=${$e(this.title)}
          name=${$e(this.name)}
          value=${$e(this.value)}
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
        >
          ${n}
        </button>
      `}handleLabelSlotChange(){const e=this.labelSlot?.assignedNodes({flatten:!0})??[],t=e.filter(r=>r.nodeType===Node.ELEMENT_NODE),n=e.filter(r=>r.nodeType===Node.TEXT_NODE&&r.textContent?.trim()!==""),o=r=>["wa-icon","mov-icon","svg"].includes(r.localName),i=t.some(o);this.isIconButton=n.length===0&&i}};ee.styles=[_e(a0)],ne([mt(".button")],ee.prototype,"button",2),ne([mt("slot:not([name])")],ee.prototype,"labelSlot",2),ne([Te()],ee.prototype,"isIconButton",2),ne([Te()],ee.prototype,"hasLabel",2),ne([Te()],ee.prototype,"hasStart",2),ne([Te()],ee.prototype,"hasEnd",2),ne([k()],ee.prototype,"title",2),ne([k({reflect:!0})],ee.prototype,"appearance",2),ne([k({reflect:!0})],ee.prototype,"size",2),ne([k({attribute:"with-caret",type:Boolean,reflect:!0})],ee.prototype,"withCaret",2),ne([k({type:Boolean,reflect:!0})],ee.prototype,"disabled",2),ne([k({type:Boolean,reflect:!0})],ee.prototype,"loading",2),ne([k({type:Boolean,reflect:!0})],ee.prototype,"pill",2),ne([k()],ee.prototype,"type",2),ne([k({reflect:!0})],ee.prototype,"name",2),ne([k({reflect:!0})],ee.prototype,"value",2),ne([k({reflect:!0})],ee.prototype,"href",2),ne([k()],ee.prototype,"target",2),ne([k()],ee.prototype,"rel",2),ne([k()],ee.prototype,"download",2),ne([k({reflect:!0})],ee.prototype,"form",2),ee=ne([te("mov-button")],ee);var c0=Object.defineProperty,d0=Object.getOwnPropertyDescriptor,Ve=(e,t,n,o)=>{for(var i=o>1?void 0:o?d0(t,n):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(i=(o?a(t,n,i):a(i))||i);return o&&i&&c0(t,n,i),i};let Le=class extends X{constructor(){super(...arguments),this.mode="menu",this.active=!1,this.label="",this.icon="",this.activeIcon="",this.appearance="accent",this.size="medium",this.disabled=!1,this.loading=!1}connectedCallback(){super.connectedCallback(),this.label||(this.label=this._getDefaultLabel())}render(){const e=this.active?this.activeLabel??this.label:this.label,t={"two-icon-mode":["menu","custom","theme"].includes(this.mode),"single-icon-mode":["chevron","expand","play-pause"].includes(this.mode)};return w`
      <mov-button
        @click=${this._onClick}
        .appearance=${$e(this.appearance)}
        .size=${$e(this.size)}
        ?disabled=${$e(this.disabled)}
        ?loading=${$e(this.loading)}
        .title=${$e(this.title)}
        class=${be(t)}
        title=${e}
        aria-label=${e}
        aria-pressed=${this.active?"true":"false"}
        icon-only
      >
        ${this._renderIcons()}
      </mov-button>
    `}_getDefaultLabel(){switch(this.mode){case"menu":return"Toggle menu";case"chevron":return"Toggle expand";case"theme":return"Toggle theme";case"play-pause":return"Toggle play";case"expand":return"Toggle expand";case"custom":return"Toggle";default:return"Toggle"}}_getIcons(){switch(this.mode){case"menu":return{inactive:"menu-2",active:"x"};case"chevron":return{inactive:"chevron-right",active:"chevron-right"};case"theme":return{inactive:"moon",active:"sun"};case"play-pause":return{inactive:"player-play",active:"player-pause"};case"expand":return{inactive:"arrow-autofit-down",active:"arrow-autofit-down"};case"custom":return{inactive:this.icon,active:this.activeIcon};default:return{inactive:"",active:""}}}_renderIcons(){const e=this._getIcons();return e.inactive?this.mode==="chevron"?w`<mov-icon
        class="chevron-icon"
        name=${e.inactive}
      ></mov-icon>`:this.mode==="expand"?w`<mov-icon
        class="expand-icon"
        name=${e.inactive}
      ></mov-icon>`:this.mode==="play-pause"?w`<mov-icon
        class="play-pause-icon"
        name=${this.active?e.active:e.inactive}
      ></mov-icon>`:w`
      <mov-icon
        class="inactive-icon"
        name=${e.inactive}
      ></mov-icon>
      <mov-icon
        class="active-icon"
        name=${e.active}
      ></mov-icon>
    `:z}_onClick(){if(this.disabled||this.loading)return;const e=this.active;this.active=!this.active,this.dispatchEvent(new CustomEvent("toggle",{detail:{value:this.active,oldValue:e,mode:this.mode},bubbles:!0,composed:!0}))}toggle(){this._onClick()}setActive(e){this.active=e}};Le.styles=ve`
    :host {
      display: inline-flex;
      vertical-align: middle;
    }

    /* Base button styling */
    mov-button {
      position: relative;
    }

    /* Single icon modes - simple rotation in place */
    .single-icon-mode mov-icon {
      transition: transform 0.3s ease;
      display: block;
    }

    .chevron-icon {
      transform: rotate(0deg);
    }

    :host([active]) .chevron-icon {
      transform: rotate(90deg);
    }

    .expand-icon {
      transform: rotate(0deg);
    }

    :host([active]) .expand-icon {
      transform: rotate(180deg);
    }

    /* Two icon modes - positioned for smooth swap */
    .two-icon-mode {
      position: relative;
    }

    .two-icon-mode mov-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition:
        opacity 0.25s ease,
        transform 0.3s ease;
    }

    /* Default state: inactive visible, active hidden */
    .inactive-icon {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }

    .active-icon {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.8);
    }

    /* Active state: inactive hidden, active visible */
    :host([active]) .inactive-icon {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.8);
    }

    :host([active]) .active-icon {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }

    /* Play-pause uses single icon swap without positioning issues */
    .play-pause-icon {
      transition: opacity 0.2s ease;
      display: block;
    }

    /* Simple click feedback without disrupting layout */
    mov-button:active {
      transform: scale(0.96);
    }

    /* Loading state */
    :host([loading]) mov-icon {
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }

    /* Hover effects */
    mov-button:hover:not(:disabled) {
      filter: brightness(1.05);
    }

    /* Focus visible enhancement */
    mov-button:focus-visible {
      outline: 2px solid var(--mov-color-fill-loud, currentColor);
      outline-offset: 2px;
    }

    /* Ensure proper centering for all modes */
    mov-button.single-icon-mode {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    /* Fix icon sizing consistency */
    mov-icon {
      flex-shrink: 0;
    }
  `,Ve([k({type:String})],Le.prototype,"mode",2),Ve([k({type:Boolean,reflect:!0})],Le.prototype,"active",2),Ve([k({type:String})],Le.prototype,"label",2),Ve([k({type:String})],Le.prototype,"activeLabel",2),Ve([k({type:String})],Le.prototype,"icon",2),Ve([k({type:String})],Le.prototype,"activeIcon",2),Ve([k({type:String,reflect:!0})],Le.prototype,"appearance",2),Ve([k({type:String,reflect:!0})],Le.prototype,"size",2),Ve([k({type:Boolean})],Le.prototype,"disabled",2),Ve([k({type:Boolean,reflect:!0})],Le.prototype,"loading",2),Le=Ve([te("toggle-button")],Le);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gr="important",h0=" !"+gr,Qe=Jt(class extends Ln{constructor(e){if(super(e),e.type!==$n.ATTRIBUTE||e.name!=="style"||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce(((t,n)=>{const o=e[n];return o==null?t:t+`${n=n.includes("-")?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`}),"")}update(e,[t]){const{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const o of this.ft)t[o]==null&&(this.ft.delete(o),o.includes("-")?n.removeProperty(o):n[o]=null);for(const o in t){const i=t[o];if(i!=null){this.ft.add(o);const r=typeof i=="string"&&i.endsWith(h0);o.includes("-")||r?n.setProperty(o,r?i.slice(0,-11):i,r?gr:""):n[o]=i}}return Ke}}),u0=Object.fromEntries(Object.entries(pr).map(([e,t])=>[e,hr(t)])),{IconAdjustmentsHorizontal:dp,IconArrowsHorizontal:hp,IconArrowsLeftRight:up,IconArrowAutofitDown:pp,IconArrowAutofitHeight:p0,IconArrowAutofitLeft:gp,IconArrowAutofitRight:mp,IconArrowAutofitWidth:g0,IconArrowBigLeft:fp,IconArrowBigRight:vp,IconArrowsMove:bp,IconArrowsMoveVertical:wp,IconArrowsVertical:kp,IconBook:yp,IconBookReturn:Ep,IconBookUpload:Ip,IconBookmark:m0,IconBookmarkOff:f0,IconBookmarks:xp,IconBoxAlignTop:Ap,IconCategory:v0,IconCheck:Vn,IconChevronLeft:Sp,IconChevronRight:_p,IconAlertCircle:Mp,IconCircleCheck:Cp,IconCircleX:Op,IconHelp:Tp,IconInfoCircle:$p,IconComic1:Lp,IconComic1Flat:Rp,IconComic2:Dp,IconComic2Flat:Pp,IconComic3:Np,IconComic3Flat:zp,IconDeviceFloppy:Bp,IconDotsVertical:Hp,IconEReader1:Fp,IconEReader1Flat:Gp,IconEReader2:Vp,IconEReader2Flat:Up,IconExternalLink:Wp,IconEye:b0,IconEyeOff:w0,IconFileDownload:jp,IconFilePercent:Zp,IconHandClick:Qp,IconKeyboard:qp,IconLayoutBottombar:Yp,IconLayoutBottombarInactive:Xp,IconLayoutSidebar:Kp,IconLayoutSidebarInactive:Jp,IconLayoutSidebarRight:eg,IconLayoutSidebarRightInactive:tg,IconListNumbers:ng,IconLoader2:og,IconLocationCog:ig,IconMenu2:rg,IconMenuDeep:ag,IconMessage:sg,IconMoon:lg,IconPage:cg,IconPageFlat:dg,IconPalette:hg,IconPencil:ug,IconPencilCog:pg,IconPhoto:gg,IconPhotoOff:mg,IconPin:fg,IconPlayerPause:vg,IconPlayerPlay:bg,IconRefresh:k0,IconSettings:wg,IconSettingsOff:kg,IconSpacingVertical:yg,IconSun:Eg,IconTrash:Ig,IconWorldCog:xg,IconX:Lo,IconZoom:Ag,IconZoomCancel:y0,IconZoomIn:E0,IconZoomInArea:Sg,IconZoomOut:I0,IconZoomOutArea:_g,IconZoomPan:Mg}=u0;var x0=Object.defineProperty,A0=Object.getOwnPropertyDescriptor,ft=(e,t,n,o)=>{for(var i=o>1?void 0:o?A0(t,n):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(i=(o?a(t,n,i):a(i))||i);return o&&i&&x0(t,n,i),i};let Je=class extends X{constructor(){super(...arguments),this.color="#000000",this.size=26,this.radius="50%",this.contrastColor="#FFFFFF",this.checked=!1}willUpdate(e){e.has("color")&&(this.contrastColor=Tt(this.color)),e.has("selected")&&(this.checked=this.color.toLowerCase()===this.selected?.toLowerCase())}handleClick(){this.dispatchEvent(new CustomEvent("input",{detail:{value:this.color},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.color},bubbles:!0,composed:!0}))}render(){const e={width:`${this.size}px`,height:`${this.size}px`},t={"--radius":typeof this.radius=="number"?`${this.radius}px`:this.radius,"--color":this.color,"--contrast-color":this.contrastColor};return w`
      <div style=${Qe(e)}>
        <div
          class="swatch"
          style=${Qe(t)}
          @click=${this.handleClick}
        >
          <slot></slot>
          <span class="check-icon"> ${Vn} </span>
        </div>
      </div>
    `}};Je.styles=ve`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      position: relative;
      box-sizing: border-box;
      -webkit-tap-highlight-color: transparent;
    }

    .swatch {
      position: relative;
      width: 100%;
      height: 100%;
      border-radius: var(--radius);
      background-color: var(--color);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.15s ease;
      box-sizing: border-box;
      border: 1px solid var(--theme-border-color, rgba(0, 0, 0, 0.1));
      color: var(--contrast-color);
    }

    :host(:hover) .swatch {
      transform: scale(1.1);
    }

    ::slotted(*) {
      width: 60%;
      height: 60%;
    }

    .check-icon {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      color: var(--contrast-color);
      opacity: 0;
      transition: opacity 0.15s ease;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 16px;
      line-height: 1;
    }

    .check-icon svg {
      width: 60%;
      height: 60%;
    }

    :host([checked]) .check-icon {
      opacity: 1;
    }
  `,ft([k({type:String})],Je.prototype,"color",2),ft([k({type:String})],Je.prototype,"selected",2),ft([k({type:Number})],Je.prototype,"size",2),ft([k({type:String})],Je.prototype,"radius",2),ft([k({state:!0})],Je.prototype,"contrastColor",2),ft([k({type:Boolean,reflect:!0})],Je.prototype,"checked",2),Je=ft([te("color-swatch")],Je);function S0(e){const t=e.to("oklch"),n=t.get("oklch.h"),o=t.get("oklch.c"),i=t.get("oklch.l"),r=[.95,.9,.8,.7,.6,.5,.4,.3,.2,.1,.05],a=r.map(u=>new Color("oklch",[u,o,n]).toString({format:"hex"}));let d=-1,p=1/0;for(let u=0;u<r.length;u++){const h=Math.abs(r[u]-i);h<p&&(p=h,d=u)}return d!==-1&&(a[d]=e.toString({format:"hex"})),a.map(u=>u.toUpperCase())}function _0(e){const t=e.to("hsl"),n=[.97,.9,.8,.7,.6,.5,.4,.3,.2,.1,.05],o=[];for(const i of n){const r=t.clone();r.set("hsl.l",i*100),i>.8?r.set("hsl.s",a=>a*.4):i>.6?r.set("hsl.s",a=>a*.8):i<.3&&r.set("hsl.s",a=>Math.min(100,a*1.1)),o.push(r.toString({format:"hex"}).toUpperCase())}return o}function M0(e){const t=[],n=[95,90,80,70,60,50,40,30,20,10,5],o=e.to("hsl");for(const i of n)t.push(o.clone().set("hsl.l",i).toString({format:"hex"}).toUpperCase());return t}function C0(e){const t=new Array(11).fill(""),n=e.to("hsl"),o={lightest:{lightness:95,rotate:-10,saturate:-30},darkest:{lightness:10,rotate:10,saturate:10}},i=5,r=5,a=(o.lightest.lightness-50)/i,d=(50-o.darkest.lightness)/r,p=o.lightest.rotate/i,u=o.darkest.rotate/r,h=o.lightest.saturate/i,E=o.darkest.saturate/r;for(let y=1;y<=i;y++){const M=i-y,P=n.clone().set("hsl.l",j=>j+a*(y-.5)).set("hsl.h",j=>j+p*y).set("hsl.s",j=>j+h*y);t[M]=P.toString({format:"hex"})}t[5]=n.clone().toString({format:"hex"});for(let y=1;y<=r;y++){const M=i+y,P=n.clone().set("hsl.l",j=>j-d*(y-.5)).set("hsl.h",j=>j+u*y).set("hsl.s",j=>j+E*y);t[M]=P.toString({format:"hex"})}return t}function O0(e){const t=e.to("hsl"),[n,o,i]=t.coords,r=new Array(11);r[5]=e.toString({format:"hex"});for(let a=0;a<5;a++){const d=(5-a)/6,p=i+(100-i)*d,u=o-o*d;r[a]=new Color({space:"hsl",coords:[n,u,p]}).toString({format:"hex"})}for(let a=0;a<5;a++){const d=(a+1)/6,p=i-i*d,u=o+(100-o)*d;r[a+6]=new Color({space:"hsl",coords:[n,u,p]}).toString({format:"hex"})}return r}function mr(e,t="steps"){const n=Color.parse(e)?new Color(e):new Color(Ao.navy);switch(t){case"saturation":return _0(n);case"lightness":return M0(n);case"mantine":return O0(n);case"chakra":return C0(n);default:return S0(n)}}var T0=Object.defineProperty,$0=Object.getOwnPropertyDescriptor,vt=(e,t,n,o)=>{for(var i=o>1?void 0:o?$0(t,n):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(i=(o?a(t,n,i):a(i))||i);return o&&i&&T0(t,n,i),i};let et=class extends X{constructor(){super(...arguments),this.baseColor="#228be6",this.mode="steps",this.orientation="horizontal",this.value="",this.gradient=[]}willUpdate(e){(e.has("baseColor")||e.has("mode"))&&(this.gradient=mr(this.baseColor,this.mode)??[])}handleSwatchClick(e){this.value=e,this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}render(){return w`
      ${this.gradient.map(e=>{const t=this.selected&&e.toLowerCase()===this.selected.toLowerCase(),n=Tt(e);return w`
          <div
            class="swatch"
            ?checked=${t}
            title=${e}
            @click=${()=>this.handleSwatchClick(e)}
          >
            <div
              class="swatch-inner"
              style="--color: ${e}; --text-color: ${n}"
            >
              <span class="checkmark">${Vn}</span>
            </div>
          </div>
        `})}
    `}};et.styles=ve`
    :host {
      display: flex;
      gap: var(--palette-gap, 4px);
      align-items: center;
      justify-content: center;
    }

    .swatch {
      width: var(--swatch-size, 22px);
      height: var(--swatch-size, 22px);
      border-radius: var(--swatch-radius, 4px);
      border: 1px solid var(--theme-border-color, #ccc);
      transition: transform 0.15s ease;
      cursor: pointer;
      background-clip: content-box;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
    }
    .swatch-inner {
      width: 100%;
      height: 100%;
      border-radius: var(--swatch-radius, 4px);
      background-color: var(--color);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .checkmark {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      opacity: 0;
      transition: opacity 0.15s ease;
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: center;
      display: flex;
      color: var(--text-color);
      font-weight: bold;
      font-size: 16px;
      line-height: 1;
    }

    .checkmark svg {
      width: 60%;
      height: 60%;
    }
    .swatch[checked] .checkmark {
      opacity: 1;
    }
    .swatch:hover {
      transform: scale(1.1);
    }
  `,vt([k({type:String})],et.prototype,"baseColor",2),vt([k({type:String})],et.prototype,"mode",2),vt([k({type:String,reflect:!0})],et.prototype,"orientation",2),vt([k({type:String})],et.prototype,"selected",2),vt([k({type:String,reflect:!0})],et.prototype,"value",2),vt([Te()],et.prototype,"gradient",2),et=vt([te("color-palette")],et);var L0=Object.defineProperty,R0=Object.getOwnPropertyDescriptor,Ro=(e,t,n,o)=>{for(var i=o>1?void 0:o?R0(t,n):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(i=(o?a(t,n,i):a(i))||i);return o&&i&&L0(t,n,i),i};let sn=class extends X{constructor(){super(...arguments),this.value=""}handleColorClick(e){this.value=e.currentTarget.title,this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}render(){const e=Object.keys(le).filter(n=>!["dark","gray","zinc","neutral","stone"].includes(n)),t=[200,300,400,500,600,700,800,900,950];return e.map(n=>{const o=t.map(i=>{const r=le[n][i],a=Tt(r),d=this.selected?.toLowerCase()===r.toLowerCase();return w`
          <span
            title="${r}"
            class="${be({ThemeRadio:!0,selected:d})}"
            style="background-color: ${r}; color: ${a}"
            @click=${this.handleColorClick}
          >
            ${Vn}
          </span>
        `});return w` <div class="SwatchGroup">
        <span class="ColorName">${n}</span>
        <div class="Swatches">${o}</div>
      </div>`})}};sn.styles=ve`
    :host {
      display: flex;
      flex-direction: column;
      gap: 4px;
      width: 100%;
    }
    .SwatchGroup {
      display: grid;
      grid-template-columns: auto 1fr;
      align-items: center;
      column-gap: 8px;
    }
    .ColorName {
      font-size: 12px;
      color: var(--theme-text-color);
      text-transform: capitalize;
      min-width: 64px;
    }
    .Swatches {
      display: grid;
      grid-template-columns: repeat(9, 16px);
      gap: 8px;
      align-items: center;
    }
    .ThemeRadio {
      color: var(--mov-color-on-loud);
      height: 20px;
      width: 20px;
      border-radius: 3px;
      margin: 0;
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
    }
    .ThemeRadio:hover,
    .ThemeRadio:focus-visible {
      outline: 2px solid var(--theme-border-color);
      outline-offset: 1px;
    }
    .ThemeRadio.selected {
      box-shadow:
        0 0 0 2px var(--theme-body-background),
        0 0 0 3px var(--theme-text-color);
    }
    .ThemeRadio svg {
      width: 10px;
      height: 10px;
    }
    .ThemeRadio.selected .icon-tabler-check {
      display: inline;
    }
    .ThemeRadio:not(.selected) .icon-tabler-check {
      display: none;
    }
  `,Ro([k({type:String,reflect:!0})],sn.prototype,"value",2),Ro([k({type:String})],sn.prototype,"selected",2),sn=Ro([te("color-panel")],sn);var D0=Object.defineProperty,P0=Object.getOwnPropertyDescriptor,qe=(e,t,n,o)=>{for(var i=o>1?void 0:o?P0(t,n):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(i=(o?a(t,n,i):a(i))||i);return o&&i&&D0(t,n,i),i};let ze=class extends X{constructor(){super(...arguments),this.value="#228be6",this.swatches=null,this.mode="popup",this.opened=!1,this.popupDirection="left",this.sourceSpace="srgb",this.hsv={h:0,s:0,v:0},this.saturationThumbPosition={x:0,y:0},this.hueThumbPosition=0,this.isDraggingSaturation=!1,this.isDraggingHue=!1}connectedCallback(){super.connectedCallback(),this.updateStateFromValue(this.value),window.addEventListener("mousemove",this.handleDrag.bind(this)),window.addEventListener("mouseup",this.handleDragEnd.bind(this)),window.addEventListener("touchmove",this.handleDrag.bind(this),{passive:!1}),window.addEventListener("touchend",this.handleDragEnd.bind(this))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("mousemove",this.handleDrag.bind(this)),window.removeEventListener("mouseup",this.handleDragEnd.bind(this)),window.removeEventListener("touchmove",this.handleDrag.bind(this)),window.removeEventListener("touchend",this.handleDragEnd.bind(this)),window.removeEventListener("click",this.handleClickOutside.bind(this))}updated(e){e.has("mode")&&(this.mode==="popup"?window.addEventListener("click",this.handleClickOutside.bind(this)):window.removeEventListener("click",this.handleClickOutside.bind(this)))}willUpdate(e){e.has("value")&&this.updateStateFromValue(this.value),e.has("mode")&&this.mode==="inline"&&(this.opened=!1)}handleClickOutside(e){this.opened&&!e.composedPath().includes(this)&&(this.opened=!1)}togglePopup(){if(this.mode==="popup"){if(!this.opened){const e=this.getBoundingClientRect(),t=250;let n;const o=this.closest("mov-drawer");if(o?.shadowRoot){const i=o.shadowRoot.querySelector("dialog");i?n=i.getBoundingClientRect():n={left:0,right:window.innerWidth}}else n={left:0,right:window.innerWidth};e.left+t>n.right?e.right-t>n.left?this.popupDirection="right":this.popupDirection="left":this.popupDirection="left"}this.opened=!this.opened}}isSameColor(e,t){return!e||!t?!1:Color.deltaE(e,t,{method:"2000"})<1}renderCheckIcon(e){return w`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
        style=${Qe({stroke:Tt(e)})}
      >
        <path d="M5 12l5 5l10 -10" />
      </svg>
    `}renderPickerBody(){const e={backgroundColor:`hsl(${this.hsv.h}, 100%, 50%)`},t={h:this.hsv.h,s:this.hsv.s*100,v:this.hsv.v*100},n={top:`${this.saturationThumbPosition.y}%`,left:`${this.saturationThumbPosition.x}%`,backgroundColor:new Color({space:"hsv",coords:[t.h,t.s,t.v]}).toString({format:"hex"})},o={left:`${this.hueThumbPosition}%`};return w`
      <div
        class="saturation-panel"
        style=${Qe(e)}
        @mousedown=${this.handleSaturationDragStart.bind(this)}
        @touchstart=${this.handleSaturationDragStart.bind(this)}
      >
        <div class="saturation-overlay-1"></div>
        <div class="saturation-overlay-2"></div>
        <div
          class="saturation-thumb"
          style=${Qe(n)}
        ></div>
      </div>

      <div class="sliders">
        <div
          class="hue-slider"
          @mousedown=${this.handleHueDragStart.bind(this)}
          @touchstart=${this.handleHueDragStart.bind(this)}
        >
          <div
            class="hue-thumb"
            style=${Qe(o)}
          ></div>
        </div>
      </div>

      <div class="swatches">
        ${(this.swatches||Object.entries(le).filter(([i])=>!["dark","gray","zinc","neutral","stone"].includes(i)).map(([,i])=>i[600])).map(i=>w`
            <button
              class="swatch"
              title=${i}
              style=${Qe({backgroundColor:i})}
              @click=${()=>this.selectSwatch(i)}
            >
              ${this.isSameColor(this.value,i)?this.renderCheckIcon(i):""}
            </button>
          `)}
      </div>
    `}render(){const e={"picker-container":!0,popup:this.mode==="popup",right:this.popupDirection==="right"},t=this.renderPickerBody();return this.mode==="popup"?w`
        <div
          class="popup-trigger"
          @click=${this.togglePopup}
        >
          <div
            class="preview"
            style=${Qe({backgroundColor:this.value})}
          ></div>
        </div>
        ${this.opened?w`<div class=${be(e)}>${t}</div>`:""}
      `:w`<div class=${be(e)}>${t}</div>`}parseColor(e){try{return new Color(e)}catch(t){return console.error(`[color-picker] Invalid color value: "${e}"`,t),null}}colorToHsv(e){const n=e.to("srgb").to("hsv");let[o,i,r]=n.coords;return Number.isNaN(o)&&(o=this.hsv.h||0,i=0),i=Math.max(0,Math.min(100,i))/100,r=Math.max(0,Math.min(100,r))/100,{h:o,s:i,v:r}}updateStateFromValue(e){const t=this.parseColor(e);if(!t)return;this.sourceSpace=t.space.id;const n=this.colorToHsv(t);(n.h!==this.hsv.h||n.s!==this.hsv.s||n.v!==this.hsv.v)&&(this.hsv=n,this.updateThumbPositions())}dispatchInput(){this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value},bubbles:!0,composed:!0}))}dispatchChange(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}updateValueFromHsv(){const e={h:this.hsv.h,s:this.hsv.s*100,v:this.hsv.v*100},t=new Color({space:"hsv",coords:[e.h,e.s,e.v]});let n;try{const o=["srgb","hsl","hsv"];!this.sourceSpace||o.includes(this.sourceSpace)?n=t.to("srgb").toString({format:"hex"}):n=t.to(this.sourceSpace).toString({precision:5})}catch(o){console.error(`[color-picker] Could not convert color to space ${this.sourceSpace}`,o),n=t.to("srgb").toString({format:"hex"})}this.value!==n&&(this.value=n,this.dispatchInput())}updateThumbPositions(){this.saturationThumbPosition={x:this.hsv.s*100,y:(1-this.hsv.v)*100},this.hueThumbPosition=this.hsv.h/360*100}handleSaturationDragStart(e){e.preventDefault(),this.isDraggingSaturation=!0,this.saturationPanel=this.shadowRoot?.querySelector(".saturation-panel"),this.updateSaturation(e)}handleHueDragStart(e){e.preventDefault(),this.isDraggingHue=!0,this.hueSlider=this.shadowRoot?.querySelector(".hue-slider"),this.updateHue(e)}handleDrag(e){this.isDraggingSaturation&&this.updateSaturation(e),this.isDraggingHue&&this.updateHue(e)}handleDragEnd(){(this.isDraggingSaturation||this.isDraggingHue)&&this.dispatchChange(),this.isDraggingSaturation=!1,this.isDraggingHue=!1}getEventPosition(e){return"touches"in e?{clientX:e.touches[0].clientX,clientY:e.touches[0].clientY}:{clientX:e.clientX,clientY:e.clientY}}updateSaturation(e){if(!this.saturationPanel)return;const{clientX:t,clientY:n}=this.getEventPosition(e),o=this.saturationPanel.getBoundingClientRect(),i=Math.max(0,Math.min(t-o.left,o.width)),r=Math.max(0,Math.min(n-o.top,o.height));this.hsv.s=i/o.width,this.hsv.v=1-r/o.height,this.updateValueFromHsv(),this.updateThumbPositions()}updateHue(e){if(!this.hueSlider)return;const{clientX:t}=this.getEventPosition(e),n=this.hueSlider.getBoundingClientRect(),o=Math.max(0,Math.min(t-n.left,n.width));this.hsv.h=o/n.width*360,this.updateValueFromHsv(),this.updateThumbPositions()}selectSwatch(e){this.value=e,this.dispatchInput(),this.dispatchChange()}};ze.styles=ve`
    :host {
      display: inline-block;
      position: relative;
    }

    .picker-container {
      width: 250px;
      box-sizing: border-box;
    }

    .picker-container.popup {
      position: absolute;
      top: calc(100% + 4px);
      left: 0;
      z-index: 10;
      border: 1px solid var(--theme-border-color);
      border-radius: 8px;
      background: var(--theme-background-color);
      padding: 12px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    .picker-container.popup.right {
      left: auto;
      right: 0;
    }

    .saturation-panel {
      position: relative;
      width: 100%;
      height: 180px;
      border-radius: 8px;
      cursor: crosshair;
      -webkit-tap-highlight-color: transparent;
    }

    .saturation-overlay-1,
    .saturation-overlay-2 {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: inherit;
    }

    .saturation-overlay-1 {
      background: linear-gradient(to right, #fff, transparent);
    }

    .saturation-overlay-2 {
      background: linear-gradient(to top, #000, transparent);
    }

    .saturation-thumb {
      position: absolute;
      width: 16px;
      height: 16px;
      border: 2px solid #fff;
      border-radius: 50%;
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
      transform: translate(-8px, -8px);
      pointer-events: none;
    }

    .sliders {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-top: 12px;
    }

    .hue-slider {
      position: relative;
      width: 100%;
      height: 10px;
      border-radius: 5px;
      background: linear-gradient(to right, #f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00);
      cursor: pointer;
    }

    .hue-thumb {
      position: absolute;
      top: 50%;
      width: 16px;
      height: 16px;
      border: 2px solid #fff;
      border-radius: 50%;
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
      transform: translate(-8px, -50%);
      pointer-events: none;
    }

    .swatches {
      display: grid;
      grid-template-columns: repeat(10, 1fr);
      gap: 8px;
      margin-top: 12px;
    }

    .swatch {
      width: 100%;
      aspect-ratio: 1;
      border-radius: 4px;
      border: 1px solid #dee2e6;
      cursor: pointer;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      transition: transform 0.1s;
    }

    .swatch:hover {
      transform: scale(1.1);
    }

    .popup-trigger {
      width: 96px;
      height: 32px;
      border-radius: 4px;
      border: 1px solid var(--theme-background-color);
      padding: 4px;
      box-sizing: border-box;
      cursor: pointer;
      background-color: var(--theme-hightlight-color);
    }

    .preview {
      width: 100%;
      height: 100%;
      border-radius: 2px;
    }
  `,qe([k({type:String})],ze.prototype,"value",2),qe([k({type:Array})],ze.prototype,"swatches",2),qe([k({type:String})],ze.prototype,"mode",2),qe([Te()],ze.prototype,"opened",2),qe([Te()],ze.prototype,"popupDirection",2),qe([Te()],ze.prototype,"sourceSpace",2),qe([Te()],ze.prototype,"hsv",2),qe([Te()],ze.prototype,"saturationThumbPosition",2),qe([Te()],ze.prototype,"hueThumbPosition",2),ze=qe([te("color-picker")],ze);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fr=(e,t,n)=>{for(const o of t)if(o[0]===e)return(0,o[1])();return n?.()};var N0=Object.defineProperty,z0=Object.getOwnPropertyDescriptor,Ue=(e,t,n,o)=>{for(var i=o>1?void 0:o?z0(t,n):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(i=(o?a(t,n,i):a(i))||i);return o&&i&&N0(t,n,i),i};let tt=class extends X{constructor(){super(...arguments),this.value="",this.labelPosition="side",this.size="medium",this._options=[],this.resizeObserver=new ResizeObserver(()=>this.updateThumbPosition())}connectedCallback(){super.connectedCallback(),this.resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this)}handleClick(e,t){this.value=t,this.dispatchEvent(new CustomEvent("change",{detail:this.value,bubbles:!0,composed:!0}))}handleSlotChange(){this._options=this._slotEl.assignedNodes({flatten:!0}).filter(e=>e.nodeName==="SEGMENTED-CONTROL-OPTION").map(e=>({value:e.getAttribute("value")??"",label:e.getAttribute("label")??"",icon:e.getAttribute("icon")??void 0}))}firstUpdated(){this.handleSlotChange(),this.updateComplete.then(()=>this.updateThumbPosition())}updated(e){super.updated(e),(e.has("value")||e.has("_options")||e.has("labelPosition")||e.has("size"))&&Promise.resolve().then(()=>this.updateThumbPosition())}updateThumbPosition(){if(!this.thumb)return;const e=this.shadowRoot?.querySelector(".button.selected");if(e){const{offsetWidth:t,offsetHeight:n}=e,o=e.getBoundingClientRect(),i=this.shadowRoot?.querySelector(".segmented-control")?.getBoundingClientRect(),r=o.left-(i?.left??0),a=o.top-(i?.top??0);this.thumb.style.transform=`translate(${r}px, ${a}px)`,this.thumb.style.width=`${t}px`,this.thumb.style.height=`${n}px`}else this.thumb.style.width="0px",this.thumb.style.height="0px"}render(){return w`
      <div class="segmented-control">
        <div class="thumb"></div>
        ${this._options.map(e=>w`
            <div
              class="option"
              title="${this.labelPosition==="tooltip"?e.label:z}"
            >
              <button
                class="${be({button:!0,selected:this.value===e.value,bottom:this.labelPosition==="bottom",small:this.size==="small",medium:this.size==="medium",large:this.size==="large"})}"
                @click=${t=>this.handleClick(t,e.value)}
                role="radio"
                aria-checked="${this.value===e.value}"
              >
                ${e.icon?w`<mov-icon
                      name="${e.icon}"
                      .size=${fr(this.size,[["small",()=>"16px"],["medium",()=>"24px"],["large",()=>"36px"]],()=>this.size)}
                    ></mov-icon>`:z}
                ${this.labelPosition!=="tooltip"?w`<span>${e.label}</span>`:z}
              </button>
            </div>
          `)}
      </div>
      <div style="display: none;">
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};tt.styles=ve`
    :host {
      width: 100%;
      display: block;
    }
    .segmented-control {
      position: relative;
      display: flex;
      gap: 0.25rem;
      border-radius: 0.5rem;
      background-color: var(--theme-border-color);
      padding: 0.25rem;
      flex-wrap: wrap;
    }
    .thumb {
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 0.5rem;
      background-color: var(--mov-color-fill-loud);
      transition:
        transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
        width 0.3s cubic-bezier(0.4, 0, 0.2, 1),
        height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      z-index: 1;
    }
    .option {
      flex: 1;
      text-align: center;
      z-index: 2; /* Ensure button is above thumb */
      position: relative; /* Needed to correctly position the button */
    }

    .button {
      /* The button now acts as the interactive label */
      width: 100%;
      display: flex;
      cursor: pointer;
      align-items: center;
      justify-content: center;
      border-radius: 0.5rem;
      border: none;
      /* Default colors when not selected */
      color: var(--theme-text-color);
      background-color: transparent;
      transition: color 0.15s ease-in-out;
      flex-direction: row;
      gap: 0.25rem;
      padding: 0.5rem 0.75rem; /* Default padding (medium) */
      font-size: 1rem; /* Default font-size (medium) */
      box-sizing: border-box; /* Include padding/border in element's total width/height */
    }

    /* Selected State Styles - Driven by the 'selected' class */
    .button.selected {
      color: var(--mov-color-on-loud);
      font-weight: 600;
    }

    /* Size Variations */
    .button.small {
      padding: 0.25rem 0.5rem;
      font-size: 0.875rem;
    }
    .button.large {
      padding: 0.75rem 1rem;
      font-size: 1.125rem;
    }

    /* Label Position Variations */
    .button.bottom {
      flex-direction: column;
    }
    .button.bottom.small {
      padding: 0.25rem;
    }
    .button.bottom.medium {
      padding: 0.5rem;
    }
    .button.bottom.large {
      padding: 0.75rem;
    }
  `,Ue([k({type:String,reflect:!0})],tt.prototype,"value",2),Ue([k({type:String})],tt.prototype,"labelPosition",2),Ue([k({type:String})],tt.prototype,"size",2),Ue([Te()],tt.prototype,"_options",2),Ue([mt(".thumb")],tt.prototype,"thumb",2),Ue([mt("slot")],tt.prototype,"_slotEl",2),tt=Ue([te("segmented-control")],tt);let ln=class extends X{constructor(){super(...arguments),this.value="",this.label=""}createRenderRoot(){return this}};Ue([k({type:String,reflect:!0})],ln.prototype,"value",2),Ue([k({type:String,reflect:!0})],ln.prototype,"label",2),Ue([k({type:String,reflect:!0})],ln.prototype,"icon",2),ln=Ue([te("segmented-control-option")],ln);var B0=Object.defineProperty,H0=Object.getOwnPropertyDescriptor,bt=(e,t,n,o)=>{for(var i=o>1?void 0:o?H0(t,n):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(i=(o?a(t,n,i):a(i))||i);return o&&i&&B0(t,n,i),i};let nt=class extends X{constructor(){super(...arguments),this.name="",this.checked=!1,this.disabled=!1,this.design="graphical",this.textOn="ON",this.textOff="OFF"}toggleChecked(){this.disabled||(this.checked=!this.checked,this.dispatchEvent(new CustomEvent("change",{detail:{checked:this.checked}})))}render(){let e;return this.design==="graphical"?e=w`${this.checked?Vn:Lo}`:e=w`<span class="text">${this.checked?this.textOn:this.textOff}</span>`,w`
      <input
        type="checkbox"
        id="${this.name}"
        name="${this.name}"
        ?checked=${this.checked}
        ?disabled=${this.disabled}
        @click=${this.toggleChecked}
      />
      <label
        for="${this.name}"
        class="${be({switch:!0,[this.design]:!0})}"
      >
        <div class="knob">${e}</div>
      </label>
    `}};nt.styles=ve`
    :host {
      --switch-width: 3rem;
      --switch-height: 1.5rem;
      --knob-size: 1.25rem;
      display: inline-block;
    }

    input {
      display: none;
    }

    .switch {
      display: inline-block;
      position: relative;
      width: var(--switch-width);
      height: var(--switch-height);
      border-radius: var(--switch-height);
      background-color: #d7062a;
      border: 1px solid #d7062a;
      transition:
        background-color 0.3s,
        border-color 0.3s;
      cursor: pointer;
    }

    input:checked + .switch {
      background-color: #50ac5d;
      border-color: #50ac5d;
    }

    .switch.textual {
      background-color: var(--mov-color-on-loud);
      border-color: var(--mov-color-on-loud);
    }

    input:checked + .switch.textual {
      background-color: var(--mov-color-fill-loud);
      border-color: var(--mov-color-fill-loud);
    }

    input:disabled + .switch {
      background-color: #eee;
      border-color: #ccc;
      cursor: not-allowed;
    }

    .knob {
      position: absolute;
      top: 50%;
      left: 2px;
      transform: translateY(-50%);
      width: var(--knob-size);
      height: var(--knob-size);
      background-color: #fff;
      border-radius: 50%;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
      transition: left 0.3s;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.75rem;
      font-weight: bold;
      font-family: Arial;
      color: #333;
    }

    input:checked + .switch .knob {
      left: calc(100% - var(--knob-size) - 2px);
    }

    .switch:focus {
      outline: 2px solid #0a6ed1;
      outline-offset: 2px;
    }

    .icon {
      width: 1rem;
      height: 1rem;
      fill: none;
    }

    .text {
      font-size: 0.75rem;
      font-weight: bold;
      color: #333;
    }
  `,bt([k({type:String})],nt.prototype,"name",2),bt([k({type:Boolean,reflect:!0})],nt.prototype,"checked",2),bt([k({type:Boolean,reflect:!0})],nt.prototype,"disabled",2),bt([k({type:String,reflect:!0})],nt.prototype,"design",2),bt([k({type:String})],nt.prototype,"textOn",2),bt([k({type:String})],nt.prototype,"textOff",2),nt=bt([te("toggle-switch")],nt);var Un=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},cn={},ue={},vr;function F0(){return vr||(vr=1,Object.defineProperty(ue,"__esModule",{value:!0}),ue.BLANK_URL=ue.relativeFirstCharacters=ue.whitespaceEscapeCharsRegex=ue.urlSchemeRegex=ue.ctrlCharactersRegex=ue.htmlCtrlEntityRegex=ue.htmlEntitiesRegex=ue.invalidProtocolRegex=void 0,ue.invalidProtocolRegex=/^([^\w]*)(javascript|data|vbscript)/im,ue.htmlEntitiesRegex=/&#(\w+)(^\w|;)?/g,ue.htmlCtrlEntityRegex=/&(newline|tab);/gi,ue.ctrlCharactersRegex=/[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim,ue.urlSchemeRegex=/^.+(:|&colon;)/gim,ue.whitespaceEscapeCharsRegex=/(\\|%5[cC])((%(6[eE]|72|74))|[nrt])/g,ue.relativeFirstCharacters=[".","/"],ue.BLANK_URL="about:blank"),ue}var br;function G0(){if(br)return cn;br=1,Object.defineProperty(cn,"__esModule",{value:!0}),cn.sanitizeUrl=void 0;var e=F0();function t(a){return e.relativeFirstCharacters.indexOf(a[0])>-1}function n(a){var d=a.replace(e.ctrlCharactersRegex,"");return d.replace(e.htmlEntitiesRegex,function(p,u){return String.fromCharCode(u)})}function o(a){return URL.canParse(a)}function i(a){try{return decodeURIComponent(a)}catch{return a}}function r(a){if(!a)return e.BLANK_URL;var d,p=i(a.trim());do p=n(p).replace(e.htmlCtrlEntityRegex,"").replace(e.ctrlCharactersRegex,"").replace(e.whitespaceEscapeCharsRegex,"").trim(),p=i(p),d=p.match(e.ctrlCharactersRegex)||p.match(e.htmlEntitiesRegex)||p.match(e.htmlCtrlEntityRegex)||p.match(e.whitespaceEscapeCharsRegex);while(d&&d.length>0);var u=p;if(!u)return e.BLANK_URL;if(t(u))return u;var h=u.trimStart(),E=h.match(e.urlSchemeRegex);if(!E)return u;var y=E[0].toLowerCase().trim();if(e.invalidProtocolRegex.test(y))return e.BLANK_URL;var M=h.replace(/\\/g,"/");if(y==="mailto:"||y.includes("://"))return M;if(y==="http:"||y==="https:"){if(!o(M))return e.BLANK_URL;var P=new URL(M);return P.protocol=P.protocol.toLowerCase(),P.hostname=P.hostname.toLowerCase(),P.toString()}return M}return cn.sanitizeUrl=r,cn}var wr=G0(),Wn={exports:{}},V0=Wn.exports,kr;function U0(){return kr||(kr=1,(function(e,t){(function(n,o){o()})(V0,function(){function n(u,h){return typeof h>"u"?h={autoBom:!1}:typeof h!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),h={autoBom:!h}),h.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(u.type)?new Blob(["\uFEFF",u],{type:u.type}):u}function o(u,h,E){var y=new XMLHttpRequest;y.open("GET",u),y.responseType="blob",y.onload=function(){p(y.response,h,E)},y.onerror=function(){console.error("could not download file")},y.send()}function i(u){var h=new XMLHttpRequest;h.open("HEAD",u,!1);try{h.send()}catch{}return 200<=h.status&&299>=h.status}function r(u){try{u.dispatchEvent(new MouseEvent("click"))}catch{var h=document.createEvent("MouseEvents");h.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),u.dispatchEvent(h)}}var a=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof Un=="object"&&Un.global===Un?Un:void 0,d=a.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),p=a.saveAs||(typeof window!="object"||window!==a?function(){}:"download"in HTMLAnchorElement.prototype&&!d?function(u,h,E){var y=a.URL||a.webkitURL,M=document.createElement("a");h=h||u.name||"download",M.download=h,M.rel="noopener",typeof u=="string"?(M.href=u,M.origin===location.origin?r(M):i(M.href)?o(u,h,E):r(M,M.target="_blank")):(M.href=y.createObjectURL(u),setTimeout(function(){y.revokeObjectURL(M.href)},4e4),setTimeout(function(){r(M)},0))}:"msSaveOrOpenBlob"in navigator?function(u,h,E){if(h=h||u.name||"download",typeof u!="string")navigator.msSaveOrOpenBlob(n(u,E),h);else if(i(u))o(u,h,E);else{var y=document.createElement("a");y.href=u,y.target="_blank",setTimeout(function(){r(y)})}}:function(u,h,E,y){if(y=y||open("","_blank"),y&&(y.document.title=y.document.body.innerText="downloading..."),typeof u=="string")return o(u,h,E);var M=u.type==="application/octet-stream",P=/constructor/i.test(a.HTMLElement)||a.safari,j=/CriOS\/[\d]+/.test(navigator.userAgent);if((j||M&&P||d)&&typeof FileReader<"u"){var oe=new FileReader;oe.onloadend=function(){var Ie=oe.result;Ie=j?Ie:Ie.replace(/^data:[^;]*;/,"data:attachment/file;"),y?y.location.href=Ie:location=Ie,y=null},oe.readAsDataURL(u)}else{var Re=a.URL||a.webkitURL,pe=Re.createObjectURL(u);y?y.location=pe:location.href=pe,y=null,setTimeout(function(){Re.revokeObjectURL(pe)},4e4)}});a.saveAs=p.saveAs=p,e.exports=p})})(Wn)),Wn.exports}var W0=U0();function j0(e){switch(e){case"image/jpeg":return"jpg";case"image/png":return"png";case"image/webp":return"webp";case"image/gif":return"gif";case"image/bmp":return"bmp";default:return"png"}}async function Z0(e){if(!e.src)return null;if(typeof GM_xmlhttpRequest<"u")return new Promise(t=>{GM_xmlhttpRequest({method:"GET",url:e.src,responseType:"blob",onload:n=>{n.status===200?(O(`Got blob for page ${e.src} from GM_xmlhttpRequest`),t(n.response)):(O(`Failed to get blob for page ${e.src} from GM_xmlhttpRequest`,n.statusText),t(null))},onerror:n=>{O(`Failed to get blob for page ${e.src} from GM_xmlhttpRequest`,n),t(null)}})});try{const t=await fetch(e.src);if(t.ok)return O(`Got blob for page ${e.src} from fetch`),await t.blob()}catch(t){O(`Failed to get blob for page ${e.src} from fetch`,t)}return null}async function Q0(e){const t=e.ref?.value;if(!t)return null;try{const n=document.createElement("canvas"),o=n.getContext("2d");if(o)return n.width=t.naturalWidth,n.height=t.naturalHeight,o.drawImage(t,0,0),await new Promise(i=>{n.toBlob(r=>{r&&O(`Got blob for page ${e.src} from canvas`),i(r)},"image/png",1)})}catch(n){O(`Failed to get blob for page ${e.src} from canvas`,n)}return null}async function q0(e){if(e.blob)return O(`Got blob for page ${e.src} from cache`),e.blob;const t=await Z0(e)||await Q0(e);return t||O(`Failed to get blob for page ${e.src}`),t}async function Y0(){Z("download","working");const e=new JSZip,t=I("images")??{},n=I("manga"),o=Math.floor(Math.log10(n?.pages??1))+1,i=Object.entries(t).sort((a,d)=>Number(a[0])-Number(d[0])),r=[];for(const[a,d]of i)try{const p=await q0(d);if(p){const u=j0(p.type),h=`Page-${Number(a).toString().padStart(o,"0")}.${u}`;O(`${h} Added to Zip from Blob`),e.file(h,p,{createFolders:!0,compression:"DEFLATE"})}else r.push(d.src??a)}catch(p){O(`Error processing page ${a}`,p),r.push(d.src??a)}r.length>0&&O("Some images failed to download:",r),O("Generating Zip"),e.generateAsync({type:"blob"}).then(a=>{O("Download Ready");const d=`${n?.title??document.title}.zip`;W0.saveAs(a,d,{autoBom:!1})}).catch(a=>{O("Error generating zip",a)}).finally(()=>{Z("download",void 0)})}function yr(){I("download")!=="working"&&(O("Downloading Chapter"),Y0().catch(e=>O("Error downloading chapter",e)))}function X0(){nn("hidePageControls",e=>!e)}function dn(e){const t=e.target,n=t.getAttribute("value")??t.getAttribute("href");e.button!==1&&!e.ctrlKey&&(n&&n!=="#"?window.location.href=wr.sanitizeUrl(n):t.id==="series"&&window.history.back())}function K0(e){m("viewMode").startsWith("Fluid")?I("chapter").value?.scroll(e?.offsetLeft??0,e?.offsetTop??0):window?.scroll(e?.offsetLeft??0,e?.offsetTop??0)}Se.listen((e,t,n)=>{n==="scrollToPage"&&e.scrollToPage!==void 0&&(e.scrollToPage<=0?window.scrollTo(0,0):K0(I("images")?.[e.scrollToPage]?.ref?.value),setTimeout(()=>Z("scrollToPage",void 0),10))});function J0(e){const t=e.currentTarget.value;Z("scrollToPage",parseInt(t,10))}function ed(e){Z("scrollToPage",e)}function Er(){const e=I("chapter").value;if(m("viewMode").startsWith("Fluid")){const t=m("viewMode")==="FluidRTL"?-1:1;e?.scrollBy({top:0,left:m("scrollHeight")*t,behavior:"smooth"}),e&&e.scrollLeft+e.clientWidth>=e.scrollWidth-2&&(Z("autoScroll",!1),O("Finished auto scroll"))}else window.scrollBy({top:m("scrollHeight"),left:0,behavior:"smooth"}),window.scrollY+window.innerHeight>=document.documentElement.scrollHeight&&(Z("autoScroll",!1),O("Finished auto scroll"));I("autoScroll")&&requestAnimationFrame(Er)}function jn(){I("autoScroll")?(Z("autoScroll",!1),O("Stopped auto scroll")):(Z("autoScroll",!0),requestAnimationFrame(Er),O("Start auto scroll"))}let Zn=!1;const td=_.debounce(()=>{jn(),Zn=!1},500);function nd(){!Zn&&I("autoScroll")&&(jn(),Zn=!0),Zn&&!I("autoScroll")&&td()}function od(){window.addEventListener("wheel",_.throttle(nd,500))}function id(e,t){const n=document.createElement("style");return n.id=e,n.appendChild(document.createTextNode(t)),n}function rd(e,t){document.querySelector(`#${e}`)||(document.head??document.querySelector("head")).appendChild(id(e,t))}function ad(e){document.querySelectorAll(`style[id="${e}"]`).forEach(t=>{t.remove()})}function sd(e,t){ad(e),rd(e,t)}function ld(e,t){return Ot`
    <style id="${e}">
      ${t}
    </style>
  `}var cd=Object.defineProperty,dd=Object.getOwnPropertyDescriptor,Dt=(e,t,n,o)=>{for(var i=o>1?void 0:o?dd(t,n):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(i=(o?a(t,n,i):a(i))||i);return o&&i&&cd(t,n,i),i};let ot=class extends X{constructor(){super(...arguments),this.open=!1,this.mode="dialog",this.fullscreen=!1}static getIconName(e){switch(e){case"info":return"info-circle";case"warning":return"alert-circle";case"success":return"circle-check";case"error":return"circle-x";case"question":return"help";default:return""}}close(){this.open=!1}handleCancel(e){e.preventDefault(),this.close()}handleClick(e){this.mode!=="inline"&&e.target===this.dialog&&this.close()}updated(e){this.mode!=="inline"&&e.has("open")&&(this.open?(this.dialog.classList.remove("closing"),this.dialog.show(),this.dispatchEvent(new CustomEvent("open",{bubbles:!0,composed:!0}))):e.get("open")===!0&&(this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0})),this.dialog.classList.add("closing"),setTimeout(()=>{this.dialog.classList.remove("closing"),this.dialog.open&&this.dialog.close()},300)))}render(){return w`
      <div
        class="backdrop"
        @click=${this.close}
      ></div>
      <dialog
        part="dialog"
        @cancel=${this.handleCancel}
        @click=${this.handleClick}
      >
        <div
          class="header-bar"
          part="header-bar"
        >
          <div class="action-item">
            <slot name="header-actions"></slot>
          </div>
          <div class="header-content">
            <slot name="label"></slot>
          </div>
          <div
            class="close-button-container"
            part="close-button-container"
          >
            <button
              class="close-button"
              part="close-button"
              @click=${this.close}
              aria-label="Close"
            >
              ${Lo}
            </button>
          </div>
        </div>
        <div class="content-slot">
          ${this.icon?w`
                <div class="icon-container">
                  <mov-icon
                    .name=${ot.getIconName(this.icon)}
                    size="4rem"
                  ></mov-icon>
                </div>
              `:""}
          <slot></slot>
        </div>
        <slot name="footer"></slot>
      </dialog>
    `}};ot.styles=ve`
    :host {
      --panel-overlay-transition: opacity linear 0.25s;
      --panel-overlay-opacity: 0.5;
      --panel-z-index: 1000;
    }

    .backdrop {
      display: none;
      position: fixed;
      inset: 0;
      background-color: #000;
      opacity: 0;
      transition: var(--panel-overlay-transition);
      z-index: var(--panel-z-index);
    }

    :host([open]) .backdrop {
      display: block;
      opacity: var(--panel-overlay-opacity);
    }

    dialog {
      all: unset;
      background-color: var(--theme-background-color, #fff);
      color: var(--theme-text-color, #000);
      z-index: calc(var(--panel-z-index) + 1);
      position: fixed;
      box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);
      display: flex;
      flex-direction: column;
      visibility: hidden;
      max-width: 100vw;
      max-height: 100vh;
    }

    :host([open]:not([mode='inline'])) dialog,
    .closing {
      visibility: visible;
    }

    /* Header Styles */
    .header-bar {
      display: flex;
      align-items: center;
      padding: 0.75rem 1rem;
      border-bottom: 1px solid var(--theme-border-color, #e0e0e0);
      flex-shrink: 0;
    }
    .action-item {
      order: 1;
    }
    .header-content {
      order: 2;
      flex-grow: 1;
      text-align: center;
      font-weight: bold;
    }
    .close-button-container {
      order: 3;
      display: flex;
      justify-content: flex-end;
    }
    .action-item,
    .close-button-container {
      min-width: 40px;
    }
    .close-button {
      background: none;
      border: none;
      cursor: pointer;
      font-size: 1.5rem;
      line-height: 1;
      padding: 0;
      color: inherit;
    }
    .content-slot {
      display: block;
      padding: 1rem;
      overflow-y: auto;
      flex-grow: 1;
    }

    .icon-container {
      display: flex;
      justify-content: center;
      padding-block-end: 1rem;
      text-align: center;
    }
    :host([icon='success']) .icon-container mov-icon {
      color: var(--theme-color-success, #28a745);
    }
    :host([icon='error']) .icon-container mov-icon {
      color: var(--theme-color-danger, #dc3545);
    }
    :host([icon='warning']) .icon-container mov-icon {
      color: var(--theme-color-warning, #ffc107);
    }
    :host([icon='info']) .icon-container mov-icon {
      color: var(--theme-color-info, #17a2b8);
    }
    :host([icon='question']) .icon-container mov-icon {
      color: var(--theme-color-secondary, #6c757d);
    }

    /* --- MODE: INLINE --- */
    :host([mode='inline']) {
      display: block;
      width: 500px;
      max-width: 100%;
    }
    :host([mode='inline']) dialog {
      all: unset;
      background-color: var(--theme-background-color, #fff);
      color: var(--theme-text-color, #000);
      box-shadow: none;
      display: flex;
      flex-direction: column;
      visibility: visible;
      position: relative;
      width: 500px;
      max-width: 100%;
      border: 1px solid var(--theme-border-color, #e0e0e0);
      border-radius: 12px;
    }
    :host([mode='inline']) .backdrop {
      display: none;
    }
    :host([mode='inline']) .close-button {
      display: none; /* No close button in inline mode */
    }

    /* --- MODE: DIALOG --- */
    :host([mode='dialog']) {
      --panel-transition: transform 0.15s ease-out, opacity 0.15s ease-out;
    }
    :host([mode='dialog']) dialog {
      opacity: 0;
      transition: var(--panel-transition);
    }
    :host([mode='dialog'][open]) dialog {
      opacity: 1;
    }
    :host([mode='dialog']:not([fullscreen])) dialog {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0.9);
      border-radius: 12px;
      width: var(--dialog-width, 700px);
    }
    :host([mode='dialog']:not([fullscreen])[open]) dialog {
      transform: translate(-50%, -50%) scale(1);
    }
    :host([fullscreen]) {
      --panel-overlay-transition: none;
    }
    :host([fullscreen]) dialog {
      width: 100vw;
      height: 100vh;
      top: 0;
      left: 0;
      transform: translateY(2rem);
      border-radius: 0;
    }
    :host([fullscreen][open]) dialog {
      transform: translateY(0);
    }
  `,Dt([k({type:Boolean,reflect:!0})],ot.prototype,"open",2),Dt([k({type:String,reflect:!0})],ot.prototype,"mode",2),Dt([k({type:Boolean,reflect:!0})],ot.prototype,"fullscreen",2),Dt([k({type:String,reflect:!0})],ot.prototype,"icon",2),Dt([mt("dialog")],ot.prototype,"dialog",2),ot=Dt([te("mov-dialog")],ot);function Do(e){const t=()=>Z("dialog",null);e.timer&&setTimeout(t,e.timer),Z("dialog",{open:!0,icon:e.icon,title:e.title,content:w`<div style="padding: 1rem;">${dr(e.html)}</div>`,footer:w`
      <div
        slot="footer"
        style="display: flex; justify-content: flex-end; padding: 0.5rem 1rem 1rem;"
      >
        <mov-button @click=${t}>OK</mov-button>
      </div>
    `})}function hd(e){const t=e.currentTarget.value;qi(t==="true")}function ud(e){const t=e.currentTarget.value;se("locale",t)}function pd(e){const t=e.currentTarget.value;se("loadMode",t)}function gd(e){const t=e.detail.checked;se("fitWidthIfOversize",t)}function md(e){const t=e.currentTarget.value;se("navbar",t)}function fd(e){const t=e.currentTarget.value;se("pagination",t)}function vd(e){const t=e.detail.checked;se("downloadZip",t),t&&Do({title:f("ATTENTION"),html:f("AUTO_DOWNLOAD"),timer:1e4,icon:"info"})}function bd(e){const t=e.detail.checked;se("lazyLoadImages",t),t&&Do({title:f("WARNING"),html:f("LAZY_LOAD"),icon:"warning"})}function wd(e){const t=e.currentTarget.value;se("lazyStart",parseInt(t,10))}function kd(e){const t=parseInt(e.currentTarget.value,10);se("throttlePageLoad",t),t<100&&Do({title:f("SPEED_WARNING"),html:f("SPEED_WARNING_MESSAGE"),icon:"warning"})}function yd(e){const t=e.currentTarget.value;se("zoomStep",parseInt(t,10))}function Ed(e){const t=e.currentTarget.value;sd("MinZoom",`#MangaOnlineViewer .PageContent .PageImg {min-width: ${t}vw;}`),se("minZoom",parseInt(t,10))}function Id(e){const t=e.detail.checked;se("hidePageControls",t)}function xd(e){const t=e.currentTarget.value;se("header",t)}function Ad(e){const{value:t}=e.currentTarget;se("scrollHeight",parseInt(t,10))}function Ir(e){nn("scrollHeight",t=>{const n=t+e*25;if(n<=0)return 0;const o=Math.ceil(window.innerHeight/200)*100;return n>=o?o:n})}function Sd(){const e=m("navbar");return e==="left"||e==="right"?window.innerWidth-Ct:window.innerWidth}function _d(){return m("navbar")==="bottom"?window.innerHeight-Ct:window.innerHeight}function xr(e,t=m("zoomMode"),n=m("zoomValue")){const o=Sd(),i=_d();if(t==="width")e.width=o,e.height=void 0;else if(t==="height")e.width=void 0,e.height=i;else if(t==="percent"){const r=e.naturalWidth??e.ref?.value?.naturalWidth;e.width=r?r*(n/100):void 0,e.height=void 0}return e}function Pt(e=m("zoomMode"),t=m("zoomValue")){O("Zoom",e,t),_t("zoomMode",e),_t("zoomValue",t),e==="height"?Z("scrollToPage",I("currentPage")):gt("header");const n=I("images"),o=I("manga"),i={};for(let r=o?.begin??1;r<=(o?.pages??1);r++)i[r]=xr({...n?.[r]},e,t);Z("images",i)}function Nt(e,t=m("zoomValue")){return()=>{Pt(e,t)}}function Qn(e=1){return()=>{const t=m("zoomValue")+e*m("zoomStep");t>0&&t<500&&Pt("percent",t)}}function Md(e){const t=e.currentTarget.value;se("zoomMode",t)}function Cd(e){const t=parseInt(e.currentTarget.value,10);se("zoomValue",t),Pt("percent",t)}function Od(e){const t=parseInt(e.currentTarget.value,10);Pt("percent",t)}function it(e){return()=>{_t("viewMode",e),e.startsWith("Fluid")?(_t("zoomMode","height"),_t("header","click")):(gt("zoomMode"),gt("zoomValue"),gt("header")),Pt()}}function Td(e){const t=e.currentTarget.value;se("viewMode",t),it(t)()}function $d(e){const n=m("viewMode")==="FluidRTL"?-1:1;I("chapter").value?.scrollBy({left:.8*window.innerWidth*e*n,behavior:"smooth"})}function Ld(e){const n=I("currentPage")+e;n<0?Z("scrollToPage",0):n>(I("manga")?.pages??1)||Z("scrollToPage",n)}function Rd(e){window.scrollBy({top:.8*window.innerHeight*e,behavior:"smooth"})}function Ar(e){const t=m("viewMode"),n=m("zoomMode");O("Scrolling view",t,"zoom",n,"sign",e),t.startsWith("Fluid")?$d(e):n==="height"?Ld(e):Rd(e)}function hn(e){const t=I("manga")?.[e];t&&t!=="#"?location.href=wr.sanitizeUrl(t):e!=="next"&&history.back()}const Dd={SCROLL_UP(){Ar(-1)},SCROLL_DOWN(){Ar(1)},NEXT_CHAPTER(){hn("next")},PREVIOUS_CHAPTER(){hn("prev")},RETURN_CHAPTER_LIST(){hn("series")},ENLARGE(){Qn(1)()},REDUCE(){Qn(-1)()},RESTORE(){Nt("percent",100)()},FIT_WIDTH(){Nt("width")()},FIT_HEIGHT(){Nt("height")()},SETTINGS(){on("panel",e=>e==="none"?"settings":"none")},VIEW_MODE_WEBCOMIC(){it("WebComic")()},VIEW_MODE_VERTICAL(){it("Vertical")()},VIEW_MODE_LEFT(){it("FluidRTL")()},VIEW_MODE_RIGHT(){it("FluidLTR")()},SCROLL_START(){jn()},INCREASE_SPEED(){Ir(1)},DECREASE_SPEED(){Ir(-1)}};function Sr(){document.onkeydown=null,document.onkeyup=null,window.onkeydown=null,window.onkeyup=null,window.onload=null,document.body.onload=null,hotkeys.unbind(),Object.keys(m("keybinds")).forEach(e=>{hotkeys(m("keybinds")[e]?.join(",")??"",_.throttle(t=>{t.preventDefault(),t.stopImmediatePropagation(),t.stopPropagation(),Dd[e]()},100))})}var Pd=Object.defineProperty,Nd=Object.getOwnPropertyDescriptor,wt=(e,t,n,o)=>{for(var i=o>1?void 0:o?Nd(t,n):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(i=(o?a(t,n,i):a(i))||i);return o&&i&&Pd(t,n,i),i};let rt=class extends X{constructor(){super(...arguments),this.mode="disabled",this.currentPage=1,this.totalPages=1,this.startPage=1}get isFirstPage(){return this.currentPage<=this.startPage}get isLastPage(){return this.currentPage>=this.totalPages-(1-this.startPage)}renderSlider(){return w`
      <div class="slider-pagination">
        <button
          class="pagination-button"
          @click=${dn}
          value="${this.prev}"
          ?disabled=${Pe(this.prev)||this.prev==="#"}
        >
          <mov-icon name="arrow-big-left"></mov-icon>
          <div class="tooltip">Previous Chapter</div>
        </button>

        <button
          class="pagination-button"
          @click=${this.goToPreviousPage}
          ?disabled=${this.isFirstPage}
        >
          <mov-icon name="chevron-left"></mov-icon>
          <div class="tooltip">Previous Page</div>
        </button>

        <div class="slider-container">
          <input
            type="range"
            class="pagination-slider"
            min="${this.startPage}"
            max="${this.totalPages}"
            .value="${this.currentPage.toString()}"
            @input="${J0}"
          />
          <div class="slider-tooltip">${this.currentPage} / ${this.totalPages}</div>
        </div>

        <button class="pagination-button" @click=${this.goToNextPage} ?disabled=${this.isLastPage}>
          <mov-icon name="chevron-right"></mov-icon>
          <div class="tooltip">Next Page</div>
        </button>

        <button
          class="pagination-button"
          @click=${dn}
          value="${this.next}"
          ?disabled=${Pe(this.next)||this.next==="#"}
        >
          <mov-icon name="arrow-big-right"></mov-icon>
          <div class="tooltip">Next Chapter</div>
        </button>
      </div>
    `}renderSideArrows(){return w`
      <div class="arrows-pagination">
        <button
          class="side-arrow left"
          @click=${this.handleLeftArrowClick}
          ?disabled=${this.isFirstPage&&(Pe(this.prev)||this.prev==="#")}
        >
          <mov-icon name="chevron-left"></mov-icon>
        </button>
        <button
          class="side-arrow right"
          @click=${this.handleRightArrowClick}
          ?disabled=${this.isLastPage&&(Pe(this.next)||this.next==="#")}
        >
          <mov-icon name="chevron-right"></mov-icon>
        </button>
      </div>
    `}render(){if(this.mode==="disabled")return z;const e=this.mode==="slider"||this.mode==="both",t=this.mode==="side-arrows"||this.mode==="both";return w`
      ${e?this.renderSlider():z} ${t?this.renderSideArrows():z}
    `}handleLeftArrowClick(){this.isFirstPage?hn("prev"):this.goToPreviousPage()}handleRightArrowClick(){this.isLastPage?hn("next"):this.goToNextPage()}goToPreviousPage(){this.goToPage(this.currentPage-1)}goToNextPage(){this.goToPage(this.currentPage+1)}goToPage(e){Z("scrollToPage",e)}};rt.styles=ve`
    :host {
      display: contents; /* Use contents to not interfere with layout */
      font-family:
        system-ui,
        -apple-system,
        sans-serif;
    }

    .slider-pagination {
      display: flex;
      position: fixed;
      bottom: 30px;
      left: 0;
      right: 0;
      background-color: transparent;
      justify-content: center;
      align-items: center;
      gap: 3px;
      width: 100%;
      max-width: 100%;
      z-index: 100;
    }

    .pagination-button {
      background: var(--mov-color-fill-loud);
      border: 1px solid var(--mov-color-fill-loud);
      color: var(--mov-color-on-loud);
      padding: 8px 12px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
      transition: all 0.2s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 36px;
      height: 36px;
    }

    .pagination-button:hover:not(:disabled) {
      opacity: 0.8;
      transform: translateY(-1px);
    }

    .pagination-button:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    .pagination-button mov-icon {
      width: 16px;
      height: 16px;
      fill: currentColor;
    }

    .slider-container {
      position: relative;
      max-width: 1000px;
      width: inherit;
      margin: 0 5px;
    }

    .pagination-slider {
      -webkit-appearance: none;
      appearance: none;
      width: 100%;
      height: 4px;
      background: var(--mov-color-fill-loud);
      opacity: 0.5;
      border-radius: 2px;
      outline: none;
      cursor: pointer;
    }

    .pagination-slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 16px;
      height: 16px;
      background: white;
      border-radius: 50%;
      cursor: pointer;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
      border: 1px solid var(--mov-color-fill-loud);
    }

    .pagination-slider::-moz-range-thumb {
      width: 16px;
      height: 16px;
      background: white;
      border-radius: 50%;
      cursor: pointer;
      border: 1px solid var(--mov-color-fill-loud);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }

    .slider-tooltip {
      position: absolute;
      top: -35px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(0, 0, 0, 0.9);
      color: white;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 12px;
      white-space: nowrap;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.2s ease;
    }

    .slider-container:hover .slider-tooltip {
      opacity: 1;
    }

    .tooltip {
      position: absolute;
      bottom: 45px;
      left: 50%;
      transform: translateX(-50%);
      background: var(--theme-body-background);
      color: white;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 12px;
      white-space: nowrap;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.2s ease;
      z-index: 1001;
    }

    .pagination-button:hover .tooltip {
      opacity: 1;
    }

    .side-arrow {
      position: fixed;
      top: var(--header-height, 50px);
      bottom: 0;
      width: 10vw;
      height: calc(100vh - var(--header-height, 50px));
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 99;
      opacity: 0;
      transition: opacity 0.2s ease-in-out;
      -webkit-tap-highlight-color: transparent;
    }

    .side-arrow:hover {
      background-color: var(--mov-color-primary-alpha-10);
      opacity: 1;
    }

    .side-arrow.left {
      left: 0;
    }

    .side-arrow.right {
      right: 0;
    }

    .side-arrow:active {
      background-color: var(--mov-color-primary-alpha-20);
    }

    .side-arrow mov-icon {
      width: 48px;
      height: 48px;
      fill: var(--mov-color-on-primary);
      filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5));
    }

    .side-arrow:disabled {
      display: none;
    }
  `,wt([k({type:String})],rt.prototype,"mode",2),wt([k({type:Number})],rt.prototype,"currentPage",2),wt([k({type:Number})],rt.prototype,"totalPages",2),wt([k({type:Number})],rt.prototype,"startPage",2),wt([k({type:String})],rt.prototype,"next",2),wt([k({type:String})],rt.prototype,"prev",2),rt=wt([te("manga-pagination")],rt);var zd=Object.defineProperty,Bd=Object.getOwnPropertyDescriptor,qn=(e,t,n,o)=>{for(var i=o>1?void 0:o?Bd(t,n):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(i=(o?a(t,n,i):a(i))||i);return o&&i&&zd(t,n,i),i};let zt=class extends X{constructor(){super(...arguments),this.open=!1,this.placement="end"}close(){this.open=!1}handleCancel(e){e.preventDefault(),this.close()}handleClick(e){e.target===this.dialog&&this.close()}updated(e){e.has("open")&&(this.open?(this.dialog.classList.remove("closing"),this.dialog.show(),this.dispatchEvent(new CustomEvent("open",{bubbles:!0,composed:!0}))):e.get("open")===!0&&(this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0})),this.dialog.classList.add("closing"),setTimeout(()=>{this.dialog.classList.remove("closing"),this.dialog.open&&this.dialog.close()},300)))}render(){return w`
      <div
        class="backdrop"
        @click=${this.close}
      ></div>
      <dialog
        part="dialog"
        @cancel=${this.handleCancel}
        @click=${this.handleClick}
      >
        <div
          class="header-bar"
          part="header-bar"
        >
          <div class="action-item">
            <slot name="header-actions"></slot>
          </div>
          <div class="header-content">
            <slot name="label"></slot>
          </div>
          <div
            class="close-button-container"
            part="close-button-container"
          >
            <button
              class="close-button"
              part="close-button"
              @click=${this.close}
              aria-label="Close"
            >
              ${Lo}
            </button>
          </div>
        </div>
        <slot class="content-slot"></slot>
      </dialog>
    `}};zt.styles=ve`
    :host {
      --panel-overlay-transition: opacity linear 0.25s;
      --panel-overlay-opacity: 0.5;
      --panel-z-index: 1000;
      --panel-transition: transform 0.25s ease-out;
    }

    .backdrop {
      display: none;
      position: fixed;
      inset: 0;
      background-color: #000;
      opacity: 0;
      transition: var(--panel-overlay-transition);
      z-index: var(--panel-z-index);
    }

    :host([open]) .backdrop {
      display: block;
      opacity: var(--panel-overlay-opacity);
    }

    dialog {
      all: unset;
      background-color: var(--theme-background-color, #fff);
      color: var(--theme-text-color, #000);
      z-index: calc(var(--panel-z-index) + 1);
      position: fixed;
      box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);
      display: flex;
      flex-direction: column;
      visibility: hidden;
      max-width: 100vw;
      max-height: 100vh;
      width: 350px;
      top: 0;
      bottom: 0;
      height: 100%;
      transition: var(--panel-transition);
    }

    :host([open]) dialog,
    .closing {
      visibility: visible;
    }

    /* Header Styles */
    .header-bar {
      display: flex;
      align-items: center;
      padding: 0.75rem 1rem;
      border-bottom: 1px solid var(--theme-border-color, #e0e0e0);
      flex-shrink: 0;
    }
    .action-item {
      order: 1;
    }
    .header-content {
      order: 2;
      flex-grow: 1;
      text-align: center;
      font-weight: bold;
    }
    .close-button-container {
      order: 3;
      display: flex;
      justify-content: flex-end;
    }
    .action-item,
    .close-button-container {
      min-width: 40px;
    }
    .close-button {
      background: none;
      border: none;
      cursor: pointer;
      font-size: 1.5rem;
      line-height: 1;
      padding: 0;
      color: inherit;
    }
    .content-slot {
      display: block;
      padding: 1rem;
      overflow-y: auto;
      flex-grow: 1;
    }

    :host([placement='start']) dialog {
      left: 0;
      transform: translateX(-100%);
    }
    :host([placement='end']) dialog {
      right: 0;
      transform: translateX(100%);
    }
    :host([open]) dialog {
      transform: none;
    }
    :host([placement='end']) .action-item {
      order: 3;
    }
    :host([placement='end']) .header-content {
      order: 2;
    }
    :host([placement='end']) .close-button-container {
      order: 1;
      justify-content: flex-start;
    }
  `,qn([k({type:Boolean,reflect:!0})],zt.prototype,"open",2),qn([k({type:String,reflect:!0})],zt.prototype,"placement",2),qn([mt("dialog")],zt.prototype,"dialog",2),zt=qn([te("mov-drawer")],zt);var Hd=Object.defineProperty,Fd=Object.getOwnPropertyDescriptor,un=(e,t,n,o)=>{for(var i=o>1?void 0:o?Fd(t,n):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(i=(o?a(t,n,i):a(i))||i);return o&&i&&Hd(t,n,i),i};let pn=class extends X{constructor(){super(),this.open=!1,this.checkable=!1,this.boundClickHandler=this.handleClickOutside.bind(this)}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this.boundClickHandler)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this.boundClickHandler)}handleClickOutside(e){this.open&&!e.composedPath().includes(this)&&(this.open=!1)}toggle(){this.open=!this.open}render(){return w`
      <div
        @click=${this.toggle}
        class="trigger-wrapper"
      >
        <slot name="trigger"></slot>
      </div>
      <div class="dropdown-content">
        <slot></slot>
      </div>
    `}};pn.styles=ve`
    :host {
      position: relative;
      display: inline-block;
    }
    :host([checkable]) {
      --mov-dropdown-item-checkmark-display: inline-block;
    }
    .dropdown-content {
      display: none;
      position: absolute;
      background-color: var(--theme-background-color, #f9f9f9);
      min-width: 160px;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
      z-index: 1;
      list-style: none;
      padding: 0;
      margin: 0;
      border: 1px solid var(--theme-border-color, #ccc);
      border-radius: 5px;
    }
    :host([open]) .dropdown-content {
      display: block;
    }
  `,un([k({type:Boolean,reflect:!0})],pn.prototype,"open",2),un([k({type:Boolean,reflect:!0})],pn.prototype,"checkable",2),pn=un([te("mov-dropdown")],pn);let Yn=class extends X{constructor(){super(...arguments),this.selected=!1}render(){return w`
      <div class="item">
        <div class="item-content">
          <mov-icon
            class="check-icon"
            name="IconCheck"
          ></mov-icon>
          <slot name="icon"></slot>
          <slot></slot>
        </div>
        <slot name="details"></slot>
      </div>
    `}};Yn.styles=ve`
    :host {
      display: block;
    }
    .item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 12px;
      cursor: pointer;
      color: var(--theme-body-text-color);
      background-color: var(--theme-background-color);
      gap: 10px;
    }
    .item:hover {
      background-color: var(--mov-color-fill-normal);
      color: var(--mov-color-on-normal);
    }
    :host([selected]) .item {
      background-color: var(--mov-color-fill-normal);
      color: var(--mov-color-on-normal);
    }
    .item-content {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .check-icon {
      display: var(--mov-dropdown-item-checkmark-display, none);
      visibility: hidden;
      width: 1.2em;
      height: 1.2em;
    }
    :host([selected]) .check-icon {
      visibility: visible;
    }
    ::slotted([slot='details']) {
      font-size: 0.9em;
      opacity: 0.7;
    }
  `,un([k({type:Boolean,reflect:!0})],Yn.prototype,"selected",2),Yn=un([te("mov-dropdown-item")],Yn);const _r=`/**\r
 * KEYS.css\r
 *\r
 * A simple stylesheet for rendering beautiful keyboard-style elements.\r
 *\r
 * Author:  Michael H\xFCneburg\r
 * Website: http://michaelhue.com/keyscss\r
 * License: MIT License (see LICENSE.txt)\r
 */\r
\r
kbd,\r
.key {\r
  display: inline;\r
  display: inline-block;\r
  white-space: nowrap;\r
  min-width: 1em;\r
  padding: .3em .4em .2em .3em;\r
  font-style: normal;\r
  font-family: "Lucida Grande", Lucida, Arial, sans-serif;\r
  text-align: center;\r
  text-decoration: none;\r
  border-radius: .3em;\r
  border: none;\r
  background-color: #505050;\r
  background-color: gradient(linear, left top, left bottom, from(#3c3c3c), to(#505050));\r
  color: #fafafa;\r
  text-shadow: -1px -1px 0 #464646;\r
  -webkit-box-shadow: inset 0 0 1px #969696, inset 0 -0.05em 0.4em #505050, 0 0.1em 0 #1e1e1e, 0 0.1em 0.1em rgba(0, 0, 0, 0.3);\r
          box-shadow: inset 0 0 1px #969696, inset 0 -0.05em 0.4em #505050, 0 0.1em 0 #1e1e1e, 0 0.1em 0.1em rgba(0, 0, 0, 0.3);\r
  font-size: .85em;\r
  line-height: 1;\r
  cursor: default;\r
  -webkit-user-select: none;\r
     -moz-user-select: none;\r
      -ms-user-select: none;\r
          user-select: none;\r
}\r
kbd[title],\r
.key[title] {\r
  cursor: help;\r
}\r
kbd.dark,\r
.dark-keys kbd,\r
.key.dark,\r
.dark-keys .key {\r
  display: inline;\r
  display: inline-block;\r
  white-space: nowrap;\r
  min-width: 1em;\r
  padding: .3em .4em .2em .3em;\r
  font-style: normal;\r
  font-family: "Lucida Grande", Lucida, Arial, sans-serif;\r
  text-align: center;\r
  text-decoration: none;\r
  border-radius: .3em;\r
  border: none;\r
  background-color: #505050;\r
  background-color: gradient(linear, left top, left bottom, from(#3c3c3c), to(#505050));\r
  color: #fafafa;\r
  text-shadow: -1px -1px 0 #464646;\r
  -webkit-box-shadow: inset 0 0 1px #969696, inset 0 -0.05em 0.4em #505050, 0 0.1em 0 #1e1e1e, 0 0.1em 0.1em rgba(0, 0, 0, 0.3);\r
          box-shadow: inset 0 0 1px #969696, inset 0 -0.05em 0.4em #505050, 0 0.1em 0 #1e1e1e, 0 0.1em 0.1em rgba(0, 0, 0, 0.3);\r
}\r
kbd.light,\r
.light-keys kbd,\r
.key.light,\r
.light-keys .key {\r
  display: inline;\r
  display: inline-block;\r
  white-space: nowrap;\r
  min-width: 1em;\r
  padding: .3em .4em .2em .3em;\r
  font-style: normal;\r
  font-family: "Lucida Grande", Lucida, Arial, sans-serif;\r
  text-align: center;\r
  text-decoration: none;\r
  border-radius: .3em;\r
  border: none;\r
  background-color: #fafafa;\r
  background-color: gradient(linear, left top, left bottom, from(#d2d2d2), to(#ffffff));\r
  color: #323232;\r
  text-shadow: 0 0 2px #ffffff;\r
  -webkit-box-shadow: inset 0 0 1px #ffffff, inset 0 0 0.4em #c8c8c8, 0 0.1em 0 #828282, 0 0.11em 0 rgba(0, 0, 0, 0.4), 0 0.1em 0.11em rgba(0, 0, 0, 0.9);\r
          box-shadow: inset 0 0 1px #ffffff, inset 0 0 0.4em #c8c8c8, 0 0.1em 0 #828282, 0 0.11em 0 rgba(0, 0, 0, 0.4), 0 0.1em 0.11em rgba(0, 0, 0, 0.9);\r
}\r
kbd.so,\r
.so-keys kbd,\r
.key.so,\r
.so-keys .key {\r
  display: inline;\r
  display: inline-block;\r
  white-space: nowrap;\r
  min-width: 1em;\r
  padding: .3em .4em .2em .3em;\r
  font-style: normal;\r
  font-family: "Lucida Grande", Lucida, Arial, sans-serif;\r
  text-align: center;\r
  text-decoration: none;\r
  border-radius: .3em;\r
  border: none;\r
  margin: 0 .1em;\r
  padding: .1em .6em;\r
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;\r
  line-height: 1.4;\r
  color: #242729;\r
  text-shadow: 0 1px 0 #FFF;\r
  background-color: #e1e3e5;\r
  border: 1px solid #adb3b9;\r
  border-radius: 0.27272727em;\r
  -webkit-box-shadow: 0 1px 0 rgba(12, 13, 14, 0.2), 0 0 0 2px #FFF inset;\r
          box-shadow: 0 1px 0 rgba(12, 13, 14, 0.2), 0 0 0 2px #FFF inset;\r
}\r
kbd.github,\r
.github-keys kbd,\r
.key.github,\r
.github-keys .key {\r
  display: inline;\r
  display: inline-block;\r
  white-space: nowrap;\r
  min-width: 1em;\r
  padding: .3em .4em .2em .3em;\r
  font-style: normal;\r
  font-family: "Lucida Grande", Lucida, Arial, sans-serif;\r
  text-align: center;\r
  text-decoration: none;\r
  border-radius: .3em;\r
  border: none;\r
  padding: 0.27272727em 0.45454545em;\r
  font-size: 68.75%;\r
  line-height: 0.90909091;\r
  color: #444d56;\r
  vertical-align: middle;\r
  background-color: #fafbfc;\r
  border: solid 1px #c6cbd1;\r
  border-bottom-color: #959da5;\r
  border-radius: 0.27272727em;\r
  -webkit-box-shadow: inset 0 -1px 0 #959da5;\r
          box-shadow: inset 0 -1px 0 #959da5;\r
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;\r
  -webkit-box-sizing: border-box;\r
          box-sizing: border-box;\r
  text-shadow: none;\r
}\r
\r
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtleXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLHdEQUF3RDtFQUN4RCxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLHNGQUFzRjtFQUN0RixlQUFlO0VBQ2YsaUNBQWlDO0VBQ2pDLDhIQUFzSDtVQUF0SCxzSEFBc0g7RUFDdEgsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsMEJBQWtCO0tBQWxCLHVCQUFrQjtNQUFsQixzQkFBa0I7VUFBbEIsa0JBQWtCO0NBQ25CO0FBQ0Q7O0VBRUUsYUFBYTtDQUNkO0FBQ0Q7Ozs7RUFJRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQix3REFBd0Q7RUFDeEQsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixzRkFBc0Y7RUFDdEYsZUFBZTtFQUNmLGlDQUFpQztFQUNqQyw4SEFBc0g7VUFBdEgsc0hBQXNIO0NBQ3ZIO0FBQ0Q7Ozs7RUFJRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQix3REFBd0Q7RUFDeEQsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixzRkFBc0Y7RUFDdEYsZUFBZTtFQUNmLDZCQUE2QjtFQUM3Qix3SkFBZ0o7VUFBaEosZ0pBQWdKO0NBQ2pKO0FBQ0Q7Ozs7RUFJRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQix3REFBd0Q7RUFDeEQsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsNERBQTREO0VBQzVELGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLDBCQUEwQjtFQUMxQiwwQkFBMEI7RUFDMUIsNEJBQTRCO0VBQzVCLHdFQUFnRTtVQUFoRSxnRUFBZ0U7Q0FDakU7QUFDRDs7OztFQUlFLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLHdEQUF3RDtFQUN4RCxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsbUNBQW1DO0VBQ25DLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIsMEJBQTBCO0VBQzFCLDZCQUE2QjtFQUM3Qiw0QkFBNEI7RUFDNUIsMkNBQW1DO1VBQW5DLG1DQUFtQztFQUNuQyxzRkFBc0Y7RUFDdEYsK0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixrQkFBa0I7Q0FDbkIiLCJmaWxlIjoidG1wMi5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJrYmQsXG4ua2V5IHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG1pbi13aWR0aDogMWVtO1xuICBwYWRkaW5nOiAuM2VtIC40ZW0gLjJlbSAuM2VtO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtZmFtaWx5OiBcIkx1Y2lkYSBHcmFuZGVcIiwgTHVjaWRhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IC4zZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUwNTA1MDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20oIzNjM2MzYyksIHRvKCM1MDUwNTApKTtcbiAgY29sb3I6ICNmYWZhZmE7XG4gIHRleHQtc2hhZG93OiAtMXB4IC0xcHggMCAjNDY0NjQ2O1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMXB4ICM5Njk2OTYsIGluc2V0IDAgLTAuMDVlbSAwLjRlbSAjNTA1MDUwLCAwIDAuMWVtIDAgIzFlMWUxZSwgMCAwLjFlbSAwLjFlbSByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGZvbnQtc2l6ZTogLjg1ZW07XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxua2JkW3RpdGxlXSxcbi5rZXlbdGl0bGVdIHtcbiAgY3Vyc29yOiBoZWxwO1xufVxua2JkLmRhcmssXG4uZGFyay1rZXlzIGtiZCxcbi5rZXkuZGFyayxcbi5kYXJrLWtleXMgLmtleSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtaW4td2lkdGg6IDFlbTtcbiAgcGFkZGluZzogLjNlbSAuNGVtIC4yZW0gLjNlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWZhbWlseTogXCJMdWNpZGEgR3JhbmRlXCIsIEx1Y2lkYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAuM2VtO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MDUwNTA7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKCMzYzNjM2MpLCB0bygjNTA1MDUwKSk7XG4gIGNvbG9yOiAjZmFmYWZhO1xuICB0ZXh0LXNoYWRvdzogLTFweCAtMXB4IDAgIzQ2NDY0NjtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDFweCAjOTY5Njk2LCBpbnNldCAwIC0wLjA1ZW0gMC40ZW0gIzUwNTA1MCwgMCAwLjFlbSAwICMxZTFlMWUsIDAgMC4xZW0gMC4xZW0gcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxua2JkLmxpZ2h0LFxuLmxpZ2h0LWtleXMga2JkLFxuLmtleS5saWdodCxcbi5saWdodC1rZXlzIC5rZXkge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgbWluLXdpZHRoOiAxZW07XG4gIHBhZGRpbmc6IC4zZW0gLjRlbSAuMmVtIC4zZW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1mYW1pbHk6IFwiTHVjaWRhIEdyYW5kZVwiLCBMdWNpZGEsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogLjNlbTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSgjZDJkMmQyKSwgdG8oI2ZmZmZmZikpO1xuICBjb2xvcjogIzMyMzIzMjtcbiAgdGV4dC1zaGFkb3c6IDAgMCAycHggI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDFweCAjZmZmZmZmLCBpbnNldCAwIDAgMC40ZW0gI2M4YzhjOCwgMCAwLjFlbSAwICM4MjgyODIsIDAgMC4xMWVtIDAgcmdiYSgwLCAwLCAwLCAwLjQpLCAwIDAuMWVtIDAuMTFlbSByZ2JhKDAsIDAsIDAsIDAuOSk7XG59XG5rYmQuc28sXG4uc28ta2V5cyBrYmQsXG4ua2V5LnNvLFxuLnNvLWtleXMgLmtleSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtaW4td2lkdGg6IDFlbTtcbiAgcGFkZGluZzogLjNlbSAuNGVtIC4yZW0gLjNlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWZhbWlseTogXCJMdWNpZGEgR3JhbmRlXCIsIEx1Y2lkYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAuM2VtO1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbjogMCAuMWVtO1xuICBwYWRkaW5nOiAuMWVtIC42ZW07XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIGNvbG9yOiAjMjQyNzI5O1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMCAjRkZGO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFlM2U1O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYWRiM2I5O1xuICBib3JkZXItcmFkaXVzOiAwLjI3MjcyNzI3ZW07XG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgxMiwgMTMsIDE0LCAwLjIpLCAwIDAgMCAycHggI0ZGRiBpbnNldDtcbn1cbmtiZC5naXRodWIsXG4uZ2l0aHViLWtleXMga2JkLFxuLmtleS5naXRodWIsXG4uZ2l0aHViLWtleXMgLmtleSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtaW4td2lkdGg6IDFlbTtcbiAgcGFkZGluZzogLjNlbSAuNGVtIC4yZW0gLjNlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWZhbWlseTogXCJMdWNpZGEgR3JhbmRlXCIsIEx1Y2lkYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAuM2VtO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDAuMjcyNzI3MjdlbSAwLjQ1NDU0NTQ1ZW07XG4gIGZvbnQtc2l6ZTogNjguNzUlO1xuICBsaW5lLWhlaWdodDogMC45MDkwOTA5MTtcbiAgY29sb3I6ICM0NDRkNTY7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZiZmM7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjNmNiZDE7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICM5NTlkYTU7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjcyNzI3MjdlbTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDAgIzk1OWRhNTtcbiAgZm9udC1mYW1pbHk6IFwiU0ZNb25vLVJlZ3VsYXJcIiwgQ29uc29sYXMsIFwiTGliZXJhdGlvbiBNb25vXCIsIE1lbmxvLCBDb3VyaWVyLCBtb25vc3BhY2U7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHRleHQtc2hhZG93OiBub25lO1xufVxuIl19 */`;var Po={},gn={},Mr;function Gd(){if(Mr)return gn;Mr=1,Object.defineProperty(gn,"__esModule",{value:!0}),gn.StoreController=void 0;let e=class{constructor(n,o){this.host=n,this.atom=o,n.addController(this)}hostConnected(){this.unsubscribe=this.atom.subscribe(()=>{this.host.requestUpdate()})}hostDisconnected(){var n;(n=this.unsubscribe)===null||n===void 0||n.call(this)}get value(){return this.atom.get()}};return gn.StoreController=e,gn}var mn={},Cr;function No(){if(Cr)return mn;Cr=1,Object.defineProperty(mn,"__esModule",{value:!0}),mn.MultiStoreController=void 0;let e=class{constructor(n,o){this.host=n,this.atoms=o,n.addController(this)}hostConnected(){this.unsubscribes=this.atoms.map(n=>n.subscribe(()=>this.host.requestUpdate()))}hostDisconnected(){var n;(n=this.unsubscribes)===null||n===void 0||n.forEach(o=>o())}get values(){return this.atoms.map(n=>n.get())}};return mn.MultiStoreController=e,mn}var fn={},Or;function Vd(){if(Or)return fn;Or=1,Object.defineProperty(fn,"__esModule",{value:!0}),fn.useStores=void 0;const e=No();function t(...n){return o=>class extends o{constructor(...i){super(...i),new e.MultiStoreController(this,n)}}}return fn.useStores=t,fn}var vn={},Tr;function Ud(){if(Tr)return vn;Tr=1,Object.defineProperty(vn,"__esModule",{value:!0}),vn.withStores=void 0;const e=No(),t=(n,o)=>class extends n{constructor(...r){super(...r),new e.MultiStoreController(this,o)}};return vn.withStores=t,vn}var $r;function Wd(){return $r||($r=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.withStores=e.useStores=e.MultiStoreController=e.StoreController=void 0;var t=Gd();Object.defineProperty(e,"StoreController",{enumerable:!0,get:function(){return t.StoreController}});var n=No();Object.defineProperty(e,"MultiStoreController",{enumerable:!0,get:function(){return n.MultiStoreController}});var o=Vd();Object.defineProperty(e,"useStores",{enumerable:!0,get:function(){return o.useStores}});var i=Ud();Object.defineProperty(e,"withStores",{enumerable:!0,get:function(){return i.withStores}})})(Po)),Po}var Bt=Wd();const Xn=49,jd=100;class zo{constructor(t){this.prevOffset=0,this.headroom="top",this.headerVisible=!0,this.handleScroll=_.throttle(()=>{if(this.isAnyDropdownOpen()){this.prevOffset=window.scrollY;return}const i=m("header"),{scrollY:r}=window;let a="none";m("zoomMode")!=="height"&&r+window.innerHeight+jd>document.body.scrollHeight?a="end":r>this.prevOffset&&r>Xn?a="hide":i==="scroll"&&r<this.prevOffset&&r>Xn?a="show":i!=="click"&&r<=Xn&&(a="top");let d=!1;if(this.headroom!==a&&(this.headroom=a,d=!0),i==="scroll"){const p=a!=="hide";this.headerVisible!==p&&(this.headerVisible=p,d=!0)}d&&this.host.requestUpdate(),this.prevOffset=r},300),this.handleMouseMove=_.throttle(i=>{if(this.isAnyDropdownOpen()){this.headerVisible||(this.headerVisible=!0,this.host.requestUpdate());return}if(["hover","scroll"].includes(m("header"))){const r=zo.isMouseInsideRegion(i,window.innerWidth,Xn*1.5);this.headerVisible!==r&&(this.headerVisible=r,this.host.requestUpdate())}},300),this.toggleHeaderVisibility=()=>{m("header")==="click"&&(this.headerVisible=!this.headerVisible,this.host.requestUpdate())},this.host=t,t.addController(this);const n=m("header");m("zoomMode")==="height"&&["click","hover"].includes(n)&&(this.headerVisible=!1)}hostConnected(){window.addEventListener("scroll",this.handleScroll),window.addEventListener("mousemove",this.handleMouseMove)}hostDisconnected(){window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("mousemove",this.handleMouseMove)}isAnyDropdownOpen(){if(!this.host.shadowRoot)return!1;const t=this.host.shadowRoot.querySelectorAll("mov-dropdown");for(const n of t)if(n.open)return!0;return!1}static isMouseInsideRegion(t,n,o){return t.clientX>=0&&t.clientX<=n&&t.clientY>=0&&t.clientY<=o}}class Zd{constructor(t){this.canvasContext=null,this.host=t,t.addController(this);const n=document.createElement("canvas");this.canvasContext=n.getContext("2d"),this.resizeObserver=new ResizeObserver(()=>this.update())}hostConnected(){}hostDisconnected(){this.resizeObserver.disconnect()}observe(t,n){!t||!n||(this.element=t,this.text=n,this.resizeObserver.disconnect(),this.resizeObserver.observe(this.element),this.update())}update(){if(!this.element||!this.text||!this.canvasContext){this.value=this.text,this.host.requestUpdate();return}const t=window.getComputedStyle(this.element);this.canvasContext.font=`${t.fontWeight} ${t.fontSize} ${t.fontFamily}`;const n=this.text,o=this.element.clientWidth;if(this.canvasContext.measureText(n).width<=o){this.value=n,this.host.requestUpdate();return}const r="...",a=this.canvasContext.measureText(r).width,d=o-a;let p="",u="";for(let h=1;h<n.length;h++){const E=n.substring(0,h),y=n.substring(n.length-h);if(this.canvasContext.measureText(E).width+this.canvasContext.measureText(y).width>d)break;p=E,u=y}this.value=`${p}${r}${u}`,this.host.requestUpdate()}}function Bo(e=window.location.href){Pe(Mt(e))||(O(`Bookmark Removed ${e}`),nn("bookmarks",t=>[...t.filter(n=>n.url!==e)]))}function Qd(e){const t=e.currentTarget.value;O(`Bookmark Removed ${t}`),Zt.error({title:f("BOOKMARK_REMOVED"),duration:1e4}),Bo(t)}function qd(){Z("panel","bookmarks")}function Lr(){const e=I("currentPage"),t={name:I("manga")?.title??document.documentElement.title??window.location.hostname,url:window.location.href,page:e,date:new Date().toISOString().slice(0,10)};Mt(t.url)?(nn("bookmarks",n=>[...n.filter(o=>o.url!==t.url)]),Zt.error({title:f("BOOKMARK_REMOVED"),duration:1e4})):(nn("bookmarks",n=>[...n,t]),Zt.success({title:f("BOOKMARK_SAVED"),description:f("BOOKMARK_MESSAGE").replace("##num##",e.toString()),duration:1e4}))}function Ho(){Z("panel","none")}function Yd(){Z("panel","settings")}function Xd(){Z("panel","keybindings")}function Kd(e){const t={};Object.keys(e).forEach(n=>{const o=e[n].value;if(o){const i=o.value.split(",").map(r=>r.trim()).filter(r=>r!=="");t[n]=i.length>0?i:void 0}}),se("keybinds",t),Z("panel","keybindings"),Sr()}function Jd(){Z("panel","keybindingsEditor")}const e1=`#Header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: row nowrap;
  transition: transform 0.3s ease-in;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  background-color: var(--theme-background-color);
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);
  z-index: 900;
}

#Header.click {
  padding-left: 40px;
}

@keyframes headroom {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0%);
  }
}

#Header:not(.visible, .headroom-top, .fixed, .simple) {
  animation: headroom 0.3s ease-in reverse;
  transform: translateY(-100%);
  position: sticky;
  top: 0;
}

#Header.scroll.headroom-hide:not(.visible) {
  animation: none;
  transform: translateY(-100%);
  position: sticky;
  top: 0;
}

#Header.scroll.headroom-show,
#Header.headroom-end,
#Header.visible {
  animation: headroom 0.3s ease-in;
  transform: translateY(0%);
  position: sticky;
  top: 0;
}

#Header.headroom-top {
  animation: none;
}

#Header.fixed {
  position: sticky;
  animation: none;
  top: 0;
  transform: translateY(0%);
}

#Header.simple {
  position: static;
  animation: none;
  top: 0;
  transform: translateY(0%);
}

#menu {
  position: fixed;
  z-index: 1;
  color: var(--theme-body-text-color);
  height: 40px;
  width: 40px;
}

#menu:not(.click),
#menu.hide {
  display: none;
}

#menu.click {
  z-index: 901;
  top: 0;
  left: 0;
}

#MangaTitle {
  padding: 2px;
  margin: 0;
  font-size: 1.2rem;
  font-weight: 400;
  word-wrap: anywhere;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 200px;
  max-width: 40vw;
}

#GlobalFunctions {
  display: flex;
  gap: 3px;
  padding: 3px 3px 3px 0;
  flex-wrap: wrap;
  z-index: 100;
}

#ZoomControl {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 3px;
  padding: 10px 5px;
}
`,Rr=`#Header.mobile,
#Header.tablet {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.mobile #ViewerTitle,
.tablet #ViewerTitle {
  order: 4;
  min-height: auto;
}

.mobile #GlobalFunctions,
.tablet #GlobalFunctions {
  order: 2;
  width: auto;
  padding: 5px;
}

.mobile #GlobalFunctions span {
  flex-direction: column;
}

.mobile #ZoomControl,
.tablet #ZoomControl {
  order: 3;
}

.mobile #Toolbar,
.tabler #Toolbar {
  order: 1;
}

#Header.mobile {
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

#Header.mobile.click + #Chapter:not(.webcomic, .vertical) {
  position: sticky;
}

.tablet #MangaTitle,
.mobile #MangaTitle {
  max-width: 90vw;
}

.mobile #ViewerTitle {
  order: 3;
  margin-top: 0;
  height: auto;
  padding: 0;
}

.mobile #GlobalFunctions {
  order: 2;
  padding: 0;
  width: auto;
  gap: 0;
}

.mobile mov-button::part(base) {
  border-radius: 0;
}

.mobile #FileDropdown mov-button:first-of-type::part(base) {
  border-radius: 5px 0 0 5px;
}

.mobile #GlobalFunctions mov-button:last-of-type::part(base) {
  border-radius: 0 5px 5px 0;
}

.mobile .PageFunctions {
  padding: 0;
}

.mobile .PageFunctions .PageButton.Bookmark {
  opacity: 1;
}

.mobile #GlobalFunctions #ZoomSlider,
.tablet #GlobalFunctions #ZoomSlider,
.mobile .PageFunctions .PageButton:not(.Bookmark),
.tablet #Counters,
.mobile #ZoomControl,
.mobile #ZoomDropdown,
.mobile #ViewDropdown,
.mobile #FileDropdown :where(:nth-child(3), :nth-child(4)) {
  display: none;
}
`;var t1=Object.defineProperty,n1=Object.getOwnPropertyDescriptor,Fo=(e,t,n,o)=>{for(var i=o>1?void 0:o?n1(t,n):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(i=(o?a(t,n,i):a(i))||i);return o&&i&&t1(t,n,i),i};let bn=class extends X{constructor(){super(),this.headroomController=new zo(this),this.titleController=new Zd(this)}updated(e){super.updated(e),e.has("manga")&&this.manga&&requestAnimationFrame(()=>{this.manga&&this.titleController.observe(this.mangaTitleElement,this.manga?.title??"Manga Online Viewer")})}render(){if(!this.manga)return w``;const{headroom:e,headerVisible:t}=this.headroomController,n=m("keybinds"),o=i=>{if(I("device")!=="desktop")return z;const r=n[i];return!r||r.length===0?z:r.map(a=>w`<kbd slot="details">${a}</kbd>`)};return w`
      <mov-button
        id="menu"
        class="${be({[m("header")]:!0,hide:["top","end"].includes(e)})}"
        @click=${this.headroomController.toggleHeaderVisibility}
      >
        <mov-icon name="IconMenu2"></mov-icon>
      </mov-button>
      <header
        id="Header"
        class="${be({[m("header")]:!0,[`headroom-${e}`]:!0,visible:t&&["hide","none"].includes(e),[I("device")]:!0})}"
      >
        <div
          id="Toolbar"
          class="button-group"
        >
          <mov-dropdown id="FileDropdown">
            <mov-button
              slot="trigger"
              title="${f("FILE_MENU")}"
            >
              <mov-icon
                label="File"
                name="IconDotsVertical"
              ></mov-icon>
            </mov-button>
            <mov-dropdown-item
              id="settings"
              @click=${Yd}
            >
              <mov-icon
                slot="icon"
                name="IconSettings"
              ></mov-icon>
              ${f("SETTINGS")} ${o("SETTINGS")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="keybindings"
              @click=${Xd}
            >
              <mov-icon
                slot="icon"
                name="IconKeyboard"
              ></mov-icon>
              ${f("KEYBINDINGS")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="AutoScroll"
              class="${be({running:I("autoScroll")})}"
              @click=${jn}
            >
              <mov-icon
                slot="icon"
                name="${I("autoScroll")?"IconPlayerPause":"IconPlayerPlay"}"
              ></mov-icon>
              ${f("SCROLL_START")} ${o("SCROLL_START")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="bookmarks"
              class="tablets"
              @click=${qd}
            >
              <mov-icon
                slot="icon"
                name="IconBookmarks"
              ></mov-icon>
              ${f("BOOKMARKS")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="pageControls"
              class="tablets phones"
              @click="${X0}"
              ?selected=${m("hidePageControls")}
            >
              <mov-icon
                slot="icon"
                name="IconListNumbers"
              ></mov-icon>
              ${f("TOGGLE_CONTROLS")}
            </mov-dropdown-item>
          </mov-dropdown>

          <mov-dropdown
            id="ViewDropdown"
            checkable
          >
            <mov-button
              slot="trigger"
              title="${f("VIEW_MENU")}"
            >
              <mov-icon
                label="View"
                name="IconBook"
              ></mov-icon>
            </mov-button>
            <mov-dropdown-item
              id="webComic"
              class="tablets"
              @click="${it("WebComic")}"
              ?selected=${m("viewMode")==="WebComic"}
            >
              <mov-icon
                slot="icon"
                name="IconSpacingVertical"
              ></mov-icon>
              ${f("VIEW_MODE_WEBCOMIC")} ${o("VIEW_MODE_WEBCOMIC")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="verticalMode"
              class="tablets"
              @click="${it("Vertical")}"
              ?selected=${m("viewMode")==="Vertical"}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitDown"
              ></mov-icon>
              ${f("VIEW_MODE_VERTICAL")} ${o("VIEW_MODE_VERTICAL")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="ltrMode"
              @click="${it("FluidLTR")}"
              ?selected=${m("viewMode")==="FluidLTR"}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitRight"
              ></mov-icon>
              ${f("VIEW_MODE_LEFT")} ${o("VIEW_MODE_LEFT")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="rtlMode"
              @click="${it("FluidRTL")}"
              ?selected=${m("viewMode")==="FluidRTL"}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitLeft"
              ></mov-icon>
              ${f("VIEW_MODE_RIGHT")} ${o("VIEW_MODE_RIGHT")}
            </mov-dropdown-item>
          </mov-dropdown>
          <mov-dropdown
            id="ZoomDropdown"
            checkable
          >
            <mov-button
              slot="trigger"
              title="${f("ZOOM_MENU")}"
            >
              <mov-icon
                label="Zoom"
                name="IconZoom"
              ></mov-icon>
            </mov-button>
            <mov-dropdown-item
              id="enlarge"
              @click="${Qn()}"
            >
              <mov-icon
                slot="icon"
                name="IconZoomInArea"
              ></mov-icon>
              ${f("ENLARGE")} ${o("ENLARGE")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="restore"
              @click="${Nt("percent",100)}"
            >
              <mov-icon
                slot="icon"
                name="IconZoomPan"
              ></mov-icon>
              ${f("RESTORE")} ${o("RESTORE")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="reduce"
              @click="${Qn(-1)}"
            >
              <mov-icon
                slot="icon"
                name="IconZoomOutArea"
              ></mov-icon>
              ${f("REDUCE")} ${o("REDUCE")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="fitWidth"
              @click="${Nt("width")}"
              ?selected=${m("zoomMode")==="width"}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitWidth"
              ></mov-icon>
              ${f("FIT_WIDTH")} ${o("FIT_WIDTH")}
            </mov-dropdown-item>
            <mov-dropdown-item
              id="fitHeight"
              @click="${Nt("height")}"
              ?selected=${m("zoomMode")==="height"}
            >
              <mov-icon
                slot="icon"
                name="IconArrowAutofitHeight"
              ></mov-icon>
              ${f("FIT_HEIGHT")} ${o("FIT_HEIGHT")}
            </mov-dropdown-item>
          </mov-dropdown>
        </div>
        <div id="ViewerTitle">
          <h1
            id="MangaTitle"
            title="${this.manga.title}"
          >
            ${this.titleController.value??this.manga.title}
          </h1>
        </div>
        <div id="ZoomControl">
          <input
            type="range"
            id="Zoom"
            .value="${m("zoomValue")}"
            min="${m("minZoom")}"
            max="200"
            @input=${Od}
          />
          <span id="ZoomVal">
            Zoom:
            ${m("zoomMode")==="percent"?`${m("zoomValue")}%`:m("zoomMode")}</span
          >
        </div>
        <div
          id="GlobalFunctions"
          class="button-group"
        >
          <mov-button
            id="series"
            href="${this.manga.series??z}"
            @click=${dn}
            title="${f("RETURN_CHAPTER_LIST")}"
            ?disabled=${!this.manga.series}
          >
            <mov-icon name="IconBookReturn"></mov-icon>
          </mov-button>
          <mov-button
            id="download"
            title="${f("DOWNLOAD_ZIP")}"
            @click=${yr}
            ?disabled=${I("download")!=="available"}
            ?loading=${I("download")==="working"}
          >
            <mov-icon
              name="${I("download")==="working"?"IconLoader2":"IconFileDownload"}"
            ></mov-icon>
          </mov-button>
          <mov-button
            id="prev"
            href="${this.manga.prev??z}"
            title="${f("PREVIOUS_CHAPTER")}"
            @click=${dn}
            ?disabled=${!this.manga.prev}
          >
            <mov-icon name="IconArrowBigLeft"></mov-icon>
          </mov-button>
          <mov-button
            id="next"
            href="${this.manga.next??z}"
            title="${f("NEXT_CHAPTER")}"
            @click=${dn}
            ?disabled=${!this.manga.next}
          >
            <mov-icon name="IconArrowBigRight"></mov-icon>
          </mov-button>
        </div>
      </header>
    `}};bn.styles=[_e(e1),_e(Rr),_e(_r),ve``],Fo([mt("#MangaTitle")],bn.prototype,"mangaTitleElement",2),Fo([k({type:Object})],bn.prototype,"manga",2),bn=Fo([te("reader-header"),Bt.useStores(he,St,Se)],bn);const o1=`#BookmarksPanel {
  text-align: center;
  --width: 100vw;
}

#BookmarksList {
  padding: 0 5px;
  overflow: auto;
  max-height: 60vh;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.bookmark-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 1rem;
  border-radius: 5px;
  transition: background-color 150ms ease-in-out;
  text-align: left;
}

.bookmark-item:hover {
  background-color: var(--mov-color-fill-quiet, rgba(128, 128, 128, 0.1));
}

.bookmark-info {
  flex-grow: 1;
  min-width: 0;
}

.bookmark-name {
  font-weight: 500;
}

.bookmark-url {
  font-size: 0.875rem;
  text-decoration: none;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: color-mix(in oklab, var(--theme-body-text-color), transparent 30%);
}
.bookmark-url:hover {
  text-decoration: underline;
}

.bookmark-details {
  flex-shrink: 0;
  width: 90px;
  font-size: 0.875rem;
  text-align: right;
  color: color-mix(in oklab, var(--theme-body-text-color), transparent 30%);
}
.bookmark-details > div {
  padding: 2px 0;
}

.bookmark-actions {
  flex-shrink: 0;
  display: flex;
  gap: 0.5rem;
}
`;var i1=Object.getOwnPropertyDescriptor,r1=(e,t,n,o)=>{for(var i=o>1?void 0:o?i1(t,n):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(i=a(i)||i);return i};let Go=class extends X{listBookmarks(){return po(m("bookmarks"))?[f("LIST_EMPTY")]:m("bookmarks").map((e,t)=>w`
        <div
          id="Bookmark${t+1}"
          class="bookmark-item"
        >
          <div class="bookmark-info">
            <div class="bookmark-name">${e.name}</div>
            <a
              class="bookmark-url"
              href="${e.url}"
              target="_blank"
              >${e.url}</a
            >
          </div>
          <div class="bookmark-details">
            <div class="bookmark-date">${new Date(e.date).toISOString().slice(0,10)}</div>
            <div class="bookmark-page">Page: ${e.page}</div>
          </div>
          <div class="bookmark-actions">
            <a
              href="${e.url}"
              target="_blank"
            >
              <mov-button
                title="Open Bookmark"
                size="small"
              >
                <mov-icon
                  name="IconExternalLink"
                  size="16px"
                ></mov-icon>
              </mov-button>
            </a>
            <mov-button
              title="Delete Bookmark"
              size="small"
              value="${e.url}"
              @click=${Qd}
            >
              <mov-icon
                name="IconTrash"
                size="16px"
              ></mov-icon>
            </mov-button>
          </div>
        </div>
      `)}render(){return w`
      <mov-dialog
        id="BookmarksPanel"
        ?open=${I("panel")==="bookmarks"}
        @close=${Ho}
      >
        <mov-button
          class="Bookmark"
          title="${f("BOOKMARK")}"
          @click=${Lr}
          slot="header-actions"
        >
          <mov-icon
            name="${Mt()===void 0?"IconBookmark":"IconBookmarkOff"}"
            size="24px"
          ></mov-icon>
        </mov-button>
        <h2 slot="header">${f("BOOKMARKS")}</h2>
        <h2 slot="label">${f("BOOKMARKS")}</h2>
        <div id="BookmarksList">${this.listBookmarks()}</div>
      </mov-dialog>
    `}};Go.styles=[_e(o1)],Go=r1([te("bookmark-panel"),Bt.useStores(he,St,Se)],Go);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*a1(e,t){if(e!==void 0){let n=-1;for(const o of e)n>-1&&(yield t),n++,yield o}}const s1=`#KeybindingsPanel div {
  line-height: 1.5em;
}

#KeybindingsPanel #KeybindingsList {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 5px;
}

#KeybindingsPanel .ControlButton {
  margin-left: 3px;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  gap: 0.5em;
}

#KeybindingsPanel label {
  display: ruby;
}

#KeybindingsPanel input {
  display: inline-block;
  width: 100%;
}

#KeybindingsPanel #HotKeysRules {
  grid-column: span 2;
}
`;var l1=Object.getOwnPropertyDescriptor,c1=(e,t,n,o)=>{for(var i=o>1?void 0:o?l1(t,n):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(i=a(i)||i);return i};let Vo=class extends X{constructor(){super(...arguments),this.keybindsRefs=Object.keys(m("keybinds")).reduce((e,t)=>(e[t]=ko(),e),{})}keybindList(){const e=m("keybinds");return Object.keys(e).map(t=>{const n=e[t]?.length?a1(e[t]?.map(o=>w`<kbd class="dark">${o}</kbd>`)," / "):"";return w`<span>${f(t)}:</span> <span>${n}</span>`})}keybindEditor(){const e=m("keybinds");return Object.keys(e).map(t=>w`<label for="${t}">${f(t)}:</label>
          <input
            type="text"
            class="KeybindInput"
            id="${t}"
            name="${t}"
            value="${e[t]?.join(" , ")??z}"
            ${Eo(this.keybindsRefs[t])}
          />`)}render(){return w`
      <mov-drawer
        id="KeybindingsPanel"
        ?open=${I("panel").startsWith("keybindings")}
        placement="end"
        @close=${Ho}
      >
        <h2 slot="label">${f("KEYBINDINGS")}</h2>
        <div
          class="controls"
          slot="header-actions"
        >
          ${I("panel")==="keybindingsEditor"?w` <mov-button
                id="SaveKeybindings"
                type="button"
                title="${f("SAVE_KEYBINDS")}"
                @click=${()=>Kd(this.keybindsRefs)}
              >
                <mov-icon
                  name="IconDeviceFloppy"
                  size="16px"
                  slot="start"
                ></mov-icon>
                ${f("BUTTON_SAVE")}
              </mov-button>`:w` <mov-button
                id="EditKeybindings"
                type="button"
                title="${f("EDIT_KEYBINDS")}"
                @click=${Jd}
              >
                <mov-icon
                  name="IconPencil"
                  size="16px"
                  slot="start"
                ></mov-icon>
                ${f("BUTTON_EDIT")}
              </mov-button>`}
        </div>
        <div id="KeybindingsList">
          ${I("panel")==="keybindingsEditor"?this.keybindEditor():this.keybindList()}
        </div>
        <div id="HotKeysRules">${dr(f("KEYBIND_RULES"))}</div>
      </mov-drawer>
    `}};Vo.styles=[_e(s1),_e(_r)],Vo=c1([te("keybindings-panel"),Bt.useStores(he,St,Se)],Vo);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*d1(e,t){if(e!==void 0){let n=0;for(const o of e)yield t(o,n++)}}function wn(e,t=1){return Array(e).fill(0).map((n,o)=>o+1).filter(n=>n>=t)}function Dr(e){e.deltaY&&(e.currentTarget.scrollLeft+=e.deltaY+e.deltaX,e.preventDefault())}function h1(e){e.deltaY&&(e.currentTarget.scrollLeft-=e.deltaY-e.deltaX,e.preventDefault())}const u1=`:host {
  --nav-collapsed-size: 34px;
  --nav-expanded-size: 200px;
  --header-height: 80px;
}
#Navigation {
  color: var(--theme-text-color);
  background-color: var(--theme-hightlight-color);
  overflow: hidden;
  display: flex;
  box-sizing: border-box;
  gap: 5px;
  white-space: nowrap;
  text-align: center;
  line-height: 0;
  transition: all 0.3s ease;
  position: fixed;
  z-index: 1000;
}
#Thumbnails {
  flex-grow: 1;
  display: flex;
  gap: 5px;
  justify-content: flex-start;
}
#Navigation.horizontal #Thumbnails {
  flex-direction: row;
  overflow-x: auto;
  overflow-y: hidden;
}
#Navigation.vertical #Thumbnails {
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  justify-content: flex-start;
}
#Navigation.left #Thumbnails {
  direction: rtl;
}
:host(:not([forceExpanded])) #Navigation:not(:hover) #Thumbnails {
  display: none;
}
#NavigationCounters {
  flex-shrink: 0; /* Prevent this from shrinking */
  padding: 5px;
  line-height: 1rem;
  text-align: center;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}
/* == Horizontal Orientation (for top/bottom position) == */
#Navigation.horizontal {
  flex-direction: column;
  height: var(--nav-collapsed-size);
  width: 100%;
  left: 0;
  right: 0;
}
:host([forceExpanded]) #Navigation.horizontal,
#Navigation.horizontal:hover {
  height: var(--nav-expanded-size);
}
#Navigation.bottom {
  bottom: 0;
}
/* == Vertical Orientation (for left/right position) == */
#Navigation.vertical {
  flex-direction: row;
  width: var(--nav-collapsed-size);
  height: 100%;
  bottom: 0;
  transition:
    top 0.3s ease,
    height 0.3s ease,
    width 0.3s ease;
}
:host([forceExpanded]) #Navigation.vertical,
#Navigation.vertical:hover {
  width: var(--nav-expanded-size);
}
#Navigation.left {
  left: 0;
  flex-direction: row-reverse;
}
#Navigation.right {
  right: 0;
}
#Navigation.vertical #NavigationCounters {
  writing-mode: vertical-rl;
  transform: rotate(180deg);
}
#Navigation.right #NavigationCounters {
  transform: rotate(0deg);
}
/* Adjust for header visibility */
#Navigation.vertical.header {
  top: var(--header-height);
  height: calc(100% - var(--header-height));
}

#Navigation .Thumbnail {
  display: inline-flex;
  height: 150px;
  width: 150px;
  margin: 0 5px;
  position: relative;
  justify-content: center;
  align-items: center;
}

.ThumbnailIndex {
  color: var(--mov-color-on-loud);
  background-color: var(--mov-color-fill-loud);
  display: block;
  opacity: 0.9;
  position: absolute;
  left: 0;
  bottom: 30%;
  width: 100%;
  line-height: 1.2rem;
  text-align: center;
  font-weight: 600;
  z-index: 1;
}
.ThumbnailImg {
  cursor: pointer;
  display: inline-block;
  max-height: 150px;
  min-height: 150px;
  min-width: 80px;
  max-width: 150px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 48px 48px;
}
`;var p1=Object.defineProperty,g1=Object.getOwnPropertyDescriptor,Kn=(e,t,n,o)=>{for(var i=o>1?void 0:o?g1(t,n):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(i=(o?a(t,n,i):a(i))||i);return o&&i&&p1(t,n,i),i};let Ht=class extends X{constructor(){super(...arguments),this.mode="bottom",this.forceExpanded=!1,this.isHiding=!1}willUpdate(e){e.has("mode")&&(this.isHiding=!0)}updated(e){e.has("mode")&&this.isHiding&&setTimeout(()=>{this.isHiding=!1},50)}render(){if(this.mode==="disabled")return z;const e=I("manga"),t={horizontal:this.mode==="bottom",vertical:this.mode!=="bottom",left:this.mode==="left",right:this.mode==="right",bottom:this.mode==="bottom",hiding:this.isHiding};return w`
      <nav
        id="Navigation"
        class="${be(t)}"
      >
        <div
          id="NavigationCounters"
          class="ControlLabel"
        >
          ${v0}
          <i>${I("loaded")}</i> /
          <b> ${(e?.pages??1)-((e?.begin??1)-1)} </b>
          ${f("PAGES_LOADED")}
          <span>: ${I("currentPage")}</span>
        </div>
        <div
          id="Thumbnails"
          @wheel=${this.mode==="bottom"?Dr:null}
        >
          ${d1(wn(e?.pages??1,e?.begin??1),n=>w` <figure
                id="Thumbnail${n}"
                class="Thumbnail"
                role="button"
                tabindex="0"
                title="Go to page ${n}"
                @click=${()=>ed(n)}
              >
                <img
                  id="ThumbnailImg${n}"
                  alt=""
                  class="ThumbnailImg"
                  src=${I("images")?.[n]?.src??z}
                />
                <figcaption class="ThumbnailIndex">${n}</figcaption>
              </figure>`)}
        </div>
      </nav>
    `}};Ht.styles=[_e(u1),ve`
      #Navigation {
        transition: opacity 0.2s ease-in-out;
      }
      #Navigation.hiding {
        opacity: 0;
        /* Disable transition during position change to avoid animating the hide */
        transition: none;
      }

      .Thumbnail .ThumbnailImg[src=''],
      .Thumbnail .ThumbnailImg:not([src]) {
        background-image: url('${_e(rn(To))}');
      }

      .Thumbnail .ThumbnailImg.imgBroken {
        background-image: url('${_e(rn($o))}');
      }
    `],Kn([k({type:String})],Ht.prototype,"mode",2),Kn([k({type:Boolean})],Ht.prototype,"forceExpanded",2),Kn([Te()],Ht.prototype,"isHiding",2),Ht=Kn([te("navbar-thumbnails"),Bt.useStores(he,St,Se)],Ht);function m1(){const e=pt()?"true":"false";return w` <div class="ControlLabel">
    ${f("SCOPE")}
    <segmented-control
      .value=${e}
      @change=${hd}
    >
      <segmented-control-option
        value="false"
        label=${f("GLOBAL")}
        icon="IconWorldCog"
      ></segmented-control-option>
      <segmented-control-option
        value="true"
        label=${window.location.hostname}
        icon="IconLocationCog"
      ></segmented-control-option>
    </segmented-control>
  </div>`}function f1(){return At.map(e=>w`
      <option
        value="${e.ID}"
        ?selected=${m("locale")===e.ID}
      >
        ${e.NAME}
      </option>
    `)}function v1(){return w` <div class="ControlLabel locale">
    ${f("LANGUAGE")}
    <select
      id="locale"
      @change="${ud}"
    >
      ${f1()}
    </select>
  </div>`}const b1=()=>w`${m1()} ${v1()}`;function w1(){return w`
    <div class="ControlLabel loadMode">
      ${f("DEFAULT_LOAD_MODE")}
      <select
        id="loadMode"
        @change="${pd}"
      >
        <option
          value="wait"
          ?selected=${m("loadMode")==="wait"}
        >
          ${f("LOAD_MODE_NORMAL")}
        </option>
        <option
          value="always"
          ?selected=${m("loadMode")==="always"}
        >
          ${f("LOAD_MODE_ALWAYS")}
        </option>
        <option
          value="never"
          ?selected=${m("loadMode")==="never"}
        >
          ${f("LOAD_MODE_NEVER")}
        </option>
      </select>
    </div>
  `}function k1(){return w`
    <div class="ControlLabel PagesPerSecond">
      ${f("LOAD_SPEED")}
      <select
        id="PagesPerSecond"
        @change="${kd}"
      >
        <option
          value="3000"
          ?selected=${m("throttlePageLoad")===3e3}
        >
          0.3(${f("SLOWLY")})
        </option>
        <option
          value="2000"
          ?selected=${m("throttlePageLoad")===2e3}
        >
          0.5
        </option>
        <option
          value="1000"
          ?selected=${m("throttlePageLoad")===1e3}
        >
          01(${f("NORMAL")})
        </option>
        <option
          value="500"
          ?selected=${m("throttlePageLoad")===500}
        >
          02
        </option>
        <option
          value="250"
          ?selected=${m("throttlePageLoad")===250}
        >
          04(${f("FAST")})
        </option>
        <option
          value="125"
          ?selected=${m("throttlePageLoad")===125}
        >
          08
        </option>
        <option
          value="100"
          ?selected=${m("throttlePageLoad")===100}
        >
          10(${f("EXTREME")})
        </option>
        <option
          value="1"
          ?selected=${m("throttlePageLoad")===1}
        >
          ${f("ALL_PAGES")}
        </option>
      </select>
    </div>
  `}const y1=()=>w`${w1()} ${k1()}`;function E1(){return w`
    <div class="ControlLabel fitIfOversize">
      ${f("FIT_WIDTH_OVERSIZED")}
      <toggle-switch
        name="fitIfOversize"
        ?checked=${m("fitWidthIfOversize")}
        @change=${gd}
      ></toggle-switch>
    </div>
    <div class="ControlLabel downloadZip">
      ${f("DOWNLOAD_IMAGES")}
      <toggle-switch
        name="downloadZip"
        ?checked=${m("downloadZip")}
        @change=${vd}
      ></toggle-switch>
    </div>
    <div class="ControlLabel hidePageControls">
      ${f("HIDE_CONTROLS")}
      <toggle-switch
        name="hidePageControls"
        ?checked=${m("hidePageControls")}
        @change=${Id}
      ></toggle-switch>
    </div>
    <div class="ControlLabel lazyLoadImages">
      ${f("LAZY_LOAD_IMAGES_ENABLE")}
      <toggle-switch
        name="lazyLoadImages"
        ?checked=${m("lazyLoadImages")}
        @change=${bd}
      ></toggle-switch>
    </div>
  `}function I1(){return w`
    <div
      class="${be({ControlLabel:!0,lazyStart:!0,ControlLabelItem:!0,show:m("lazyLoadImages")})}"
    >
      <span>
        ${f("LAZY_LOAD_IMAGES")}
        <output
          id="lazyStartVal"
          for="lazyStart"
        >
          ${m("lazyStart")}
        </output>
      </span>
      <input
        type="range"
        value="${m("lazyStart")}"
        name="lazyStart"
        id="lazyStart"
        min="5"
        max="100"
        step="5"
        oninput="lazyStartVal.value = this.value"
        @change="${wd}"
      />
    </div>
  `}function x1(){return w`
    <div class="ControlLabel headerType">
      ${f("HEADER_TYPE")}
      <segmented-control
        .value=${m("header")}
        @change=${xd}
        labelPosition="bottom"
      >
        <segmented-control-option
          value="hover"
          label=${f("HEADER_HOVER")}
          icon="arrows-move"
        ></segmented-control-option>
        <segmented-control-option
          value="scroll"
          label=${f("HEADER_SCROLL")}
          icon="arrows-vertical"
        ></segmented-control-option>
        <segmented-control-option
          value="click"
          label=${f("HEADER_CLICK")}
          icon="hand-click"
        ></segmented-control-option>
        <segmented-control-option
          value="fixed"
          label=${f("HEADER_FIXED")}
          icon="pin"
        ></segmented-control-option>
        <segmented-control-option
          value="simple"
          label=${f("HEADER_SIMPLE")}
          icon="box-align-top"
        ></segmented-control-option>
      </segmented-control>
    </div>
  `}function A1(){return w`
    <div class="ControlLabel pagination">
      ${f("PAGINATION_TYPE")}
      <segmented-control
        .value=${m("pagination")}
        @change=${fd}
        labelPosition="side"
      >
        <segmented-control-option
          value="disabled"
          label=${f("PAGINATION_DISABLED")}
          icon="x"
        ></segmented-control-option>
        <segmented-control-option
          value="slider"
          label=${f("PAGINATION_SLIDER")}
          icon="adjustments-horizontal"
        ></segmented-control-option>
        <segmented-control-option
          value="side-arrows"
          label=${f("PAGINATION_ARROWS")}
          icon="arrows-left-right"
        ></segmented-control-option>
        <segmented-control-option
          value="both"
          label=${f("PAGINATION_BOTH")}
          icon="arrows-horizontal"
        ></segmented-control-option>
      </segmented-control>
    </div>
  `}function S1(){return w`
    <div class="ControlLabel navbarType">
      ${f("NAVBAR_TYPE")}
      <segmented-control
        .value=${m("navbar")}
        @change=${md}
        labelPosition="tooltip"
      >
        <segmented-control-option
          value="bottom"
          label=${f("NAVBAR_BOTTOM")}
          icon="layout-bottombar"
        ></segmented-control-option>
        <segmented-control-option
          value="left"
          label=${f("NAVBAR_LEFT")}
          icon="layout-sidebar"
        ></segmented-control-option>
        <segmented-control-option
          value="right"
          label=${f("NAVBAR_RIGHT")}
          icon="layout-sidebar-right"
        ></segmented-control-option>
        <segmented-control-option
          value="disabled"
          label=${f("NAVBAR_DISABLED")}
          icon="x"
        ></segmented-control-option>
      </segmented-control>
    </div>
  `}function _1(){return w`
    <div class="ControlLabel autoScroll">
      <span>
        ${f("AUTO_SCROLL_HEIGHT")}
        <output
          id="scrollHeightVal"
          for="scrollHeight"
        >
          ${m("scrollHeight")} </output
        >px
      </span>
      <input
        type="range"
        value="${m("scrollHeight")}"
        name="scrollHeight"
        id="scrollHeight"
        min="1"
        max="${Math.ceil(window.innerHeight/200)*100}"
        step="1"
        @change="${Ad}"
      />
    </div>
  `}const M1=()=>w`${E1()} ${A1()} ${I1()} ${x1()} ${S1()} ${_1()}`;function C1(){const e=m("colorScheme")==="dark";se("colorScheme",e?"light":"dark"),document.documentElement.classList.remove(e?"dark":"light"),document.documentElement.classList.add(m("colorScheme"))}function Jn(e){const t=e instanceof CustomEvent?e.detail.value:e.currentTarget.value;se("theme",t)}function O1(){return w`
    <div class="ControlLabel ColorSchemeSelector">
      <label>${f("COLOR_SCHEME")}</label>
      <toggle-button
        id="ColorScheme"
        mode="theme"
        @click=${C1}
        ?active=${m("colorScheme")==="dark"}
      >
      </toggle-button>
    </div>
    <div class="ControlLabel ThemeSelector">
      <label>${f("THEME_COLOR")}</label>
      <color-picker
        id="ThemeHex"
        .value="${m("theme")}"
        title="${m("theme")}"
        @input=${Jn}
        .swatches=${Object.values(Ao)}
      ></color-picker>
    </div>
    <color-palette
      .baseColor="${m("theme")}"
      mode="steps"
      .selected=${m("theme")}
      @change="${Jn}"
    ></color-palette>
    <span id="ColorRecommendations">
      ${Object.values(Ao).map(e=>w`<color-swatch
            .color="${e}"
            .selected=${m("theme")}
            @change=${Jn}
          ></color-swatch>`)}
    </span>
    <details class="ControlLabel">
      <summary>${f("THEME_HUE")} & ${f("THEME_SHADE")}</summary>
      <color-panel
        .selected=${m("theme")}
        @change=${Jn}
      ></color-panel>
    </details>
  `}function T1(){return w` <div class="ControlLabel DefaultZoomMode">
    ${f("DEFAULT_ZOOM_MODE")}
    <segmented-control
      .value=${m("zoomMode")}
      @change=${Md}
      labelPosition="tooltip"
    >
      <segmented-control-option
        value="percent"
        label=${f("PERCENT")}
        icon="file-percent"
      ></segmented-control-option>
      <segmented-control-option
        value="width"
        label=${f("FIT_WIDTH")}
        icon="arrow-autofit-width"
      ></segmented-control-option>
      <segmented-control-option
        value="height"
        label=${f("FIT_HEIGHT")}
        icon="arrow-autofit-height"
      ></segmented-control-option>
    </segmented-control>
  </div>`}function $1(){return w`
    <div
      class="${be({ControlLabel:!0,zoomValue:!0,ControlLabelItem:!0,show:m("zoomMode")==="percent"})}"
    >
      <span>
        ${f("DEFAULT_ZOOM")}
        <output
          id="zoomValueVal"
          class="RangeValue"
          for="zoomValue"
        >
          ${m("zoomValue")}%
        </output>
      </span>
      <input
        type="range"
        value="${m("zoomValue")}"
        name="zoomValue"
        id="zoomValue"
        min="5"
        max="200"
        step="5"
        list="zoomValueList"
        @input="${Cd}"
      />
      <datalist id="zoomValueList">
        <option value="5">5</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="75">75</option>
        <option value="100">100</option>
        <option value="125">125</option>
        <option value="150">150</option>
        <option value="175">175</option>
        <option value="200">200</option>
      </datalist>
    </div>
  `}function L1(){return w`
    <div class="ControlLabel minZoom">
      <span>
        ${f("MINIMUM_ZOOM")}
        <output
          id="minZoomVal"
          class="RangeValue"
          for="minZoom"
        >
          ${m("minZoom")}%
        </output>
      </span>
      <input
        type="range"
        value="${m("minZoom")}"
        name="minZoom"
        id="minZoom"
        min="25"
        max="100"
        step="5"
        @input="${Ed}"
        list="minZoomList"
      />
      <datalist id="minZoomList">
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="75">75</option>
        <option value="100">100</option>
      </datalist>
    </div>
  `}function R1(){return w`
    <div class="ControlLabel zoomStep">
      <span>
        ${f("ZOOM_STEP")}
        <output
          id="zoomStepVal"
          class="RangeValue"
          for="zoomStep"
        >
          ${m("zoomStep")}%
        </output>
      </span>
      <input
        type="range"
        value="${m("zoomStep")}"
        name="zoomStep"
        id="zoomStep"
        min="10"
        max="50"
        step="5"
        @input="${yd}"
        list="zoomStepList"
      />
      <datalist id="zoomStepList">
        <option value="10">10</option>
        <option value="30">30</option>
        <option value="50">50</option>
      </datalist>
    </div>
  `}function D1(){return w`
    <div class="ControlLabel viewMode">
      ${f("DEFAULT_VIEW_MODE")}
      <segmented-control
        .value=${m("viewMode")}
        @change=${Td}
        labelPosition="tooltip"
      >
        <segmented-control-option
          value="Vertical"
          label=${f("VIEW_MODE_VERTICAL")}
          icon="arrow-autofit-down"
        ></segmented-control-option>
        <segmented-control-option
          value="WebComic"
          label=${f("VIEW_MODE_WEBCOMIC")}
          icon="spacing-vertical"
        ></segmented-control-option>
        <segmented-control-option
          value="FluidLTR"
          label=${f("VIEW_MODE_LEFT")}
          icon="arrow-autofit-right"
        ></segmented-control-option>
        <segmented-control-option
          value="FluidRTL"
          label=${f("VIEW_MODE_RIGHT")}
          icon="arrow-autofit-left"
        ></segmented-control-option>
      </segmented-control>
    </div>
  `}const P1=()=>w`${T1()} ${$1()} ${L1()} ${R1()} ${D1()}`,N1=`#SettingsPanel {
  color: var(--theme-text-color);
}

#SettingsPanel fieldset {
  border: 1px solid var(--theme-body-text-color);
  padding: 3px;
  border-radius: 10px;
}

#SettingsPanel .ControlLabel {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  padding: 2px;
}

#SettingsPanel .ControlLabelItem {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

#SettingsPanel .ControlLabelItem:not(.show) {
  display: none;
}

#SettingsPanel input[type="range"] {
  width: 100%;
}

#SettingsPanel .RangeValue {
  display: inline-block;
  color: var(--mov-color-on-loud);
  line-height: 20px;
  text-align: center;
  border-radius: 3px;
  background: var(--mov-color-fill-loud);
  padding: 2px 5px;
  margin-left: 8px;
}

#SettingsPanel datalist {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}

#SettingsPanel datalist option {
  padding: 0;
  writing-mode: vertical-lr;
}

#ThemeSelector {
  width: 110px;
}

#ColorRecommendations {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2px;
}
#Chapter:not(.Vertical) ~ #SettingsPanel .verticalSeparator {
  display: none;
}

#ColorScheme {
  padding: 5px;
  min-height: 28px;
  min-width: 28px;
}

#ResetSettings,
#ResetSettings::part(base) {
  width: 100%;
}
`;var z1=Object.getOwnPropertyDescriptor,B1=(e,t,n,o)=>{for(var i=o>1?void 0:o?z1(t,n):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(i=a(i)||i);return i};let Uo=class extends X{render(){return w`
      <mov-drawer
        id="SettingsPanel"
        ?open=${I("panel")==="settings"}
        @close=${Ho}
        placement="start"
        class="${I("device")}"
      >
        <h2 slot="label">${f("SETTINGS")}</h2>
        <mov-button
          id="ResetSettings"
          @click="${Qs}"
          title="${f("BUTTON_RESET_SETTINGS")}"
        >
          <mov-icon
            name="IconSettingsOff"
            size="20px"
            slot="start"
          ></mov-icon>
          ${f("BUTTON_RESET_SETTINGS")}
        </mov-button>
        <div class="content">
          <fieldset id="SettingsPanelGeneral">
            <legend>${f("GENERAL")}</legend>
            ${b1()}
          </fieldset>
          <fieldset id="SettingsPanelTheme">
            <legend>${f("THEME")}</legend>
            ${O1()}
          </fieldset>
          <fieldset id="SettingsPanelLoading">
            <legend>${f("LOADING")}</legend>
            ${y1()}
          </fieldset>
          <fieldset id="SettingsPanelZoom">
            <legend>${f("ZOOM")}</legend>
            ${P1()}
          </fieldset>
          <fieldset id="SettingsPanelOthers">
            <legend>${f("OTHERS")}</legend>
            ${M1()}
          </fieldset>
        </div>
      </mov-drawer>
    `}};Uo.styles=[ve`
      #SettingsPanel.mobile #SettingsPanelZoom,
      #SettingsPanel.mobile .fitIfOversize,
      #SettingsPanel.mobile .showThumbnails,
      #SettingsPanel.mobile .lazyLoadImages,
      #SettingsPanel.mobile .downloadZip,
      #SettingsPanel.mobile .minZoom,
      #SettingsPanel.mobile .zoomStep,
      #SettingsPanel.mobile .headerType,
      #SettingsPanel.mobile .navbarType,
      #SettingsPanel.mobile .autoScroll {
        display: none;
      }
    `,_e(N1)],Uo=B1([te("settings-panel"),Bt.useStores(he,St,Se)],Uo);async function H1(e,t){return new Promise(n=>{O("Fetching page: ",e),fetch(e).then(async o=>o.text()).then(o=>{const r=new DOMParser().parseFromString(o,t);n(r)}).catch(o=>{O("Failed to fetch page: ",o)})})}async function F1(e){return H1(e,"text/html")}async function G1(e,t,n){return F1(e).then(o=>o.querySelector(t)?.getAttribute(n))}function Pr(e){if(e){let t=e.trim();return t.startsWith("//")&&(t=`https:${t}`),t}return""}async function Wo(e,t,n,o=0){setTimeout(async()=>{let i=Pr(n);!Si(i)&&!Ai(i)&&e.fetchOptions&&(i=await fetch(i,e.fetchOptions).then(r=>r.blob()).then(r=>blobUtil.blobToDataURL(r))),on("images",r=>({...r,[t]:{...r?.[t],src:i}})),Ne("Loaded Image:",t,"Source:",i)},(e.timer??m("throttlePageLoad"))*o),e.pages===t&&Bo()}async function Nr(e,t,n,o=0){setTimeout(async()=>{const i=await G1(n,e.img,e.lazyAttr??"src");if(i){const r=Pr(i);on("images",a=>({...a,[t]:{src:r}})),O("Loaded Page: ",t," Source: ",r)}},(e.timer??m("throttlePageLoad"))*o),e.pages===o&&Bo()}function zr(e,t){wn(t.pages,e).filter((n,o)=>!(t.lazy??m("lazyLoadImages"))||o<=m("lazyStart")).forEach((n,o)=>{Nr(t,n,t.listPages[n-1],o)})}function Br(e,t){wn(t.pages,e).filter((n,o)=>!(t.lazy??m("lazyLoadImages"))||o<=m("lazyStart")).forEach((n,o)=>{Wo(t,n,t.listImages[n-1],o)})}async function V1(){await go(()=>I("manga")!==void 0);const e=I("manga"),t=e.begin??1;Ne("Loading Images"),Ne(`Intervals: ${e.timer??m("throttlePageLoad")??"Default(1000)"}`),Ne(`Lazy: ${e.lazy??m("lazyLoadImages")}, Starting from: ${m("lazyStart")}`),Pt(),ki(e)?(Ne("Method: Images:",e.listImages),Br(t,e)):yi(e)?(Ne("Method: Pages:",e.listPages),zr(t,e)):wa(e)?(Ne("Method: Brute Force"),e.bruteForce({begin:t,addImg:Wo,loadImages(n){Br(t,{...e,listImages:n})},loadPages(n,o,i){zr(t,{...e,listPages:n,img:o,lazyAttr:i})},wait:m("throttlePageLoad")})):O("No Loading Method Found"),Se.listen((n,o,i)=>{if(i==="currentPage"&&n.currentPage>o.currentPage)for(let r=n.currentPage;r<n.currentPage+5;r++)n.images?.[r]?.src===void 0&&(ki(e)?Wo(e,r,e.listImages[r-1]):yi(e)&&Nr(e,r,e.listPages[r-1]))})}function U1(){const e=I("images");if(!e)return null;const t=m("viewMode"),n=t==="FluidLTR"||t==="FluidRTL",o=t==="FluidRTL",i=window.innerHeight/2,r=window.innerWidth/2;let a=null;for(const d in e){const p=e[d].ref?.value;if(!p)continue;const u=p?.getBoundingClientRect();let h;n?o?h=u.right:h=u.left:h=u.top,(n?h<=r:h<=i)&&(!a||h>a.edge)&&(a={index:parseInt(d,10),edge:h})}return a?a.index:I("manga")?.begin??1}function Hr(){const e=U1();e!=null&&I("currentPage")!==e&&Z("currentPage",e)}function W1(){const e=_.throttle(()=>{requestAnimationFrame(Hr)},100);window.addEventListener("scroll",e,{passive:!0}),window.addEventListener("resize",e),I("chapter").value?.addEventListener("scroll",e,{passive:!0}),requestAnimationFrame(Hr)}function Fr(){if(!I("chapter").value){setTimeout(Fr,50);return}W1()}async function j1(){await go(()=>I("manga")!==void 0),Sr(),window.addEventListener("resize",()=>{Z("device",Wt())}),od(),Fr()}function Z1(e,t){const n=e.replace(/[?&]forceReload=\d+$/,""),o=n.includes("?")?"&":"?";return`${n+o}forceReload=${t}`}function Q1(e){let t=1;const n=e?.match(/forceReload=(\d+)$/);return n?.at(1)&&(t=parseInt(n[1],10)+1),t}function Gr(e,t){O(`Reloading Page ${e}`,t);const n=I("images")?.[e]?.src;if(!n)return;const o=Q1(n);o>m("maxReload")||(t?.removeAttribute("src"),Ai(n)||Si(n)?t?.setAttribute("src",n):t?.setAttribute("src",Z1(n,o)))}function q1(e){const t=e.currentTarget,n=parseInt(t.value,10),o=I("images")?.[n]?.ref?.value;o&&Gr(n,o)}function Y1(e){const t=e.currentTarget,n=parseInt(t.value,10);xo(n,o=>({hide:!o.hide}))}function X1(e){const t=e.currentTarget;t.classList.add("imgLoaded"),t.classList.remove("imgBroken");const n=parseInt(t.id.replace("PageImg",""),10);xo(n,a=>xr({naturalWidth:t.naturalWidth,naturalHeight:t.naturalHeight})),on("loaded",a=>a+1);const o=I("manga")?.pages??1,i=I("loaded")??0,r=Math.floor(i/o*100);document.title=`(${r}%) ${I("manga")?.title}`,NProgress.configure({showSpinner:!1}).set(i/o),O(`Progress: ${r}%`),i===o&&(O("Images Loading Complete"),Z("download","available"),m("downloadZip")&&yr())}function K1(e){const t=e.currentTarget;if(po(t.getAttribute("src")))return;t.classList.add("imgBroken");const n=parseInt(t.id.replace("PageImg",""),10);Gr(n,t)}function J1(e){const t=e.currentTarget,n=parseInt(t.value,10),o=I("images"),i=I("images")?.[n];i?.naturalWidth&&Z("images",{...o,[n]:{...i,width:(i?.width||i?.naturalWidth)*(1+m("zoomStep")/100),height:void 0}})}function eh(e){const t=e.currentTarget,n=parseInt(t.value,10),o=I("images"),i=I("images")?.[n];i?.naturalWidth&&Z("images",{...o,[n]:{...i,width:(i?.width||i?.naturalWidth)*(1-m("zoomStep")/100),height:void 0}})}function th(e){const t=e.currentTarget,n=parseInt(t.value,10),o=I("images"),i=I("images")?.[n];i&&Z("images",{...o,[n]:{...i,width:void 0,height:void 0}})}function nh(e){const t=e.currentTarget,n=parseInt(t.value,10),o=I("images"),i=I("images")?.[n];i&&Z("images",{...o,[n]:{...i,width:window.innerWidth+(m("navbar")==="left"||m("navbar")==="right"?-Ct:0),height:void 0}})}function oh(e){const t=e.currentTarget,n=parseInt(t.value,10),o=I("images"),i=I("images")?.[n];i&&Z("images",{...o,[n]:{...i,width:void 0,height:window.innerHeight+(m("navbar")==="bottom"?-Ct:0)}})}function ih(e){const t=I("images")?.[e];let n;return m("viewMode").startsWith("Fluid")?n=`${window.innerHeight+(m("navbar")==="bottom"?-Ct:0)}px`:n=void 0,{width:t?.width?`${t.width}px`:"auto",height:t?.height?`${t.height}px`:"auto","max-height":n,"min-width":`${m("minZoom")}vw`}}const rh=(e,t)=>wn(e,t).map(n=>(I("images")?.[n]?.ref||xo(n,o=>({ref:ko()})),w`
      <div
        id="Page${n}"
        class="${be({MangaPage:!0,hide:!!I("images")?.[n].hide})}"
      >
        <div class="PageFunctions">
          <button
            class="Bookmark PageButton"
            title="${f("BOOKMARK")}"
            @click=${Lr}
            value="${n}"
          >
            ${Mt()?f0:m0}
          </button>
          <button
            class="ZoomIn PageButton"
            title="${f("ZOOM_IN")}"
            @click=${J1}
            value="${n}"
          >
            ${E0}
          </button>
          <button
            class="ZoomRestore PageButton"
            title="${f("ZOOM_RESET")}"
            @click=${th}
            value="${n}"
          >
            ${y0}
          </button>
          <button
            class="ZoomOut PageButton"
            title="${f("ZOOM_OUT")}"
            @click=${eh}
            value="${n}"
          >
            ${I0}
          </button>
          <button
            class="ZoomWidth PageButton"
            title="${f("ZOOM_WIDTH")}"
            @click=${nh}
            value="${n}"
          >
            ${g0}
          </button>
          <button
            class="ZoomHeight PageButton"
            title="${f("ZOOM_HEIGHT")}"
            @click=${oh}
            value="${n}"
          >
            ${p0}
          </button>
          <button
            class="Hide PageButton"
            title="${f("HIDE")}"
            @click=${Y1}
            value="${n}"
          >
            ${I("images")?.[n].hide?b0:w0}
          </button>
          <button
            class="Reload PageButton"
            title="${f("RELOAD")}"
            @click=${q1}
            value="${n}"
          >
            ${k0}
          </button>
          <span class="PageIndex">${n}</span>
        </div>
        <div class="PageContent">
          <img
            id="PageImg${n}"
            alt="Page ${n}"
            class="PageImg"
            src=${I("images")?.[n]?.src??z}
            style="${Qe(ih(n))}"
            @load=${X1}
            @error=${K1}
            ${Eo(I("images")?.[n].ref)}
          />
        </div>
      </div>
      <div class="separator">
        [ ${n===e?f("END"):`${n} / ${e}`} ]
      </div>
    `)),ah=e=>w`
  <main
    id="Chapter"
    ${Eo(I("chapter"))}
    class="${be({fitWidthIfOversize:m("fitWidthIfOversize"),[m("viewMode")]:!0,separator:m("viewMode")==="Vertical"})}"
    @wheel=${t=>{m("viewMode")==="FluidLTR"?Dr(t):m("viewMode")==="FluidRTL"&&h1(t)}}
  >
    ${rh(e.pages,e.begin??0)}
  </main>
`,sh=Xi`
  .PageContent .PageImg[src=''],
  .PageContent .PageImg:not([src]) {
    background-image: url('${rn(To)}');
  }

  .PageContent .PageImg.imgBroken {
    background-image: url('${rn($o)}');
  }

  ${`/*  Simple Normalizer */
html {
  font-size: 100%;
}

body {
  margin: 0;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 20px;
  color: var(--theme-body-text-color);
  background-color: var(--theme-body-background);
  padding: 0;
}

a,
a:link,
a:visited,
a:active,
a:focus {
  color: var(--theme-body-text-color);
  text-decoration: none;
}

img {
  height: auto;
  vertical-align: middle;
  border: 0 none;
}
`}
  ${`:root:not(.light, .dark) {
  --theme-body-background: #25262b;
  --theme-body-text-color: #c1c2c5;
  --theme-text-color: #c1c2c5;
  --theme-primary-color: #1a1b1e;
  --theme-primary-text-color: #c1c2c5;
  --theme-background-color: #25262b;
  --theme-hightlight-color: #2c2e33;
  --theme-border-color: #373a40;
  --theme-secondary-color: #2c2e33;
  --theme-secondary-text-color: #c1c2c5;
}

:host {
  box-sizing: border-box;
}

#MangaOnlineViewer {
  text-decoration: none;
  color: var(--theme-body-text-color);
  background-color: var(--theme-body-background);
  box-sizing: border-box;
  min-height: 100vh;
}

#Chapter {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  min-width: 225px;
  box-sizing: border-box;
}

#Chapter.Vertical:has(+ #Navigation:not(.disabled)),
#Chapter.WebComic:has(+ #Navigation:not(.disabled)) {
  padding-bottom: 31px;
}

#Chapter.Vertical .PageContent {
  margin-bottom: 8px;
  margin-top: 8px;
}

.closeButton {
  width: fit-content;
  height: fit-content;
  position: absolute;
  right: 10px;
  top: 10px;
}

.overlay {
  position: fixed;
  display: none;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 950;
  cursor: pointer;
}

.overlay.visible {
  display: block;
}

select {
  height: 20px;
  margin: 2px;
}

:not(.FluidRTL, .FluidLTR).fitWidthIfOversize .PageContent .PageImg {
  max-width: 100%;
  object-fit: contain;
}

.hideControls .PageFunctions {
  visibility: hidden;
}
`}
  ${`.PageButton .icon-tabler {
  height: 1rem;
  width: 1rem;
  vertical-align: sub;
}

.PageButton,
.PageButton:visited,
.PageButton:link {
  cursor: pointer;
  border-radius: 5px;
  border-width: 1px;
  border-style: solid;
  padding: 2px;
  min-height: 32px;
  color: var(--mov-color-on-loud);
  background-color: var(--mov-color-fill-loud);
  border-color: var(--theme-border-color);
  text-decoration: none;
}

.PageButton:active,
.PageButton:hover {
  opacity: 0.8;
}

.PageButton[selected] {
  background-color: var(--mov-color-fill-normal);
  color: var(--mov-color-on-normal);
  border: 1px solid var(--theme-border-color);
}

.PageButton.hidden {
  display: none;
}

.MangaPage {
  width: 100%;
  display: inline-block;
  text-align: center;
  line-height: 0;
  min-height: 22px;
  min-width: 100%;
}

.PageContent {
  text-align: center;
  display: inline-block;
  overflow-x: auto;
  max-width: 100%;
  transition: all 0.3s ease-in-out;
  height: 100%;
  overflow-y: hidden;
}

.MangaPage.hide .PageContent {
  height: 0;
}

.PageContent .PageImg[src=""],
.PageContent .PageImg:not([src]),
.PageContent .PageImg.imgBroken {
  width: 40vw;
  height: 80vh;
  display: inline-block;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 20%;
  background-color: var(--theme-hightlight-color);
  position: relative;
  text-align: center;
  line-height: 80vh;
  vertical-align: top;
  color: var(--theme-text-color);
  font-size: 1rem;
  min-width: 40vw;
  min-height: 50vh;
  max-width: 100%;
  max-height: 100%;
  margin: 0;
}

.PageContent .PageImg[src=""]:before,
.PageContent .PageImg:not([src]):before,
.PageContent .PageImg.imgBroken:before {
  content: attr(alt);
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  white-space: pre-wrap;
  text-align: center;
  color: var(--theme-text-color);
  font-size: 1rem;
}

.PageFunctions {
  font-family: monospace;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0;
  padding: 0;
  gap: 3px;
  position: absolute;
  right: 0;
}

.PageFunctions > .PageIndex {
  background-color: var(--mov-color-fill-loud);
  color: var(--mov-color-on-loud);
  min-width: 20px;
  text-align: center;
  display: inline-block;
  padding: 3px 5px;
  line-height: 1rem;
  border-radius: 5px;
}

.PageFunctions .PageButton {
  padding: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  border-width: 0;
  min-height: auto;
  opacity: 0.5;
}

.PageFunctions:hover .PageButton {
  opacity: 1;
}

.PageFunctions .PageButton:hover {
  opacity: 0.9;
}

#Chapter.Vertical .separator {
  display: flex;
  align-items: center;
  text-align: center;
  font-style: italic;
}

#Chapter.Vertical .separator::before,
#Chapter.Vertical .separator::after {
  content: "";
  flex: 1;
  border-bottom: 1px solid var(--theme-text-color);
}

#Chapter.Vertical.separator:not(:empty)::before {
  margin-right: 0.25em;
}

#Chapter.Vertical.separator:not(:empty)::after {
  margin-left: 0.25em;
}

#Chapter:not(.separator) .separator,
#Chapter:not(.Vertical) .separator {
  display: none;
}
`}
  ${`#Chapter.FluidLTR,
#Chapter.FluidRTL {
  display: flex;
  overflow-x: auto;
  min-width: auto;

  .ZoomWidth {
    display: none;
  }

  .PageImg {
    min-width: unset;
  }

  .MangaPage {
    width: initial;
    min-width: fit-content;
    position: relative;
  }

  .MangaPage.DoublePage {
    grid-column: span 2;
  }
}

#Chapter.FluidLTR {
  flex-direction: row;

  .MangaPage .PageFunctions {
    right: auto;
    left: 0;
    direction: rtl;
  }
}

#Chapter.FluidRTL {
  flex-direction: row-reverse;
}
`}
  ${Rr}
  ${`@-webkit-keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@-webkit-keyframes spin-reverse {
  0% {
    transform: rotate(360deg);
  }

  to {
    transform: rotate(0);
  }
}

@keyframes spin-reverse {
  0% {
    transform: rotate(360deg);
  }

  to {
    transform: rotate(0);
  }
}

.icon-tabler-loader-2,
.animate-spin {
  -webkit-animation: spin 1s linear infinite;
  animation: spin 1s linear infinite;
}

.animate-spin-reverse {
  -webkit-animation: spin-reverse 1s linear infinite;
  animation: spin-reverse 1s linear infinite;
}
`}
`,lh=(e="#MangaOnlineViewer",t=m("theme"))=>{const n=mr(t),o=Tt(t),i=m("colorScheme")==="dark"?n[8]:n[2],r=Tt(i);return Xi`
    :where(:root),
    ${e}, .dark,
    ${e}.dark {
      --theme-primary-color: ${t};
      --theme-primary-text-color: ${o};
      --theme-secondary-color: ${i};
      --theme-secondary-text-color: ${r};

      color-scheme: dark;
      --theme-body-background: ${le.dark[600]};
      --theme-body-text-color: ${le.dark[50]};
      --theme-text-color: ${le.dark[50]};
      --theme-background-color: ${le.dark[600]};
      --theme-hightlight-color: ${le.dark[500]};
      --theme-border-color: ${le.dark[400]};

      --mov-color-fill-quiet: ${n[9]};
      --mov-color-fill-normal: var(--theme-secondary-color, ${n[8]});
      --mov-color-fill-loud: var(--theme-primary-color);
      --mov-color-border-quiet: ${n[8]};
      --mov-color-border-normal: ${n[7]};
      --mov-color-border-loud: ${n[6]};
      --mov-color-on-quiet: ${n[4]};
      --mov-color-on-normal: var(--theme-secondary-text-color, ${n[3]});
      --mov-color-on-loud: var(--theme-primary-text-color, white);

      --mov-color-mix-hover: black 8%;
      --mov-color-mix-active: black 16%;
    }

    .light,
    ${e}.light {
      color-scheme: light;
      --theme-body-background: ${le.gray[50]};
      --theme-body-text-color: ${le.gray[900]};
      --theme-text-color: ${le.gray[900]};
      --theme-background-color: ${le.gray[50]};
      --theme-hightlight-color: ${le.gray[500]};
      --theme-border-color: ${le.gray[100]};

      --mov-color-fill-quiet: ${n[0]};
      --mov-color-fill-normal: var(--theme-secondary-color, ${n[1]});
      --mov-color-fill-loud: var(--theme-primary-color);
      --mov-color-border-quiet: ${n[1]};
      --mov-color-border-normal: ${n[2]};
      --mov-color-border-loud: ${n[4]};
      --mov-color-on-quiet: ${n[6]};
      --mov-color-on-normal: var(--theme-secondary-text-color, ${n[3]});
      --mov-color-on-loud: var(--theme-primary-text-color, white);

      --mov-color-mix-hover: black 10%;
      --mov-color-mix-active: black 20%;
    }
  `};(()=>{var e=r=>r==null?!1:typeof r=="boolean"?r:r.trim().toLowerCase()==="true";window.tcRangeSliderPlugins=window.tcRangeSliderPlugins||[];var t="min-label",n="max-label",o="#1E293B",i=()=>{let r=null,a=null,d=null,p,u=!1,h=o,E="",y,M=null,P=null,j=null,oe=[],Re=()=>{var T;let H=(T=r?.shadowRoot)==null?void 0:T.querySelector(".range-slider-box");M=document.createElement("div"),M.classList.add("labels-row"),H.prepend(M)},pe=T=>{let H=document.createElement("label");return H.className=T,H.setAttribute("for","range-slider"),H},Ie=()=>{P=pe(t),P.textContent=Be(d?.getTextMin(),E),j=pe(n),j.textContent=Be(d?.getTextMax(),E),a?.before(P),a?.after(j);let T=d?.getValues();if(T)for(let H=0;H<T.length;H++){let ge=pe(`value${H+1}-label generated-label`);ge.textContent=Be(T[H],E),oe.push(ge),M?.append(ge)}},De=()=>{for(let T of oe)!T||T.remove();P?.remove(),j?.remove(),M?.remove(),oe=[]},Ye=T=>{u=T,u?(Re(),Ie()):De()},We=T=>{h=T;for(let H of oe)!H||(H.style.color=h??o);P&&(P.style.color=h??o),j&&(j.style.color=h??o)},G=T=>{E=T,p&&p()},we=()=>{!d||!M||M.classList.toggle("is-reversed",d.isRightToLeft()||d.isBottomToTop())},Be=(T,H)=>{let ge=`${(T??"").toString()}${H}`;return y&&typeof y=="function"?y(T):ge};return{get name(){return"Generated Labels"},init:(T,H,ge,ce)=>{var J,ke,yt;r=T,d=ce,a=(J=T.shadowRoot)==null?void 0:J.getElementById("range-slider"),p=H,h=(ke=r.getAttribute("generate-labels-text-color"))!=null?ke:o,E=(yt=r.getAttribute("generate-labels-units"))!=null?yt:"",Ye(e(r.getAttribute("generate-labels"))),we(),We(h)},update:T=>{if(!(!u||!T.values)){we();for(let H=0;H<T.values.length;H++){let ge=T.values[H],ce=oe[H];if(ge===void 0&&ce){ce.remove(),oe[H]=void 0;continue}if(ge!==void 0&&!ce){let J=pe(`value${H+1}-label generated-label`);if(J.textContent=Be(ge,E),oe[H]=J,T.values.length<=0)M?.append(J);else if(H===0)M?.append(J);else{let ke=oe[H-1];ke?.after(J)}continue}!ce||(ce.textContent=Be(ge,E))}P&&(P.textContent=Be(T.textMin,E)),j&&(j.textContent=Be(T.textMax,E)),We(h)}},onAttrChange:(T,H)=>{T==="generate-labels"&&Ye(e(H)),T==="generate-labels-text-color"&&We(H),T==="generate-labels-units"&&G(H)},gettersAndSetters:[{name:"generateLabels",attributes:{get(){return u??!1},set:T=>{Ye(e(T))}}},{name:"textColor",attributes:{get(){return h??""},set:T=>{We(T)}}},{name:"generateLabelsTextColor",attributes:{get(){return h??""},set:T=>{We(T)}}},{name:"units",attributes:{get(){return E??""},set:T=>{G(T)}}},{name:"generateLabelsUnits",attributes:{get(){return E??""},set:T=>{G(T)}}},{name:"generateLabelsFormat",attributes:{get(){return y},set:T=>{y=T,p&&p()}}}],css:`
    .labels-row{
      text-align: center;
      display: flex;
      justify-content: center;
    }
    
    .is-reversed,
    .is-reversed + .row{
      flex-direction: row-reverse;
    }
    
    .type-vertical{
      position: relative;
    }
    
    .type-vertical .labels-row{
      flex-direction: column;
      position: absolute;
      top: 50%;
      right: -100%;
      transform: translateY(-50%);
    }
    
    .type-vertical .is-reversed,
    .type-vertical .is-reversed + .row{
      flex-direction: column-reverse;
    }
    
    .max-label,
    .min-label{
      margin: 0 1rem;
      width: 2rem;
      text-align: center;
      white-space: nowrap;
    }
    
    .generated-label{
      text-align: center;
      margin: 0 0.5rem;
      white-space: nowrap;
    }
    `,destroy:De}};window.tcRangeSliderPlugins.push(i)})(),(()=>{var e=(d,p,u,h,E)=>{let y=p-d;return y===0?u:(h-u)*(E-d)/y+u},t=d=>!isNaN(parseFloat(d))&&isFinite(d),n=(d,p)=>t(d)?Number(d):p,o=d=>d==null?!1:typeof d=="boolean"?d:d.trim().toLowerCase()==="true";window.tcRangeSliderPlugins=window.tcRangeSliderPlugins||[];var i=11,r=11,a=()=>{let d=null,p=null,u=null,h=null,E=null,y=!1,M=i,P=r,j=()=>{var G;let we=(G=d?.shadowRoot)==null?void 0:G.querySelector("#range-slider");u=document.createElement("div"),u.classList.add("marks"),h=document.createElement("div"),h.classList.add("mark-points"),u.append(h),E=document.createElement("div"),E.classList.add("mark-values"),u.append(E),we.append(u)},oe=()=>{!p||!u||u.classList.toggle("is-reversed",p.isRightToLeft()||p.isBottomToTop())},Re=()=>{var G;if(!u||!p)return;let we=p.getMin(),Be=p.getMax(),T=p.getType()==="vertical",H=p.isRightToLeft()||p.isBottomToTop();for(let ce=0;ce<M;ce++){let J=document.createElement("div");J.classList.add("mark",`mark-${ce}`);let ke=M===0?0:ce*100/(M-1);T?H?J.style.top=`${100-ke}%`:J.style.top=`${ke}%`:H?J.style.left=`${100-ke}%`:J.style.left=`${ke}%`,h?.append(J)}let ge=p.getData();for(let ce=0;ce<P;ce++){let J=document.createElement("div");J.classList.add("mark-value",`mark-value-${ce}`);let ke=P===0?0:ce*100/(P-1),yt=e(0,P-1,we,Be,ce);J.textContent=(ge?(G=ge[Math.round(yt)])!=null?G:"":yt).toString(),T?H?J.style.top=`${100-ke}%`:J.style.top=`${ke}%`:H?J.style.left=`${100-ke}%`:J.style.left=`${ke}%`,E?.append(J)}},pe=(G,we)=>{We(),M=G,P=we,M<=0&&(M=i),P<=0&&(P=r),j(),Re(),oe()},Ie=G=>{y=G,y?(j(),Re(),oe()):We()},De=G=>{!u||u.style.setProperty("--marks-color",G)},Ye=G=>{!u||u.style.setProperty("--values-color",G)},We=()=>{u?.remove()};return{get name(){return"Marks"},init:(G,we,Be,T)=>{var H,ge;p=T,d=G,y=o(d.getAttribute("marks")),y&&(pe(n(d.getAttribute("marks-count"),i),n(d.getAttribute("marks-values-count"),r)),De((H=d.getAttribute("marks-color"))!=null?H:"#cbd5e1"),Ye((ge=d.getAttribute("marks-values-color"))!=null?ge:"#475569"))},onAttrChange:(G,we)=>{G==="marks"&&Ie(o(we)),G==="marks-count"&&pe(n(we,i),P),G==="marks-values-count"&&pe(M,n(we,r)),G==="marks-color"&&De(we),G==="marks-values-color"&&Ye(we)},gettersAndSetters:[{name:"marksEnabled",attributes:{get(){return y??!1},set:G=>{Ie(o(G))}}},{name:"marksCount",attributes:{get(){return M??i},set:G=>{pe(n(G,i),P)}}},{name:"marksValuesCount",attributes:{get(){return M??i},set:G=>{pe(M,n(G,r))}}},{name:"marksColor",attributes:{get(){return u?.style.getPropertyValue("--marks-color")},set:G=>{De(G)}}},{name:"markValuesColor",attributes:{get(){return u?.style.getPropertyValue("--values-color")},set:G=>{Ye(G)}}}],destroy:We,css:`
:root{
  --marks-color: #cbd5e1;
  --values-color: #475569;
}
  
.marks{
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  top: 100%;
  left: 0;
  color: var(--values-color, #475569);
}

.type-vertical .marks{
  width: auto;
  height: 100%;
  top: 0;
  left: 100%;
  flex-direction: row;
}
    
.mark-points{
  width: 100%;
  height: 1rem;
  position: relative;
  margin-top: 5px;
}  

.type-vertical .mark-points {
  width: 1rem;
  height: 100%;
  margin-top: 0;
  margin-left: 5px;
}

.mark-values{
  width: 100%;
  height: 1rem;
  position: relative;
}

.type-vertical .mark-values {
  width: 1rem;
  height: 100%;
  margin-left: 0.7rem;
}

.mark{
  background: var(--marks-color, #cbd5e1);
  width: 2px;
  height: 5px;
  position: absolute;
  transform: translateX(-50%);
}  

.type-vertical .mark {
    width: 5px;
    height: 2px;
    transform: translateY(-50%);
}

.mark-value{
  position: absolute;
  transform: translateX(-50%);
}

.type-vertical .mark-value{
    transform: translateY(-50%);
}
    `}};window.tcRangeSliderPlugins.push(a)})(),(()=>{var e=Object.defineProperty,t=Math.pow,n=(s,c,v)=>c in s?e(s,c,{enumerable:!0,configurable:!0,writable:!0,value:v}):s[c]=v,o=(s,c,v)=>(n(s,typeof c!="symbol"?c+"":c,v),v),i=(s,c)=>` ${c&&c.length>0?c.map(v=>`<link rel="stylesheet" href="${v}" />`).join(""):""} <style> ${s} </style> <div class="range-slider-box"> <div class="row"> <div id="range-slider" class="range-slider"> <div class="container"> <div class="panel"></div> <div class="panel-fill"></div> <div class="container"> <div class="pointer" tabindex="0" role="slider"> <div class="pointer-shape"></div> </div> </div> </div> </div> </div> </div>`,r=":host{--width:300px;--height:.25rem;--opacity:.4;--panel-bg:#cbd5e1;--panel-bg-hover:#94a3b8;--panel-bg-fill:#475569;--panel-bg-border-radius:1rem;--pointer-width:1rem;--pointer-height:1rem;--pointer-bg:#fff;--pointer-bg-hover:#dcdcdc;--pointer-bg-focus:#dcdcdc;--pointer-shadow:0 0 2px rgba(0,0,0,0.8);--pointer-shadow-hover:0 0 2px #000;--pointer-shadow-focus:var(--pointer-shadow-hover);--pointer-border:1px solid hsla(0,0%,88%,0.5);--pointer-border-hover:1px solid #94a3b8;--pointer-border-focus:var(--pointer-border-hover);--pointer-border-radius:100%;--animate-onclick:.3s}:host{max-width:100%}.range-slider-box{display:flex;position:relative;flex-direction:column}.range-slider{position:relative;width:var(--width,100%);height:var(--height,0.25rem);touch-action:none;max-width:100%;box-sizing:border-box;cursor:pointer}.row{width:100%;display:flex;align-items:center}.range-slider.disabled{opacity:var(--opacity,0.4);cursor:default}.pointer.disabled{-webkit-filter:brightness(0.8);filter:brightness(0.8);cursor:default}.range-slider *{box-sizing:border-box}.container{position:absolute;width:100%;height:100%}.panel{position:absolute;z-index:10;width:100%;height:100%;background:var(--panel-bg,#2d4373);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;transition:.3s all ease}.panel-fill{background:var(--panel-bg-fill,#000);border-radius:var(--panel-bg-border-radius,1rem);overflow:hidden;height:100%;position:absolute;z-index:10}.panel:hover{background:var(--panel-bg-hover,#5f79b7)}.disabled .panel:hover{background:var(--panel-bg,#5f79b7)}.pointer{position:absolute;z-index:20;outline:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;box-shadow:var(--pointer-shadow);border:var(--pointer-border);border-radius:var(--pointer-border-radius,100%);-webkit-transform:translateX(-50%);transform:translateX(-50%);width:var(--pointer-width,15px);height:var(--pointer-height,15px);transition:.3s all ease}.pointer-shape:hover{background:var(--pointer-bg-hover,#fff);background-size:contain;border:var(--pointer-border-hover);box-shadow:var(--pointer-shadow-hover)}.disabled .pointer-shape:hover{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.pointer:focus .pointer-shape{background:var(--pointer-bg-focus,#fff);background-size:contain;border:var(--pointer-border-focus);box-shadow:var(--pointer-shadow-focus)}.disabled .pointer:focus .pointer-shape{background:var(--pointer-bg,#fff);background-size:contain;border:var(--pointer-border);box-shadow:var(--pointer-shadow)}.type-vertical .range-slider{--width:.25rem;--height:300px;max-height:100%}.type-vertical .range-slider .pointer{left:50%}.type-vertical .range-slider .panel-fill{width:100%}.type-vertical.range-slider-box{flex-direction:row}.type-vertical .row{flex-direction:column}.animate-on-click .pointer,.animate-on-click .panel-fill{transition:all var(--animate-onclick)}.range-dragging .panel-fill{cursor:move}",a="pointers-overlap",d="pointers-min-distance",p="pointers-max-distance",u="range-dragging",h="data",E="min",y="max",M="step",P="round",j="type",oe="theme",Re="rtl",pe="btt",Ie="disabled",De="keyboard-disabled",Ye="mousewheel-disabled",We="slider-width",G="slider-height",we="slider-radius",Be="slider-bg",T="slider-bg-hover",H="slider-bg-fill",ge="pointer-width",ce="pointer-height",J="pointer-radius",ke="pointer-bg",yt="pointer-bg-hover",wh="pointer-bg-focus",kh="pointer-shadow",yh="pointer-shadow-hover",Eh="pointer-shadow-focus",Ih="pointer-border",xh="pointer-border-hover",Ah="pointer-border-focus",Zr="animate-onclick",Sh="css-links",je="vertical",Ft="horizontal",Qo=(s,c,v,g,x)=>{let L=c-s;return L===0?v:(g-v)*(x-s)/L+v},at=s=>!isNaN(parseFloat(s))&&isFinite(s),de=(s,c)=>at(s)?Number(s):c,Qr=(s,c)=>c===0?0:Math.round(s/c)*c,_h=(s,c=1/0)=>{if(c===1/0)return s;let v=t(10,c);return Math.round(s*v)/v},ye=s=>s==null?!1:typeof s=="boolean"?s:s.trim().toLowerCase()==="true",Mh=(s,c)=>{s.dispatchEvent(new CustomEvent("onPointerClicked",{detail:{$pointer:c}}))},Ch=(s,c)=>{s.dispatchEvent(new CustomEvent("onMouseDown",{detail:{nativeEvent:c}}))},Oh=(s,c)=>{s.dispatchEvent(new CustomEvent("onMouseUp",{detail:{nativeEvent:c}}))},Th=(s,c)=>{s.dispatchEvent(new CustomEvent("onKeyDown",{detail:{nativeEvent:c}}))},$h=(s,c)=>{if(!c||c.length<=0)return;let v=c.map(x=>at(x)?de(x,x):x),g={values:v||[]};g.value=v[0],g.value0=v[0],g.value1=v[0];for(let x=1;x<v.length;x++)g[`value${x+1}`]=v[x];s.dispatchEvent(new CustomEvent("change",{detail:g}))},qo=(s,c,v)=>{let g=0,x,L,F,A,S=!1,V=(D,K,fe,me,ie,re)=>{let Me=g;fe!==void 0&&D>fe&&(D=fe),K!==void 0&&D<K&&(D=K),g=D;let Ce=g;return(me===je&&re||me===Ft&&ie)&&(Ce=100-Ce),me===je?c.style.top=`${Ce}%`:c.style.left=`${Ce}%`,Me!==g},W=D=>D===c||c.contains(D),$=(D,K,fe,me)=>{x=D,L=K,F=fe,A=me},q=D=>{S=D,c.classList.toggle("disabled",S),S?c.setAttribute("aria-disabled","true"):c.hasAttribute("aria-disabled")&&c.removeAttribute("aria-disabled")},He=(D,K)=>{K==null?c.removeAttribute(D):c.setAttribute(D,K)},Ee=D=>c.getAttribute(D),R=D=>{if(!S){switch(D.key){case"ArrowLeft":{D.preventDefault(),typeof x=="function"&&x(v);break}case"ArrowRight":{D.preventDefault(),typeof L=="function"&&L(v);break}case"ArrowUp":{D.preventDefault(),typeof F=="function"&&F(v);break}case"ArrowDown":{D.preventDefault(),typeof A=="function"&&A(v);break}}Th(s,D)}},U=()=>{S||Mh(s,c)};return c.className=`pointer pointer-${v}`,c.addEventListener("keydown",R),c.addEventListener("click",U),{$pointer:c,get percent(){return g},get disabled(){return S},set disabled(D){q(D)},updatePosition:V,isClicked:W,setCallbacks:$,setAttr:He,getAttr:Ee,destroy:()=>{c.removeEventListener("keydown",R),c.removeEventListener("click",U),c.remove()}}},Lh=s=>{if(s==null)return;if(Array.isArray(s))return s;if(s.trim()==="")return;let c=s.split(","),v=[],g=!0;for(let x=0;x<c.length;x++){let L=c[x].trim();L!==""&&(v.push(L),at(L)||(g=!1))}return g?v.map(x=>Number(x)):v},Rh=(s,c)=>c?c.findIndex(v=>v===s||v.toString().trim()===s.toString().trim()):-1,Dh=s=>({updatePosition:(c,v,g,x)=>{if(v.length<=0)return;let L=v.length===1,F=v[0],A=v[v.length-1];c===je?(s.style.removeProperty("width"),s.style.removeProperty("right"),s.style.removeProperty("left"),L?s.style.height=`${F}%`:s.style.height=`${Math.abs(F-A)}%`,x?(s.style.bottom="0%",L?s.style.top="auto":s.style.top=`${Math.min(100-A,100-F)}%`):(s.style.bottom="auto",L?s.style.top="0%":s.style.top=`${Math.min(F,A)}%`)):(s.style.removeProperty("height"),s.style.removeProperty("top"),s.style.removeProperty("bottom"),L?s.style.width=`${F}%`:s.style.width=`${Math.abs(F-A)}%`,g?(s.style.right="0%",L?s.style.left="auto":s.style.left=`${Math.min(100-A,100-F)}%`):(s.style.right="auto",L?s.style.left="0%":s.style.left=`${Math.min(F,A)}%`))}}),qr="--animate-onclick",Ph="--width",Nh="--height",zh="--panel-bg-border-radius",Bh="--panel-bg",Hh="--panel-bg-hover",Fh="--panel-bg-fill",Gh="--pointer-width",Vh="--pointer-height",Uh="--pointer-border-radius",Wh="--pointer-bg",jh="--pointer-bg-hover",Zh="--pointer-bg-focus",Qh="--pointer-shadow",qh="--pointer-shadow-hover",Yh="--pointer-shadow-focus",Xh="--pointer-border",Kh="--pointer-border-hover",Jh="--pointer-border-focus",eo=(s,c,v)=>{let g=new Map;for(let x of s.attributes){let L=x.nodeName.trim().toLowerCase();if(!c.test(L))continue;let F=L.replace(/\D/g,"").trim(),A=F===""||F==="0"||F==="1"?0:de(F,0)-1,S=v&&typeof v=="function"?v(x.value):x.value;g.set(A,S)}return g},e2=s=>{if(!s)return null;let c=s.getAttribute(Sh);if(!c)return null;let v=c.split(";"),g=[];for(let x of v)x.trim()!==""&&g.push(x.trim());return g},Yr=[[Ph,We,"sliderWidth",null],[Nh,G,"sliderHeight",null],[zh,we,"sliderRadius",null],[Bh,Be,"sliderBg",null],[Hh,T,"sliderBgHover",null],[Fh,H,"sliderBgFill",null],[Gh,ge,"pointer#Width",/^pointer([0-9]*)-width$/],[Vh,ce,"pointer#Height",/^pointer([0-9]*)-height$/],[Uh,J,"pointer#Radius",/^pointer([0-9]*)-radius$/],[Wh,ke,"pointer#Bg",/^pointer([0-9]*)-bg$/],[jh,yt,"pointer#BgHover",/^pointer([0-9]*)-bg-hover$/],[Zh,wh,"pointer#BgFocus",/^pointer([0-9]*)-bg-focus$/],[Qh,kh,"pointer#Shadow",/^pointer([0-9]*)-shadow$/],[qh,yh,"pointer#ShadowHover",/^pointer([0-9]*)-shadow-hover$/],[Yh,Eh,"pointer#ShadowFocus",/^pointer([0-9]*)-shadow-focus$/],[Xh,Ih,"pointer#Border",/^pointer([0-9]*)-border$/],[Kh,xh,"pointer#BorderHover",/^pointer([0-9]*)-border-hover$/],[Jh,Ah,"pointer#BorderFocus",/^pointer([0-9]*)-border-focus$/]],t2=(s,c,v)=>{let g=null,x=[],L=new Map,F=(R,U=c)=>{let D=[...U.classList];for(let K of D)K.startsWith(R)&&c.classList.remove(K)},A=()=>{F("shape");let R=c.querySelectorAll(".pointer");for(let U of R)F("shape",U)},S=R=>{g=R,F("theme-"),typeof R=="string"&&c.classList.add(`theme-${R}`)},V=()=>{if(A(),!(x.length<=0)){c.classList.add("shape",`shape-${x[0]}`);for(let R=1;R<x.length;R++){let U=x[R];if(!U)continue;let D=c.querySelector(`.pointer-${R}`);!D||D.classList.add("shape",`shape-${U}`)}}},W=(R,U)=>{x[R]=U,V()},$=()=>{A();let R=eo(s,/^pointer([0-9]*)-shape$/);if(!(R.size<=0)){for(let U of R){let D=U[0];x[D]=U[1]}V()}},q=(R,U)=>`${R}-${U}`,He=(R,U,D)=>{let K=v[D];if(!K)return;let fe=D===0?c:K.$pointer;if(U==null){L.has(q(R,D))&&L.delete(q(R,D)),fe.style.removeProperty(R);return}L.set(q(R,D),U),fe.style.setProperty(R,U)},Ee=(R,U)=>L.get(q(R,U));return(()=>{for(let R of Yr){let[U,D,K,fe]=R;if(fe){let ie=eo(s,fe);for(let re of ie){let Me=re[0],Ce=re[1];He(U,Ce,Me)}}else{let ie=s.getAttribute(D);He(U,ie,0)}let me=[];if(K.indexOf("#")===-1)me.push([K,0]);else{me.push([K.replace("#",""),0]),me.push([K.replace("#","0"),0]),me.push([K.replace("#","1"),0]);for(let ie=1;ie<v.length;ie++)me.push([K.replace("#",(ie+1).toString()),ie])}for(let ie of me)try{let re=ie[0],Me=ie[1];Object.prototype.hasOwnProperty.call(s,re)||Object.defineProperty(s,re,{get(){return Ee(U,Me)},set:Ce=>{He(U,Ce,Me)}})}catch(re){console.error(re)}}S(s.getAttribute(oe)),$()})(),{setStyle:He,getStyle:Ee,get theme(){return g},set theme(R){S(R)},get pointerShapes(){return x},setPointerShape:W}},Gt="animate-on-click",Xr="range-dragging",n2=(s,c,v,g)=>{let x=[],L=W=>{for(let $ of x)$.update&&typeof $.update=="function"&&$.update(W)},F=()=>{for(let W of x)W.destroy&&typeof W.destroy=="function"&&W.destroy()},A=(W,$)=>{for(let q of x)q.onAttrChange&&typeof q.onAttrChange=="function"&&q.onAttrChange(W,$)},S=W=>{if(W.gettersAndSetters){for(let $ of W.gettersAndSetters)if(!(!$.name||!$.attributes))try{Object.prototype.hasOwnProperty.call(s,$.name)||Object.defineProperty(s,$.name,$.attributes)}catch(q){console.error("defineSettersGetters error:",q)}}},V=W=>{var $;if(!W.css)return;let q=($=s.shadowRoot)==null?void 0:$.querySelector("style");!q||(q.innerHTML+=W.css)};return{init:()=>{if(window.tcRangeSliderPlugins)for(let W of window.tcRangeSliderPlugins){let $=W();x.push($),$.init&&typeof $.init=="function"&&($.init(s,c,v,g),S($),V($))}},update:L,onAttrChange:A,destroy:F}},o2=10,Kr=20,i2=(s,c)=>{let v=new Map,g=/^value([0-9]*)$/;for(let A of s.attributes){let S=A.nodeName.trim().toLowerCase();if(!g.test(S))continue;let V=S.replace("value","").trim(),W=V===""||V==="0"||V==="1"?0:de(V,0)-1,$=at(A.value)?de(A.value,0):A.value;v.set(W,$)}let x=Math.max(...Array.from(v.keys())),L=[];L.push([qo(s,c,0),v.get(0)]);let F=c;for(let A=1;A<=x;A++){let S=c.cloneNode(!0);F.after(S),F=S,L.push([qo(s,S,A),v.get(A)])}return L},Jr=(s,c,v,g,x,L,F)=>{try{Object.defineProperty(s,g,{configurable:!0,get(){if(!c)return;let A=c.pointers[v];if(!A)return;let S=c.getTextValue(A.percent);return at(S)?de(S,S):S},set:A=>{c.pointers[v]?c?.setValue(A,v):c?.addPointer(A)}}),Object.defineProperty(s,x,{configurable:!0,get(){var A,S;return(S=(A=c?.pointers[v])==null?void 0:A.getAttr("aria-label"))!=null?S:void 0},set:A=>{!c||c.setAriaLabel(v,A)}}),Object.defineProperty(s,L,{configurable:!0,get(){var A,S;return(S=(A=c?.styles)==null?void 0:A.pointerShapes[v])!=null?S:null},set:A=>{!c||!c.styles||c.styles.setPointerShape(v,A)}}),Object.defineProperty(s,F,{configurable:!0,get(){var A;return(A=c?.pointers[v].disabled)!=null?A:!1},set:A=>{if(!c)return;let S=c?.pointers[v];!S||(S.disabled=A)}})}catch(A){console.error(A)}},r2=(s,c)=>{let v=[["value","ariaLabel","pointerShape","pointerDisabled",0],["value0","ariaLabel0","pointerShape0","pointer0Disabled",0],["value1","ariaLabel1","pointerShape1","pointer1Disabled",0]];for(let g=2;g<o2;g++)v.push([`value${g}`,`ariaLabel${g}`,`pointer${g}Shape`,`pointer${g}Disabled`,g-1]);for(let g of v)Jr(s,c,g[4],g[0],g[1],g[2],g[3])},ea=(s,c,v)=>{var g;let x=(g=v.shadowRoot)==null?void 0:g.querySelector(".container");if(x)for(let L of s)c?x.prepend(L.$pointer):x.append(L.$pointer)},a2=(s,c)=>{if(!(!c||s.length<=1)){for(let v of s)v.$pointer.style.zIndex=Kr.toString();c.$pointer.style.zIndex=(Kr*2).toString()}},Yo=0,In=100,Vt=2,ta="0.3s",s2=(s,c,v)=>{let g=v.map(l=>l[0]),x=null,L=null,F=null,A=null,S=Yo,V=In,W,$,q=Ft,He=Vt,Ee=!1,R=!1,U=!1,D=0,K=1/0,fe=!1,me,ie,re=!1,Me=!1,Ce=!1,ct=ta,na=[],oa=l=>{re||(l.preventDefault&&l.preventDefault(),Et(l),window.addEventListener("mousemove",Et),window.addEventListener("mouseup",to),Ch(s,l))},to=l=>{re||(me=void 0,ie=void 0,window.removeEventListener("mousemove",Et),window.removeEventListener("mouseup",to),ct&&c.classList.add(Gt),Oh(s,l))},d2=(l,b)=>{if(g.length<=0)return;if(g.length===1)return g[0].isClicked(l)&&ct&&c.classList.remove(Gt),g[0];let C=u2(l);if(fe){let Q=b,Ze=oo(Q);Ze!==void 0&&(Q=Qr(Q,Ze)),C?(me=Q,ie=0,ct&&c.classList.remove(Gt)):me!==void 0&&(ie=Q-me,me=Q)}if(!h2(l)&&!C){for(let Q of g)if(!(!Q.isClicked(l)||Q.disabled))return ct&&c.classList.remove(Gt),Q;for(let Q of g)if(x===Q)return Q}let Y=1/0,ae=null;for(let Q of g){if(Q.disabled)continue;let Ze=Math.abs(b-Q.percent);Ze<Y&&(Y=Ze,ae=Q)}return ae},ia=()=>g.findIndex(l=>x===l&&!l.disabled),Et=l=>{let b;if(q===je){let{height:Y,top:ae}=c.getBoundingClientRect(),Q=l.type.indexOf("mouse")!==-1?l.clientY:l.touches[0].clientY;b=Math.min(Math.max(0,Q-ae),Y)*100/Y}else{let{width:Y,left:ae}=c.getBoundingClientRect(),Q=l.type.indexOf("mouse")!==-1?l.clientX:l.touches[0].clientX;b=Math.min(Math.max(0,Q-ae),Y)*100/Y}if((Ee||R)&&(b=100-b),x=d2(l.target,b),x&&a2(g,x),fe&&g.length>1&&ie!==void 0){let Y=g[0],ae=g[g.length-1],Q=Y.percent+ie<0,Ze=ae.percent+ie>100;if(Q||Ze)return;for(let uo=0;uo<g.length;uo++)Oe(uo,g[uo].percent+ie);return}let C=ia();C!==-1&&(Oe(C,b),x?.$pointer.focus())},no=l=>{if(re||document.activeElement!==s||x?.disabled)return;l.stopPropagation(),l.preventDefault();let b=l.deltaY<0,C=Ee||R,Y=b?!C:C,ae=ia();ae!==-1&&(Y?xn(ae,g[ae].percent):An(ae,g[ae].percent))},ra=l=>{re||Me||(q===je?R?Oe(l,100):Oe(l,0):Ee?An(l,g[l].percent):xn(l,g[l].percent))},aa=l=>{re||Me||(q===je?R?Oe(l,0):Oe(l,100):Ee?xn(l,g[l].percent):An(l,g[l].percent))},sa=l=>{re||Me||(q===je?R?An(l,g[l].percent):xn(l,g[l].percent):Ee?Oe(l,100):Oe(l,0))},la=l=>{re||Me||(q===je?R?xn(l,g[l].percent):An(l,g[l].percent):Ee?Oe(l,0):Oe(l,100))},h2=l=>l.classList.contains("panel"),u2=l=>l.classList.contains("panel-fill"),xn=(l,b)=>{if(b===void 0)return;let C=oo(b);C==null&&(C=1),b-=C,b<0&&(b=0),Oe(l,b)},An=(l,b)=>{if(b===void 0)return;let C=oo(b);C==null&&(C=1),b+=C,b>100&&(b=100),Oe(l,b)},It=()=>{!A||A.update({percents:ca(),values:da(),$pointers:ha(),min:ua(),max:pa(),data:Jo(),step:Ko(),round:ti(),type:ei(),textMin:io(),textMax:ro(),rightToLeft:ii(),bottomToTop:ri(),pointersOverlap:ci(),pointersMinDistance:ni(),pointersMaxDistance:oi(),rangeDragging:di(),disabled:ai(),keyboardDisabled:si(),mousewheelDisabled:li()})},p2=()=>{It()},g2=l=>{if(!(U||g.length<=1||V===S))if(l===0){let b=K*100/(V-S);return Math.max(0,g[l+1].percent-b)}else{let b=D*100/(V-S);return Math.min(g[l-1].percent+b,100)}},m2=l=>{if(!(U||g.length<=1||V===S))if(l===g.length-1){let b=K*100/(V-S);return Math.min(g[l-1].percent+b,100)}else{let b=D*100/(V-S);return Math.max(0,g[l+1].percent-b)}},oo=l=>{let b;if(typeof W=="function"){let C=Qo(0,100,S,V,l);b=W(C,l)}else b=W;if(at(b)){let C=V-S;return b=C===0?0:b*100/C,b}},Ut=l=>{if(l===void 0)return;let b=Qo(0,100,S,V,l);return $!==void 0?$[Math.round(b)]:_h(b,He)},io=()=>$!==void 0?$[S]:S,ro=()=>$!==void 0?$[V]:V,Ko=()=>W,f2=l=>{var b;return l<=0||U?io():(b=Ut(g[l-1].percent))!=null?b:""},v2=l=>{var b;return g.length<=1||l>=g.length-1||U?ro():(b=Ut(g[l+1].percent))!=null?b:""},ca=()=>g.map(l=>l.percent),da=()=>g.map(l=>Ut(l.percent)),ha=()=>g.map(l=>l.$pointer),ua=()=>S,pa=()=>V,Jo=()=>$,ei=()=>q,ti=()=>He,ni=()=>D,oi=()=>K,b2=l=>na[l],ii=()=>Ee,ri=()=>R,ai=()=>re,si=()=>Me,li=()=>Ce,ci=()=>U,di=()=>fe,Oe=(l,b)=>{if(b===void 0)return;let C=oo(b);C!==void 0&&(b=Qr(b,C));let Y=g[l];if(!Y)return;let ae=Y.updatePosition(b,g2(l),m2(l),q,Ee,R);L?.updatePosition(q,g.map(Q=>Q.percent),Ee,R),It();for(let Q of g){let Ze=Ut(Q.percent);Ze!==void 0&&(Q.setAttr("aria-valuenow",Ze.toString()),Q.setAttr("aria-valuetext",Ze.toString()))}k2(),ae&&$h(s,g.map(Q=>Ut(Q.percent)))},Xe=()=>{for(let l=0;l<g.length;l++)Oe(l,g[l].percent)},w2=(l,b)=>{S=$!==void 0?0:de(l,Yo),V=$!==void 0?$.length-1:de(b,In),ao(S),so(V)},k2=()=>{var l,b;for(let C=0;C<g.length;C++){let Y=g[C];Y.setAttr("aria-valuemin",((l=f2(C))!=null?l:"").toString()),Y.setAttr("aria-valuemax",((b=v2(C))!=null?b:"").toString())}},ao=l=>{S=de(l,Yo),S>V&&(V=S+In),Xe()},so=l=>{V=de(l,In),V<S&&(V=S+In),Xe()},ga=l=>{U=!0;for(let b=0;b<l.length;b++)lo(l[b],b);U=!1;for(let b=0;b<l.length;b++)lo(l[b],b)},lo=(l,b)=>{let C;$!==void 0?(C=l==null?0:Rh(l,$),C===-1&&(C=0)):(C=de(l,S),C<S&&(C=S),C>V&&(C=V));let Y=Qo(S,V,0,100,C);Oe(b,Y)},co=l=>{if(l==null){W=void 0;return}if(typeof l=="function"){W=l,Xe();return}if(at(l)){W=de(l,1);let b=Math.abs(V-S);W>b&&(W=void 0),Xe();return}W=void 0},hi=l=>{U=l,Xe()},ui=l=>{(!at(l)||l<0)&&(l=0),D=l},pi=l=>{(!at(l)||l<0)&&(l=1/0),K=l},gi=l=>{re=l,c.classList.toggle("disabled",re),re?c.setAttribute("aria-disabled","true"):c.hasAttribute("aria-disabled")&&c.removeAttribute("aria-disabled")},ma=l=>{Me=l},fa=l=>{Ce=l,Ce?document.removeEventListener("wheel",no):document.addEventListener("wheel",no,{passive:!1})},mi=l=>{if(l==null){$=void 0;return}if($=Lh(l),$===void 0||$.length<=0){$=void 0;return}ao(0),so($.length-1),W===void 0&&co(1)},fi=l=>{var b;typeof l=="string"?q=l.trim().toLowerCase()===je?je:Ft:q=Ft;let C=(b=s.shadowRoot)==null?void 0:b.querySelector(".range-slider-box");if(!C)return;C.className=`range-slider-box type-${q}`,Xe();let Y=q===je?"vertical":"horizontal";for(let ae of g)ae.setAttr("aria-orientation",Y)},vi=l=>{Ee=l,g.length>1&&ea(g,Ee,s),Xe(),It()},bi=l=>{R=l,g.length>1&&ea(g,R,s),Xe(),It()},wi=l=>{He=de(l,Vt),He<0&&(He=Vt),It()},va=l=>{l==null||l.toString().trim().toLowerCase()==="false"?(ct=void 0,c.style.removeProperty(qr),c.classList.remove(Gt)):(ct=l.toString(),c.style.setProperty(qr,ct),c.classList.add(Gt))},ba=(l,b)=>{let C=g[l];!C||(C.setAttr("aria-label",b),na[l]=b)},ho=l=>{if(me=void 0,g.length<=1){fe=!1,c.classList.remove(Xr);return}fe=l,c.classList.toggle(Xr,fe)},y2=()=>{gi(ye(s.getAttribute(Ie))),Me=ye(s.getAttribute(De)),Ce=ye(s.getAttribute(Ye));let l=eo(s,/^pointer([0-9]*)-disabled$/,b=>ye(b));for(let b of l){let C=b[0];!g[C]||(g[C].disabled=b[1])}},E2=()=>{let l=eo(s,/^aria-label([0-9]*)$/);for(let b of l){let C=b[0];ba(C,b[1])}},I2=l=>{let b=g.length,C=g[b-1].$pointer,Y=C.cloneNode(!0);C.after(Y);let ae=qo(s,Y,b);return ae.setCallbacks(ra,aa,sa,la),g.push(ae),lo(l,b),Xe(),It(),b},x2=()=>{let l=g.length,b=g[l-1];return b?(b.destroy(),g.pop(),g.length<=1&&ho(!1),Xe(),It(),l-1):-1};return(()=>{var l,b;for(let Y of g)Y.setCallbacks(ra,aa,sa,la);let C=(l=s.shadowRoot)==null?void 0:l.querySelector(".panel-fill");C&&(L=Dh(C)),fi(s.getAttribute(j)),vi(ye(s.getAttribute(Re))),bi(ye(s.getAttribute(pe))),w2(s.getAttribute(E),s.getAttribute(y)),co(s.getAttribute(M)),mi(s.getAttribute(h)),ga(v.map(Y=>Y[1])),hi(ye(s.getAttribute(a))),ui(de(s.getAttribute(d),0)),pi(de(s.getAttribute(p),1/0)),ho(ye(s.getAttribute(u))),wi(de(s.getAttribute(P),Vt)),y2(),E2(),F=t2(s,c,g),va((b=s.getAttribute(Zr))!=null?b:ta),c.addEventListener("mousedown",oa),c.addEventListener("mouseup",to),c.addEventListener("touchmove",Et),c.addEventListener("touchstart",Et),Ce||document.addEventListener("wheel",no,{passive:!1}),A=n2(s,p2,{setValues:ga,setMin:ao,setMax:so,setStep:co,setPointersOverlap:hi,setPointersMinDistance:ui,setPointersMaxDistance:pi,setDisabled:gi,setType:fi,setRightToLeft:vi,setBottomToTop:bi,setRound:wi,setKeyboardDisabled:ma,setMousewheelDisabled:fa,setRangeDragging:ho,setData:mi},{getPercents:ca,getValues:da,getPointerElements:ha,getMin:ua,getMax:pa,getStep:Ko,getData:Jo,getType:ei,getRound:ti,getTextMin:io,getTextMax:ro,isRightToLeft:ii,isBottomToTop:ri,isDisabled:ai,isKeyboardDisabled:si,isMousewheelDisabled:li,isPointersOverlap:ci,isRangeDraggingEnabled:di,getPointersMinDistance:ni,getPointersMaxDistance:oi}),A.init()})(),{get pointers(){return g},get styles(){return F},get pluginsManager(){return A},get min(){return io()},get max(){return ro()},get step(){return Ko()},get pointersOverlap(){return ci()},set pointersOverlap(l){hi(l)},get pointersMinDistance(){return ni()},set pointersMinDistance(l){ui(l)},get pointersMaxDistance(){return oi()},set pointersMaxDistance(l){pi(l)},get disabled(){return ai()},set disabled(l){gi(l)},get data(){return Jo()},get type(){return ei()},set type(l){fi(l)},get rightToLeft(){return ii()},set rightToLeft(l){vi(l)},get bottomToTop(){return ri()},set bottomToTop(l){bi(l)},get round(){return ti()},set round(l){wi(l)},get animateOnClick(){return ct},set animateOnClick(l){va(l)},get keyboardDisabled(){return si()},set keyboardDisabled(l){ma(l)},get mousewheelDisabled(){return li()},set mousewheelDisabled(l){fa(l)},get rangeDragging(){return di()},set rangeDragging(l){ho(l)},setMin:ao,setMax:so,setValue:lo,setStep:co,setData:mi,getTextValue:Ut,setAriaLabel:ba,getAriaLabel:b2,addPointer:I2,removePointer:x2,destroy:()=>{c.removeEventListener("mousedown",oa),c.removeEventListener("mouseup",to),c.removeEventListener("touchmove",Et),c.removeEventListener("touchstart",Et),document.removeEventListener("wheel",no);for(let l of g)l.destroy();A?.destroy()}}},l2=(s,c,v)=>{let g=Yr.find(([A,S,V,W])=>S.replace("#","")===c.replace(/\d+/g,""));if(g&&s.styles){let[A,S,V,W]=g,$=c.replace(/\D/g,"").trim(),q=$===""||$==="0"||$==="1"?0:de($,0)-1;s.styles.setStyle(A,v,q);return}switch(s&&s.pluginsManager&&s.pluginsManager.onAttrChange(c,v),c){case E:{s.setMin(v);break}case y:{s.setMax(v);break}case M:{s.setStep(v);break}case a:{s.pointersOverlap=ye(v);break}case d:{s.pointersMinDistance=de(v,0);break}case u:{s.rangeDragging=ye(v);break}case p:{s.pointersMaxDistance=de(v,1/0);break}case Ie:{s.disabled=ye(v);break}case De:{s.keyboardDisabled=ye(v);break}case Ye:{s.mousewheelDisabled=ye(v);break}case h:{s.setData(v);break}case j:{s.type=v;break}case Re:{s.rightToLeft=ye(v);break}case pe:{s.bottomToTop=ye(v);break}case P:{s.round=de(v,Vt);break}case oe:{s.styles&&(s.styles.theme=v);break}case Zr:{s.animateOnClick=v;break}}let x=null;if(/^value([0-9]*)$/.test(c)&&(x="value"),/^pointer([0-9]*)-disabled$/.test(c)&&(x="pointer-disabled"),/^aria-label([0-9]*)$/.test(c)&&(x="aria-label"),/^pointer([0-9]*)-shape$/.test(c)&&(x="pointer-shape"),!x)return;let L=c.replace(/\D/g,"").trim(),F=L===""||L==="0"||L==="1"?0:de(L,0)-1;switch(x){case"value":{s.setValue(v,F);break}case"pointer-disabled":{let A=s?.pointers[F];if(!A)return;A.disabled=ye(v);break}case"aria-label":{s.setAriaLabel(F,v);break}case"pointer-shape":{s.styles&&s.styles.setPointerShape(F,v);break}}},c2=class extends HTMLElement{constructor(){super(),o(this,"slider"),o(this,"_externalCSSList",[]),o(this,"_observer",null),this.attachShadow({mode:"open"})}set step(s){this.slider&&this.slider.setStep(s)}get step(){var s;return(s=this.slider)==null?void 0:s.step}set disabled(s){this.slider&&(this.slider.disabled=s)}get disabled(){var s,c;return(c=(s=this.slider)==null?void 0:s.disabled)!=null?c:!1}set data(s){var c;(c=this.slider)==null||c.setData(s)}get data(){var s;return(s=this.slider)==null?void 0:s.data}set min(s){var c;(c=this.slider)==null||c.setMin(s)}get min(){var s;return(s=this.slider)==null?void 0:s.min}set max(s){var c;(c=this.slider)==null||c.setMax(s)}get max(){var s;return(s=this.slider)==null?void 0:s.max}set round(s){!this.slider||(this.slider.round=s)}get round(){var s,c;return(c=(s=this.slider)==null?void 0:s.round)!=null?c:Vt}set type(s){!this.slider||(this.slider.type=s??Ft)}get type(){var s;return((s=this.slider)==null?void 0:s.type)||Ft}set pointersOverlap(s){!this.slider||(this.slider.pointersOverlap=s)}get pointersOverlap(){var s,c;return(c=(s=this.slider)==null?void 0:s.pointersOverlap)!=null?c:!1}set pointersMinDistance(s){!this.slider||(this.slider.pointersMinDistance=s)}get pointersMinDistance(){var s,c;return(c=(s=this.slider)==null?void 0:s.pointersMinDistance)!=null?c:0}set pointersMaxDistance(s){!this.slider||(this.slider.pointersMaxDistance=s)}get pointersMaxDistance(){var s,c;return(c=(s=this.slider)==null?void 0:s.pointersMaxDistance)!=null?c:1/0}set theme(s){!this.slider||!this.slider.styles||(this.slider.styles.theme=s)}get theme(){var s,c,v;return(v=(c=(s=this.slider)==null?void 0:s.styles)==null?void 0:c.theme)!=null?v:null}set rtl(s){!this.slider||(this.slider.rightToLeft=s)}get rtl(){var s,c;return(c=(s=this.slider)==null?void 0:s.rightToLeft)!=null?c:!1}set btt(s){!this.slider||(this.slider.bottomToTop=s)}get btt(){var s,c;return(c=(s=this.slider)==null?void 0:s.bottomToTop)!=null?c:!1}set keyboardDisabled(s){!this.slider||(this.slider.keyboardDisabled=s)}get keyboardDisabled(){var s,c;return(c=(s=this.slider)==null?void 0:s.keyboardDisabled)!=null?c:!1}set mousewheelDisabled(s){!this.slider||(this.slider.mousewheelDisabled=s)}get mousewheelDisabled(){var s,c;return(c=(s=this.slider)==null?void 0:s.mousewheelDisabled)!=null?c:!1}set animateOnClick(s){!this.slider||(this.slider.animateOnClick=s)}get animateOnClick(){var s;return(s=this.slider)==null?void 0:s.animateOnClick}get rangeDragging(){var s,c;return(c=(s=this.slider)==null?void 0:s.rangeDragging)!=null?c:!1}set rangeDragging(s){this.slider&&(this.slider.rangeDragging=ye(s))}get externalCSSList(){return this._externalCSSList}addPointer(s){var c,v;if(!this.slider)return;let g=(v=(c=this.slider)==null?void 0:c.addPointer(s))!=null?v:0;Jr(this,this.slider,g,`value${g+1}`,`ariaLabel${g+1}`,`pointerShape${g+1}`,`pointer${g+1}Disabled`)}removePointer(){var s;!this.slider||(s=this.slider)==null||s.removePointer()}addCSS(s){if(!this.shadowRoot)return;let c=document.createElement("style");c.textContent=s,this.shadowRoot.appendChild(c)}connectedCallback(){var s,c;if(!this.shadowRoot)return;this._externalCSSList=e2(this),this.shadowRoot.innerHTML=i(r,this._externalCSSList);let v=(s=this.shadowRoot)==null?void 0:s.querySelector(".pointer");if(!v)return;let g=(c=this.shadowRoot)==null?void 0:c.getElementById("range-slider");if(!g)return;let x=i2(this,v);this.slider=s2(this,g,x),r2(this,this.slider),this._observer=new MutationObserver(L=>{L.forEach(F=>{var A;if(!this.slider||F.type!=="attributes")return;let S=F.attributeName;!S||l2(this.slider,S,(A=this.getAttribute(S))!=null?A:"")})}),this._observer.observe(this,{attributes:!0})}disconnectedCallback(){this._observer&&this._observer.disconnect(),this.slider&&this.slider.destroy()}},Xo=c2;window.tcRangeSlider=Xo,customElements.get("toolcool-range-slider")||customElements.define("toolcool-range-slider",Xo),customElements.get("tc-range-slider")||customElements.define("tc-range-slider",class extends Xo{})})();const ch=`#StartMOV {
  all: revert;
  backface-visibility: hidden;
  font-size: 2rem;
  color: #fff;
  cursor: pointer;
  margin: 0 auto;
  padding: 0.5rem 1rem;
  text-align: center;
  border: none;
  border-radius: 10px;
  min-height: 50px;
  width: 80%;
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 105000;
  transition: all 0.4s ease-in-out;
  background-size: 300% 100%;
  background-image: linear-gradient(to right, #667eea, #764ba2, #6b8dd6, #8e37d7);
  box-shadow: 0 4px 15px 0 rgba(116, 79, 168, 0.75);
}

#StartMOV:hover {
  background-position: 100% 0;
  transition: all 0.4s ease-in-out;
}

#StartMOV:focus {
  outline: none;
}
`;var dh=Object.defineProperty,hh=Object.getOwnPropertyDescriptor,kn=(e,t,n,o)=>{for(var i=o>1?void 0:o?hh(t,n):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(i=(o?a(t,n,i):a(i))||i);return o&&i&&dh(t,n,i),i};let kt=class extends X{constructor(){super(...arguments),this.mangaPages=0,this.begin=1,this.timeoutMs=3e3,this.status="initial-prompt"}connectedCallback(){super.connectedCallback(),this.status==="initial-prompt"&&(this.timeoutId=window.setTimeout(()=>{this.handleStart()},this.timeoutMs))}disconnectedCallback(){super.disconnectedCallback(),window.clearTimeout(this.timeoutId)}handleStart(){window.clearTimeout(this.timeoutId),this.dispatchEvent(new CustomEvent("start",{detail:null}))}handleLateStart(e,t){this.dispatchEvent(new CustomEvent("start",{detail:{begin:e,end:t}}))}handleButtonCLick(){this.status="late-start-prompt"}handleDialogClose(e){e.stopPropagation(),window.clearTimeout(this.timeoutId),this.status="late-start-button"}render(){switch(this.status){case"late-start-button":return this.renderLateStartButton();case"late-start-prompt":return this.renderLateStartPrompt();default:return this.renderInitialPrompt()}}renderInitialPrompt(){return w`
      <mov-dialog
        ?open=${this.status==="initial-prompt"}
        icon="info"
        @close=${this.handleDialogClose}
      >
        <span slot="label">${f("STARTING")}</span>
        <div style="padding: 1rem;">${f("WAITING")}</div>
        <div
          slot="footer"
          style="display: flex; justify-content: space-between; padding: 0.5rem 1rem 1rem;"
        >
          <mov-button
            @click=${this.handleDialogClose}
            style="--mov-color-fill-loud: ${le.red[700]}; --mov-color-on-loud: white;"
          >
            Cancel
          </mov-button>
          <mov-button
            @click=${this.handleStart}
            style="--mov-color-fill-loud: ${le.green[700]}; --mov-color-on-loud: white;"
          >
            Start Now
          </mov-button>
        </div>
      </mov-dialog>
    `}renderLateStartButton(){return w`
      <button
        id="StartMOV"
        @click=${this.handleButtonCLick}
      >
        ${f("BUTTON_START")}
      </button>
    `}renderLateStartPrompt(){let e=this.begin,t=this.mangaPages;const n=o=>{[e,t]=[o.detail.value1,o.detail.value2]};return w`
      <mov-dialog
        ?open=${this.status==="late-start-prompt"}
        icon="question"
        @close=${this.handleDialogClose}
      >
        <span slot="label">${f("STARTING")}</span>
        <div style="padding: 1rem;">
          ${f("CHOOSE_BEGINNING")}
          <div
            id="pageInputGroup"
            style="padding: 1rem 0;"
          >
            <tc-range-slider
              id="pagesSlider"
              theme="glass"
              css-links="https://cdn.jsdelivr.net/npm/toolcool-range-slider@4.0.28/dist/plugins/tcrs-themes.min.css"
              min="1"
              max="${this.mangaPages}"
              round="0"
              step="1"
              value1="${e}"
              value2="${t}"
              data="${wn(this.mangaPages).join(", ")}"
              marks="true"
              marks-count="11"
              marks-values-count="11"
              generate-labels="true"
              slider-width="100%"
              pointers-overlap="false"
              generate-labels-text-color="var(--mov-color-on-loud)"
              @change=${n}
            ></tc-range-slider>
          </div>
        </div>
        <div
          slot="footer"
          style="display: flex; justify-content: flex-end; gap: 0.5rem; padding: 0.5rem 1rem 1rem;"
        >
          <mov-button
            @click=${this.handleDialogClose}
            style="--mov-color-fill-loud: ${le.red[700]}; --mov-color-on-loud: white;"
          >
            Close
          </mov-button>
          <mov-button
            @click=${()=>this.handleLateStart(e,t)}
            style="--mov-color-fill-loud: ${le.green[700]}; --mov-color-on-loud: white;"
          >
            Run
          </mov-button>
        </div>
      </mov-dialog>
    `}};kt.styles=[_e(ch)],kn([k({type:Number,reflect:!0})],kt.prototype,"mangaPages",2),kn([k({type:Number,reflect:!0})],kt.prototype,"begin",2),kn([k({type:Number})],kt.prototype,"timeoutMs",2),kn([k({type:String,reflect:!0})],kt.prototype,"status",2),kt=kn([te("script-startup")],kt);function uh(e){if(!e?.parentNode)return e;const t=e.cloneNode(!0);return e.parentNode.replaceChild(t,e),t}const ph=e=>{e.getAttributeNames().forEach(t=>{e?.removeAttribute(t)})},gh=(...e)=>{e?.forEach(ph),e?.forEach(uh)};var Vr=Object.freeze,Ur=Object.defineProperty,mh=Object.getOwnPropertyDescriptor,jo=(e,t,n,o)=>{for(var i=o>1?void 0:o?mh(t,n):t,r=e.length-1,a;r>=0;r--)(a=e[r])&&(i=(o?a(t,n,i):a(i))||i);return o&&i&&Ur(t,n,i),i},fh=(e,t)=>Vr(Ur(e,"raw",{value:Vr(e.slice())})),Wr;let yn=class extends X{constructor(){super(...arguments),this.loadMode="wait"}async start(e,t){this.manga&&(gh(document.documentElement,document.head,document.body),window.scrollTo(0,0),Z("manga",{...this.manga,begin:e??this.manga.begin,pages:t??this.manga.pages}),document.documentElement.setAttribute("mov",""))}firstUpdated(){this.loadMode==="always"&&this.start(),j1(),V1()}render(){const e=I("manga"),t=I("dialog");return w`
      <style>
        ${lh()}
      </style>
      <div
        id="MangaOnlineViewer"
        class="${be({[m("colorScheme")]:!0,hideControls:m("hidePageControls"),bookmarked:!!Mt(),[I("device")]:!0})}"
        style="${Qe({[`padding-${m("navbar")}`]:`${Ct}px`})}"
        .locale="${m("locale")}"
      >
        ${e?w`
              <reader-header .manga=${e}></reader-header>
              ${ah(e)}
              <navbar-thumbnails
                      .mode=${m("navbar")}
                    ></navbar-thumbnails>
              <manga-pagination
                      .mode="${m("pagination")}"
                      .startPage=${e.begin}
                      .totalPages=${e.pages}
                      .currentPage=${I("currentPage")}
                      .next=${e.next}
                      .prev=${e.prev}
                    ></manga-pagination>
              <keybindings-panel></keybindings-panel>
              <bookmark-panel></bookmark-panel>
              <settings-panel></settings-panel>
              <moaqz-toaster dismissable></moaqz-toaster>
              </div>`:w(Wr||(Wr=fh([` <script-startup
              .mangaPages="`,`"
              begin="`,`"
              initialStatus="`,`"
              @start=`,`
            ><\/script-startup>`])),this.manga?.pages,this.manga?.begin,fr(this.loadMode,[["wait",()=>"initial-prompt"],["never",()=>"late-start-button"]]),n=>{this.start(n.detail?.begin,n.detail?.end)})}
        ${t?w`
              <mov-dialog
                open
                .icon=${t.icon}
                @close=${()=>Z("dialog",null)}
              >
                <span slot="label">${t.title}</span>
                ${t.content} ${t.footer}
              </mov-dialog>
            `:""}
      </div>
    `}};yn.styles=[ve``,_e(sh)],jo([k({type:String,reflect:!0})],yn.prototype,"loadMode",2),jo([k({type:Object})],yn.prototype,"manga",2),yn=jo([te("manga-online-viewer"),Bt.useStores(he,St,Se)],yn);const Zo="@moaqzdev/toast";class En extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static#e=3e3;parseDuration(t){if(t==="none"||Number.isInteger(t)&&t>En.#e)return t;const n=this.getAttribute("duration");if(n){const o=Number.parseInt(n);if(!Number.isNaN(o))return o}return En.#e}async createToast({title:t,type:n,description:o,onConfirm:i,onCancel:r,confirmText:a="\u2705",cancelText:d="\u274C",duration:p}){const u=this.shadowRoot.querySelector("#toast-tmpl").content.cloneNode(!0),h={container:u.querySelector("[data-toast]"),title:u.querySelector("[data-title]"),description:u.querySelector("[data-description]"),actions:u.querySelector("[data-actions]"),confirmBtn:u.querySelector("button[data-action-type='confirm']"),cancelBtn:u.querySelector("button[data-action-type='cancel']"),closeBtn:u.querySelector("[data-close-button]")};p=this.parseDuration(p),h.title.textContent=t||"",h.container.setAttribute("data-type",n),o==null?h.description?.remove():h.description.textContent=o;const E=()=>this.removeToast(h.container);if(n==="confirm"?(h.confirmBtn.textContent=a,h.confirmBtn.addEventListener("click",()=>{i?.(),E()},{once:!0}),h.cancelBtn.textContent=d,h.cancelBtn.addEventListener("click",()=>{r?.(),E()},{once:!0})):h.actions?.remove(),this.hasAttribute("dismissable")?h.closeBtn.addEventListener("click",E,{once:!0}):h.closeBtn?.remove(),this.shadowRoot.querySelector("[data-toaster]").appendChild(u),p!=="none"){const y=new AbortController,M=Date.now();let P=null,j=0;const oe=()=>{y.abort(),E()};let Re=setTimeout(oe,p);const pe=()=>{P==null&&(clearTimeout(Re),P=Date.now())},Ie=()=>{P!=null&&(j=P-M,P=null,Re=setTimeout(oe,Math.max(p-j,0)))};["focusin","pointerenter","mouseenter"].forEach(De=>{h.container.addEventListener(De,pe,{signal:y.signal})}),["focusout","pointerleave","mouseleave"].forEach(De=>{h.container.addEventListener(De,Ie,{signal:y.signal})})}}removeToast(t){t.animate([{opacity:1},{opacity:0}],{duration:300,easing:"ease",fill:"forwards"}).finished.then(()=>t.remove())}handleEvent(t){if(t instanceof CustomEvent&&t.type===Zo){const n=t.detail;this.createToast(n)}}connectedCallback(){this.render(),document.addEventListener(Zo,this)}disconnectedCallback(){document.removeEventListener(Zo,this)}render(){this.shadowRoot.innerHTML=`
    <style>${En.STYLES}</style>

    <template id="toast-tmpl">
      <li data-toast tabindex="0">
        <button data-close-button aria-label="Close">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="14" 
            height="14" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
          </svg>
        </button>
        <p data-title></p>
        <p data-description></p>
        <div data-actions>
          <button type="button" data-action-type="confirm"></button>
          <button type="button" data-action-type="cancel"></button>
        </div>
      </li>
    </template>

    <ol data-toaster tabindex="-1"></ol>`}static STYLES=`
  * {
    box-sizing: border-box;
  }

  :host {
    --_travel-distance: var(--toast-travel-distance, 5vh);

    --_toast-background: var(--toast-background, #FCFCFC);
    --_toast-border: var(--toast-border, #00000026);
    --_toast-title: var(--toast-title, #000000DF);
    --_toast-description: var(--toast-description, #0000009B);

    --_toast-success: var(--toast-success, #00924BA4);
    --_toast-error: var(--toast-error, #D2000571);
    --_toast-warning: var(--toast-warning, #E35F00AA);
    --_toast-info: var(--toast-info, #0084E6A1);
    --_toast-confirm: var(--toast-confirm, #6600C06C);

    --_toast-actions-direction: var(--toast-actions-direction, row);
    --_toast-actions-justify: var(--toast-actions-justify, flex-end);
    --_toast-actions-gap: var(--toast-actions-gap, 0.25rem);

    --_toast-actions-confirm-text-color: var(--toast-actions-confirm-text-color, white);
    --_toast-actions-confirm-background-color: var(--toast-actions-confirm-background-color, #00713FDE);
    --_toast-actions-cancel-text-color: var(--toast-actions-cancel-text-color, white);
    --_toast-actions-cancel-background-color: var(--toast-actions-cancel-background-color, #C40006D3);
  }

  @media (prefers-color-scheme: dark) {
    :host {
      --_toast-background: var(--toast-background, #111111);
      --_toast-border: var(--toast-border,  #FFFFFF2C);
      --_toast-title: var(--toast-title, #FFFFFFED);
      --_toast-description: var(--toast-description, #FFFFFFAF);
  
      --_toast-success: var(--toast-success, #54FFAD73);
      --_toast-error: var(--toast-error, #FF5D61B0);
      --_toast-warning: var(--toast-warning, #FE84389D);
      --_toast-info: var(--toast-info, #3094FEB9);
      --_toast-confirm: var(--toast-confirm, #C47EFFA4);

      --_toast-actions-confirm-text-color: var(--toast-actions-confirm-text-color, white);
      --_toast-actions-confirm-background-color: var(--toast-actions-confirm-background-color, #54FFAD73);
      --_toast-actions-cancel-text-color: var(--toast-actions-cancel-text-color, white);
      --_toast-actions-cancel-background-color: var(--toast-actions-cancel-background-color, #FF5D61B0);
    }
  }

  @keyframes slide-in {
    from { 
      transform: translateY(var(--_travel-distance)) 
    }
  }

  @keyframes fade-in {
    from { opacity: 0 }
    to { opacity: 1 }
  }

  [data-toaster] {
    --container-width: 20rem;

    position: fixed;
    z-index: 999;
    width: var(--container-width);
    height: 100dvh;
    max-height: 100dvh;
    overflow: hidden;
    top: 0;
    right: 0;
    pointer-events: none;
    margin: 0;
    padding: 1rem;
    display: flex;
    flex-direction: column-reverse;
    gap: 0.5rem;
  }

  :host([position="bottom-right"]) [data-toaster] {
    top: 0;
    right: 0;
  }
  
  :host([position="bottom-left"]) [data-toaster] {
    top: 0;
    left: 0;
  }

  :host([position="bottom-center"]) [data-toaster] {
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  
  :host([position="top-right"]) [data-toaster] {
    top: 0;
    right: 0;
    flex-direction: column;
  }
  
  :host([position="top-left"]) [data-toaster] {
    top: 0;
    left: 0;
    flex-direction: column;
  }

  :host([position="top-center"]) [data-toaster] {
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    flex-direction: column;
  }

  [data-toast] {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    position: relative;

    pointer-events: none;
    user-select: none;

    list-style: none;
    background-color: var(--_toast-background);
    padding: 1rem;
    border: 1px solid var(--_toast-border);
    border-radius: 0.25rem;
    pointer-events: all;

    will-change: transform;
    animation: fade-in .3s ease, slide-in .3s ease;

    @media (prefers-reduced-motion: reduce){
      --_travel-distance: 0;
    }
  
    &[data-type="success"] {
      border-top: 4px solid var(--_toast-success);
    }
  
    &[data-type="error"] {
      border-top: 4px solid var(--_toast-error);
    }
  
    &[data-type="info"] {
      border-top: 4px solid var(--_toast-info)
    }

    &[data-type="warning"] {
      border-top: 4px solid var(--_toast-warning)
    }

    &[data-type="confirm"] {
      border-top: 4px solid var(--_toast-confirm);
    }
  }

  [data-close-button] {
    --size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--size);
    height: var(--size);
    position: absolute;
    top: 0;
    left: 0;
    color: var(--_toast-title);
    background-color: var(--_toast-background);
    border-radius: 50%;
    border: 1px solid var(--_toast-border);
    padding: 0.125rem;
    translate: -35% -35%;
    cursor: pointer;
  }

  [data-actions] {
    display: flex;
    flex-direction: var(--_toast-actions-direction);
    justify-content: var(--_toast-actions-justify);
    gap: var(--_toast-actions-gap);
    margin-top: 0.5rem;
  }

  button[data-action-type="confirm"],
  button[data-action-type="cancel"] {
    padding: 0.5rem;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    transition-property: opacity;
    transition-duration: 200ms;

    &:hover,
    &:focus {
      opacity: 0.8;
    }
  }
      
  button[data-action-type="confirm"] {
    color: var(--_toast-actions-confirm-text-color);
    font-weight: 600;
    background-color: var(--_toast-actions-confirm-background-color);
  }

  button[data-action-type="cancel"] {
    color: var(--_toast-actions-cancel-text-color);
    font-weight: 600;
    background-color:var(--_toast-actions-cancel-background-color);
  }
  
  [data-title], [data-description] {
    margin: 0;
    all: initial; 
    font-family: inherit;
    line-height: 1.5;
  }

  [data-title] {
    font-size: 1rem;
    font-weight: 600;
    color: var(--_toast-title);
  }

  [data-description] {
    font-size: 0.875rem;
    color: var(--_toast-description);
    text-wrap: pretty;
  }`}customElements.define("moaqz-toaster",En);const vh=[`/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

/* Document
   ========================================================================== */

/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */

html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

/* Sections
   ========================================================================== */

/**
 * Remove the margin in all browsers.
 */

body {
  margin: 0;
}

/**
 * Render the \`main\` element consistently in IE.
 */

main {
  display: block;
}

/**
 * Correct the font size and margin on \`h1\` elements within \`section\` and
 * \`article\` contexts in Chrome, Firefox, and Safari.
 */

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

/* Grouping content
   ========================================================================== */

/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */

hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */

pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/* Text-level semantics
   ========================================================================== */

/**
 * Remove the gray background on active links in IE 10.
 */

a {
  background-color: transparent;
}

/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */

abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */

b,
strong {
  font-weight: bolder;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */

code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/**
 * Add the correct font size in all browsers.
 */

small {
  font-size: 80%;
}

/**
 * Prevent \`sub\` and \`sup\` elements from affecting the line height in
 * all browsers.
 */

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* Embedded content
   ========================================================================== */

/**
 * Remove the border on images inside links in IE 10.
 */

img {
  border-style: none;
}

/* Forms
   ========================================================================== */

/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */

button,
input { /* 1 */
  overflow: visible;
}

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */

button,
select { /* 1 */
  text-transform: none;
}

/**
 * Correct the inability to style clickable types in iOS and Safari.
 */

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

/**
 * Remove the inner border and padding in Firefox.
 */

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/**
 * Restore the focus styles unset by the previous rule.
 */

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

/**
 * Correct the padding in Firefox.
 */

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

/**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from \`fieldset\` elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    \`fieldset\` elements in all browsers.
 */

legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */

progress {
  vertical-align: baseline;
}

/**
 * Remove the default vertical scrollbar in IE 10+.
 */

textarea {
  overflow: auto;
}

/**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */

[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to \`inherit\` in Safari.
 */

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/* Interactive
   ========================================================================== */

/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */

details {
  display: block;
}

/*
 * Add the correct display in all browsers.
 */

summary {
  display: list-item;
}

/* Misc
   ========================================================================== */

/**
 * Add the correct display in IE 10+.
 */

template {
  display: none;
}

/**
 * Add the correct display in IE 10.
 */

[hidden] {
  display: none;
}
`,`/* Make clicks pass-through */
#nprogress {
  pointer-events: none;
}

#nprogress .bar {
  background: #29d;

  position: fixed;
  z-index: 1031;
  top: 0;
  left: 0;

  width: 100%;
  height: 2px;
}

/* Fancy blur effect */
#nprogress .peg {
  display: block;
  position: absolute;
  right: 0px;
  width: 100px;
  height: 100%;
  box-shadow: 0 0 10px #29d, 0 0 5px #29d;
  opacity: 1.0;

  -webkit-transform: rotate(3deg) translate(0px, -4px);
      -ms-transform: rotate(3deg) translate(0px, -4px);
          transform: rotate(3deg) translate(0px, -4px);
}

/* Remove these to get rid of the spinner */
#nprogress .spinner {
  display: block;
  position: fixed;
  z-index: 1031;
  top: 15px;
  right: 15px;
}

#nprogress .spinner-icon {
  width: 18px;
  height: 18px;
  box-sizing: border-box;

  border: solid 2px transparent;
  border-top-color: #29d;
  border-left-color: #29d;
  border-radius: 50%;

  -webkit-animation: nprogress-spinner 400ms linear infinite;
          animation: nprogress-spinner 400ms linear infinite;
}

.nprogress-custom-parent {
  overflow: hidden;
  position: relative;
}

.nprogress-custom-parent #nprogress .spinner,
.nprogress-custom-parent #nprogress .bar {
  position: absolute;
}

@-webkit-keyframes nprogress-spinner {
  0%   { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}
@keyframes nprogress-spinner {
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

`,`#nprogress .bar {
  background: #29d;
  position: fixed;
  z-index: 1031;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
}

html[mov] body > *:not(manga-online-viewer, #nprogress) {
  /* biome-ignore lint/complexity/noImportantStyles: requirement */
  display: none !important;
}

html[mov] {
  all: unset;
  font-size: 16px;
}
`].join(`
`);async function jr([e,t]){O(`Found Pages: ${t.pages} in ${e?.name}`),t.title||(t.title=document.querySelector("title")?.textContent?.trim()),t.begin=Mt()??t.begin??1,t.before!==void 0&&(Ne("Executing Preparation"),await t.before(t.begin??0)),document.head.innerHTML+=ld("externals",vh);const n=document.createElement("manga-online-viewer");n.loadMode=e?.start??m("loadMode"),n.manga=t,document.body.appendChild(n)}async function bh(e){if(O(`Starting ${fo.script.name} ${fo.script.version} on ${Wt()} ${ms()} with ${fs()}`),al())return;O(e.length,"Known Manga Sites:",e);const t=e.filter(o=>o.url.test(window.location.href));O(t.length,"Found sites:",t);const n=t.map(async o=>{O(`Testing site: ${o.name}`),await bs(o);const i=await o.run();if(i.pages>0)return[o,i];throw new Error(`${o.name} found ${i.pages} pages`)});try{const o=await Promise.any(n);jr(o)}catch(o){if(o instanceof AggregateError){O("All sites failed to run:");for(const i of o.errors)O(i.message)}else O("An unexpected error occurred:",o)}}bh(cs).catch(O)})();
