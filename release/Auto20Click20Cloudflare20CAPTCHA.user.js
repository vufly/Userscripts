// ==UserScript==
// @name         Auto Click Cloudflare CAPTCHA
// @namespace    http://tampermonkey.net/
// @version      1.0.1
// @author       Zaw (based on NWater)
// @match        https://challenges.cloudflare.com/cdn-cgi/challenge-platform/*
// @grant        none
// @downloadURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Auto20Click20Cloudflare20CAPTCHA.user.js
// @updateURL https://raw.githubusercontent.com/FiorenMas/Userscripts/release/release/Auto20Click20Cloudflare20CAPTCHA.meta.js
// ==/UserScript==
(function(){"use strict";function c(t,o=2e4){return new Promise((i,l)=>{const r=Date.now(),n=setInterval(()=>{const e=document.querySelector(t);e&&e.offsetParent!==null&&!e.disabled?(clearInterval(n),i(e)):Date.now()-r>o&&(clearInterval(n),l("Timeout waiting for "+t))},300)})}async function a(){try{console.log("[AutoCaptcha] Waiting for checkbox..."),(await c("input[type='checkbox']")).click(),console.log("[AutoCaptcha] Checkbox clicked."),(await c("span.mark")).click(),console.log("[AutoCaptcha] Mark clicked.")}catch(t){console.warn("[AutoCaptcha] Failed:",t)}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",a):a()})();
