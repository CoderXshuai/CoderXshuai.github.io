import{d as s}from"./index.c9cbbc2e.js";const n={shuffle(e){for(let t=e.length-1;t>=0;t--){let o=Math.floor(Math.random()*(t+1)),l=e[o];e[o]=e[t],e[t]=l}return e},getWords(e,t){return e!=="1"&&t&&t.length!==0?n.jsonCopy(t):n.jsonCopy(s)},jsonCopy(e){return JSON.parse(JSON.stringify(e))}};export{n as w};
