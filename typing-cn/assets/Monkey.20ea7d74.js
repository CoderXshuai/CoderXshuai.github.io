import{r as l,f as u,R as z,j as i,C as R,B as V,v as _}from"./vendor.dc513d82.js";import{s as ee}from"./index.7a008dab.js";import{w as k}from"./wordTool.5ecf14f3.js";import{R as U,T as te}from"./ReloadBtn.fbaa85e0.js";const C=32,re=8,x=d=>Array.from(d.children),{Countdown:se}=_,ne=d=>{const w=l.exports.useRef(null),f=l.exports.useRef(null),q=l.exports.useRef(null),y=l.exports.useRef(k.getWords(d.$state.root.wordsMode,d.$state.root.customerWords)),h=l.exports.useRef([0,0]),c=l.exports.useRef({wpm:"",right:0,wrong:0,acc:0,time:{begin:0,secs:0}}),[b,T]=l.exports.useState(!1),[G,H]=l.exports.useState(Date.now()+1e3*60*5+1e3),[J,E]=l.exports.useState(!1),[D,A]=l.exports.useState(!1),[O,M]=l.exports.useState(!1),[F,I]=l.exports.useState(!1),[m,S]=l.exports.useState(""),[p,N]=l.exports.useState([]),[L,v]=l.exports.useState({top:0,left:0}),[W,oe]=l.exports.useState(100),Q=()=>{T(!b),H(Date.now()+1e3*60*5)},$=()=>{const t=h.current,e=f.current.getBoundingClientRect(),r=x(f.current)[t[0]];if(!r)return;const s=Array.from(r.getElementsByClassName("letter"));if(s.length<=t[1]){const n=s[t[1]-1].getBoundingClientRect();v({top:n.top-e.top+2,left:n.left-e.left+n.width})}else{const n=s[t[1]].getBoundingClientRect();v({top:n.top-e.top+2,left:n.left-e.left})}},K=l.exports.useCallback((t,e)=>{const r=h.current,s=m===""||m.charAt(m.length-1)===" ";let n;if(t===C)s?n=r:n=[r[0]+1,0];else{if(r[1]>=p[r[0]].letterArr.length){const o=x(f.current)[r[0]],a=document.createElement("code");a.className="letter wrong extra-letter",a.innerText=e,o.appendChild(a)}n=[r[0],r[1]+1]}h.current=n,$(),N(o=>{const a=o[r[0]].letterArr[r[1]];if(a&&t!==C&&(a.isCorrect=e===a.letter,a.inputVal=e,console.log(e),o[r[0]].letterArr[r[1]]=a),t===C&&!s)if(o[r[0]].letterArr.some(g=>g.isCorrect===null))o[r[0]].isSkip=!0,o[r[0]].isCorrect=!1;else{const j=x(f.current)[r[0]].getElementsByClassName("extra-letter");!j||j.length===0?o[r[0]].isCorrect=o[r[0]].letterArr.every(Z=>Z.isCorrect):o[r[0]].isCorrect=!1}return(n[0]>o.length-1||r[0]===o.length-1&&r[1]===o[r[0]].letterArr.length-1)&&(o[r[0]].isCorrect=o[r[0]].letterArr.every(g=>g.isCorrect),c.current.right=o.filter(g=>g.isCorrect).length,c.current.wrong=o.length-c.current.right,c.current.acc=Math.round(c.current.right/(c.current.right+c.current.wrong)*100),c.current.time.secs=Math.round((Date.now()-c.current.time.begin)/1e3),c.current.wpm=(c.current.right/(c.current.time.secs/60)).toFixed(2),E(!1),M(!0),setTimeout(()=>{I(!0)},150)),o}),S(o=>t===C&&(o===""||o.charAt(o.length-1)===" ")?o:o+e)},[m,p]),X=l.exports.useCallback(()=>{const t=m.charAt(m.length-1);if(t==="")return;const e=h.current;let r;if(t===" ")if(p[e[0]-1].isCorrect)r=e;else if(p[e[0]-1].isSkip){const s=p[e[0]-1].letterArr.findIndex(n=>n.isCorrect===null);r=[e[0]-1,s]}else{const n=x(f.current)[e[0]-1].getElementsByClassName("letter");r=[e[0]-1,n.length]}else{const s=x(f.current)[e[0]],n=s.getElementsByClassName("extra-letter");n&&n.length>0&&s.removeChild(n[n.length-1]),r=[e[0],e[1]-1]}h.current=r,$(),N(s=>(t===" "?s[e[0]-1].isCorrect===!1&&(s[e[0]-1].isCorrect=null):s[e[0]].letterArr.length>=e[1]&&(s[e[0]].letterArr[e[1]-1].isCorrect=null,s[e[0]].isCorrect=null),s)),S(s=>{let n=!0;return t===" "&&p[e[0]-1].isCorrect&&(n=!1),n?s.substring(0,s.length-1):s})},[m,p]),Y=t=>{console.log(t.key,t.keyCode,t.metaKey),t.key!=="Enter"&&(t.preventDefault(),t.stopPropagation(),t.persist()),!F&&(A(!1),t.key.length===1&&t.key!==" "?(c.current.time.begin===0&&(c.current.time.begin=Date.now()),K(t.keyCode,t.key)):t.keyCode===re?X():(t.keyCode===C||t.key==="Enter")&&K(C," "))},P=()=>{E(!0),w.current.focus(),document.documentElement.scrollTop=0},B=l.exports.useCallback(()=>{h.current=[0,0],y.current=k.shuffle(y.current),c.current={wpm:"",right:0,wrong:0,acc:0,time:{begin:0,secs:0}};const t=f.current.getElementsByClassName("extra-letter");t.length!==0&&Array.from(t).forEach(e=>{e.parentNode.removeChild(e)}),N(k.jsonCopy(y.current.slice(0,W)).map(e=>Object.assign({},e,{letterArr:Array.from(e.text).map(r=>({letter:r,isCorrect:null,inputVal:"0"})),isCorrect:null,isSkip:!1}))),S(""),M(!1),I(!1),setTimeout(()=>{P(),$()},10)},[W]);return l.exports.useEffect(()=>{y.current=k.getWords(d.$state.root.wordsMode,d.$state.root.customerWords),B()},[d.$state.root.wordsMode,d.$state.root.customerWords,B,W]),u("div",{className:"Monkey",children:[u(z,{style:{position:"fixed",top:0,right:0,padding:"20px",zIndex:1},children:[i(R,{children:b?i(se,{value:G,format:"m:ss",valueStyle:{color:"yellow",fontWeight:"bold",padding:"10px",margin:"5px"},onFinish:()=>T(!1)}):i("div",{style:{fontSize:"24px",color:"yellow",fontWeight:"bold",padding:"10px",margin:"5px"},children:"5:00"})}),u(R,{children:[" ",i(V,{"vertical-align":"middle",type:"primary",shape:"round",onClick:Q,style:{marginTop:"15px"},children:"\u5F00\u59CB\u5012\u8BA1\u65F6"})]})]}),u(z,{justify:"center",align:"middle",children:[u(R,{className:`type-main-box ${O?"fading":""} ${F?"hide":""}`,children:[i("div",{className:`caret ${J?D?"flash":"":"hide"}`,ref:q,style:{transform:`translate3d(${L.left}px,${L.top}px,0)`}}),i("div",{className:"words-box",onClick:P,ref:f,children:p.map((t,e)=>{var r;return u("div",{className:`word ${t.isCorrect?"correct":t.isCorrect===!1?"wrong":""}`,children:[i("div",{className:"label",children:t.label}),(r=t.letterArr)==null?void 0:r.map((s,n)=>i("code",{className:`letter ${s.isCorrect?"correct":s.isCorrect===!1?"wrong":""}`,children:s.isCorrect===!1?s.inputVal:s.letter},`${e}_${n}`))]},e)})}),i("input",{className:"hidden-input",type:"text",ref:w,onKeyDown:Y,onBlur:()=>{E(!1)},onFocus:()=>{E(!0),A(!0)}}),i("div",{className:"reload-line",children:i(U,{onClick:B})}),u("div",{className:`tip-line ${D?"":"hide"}`,children:[i("div",{children:"\u70B9\u51FB\u8BCD\u5757\u8FDB\u5165\u8F93\u5165\u72B6\u6001"}),i("div",{children:"\u8F93\u5165\u6B63\u786E\u7684\u5B57\u7B26\uFF0C\u7136\u540E\u7A7A\u683C"}),u("div",{children:["\u8F93\u5165\u72B6\u6001\u4E0B",i("code",{children:"Tab"}),"\u540E\u56DE\u8F66\u53EF\u4EE5\u76F4\u63A5\u5237\u65B0"]})]})]}),u(R,{flex:"900px",className:`type-result-box ${F?"show":""}`,children:[i(te,{desc:"WPM",numStr:c.current.wpm,acc:c.current.acc,secs:c.current.time.secs}),i("div",{className:"reload-line",children:i(U,{onClick:B})})]})]})]})};var ue=ee(ne);export{ue as default};
