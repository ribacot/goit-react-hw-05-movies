"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[907],{724:function(e,r,n){n.r(r),n.d(r,{default:function(){return b}});var t=n(439),a=n(87),s=n(689),c=n(791),u=n(861),o=n(757),i=n.n(o),l=n(831);function h(){return(h=(0,u.Z)(i().mark((function e(r){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.W.request({url:"/search/movie?query=".concat(r),params:{include_adult:!1,language:"en-US",page:1}});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var v=n(894),m="FormSearch_form__C2tvL",d="FormSearch_input__Nqpbg",p=n(184);function f(e){var r=e.value,n=void 0===r?"":r,t=e.onChenge,a=e.onSubmit;return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("form",{action:"submit",onSubmit:a,className:m,children:[(0,p.jsx)("label",{htmlFor:"searchFilm"}),(0,p.jsx)("input",{type:"text",id:"searchFilm",value:n,onChange:t,className:d}),(0,p.jsx)(v.Z,{children:"Search"})]})})}var _="Movies_section_search__PDT1z",x="Movies_title__YI2O7",g=n(700),j=n(901);function b(){var e,r,n,u=(0,c.useState)({}),o=(0,t.Z)(u,2),i=o[0],l=o[1],m=(0,a.lr)(),d=(0,t.Z)(m,2),b=d[0],k=d[1],S=(0,s.TH)(),w=(0,c.useRef)(null!==(e=null===(r=S.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/"),N=null!==(n=b.get("searchQwery"))&&void 0!==n?n:"";return(0,p.jsx)("div",{className:"bacdrop",children:(0,p.jsx)("section",{className:_,children:(0,p.jsxs)(g.Z,{children:[(0,p.jsx)(a.rU,{to:w.current,className:"navLink",children:(0,p.jsx)(v.Z,{children:"Go back"})}),(0,p.jsx)("h1",{className:x,children:"Search Movies"}),(0,p.jsx)(f,{value:N,onChenge:function(e){if(""===e.target.value)return k({});k({searchQwery:e.target.value})},onSubmit:function(e){e.preventDefault(),function(e){return h.apply(this,arguments)}(N).then((function(e){return l(e)})).catch((function(e){return console.log(e)}))}}),(0,p.jsx)(j.Z,{movies:i.results})]})})})}}}]);
//# sourceMappingURL=907.26216136.chunk.js.map