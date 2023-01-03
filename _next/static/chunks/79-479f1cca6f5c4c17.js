"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[79],{4457:function(t,e,n){n.d(e,{Z:function(){return i}});var r=n(2322);let a=()=>(0,r.jsx)("h3",{children:"Failed to load data :("}),o=()=>(0,r.jsx)("h3",{children:"Loading..."}),u=t=>{let{data:e,error:n,component:u}=t;return n?(0,r.jsx)(a,{}):e?u({data:e}):(0,r.jsx)(o,{})};var i=u},8026:function(t,e,n){var r=n(2322),a=n(7274);let o=t=>{let{data:e,columns:n}=t,{getTableProps:o,getTableBodyProps:u,headerGroups:i,rows:s,prepareRow:c}=(0,a.useTable)({columns:n,data:e});return(0,r.jsxs)("table",{...o(),children:[(0,r.jsx)("thead",{children:i.map(t=>(0,r.jsx)("tr",{...t.getHeaderGroupProps(),children:t.headers.map(t=>(0,r.jsx)("th",{...t.getHeaderProps(),children:t.render("Header")}))}))}),(0,r.jsx)("tbody",{...u(),children:s.map(t=>(c(t),(0,r.jsx)("tr",{...t.getRowProps(),children:t.cells.map(t=>(0,r.jsx)("td",{...t.getCellProps(),children:t.render("Cell")}))})))})]})};e.Z=o},929:function(t,e,n){e.q_=e.R_=e.g5=e.My=e.GT=e.Wm=e.dW=e.SE=e.Jc=e.E7=e.m4=e.yR=e.sL=void 0;var r=n(8721);e.sL=r.default;var a=n(7517);e.yR=a.default;var o=n(4389);e.m4=o.default;var u=n(1441);e.E7=u.default;var i=n(7814);e.Jc=i.default;var s=n(1042);e.SE=s.default;var c=n(407);e.dW=c.default;var l=n(6938);e.Wm=l.default;var f=n(7e3);e.GT=f.default;var _=n(2759);e.My=_.default;var d=n(4975);e.g5=d.default;var T=n(9172);e.R_=T.default;var h=n(4490);e.q_=h.default},1441:function(t,e,n){e.__esModule=!0;var r=(0,n(1462).default)(function(t){return t.artist_name},function(t){return t.total_ms_played/1e3/60},"Time (minutes)");e.default=r},4389:function(t,e,n){var r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}).apply(this,arguments)};e.__esModule=!0;var a=n(5683),o=n(4969),u=[a.RANK_COLUMN,a.ARTIST_NAME_COLUMN,a.MINUTES_PLAYED_COLUMN],i=(0,o.default)(function(t,e){return t.value=Math.floor(t.total_ms_played/1e3/60),r({rank:e+1},t)},u);e.default=i},4490:function(t,e){e.__esModule=!0,e.default=function(t){return{responsive:!0,plugins:{title:{display:!0,text:t}}}}},1462:function(t,e){e.__esModule=!0,e.default=function(t,e,n){return function(r){return{labels:r.map(t),datasets:[{label:n,data:r.map(e),backgroundColor:"rgba(84,59,208,0.5)"}]}}}},4969:function(t,e){e.__esModule=!0,e.default=function(t,e){return function(n){return{data:n=n.map(t),columns:e}}}},1042:function(t,e,n){e.__esModule=!0;var r=(0,n(1462).default)(function(t){return t.year_month_day},function(t){return t.total_ms_played/1e3/60},"Time (minutes)");e.default=r},7814:function(t,e,n){e.__esModule=!0;var r=n(4969),a=n(5683),o=[a.YEAR_COLUMN,a.MONTH_COLUMN,a.DAY_COLUMN,a.MINUTES_PLAYED_COLUMN],u=(0,r.default)(function(t){return{year:t.year_month_day.split("-")[0],month:t.year_month_day.split("-")[1],day:t.year_month_day.split("-")[2],value:Math.floor(t.total_ms_played/1e3/60)}},o);e.default=u},2759:function(t,e,n){e.__esModule=!0;var r=(0,n(1462).default)(function(t){return t.year_month},function(t){return t.total_ms_played/1e3/60},"Time (minutes)");e.default=r},7e3:function(t,e,n){e.__esModule=!0;var r=n(4969),a=n(5683),o=[a.YEAR_COLUMN,a.MONTH_COLUMN,a.MINUTES_PLAYED_COLUMN],u=(0,r.default)(function(t){return{year:t.year_month.split("-")[0],month:t.year_month.split("-")[1],value:Math.floor(t.total_ms_played/1e3/60)}},o);e.default=u},6938:function(t,e,n){e.__esModule=!0;var r=(0,n(1462).default)(function(t){return t.year_week},function(t){return t.total_ms_played/1e3/60},"Time (minutes)");e.default=r},407:function(t,e,n){e.__esModule=!0;var r=n(5683),a=n(4969),o=[r.YEAR_COLUMN,r.WEEK_COLUMN,r.MINUTES_PLAYED_COLUMN],u=(0,a.default)(function(t){return{year:t.year_week.split("-")[0],week:t.year_week.split("-")[1],value:Math.floor(t.total_ms_played/1e3/60)}},o);e.default=u},9172:function(t,e,n){e.__esModule=!0;var r=(0,n(1462).default)(function(t){return t.year},function(t){return t.total_ms_played/1e3/60},"Time (minutes)");e.default=r},4975:function(t,e,n){e.__esModule=!0;var r=n(5683),a=n(4969),o=[r.YEAR_COLUMN,r.MINUTES_PLAYED_COLUMN],u=(0,a.default)(function(t){return{year:t.year,value:Math.floor(t.total_ms_played/1e3/60)}},o);e.default=u},5683:function(t,e){e.__esModule=!0,e.YEAR_COLUMN=e.MONTH_COLUMN=e.WEEK_COLUMN=e.DAY_COLUMN=e.RANK_COLUMN=e.MINUTES_PLAYED_COLUMN=e.ARTIST_NAME_COLUMN=e.TRACK_NAME_COLUMN=void 0,e.TRACK_NAME_COLUMN={Header:"Track",accessor:"track_name"},e.ARTIST_NAME_COLUMN={Header:"Artist",accessor:"artist_name"},e.MINUTES_PLAYED_COLUMN={Header:"Minutes Played",accessor:"value"},e.RANK_COLUMN={Header:"#",accessor:"rank"},e.DAY_COLUMN={Header:"Day",accessor:"day"},e.WEEK_COLUMN={Header:"Week",accessor:"week"},e.MONTH_COLUMN={Header:"Month",accessor:"month"},e.YEAR_COLUMN={Header:"Year",accessor:"year"}},7517:function(t,e,n){e.__esModule=!0;var r=(0,n(1462).default)(function(t){return t.track_name},function(t){return t.total_ms_played/1e3/60},"Time (minutes)");e.default=r},8721:function(t,e,n){var r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}).apply(this,arguments)};e.__esModule=!0;var a=n(5683),o=n(4969),u=[a.RANK_COLUMN,a.TRACK_NAME_COLUMN,a.ARTIST_NAME_COLUMN,a.MINUTES_PLAYED_COLUMN],i=(0,o.default)(function(t,e){return t.value=Math.floor(t.total_ms_played/1e3/60),r({rank:e+1},t)},u);e.default=i},5862:function(t,e,n){e.MC=e.GK=e.Bh=e.YG=void 0;var r=n(9662);r.topTracks,r.topTracksByYear;var a=n(4383);a.topArtists,a.topArtistsByYear;var o=n(200);o.createArtistIfNotExists,o.createPlayIfNotExists,o.createTrackIfNotExists;var u=n(5106);e.MC=u.INSIGHTS,e.GK=u.LISTENING_TIME,e.Bh=u.TOP_ARTISTS,e.YG=u.TOP_TRACKS},4383:function(t,e,n){var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(a,o){function u(t){try{s(r.next(t))}catch(e){o(e)}}function i(t){try{s(r.throw(t))}catch(e){o(e)}}function s(t){var e;t.done?a(t.value):((e=t.value)instanceof n?e:new n(function(t){t(e)})).then(u,i)}s((r=r.apply(t,e||[])).next())})},a=this&&this.__generator||function(t,e){var n,r,a,o,u={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(i){return function(s){return function(i){if(n)throw TypeError("Generator is already executing.");for(;o&&(o=0,i[0]&&(u=0)),u;)try{if(n=1,r&&(a=2&i[0]?r.return:i[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,i[1])).done)return a;switch(r=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(a=(a=u.trys).length>0&&a[a.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){u.label=i[1];break}if(6===i[0]&&u.label<a[1]){u.label=a[1],a=i;break}if(a&&u.label<a[2]){u.label=a[2],u.ops.push(i);break}a[2]&&u.ops.pop(),u.trys.pop();continue}i=e.call(t,u)}catch(s){i=[6,s],r=0}finally{n=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};e.__esModule=!0,e.topArtistsByYear=e.topArtists=void 0;var o=n(5106);e.topArtists=function(t,e,n,u){return void 0===t&&(t=10),void 0===e&&(e=0),void 0===n&&(n="0001-01-01T00:00:00.00Z"),void 0===u&&(u="9999-01-01T00:00:00.00Z"),r(void 0,void 0,void 0,function(){var r,i,s;return a(this,function(a){return r={method:"GET"},i={limit:t.toString(),offset:(e*t).toString(),range_start:n,range_end:u},s=o.TOP_ARTISTS+new URLSearchParams(i),[2,fetch(s,r).then(function(t){return t.json()}).then(function(t){return t.items})]})})},e.topArtistsByYear=function(t,n,r){return void 0===n&&(n=10),void 0===r&&(r=0),(0,e.topArtists)(n,r,"".concat(t,"-01-01T00:00:00.00Z"),"".concat(t+1,"-01-01T00:00:00.00Z"))}},200:function(t,e){var n=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(a,o){function u(t){try{s(r.next(t))}catch(e){o(e)}}function i(t){try{s(r.throw(t))}catch(e){o(e)}}function s(t){var e;t.done?a(t.value):((e=t.value)instanceof n?e:new n(function(t){t(e)})).then(u,i)}s((r=r.apply(t,e||[])).next())})},r=this&&this.__generator||function(t,e){var n,r,a,o,u={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(i){return function(s){return function(i){if(n)throw TypeError("Generator is already executing.");for(;o&&(o=0,i[0]&&(u=0)),u;)try{if(n=1,r&&(a=2&i[0]?r.return:i[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,i[1])).done)return a;switch(r=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(a=(a=u.trys).length>0&&a[a.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){u.label=i[1];break}if(6===i[0]&&u.label<a[1]){u.label=a[1],a=i;break}if(a&&u.label<a[2]){u.label=a[2],u.ops.push(i);break}a[2]&&u.ops.pop(),u.trys.pop();continue}i=e.call(t,u)}catch(s){i=[6,s],r=0}finally{n=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};e.__esModule=!0,e.createArtistIfNotExists=e.createTrackIfNotExists=e.createPlayIfNotExists=void 0,e.createPlayIfNotExists=function(t){return n(void 0,void 0,void 0,function(){return r(this,function(e){switch(e.label){case 0:return e.trys.push([0,2,,4]),[4,t.execute("SELECT * FROM PLAY FETCH FIRST 1 ROWS ONLY")];case 1:case 3:return e.sent(),[3,4];case 2:return e.sent(),[4,t.execute("CREATE TABLE PLAY (TS TIMESTAMP,USERNAME VARCHAR2(128),PLATFORM VARCHAR2(128),MS_PLAYED NUMBER(16, 0),CONN_COUNTRY VARCHAR2(16),IP_ADDR_DECRYPTED VARCHAR2(64),USER_AGENT_DECRYPTED VARCHAR2(128),TRACK_NAME VARCHAR2(256),ARTIST_NAME VARCHAR2(256),ALBUM_NAME VARCHAR2(256),TRACK_ID VARCHAR2(256),REASON_START VARCHAR2(128),REASON_END VARCHAR2(128),SHUFFLE NUMBER(8, 0),OFFLINE_MODE NUMBER(8, 0),OFFLINE_TIMESTAMP NUMBER(32, 0),INCOGNITO_MODE NUMBER(8, 0))")];case 4:return[2]}})})},e.createTrackIfNotExists=function(t){return n(void 0,void 0,void 0,function(){return r(this,function(e){switch(e.label){case 0:return e.trys.push([0,2,,4]),[4,t.execute("SELECT * FROM TRACK FETCH FIRST 1 ROWS ONLY")];case 1:case 3:return e.sent(),[3,4];case 2:return e.sent(),[4,t.execute("CREATE TABLE TRACK (NAME VARCHAR2(256),ID VARCHAR2(256),ALBUM_ID VARCHAR2(256),ARTIST_ID VARCHAR2(256),EXPLICIT NUMBER,POPULARITY NUMBER, TRACK_NUMBER NUMBER)")];case 4:return[2]}})})},e.createArtistIfNotExists=function(t){return n(void 0,void 0,void 0,function(){return r(this,function(e){switch(e.label){case 0:return e.trys.push([0,2,,4]),[4,t.execute("SELECT * FROM ARTIST FETCH FIRST 1 ROWS ONLY")];case 1:case 3:return e.sent(),[3,4];case 2:return e.sent(),[4,t.execute("CREATE TABLE ARTIST (NAME VARCHAR2(256), ID VARCHAR2(256), POPULARITY NUMBER, FOLLOWERS NUMBER)")];case 4:return[2]}})})}},9662:function(t,e,n){var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(a,o){function u(t){try{s(r.next(t))}catch(e){o(e)}}function i(t){try{s(r.throw(t))}catch(e){o(e)}}function s(t){var e;t.done?a(t.value):((e=t.value)instanceof n?e:new n(function(t){t(e)})).then(u,i)}s((r=r.apply(t,e||[])).next())})},a=this&&this.__generator||function(t,e){var n,r,a,o,u={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(i){return function(s){return function(i){if(n)throw TypeError("Generator is already executing.");for(;o&&(o=0,i[0]&&(u=0)),u;)try{if(n=1,r&&(a=2&i[0]?r.return:i[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,i[1])).done)return a;switch(r=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(a=(a=u.trys).length>0&&a[a.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){u.label=i[1];break}if(6===i[0]&&u.label<a[1]){u.label=a[1],a=i;break}if(a&&u.label<a[2]){u.label=a[2],u.ops.push(i);break}a[2]&&u.ops.pop(),u.trys.pop();continue}i=e.call(t,u)}catch(s){i=[6,s],r=0}finally{n=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};e.__esModule=!0,e.topTracksByYear=e.topTracks=void 0;var o=n(5106);e.topTracks=function(t,e,n,u){return void 0===t&&(t=10),void 0===e&&(e=0),void 0===n&&(n="0001-01-01T00:00:00.00Z"),void 0===u&&(u="9999-01-01T00:00:00.00Z"),r(void 0,void 0,void 0,function(){var r,i,s;return a(this,function(a){return r={method:"GET"},i={limit:t.toString(),offset:(e*t).toString(),range_start:n,range_end:u},s=o.TOP_TRACKS+new URLSearchParams(i),[2,fetch(s,r).then(function(t){return t.json()}).then(function(t){return t.items})]})})},e.topTracksByYear=function(t,n,r){return void 0===n&&(n=10),void 0===r&&(r=0),(0,e.topTracks)(n,r,"".concat(t,"-01-01T00:00:00.00Z"),"".concat(t+1,"-01-01T00:00:00.00Z"))}},5106:function(t,e){e.__esModule=!0,e.INSIGHTS=e.LISTENING_TIME=e.TOP_ARTISTS=e.TOP_TRACKS=void 0;var n="https://g0cde1310ac37a5-flashback.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/api/";e.TOP_TRACKS=n+"track/top?",e.TOP_ARTISTS=n+"artist/top?",e.LISTENING_TIME=n+"listeningTime/",e.INSIGHTS=n+"listeningTime/insights"}}]);