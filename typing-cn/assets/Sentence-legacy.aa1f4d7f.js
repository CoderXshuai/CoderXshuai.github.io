!function(){var e=document.createElement("style");e.innerHTML='.Sentence{margin-top:50px}.Sentence .word-count-radio{padding:0 0 30px 30px}.Sentence .word-count-radio .ant-radio-button-wrapper{color:var(--head-text-color);background-color:transparent;border:none;opacity:.5}.Sentence .word-count-radio .ant-radio-button-wrapper.ant-radio-button-wrapper-checked{color:var(--word-count-checked-color)}.Sentence .word-count-radio .ant-radio-button-wrapper:not(:first-child):before{background-color:transparent;color:var(--head-text-color);content:"/"}.Sentence .type-main-box{transition:opacity .15s;opacity:1}.Sentence .type-main-box.fading{opacity:0}.Sentence .type-main-box.hide{display:none}.Sentence .type-main-box .sentence-loading .ant-spin-dot-item{background-color:var(--primary-color)}.Sentence .type-main-box .sentence-loading .ant-spin-text{color:var(--primary-color);text-shadow:none}.Sentence .type-main-box .sentence-line{height:34px}.Sentence .type-main-box .char{font-size:22px;color:var(--head-text-color);position:relative}.Sentence .type-main-box .char.wrong{color:red}.Sentence .type-main-box .sentence-input:after{content:"";display:block;height:2px;background-color:var(--head-text-color)}.Sentence .type-main-box .sentence-input input{background-color:transparent;margin-top:5px;padding:0;font-size:22px;color:var(--head-text-color);opacity:.8;border:none}.Sentence .type-main-box .sentence-input input:focus,.Sentence .type-main-box .sentence-input input:hover{border:none;box-shadow:none}.Sentence .type-main-box .sentence-next{height:22px;margin-top:10px;opacity:.5;color:var(--head-text-color)}.Sentence .tip-line{margin-top:50px;font-size:12px;text-align:center;color:var(--head-text-color);opacity:.5;transition:opacity .5s linear}.Sentence .tip-line code{padding:1px 3px;margin:0 3px;border-radius:2px;background-color:var(--head-text-color);color:var(--bg-color)}.Sentence .tip-line.hide{opacity:0}.Sentence .type-result-box{display:none}.Sentence .type-result-box.show{display:block}.Sentence .reload-line{margin-top:80px;text-align:center}\n',document.head.appendChild(e),System.register(["./index-legacy.526b8288.js","./vendor-legacy.5fb88aa9.js","./wordTool-legacy.5cbd0496.js","./ReloadBtn-legacy.7aa76919.js"],(function(e,n){"use strict";var t,r,c,o,a,i,l,s,d,p,u,h;return{setters:[function(e){t=e._},function(e){r=e.r,c=e.f,o=e.j,a=e.h,i=e.R,l=e.C,s=e.n,d=e.k},function(e){p=e.w},function(e){u=e.R,h=e.T}],execute:function(){const x=/^[^\x00-\xff]+$/;e("default",(()=>{const[e,g]=r.exports.useState(!0),m=r.exports.useRef(null),b=r.exports.useRef([]),[y,f]=r.exports.useState([]),[v,S]=r.exports.useState(0),[w,k]=r.exports.useState(5),[C,N]=r.exports.useState(""),[j,A]=r.exports.useState(!1),[B,R]=r.exports.useState(!1),T=r.exports.useRef({cpm:"",right:0,wrong:0,acc:0,time:{begin:0,secs:0}}),I=r.exports.useCallback((()=>{N(""),S(0),T.current={cpm:"",right:0,wrong:0,acc:0,time:{begin:0,secs:0}},b.current=p.shuffle(b.current),f(p.jsonCopy(b.current.slice(0,w)).map((e=>({sentence:e,charArr:Array.from(e).map((e=>({char:e,isCorrect:null})))})))),A(!1),R(!1),setTimeout((()=>{m.current.focus()}),10)}),[w]);return r.exports.useEffect((()=>{g(!0),t((()=>n.import("./sentences-legacy.f384a546.js")),void 0).then((e=>{b.current=e.default,I(),g(!1)}))}),[I]),c("div",{className:"Sentence",children:[o("div",{className:"word-count-radio",children:c(a.Group,{value:w,size:"small",onChange:e=>{k(e.target.value)},children:[o(a.Button,{tabIndex:-1,value:5,children:"5"}),o(a.Button,{tabIndex:-1,value:10,children:"10"}),o(a.Button,{tabIndex:-1,value:15,children:"15"}),o(a.Button,{tabIndex:-1,value:20,children:"20"}),o(a.Button,{tabIndex:-1,value:100,children:"100"})]})}),c(i,{justify:"center",align:"middle",children:[c(l,{flex:"900px",className:`type-main-box ${j?"fading":""} ${B?"hide":""}`,children:[o("div",{className:"sentence-line",children:y[v]&&y[v].charArr.map(((e,n)=>o("code",{className:"char "+(e.isCorrect?"correct":!1===e.isCorrect?"wrong":""),children:e.char},n)))}),o(s,{spinning:e,tip:"加载中",className:"sentence-loading",children:o("div",{})}),o("div",{className:"sentence-input",children:o(d,{ref:m,value:C,onChange:e=>{var n;" "===(n=e.target.value)||B||(N(n),x.test(n)&&f((e=>{const t=[...e],r={...t[v]};for(let c=0;c<n.length;c++)r.charArr[c]&&(r.charArr[c].isCorrect=n.charAt(c)===r.charArr[c].char);return t.splice(v,1,r),t})))},onKeyDown:e=>{if(!B&&(0===T.current.time.begin&&(T.current.time.begin=Date.now()),(13===e.keyCode||32===e.keyCode)&&C.length>=y[v].sentence.length))if(v===y.length-1){const e=y.reduce(((e,n)=>[...e,...n.charArr]),[]);T.current.right=e.filter((e=>e.isCorrect)).length,T.current.wrong=e.length-T.current.right,T.current.acc=Math.round(T.current.right/(T.current.right+T.current.wrong)*100),T.current.time.secs=Math.round((Date.now()-T.current.time.begin)/1e3),T.current.cpm=(T.current.right/(T.current.time.secs/60)).toFixed(2),A(!0),setTimeout((()=>{R(!0)}),150)}else S((e=>e+1)),N("")}})}),o("div",{className:"sentence-next",children:y[v+1]&&y[v+1].sentence}),o("div",{className:"reload-line",children:o(u,{onClick:I})}),c("div",{className:"tip-line",children:[o("div",{children:"点击横线上方进入输入状态"}),o("div",{children:"输入正确中文和符号，然后空格或回车"}),c("div",{children:["输入状态下",o("code",{children:"Tab"}),"后回车可以直接刷新"]})]})]}),c(l,{flex:"900px",className:"type-result-box "+(B?"show":""),children:[o(h,{desc:"字/分钟",numStr:T.current.cpm,acc:T.current.acc,secs:T.current.time.secs}),o("div",{className:"reload-line",children:o(u,{onClick:I})})]})]})]})}))}}}))}();
