import{r as l,f as u,R as j,j as c,C as R,B as ee,h as z,v as te}from"./vendor.dc513d82.js";import{s as re}from"./index.9b33a15e.js";import{w as F}from"./wordTool.000ae9b0.js";import{R as G,T as ne}from"./ReloadBtn.fbaa85e0.js";const S=32,se=8,C=d=>Array.from(d.children),{Countdown:oe}=te,le=d=>{const w=l.exports.useRef(null),f=l.exports.useRef(null),U=l.exports.useRef(null),x=l.exports.useRef(F.getWords(d.$state.root.wordsMode,d.$state.root.customerWords)),h=l.exports.useRef([0,0]),a=l.exports.useRef({wpm:"",right:0,wrong:0,acc:0,time:{begin:0,secs:0}}),[b,T]=l.exports.useState(!1),[q,H]=l.exports.useState(Date.now()+1e3*60*5+1e3),[J,y]=l.exports.useState(!1),[D,A]=l.exports.useState(!1),[O,M]=l.exports.useState(!1),[N,v]=l.exports.useState(!1),[m,W]=l.exports.useState(""),[p,k]=l.exports.useState([]),[I,L]=l.exports.useState({top:0,left:0}),[E,Q]=l.exports.useState(100),X=()=>{T(!b),H(Date.now()+1e3*60*5)},$=()=>{const r=h.current,e=f.current.getBoundingClientRect(),t=C(f.current)[r[0]];if(!t)return;const n=Array.from(t.getElementsByClassName("letter"));if(n.length<=r[1]){const s=n[r[1]-1].getBoundingClientRect();L({top:s.top-e.top+2,left:s.left-e.left+s.width})}else{const s=n[r[1]].getBoundingClientRect();L({top:s.top-e.top+2,left:s.left-e.left})}},Y=l.exports.useCallback((r,e)=>{const t=h.current,n=m===""||m.charAt(m.length-1)===" ";let s;if(r===S)n?s=t:s=[t[0]+1,0];else{if(t[1]>=p[t[0]].letterArr.length){const o=C(f.current)[t[0]],i=document.createElement("code");i.className="letter wrong extra-letter",i.innerText=e,o.appendChild(i)}s=[t[0],t[1]+1]}h.current=s,$(),k(o=>{const i=o[t[0]].letterArr[t[1]];if(i&&r!==S&&(i.isCorrect=e===i.letter,i.inputVal=e,console.log(e),o[t[0]].letterArr[t[1]]=i),r===S&&!n)if(o[t[0]].letterArr.some(g=>g.isCorrect===null))o[t[0]].isSkip=!0,o[t[0]].isCorrect=!1;else{const P=C(f.current)[t[0]].getElementsByClassName("extra-letter");!P||P.length===0?o[t[0]].isCorrect=o[t[0]].letterArr.every(_=>_.isCorrect):o[t[0]].isCorrect=!1}return(s[0]>o.length-1||t[0]===o.length-1&&t[1]===o[t[0]].letterArr.length-1)&&(o[t[0]].isCorrect=o[t[0]].letterArr.every(g=>g.isCorrect),a.current.right=o.filter(g=>g.isCorrect).length,a.current.wrong=o.length-a.current.right,a.current.acc=Math.round(a.current.right/(a.current.right+a.current.wrong)*100),a.current.time.secs=Math.round((Date.now()-a.current.time.begin)/1e3),a.current.wpm=(a.current.right/(a.current.time.secs/60)).toFixed(2),y(!1),M(!0),setTimeout(()=>{v(!0)},150)),o}),W(o=>r===S&&(o===""||o.charAt(o.length-1)===" ")?o:o+e)},[m,p]),Z=l.exports.useCallback(()=>{const r=m.charAt(m.length-1);if(r==="")return;const e=h.current;let t;if(r===" ")if(p[e[0]-1].isCorrect)t=e;else if(p[e[0]-1].isSkip){const n=p[e[0]-1].letterArr.findIndex(s=>s.isCorrect===null);t=[e[0]-1,n]}else{const s=C(f.current)[e[0]-1].getElementsByClassName("letter");t=[e[0]-1,s.length]}else{const n=C(f.current)[e[0]],s=n.getElementsByClassName("extra-letter");s&&s.length>0&&n.removeChild(s[s.length-1]),t=[e[0],e[1]-1]}h.current=t,$(),k(n=>(r===" "?n[e[0]-1].isCorrect===!1&&(n[e[0]-1].isCorrect=null):n[e[0]].letterArr.length>=e[1]&&(n[e[0]].letterArr[e[1]-1].isCorrect=null,n[e[0]].isCorrect=null),n)),W(n=>{let s=!0;return r===" "&&p[e[0]-1].isCorrect&&(s=!1),s?n.substring(0,n.length-1):n})},[m,p]),V=r=>{console.log(r.key,r.keyCode,r.metaKey),r.keyCode!==9&&(r.preventDefault(),r.stopPropagation(),r.persist()),!N&&(A(!1),r.key.length===1?(a.current.time.begin===0&&(a.current.time.begin=Date.now()),Y(r.keyCode,r.key)):r.keyCode===se&&Z())},K=()=>{y(!0),w.current.focus(),document.documentElement.scrollTop=0},B=l.exports.useCallback(()=>{h.current=[0,0],x.current=F.shuffle(x.current),a.current={wpm:"",right:0,wrong:0,acc:0,time:{begin:0,secs:0}};const r=f.current.getElementsByClassName("extra-letter");r.length!==0&&Array.from(r).forEach(e=>{e.parentNode.removeChild(e)}),k(F.jsonCopy(x.current.slice(0,E)).map(e=>Object.assign({},e,{letterArr:Array.from(e.text).map(t=>({letter:t,isCorrect:null,inputVal:"0"})),isCorrect:null,isSkip:!1}))),W(""),M(!1),v(!1),setTimeout(()=>{K(),$()},10)},[E]);return l.exports.useEffect(()=>{x.current=F.getWords(d.$state.root.wordsMode,d.$state.root.customerWords),B()},[d.$state.root.wordsMode,d.$state.root.customerWords,B,E]),u("div",{className:"Monkey",children:[u(j,{style:{position:"fixed",top:0,right:0,padding:"20px",zIndex:1},children:[c(R,{children:b?c(oe,{value:q,format:"m:ss",valueStyle:{color:"yellow",fontWeight:"bold",padding:"10px",margin:"5px"},onFinish:()=>T(!1)}):c("div",{style:{fontSize:"24px",color:"yellow",fontWeight:"bold",padding:"10px",margin:"5px"},children:"5:00"})}),u(R,{children:[" ",c(ee,{"vertical-align":"middle",type:"primary",shape:"round",onClick:X,style:{marginTop:"15px"},children:"\u5F00\u59CB\u5012\u8BA1\u65F6"})]})]}),c("div",{className:"word-count-radio",children:c(z.Group,{value:E,size:"small",onChange:r=>{Q(r.target.value)},children:c(z.Button,{tabIndex:-1,value:100,children:"100"})})}),u(j,{justify:"center",align:"middle",children:[u(R,{flex:"900px",className:`type-main-box ${O?"fading":""} ${N?"hide":""}`,children:[c("div",{className:`caret ${J?D?"flash":"":"hide"}`,ref:U,style:{transform:`translate3d(${I.left}px,${I.top}px,0)`}}),c("div",{className:"words-box",onClick:K,ref:f,children:p.map((r,e)=>{var t;return u("div",{className:`word ${r.isCorrect?"correct":r.isCorrect===!1?"wrong":""}`,children:[c("div",{className:"label",children:r.label}),(t=r.letterArr)==null?void 0:t.map((n,s)=>c("code",{className:`letter ${n.isCorrect?"correct":n.isCorrect===!1?"wrong":""}`,children:n.isCorrect===!1?n.inputVal:n.letter},`${e}_${s}`))]},e)})}),c("input",{className:"hidden-input",type:"text",ref:w,onKeyDown:V,onBlur:()=>{y(!1)},onFocus:()=>{y(!0),A(!0)}}),c("div",{className:"reload-line",children:c(G,{onClick:B})}),u("div",{className:`tip-line ${D?"":"hide"}`,children:[c("div",{children:"\u70B9\u51FB\u8BCD\u5757\u8FDB\u5165\u8F93\u5165\u72B6\u6001"}),c("div",{children:"\u8F93\u5165\u6B63\u786E\u7684\u5B57\u7B26\uFF0C\u7136\u540E\u7A7A\u683C"}),u("div",{children:["\u8F93\u5165\u72B6\u6001\u4E0B",c("code",{children:"Tab"}),"\u540E\u56DE\u8F66\u53EF\u4EE5\u76F4\u63A5\u5237\u65B0"]})]})]}),u(R,{flex:"900px",className:`type-result-box ${N?"show":""}`,children:[c(ne,{desc:"WPM",numStr:a.current.wpm,acc:a.current.acc,secs:a.current.time.secs}),c("div",{className:"reload-line",children:c(G,{onClick:B})})]})]})]})};var de=re(le);export{de as default};
