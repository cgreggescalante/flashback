(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[303],{8204:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/util",function(){return e(4636)}])},4636:function(t,n,e){"use strict";e.r(n);var o=e(2322),l=e(2784);let s=()=>{let[t,n]=(0,l.useState)([]),e=t=>{n(t.target.files)},s=()=>{if(!t)return;let n=new FormData,e=[...t];e.forEach((t,e)=>n.append("file-".concat(e),t)),fetch("api/loadPlays",{method:"POST",body:n}).then(t=>console.log(t))},c=()=>{fetch("api/loadTracks").then(t=>console.log(t))},a=()=>{fetch("api/loadArtists").then(t=>console.log(t))};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("input",{type:"file",multiple:!0,accept:".json",onChange:e}),(0,o.jsx)("button",{onClick:s,children:"Load Plays"}),(0,o.jsx)("br",{}),(0,o.jsx)("button",{onClick:c,children:"Load Tracks"}),(0,o.jsx)("br",{}),(0,o.jsx)("button",{onClick:a,children:"Load Artists"})]})};n.default=s}},function(t){t.O(0,[774,888,179],function(){return t(t.s=8204)}),_N_E=t.O()}]);