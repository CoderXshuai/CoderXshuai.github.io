var $=Object.defineProperty;var R=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var w=(a,n,s)=>n in a?$(a,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[n]=s,y=(a,n)=>{for(var s in n||(n={}))M.call(n,s)&&w(a,s,n[s]);if(R)for(var s of R(n))j.call(n,s)&&w(a,s,n[s]);return a};import{_ as L}from"./index.db425714.js";import{r as c,f as d,j as t,h as m,R as P,C as I,n as K,k as z}from"./vendor.dc513d82.js";import{w as N}from"./wordTool.e1174c3b.js";import{R as D,T as G}from"./ReloadBtn.fbaa85e0.js";const O=32,U=13,V=/^[^\x00-\xff]+$/,W=()=>L(()=>import("./sentences.fca53ad5.js"),[]),Y=()=>{const[a,n]=c.exports.useState(!0),s=c.exports.useRef(null),f=c.exports.useRef([]),[o,A]=c.exports.useState([]),[i,v]=c.exports.useState(0),[C,b]=c.exports.useState(5),[B,E]=c.exports.useState(""),[T,S]=c.exports.useState(!1),[g,F]=c.exports.useState(!1),r=c.exports.useRef({cpm:"",right:0,wrong:0,acc:0,time:{begin:0,secs:0}}),_=e=>{e===" "||g||(E(e),V.test(e)&&A(u=>{const l=[...u],h=y({},l[i]);for(let p=0;p<e.length;p++)h.charArr[p]&&(h.charArr[p].isCorrect=e.charAt(p)===h.charArr[p].char);return l.splice(i,1,h),l}))},k=e=>{if(!g&&(r.current.time.begin===0&&(r.current.time.begin=Date.now()),(e.keyCode===U||e.keyCode===O)&&B.length>=o[i].sentence.length))if(i===o.length-1){const u=o.reduce((l,h)=>[...l,...h.charArr],[]);r.current.right=u.filter(l=>l.isCorrect).length,r.current.wrong=u.length-r.current.right,r.current.acc=Math.round(r.current.right/(r.current.right+r.current.wrong)*100),r.current.time.secs=Math.round((Date.now()-r.current.time.begin)/1e3),r.current.cpm=(r.current.right/(r.current.time.secs/60)).toFixed(2),S(!0),setTimeout(()=>{F(!0)},150)}else v(u=>u+1),E("")},x=c.exports.useCallback(()=>{E(""),v(0),r.current={cpm:"",right:0,wrong:0,acc:0,time:{begin:0,secs:0}},f.current=N.shuffle(f.current),A(N.jsonCopy(f.current.slice(0,C)).map(e=>({sentence:e,charArr:Array.from(e).map(u=>({char:u,isCorrect:null}))}))),S(!1),F(!1),setTimeout(()=>{s.current.focus()},10)},[C]);return c.exports.useEffect(()=>{n(!0),W().then(e=>{f.current=e.default,x(),n(!1)})},[x]),d("div",{className:"Sentence",children:[t("div",{className:"word-count-radio",children:d(m.Group,{value:C,size:"small",onChange:e=>{b(e.target.value)},children:[t(m.Button,{tabIndex:-1,value:5,children:"5"}),t(m.Button,{tabIndex:-1,value:10,children:"10"}),t(m.Button,{tabIndex:-1,value:15,children:"15"}),t(m.Button,{tabIndex:-1,value:20,children:"20"}),t(m.Button,{tabIndex:-1,value:100,children:"100"})]})}),d(P,{justify:"center",align:"middle",children:[d(I,{flex:"900px",className:`type-main-box ${T?"fading":""} ${g?"hide":""}`,children:[t("div",{className:"sentence-line",children:o[i]&&o[i].charArr.map((e,u)=>t("code",{className:`char ${e.isCorrect?"correct":e.isCorrect===!1?"wrong":""}`,children:e.char},u))}),t(K,{spinning:a,tip:"\u52A0\u8F7D\u4E2D",className:"sentence-loading",children:t("div",{})}),t("div",{className:"sentence-input",children:t(z,{ref:s,value:B,onChange:e=>_(e.target.value),onKeyDown:k})}),t("div",{className:"sentence-next",children:o[i+1]&&o[i+1].sentence}),t("div",{className:"reload-line",children:t(D,{onClick:x})}),d("div",{className:"tip-line",children:[t("div",{children:"\u70B9\u51FB\u6A2A\u7EBF\u4E0A\u65B9\u8FDB\u5165\u8F93\u5165\u72B6\u6001"}),t("div",{children:"\u8F93\u5165\u6B63\u786E\u4E2D\u6587\u548C\u7B26\u53F7\uFF0C\u7136\u540E\u7A7A\u683C\u6216\u56DE\u8F66"}),d("div",{children:["\u8F93\u5165\u72B6\u6001\u4E0B",t("code",{children:"Tab"}),"\u540E\u56DE\u8F66\u53EF\u4EE5\u76F4\u63A5\u5237\u65B0"]})]})]}),d(I,{flex:"900px",className:`type-result-box ${g?"show":""}`,children:[t(G,{desc:"\u5B57/\u5206\u949F",numStr:r.current.cpm,acc:r.current.acc,secs:r.current.time.secs}),t("div",{className:"reload-line",children:t(D,{onClick:x})})]})]})]})};export{Y as default};
