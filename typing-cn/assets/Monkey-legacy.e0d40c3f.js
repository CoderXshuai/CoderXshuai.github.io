!function(){var e=document.createElement("style");e.innerHTML='.Monkey{margin-top:50px}.Monkey .word-count-radio{padding:0 0 30px 30px}.Monkey .word-count-radio .ant-radio-button-wrapper{color:var(--head-text-color);background-color:transparent;border:none;opacity:.5}.Monkey .word-count-radio .ant-radio-button-wrapper.ant-radio-button-wrapper-checked{color:var(--word-count-checked-color)}.Monkey .word-count-radio .ant-radio-button-wrapper:not(:first-child):before{background-color:transparent;color:var(--head-text-color);content:"/"}.Monkey .caret{position:absolute;width:3px;height:30px;border-radius:10px;background-color:var(--monkey-caret-color);animation-iteration-count:infinite;animation-duration:1s;transition:transform .25s;transform:translate3d(26px,7px,0)}.Monkey .caret.flash{animation-name:caretFlash}.Monkey .caret.hide{display:none}.Monkey .type-main-box{transition:opacity .15s;opacity:1}.Monkey .type-main-box.fading{opacity:0}.Monkey .type-main-box.hide{display:none}.Monkey .words-box{font-size:22px;display:flex;flex-wrap:wrap;width:100%;align-content:flex-start;color:var(--head-text-color);overflow:hidden;user-select:none;min-width:920px}.Monkey .words-box .word{margin:7px;opacity:.8}.Monkey .words-box .word.correct{color:var(--primary-color);opacity:1}.Monkey .words-box .word.wrong{color:var(--monkey-error-color);opacity:1}.Monkey .words-box .word .label{font-size:16px;line-height:16px;text-align:center;position:relative;top:3px;color:var(--monkey-sub-color)}.Monkey .words-box .word .letter{display:inline-block;width:14px;opacity:.6}.Monkey .words-box .word .letter.correct{color:var(--primary-color);opacity:1}.Monkey .words-box .word .letter.wrong{color:var(--monkey-error-color);opacity:1}.Monkey .hidden-input{position:absolute;left:-100vw}.Monkey .tip-line{margin-top:50px;font-size:12px;text-align:center;color:var(--head-text-color);opacity:.5;transition:opacity .5s linear}.Monkey .tip-line code{padding:1px 3px;margin:0 3px;border-radius:2px;background-color:var(--head-text-color);color:var(--bg-color)}.Monkey .tip-line.hide{opacity:0}.Monkey .type-result-box{display:none}.Monkey .type-result-box.show{display:block}.Monkey .reload-line{margin-top:80px;text-align:center}@keyframes caretFlash{0%,to{opacity:0}50%{opacity:1}}\n',document.head.appendChild(e),System.register(["./vendor-legacy.5fb88aa9.js","./index-legacy.73f3467d.js","./wordTool-legacy.d7b815ac.js","./ReloadBtn-legacy.7aa76919.js"],(function(e){"use strict";var t,r,o,n,l,i,a,c,s,d,p,u;return{setters:[function(e){t=e.r,r=e.f,o=e.R,n=e.j,l=e.C,i=e.B,a=e.h,c=e.v},function(e){s=e.s},function(e){d=e.w},function(e){p=e.R,u=e.T}],execute:function(){const h=e=>Array.from(e.children),{Countdown:y}=c;e("default",s((e=>{const c=t.exports.useRef(null),s=t.exports.useRef(null),m=t.exports.useRef(null),x=t.exports.useRef(d.getWords(e.$state.root.wordsMode,e.$state.root.customerWords)),g=t.exports.useRef([0,0]),f=t.exports.useRef({wpm:"",right:0,wrong:0,acc:0,time:{begin:0,secs:0}}),[w,k]=t.exports.useState(!1),[b,C]=t.exports.useState(Date.now()+3e5+1e3),[v,M]=t.exports.useState(!1),[N,A]=t.exports.useState(!1),[S,B]=t.exports.useState(!1),[R,$]=t.exports.useState(!1),[E,T]=t.exports.useState(""),[j,W]=t.exports.useState([]),[z,D]=t.exports.useState({top:0,left:0}),[F,I]=t.exports.useState(100),V=()=>{const e=g.current,t=s.current.getBoundingClientRect(),r=h(s.current)[e[0]];if(!r)return;const o=Array.from(r.getElementsByClassName("letter"));if(o.length<=e[1]){const r=o[e[1]-1].getBoundingClientRect();D({top:r.top-t.top+2,left:r.left-t.left+r.width})}else{const r=o[e[1]].getBoundingClientRect();D({top:r.top-t.top+2,left:r.left-t.left})}},K=t.exports.useCallback(((e,t)=>{const r=g.current,o=""===E||" "===E.charAt(E.length-1);let n;if(32===e)n=o?r:[r[0]+1,0];else{if(r[1]>=j[r[0]].letterArr.length){const e=h(s.current)[r[0]],o=document.createElement("code");o.className="letter wrong extra-letter",o.innerText=t,e.appendChild(o)}n=[r[0],r[1]+1]}g.current=n,V(),W((l=>{const i=l[r[0]].letterArr[r[1]];if(i&&32!==e&&(i.isCorrect=t===i.letter,i.inputVal=t,console.log(t),l[r[0]].letterArr[r[1]]=i),32===e&&!o)if(l[r[0]].letterArr.some((e=>null===e.isCorrect)))l[r[0]].isSkip=!0,l[r[0]].isCorrect=!1;else{const e=h(s.current)[r[0]].getElementsByClassName("extra-letter");e&&0!==e.length?l[r[0]].isCorrect=!1:l[r[0]].isCorrect=l[r[0]].letterArr.every((e=>e.isCorrect))}return(n[0]>l.length-1||r[0]===l.length-1&&r[1]===l[r[0]].letterArr.length-1)&&(l[r[0]].isCorrect=l[r[0]].letterArr.every((e=>e.isCorrect)),f.current.right=l.filter((e=>e.isCorrect)).length,f.current.wrong=l.length-f.current.right,f.current.acc=Math.round(f.current.right/(f.current.right+f.current.wrong)*100),f.current.time.secs=Math.round((Date.now()-f.current.time.begin)/1e3),f.current.wpm=(f.current.right/(f.current.time.secs/60)).toFixed(2),M(!1),B(!0),setTimeout((()=>{$(!0)}),150)),l})),T((r=>32!==e||""!==r&&" "!==r.charAt(r.length-1)?r+t:r))}),[E,j]),P=t.exports.useCallback((()=>{const e=E.charAt(E.length-1);if(""===e)return;const t=g.current;let r;if(" "===e)if(j[t[0]-1].isCorrect)r=t;else if(j[t[0]-1].isSkip){const e=j[t[0]-1].letterArr.findIndex((e=>null===e.isCorrect));r=[t[0]-1,e]}else{const e=h(s.current)[t[0]-1].getElementsByClassName("letter");r=[t[0]-1,e.length]}else{const e=h(s.current)[t[0]],o=e.getElementsByClassName("extra-letter");o&&o.length>0&&e.removeChild(o[o.length-1]),r=[t[0],t[1]-1]}g.current=r,V(),W((r=>(" "===e?!1===r[t[0]-1].isCorrect&&(r[t[0]-1].isCorrect=null):r[t[0]].letterArr.length>=t[1]&&(r[t[0]].letterArr[t[1]-1].isCorrect=null,r[t[0]].isCorrect=null),r))),T((r=>{let o=!0;return" "===e&&j[t[0]-1].isCorrect&&(o=!1),o?r.substring(0,r.length-1):r}))}),[E,j]),G=()=>{M(!0),c.current.focus(),document.documentElement.scrollTop=0},H=t.exports.useCallback((()=>{g.current=[0,0],x.current=d.shuffle(x.current),f.current={wpm:"",right:0,wrong:0,acc:0,time:{begin:0,secs:0}};const e=s.current.getElementsByClassName("extra-letter");0!==e.length&&Array.from(e).forEach((e=>{e.parentNode.removeChild(e)})),W(d.jsonCopy(x.current.slice(0,F)).map((e=>Object.assign({},e,{letterArr:Array.from(e.text).map((e=>({letter:e,isCorrect:null,inputVal:"0"}))),isCorrect:null,isSkip:!1})))),T(""),B(!1),$(!1),setTimeout((()=>{G(),V()}),10)}),[F]);return t.exports.useEffect((()=>{x.current=d.getWords(e.$state.root.wordsMode,e.$state.root.customerWords),H()}),[e.$state.root.wordsMode,e.$state.root.customerWords,H,F]),r("div",{className:"Monkey",children:[r(o,{style:{position:"fixed",top:0,right:0,padding:"20px",zIndex:1},children:[n(l,{children:w?n(y,{value:b,format:"m:ss",valueStyle:{color:"yellow",fontWeight:"bold",padding:"10px",margin:"5px"},onFinish:()=>k(!1)}):n("div",{style:{fontSize:"24px",color:"yellow",fontWeight:"bold",padding:"10px",margin:"5px"},children:"5:00"})}),r(l,{children:[" ",n(i,{"vertical-align":"middle",type:"primary",shape:"round",onClick:()=>{k(!w),C(Date.now()+3e5)},style:{marginTop:"15px"},children:"开始倒计时"})]})]}),n("div",{className:"word-count-radio",children:n(a.Group,{value:F,size:"small",onChange:e=>{I(e.target.value)},children:n(a.Button,{tabIndex:-1,value:100,children:"100"})})}),r(o,{justify:"center",align:"middle",children:[r(l,{flex:"900px",className:`type-main-box ${S?"fading":""} ${R?"hide":""}`,children:[n("div",{className:"caret "+(v?N?"flash":"":"hide"),ref:m,style:{transform:`translate3d(${z.left}px,${z.top}px,0)`}}),n("div",{className:"words-box",onClick:G,ref:s,children:j.map(((e,t)=>{var o;return r("div",{className:"word "+(e.isCorrect?"correct":!1===e.isCorrect?"wrong":""),children:[n("div",{className:"label",children:e.label}),null===(o=e.letterArr)||void 0===o?void 0:o.map(((e,r)=>n("code",{className:"letter "+(e.isCorrect?"correct":!1===e.isCorrect?"wrong":""),children:!1===e.isCorrect?e.inputVal:e.letter},`${t}_${r}`)))]},t)}))}),n("input",{className:"hidden-input",type:"text",ref:c,onKeyDown:e=>{console.log(e.key,e.keyCode,e.metaKey),9!==e.keyCode&&(e.preventDefault(),e.stopPropagation(),e.persist()),R||(A(!1),1===e.key.length?(0===f.current.time.begin&&(f.current.time.begin=Date.now()),K(e.keyCode,e.key)):8===e.keyCode&&P())},onBlur:()=>{M(!1)},onFocus:()=>{M(!0),A(!0)}}),n("div",{className:"reload-line",children:n(p,{onClick:H})}),r("div",{className:"tip-line "+(N?"":"hide"),children:[n("div",{children:"点击词块进入输入状态"}),n("div",{children:"输入正确的字符，然后空格"}),r("div",{children:["输入状态下",n("code",{children:"Tab"}),"后回车可以直接刷新"]})]})]}),r(l,{flex:"900px",className:"type-result-box "+(R?"show":""),children:[n(u,{desc:"WPM",numStr:f.current.wpm,acc:f.current.acc,secs:f.current.time.secs}),n("div",{className:"reload-line",children:n(p,{onClick:H})})]})]})]})})))}}}))}();
