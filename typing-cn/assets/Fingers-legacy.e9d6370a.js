!function(){var e=document.createElement("style");e.innerHTML='.home>div{height:calc(100vh - 300px)}.home .home-scale-box-m{transform:scale(1.2) translateY(10%)}.home .home-scale-box-l{transform:scale(1.5) translateY(20%)}.home .hide-control>.ant-btn-link{color:var(--head-text-color);opacity:.5;padding-left:0;padding-right:0}.home-show-main{padding-bottom:10px}.home-show-main .ant-spin-dot-item{background-color:var(--primary-color)}.home-show-main .type-end{position:relative}.home-show-main .type-end:before{content:"Time Out !";text-align:center;padding-top:36px;font-size:20px;position:absolute;top:4px;left:5px;background-color:gray;color:var(--head-text-color);border-radius:4px;opacity:.8;height:110px;width:440px;z-index:9}.home-show-main-window{padding:0 8px 10px 12px;font-size:20px;background-color:var(--home-window-bg-color);color:var(--home-window-text-color);border-radius:4px;height:116px;overflow:hidden;user-select:none}.home-show-main-window-item{z-index:1}.home-show-main-window-item.correct{color:var(--success-color);opacity:var(--success-opacity)}.home-show-main-window-item.incorrect{color:var(--error-color);opacity:var(--error-opacity)}.home-show-main-window--label{font-size:20px;text-align:center;position:relative;top:10px;color:var(--home-window-text-sub-color)}.home-show-main-window--label.acting:before{content:"";position:absolute;left:-6%;top:0;width:112%;height:42px;background-color:var(--home-window-text-acting-bg-color);border-radius:4px;z-index:-1}.home-show-main-window--text{font-size:14px;text-align:center}.home-show-main-window--text.hide{opacity:0}.home-input{line-height:2;font-size:20px;border-radius:4px}.home-input:focus{box-shadow:0 0 0 6px var(--home-input-focus-color)}.home-input:hover,.home-input:focus{border-color:var(--primary-color)}.home-countdown{cursor:pointer}.home-countdown-main{background-color:var(--home-countdown-bg-color);border-radius:4px;text-align:center;padding:6px 0}.home-countdown-main .ant-statistic-content-value{color:var(--home-countdown-text-color);position:relative}.home-countdown-placeholder{position:absolute;top:2px;left:0;width:100%;height:45px;line-height:45px;text-align:center;font-size:24px;color:var(--home-countdown-text-color);background-color:var(--home-countdown-bg-color)}.home-countdown-placeholder.time-run{display:none}.home-reload-btn{height:50px;width:50px;border-radius:4px;background-color:var(--home-reload-btn-bg-color);border-color:var(--home-reload-btn-bg-color)}.home-reload-btn:hover,.home-reload-btn:focus{box-shadow:0 0 0 5px var(--home-reload-btn-focus-color);background-color:var(--home-reload-btn-bg-color);border-color:var(--home-reload-btn-bg-color);filter:brightness(1.1)}.home-reload-btn span{color:var(--home-reload-btn-text-color);font-size:26px;position:relative;top:2px}.home .home-type-result-container{position:relative}.home .home-type-result{position:absolute;left:0;top:20px;width:100%;color:var(--head-text-color)}.home .home-type-result .result-wpm{text-align:center;font-size:40px}.home .home-type-result .result-title{font-size:20px;padding-left:20px}.home .home-type-result .result-numbers{font-size:20px;padding-right:20px;text-align:right}.home .home-type-result .result-numbers.correct{color:var(--success-color)}.home .home-type-result .result-numbers.wrong{color:var(--error-color)}.home .home-type-result .type-resule-collapse .ant-collapse-header{color:var(--head-text-color)}.home .home-type-result .type-resule-collapse .ant-tag{text-align:center;margin-bottom:5px;line-height:14px}.home-countdown-popover .ant-input-number{width:70px;margin-right:10px}.home-countdown-popover .ant-input-number:focus,.home-countdown-popover .ant-input-number:hover{border-color:var(--primary-color)}\n',document.head.appendChild(e),System.register(["./vendor-legacy.5fb88aa9.js","./index-legacy.26e32694.js","./wordTool-legacy.63e8277d.js"],(function(e){"use strict";var r,o,t,n,c,s,i,l,a,u,d,h,p,m,x,w;return{setters:[function(e){r=e.r,o=e.j,t=e.R,n=e.f,c=e.C,s=e.B,i=e.n,l=e.k,a=e.o,u=e.p,d=e.q,h=e.s,p=e.t,m=e.v},function(e){x=e.s},function(e){w=e.w}],execute:function(){const{Countdown:f}=m,{Panel:g}=h,b=e=>{const r=e%60;return`${Math.floor(e/60)}:${r<10?"0":""}${r}`};e("default",x((e=>{const[m,x]=r.exports.useState(!0),[v,y]=r.exports.useState(0),[N,C]=r.exports.useState(0),[k,$]=r.exports.useState([]),[z,R]=r.exports.useState(""),[T,S]=r.exports.useState(!1),W=r.exports.useRef(w.getWords(e.$state.root.wordsMode,e.$state.root.customerWords)),A=r.exports.useRef(null),E=r.exports.useRef(null),j=r.exports.useRef(0),M=r.exports.useRef(!1),H=r.exports.useRef(0),I=r.exports.useRef(0),O=r.exports.useRef(!1),P=r.exports.useRef(53),V=r.exports.useRef(0),Y=r.exports.useRef(parseInt(e.$state.root.countdownTime,10)),[q,B]=r.exports.useState(b(Y.current)),[D,F]=r.exports.useState(!0),K=r.exports.useRef({wpm:0,correct:0,wrong:0,inputWordArr:[]}),L=e=>{$((r=>{const o=[...W.current];return e?(j.current=0,[{isCorrect:null,...o[j.current]}]):(j.current+=1,j.current>=o.length&&(j.current=0),r.concat({isCorrect:null,...o[j.current]}))}))},U=(e,r)=>{let o=!0;return e.forEach(((e,t)=>{r.charAt(t)!==e&&(o=!1)})),o},G=r.exports.useCallback((()=>{M.current=!1,I.current=0,O.current=!1,V.current=0,S(!1),R(""),C(0),W.current=w.shuffle(W.current),L(!0),setTimeout((()=>{E.current.focus(),K.current={wpm:0,correct:0,wrong:0,inputWordArr:[]}}),10)}),[]);return r.exports.useEffect((()=>{if(A){const e=A.current.lastElementChild;if(!e||!e.lastElementChild)return;const r=A.current.scrollTop;Array.from(e.children).forEach(((o,t)=>{P.current=o.offsetHeight;const n=o.offsetTop-e.offsetTop,c=P.current+r,s=c-5<n&&n<c+5;!M.current&&s&&(H.current=t,M.current=!0)})),e.lastElementChild.offsetTop-e.offsetTop-r<3*P.current+1&&L()}}),[k.length]),r.exports.useEffect((()=>{if(T)return;if(""===z)return void $((e=>{const r=[...e];return r[N]&&(r[N].isCorrect=null),r}));O.current||(()=>{const e=Y.current;y(Date.now()+1e3*e)})(),O.current=!0;const e=Array.from(z.trim());if(" "===z[z.length-1]){if(R(""),0===e.length)return;$((r=>{let o=[...r];const t=o[N],n=U(e,t.text);return o[N].isCorrect=n&&e.length===t.text.length,K.current.inputWordArr.push(Object.assign({input:e.join("")},o[N])),o})),C(N+1),N+1===H.current&&(I.current+=1,A.current.scrollTop=P.current*I.current,M.current=!1,L())}else $((r=>{const o=[...r],t=o[N],n=U(e,t.text);return o[N].isCorrect=!1!==n&&null,o}))}),[N,T,z]),r.exports.useEffect((()=>{W.current=w.getWords(e.$state.root.wordsMode,e.$state.root.customerWords),setTimeout((()=>{G(),x(!1)}),1e3)}),[e.$state.root.wordsMode,e.$state.root.customerWords,G]),o("div",{className:"home",children:o(t,{justify:"center",align:"middle",children:n(c,{flex:"450px",className:`home-scale-box-${e.$state.root.uiScale}`,children:[o("div",{className:"hide-control",children:n(s,{tabIndex:-1,type:"link",onClick:()=>F((e=>!e)),children:[D?"显示":"隐藏","拼音"]})}),n("div",{className:"home-show-main",children:[T&&o("div",{className:"type-end"}),o(i,{spinning:m,delay:50,wrapperClassName:"loading-wrapper",children:o("div",{className:"home-show-main-window",ref:A,children:o(t,{gutter:12,children:k.map(((e,r)=>n(c,{className:`home-show-main-window-item ${!0===e.isCorrect?"correct":""} ${!1===e.isCorrect?"incorrect":""}`,children:[o("div",{className:"home-show-main-window--label "+(N===r?"acting":""),children:e.label}),o("div",{className:"home-show-main-window--text "+(D?"hide":""),children:e.text})]},r)))})})})]}),n(t,{justify:"space-between",align:"middle",gutter:0,children:[o(c,{flex:"285px",children:o(l,{className:"home-input",ref:E,value:z,onChange:e=>{R(e.target.value)},onKeyUp:e=>{13===e.keyCode&&G(),T||(V.current+=1)}})}),o(c,{flex:"90px",children:o(a,{content:n("div",{children:[o(u,{defaultValue:Y.current,onChange:e=>{e&&/^\d+$/g.test(String(e))&&(Y.current=Number(e),B(b(Number(e))))}}),o("span",{children:"秒"})]}),onVisibleChange:()=>e.$dispatch("setCountdownTime",String(Y.current)),overlayClassName:"home-countdown-popover",placement:"bottom",title:"",trigger:"click",children:n("div",{className:"home-countdown",children:[o(f,{className:"home-countdown-main",value:v,format:"m:ss",onFinish:()=>{if(O.current){const e=K.current.inputWordArr,r=e.filter((e=>!0===e.isCorrect)).length;K.current={wpm:Math.round(r/(Y.current/60)),correct:r,wrong:e.filter((e=>!1===e.isCorrect)).length,inputWordArr:e},S(!0),console.log(k)}}}),o("div",{className:"home-countdown-placeholder "+(O.current?"time-run":""),children:q})]})})}),o(c,{flex:"50px",children:o(s,{className:"home-reload-btn",onClick:G,type:"primary",icon:o(d,{})})})]}),o("div",{className:"home-type-result-container",children:T&&n(t,{className:"home-type-result",children:[o(c,{span:24,children:n("div",{className:"result-wpm",children:[K.current.wpm,"WPM"]})}),o(c,{span:12,children:o("div",{className:"result-title",children:"正确"})}),o(c,{span:12,children:o("div",{className:"result-numbers correct",children:K.current.correct})}),o(c,{span:12,children:o("div",{className:"result-title",children:"错误"})}),o(c,{span:12,children:o("div",{className:"result-numbers wrong",children:K.current.wrong})}),o(c,{span:12,children:o("div",{className:"result-title",children:"按键总数"})}),o(c,{span:12,children:o("div",{className:"result-numbers",children:V.current})}),o(c,{span:24,children:o(h,{ghost:!0,className:"type-resule-collapse",children:o(g,{header:"展开此次输入",children:K.current.inputWordArr.map(((e,r)=>n(p,{color:e.isCorrect?"success":"error",children:[o("div",{children:e.label}),o("div",{children:e.input})]},r)))},"1")})})]})})]})})})})))}}}))}();