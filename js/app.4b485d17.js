(function(t){function e(e){for(var r,o,c=e[0],u=e[1],l=e[2],p=0,d=[];p<c.length;p++)o=c[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);s&&s(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,c=1;c<n.length;c++){var u=n[c];0!==a[u]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},i=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var s=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"139c":function(t,e,n){},"29fe":function(t,e,n){},3009:function(t,e,n){"use strict";n("139c")},"532b":function(t,e,n){"use strict";n("da61")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"grid grid_col-2 grid_gap-2"},t._l(t.indicators,(function(e,r){return n("Wrapper",{key:r,attrs:{classes:"container_row container_wrap container_justify-between container_items-baseline"}},[n("h3",{staticClass:"title"},[t._v(t._s(e.title))]),n("Indicator",{attrs:{elements:e.values,"total-amount":e.total},scopedSlots:t._u([{key:"hint",fn:function(e){var r=e.percent,a=e.value,i=e.label,o=e.color;return[n("div",{class:["hint",o]},[n("p",{class:["hint__p hint__p_bold","text_"+o]},[t._v(t._s(i)+" - "+t._s(r))]),n("p",{staticClass:"hint__p hint__p_text-primary"},[t._v(t._s(a)+" employees")])])]}}],null,!0)})],1)})),1)])])},i=[],o=n("c7eb"),c=n("1da1"),u=n("bc3a"),l=n.n(u),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"indicator",style:{width:t.width}},t._l(t.mappedElements,(function(e,r){return n("div",{key:r,class:["indicator__item","bg_"+t.colors[r]],style:{width:e.width}},[t._t("hint",null,{percent:e.width,value:e.value,color:t.colors[r],label:e.label})],2)})),0)},p=[],d=(n("a9e3"),n("d3b7"),n("d81d"),{name:"Indicator",props:{elements:{type:Array,default:function(){return[]}},totalAmount:{type:Number,required:!0},colors:{type:Array,default:function(){return["warning","success","error","default"]}},width:{type:String,default:"80%"}},computed:{mappedElements:function(){var t=this;if(!this.elements)return[];var e=this.elements.reduce((function(t,e){return t+=e.value,t}),0),n=this.elements.map((function(e){var n=Math.ceil(e.value/t.totalAmount*100);return{value:e.value,width:"".concat(n,"%"),label:n>50?"High":n>25?"Medium":"Low"}}));if(e!==this.totalAmount){var r=this.totalAmount-e;n.push({value:r,width:"".concat(Math.ceil(r/this.totalAmount*100),"%"),label:"Not Rated"})}return n}}}),f=d,h=(n("c49d"),n("2877")),v=Object(h["a"])(f,s,p,!1,null,"10219502",null),_=v.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["container",t.classes]},[t._t("default")],2)},m=[],y={name:"Wrapper",props:{classes:{type:String,default:""}}},w=y,g=(n("532b"),Object(h["a"])(w,b,m,!1,null,"6178a6a3",null)),j=g.exports,O={name:"App",components:{Indicator:_,Wrapper:j},data:function(){return{indicators:null}},mounted:function(){var t=this;return Object(c["a"])(Object(o["a"])().mark((function e(){return Object(o["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l.a.get("/data.json").then((function(t){return t.data}));case 2:t.indicators=e.sent;case 3:case"end":return e.stop()}}),e)})))()}},x=O,A=(n("3009"),Object(h["a"])(x,a,i,!1,null,"114afaeb",null)),S=A.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(S)}}).$mount("#app")},c49d:function(t,e,n){"use strict";n("29fe")},da61:function(t,e,n){}});
//# sourceMappingURL=app.4b485d17.js.map