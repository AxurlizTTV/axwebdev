(function(){"use strict";var t={6475:function(t,e,r){r(6992),r(8674),r(9601),r(7727);var n=r(144),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{style:{background:t.$vuetify.theme.themes[t.theme].background}},[r("Navbar"),r("v-main",[r("router-view")],1),r("Footer")],1)},o=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app-bar",{attrs:{color:"primary",dark:"",fixed:"",app:"",elevate:"4"}},[r("v-btn",{staticClass:"mr-2",attrs:{icon:""}},[r("v-icon",[t._v("mdi-menu")])],1),r("v-divider",{attrs:{vertical:""}}),r("router-link",{attrs:{to:"/"}},[r("v-img",{staticClass:"mx-2 rounded-circle",attrs:{src:"img\\icons\\templogo.png","max-width":"50"}})],1),r("v-spacer"),r("v-btn",{attrs:{icon:""}},[r("v-icon",[t._v("mdi-account")])],1)],1)},c=[],s={name:"Navbar",data:function(){return{}}},u=s,l=r(1001),m=r(3453),d=r.n(m),v=r(7666),f=r(2689),p=r(5596),h=r(4456),b=r(5288),g=r(6946),y=(0,l.Z)(u,i,c,!1,null,null,null),w=y.exports;d()(y,{VAppBar:v.Z,VBtn:f.Z,VDivider:p.Z,VIcon:h.Z,VImg:b.Z,VSpacer:g.Z});var Z=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-footer",{attrs:{padless:"",dark:""}},[r("v-card",{staticClass:"flex",attrs:{flat:"",tile:""}},[r("v-card-title",{staticClass:"primary",staticStyle:{"word-break":"break-word"}},[r("strong",{staticClass:"subheading"},[t._v("Get connected with me on other platforms!")]),r("v-spacer"),t._l(t.footerIcons,(function(e){return r("v-btn",{key:e.icon,staticClass:"mx-2",attrs:{icon:"",href:e.link,target:"_blank"}},[r("v-icon",{attrs:{size:"24px"}},[t._v(" "+t._s(e.icon)+" ")])],1)}))],2),r("v-card-text",{staticClass:"py-2 white--text text-center"},[t._v(" "+t._s((new Date).getFullYear())+" — "),r("strong",[t._v("Axurliz")])])],1)],1)},x=[],_={data:function(){return{footerIcons:[{icon:"mdi-twitter",link:"https://twitter.com/axurlizttv"},{icon:"mdi-github",link:"https://github.com/AxurlizTTV"},{icon:"mdi-youtube",link:"https://www.youtube.com/channel/UC9xuEFaP5QRpy-vv5nGs6ew"}]}}},C=_,k=r(9996),F=r(5255),V=r(7718),A=(0,l.Z)(C,Z,x,!1,null,null,null),T=A.exports;d()(A,{VBtn:f.Z,VCard:k.Z,VCardText:F.ZB,VCardTitle:F.EB,VFooter:V.Z,VIcon:h.Z,VSpacer:g.Z});var O={name:"App",computed:{theme:function(){return this.$vuetify.theme.dark?"dark":"light"}},components:{Navbar:w,Footer:T},data:function(){return{}}},j=O,E=r(303),D=r(4021),S=(0,l.Z)(j,a,o,!1,null,null,null),I=S.exports;d()(S,{VApp:E.Z,VMain:D.Z});r(9826),r(1539),r(7042),r(1249),r(1038),r(8783),r(4747),r(7941);var $=r(8345),z=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-img",{attrs:{src:"img\\homebanner.png",height:"200",align:"center",justify:"center"}},[r("h1",{staticClass:"mt-14 white--text"},[t._v("Axurliz Web Development")]),r("p",{staticClass:"white--text"},[t._v("projects, source, portfolio and more")])]),r("v-card",{staticClass:"mx-auto my-12",attrs:{width:"800",elevation:"4"}},[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"6"}},[r("v-card-text",[t._v(" This website will act as a portfolio, source code storage, project storage, and more! At the moment it is lacking content, which will come at a later date. If there's a button for it, it's planned to be implemented. You can also track the website's progress on my "),r("a",{staticClass:"light-blue--text",attrs:{href:"https://trello.com/b/aukmlrQd/personal-website",target:"_blank"}},[t._v("Trello")]),t._v("! "),r("br"),r("br"),t._v(" This website is developed and managed by: "),r("br"),t._v(" Axurliz Aarstad Pedersen. ")])],1),r("v-divider",{staticClass:"my-3",attrs:{vertical:"",inset:""}}),r("v-col",{attrs:{cols:"12",sm:"6"}},[r("v-img",{staticClass:"mx-auto my-1",attrs:{src:"img\\icons\\templogo.png",width:"200"}})],1)],1)],1)],1)},B=[],P={name:"Home"},M=P,N=r(7024),G=r(7894),H=(0,l.Z)(M,z,B,!1,null,null,null),Q=H.exports;d()(H,{VCard:k.Z,VCardText:F.ZB,VCol:N.Z,VDivider:p.Z,VImg:b.Z,VRow:G.Z}),n.Z.use($.Z);var R=[{path:"/",name:"home",component:Q,meta:{title:"Home | AWD"}}],W=new $.Z({mode:"history",base:"/",routes:R});W.beforeEach((function(t,e,r){var n=t.matched.slice().reverse().find((function(t){return t.meta&&t.meta.title})),a=t.matched.slice().reverse().find((function(t){return t.meta&&t.meta.metaTags})),o=e.matched.slice().reverse().find((function(t){return t.meta&&t.meta.metaTags}));if(n?document.title=n.meta.title:o&&(document.title=o.meta.title),Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map((function(t){return t.parentNode.removeChild(t)})),!a)return r();a.meta.metaTags.map((function(t){var e=document.createElement("meta");return Object.keys(t).forEach((function(r){e.setAttribute(r,t[r])})),e.setAttribute("data-vue-router-controlled",""),e})).forEach((function(t){return document.head.appendChild(t)})),r()}));var Y=W,q=r(6482);n.Z.use(q.Z);var U=new q.Z({theme:{themes:{light:{background:"#FFFFFF",primary:"#F44336",secondary:"#FFCDD2",accent:"#0091EA",error:"#FF5252",info:"#40C4FF",success:"#81C784",warning:"#FFD600"},dark:{background:"#424242",primary:"#230046",secondary:"#320064",accent:"#512DA8",error:"#FF5252",info:"#40C4FF",success:"#81C784",warning:"#FFD600"}}}});n.Z.config.productionTip=!1,new n.Z({vuetify:U,router:Y,render:function(t){return t(I)}}).$mount("#app")}},e={};function r(n){var a=e[n];if(void 0!==a)return a.exports;var o=e[n]={exports:{}};return t[n](o,o.exports,r),o.exports}r.m=t,function(){var t=[];r.O=function(e,n,a,o){if(!n){var i=1/0;for(l=0;l<t.length;l++){n=t[l][0],a=t[l][1],o=t[l][2];for(var c=!0,s=0;s<n.length;s++)(!1&o||i>=o)&&Object.keys(r.O).every((function(t){return r.O[t](n[s])}))?n.splice(s--,1):(c=!1,o<i&&(i=o));if(c){t.splice(l--,1);var u=a();void 0!==u&&(e=u)}}return e}o=o||0;for(var l=t.length;l>0&&t[l-1][2]>o;l--)t[l]=t[l-1];t[l]=[n,a,o]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,n){var a,o,i=n[0],c=n[1],s=n[2],u=0;if(i.some((function(e){return 0!==t[e]}))){for(a in c)r.o(c,a)&&(r.m[a]=c[a]);if(s)var l=s(r)}for(e&&e(n);u<i.length;u++)o=i[u],r.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return r.O(l)},n=self["webpackChunkclient"]=self["webpackChunkclient"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(6475)}));n=r.O(n)})();
//# sourceMappingURL=app-legacy.2f8fe898.js.map