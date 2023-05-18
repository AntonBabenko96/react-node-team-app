"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[472],{2238:function(e,t,n){n.d(t,{r:function(){return o}});var r,a=n(2791),s=["title","titleId"];function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function c(e,t){var n=e.title,c=e.titleId,o=l(e,s);return a.createElement("svg",i({xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",ref:t,"aria-labelledby":c},o),void 0===n?a.createElement("title",{id:c},"trash"):n?a.createElement("title",{id:c},n):null,r||(r=a.createElement("path",{strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:4,strokeWidth:2,d:"M24 8v16c0 1.473-1.194 2.667-2.667 2.667h-10.667c-1.473 0-2.667-1.194-2.667-2.667v-16M20 8v-1.333c0-1.473-1.194-2.667-2.667-2.667h-2.667c-1.473 0-2.667 1.194-2.667 2.667v1.333M5.333 8h21.333M13.333 13.333v8M18.667 13.333v8"})))}var o=a.forwardRef(c);n.p},5987:function(e,t,n){n.d(t,{Z:function(){return m}});n(2791);var r=n(9434),a=n(7689),s=n(2419),i=n(1686),l=n.n(i),c=n(4217),o="AddPetButton_button__N7iFS",u="AddPetButton_icon__IK0u-",d=n(184),m=function(){var e=(0,r.v9)(c.Q8),t=(0,a.s0)();return(0,d.jsxs)("button",{className:o,onClick:function(){e?t("/add-pet"):l().Notify.failure("Please login or register to add a pet.",{timeout:5e3})},children:["Add Pet",(0,d.jsx)(s.Z,{className:u})]})}},3713:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(2791),a=n(4164),s=n(9823),i="Modal_overlay__b+zEz",l="Modal_modal__yEgVW",c="Modal_button__FFRRp",o=n(184),u=document.getElementById("modal-root"),d=function(e){var t=e.className,n=void 0===t?"":t,d=e.children,m=e.onClose;(0,r.useEffect)((function(){return document.body.addEventListener("keydown",_),function(){return document.body.removeEventListener("keydown",_)}}),[]);var _=function(e){var t=e.target,n=e.currentTarget,r=e.code;t!==n&&"Escape"!==r||m()};return(0,a.createPortal)((0,o.jsx)("div",{onClick:_,className:i,children:(0,o.jsxs)("div",{className:"".concat(l," ").concat(n),children:[(0,o.jsx)("button",{className:c,type:"button",onClick:m,children:(0,o.jsx)(s.Z,{color:"primary"})}),d]})}),u)}},7472:function(e,t,n){n.r(t),n.d(t,{default:function(){return pe}});var r="UserPage_content__AJAeA",a="UserPage_pets__o1s6p",s="UserPage_title__+I+vh",i="UserPage_title__pets__NNBGK",l="UserPage_descktop__user__0XzQO",c="UserPage_descktop__pets__oR+IZ",o="UserPage_title__button__7UYMl",u=n(9439),d=n(2238),m={headerNavActive:"UserPetsItem_headerNavActive__PO8z4",burger:"UserPetsItem_burger__ir3-D",burgerLines:"UserPetsItem_burgerLines__fiMsu",pets__card:"UserPetsItem_pets__card__80vpJ",pets__image:"UserPetsItem_pets__image__EX7hP",text:"UserPetsItem_text__DCkzB",trash__icon:"UserPetsItem_trash__icon__bKgpa",trash__name:"UserPetsItem_trash__name__cBVZE",modalContent:"UserPetsItem_modalContent__OoGPW",modalTitle:"UserPetsItem_modalTitle__06XFK",modalText:"UserPetsItem_modalText__aJedr",buttonList:"UserPetsItem_buttonList__5Ukao",btn:"UserPetsItem_btn__FKXIn",item:"UserPetsItem_item__FQj4H",trash:"UserPetsItem_trash__JnM1j"},_=n(2722),h=n(3713),f=n(2791),p="ModalButtons_btn__KWonZ",v="ModalButtons_cancel__Z4UVt",x="ModalButtons_aprove__N866d",j=n(184),g=function(e){var t=e.title,n=e.children,r="Cancel"===t?"".concat(p," ").concat(v):"".concat(p," ").concat(x);return(0,j.jsxs)("button",{type:"submit",className:r,children:[t,n]})},b=n(9434),y=n(6100);function N(e){var t=e.id,n=e.photoURL,r=e.name,a=e.date,s=e.breed,i=e.comments,l=(0,f.useState)(!1),c=(0,u.Z)(l,2),o=c[0],p=c[1],v=(0,b.I0)();return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)("li",{className:m.pets__card,children:[n&&(0,j.jsx)("img",{className:m.pets__image,src:"https://your-pet-backend.onrender.com/".concat(n),alt:r,width:"240"}),!n&&(0,j.jsx)("img",{className:m.pets__image,src:_,alt:"pets",width:"240"}),(0,j.jsxs)("div",{className:m.pets__content,children:[(0,j.jsxs)("div",{className:m.trash__name,children:[(0,j.jsxs)("p",{className:m.text,children:[(0,j.jsx)("span",{children:"Name:"})," ",r]}),(0,j.jsx)(d.r,{className:m.trash__icon,onClick:function(){return p(!0)}})]}),(0,j.jsxs)("p",{className:m.text,children:[(0,j.jsx)("span",{children:"Date of birth:"})," ",a]}),(0,j.jsxs)("p",{className:m.text,children:[(0,j.jsx)("span",{children:"Breed:"})," ",s]}),(0,j.jsxs)("p",{className:m.text,children:[(0,j.jsx)("span",{children:"Comments:"})," ",i]})]})]},t),o&&(0,j.jsx)(h.Z,{onClose:function(){return p(!1)},children:(0,j.jsxs)("div",{className:m.modalContent,children:[(0,j.jsx)("p",{className:m.modalTitle,children:"Delete pet?"})," ",(0,j.jsxs)("p",{className:m.modalText,children:['Are you sure you want to delete "',r,'" from your pets? ',(0,j.jsx)("br",{}),"You can`t undo this action."]}),(0,j.jsxs)("ul",{className:m.buttonList,children:[(0,j.jsx)("li",{className:m.item,onClick:function(){return p(!1)},children:(0,j.jsx)(g,{title:"Cancel",className:"".concat(m.btn," cancel")})},"cancel"),(0,j.jsx)("li",{className:m.item,onClick:function(e){return function(e,t){v((0,y.Dj)(t)),p(!1)}(0,t)},children:(0,j.jsx)(g,{title:"Yes",className:"".concat(m.btn," aprove"),children:(0,j.jsx)(d.r,{className:m.trash})})},"aprove")]})]})})]})}var O=n(8590),w=n(4217),k="UserPetsList_list__Wqqqd";function C(){var e=(0,b.v9)(O.r),t=(0,b.v9)(w.Q8),n=(0,b.I0)();(0,f.useEffect)((function(){t&&n((0,y.p2)())}),[n,t]);var r=e.map((function(e){var t=e._id,n=e.photoURL,r=e.name,a=e.date,s=e.breed,i=e.comments;return(0,j.jsx)(N,{photoURL:n,name:r,date:a,breed:s,comments:i,id:t},t)}));return(0,j.jsx)("ul",{className:k,children:r})}var I,P,U=n(4942),E=n(1413),M=n(5861),L=n(4687),B=n.n(L),F=["title","titleId"];function S(){return S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},S.apply(this,arguments)}function z(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function R(e,t){var n=e.title,r=e.titleId,a=z(e,F);return f.createElement("svg",S({xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",ref:t,"aria-labelledby":r},a),void 0===n?f.createElement("title",{id:r},"camera"):n?f.createElement("title",{id:r},n):null,I||(I=f.createElement("path",{fill:"none",strokeLinejoin:"round",strokeLinecap:"butt",strokeMiterlimit:4,strokeWidth:2,d:"M16 21.333c2.209 0 4-1.791 4-4s-1.791-4-4-4c-2.209 0-4 1.791-4 4s1.791 4 4 4z"})),P||(P=f.createElement("path",{strokeLinejoin:"round",strokeLinecap:"butt",strokeMiterlimit:4,strokeWidth:2,d:"M4 12c0-1.473 1.194-2.667 2.667-2.667h3.333c0.736 0 1.333-0.597 1.333-1.333s0.597-1.333 1.333-1.333h6.667c0.736 0 1.333 0.597 1.333 1.333s0.597 1.333 1.333 1.333h3.333c1.473 0 2.667 1.194 2.667 2.667v10.667c0 1.473-1.194 2.667-2.667 2.667h-18.667c-1.473 0-2.667-1.194-2.667-2.667v-10.667z"})))}var Z,A=f.forwardRef(R),D=(n.p,["title","titleId"]);function W(){return W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},W.apply(this,arguments)}function G(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function K(e,t){var n=e.title,r=e.titleId,a=G(e,D);return f.createElement("svg",W({xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",ref:t,"aria-labelledby":r},a),void 0===n?f.createElement("title",{id:r},"edit"):n?f.createElement("title",{id:r},n):null,Z||(Z=f.createElement("path",{d:"M6.667 20.941l-0.707-0.707c-0.188 0.187-0.293 0.442-0.293 0.707h1zM20.941 6.667l0.707-0.707c-0.391-0.391-1.024-0.391-1.414 0l0.707 0.707zM25.333 11.059l0.707 0.707c0.391-0.391 0.391-1.024 0-1.414l-0.707 0.707zM11.059 25.333v1c0.265 0 0.52-0.105 0.707-0.293l-0.707-0.707zM6.667 25.333h-1c0 0.552 0.448 1 1 1v-1zM15.451 24.333c-0.552 0-1 0.448-1 1s0.448 1 1 1v-2zM24.784 26.333c0.552 0 1-0.448 1-1s-0.448-1-1-1v2zM7.374 21.648l14.274-14.274-1.414-1.414-14.275 14.275 1.414 1.414zM20.234 7.374l4.392 4.392 1.414-1.414-4.392-4.392-1.414 1.414zM24.626 10.352l-14.275 14.275 1.414 1.414 14.274-14.274-1.414-1.414zM11.059 24.333h-4.392v2h4.392v-2zM7.667 25.333v-4.392h-2v4.392h2zM16.94 10.668l4.392 4.392 1.414-1.414-4.392-4.392-1.414 1.414zM15.451 26.333h9.333v-2h-9.333v2z"})))}var Q,T=f.forwardRef(K),Y=(n.p,["title","titleId"]);function J(){return J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},J.apply(this,arguments)}function V(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function q(e,t){var n=e.title,r=e.titleId,a=V(e,Y);return f.createElement("svg",J({xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",ref:t,"aria-labelledby":r},a),void 0===n?f.createElement("title",{id:r},"logout"):n?f.createElement("title",{id:r},n):null,Q||(Q=f.createElement("path",{strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:4,strokeWidth:2,d:"M18.667 5.333h5.333c1.473 0 2.667 1.194 2.667 2.667v16c0 1.473-1.194 2.667-2.667 2.667h-5.333M4 16h16M4 16l5.333-5.333M4 16l5.333 5.333"})))}var X,H,$=f.forwardRef(q),ee=(n.p,["title","titleId"]);function te(){return te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},te.apply(this,arguments)}function ne(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function re(e,t){var n=e.title,r=e.titleId,a=ne(e,ee);return f.createElement("svg",te({width:182,height:182,viewBox:"0 0 182 182",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},a),n?f.createElement("title",{id:r},n):null,X||(X=f.createElement("rect",{width:182,height:182,rx:40,fill:"#54ADFF"})),H||(H=f.createElement("path",{d:"M160.826 177.301C155.216 180.3 148.806 182 142 182H39.9999C33.1938 182 26.7846 180.3 21.174 177.302C21.0219 176.694 20.9676 176.06 21.0187 175.421C21.1468 173.814 21.9388 172.335 23.1968 171.322C27.2386 168.121 32.1772 165.839 37.5003 164.709L63.0672 159.586C65.7578 159.063 67.703 156.664 67.703 153.881V148.025C66.0935 145.777 64.5623 142.803 62.9559 139.682L62.8575 139.491C61.5763 136.999 59.6311 133.227 58.7691 132.342C53.5043 127.08 48.5074 121.235 46.9699 113.702C45.514 106.623 46.9932 102.897 48.4958 99.9634L48.6472 95.7603C48.4841 88.7746 48.2861 80.0774 50.243 74.7799C56.5561 57.3854 75.4138 47.6287 90.754 47C98.0804 47.1281 104.219 48.7697 110.427 52.1229C111.126 52.4954 113.025 52.8214 114.399 53.0543C117.905 53.6481 122.261 54.3932 125.22 57.595C129.413 62.1124 131.079 67.2702 131.288 76.4448C133.047 83.2209 133.28 92.5352 133.28 99.975C134.946 102.956 136.367 106.658 134.922 113.714C133.373 121.235 128.376 127.068 123.205 132.261C122.261 133.227 120.363 136.964 119.105 139.444C117.486 142.646 115.937 145.708 114.294 148.013V153.87C114.294 156.664 116.228 159.062 118.907 159.575L144.45 164.698C149.808 165.815 154.747 168.121 158.8 171.322C160.058 172.324 160.85 173.802 160.979 175.409C161.034 176.051 160.98 176.69 160.826 177.301Z",fill:"#9DCEFC",fillOpacity:.4})))}var ae,se=f.forwardRef(re),ie=(n.p,["title","titleId"]);function le(){return le=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},le.apply(this,arguments)}function ce(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function oe(e,t){var n=e.title,r=e.titleId,a=ce(e,ie);return f.createElement("svg",le({xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",ref:t,"aria-labelledby":r},a),void 0===n?f.createElement("title",{id:r},"check"):n?f.createElement("title",{id:r},n):null,ae||(ae=f.createElement("path",{fill:"none",strokeLinejoin:"round",strokeLinecap:"round",strokeMiterlimit:4,strokeWidth:2,stroke:"#00c3ad",d:"M26.667 9.333l-14.667 14.667-6.667-6.667"})))}var ue=f.forwardRef(oe),de=(n.p,n(8724)),me=n(2936),_e={headerNavActive:"UserInfo_headerNavActive__eGd9d",burger:"UserInfo_burger__pLGi6",burgerLines:"UserInfo_burgerLines__gYYs-",infobox:"UserInfo_infobox__lguvZ",photo:"UserInfo_photo__UauGS",input:"UserInfo_input__aIG4J",information:"UserInfo_information__Cv-WU",text:"UserInfo_text__KEpa9",edit:"UserInfo_edit__DAAPy",edit__icon:"UserInfo_edit__icon__baeW9",check__icon:"UserInfo_check__icon__MCcfq",user__icon:"UserInfo_user__icon__-NeUz",user__camera:"UserInfo_user__camera__8IYU1",camera__title:"UserInfo_camera__title__PmBOa",logout:"UserInfo_logout__rv2FM",logout__text:"UserInfo_logout__text__+geyC",logout__icon:"UserInfo_logout__icon__dZ0NR",userAvatar:"UserInfo_userAvatar__r2wGZ"};function he(){var e=(0,b.v9)(w.dy),t=(0,b.v9)(w.Q8),n=(0,b.I0)(),r=(0,f.useState)({name:"",email:"",birthday:"",phone:"",city:""}),a=(0,u.Z)(r,2),s=a[0],i=a[1],l=(0,f.useState)(""),c=(0,u.Z)(l,2),o=c[0],d=c[1],m={name:(0,f.useRef)(null),email:(0,f.useRef)(null),birthday:(0,f.useRef)(null),phone:(0,f.useRef)(null),city:(0,f.useRef)(null)},_=(0,f.useRef)(null),h=function(){var e=(0,M.Z)(B().mark((function e(t){var n,r;return B().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.files[0],(r=new FormData).append("avatar",n),e.next=5,(0,me.BA)(r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();(0,f.useEffect)((function(){e&&i({name:e.name||"",email:e.email||"",birthday:g(e.birthday)||"",phone:e.phone||"",city:e.city||""})}),[e]),(0,f.useEffect)((function(){t&&n((0,de.bG)())}),[n,t]);var p=function(e){d(e)},v=function(e){var t=e.target,n=t.name,r=t.value;i((function(e){return(0,E.Z)((0,E.Z)({},e),{},(0,U.Z)({},n,r))}))},x=function(){n((0,de.gS)((0,U.Z)({},o,s[o]))),d("")},g=function(e){var t=new Date(e),n=t.getFullYear(),r=String(t.getMonth()+1).padStart(2,"0"),a=String(t.getDate()).padStart(2,"0");return"".concat(a,".").concat(r,".").concat(n)};return(0,j.jsx)("div",{children:(0,j.jsxs)("div",{className:_e.infobox,children:[(0,j.jsxs)("div",{className:_e.decktop,children:[(0,j.jsx)("div",{className:_e.photo,children:e&&e.avatarURL&&""!==e.avatarURL?(0,j.jsx)("img",{className:_e.userAvatar,src:"https://your-pet-backend.onrender.com/".concat(e.avatarURL),alt:"userAvatar",width:"182px",height:"182px"}):(0,j.jsx)(se,{className:_e.user__icon})}),(0,j.jsxs)("div",{children:[(0,j.jsx)("input",{type:"file",accept:"image/*",ref:_,style:{display:"none"},onChange:h}),(0,j.jsxs)("div",{className:_e.camera__title,onClick:function(){_.current.click()},children:[(0,j.jsx)(A,{className:_e.user__camera}),(0,j.jsx)("p",{className:_e.edit,children:"Edit photo"})]})]})]}),(0,j.jsxs)("div",{className:_e.decktop,children:[(0,j.jsxs)("div",{className:_e.information,children:[(0,j.jsxs)("label",{className:_e.text,children:["Name:","name"===o?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("input",{ref:m.name,onChange:v,onBlur:x,name:"name",className:_e.input,value:s.name}),(0,j.jsx)(ue,{className:_e.check__icon,onClick:x})]}):(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("input",{name:"name",className:_e.input,value:s.name,readOnly:!0}),(0,j.jsx)(T,{className:_e.edit__icon,onClick:function(){return p("name")}})]})]}),(0,j.jsxs)("label",{className:_e.text,children:["Email:","email"===o?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("input",{ref:m.email,onChange:v,onBlur:x,name:"email",className:_e.input,value:s.email}),(0,j.jsx)(ue,{className:_e.check__icon,onClick:x})]}):(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("input",{name:"email",className:_e.input,value:s.email,readOnly:!0}),(0,j.jsx)(T,{className:_e.edit__icon,onClick:function(){return p("email")}})]})]}),(0,j.jsxs)("label",{className:_e.text,children:["Birthday:","birthday"===o?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("input",{ref:m.birthday,onChange:v,onBlur:x,name:"birthday",className:_e.input,value:s.birthday}),(0,j.jsx)(ue,{className:_e.check__icon,onClick:x})]}):(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("input",{name:"birthday",className:_e.input,value:s.birthday,readOnly:!0}),(0,j.jsx)(T,{className:_e.edit__icon,onClick:function(){return p("birthday")}})]})]}),(0,j.jsxs)("label",{className:_e.text,children:["Phone:","phone"===o?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("input",{ref:m.phone,onChange:v,onBlur:x,name:"phone",className:_e.input,value:s.phone}),(0,j.jsx)(ue,{className:_e.check__icon,onClick:x})]}):(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("input",{name:"phone",className:_e.input,value:s.phone,readOnly:!0}),(0,j.jsx)(T,{className:_e.edit__icon,onClick:function(){return p("phone")}})]})]}),(0,j.jsxs)("label",{className:_e.text,children:["City:","city"===o?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("input",{ref:m.city,onChange:v,onBlur:x,name:"city",className:_e.input,value:s.city}),(0,j.jsx)(ue,{className:_e.check__icon,onClick:x})]}):(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("input",{name:"city",className:_e.input,value:s.city,readOnly:!0}),(0,j.jsx)(T,{className:_e.edit__icon,onClick:function(){return p("city")}})]})]})]}),(0,j.jsxs)("div",{className:_e.logout,onClick:function(){n((0,de.kS)())},children:[(0,j.jsx)($,{className:_e.logout__icon}),(0,j.jsx)("p",{className:_e.logout__text,children:"Log Out"})]})]})]})})}var fe=n(5987);function pe(){return(0,j.jsx)("section",{children:(0,j.jsx)("div",{className:"container",children:(0,j.jsxs)("div",{className:r,children:[(0,j.jsxs)("div",{className:l,children:[(0,j.jsx)("h3",{className:s,children:"My information:"}),(0,j.jsx)(he,{})]}),(0,j.jsx)("div",{className:a,children:(0,j.jsxs)("div",{className:c,children:[(0,j.jsxs)("div",{className:o,children:[(0,j.jsx)("h3",{className:i,children:"My pets:"}),(0,j.jsx)(fe.Z,{})]}),(0,j.jsx)(C,{})]})})]})})})}},4217:function(e,t,n){n.d(t,{NH:function(){return l},Q8:function(){return i},dy:function(){return s}});var r=n(6916),a=function(e){return e.user},s=(0,r.P1)(a,(function(e){return e.user})),i=(0,r.P1)(a,(function(e){return e.isLogin})),l=(0,r.P1)(a,(function(e){return e.loading}));(0,r.P1)(a,(function(e){return e.error}))},8590:function(e,t,n){n.d(t,{Q:function(){return r},r:function(){return a}});var r=function(e){return e.pets.loading},a=function(e){return e.pets.items}},2722:function(e,t,n){e.exports=n.p+"static/media/placeholder.f1de6a39e4b6d6891b5d.png"}}]);
//# sourceMappingURL=472.0d11e382.chunk.js.map