!function(){var e=document.createElement("style");e.innerHTML='.Monkey{margin-top:50px}.Monkey .word-count-radio{padding:0 0 30px 30px}.Monkey .word-count-radio .ant-radio-button-wrapper{color:var(--head-text-color);background-color:transparent;border:none;opacity:.5}.Monkey .word-count-radio .ant-radio-button-wrapper.ant-radio-button-wrapper-checked{color:var(--word-count-checked-color)}.Monkey .word-count-radio .ant-radio-button-wrapper:not(:first-child):before{background-color:transparent;color:var(--head-text-color);content:"/"}.Monkey .caret{position:absolute;width:3px;height:30px;border-radius:10px;background-color:var(--monkey-caret-color);animation-iteration-count:infinite;animation-duration:1s;transition:transform .25s;transform:translate3d(26px,7px,0)}.Monkey .caret.flash{animation-name:caretFlash}.Monkey .caret.hide{display:none}.Monkey .type-main-box{transition:opacity .15s;opacity:1}.Monkey .type-main-box.fading{opacity:0}.Monkey .type-main-box.hide{display:none}.Monkey .words-box{font-size:22px;display:flex;flex-wrap:wrap;width:100%;align-content:flex-start;color:var(--head-text-color);overflow:hidden;user-select:none;min-width:920px}.Monkey .words-box .word{margin:7px;opacity:.8}.Monkey .words-box .word.correct{color:var(--primary-color);opacity:1}.Monkey .words-box .word.wrong{color:var(--monkey-error-color);opacity:1}.Monkey .words-box .word .label{font-size:16px;line-height:16px;text-align:center;position:relative;top:3px;color:var(--monkey-sub-color)}.Monkey .words-box .word .letter{display:inline-block;width:14px;opacity:.6}.Monkey .words-box .word .letter.correct{color:var(--primary-color);opacity:1}.Monkey .words-box .word .letter.wrong{color:var(--monkey-error-color);opacity:1}.Monkey .hidden-input{position:absolute;left:-100vw}.Monkey .tip-line{margin-top:50px;font-size:12px;text-align:center;color:var(--head-text-color);opacity:.5;transition:opacity .5s linear}.Monkey .tip-line code{padding:1px 3px;margin:0 3px;border-radius:2px;background-color:var(--head-text-color);color:var(--bg-color)}.Monkey .tip-line.hide{opacity:0}.Monkey .type-result-box{display:none}.Monkey .type-result-box.show{display:block}.Monkey .reload-line{margin-top:80px;text-align:center}@keyframes caretFlash{0%,to{opacity:0}50%{opacity:1}}\n',document.head.appendChild(e),System.register(["./vendor-legacy.5fb88aa9.js","./index-legacy.26e32694.js","./wordTool-legacy.63e8277d.js","./ReloadBtn-legacy.7aa76919.js"],(function(e){"use strict";var t,r,o,n,i,l,c,a,s,d,u,p;return{setters:[function(e){t=e.r,r=e.f,o=e.R,n=e.j,i=e.C,l=e.B,c=e.h,a=e.v},function(e){s=e.s},function(e){d=e.w},function(e){u=e.R,p=e.T}],execute:function(){const h=32,y=e=>Array.from(e.children),{Countdown:m}=a;e("default",s((e=>{const a=t.exports.useRef(null),s=t.exports.useRef(null),g=t.exports.useRef(null),x=t.exports.useRef(d.getWords(e.$state.root.wordsMode,e.$state.root.customerWords)),f=t.exports.useRef([0,0]),w=t.exports.useRef({wpm:"",right:0,wrong:0,acc:0,time:{begin:0,secs:0}}),[k,b]=t.exports.useState(!1),[v,C]=t.exports.useState(Date.now()+3e5+1e3),[M,N]=t.exports.useState(!1),[A,S]=t.exports.useState(!1),[E,B]=t.exports.useState(!1),[R,$]=t.exports.useState(!1),[j,T]=t.exports.useState(""),[W,z]=t.exports.useState([]),[D,F]=t.exports.useState({top:0,left:0}),[I,V]=t.exports.useState(100),H=()=>{const e=f.current,t=s.current.getBoundingClientRect(),r=y(s.current)[e[0]];if(!r)return;const o=Array.from(r.getElementsByClassName("letter"));if(o.length<=e[1]){const r=o[e[1]-1].getBoundingClientRect();F({top:r.top-t.top+2,left:r.left-t.left+r.width})}else{const r=o[e[1]].getBoundingClientRect();F({top:r.top-t.top+2,left:r.left-t.left})}},L=t.exports.useCallback(((e,t)=>{const r=f.current,o=""===j||" "===j.charAt(j.length-1);let n;if(e===h)n=o?r:[r[0]+1,0];else{if(r[1]>=W[r[0]].letterArr.length){const e=y(s.current)[r[0]],o=document.createElement("code");o.className="letter wrong extra-letter",o.innerText=t,e.appendChild(o)}n=[r[0],r[1]+1]}f.current=n,H(),z((i=>{const l=i[r[0]].letterArr[r[1]];if(l&&e!==h&&(l.isCorrect=t===l.letter,l.inputVal=t,console.log(t),i[r[0]].letterArr[r[1]]=l),e===h&&!o)if(i[r[0]].letterArr.some((e=>null===e.isCorrect)))i[r[0]].isSkip=!0,i[r[0]].isCorrect=!1;else{const e=y(s.current)[r[0]].getElementsByClassName("extra-letter");e&&0!==e.length?i[r[0]].isCorrect=!1:i[r[0]].isCorrect=i[r[0]].letterArr.every((e=>e.isCorrect))}return(n[0]>i.length-1||r[0]===i.length-1&&r[1]===i[r[0]].letterArr.length-1)&&(i[r[0]].isCorrect=i[r[0]].letterArr.every((e=>e.isCorrect)),w.current.right=i.filter((e=>e.isCorrect)).length,w.current.wrong=i.length-w.current.right,w.current.acc=Math.round(w.current.right/(w.current.right+w.current.wrong)*100),w.current.time.secs=Math.round((Date.now()-w.current.time.begin)/1e3),w.current.wpm=(w.current.right/(w.current.time.secs/60)).toFixed(2),N(!1),B(!0),setTimeout((()=>{$(!0)}),150)),i})),T((r=>e!==h||""!==r&&" "!==r.charAt(r.length-1)?r+t:r))}),[j,W]),K=t.exports.useCallback((()=>{const e=j.charAt(j.length-1);if(""===e)return;const t=f.current;let r;if(" "===e)if(W[t[0]-1].isCorrect)r=t;else if(W[t[0]-1].isSkip){const e=W[t[0]-1].letterArr.findIndex((e=>null===e.isCorrect));r=[t[0]-1,e]}else{const e=y(s.current)[t[0]-1].getElementsByClassName("letter");r=[t[0]-1,e.length]}else{const e=y(s.current)[t[0]],o=e.getElementsByClassName("extra-letter");o&&o.length>0&&e.removeChild(o[o.length-1]),r=[t[0],t[1]-1]}f.current=r,H(),z((r=>(" "===e?!1===r[t[0]-1].isCorrect&&(r[t[0]-1].isCorrect=null):r[t[0]].letterArr.length>=t[1]&&(r[t[0]].letterArr[t[1]-1].isCorrect=null,r[t[0]].isCorrect=null),r))),T((r=>{let o=!0;return" "===e&&W[t[0]-1].isCorrect&&(o=!1),o?r.substring(0,r.length-1):r}))}),[j,W]),P=()=>{N(!0),a.current.focus()},G=t.exports.useCallback((()=>{f.current=[0,0],x.current=d.shuffle(x.current),w.current={wpm:"",right:0,wrong:0,acc:0,time:{begin:0,secs:0}};const e=s.current.getElementsByClassName("extra-letter");0!==e.length&&Array.from(e).forEach((e=>{e.parentNode.removeChild(e)})),z(d.jsonCopy(x.current.slice(0,I)).map((e=>Object.assign({},e,{letterArr:Array.from(e.text).map((e=>({letter:e,isCorrect:null,inputVal:"0"}))),isCorrect:null,isSkip:!1})))),T(""),B(!1),$(!1),setTimeout((()=>{P(),H()}),10)}),[I]);return t.exports.useEffect((()=>{x.current=d.getWords(e.$state.root.wordsMode,e.$state.root.customerWords),G();const t=()=>{window.scrollY+window.innerHeight>=document.documentElement.scrollHeight&&s.current.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})};return a.current&&a.current.addEventListener("focus",t),()=>{a.current&&a.current.removeEventListener("focus",t)}}),[e.$state.root.wordsMode,e.$state.root.customerWords,G,I]),r("div",{className:"Monkey",children:[r(o,{style:{position:"fixed",top:0,right:0,padding:"20px",zIndex:1},children:[n(i,{children:k?n(m,{value:v,format:"m:ss",valueStyle:{color:"yellow",fontWeight:"bold",padding:"10px",margin:"5px"},onFinish:()=>b(!1)}):n("div",{style:{fontSize:"24px",color:"yellow",fontWeight:"bold",padding:"10px",margin:"5px"},children:"5:00"})}),r(i,{children:[" ",n(l,{"vertical-align":"middle",type:"primary",shape:"round",onClick:()=>{b(!k),C(Date.now()+3e5)},style:{marginTop:"15px"},children:"开始倒计时"})]})]}),n("div",{className:"word-count-radio",children:n(c.Group,{value:I,size:"small",onChange:e=>{V(e.target.value)},children:n(c.Button,{tabIndex:-1,value:100,children:"100"})})}),r(o,{justify:"center",align:"middle",children:[r(i,{flex:"900px",className:`type-main-box ${E?"fading":""} ${R?"hide":""}`,children:[n("div",{className:"caret "+(M?A?"flash":"":"hide"),ref:g,style:{transform:`translate3d(${D.left}px,${D.top}px,0)`}}),n("div",{className:"words-box",onClick:P,ref:s,children:W.map(((e,t)=>{var o;return r("div",{className:"word "+(e.isCorrect?"correct":!1===e.isCorrect?"wrong":""),children:[n("div",{className:"label",children:e.label}),null===(o=e.letterArr)||void 0===o?void 0:o.map(((e,r)=>n("code",{className:"letter "+(e.isCorrect?"correct":!1===e.isCorrect?"wrong":""),children:!1===e.isCorrect?e.inputVal:e.letter},`${t}_${r}`)))]},t)}))}),n("input",{className:"hidden-input",type:"text",ref:a,onKeyDown:e=>{console.log(e.key,e.keyCode,e.metaKey),"Enter"!==e.key&&(e.preventDefault(),e.stopPropagation(),e.persist()),R||(S(!1),1===e.key.length&&" "!==e.key?(0===w.current.time.begin&&(w.current.time.begin=Date.now()),L(e.keyCode,e.key)):8===e.keyCode?K():e.keyCode!==h&&"Enter"!==e.key||L(h," "))},onBlur:()=>{N(!1)},onFocus:()=>{N(!0),S(!0)}}),n("div",{className:"reload-line",children:n(u,{onClick:G})}),r("div",{className:"tip-line "+(A?"":"hide"),children:[n("div",{children:"点击词块进入输入状态"}),n("div",{children:"输入正确的字符，然后空格"}),r("div",{children:["输入状态下",n("code",{children:"Tab"}),"后回车可以直接刷新"]})]})]}),r(i,{flex:"900px",className:"type-result-box "+(R?"show":""),children:[n(p,{desc:"WPM",numStr:w.current.wpm,acc:w.current.acc,secs:w.current.time.secs}),n("div",{className:"reload-line",children:n(u,{onClick:G})})]})]})]})})))}}}))}();
