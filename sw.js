if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,l)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let o={};const t=s=>i(s,r),u={module:{uri:r},exports:o,require:t};e[r]=Promise.all(n.map((s=>u[s]||t(s)))).then((s=>(l(...s),o)))}}define(["./workbox-3625d7b0"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/favicon.b2abb794.ico",revision:null},{url:"assets/index.817cf545.css",revision:null},{url:"assets/index.817cf545.css.gz",revision:null},{url:"assets/index.ffb34a9c.js",revision:null},{url:"assets/index.ffb34a9c.js.gz",revision:null},{url:"assets/logo.99a5467d.png",revision:null},{url:"assets/mask-icon.fc7137e1.png",revision:null},{url:"assets/wifi_signal_1.0ed5d2ca.svg",revision:null},{url:"assets/wifi_signal_2.9277930f.svg",revision:null},{url:"assets/wifi_signal_3.3dadbb70.svg",revision:null},{url:"assets/wifi_signal_4.4c300c06.svg",revision:null},{url:"assets/wifi_signal_5.3fe3ecd9.svg",revision:null},{url:"index.html",revision:"0c89ac37a9017adf18fcd10e682f5542"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"manifest.webmanifest",revision:"a7a493a1e20a80f6ec6fac5b3e04fed1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
