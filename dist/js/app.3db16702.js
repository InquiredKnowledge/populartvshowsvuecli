(function(t){function e(e){for(var n,s,i=e[0],c=e[1],u=e[2],p=0,d=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,i=1;i<r.length;i++){var c=r[i];0!==a[c]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=r[0]))}return t}var n={},a={app:0},o=[];function s(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=n,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";r("85ec")},5537:function(t,e,r){"use strict";r("ef3f")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("Header",{attrs:{thetitle:"API Tester"}}),r("Card",{attrs:{thetitle:"Latest Popular Tv Shows",cardlist:t.cardList}})],1)},o=[],s=(r("4989"),r("ab8b"),r("bc3a")),i=r.n(s),c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h1",[t._v(t._s(t.thetitle))])},u=[],l={name:"Header",props:["thetitle"]},p=l,d=(r("5537"),r("2877")),f=Object(d["a"])(p,c,u,!1,null,"c3a2d0d2",null),h=f.exports,v=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",[t._v(t._s(t.thetitle))]),r("div",{staticClass:"card-deck"},t._l(t.cardlist,(function(e){return r("div",{key:e.id,staticClass:"card"},[r("img",{staticClass:"card-img-top",attrs:{src:e.poster_path}}),r("div",{staticClass:"card-body"},[r("h1",{staticClass:"card-title"},[t._v(t._s(e.name))]),r("p",{staticClass:"text"},[t._v(t._s(e.overview))])])])})),0)])},b=[],_={Name:"Card",props:["thetitle","cardlist"]},g=_,m=Object(d["a"])(g,v,b,!1,null,null,null),y=m.exports,w={name:"App",components:{Header:h,Card:y},data:function(){return{cardList:[]}},mounted:function(){var t=this;i.a.get("https://api.themoviedb.org/3/tv/popular?api_key=5c121df8e93b22adde3c392246600b79&language=en-US&page=1").then((function(e){if(200==e.status)for(var r=0;r<4;r++)e.data.results[r].poster_path="https://image.tmdb.org/t/p/w500"+e.data.results[r].poster_path,t.cardList.push(e.data.results[r]);else alert("Could not reach API, reload the webpage")}))}},O=w,j=(r("034f"),Object(d["a"])(O,a,o,!1,null,null,null)),x=j.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(x)}}).$mount("#app")},"85ec":function(t,e,r){},ef3f:function(t,e,r){}});
//# sourceMappingURL=app.3db16702.js.map