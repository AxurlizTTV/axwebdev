(function(){"use strict";var t={95:function(t,e,a){a(6992),a(8674),a(9601),a(7727);var n=a(144),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{style:{background:t.$vuetify.theme.themes[t.theme].background}},[a("Navbar"),a("v-main",[a("router-view")],1),a("Footer")],1)},i=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app-bar",{attrs:{color:"primary",dark:"",fixed:"",app:"",elevate:"4"}},[a("v-btn",{staticClass:"mr-2",attrs:{icon:""},on:{click:function(e){return t.$refs.menuDrawer.openDrawer()}}},[a("v-icon",[t._v("mdi-menu")])],1),a("v-divider",{attrs:{vertical:""}}),a("router-link",{attrs:{to:"/"}},[a("v-img",{staticClass:"mx-2",attrs:{src:"img\\icons\\logo.png","max-width":"50"}})],1),a("Sidebar",{ref:"menuDrawer"}),a("ProfileDialog",{ref:"profileDialog"}),a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:function(e){return t.$refs.profileDialog.openProfileDialog()}}},[a("v-icon",[t._v("mdi-account")])],1)],1)},s=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-navigation-drawer",{attrs:{bottom:"",temporary:"",absolute:"",color:"primary",app:"","mobile-breakpoint":"0"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",{staticClass:"text-h6"},[t._v(" WEBSITE NAVIGATION ")])],1)],1),a("v-divider"),a("v-list",{attrs:{dense:"",nav:""}},t._l(t.menuItems,(function(e){return a("v-list-item",{key:e.title,attrs:{to:e.location,link:""}},[a("v-list-item-icon",[a("v-icon",[t._v(t._s(e.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),1),a("v-divider"),a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",{staticClass:"text-h6"},[t._v(" MISC MENUS ")])],1)],1),a("v-divider"),a("v-list",{attrs:{dense:"",nav:""}},[a("v-list-item",{attrs:{link:""},on:{click:function(e){return t.$refs.menuDrawer.openDialog()}}},[a("v-list-item-icon",[a("v-icon",[t._v("mdi-cog")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("Settings")])],1)],1)],1),a("GlobalSettings",{ref:"menuDrawer"})],1)},c=[],d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{width:"500"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-card",{attrs:{color:"primary",dark:""}},[a("v-card-title",{staticClass:"mx-auto text-h5 justify-center",staticStyle:{"word-break":"break-word"}},[t._v(" SETTINGS")])],1),a("v-card",[a("v-switch",{staticClass:"mt-0 pt-5 pl-5",attrs:{color:"secondary",label:"Toggle Darkmode"},on:{click:function(e){return t.toggleDarkmode()}},model:{value:t.darkmodeSwitch,callback:function(e){t.darkmodeSwitch=e},expression:"darkmodeSwitch"}})],1)],1)},u=[],m=(a(1539),a(9714),{data:function(){return{drawer:!1,darkmodeSwitch:!1}},mounted:function(){this.checkIfDarkmodeActivated()},methods:{openDialog:function(){this.drawer=!0},toggleDarkmode:function(){this.$vuetify.theme.dark=!this.$vuetify.theme.dark,localStorage.setItem("useDarkMode",this.$vuetify.theme.dark.toString())},checkIfDarkmodeActivated:function(){var t=localStorage.getItem("useDarkMode");t&&("true"==t?(this.$vuetify.theme.dark=!0,this.darkmodeSwitch=!0):(this.$vuetify.theme.dark=!1,this.darkmodeSwitch=!1))}}}),v=m,h=a(1001),f=a(3453),b=a.n(f),p=a(2026),g=a(5255),w=a(5634),y=a(2535),k=(0,h.Z)(v,d,u,!1,null,null,null),x=k.exports;b()(k,{VCard:p.Z,VCardTitle:g.EB,VDialog:w.Z,VSwitch:y.Z});var _={name:"Sidebar",components:{GlobalSettings:x},data:function(){return{drawer:!1,menuItems:[{title:"Home",icon:"mdi-home",location:"/"},{title:"About",icon:"mdi-information",location:"/about"},{title:"Contact",icon:"mdi-email",location:"/contact"},{title:"Timeline",icon:"mdi-chart-gantt",location:"/timeline"}]}},methods:{openDrawer:function(){this.drawer=!0}}},C=_,Z=a(5596),V=a(4456),S=a(893),T=a(907),I=a(5501),A=a(3560),D=a(1373),E=(0,h.Z)(C,l,c,!1,null,null,null),j=E.exports;b()(E,{VDivider:Z.Z,VIcon:V.Z,VList:S.Z,VListItem:T.Z,VListItemContent:I.km,VListItemIcon:A.Z,VListItemTitle:I.V9,VNavigationDrawer:D.Z});var F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{width:"500"},model:{value:t.profileDialog,callback:function(e){t.profileDialog=e},expression:"profileDialog"}},[a("v-card",{staticClass:"rounded-b-0",attrs:{color:"primary",dark:""}},[a("v-card-title",{staticClass:"mx-auto text-h5 justify-center",staticStyle:{"word-break":"break-word"},attrs:{color:"white"}},[t._v("LOGIN & REGISTRATION")])],1),a("v-card",{staticClass:"rounded-t-0"},[a("v-tabs",{attrs:{"fixed-tabs":"",color:"secondary"}},[a("v-tab",[t._v("Login")]),a("v-tab",[t._v("Register")]),a("v-tab-item",{staticClass:"pa-5"},[a("v-text-field",{attrs:{filled:"",dense:"",rounded:"",label:"Email or username..."}}),a("v-text-field",{attrs:{filled:"","hide-details":"",dense:"",rounded:"",label:"Password...",type:"password"}}),a("v-checkbox",{attrs:{label:"I am not a robot..."}}),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"error"}},[t._v("Cancel")]),a("v-btn",{attrs:{color:"success"}},[t._v("Login")]),a("v-spacer")],1)],1),a("v-tab-item",{staticClass:"pa-5"},[a("v-text-field",{attrs:{filled:"",dense:"",rounded:"",label:"Username..."}}),a("v-text-field",{attrs:{filled:"",dense:"",rounded:"",label:"Email..."}}),a("v-text-field",{attrs:{filled:"",dense:"",rounded:"",label:"Password...",type:"password"}}),a("v-text-field",{attrs:{filled:"",dense:"",rounded:"","hide-details":"",label:"Confirm password...",type:"password"}}),a("v-checkbox",{attrs:{label:"I am not a robot..."}}),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"error"}},[t._v("Cancel")]),a("v-btn",{attrs:{color:"success"}},[t._v("Register")]),a("v-spacer")],1)],1)],1)],1)],1)},$=[],B={data:function(){return{profileDialog:!1}},methods:{openProfileDialog:function(){this.profileDialog=!0}}},P=B,N=a(9787),O=a(5275),L=a(6946),M=a(756),R=a(6975),W=a(9807),q=a(2660),H=(0,h.Z)(P,F,$,!1,null,null,null),z=H.exports;b()(H,{VBtn:N.Z,VCard:p.Z,VCardActions:g.h7,VCardTitle:g.EB,VCheckbox:O.Z,VDialog:w.Z,VSpacer:L.Z,VTab:M.Z,VTabItem:R.Z,VTabs:W.Z,VTextField:q.Z});var G={name:"Navbar",components:{Sidebar:j,ProfileDialog:z},data:function(){return{}}},U=G,J=a(7666),Y=a(5288),Q=(0,h.Z)(U,o,s,!1,null,null,null),K=Q.exports;b()(Q,{VAppBar:J.Z,VBtn:N.Z,VDivider:Z.Z,VIcon:V.Z,VImg:Y.Z,VSpacer:L.Z});var X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{attrs:{padless:"",dark:""}},[a("v-card",{staticClass:"flex",attrs:{flat:"",tile:""}},[a("v-card-title",{staticClass:"primary",staticStyle:{"word-break":"break-word"}},[a("strong",{staticClass:"subheading"},[t._v("Get connected with me on other platforms!")]),a("v-spacer"),t._l(t.footerIcons,(function(e){return a("v-btn",{key:e.icon,staticClass:"mx-2",attrs:{icon:"",href:e.link,target:"_blank"}},[a("v-icon",{attrs:{size:"24px"}},[t._v(" "+t._s(e.icon)+" ")])],1)}))],2),a("v-card-text",{staticClass:"py-2 white--text text-center"},[t._v(" "+t._s((new Date).getFullYear())+" — "),a("strong",[t._v("Axurliz")])])],1)],1)},tt=[],et={data:function(){return{footerIcons:[{icon:"mdi-twitter",link:"https://twitter.com/axurlizttv"},{icon:"mdi-github",link:"https://github.com/AxurlizTTV"},{icon:"mdi-youtube",link:"https://www.youtube.com/channel/UC9xuEFaP5QRpy-vv5nGs6ew"}]}}},at=et,nt=a(7718),rt=(0,h.Z)(at,X,tt,!1,null,null,null),it=rt.exports;b()(rt,{VBtn:N.Z,VCard:p.Z,VCardText:g.ZB,VCardTitle:g.EB,VFooter:nt.Z,VIcon:V.Z,VSpacer:L.Z});var ot={name:"App",computed:{theme:function(){return this.$vuetify.theme.dark?"dark":"light"}},components:{Navbar:K,Footer:it},data:function(){return{}}},st=ot,lt=a(303),ct=a(4021),dt=(0,h.Z)(st,r,i,!1,null,null,null),ut=dt.exports;b()(dt,{VApp:lt.Z,VMain:ct.Z});a(9826),a(7042),a(1249),a(1038),a(8783),a(4747),a(7941);var mt=a(4903),vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-img",{attrs:{src:"img\\homebanner.png",height:"200",align:"center",justify:"center"}},[a("h1",{staticClass:"mt-14 white--text"},[t._v("Axurliz Web Development")]),a("p",{staticClass:"white--text"},[t._v("projects, source, portfolio and more")])]),a("v-card",{staticClass:"mx-auto my-12",attrs:{width:"800",elevation:"4"}},[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-card-text",[t._v(" This website will act as a portfolio, source code storage, project storage, and more! At the moment it is lacking content, which will come at a later date. If there's a button for it, it's planned to be implemented. You can also track the website's progress on my "),a("a",{staticClass:"light-blue--text",staticStyle:{"text-decoration":"none"},attrs:{href:"https://trello.com/b/aukmlrQd/personal-website",target:"_blank"}},[t._v("Trello")]),t._v("! "),a("br"),a("br"),t._v(" This website is developed and managed by: "),a("br"),t._v(" Axurliz Aarstad Pedersen. ")])],1),a("v-divider",{staticClass:"my-3",attrs:{vertical:"",inset:""}}),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-img",{staticClass:"mx-auto my-1",attrs:{src:"img\\icons\\logo.png",width:"200"}})],1)],1)],1),a("v-card-title",{staticClass:"mx-auto text-h5 justify-center",staticStyle:{"word-break":"break-word"}},[t._v(" You Might Like These Pages ")]),a("v-divider",{staticClass:"navDividerWide mx-auto",attrs:{inset:""}}),a("v-row",{staticClass:"mx-auto py-4 mb-4"},[a("v-spacer"),a("v-col",{attrs:{cols:"12",sm:"3"}},[a("h3",{staticStyle:{"word-break":"break-word"}},[t._v("Timeline")]),a("p",[t._v("A timeline made to document everything that's going on with the website.")]),a("v-btn",{attrs:{color:"primary",href:"timeline"}},[t._v(" Timeline "),a("v-icon",{attrs:{right:""}},[t._v("mdi-chart-gantt")])],1)],1),a("v-divider",{attrs:{vertical:"",inset:""}}),a("v-col",{attrs:{cols:"12",sm:"3"}},[a("h3",{staticStyle:{"word-break":"break-word"}},[t._v("About Me")]),a("p",[t._v("Get to know me, what i do, and what im all about. As well as other interesting things.")]),a("v-btn",{attrs:{color:"primary",href:"about"}},[t._v(" About "),a("v-icon",{attrs:{right:""}},[t._v("mdi-account-question")])],1)],1),a("v-divider",{attrs:{vertical:"",inset:""}}),a("v-col",{attrs:{cols:"12",sm:"3"}},[a("h3",{staticStyle:{"word-break":"break-word"}},[t._v("Contact")]),a("p",[t._v("If you for any reason want to contact me, you can do it here through this form.")]),a("v-btn",{attrs:{color:"primary",href:"contact"}},[t._v(" Contact "),a("v-icon",{attrs:{right:""}},[t._v("mdi-email")])],1)],1),a("v-spacer")],1)],1)},ht=[],ft={name:"Home"},bt=ft,pt=a(7024),gt=a(7894),wt=(0,h.Z)(bt,vt,ht,!1,null,null,null),yt=wt.exports;b()(wt,{VBtn:N.Z,VCard:p.Z,VCardText:g.ZB,VCardTitle:g.EB,VCol:pt.Z,VDivider:Z.Z,VIcon:V.Z,VImg:Y.Z,VRow:gt.Z,VSpacer:L.Z});var kt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",[a("v-col",{attrs:{cols:"12",sm:"12",xs:"12"}},[a("v-card-title",{staticClass:"mx-auto text-h5 justify-center",staticStyle:{"word-break":"break-word"}},[t._v("Get To Know Me")])],1),a("v-col",{attrs:{cols:"12",sm:"12",xs:"12"}},[a("v-tabs",{attrs:{"fixed-tabs":"",color:"secondary"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("v-tab",[t._v("Who am i")]),a("v-tab",[t._v("Languages")]),a("v-tab",[t._v("Other")])],1),a("v-card",{staticClass:"mx-auto mb-4 py-4",attrs:{width:"1075"}},[a("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("v-tab-item",[a("v-row",[a("v-spacer"),a("v-col",{attrs:{cols:"12",sm:"5"}},[a("v-card-title",{staticClass:"text-h5",staticStyle:{"word-break":"break-word"}},[t._v(" Axurliz Aarstad Pedersen ")]),a("v-card-text",[t._v(" I am an aspiring web developer. Currently learning at "),a("a",{staticClass:"light-blue--text",staticStyle:{"text-decoration":"none"},attrs:{href:"https://www.prios.no/en-gb",target:"_blank"}},[t._v("Prios")]),t._v(", I hope to one day work with web development. Currently I do frontend web development, and working with vue.js and vuetify. "),a("br"),a("br"),t._v(" I am constantly learning new things, as well as wanting to learn multiple languages, to be flexible in what I can work with. I learn and pick up on things very quickly, so getting into something new is not a problem. "),a("br"),a("br"),t._v(" When I'm not programming, I like to spend my time with my fiancée and cat, as well as play video games. ")])],1),a("v-divider",{attrs:{vertical:""}}),a("v-col",{attrs:{cols:"12",sm:"5"}},[a("v-img",{staticClass:"mx-auto rounded-circle",attrs:{src:"img\\aboutimg.png",width:"300"}})],1),a("v-spacer")],1)],1),a("v-tab-item",[a("v-row",[a("v-spacer"),a("v-col",{attrs:{cols:"12",sm:"5"}},[a("v-card-title",{staticClass:"text-h5",staticStyle:{"word-break":"break-word"}},[t._v(" Languages I Know ")]),a("v-card-text",[t._v(" Frontend: "),a("br"),t._v(" HTML, CSS, Javascript, Vue.js, Vuetify, C# "),a("br"),a("br"),t._v(" Backend:"),a("br"),t._v(" Node.js, Express.js "),a("br"),a("br"),t._v(" Databases:"),a("br"),t._v(" {none yet} ")])],1),a("v-divider",{attrs:{vertical:""}}),a("v-col",{attrs:{cols:"12",sm:"5"}},[a("v-card-title",{staticClass:"text-h5",staticStyle:{"word-break":"break-word"}},[t._v(" Planning To Learn ")]),a("v-card-text",[t._v(" Frontend: "),a("br"),t._v(" React.js, Typescript, Tailwind, WebGL "),a("br"),a("br"),t._v(" Backend:"),a("br"),t._v(" Python, PHP, C# "),a("br"),a("br"),t._v(" Databases:"),a("br"),t._v(" MongoDB, MySQL ")])],1),a("v-spacer")],1)],1)],1)],1)],1)],1)},xt=[],_t={name:"About",data:function(){return{tab:null}}},Ct=_t,Zt=a(9938),Vt=(0,h.Z)(Ct,kt,xt,!1,null,null,null),St=Vt.exports;b()(Vt,{VCard:p.Z,VCardText:g.ZB,VCardTitle:g.EB,VCol:pt.Z,VDivider:Z.Z,VImg:Y.Z,VRow:gt.Z,VSpacer:L.Z,VTab:M.Z,VTabItem:R.Z,VTabs:W.Z,VTabsItems:Zt.Z});var Tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"mx-auto my-5 px-5 py-5",attrs:{"max-width":"1200",elevation:"4"}},[t.$vuetify.breakpoint.mdAndUp?a("v-btn",{staticClass:"mx-auto d-flex justify-center",attrs:{color:"primary"},on:{click:function(e){return t.$vuetify.goTo(t.pageHeight)}}},[t._v(" Scroll to Bottom ")]):a("v-btn",{staticClass:"d-flex justify-center",attrs:{color:"primary"},on:{click:function(e){return t.$vuetify.goTo(t.pageHeight)}}},[t._v(" Scroll to Bottom ")]),t.$vuetify.breakpoint.mdAndUp?a("v-timeline",t._l(t.timelineItems,(function(e){return a("v-timeline-item",{key:e.span,attrs:{color:"primary",large:"",icon:e.icon},scopedSlots:t._u([{key:"opposite",fn:function(){return[a("span",[t._v(t._s(e.span))])]},proxy:!0}],null,!0)},[a("v-card",{staticClass:"elevation-6",attrs:{color:"background"}},[a("v-card-title",{staticClass:"text-h5",staticStyle:{"word-break":"break-word"}},[t._v(" "+t._s(e.title)+" ")]),a("v-card-text",[t._v(" "+t._s(e.text)+" ")])],1)],1)})),1):a("v-timeline",{attrs:{dense:""}},t._l(t.timelineItems,(function(e){return a("v-timeline-item",{key:e.span,attrs:{color:"primary",icon:e.icon}},[[a("span",[t._v(t._s(e.span))])],a("v-card",{staticClass:"elevation-6",attrs:{color:"background"}},[a("v-card-title",{staticClass:"text-h5",staticStyle:{"word-break":"break-word"}},[t._v(" "+t._s(e.title)+" ")]),a("v-card-text",[t._v(" "+t._s(e.text)+" ")])],1)],2)})),1)],1)},It=[],At={computed:{pageHeight:function(){return document.body.scrollHeight}},name:"Timeline",data:function(){return{timelineItems:[{span:"06/04/2022",icon:"mdi-calendar-text",title:"It Begins",text:"Just finished learning and getting comfortable with HTML, CSS and JavaScript,\n                                                                                    I have now started the course for learning vue.js and vuetify.\n                                                                                    Pretty exciting to learn a JavaScript framework.\n                                                                                    And I love how simplistic vue.js seems to be!"},{span:"09/04/2022",icon:"mdi-navigation-variant-outline",title:"Navbar And Drawer",text:"Gotten comfortable with how some of the components for vue.js work.\n                                                                                                         It's so easy to understand what each thing does and how they work together.\n                                                                                                         And now the first iteration of the navigation bar is finished!\n                                                                                                         With its own menu drawer for easy site navigation."},{span:"11/04/2022",icon:"mdi-rocket-launch-outline",title:"Website Launch",text:"This day in 2022, the website got launched.\n                                                                                                 The website is made using the vue.js framework and vuetify.\n                                                                                                 The files are hosted on netlify.com.\n                                                                                                 Also bought a domain that will be used once it is ready."},{span:"12/04/2022",icon:"mdi-web",title:"Domain Change",text:'The website\'s domain has now been changed to "www.axurlizdev.com".\n                                                                              It also redirects here from "axurlizdev.com" and can still be accessed with "axurlizdev.netlify.app".\n                                                                              Scroll to Bottom button added at the top of the timeline for easier access to latest posts.\n                                                                              Darkmode switch has been added to settings. Started work on content for the home page,\n                                                                              like links to pages visitors might be interested in.'},{span:"13/04/2022",icon:"mdi-account-question",title:"About And Social",text:'Added content to the about page. This is done using a tab system (3 tabs for now).\n                                                                                              The "Who I Am" tab got some information about me.\n                                                                                              The "Languages" tab got information on what languages I know, and plan on learning.\n                                                                                              And the "Other" tab is empty for the time being, but will contain stuff like achievements, goals, etc.\n                                                                                              Also moved the social icons down to the footer (was in the app bar originaly).\n                                                                                              Oh and added a search bar (not functional) where the social icons used to be.'},{span:"19/04/2022",icon:"mdi-email",title:"Contact Form",text:'After a calm easter, I finally got around to work on the contact page.\n                                                                               It will send me an email when a user requests contact with me.\n                                                                               The email service I decided to use for this is "emailjs".'},{span:"20/04/2022",icon:"mdi-email-fast",title:"Contact Sending",text:"Now you get redirected to a different page when you submit the contact form!\n                                                                                       This is to have a visual confirmation that your request have been recieved.\n                                                                                       There is also a auto reply that you will get directly to your mail as well!\n                                                                                       Oh, and added a button in the nav bar for login/registry. Not functional yet.\n                                                                                       However, that is my next plan. So now its a lot of documentation reading!"},{span:"26/04/2022",icon:"mdi-account-cancel",title:"Login/Register Dialog",text:"In the top right of the page (right side of the navbard), you can now click!\n                                                                                                 This opens a dialog where in the future, you can log in or register an account.\n                                                                                                 The styling of it is subject to change, but for now i will leave it as it is.\n                                                                                                 It requires input in every field, as well as matching passwords when registering!\n                                                                                                 The buttons to log in and register are not functional as of yet.\n                                                                                                 Now it is time to learn mongoDB, and set up a secure database for account creation and storage."},{span:"01/06/2022",icon:"mdi-transfer",title:"Rework And Migration",text:"A massive rework of the website, and migration to fullstack is under way.\n                                                                                          We have moved from Netlify to Heroku, and are now running a full MEVN stack!\n                                                                                          A lot of work still has to be done, but we are slowly getting there.\n                                                                                          Some features that was on the previous side (as mentioned above) might not work anymore.\n                                                                                          But that will eventualy be fixed!"},{span:"13/06/2022",icon:"mdi-cog",title:"Settings",text:'The settings dialog in the side menu is now back!\n                                                                         At the moment the only setting added is "Darkmode".\n                                                                         This makes the website night time friendly.\n                                                                         More settings will come later. Suggestions\n                                                                         for what settings to add can be requested on the github page'}]}}},Dt=At,Et=a(2763),jt=a(2496),Ft=(0,h.Z)(Dt,Tt,It,!1,null,null,null),$t=Ft.exports;b()(Ft,{VBtn:N.Z,VCard:p.Z,VCardText:g.ZB,VCardTitle:g.EB,VTimeline:Et.Z,VTimelineItem:jt.Z});var Bt,Pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"mx-auto my-12 px-5 py-5",attrs:{"max-width":"800",elevation:"4"}},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(e){return e.preventDefault(),t.sendEmail.apply(null,arguments)}}},[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-text-field",{attrs:{rules:t.nameRules,label:"Name",name:"user_name",required:"",color:"info"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-text-field",{attrs:{rules:t.emailRules,label:"E-mail",required:"",color:"info",name:"user_email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)],1),a("v-select",{attrs:{items:t.items,rules:[function(t){return!!t||"Please select an option"}],required:"",label:"What can i help you with?",color:"info","item-color":"info",name:"user_issue"},model:{value:t.select,callback:function(e){t.select=e},expression:"select"}}),a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-textarea",{attrs:{color:"info",required:"",rules:t.msgRules,name:"user_msg"},scopedSlots:t._u([{key:"label",fn:function(){return[a("div",[t._v(" Message ")])]},proxy:!0}])})],1)],1),a("v-checkbox",{attrs:{rules:[function(t){return!!t||"Wait, are you a robot?"}],label:"I am not a robot!",required:"",color:"info"},model:{value:t.checkbox,callback:function(e){t.checkbox=e},expression:"checkbox"}}),a("button",{staticClass:"mr-4 v-btn v-btn--is-elevated v-btn--has-bg theme--light v-size--default success",attrs:{type:"submit",value:"Send"}},[a("span",{staticClass:"v-btn__content"},[t._v("Send")])]),a("v-btn",{staticClass:"mr-4",attrs:{color:"error"},on:{click:t.reset}},[t._v("Reset")])],1)])],1)],1)},Nt=[],Ot=a(3796),Lt=(a(4916),a(7601),a(5247)),Mt=(Bt={name:"Contact",data:function(){return{}}},(0,Ot.Z)(Bt,"data",(function(){return{valid:!0,name:"",nameRules:[function(t){return!!t||"Name is required"},function(t){return t&&t.length<=30||"Name must be less than 30 characters"},function(t){return t&&t.length>=3||"Name must be 3 characters or longer"}],email:"",emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+\..+/.test(t)||"E-mail must be valid"}],select:null,items:["Technical issue","Website issue","Account issue","Product issue"],msgRules:[function(t){return!!t||"A message is required"}],checkbox:!1}})),(0,Ot.Z)(Bt,"methods",{validate:function(){this.$refs.form.validate()},reset:function(){this.$refs.form.reset()},sendEmail:function(){var t=this;Lt.ZP.sendForm("service_k1ayhul","template_0c21iwu",this.$refs.form,"yH-nrHp_U_mMj5p-w").then((function(e){console.log("SUCCESS!",e.text),t.$router.push("/contactsent")}),(function(t){console.log("FAILED...",t.text)}))}}),Bt),Rt=Mt,Wt=a(334),qt=a(7033),Ht=(0,h.Z)(Rt,Pt,Nt,!1,null,null,null),zt=Ht.exports;b()(Ht,{VBtn:N.Z,VCard:p.Z,VCheckbox:O.Z,VCol:pt.Z,VRow:gt.Z,VSelect:Wt.Z,VTextField:q.Z,VTextarea:qt.Z});var Gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"mx-auto my-12 px-5",attrs:{"max-width":"800",elevation:"4"}},[a("v-card-title",{staticClass:"text-h5 justify-center",staticStyle:{"word-break":"break-word"}},[t._v(" Your contact form have been sent in! ")]),a("v-card-text",{staticClass:"text-center"},[t._v(" Please be patient while we get back to you! ")])],1)},Ut=[],Jt={name:"ContactSent"},Yt=Jt,Qt=(0,h.Z)(Yt,Gt,Ut,!1,null,null,null),Kt=Qt.exports;b()(Qt,{VCard:p.Z,VCardText:g.ZB,VCardTitle:g.EB}),n.Z.use(mt.Z);var Xt=[{path:"/",name:"home",component:yt,meta:{title:"Home | AWD"}},{path:"/about",name:"about",component:St,meta:{title:"About | AWD"}},{path:"/timeline",name:"timeline",component:$t,meta:{title:"Timeline | AWD"}},{path:"/contact",name:"contact",component:zt,meta:{title:"Contact | AWD"}},{path:"/contactsent",component:Kt,meta:{title:"Contact Sent | AWD"}}],te=new mt.Z({mode:"history",base:"/",routes:Xt});te.beforeEach((function(t,e,a){var n=t.matched.slice().reverse().find((function(t){return t.meta&&t.meta.title})),r=t.matched.slice().reverse().find((function(t){return t.meta&&t.meta.metaTags})),i=e.matched.slice().reverse().find((function(t){return t.meta&&t.meta.metaTags}));if(n?document.title=n.meta.title:i&&(document.title=i.meta.title),Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map((function(t){return t.parentNode.removeChild(t)})),!r)return a();r.meta.metaTags.map((function(t){var e=document.createElement("meta");return Object.keys(t).forEach((function(a){e.setAttribute(a,t[a])})),e.setAttribute("data-vue-router-controlled",""),e})).forEach((function(t){return document.head.appendChild(t)})),a()}));var ee=te,ae=a(5121);n.Z.use(ae.Z);var ne=new ae.Z({theme:{themes:{light:{background:"#FFFFFF",primary:"#008080",secondary:"#00d9d9",accent:"#0091EA",error:"#FF5252",info:"#40C4FF",success:"#81C784",warning:"#FFD600"},dark:{background:"#282828",primary:"#004343",secondary:"#008080",accent:"#512DA8",error:"#FF5252",info:"#40C4FF",success:"#81C784",warning:"#FFD600"}}}});n.Z.config.productionTip=!1,new n.Z({vuetify:ne,router:ee,render:function(t){return t(ut)}}).$mount("#app")}},e={};function a(n){var r=e[n];if(void 0!==r)return r.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,a),i.exports}a.m=t,function(){var t=[];a.O=function(e,n,r,i){if(!n){var o=1/0;for(d=0;d<t.length;d++){n=t[d][0],r=t[d][1],i=t[d][2];for(var s=!0,l=0;l<n.length;l++)(!1&i||o>=i)&&Object.keys(a.O).every((function(t){return a.O[t](n[l])}))?n.splice(l--,1):(s=!1,i<o&&(o=i));if(s){t.splice(d--,1);var c=r();void 0!==c&&(e=c)}}return e}i=i||0;for(var d=t.length;d>0&&t[d-1][2]>i;d--)t[d]=t[d-1];t[d]=[n,r,i]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,n){var r,i,o=n[0],s=n[1],l=n[2],c=0;if(o.some((function(e){return 0!==t[e]}))){for(r in s)a.o(s,r)&&(a.m[r]=s[r]);if(l)var d=l(a)}for(e&&e(n);c<o.length;c++)i=o[c],a.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return a.O(d)},n=self["webpackChunkclient"]=self["webpackChunkclient"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(95)}));n=a.O(n)})();
//# sourceMappingURL=app-legacy.2650bc25.js.map