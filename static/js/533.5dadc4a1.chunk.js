"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[533],{2602:function(e,t,n){n.d(t,{Z:function(){return _}});var a=n(9439),s=n(2791),r=n(1087),i=n(5264),o=n(9126),c=n(8820),l="NoticesSearch_box__+KIPG",u="NoticesSearch_input__5vre9",d="NoticesSearch_btn__dh+mA",p=n(184);function _(){var e=(0,s.useState)(!1),t=(0,a.Z)(e,2),n=(t[0],t[1]),_=(0,s.useState)(""),h=(0,a.Z)(_,2),x=h[0],f=h[1],m=(0,r.lr)({}),g=(0,a.Z)(m,2),w=(g[0],g[1]),N=function(e){e.preventDefault();var t=x.trim();t?w({search:t}):i.Notify.warning("Please enter your search parameters")};return(0,p.jsxs)("form",{className:l,onSubmit:N,children:[(0,p.jsx)("input",{className:u,name:"findpets",type:"text",value:x,placeholder:"Search",onChange:function(e){var t=e.target.value;f(t.toLowerCase())}}),(0,p.jsxs)("button",{className:d,type:"submit",onClick:function(e){x?N(e):i.Notify.warning("Please enter your search parameters")},children:[x&&(0,p.jsx)(c.oHP,{style:{position:"absolute",top:12,right:16,border:"none",outline:"none",fill:"#FFC107",cursor:"pointer",width:19,height:19},onClick:function(){f(""),n(!1)}}),(0,p.jsx)(o.dVI,{style:{position:"absolute",top:14,right:x?45:16,border:"none",outline:"none",fill:"#54ADFF",cursor:"pointer",width:17,height:17}})]})]})}},7605:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(9439),s=n(2791),r=n(7107),i=n(9164),o=n(6378),c=n(4507),l=n(1680),u=n(184),d=(0,r.Z)({breakpoints:{values:{xs:0,sm:320,md:768,lg:1280,xl:1920}}});function p(e){var t=e.getPage,n=e.count,r=(0,s.useState)(1),p=(0,a.Z)(r,2),_=p[0],h=p[1];return(0,s.useEffect)((function(){t(_)}),[t,_]),(0,u.jsx)(i.Z,{children:(0,u.jsx)(o.Z,{spacing:2,children:(0,u.jsx)(c.Z,{theme:d,children:(0,u.jsx)(l.Z,{sx:{marginBottom:"192px",display:"flex",justifyContent:"space-between",alignItems:"center","@media (max-width: 767px)":{marginBottom:"50px","& .MuiPagination-ul":{"& > *:not(:first-of-type):not(:last-child)":{display:"none"}}},color:"#ff0000",marginX:"auto",borderRadius:"45px",boxShadow:"3px 8px 14px rgba(136, 198, 253, 0.19)",padding:"9px 12px 9px 12px"},count:n,color:"primary",page:_,onChange:function(e,t){return h(t)},size:"large"})})})})}},9533:function(e,t,n){n.r(t),n.d(t,{default:function(){return E}});var a=n(3433),s=n(5861),r=n(9439),i=n(4687),o=n.n(i),c=n(2791),l=n(7689),u=n(2602),d="NewsPage_newsSection__uupPn",p="NewsPage_newsMainTitle__DxBMD",_="NewsPage_newsList__tnazN",h="NewsPage_newsItem__e6syL",x="NewsPage_newsImage__IsjSk",f="NewsPage_newsTextBox__fl1wR",m="NewsPage_newsTitle__FKLd3",g="NewsPage_newsText__4nCSa",w="NewsPage_dateLinkBox__jzfQg",N="NewsPage_newsDate__eUoM3",v="NewsPage_newsLink__TaENL",j="NewsPage_noteFound__yNu9o",P="NewsPage_noteFoundText__XJKFv",S="NewsPage_noteFoundImg__cpR9t",Z=n(1243),b={NODE_ENV:"production",PUBLIC_URL:"/react-node-team-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_BASE_URL,y=Z.Z.create({baseURL:b||"https://your-pet-backend.onrender.com/"}),k=function(){var e=(0,s.Z)(o().mark((function e(){var t,n,a,s,r,i=arguments;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:1,n=i.length>1&&void 0!==i[1]?i[1]:10,a=i.length>2&&void 0!==i[2]?i[2]:"",e.prev=3,e.next=6,y.get("/news?page=".concat(t,"&limit=").concat(n,"&title=").concat(a));case 6:return s=e.sent,r=s.data,e.abrupt("return",r);case 11:throw e.prev=11,e.t0=e.catch(3),e.t0;case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(){return e.apply(this,arguments)}}(),C=n(7845),T=n(7605),F=n(184);function E(){var e=(0,c.useState)([]),t=(0,r.Z)(e,2),n=t[0],i=t[1],Z=(0,c.useState)(1),b=(0,r.Z)(Z,2),y=b[0],E=b[1],L=(0,c.useState)(!1),R=(0,r.Z)(L,2),D=R[0],I=R[1],A=(0,c.useState)(!1),B=(0,r.Z)(A,2),O=B[0],K=B[1],U=(0,l.TH)().search.slice(8),H=(0,c.useState)(1),M=(0,r.Z)(H,2),z=M[0],W=M[1];(0,c.useEffect)((function(){var e=function(){var e=(0,s.Z)(o().mark((function e(){var t,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k(z,6,U);case 3:t=e.sent,K(!0),I(!1),n=Math.ceil(t.total/6),E(n),i((0,a.Z)(t.data)),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),404===e.t0.response.status&&(K(!1),I(!0));case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();e()}),[U,z]);var V=(0,F.jsx)(F.Fragment,{children:(0,F.jsx)("ul",{className:_,children:n.map((function(e){var t=e.date.slice(0,4),n=e.date.slice(5,7),a=[e.date.slice(8,10),n,t].join("/"),s=e.title.slice(0,50)+"...",r=e.text.slice(0,160)+"...";return(0,F.jsxs)("li",{className:h,children:[(0,F.jsx)("img",{className:x,src:e.imgUrl,alt:e.title}),(0,F.jsxs)("div",{className:f,children:[(0,F.jsxs)("div",{children:[(0,F.jsx)("h2",{className:m,children:e.title.length<=50?e.title:s}),(0,F.jsx)("p",{className:g,children:e.text.length<=160?e.text:r})]}),(0,F.jsxs)("div",{className:w,children:[(0,F.jsx)("p",{className:N,children:a}),(0,F.jsx)("a",{className:v,href:e.url,target:"blanck",children:"Read more"})]})]})]},e._id)}))})}),X=(0,F.jsxs)("div",{className:j,children:[(0,F.jsx)("p",{className:P,children:"`Ooops! Nothing was found for your request :(`"}),(0,F.jsx)("img",{className:S,src:C,alt:"Not Found"})]});return(0,F.jsx)("section",{className:d,children:(0,F.jsxs)("div",{className:"container",children:[(0,F.jsx)("h1",{className:p,children:"News"}),(0,F.jsx)(u.Z,{}),D?X:V,O&&(0,F.jsx)(T.Z,{getPage:function(e){W(e)},count:y})]})})}},7845:function(e,t,n){e.exports=n.p+"static/media/notFound.622e726ddf0f3450f1dd.png"}}]);
//# sourceMappingURL=533.5dadc4a1.chunk.js.map