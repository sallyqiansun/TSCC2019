"use strict";var precacheConfig=[["/index.html","90aeb243b44aa4a0433af09797fd1adc"],["/static/css/main.f470d519.css","54c3920c22860189d60ff5ec7ba75300"],["/static/js/main.c21431e4.js","7f4ab1a94af7b8f2914737e8648c5d13"],["/static/media/Timeline1.b3c6ecde.png","b3c6ecdef9d7e9e9314396033c6686df"],["/static/media/Timeline1.c941810c.png","c941810c7a5bafa6a3b3914255ee50f6"],["/static/media/Timeline2.360a5778.png","360a5778c4e86b72b5ab8e1bd480248f"],["/static/media/Timeline2.d3cecf03.png","d3cecf035aac65dfe9ad6f32971bc5a0"],["/static/media/Timeline3.a3fbd6d1.png","a3fbd6d16a9de23bba21e4d219a11a85"],["/static/media/Timeline3.ea0d8f32.png","ea0d8f32a5e24b8f9af9875d9f2f515f"],["/static/media/Timeline4.181c2382.png","181c238226c43e755cf4c60430284f95"],["/static/media/Timeline4.196b8a33.png","196b8a33077c2f9567c98f585b170fa5"],["/static/media/Timeline5.d5ee637d.png","d5ee637dcb8cd6bf1804455ea4bcdf3f"],["/static/media/Timeline5.d7e265fd.png","d7e265fd5fbc2e92458b9bb2c0e4ce98"],["/static/media/bg1.8d5f7d32.jpg","8d5f7d321ea255d43914cfaa2e14a310"],["/static/media/bg2.90924df2.png","90924df292c16d2c72055794aeb4edcc"],["/static/media/bonustime.799a0631.png","799a0631080dbf9c104f536c64819100"],["/static/media/comingsoon.12c8c725.png","12c8c725d6779218689e7c8861602470"],["/static/media/company.7f39c1c0.png","7f39c1c088ce74a1217ac741ad44ab01"],["/static/media/competitionprize.e6fb0943.png","e6fb0943904f4851afb08b7769c1a646"],["/static/media/flags.416250f6.png","416250f60d785a2e02f17e054d2e4e44"],["/static/media/flags@2x.d429a577.png","d429a5777afaf2fc349652e812e9bb11"],["/static/media/iscc.035507dd.png","035507dddb728d42ef0f338725269b78"],["/static/media/leaderboard.8602da73.png","8602da73e07830a8bb3f73191b70afa1"],["/static/media/list.67962a0f.png","67962a0fa619f99b9658a3e4cceb6e6a"],["/static/media/logo.b3c1a51f.png","b3c1a51f95d115c7c5f56f493e45f0cc"],["/static/media/matchName.025e27e4.png","025e27e41961ee6d8e354778d22b2b65"],["/static/media/mobile_bg.b77fd31c.png","b77fd31c113c8fec491d5288dbc865bc"],["/static/media/mobile_trophy.f33fcbb3.png","f33fcbb34824be581fad8d9167304029"],["/static/media/table.c2427cc2.png","c2427cc246c6909a737fa4517ef33463"],["/static/media/trophy.96aa225a.png","96aa225aebb19b616cdea7f11e0e75aa"],["/static/media/volunteer.e973c8e2.png","e973c8e2a7ee84466847645f1dd4a008"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var c="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});