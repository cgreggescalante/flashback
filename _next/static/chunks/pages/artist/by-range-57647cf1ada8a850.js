(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[689],{1318:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/artist/by-range",function(){return n(4273)}])},4273:function(e,t,n){"use strict";n.r(t);var a=n(2322),r=n(1132),s=n(929),i=n(5862),l=n(2784),u=n(3738),d=n(9381),c=n(6587),o=n(8026);r.kL.register(...r.zX);let h={responsive:!0,plugins:{title:{display:!0,text:"Top Artists"}}},_=()=>{let[e,t]=(0,l.useState)(""),[n,r]=(0,l.useState)(""),_=e=>{t(e.target.value)},j=e=>{r(e.target.value)},{data:x,mutate:g,error:p}=(0,d.ZP)("-",()=>{let t={limit:"100"};e&&(t.range_start="".concat(e,"T00:00:00.00Z")),n&&(t.range_end="".concat(n,"T00:00:00.00Z"));let a=i.Bh+new URLSearchParams(t);return fetch(a).then(e=>e.json()).then(e=>e.items)});if(p)return(0,a.jsx)("h3",{children:"Failed to load data"});if(!x)return(0,a.jsx)("h3",{children:"Loading..."});let f=(0,s.E7)(x.slice(0,10)),b=(0,s.m4)(x);return(0,a.jsxs)(c.On,{children:[(0,a.jsxs)("label",{children:["Start",(0,a.jsx)("input",{type:"date",id:"range_start",value:e,onChange:_})]}),(0,a.jsx)("br",{}),(0,a.jsxs)("label",{children:["End",(0,a.jsx)("input",{type:"date",id:"range_end",value:n,onChange:j})]}),(0,a.jsx)("br",{}),(0,a.jsx)("button",{onClick:()=>g(),children:"Submit"}),f?(0,a.jsx)(u.$Q,{options:h,data:f}):(0,a.jsx)("h2",{children:"Loading Chart"}),b?(0,a.jsx)(o.Z,{data:b.data,columns:b.columns}):(0,a.jsx)("h2",{children:"Loading Table"})]})};t.default=_}},function(e){e.O(0,[767,122,381,345,774,888,179],function(){return e(e.s=1318)}),_N_E=e.O()}]);