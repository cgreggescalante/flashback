(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[874],{5056:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/listeningTime",function(){return r(1e3)}])},1294:function(e,t,r){"use strict";var n=r(2322),a=r(3738),s=r(929),i=r(3928);let o=e=>{let{data:t}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.$Q,{options:(0,s.chartOptions)(t.chartName),data:t.chartData}),(0,n.jsx)(i.Z,{data:t.tableData.data,columns:t.tableData.columns})]})};t.Z=o},1e3:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return C}});var n=r(2322),a=r(1132),s=r(4252),i=r(929),o=r(5862),c=r(2784),l=r(3255);let u=e=>{let t=Math.floor(e/1e3/60/60);e-=36e5*t;let r=Math.floor(e/1e3/60);e-=6e4*r;let n=Math.floor(e/1e3);return"".concat(t," hour").concat(t>1||0==t?"s":"",", ").concat(r," minute").concat(r>1||0==r?"s":"",", ").concat(n," second").concat(n>1||0==n?"s":"")},R=e=>{let{data:t}=e;return(0,n.jsxs)(n.Fragment,{children:["Yearly Max: ",u(t.yearly.maximum)," ",(0,n.jsx)("br",{}),"Yearly Average: ",u(t.yearly.average)," ",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"Monthly Max: ",u(t.monthly.maximum)," ",(0,n.jsx)("br",{}),"Monthly Average: ",u(t.monthly.average)," ",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"Weekly Max: ",u(t.weekly.maximum)," ",(0,n.jsx)("br",{}),"Weekly Average: ",u(t.weekly.average)," ",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"Daily Max: ",u(t.daily.maximum)," ",(0,n.jsx)("br",{}),"Daily Average: ",u(t.daily.average)]})};var T=r(4457),A=r(1294);a.kL.register(...a.zX);let E=[{formatChart:i.listeningTimeDayChart,formatTable:i.listeningTimeDayTable},{formatChart:i.listeningTimeWeekChart,formatTable:i.listeningTimeWeekTable},{formatChart:i.listeningTimeMonthChart,formatTable:i.listeningTimeMonthTable},{formatChart:i.listeningTimeYearChart,formatTable:i.listeningTimeYearTable}],h=async()=>await Promise.all([s.n4.getDaily(),s.n4.getWeekly(),s.n4.getMonthly(),s.n4.getYearly()]).then(e=>({daily:e[0][0],weekly:e[1][0],monthly:e[2][0],yearly:e[3][0]})),f=async e=>{let t,{resolution:r,pageIndex:n}=e,{formatChart:a,formatTable:i}=E[r];switch(r){case 0:t=s.O7.daily(n);break;case 1:t=s.O7.weekly(n);break;case 2:t=s.O7.monthly(n);break;case 3:t=s.O7.yearly(0)}return await t.then(e=>({chartName:"Listening Time",chartData:a(e),tableData:i(e)}))},x=()=>{let[e,t]=(0,c.useState)(1),[r,a]=(0,c.useState)(0),s=e=>{t(Number.parseInt(e.target.value)),a(0)},i=(0,l.ZP)({resolution:e,pageIndex:r},f),u=(0,l.ZP)(o.MC,h);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h2",{children:"Listening Time"}),(0,n.jsx)(T.Z,{data:u.data,error:u.error,component:R}),(0,n.jsx)("br",{})," ",(0,n.jsx)("br",{}),(0,n.jsxs)("label",{children:["Resolution",(0,n.jsxs)("select",{value:e,onChange:s,children:[(0,n.jsx)("option",{value:0,children:"Day"}),(0,n.jsx)("option",{value:1,children:"Week"}),(0,n.jsx)("option",{value:2,children:"Month"}),(0,n.jsx)("option",{value:3,children:"Year"})]})]}),(0,n.jsx)("br",{}),(0,n.jsx)("button",{disabled:0==r,onClick:()=>a(r-1),children:"<"}),(0,n.jsx)("button",{onClick:()=>a(r+1),children:">"}),(0,n.jsx)("br",{}),(0,n.jsx)(T.Z,{data:i.data,error:i.error,component:A.Z})]})};var C=x},5862:function(e,t,r){"use strict";t.MC=void 0;var n=r(200);n.createArtistIfNotExists,n.createGenreIfNotExists,n.createPlayIfNotExists,n.createTrackIfNotExists;var a=r(5106);a.ARTISTS,t.MC=a.INSIGHTS,a.TOP_TRACKS},200:function(e,t){"use strict";var r=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(a,s){function i(e){try{c(n.next(e))}catch(t){s(t)}}function o(e){try{c(n.throw(e))}catch(t){s(t)}}function c(e){var t;e.done?a(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(i,o)}c((n=n.apply(e,t||[])).next())})},n=this&&this.__generator||function(e,t){var r,n,a,s,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return s={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function o(o){return function(c){return function(o){if(r)throw TypeError("Generator is already executing.");for(;s&&(s=0,o[0]&&(i=0)),i;)try{if(r=1,n&&(a=2&o[0]?n.return:o[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,o[1])).done)return a;switch(n=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,n=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=(a=i.trys).length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(c){o=[6,c],n=0}finally{r=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}};t.__esModule=!0,t.createGenreIfNotExists=t.createArtistIfNotExists=t.createTrackIfNotExists=t.createPlayIfNotExists=void 0,t.createPlayIfNotExists=function(e){return r(void 0,void 0,void 0,function(){return n(this,function(t){switch(t.label){case 0:return t.trys.push([0,2,,4]),[4,e.execute("SELECT * FROM PLAY FETCH FIRST 1 ROWS ONLY")];case 1:case 3:return t.sent(),[3,4];case 2:return t.sent(),[4,e.execute("CREATE TABLE PLAY (TS TIMESTAMP,USERNAME VARCHAR2(128),PLATFORM VARCHAR2(128),MS_PLAYED NUMBER(16, 0),CONN_COUNTRY VARCHAR2(16),IP_ADDR_DECRYPTED VARCHAR2(64),USER_AGENT_DECRYPTED VARCHAR2(128),TRACK_NAME VARCHAR2(256),ARTIST_NAME VARCHAR2(256),ALBUM_NAME VARCHAR2(256),TRACK_ID VARCHAR2(256),REASON_START VARCHAR2(128),REASON_END VARCHAR2(128),SHUFFLE NUMBER(8, 0),OFFLINE_MODE NUMBER(8, 0),OFFLINE_TIMESTAMP NUMBER(32, 0),INCOGNITO_MODE NUMBER(8, 0))")];case 4:return[2]}})})},t.createTrackIfNotExists=function(e){return r(void 0,void 0,void 0,function(){return n(this,function(t){switch(t.label){case 0:return t.trys.push([0,2,,4]),[4,e.execute("SELECT * FROM TRACK FETCH FIRST 1 ROWS ONLY")];case 1:case 3:return t.sent(),[3,4];case 2:return t.sent(),[4,e.execute("CREATE TABLE TRACK (NAME VARCHAR2(256),ID VARCHAR2(256),ALBUM_ID VARCHAR2(256),ARTIST_ID VARCHAR2(256),EXPLICIT NUMBER,POPULARITY NUMBER, TRACK_NUMBER NUMBER)")];case 4:return[2]}})})},t.createArtistIfNotExists=function(e){return r(void 0,void 0,void 0,function(){return n(this,function(t){switch(t.label){case 0:return t.trys.push([0,2,,4]),[4,e.execute("SELECT * FROM ARTIST FETCH FIRST 1 ROWS ONLY")];case 1:case 3:return t.sent(),[3,4];case 2:return t.sent(),[4,e.execute("CREATE TABLE ARTIST (NAME VARCHAR2(256), ID VARCHAR2(256), POPULARITY NUMBER, FOLLOWERS NUMBER)")];case 4:return[2]}})})},t.createGenreIfNotExists=function(e){return r(void 0,void 0,void 0,function(){return n(this,function(t){switch(t.label){case 0:return t.trys.push([0,2,,4]),[4,e.execute("SELECT * FROM GENRE FETCH FIRST 1 ROWS ONLY")];case 1:case 3:return t.sent(),[3,4];case 2:return t.sent(),[4,e.execute("CREATE TABLE GENRE (NAME VARCHAR2(256), ARTIST_ID VARCHAR2(256))")];case 4:return[2]}})})}},5106:function(e,t){"use strict";t.__esModule=!0,t.INSIGHTS=t.ARTISTS=t.TOP_TRACKS=void 0;var r="https://g0cde1310ac37a5-flashback.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/api/";t.TOP_TRACKS=r+"track/top?",t.ARTISTS=r+"artist?",t.INSIGHTS=r+"listeningTime/insights"}},function(e){e.O(0,[767,100,655,774,888,179],function(){return e(e.s=5056)}),_N_E=e.O()}]);