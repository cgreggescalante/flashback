(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[239],{6388:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/artist",function(){return a(1501)}])},4557:function(e,t,a){"use strict";var r=a(2322),n=a(2784);let s=[2018,2019,2020,2021,2022,2023],l=["January","February","March","April","May","June","July","August","September","October","November","December"],u=[];for(let c=0;c<12;c++)u.push(new Date(2021,c+1,0).getDate());let i=e=>{let{setDate:t}=e,[a,c]=(0,n.useState)(2019),[i,o]=(0,n.useState)(0),[h,d]=(0,n.useState)(1),[j,x]=(0,n.useState)(u[0]),g=e=>{c(e.target.value),t(new Date(e.target.value,i,h))},p=e=>{o(e.target.value),x(u[e.target.value-1]),t(new Date(a,e.target.value,h))},v=e=>{d(e.target.value),t(new Date(a,i,e.target.value))};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("select",{onChange:g,children:s.map(e=>(0,r.jsx)("option",{value:e,children:e},e))}),(0,r.jsx)("select",{onChange:p,children:l.map((e,t)=>(0,r.jsx)("option",{value:t,children:e},t))}),(0,r.jsx)("select",{onChange:v,children:Array(j).fill(0).map((e,t)=>(0,r.jsx)("option",{value:t+1,children:t+1},t))})]})};t.Z=i},1501:function(e,t,a){"use strict";a.r(t);var r=a(2322),n=a(1132),s=a(3513),l=a(2784),u=a(3738),c=a(3255),i=a(4729),o=a(4457),h=a(4557),d=a(8026),j=a(4252);n.kL.register(...n.zX);let x=e=>{let{rangeStart:t,rangeEnd:a}=e;return j.CS.getByPlayTime(0,100,t,a).then(e=>({chartData:(0,s.E7)(e.slice(0,10)),tableData:(0,s.m4)(e)}))},g=e=>{let{data:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.$Q,{options:(0,s.q_)("Top Artists"),data:t.chartData}),(0,r.jsx)(d.Z,{data:t.tableData.data,columns:t.tableData.columns})]})},p=()=>{let[e,t]=(0,l.useState)(new Date(0,0)),[a,n]=(0,l.useState)(new Date(9999,0)),{data:s,error:u}=(0,c.ZP)({rangeStart:e,rangeEnd:a,key:"artists"});return(0,r.jsxs)(r.Fragment,{children:["Start ",(0,r.jsx)(h.Z,{setDate:t})," ",(0,r.jsx)("br",{}),"End ",(0,r.jsx)(h.Z,{setDate:n})," ",(0,r.jsx)("br",{}),(0,r.jsx)(o.Z,{data:s,error:u,component:g})]})};t.default=()=>(0,r.jsx)(i.J$,{value:{revalidateOnFocus:!1,fetcher:x},children:(0,r.jsx)(p,{})})}},function(e){e.O(0,[767,100,170,774,888,179],function(){return e(e.s=6388)}),_N_E=e.O()}]);