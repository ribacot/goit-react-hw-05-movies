"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[681],{681:function(e,s,t){t.r(s),t.d(s,{default:function(){return p}});var n=t(439),i=t(791),c=t(689),r=t(87),l=t(700),a=t(861),o=t(757),d=t.n(o),h=t(831),u=function(){var e=(0,a.Z)(d().mark((function e(s){var t;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.W.request({url:"/movie/".concat(s)});case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(s){return e.apply(this,arguments)}}(),v=t(894),_={section_selected:"SelectedMovie_section_selected__Pbaeh",description:"SelectedMovie_description__UmasP",overview:"SelectedMovie_overview__Xq5yC",thumb_img:"SelectedMovie_thumb_img__YTjb5",status:"SelectedMovie_status__xv8Ga",nav:"SelectedMovie_nav__6nETb",look_it:"SelectedMovie_look_it__V-fwu",title:"SelectedMovie_title__CYFdw"},x=t(184);function p(){var e=(0,c.UO)().id,s=(0,i.useState)({genres:[],poster_path:""}),t=(0,n.Z)(s,2),a=t[0],o=t[1];console.log("ID",e);(0,i.useEffect)((function(){e&&u(e).then((function(e){return o(e)})).catch((function(e){return console.log(e)}))}),[e]);var d=a.title,h=a.poster_path,p=a.overview,j=a.genres,m=a.status,f=a.homepage;return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)("div",{className:"bacdrop",children:(0,x.jsx)("section",{className:_.section_selected,children:(0,x.jsxs)(l.Z,{styles:_.container_selected,children:[(0,x.jsx)("h1",{children:d}),(0,x.jsxs)("div",{className:_.description,children:[(0,x.jsxs)("div",{className:_.thumb_img,children:[(0,x.jsx)("div",{children:(0,x.jsx)("img",{src:h?"https://image.tmdb.org/t/p/w300/".concat(h):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:d,width:300})}),(0,x.jsxs)("div",{className:_.status,children:[(0,x.jsxs)("h3",{children:["Status: ",(0,x.jsx)("span",{children:m})]}),f&&(0,x.jsx)("a",{href:f,target:"blank",children:(0,x.jsx)(v.Z,{styles:_.look_it,children:"Look it"})})]}),(0,x.jsxs)("div",{className:_.nav,children:[(0,x.jsx)(r.OL,{to:"cast",className:"navLink",children:(0,x.jsx)(v.Z,{children:"Cast"})}),(0,x.jsx)(r.OL,{to:"reviews",className:"navLink",children:(0,x.jsx)(v.Z,{children:"Reviews"})})]})]}),(0,x.jsxs)("div",{children:[j.length?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("h3",{children:"Genres: "}),(0,x.jsx)("ul",{children:j.map((function(e){var s=e.name,t=e.id;return(0,x.jsx)("li",{children:s},t)}))})]}):null,(0,x.jsx)("h3",{children:"Overview"}),(0,x.jsx)("p",{className:_.overview,children:p}),(0,x.jsx)("div",{children:(0,x.jsx)(i.Suspense,{fallback:(0,x.jsx)("h2",{children:"Loading..."}),children:(0,x.jsx)(c.j3,{})})})]})]})]})})})})}}}]);
//# sourceMappingURL=681.447abce8.chunk.js.map