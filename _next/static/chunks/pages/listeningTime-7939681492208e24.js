(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[874],{5056:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/listeningTime",function(){return r(1229)}])},1229:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return C}});var a=r(2322),n=r(1132),s=r(4252),o=r(3513),i=r(5862),c=r(2784),u=r(3255);let l=e=>{let t=Math.floor(e/1e3/60/60);e-=36e5*t;let r=Math.floor(e/1e3/60);e-=6e4*r;let a=Math.floor(e/1e3);return"".concat(t," hour").concat(t>1||0==t?"s":"",", ").concat(r," minute").concat(r>1||0==r?"s":"",", ").concat(a," second").concat(a>1||0==a?"s":"")},R=e=>{let{data:t}=e;return(0,a.jsxs)(a.Fragment,{children:["Yearly Max: ",l(t.yearly.maximum)," ",(0,a.jsx)("br",{}),"Yearly Average: ",l(t.yearly.average)," ",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"Monthly Max: ",l(t.monthly.maximum)," ",(0,a.jsx)("br",{}),"Monthly Average: ",l(t.monthly.average)," ",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"Weekly Max: ",l(t.weekly.maximum)," ",(0,a.jsx)("br",{}),"Weekly Average: ",l(t.weekly.average)," ",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"Daily Max: ",l(t.daily.maximum)," ",(0,a.jsx)("br",{}),"Daily Average: ",l(t.daily.average)]})};var A=r(4457),E=r(3738),T=r(3928);let f=e=>{let{data:t}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(E.$Q,{options:(0,o.q_)("Listening Time"),data:t.chartData}),(0,a.jsx)(T.Z,{data:t.tableData.data,columns:t.tableData.columns})]})};n.kL.register(...n.zX);let h=[{formatChart:o.SE,formatTable:o.Jc},{formatChart:o.Wm,formatTable:o.dW},{formatChart:o.My,formatTable:o.GT},{formatChart:o.R_,formatTable:o.g5}],x=async()=>await Promise.all([s.n4.getDaily(),s.n4.getWeekly(),s.n4.getMonthly(),s.n4.getYearly()]).then(e=>({daily:e[0][0],weekly:e[1][0],monthly:e[2][0],yearly:e[3][0]})),d=async e=>{let t,{resolution:r,pageIndex:a}=e,{formatChart:n,formatTable:o}=h[r];switch(r){case 0:t=s.O7.daily(a);break;case 1:t=s.O7.weekly(a);break;case 2:t=s.O7.monthly(a);break;case 3:t=s.O7.yearly(0)}return await t.then(e=>({chartData:n(e),tableData:o(e)}))},y=()=>{let[e,t]=(0,c.useState)(1),[r,n]=(0,c.useState)(0),s=e=>{t(Number.parseInt(e.target.value)),n(0)},o=(0,u.ZP)({resolution:e,pageIndex:r},d),l=(0,u.ZP)(i.MC,x);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h2",{children:"Listening Time"}),(0,a.jsx)(A.Z,{data:l.data,error:l.error,component:R}),(0,a.jsx)("br",{})," ",(0,a.jsx)("br",{}),(0,a.jsxs)("label",{children:["Resolution",(0,a.jsxs)("select",{value:e,onChange:s,children:[(0,a.jsx)("option",{value:0,children:"Day"}),(0,a.jsx)("option",{value:1,children:"Week"}),(0,a.jsx)("option",{value:2,children:"Month"}),(0,a.jsx)("option",{value:3,children:"Year"})]})]}),(0,a.jsx)("br",{}),(0,a.jsx)("button",{disabled:0==r,onClick:()=>n(r-1),children:"<"}),(0,a.jsx)("button",{onClick:()=>n(r+1),children:">"}),(0,a.jsx)("br",{}),(0,a.jsx)(A.Z,{data:o.data,error:o.error,component:f})]})};var C=y},5862:function(e,t,r){"use strict";t.MC=t.to=t.YG=void 0;var a=r(200);a.createArtistIfNotExists,a.createGenreIfNotExists,a.createPlayIfNotExists,a.createTrackIfNotExists;var n=r(5106);t.to=n.ARTISTS,t.MC=n.INSIGHTS,t.YG=n.TOP_TRACKS},200:function(e,t){"use strict";var r=this&&this.__awaiter||function(e,t,r,a){return new(r||(r=Promise))(function(n,s){function o(e){try{c(a.next(e))}catch(t){s(t)}}function i(e){try{c(a.throw(e))}catch(t){s(t)}}function c(e){var t;e.done?n(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(o,i)}c((a=a.apply(e,t||[])).next())})},a=this&&this.__generator||function(e,t){var r,a,n,s,o={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return s={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function i(i){return function(c){return function(i){if(r)throw TypeError("Generator is already executing.");for(;s&&(s=0,i[0]&&(o=0)),o;)try{if(r=1,a&&(n=2&i[0]?a.return:i[0]?a.throw||((n=a.return)&&n.call(a),0):a.next)&&!(n=n.call(a,i[1])).done)return n;switch(a=0,n&&(i=[2&i[0],n.value]),i[0]){case 0:case 1:n=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,a=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!(n=(n=o.trys).length>0&&n[n.length-1])&&(6===i[0]||2===i[0])){o=0;continue}if(3===i[0]&&(!n||i[1]>n[0]&&i[1]<n[3])){o.label=i[1];break}if(6===i[0]&&o.label<n[1]){o.label=n[1],n=i;break}if(n&&o.label<n[2]){o.label=n[2],o.ops.push(i);break}n[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(c){i=[6,c],a=0}finally{r=n=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};t.__esModule=!0,t.createGenreIfNotExists=t.createArtistIfNotExists=t.createTrackIfNotExists=t.createPlayIfNotExists=void 0,t.createPlayIfNotExists=function(e){return r(void 0,void 0,void 0,function(){return a(this,function(t){switch(t.label){case 0:return t.trys.push([0,2,,4]),[4,e.execute("SELECT * FROM PLAY FETCH FIRST 1 ROWS ONLY")];case 1:case 3:return t.sent(),[3,4];case 2:return t.sent(),[4,e.execute("CREATE TABLE PLAY (TS TIMESTAMP,USERNAME VARCHAR2(128),PLATFORM VARCHAR2(128),MS_PLAYED NUMBER(16, 0),CONN_COUNTRY VARCHAR2(16),IP_ADDR_DECRYPTED VARCHAR2(64),USER_AGENT_DECRYPTED VARCHAR2(128),TRACK_NAME VARCHAR2(256),ARTIST_NAME VARCHAR2(256),ALBUM_NAME VARCHAR2(256),TRACK_ID VARCHAR2(256),REASON_START VARCHAR2(128),REASON_END VARCHAR2(128),SHUFFLE NUMBER(8, 0),OFFLINE_MODE NUMBER(8, 0),OFFLINE_TIMESTAMP NUMBER(32, 0),INCOGNITO_MODE NUMBER(8, 0))")];case 4:return[2]}})})},t.createTrackIfNotExists=function(e){return r(void 0,void 0,void 0,function(){return a(this,function(t){switch(t.label){case 0:return t.trys.push([0,2,,4]),[4,e.execute("SELECT * FROM TRACK FETCH FIRST 1 ROWS ONLY")];case 1:case 3:return t.sent(),[3,4];case 2:return t.sent(),[4,e.execute("CREATE TABLE TRACK (NAME VARCHAR2(256),ID VARCHAR2(256),ALBUM_ID VARCHAR2(256),ARTIST_ID VARCHAR2(256),EXPLICIT NUMBER,POPULARITY NUMBER, TRACK_NUMBER NUMBER)")];case 4:return[2]}})})},t.createArtistIfNotExists=function(e){return r(void 0,void 0,void 0,function(){return a(this,function(t){switch(t.label){case 0:return t.trys.push([0,2,,4]),[4,e.execute("SELECT * FROM ARTIST FETCH FIRST 1 ROWS ONLY")];case 1:case 3:return t.sent(),[3,4];case 2:return t.sent(),[4,e.execute("CREATE TABLE ARTIST (NAME VARCHAR2(256), ID VARCHAR2(256), POPULARITY NUMBER, FOLLOWERS NUMBER)")];case 4:return[2]}})})},t.createGenreIfNotExists=function(e){return r(void 0,void 0,void 0,function(){return a(this,function(t){switch(t.label){case 0:return t.trys.push([0,2,,4]),[4,e.execute("SELECT * FROM GENRE FETCH FIRST 1 ROWS ONLY")];case 1:case 3:return t.sent(),[3,4];case 2:return t.sent(),[4,e.execute("CREATE TABLE GENRE (NAME VARCHAR2(256), ARTIST_ID VARCHAR2(256))")];case 4:return[2]}})})}},5106:function(e,t){"use strict";t.__esModule=!0,t.INSIGHTS=t.ARTISTS=t.TOP_TRACKS=void 0;var r="https://g0cde1310ac37a5-flashback.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/api/";t.TOP_TRACKS=r+"track/top?",t.ARTISTS=r+"artist?",t.INSIGHTS=r+"listeningTime/insights"}},function(e){e.O(0,[767,100,278,774,888,179],function(){return e(e.s=5056)}),_N_E=e.O()}]);