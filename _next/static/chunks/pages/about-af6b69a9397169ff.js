(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{9212:function(t,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n(4806)}])},4806:function(t,r,n){"use strict";n.r(r),n.d(r,{default:function(){return h}});var e,s=n(5893),a=n(5430),i=n(3148),l=n(8767);i.kL.register(...i.zX),i.kL.register(...i.zX);var u=(e=(t,r)=>(0,s.jsx)(a.$Q,{options:t,data:r}),(t,r)=>{let n=()=>{let{data:n,error:a,isError:i,isLoading:u}=(0,l.useQuery)("chartData",r);return(0,s.jsx)(s.Fragment,{children:i?(0,s.jsx)("div",{children:"Error"}):u?(0,s.jsx)("div",{className:"spinner-border",role:"status",children:(0,s.jsx)("span",{className:"sr-only",children:"Loading..."})}):(0,s.jsx)(s.Fragment,{children:e(t,n)})})};return n});let c=async()=>{let t=await fetch("http://localhost:3000/api/track/top");return await t.json()};var o=u({responsive:!0,plugins:{title:{display:!0,text:"Test Chart"}}},c);let d=()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h1",{children:"About"}),(0,s.jsx)("button",{className:"btn btn-primary m-3",children:"Button Primary"}),(0,s.jsx)(o,{})]});var h=d}},function(t){t.O(0,[196,853,774,888,179],function(){return t(t.s=9212)}),_N_E=t.O()}]);