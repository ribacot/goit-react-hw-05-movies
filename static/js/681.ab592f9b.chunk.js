"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[681],{681:function(e,s,t){t.r(s),t.d(s,{default:function(){return m}});var n=t(439),i=t(791),r=t(689),c=t(87),l=t(700),a=t(861),d=t(757),o=t.n(d),h=t(831),v=function(){var e=(0,a.Z)(o().mark((function e(s){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.W.request({url:"/movie/".concat(s)});case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(s){return e.apply(this,arguments)}}(),u=t(894),_={section_selected:"SelectedMovie_section_selected__Pbaeh",description:"SelectedMovie_description__UmasP",overview:"SelectedMovie_overview__Xq5yC",thumb_img:"SelectedMovie_thumb_img__YTjb5",status:"SelectedMovie_status__xv8Ga",nav:"SelectedMovie_nav__6nETb",look_it:"SelectedMovie_look_it__V-fwu",title:"SelectedMovie_title__CYFdw"},x=t(184);function m(){var e,s,t=(0,r.UO)().id,a=(0,i.useState)({genres:[],poster_path:""}),d=(0,n.Z)(a,2),o=d[0],h=d[1],m=(0,r.TH)(),j=(0,i.useRef)(null!==(e=null===(s=m.state)||void 0===s?void 0:s.from)&&void 0!==e?e:"/");(0,i.useEffect)((function(){t&&v(t).then((function(e){return h(e)}))}),[t]);var p=o.title,f=o.poster_path,w=o.overview,g=o.genres,k=o.status,b=o.homepage;return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)("div",{className:"bacdrop",children:(0,x.jsx)("section",{className:_.section_selected,children:(0,x.jsxs)(l.Z,{styles:_.container_selected,children:[(0,x.jsx)(c.rU,{to:j.current,className:"navLink",children:(0,x.jsx)(u.Z,{children:"Go back"})}),(0,x.jsx)("h1",{children:p}),(0,x.jsxs)("div",{className:_.description,children:[(0,x.jsxs)("div",{className:_.thumb_img,children:[(0,x.jsx)("div",{children:(0,x.jsx)("img",{src:f?"https://image.tmdb.org/t/p/w300/".concat(f):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:p,width:300})}),(0,x.jsxs)("div",{className:_.status,children:[(0,x.jsxs)("h3",{children:["Status: ",(0,x.jsx)("span",{children:k})]}),b&&(0,x.jsx)("a",{href:b,target:"blank",children:(0,x.jsx)(u.Z,{styles:_.look_it,children:"Look it"})})]}),(0,x.jsxs)("div",{className:_.nav,children:[(0,x.jsx)(c.OL,{to:"cast",className:"navLink",children:(0,x.jsx)(u.Z,{children:"Cast"})}),(0,x.jsx)(c.OL,{to:"reviews",className:"navLink",children:(0,x.jsx)(u.Z,{children:"Reviews"})})]})]}),(0,x.jsxs)("div",{children:[g.length?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("h3",{children:"Genres: "}),(0,x.jsx)("ul",{children:g.map((function(e){var s=e.name,t=e.id;return(0,x.jsx)("li",{children:s},t)}))})]}):null,(0,x.jsx)("h3",{children:"Overview"}),(0,x.jsx)("p",{className:_.overview,children:w}),(0,x.jsx)("div",{children:(0,x.jsx)(i.Suspense,{children:(0,x.jsx)(r.j3,{})})})]})]})]})})})})}}}]);
//# sourceMappingURL=681.ab592f9b.chunk.js.map