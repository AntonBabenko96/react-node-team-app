"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[664],{2740:function(e,r,n){n.d(r,{B:function(){return g}});var t=n(1413),s=n(9439),i=n(2791),a=n(9434),o=n(7689),c=n(1087),l=n(5705),u=n(165),d=n(3579),m=n(9823),f=n(6727),h=f.Ry().shape({email:f.Z_().email("Invalid email").required("Email is required"),password:f.Z_().min(6,"Password must be at least 6 characters").required("Password is required"),confirmPassword:f.Z_().oneOf([f.iH("password"),null],"Passwords must match").required("Confirm Password is required")}),p=f.Ry().shape({email:f.Z_().email("Invalid email").required("Email is required"),password:f.Z_().min(6,"Password must be at least 6 characters").required("Password is required")}),x=n(8724),_=n(4217),v=n(6676),j=n(184),g=function(){var e=(0,i.useState)(!1),r=(0,s.Z)(e,2),n=r[0],f=r[1],g=(0,i.useState)(!1),w=(0,s.Z)(g,2),Z=w[0],N=w[1],k=(0,o.s0)(),B=(0,a.I0)(),C=(0,i.useState)(window.location.pathname),F=(0,s.Z)(C,1)[0],b=F.endsWith("/register"),P=F.endsWith("/login"),y=(0,a.v9)(_.NH),S=function(){f(!n)},M=function(){N(!Z)};return(0,j.jsxs)(j.Fragment,{children:["  ",y&&(0,j.jsx)(v.Z,{}),(0,j.jsxs)("div",{className:"registration-form",children:[(0,j.jsx)("h1",{children:b?"Registration":"Login"}),(0,j.jsx)(l.J9,{initialValues:{email:"",password:"",confirmPassword:""},validationSchema:b?h:p,onSubmit:function(e,r){var n=r.resetForm;b&&B((0,x.z2)({email:e.email,password:e.password})).then((function(){B((0,x.x4)({email:e.email,password:e.password})),k("/user")})),P&&(B((0,x.x4)({email:e.email,password:e.password})),k("/user")),n()},children:function(e){var r=e.values;return(0,j.jsxs)(l.l0,{children:[(0,j.jsx)("div",{children:(0,j.jsx)("div",{className:"input-icon",children:(0,j.jsx)(l.gN,{name:"email",children:function(e){var n=e.field,s=e.form,i=e.meta;return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("input",(0,t.Z)((0,t.Z)({type:"text",name:"email"},n),{},{placeholder:"Email",value:r.email,onChange:function(e){s.setFieldValue("email",e.target.value)},className:"input ".concat(i.touched&&i.error?"errorBorder":""," ").concat(""===r.email?"emptyInput":"")})),i.touched&&i.error&&(0,j.jsx)(l.Bc,{name:"email",component:"div",className:"errorMessage"}),r.email&&(0,j.jsx)(m.Z,{className:"iconClose",onClick:function(){s.setFieldValue("email","")}})]})}})})}),(0,j.jsx)("div",{children:(0,j.jsx)("div",{className:"input-icon",children:(0,j.jsx)(l.gN,{name:"password",children:function(e){var s=e.field,i=(e.form,e.meta);return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("input",(0,t.Z)((0,t.Z)({type:n?"text":"password",name:"password"},s),{},{placeholder:"Password",className:"input ".concat(i.touched&&i.error?"errorBorder":""," ").concat(""===r.password?"emptyInput":"")})),n?(0,j.jsx)(d.Z,{className:"icon",onClick:S}):(0,j.jsx)(u.Z,{className:"icon",onClick:S}),i.touched&&i.error&&(0,j.jsx)(l.Bc,{name:"password",component:"div",className:"errorMessage"})]})}})})}),b&&(0,j.jsx)("div",{children:(0,j.jsx)("div",{className:"input-icon",children:(0,j.jsx)(l.gN,{name:"confirmPassword",children:function(e){var n=e.field,s=(e.form,e.meta);return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("input",(0,t.Z)((0,t.Z)({type:Z?"text":"password",name:"confirmPassword"},n),{},{placeholder:"Confirm password",className:"input ".concat(s.touched&&s.error?"errorBorder":""," ").concat(""===r.confirmPassword?"emptyInput":"")})),Z?(0,j.jsx)(d.Z,{className:"icon",onClick:M}):(0,j.jsx)(u.Z,{className:"icon",onClick:M}),s.touched&&s.error&&(0,j.jsx)(l.Bc,{name:"confirmPassword",component:"div",className:"errorMessage"})]})}})})}),(0,j.jsx)("button",{type:"submit",children:b?"Register":"Login"})]})}}),b?(0,j.jsxs)("p",{children:["Already have an account? ",(0,j.jsx)(c.rU,{to:"/login",children:" Login"})," "]}):(0,j.jsxs)("p",{children:["Don't have an account? ",(0,j.jsx)(c.rU,{to:"/register",children:" Register"})," "]})]})]})}},6866:function(e,r,n){n.d(r,{Z:function(){return x}});var t=n(5861),s=n(3433),i=n(9439),a=n(4687),o=n.n(a),c=n(2791),l=n(2672),u=n(1131),d=n(2885),m=n(872),f=n(7241),h={active:"FilterButton_active__acRTj",burger:"FilterButton_burger__LCzxF",burgerLines:"FilterButton_burgerLines__yhLQe",button:"FilterButton_button__0C4ZA",icon:"FilterButton_icon__Sk2S3",filterButtons:"FilterButton_filterButtons__kP2xo",filtersTitle:"FilterButton_filtersTitle__WMzSh",filterDropdownBtn:"FilterButton_filterDropdownBtn__ZPWLq",arrowIcon:"FilterButton_arrowIcon__rOrgb",dropdownContent:"FilterButton_dropdownContent__vS3bG",ageDropdown:"FilterButton_ageDropdown__9-glN",genderDropdown:"FilterButton_genderDropdown__j-+vM",inputCheck:"FilterButton_inputCheck__iRSgm",filterOption:"FilterButton_filterOption__FvZMp",customCheckbox:"FilterButton_customCheckbox__Llkey",checkmark:"FilterButton_checkmark__G0ud2",checkIcon:"FilterButton_checkIcon__SkyKU"},p=n(184);function x(e){var r=e.onFilter,n=(0,c.useState)(!1),a=(0,i.Z)(n,2),x=a[0],_=a[1],v=(0,c.useState)(!1),j=(0,i.Z)(v,2),g=j[0],w=j[1],Z=(0,c.useState)(!1),N=(0,i.Z)(Z,2),k=N[0],B=N[1],C=(0,c.useState)([]),F=(0,i.Z)(C,2),b=F[0],P=F[1],y=(0,c.useState)([]),S=(0,i.Z)(y,2),M=S[0],I=S[1];(0,c.useEffect)((function(){var e=function(){var e=(0,t.Z)(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,f.r7)({sex:M.join(","),age:b.join(",")});case 3:n=e.sent,r(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error fetching data:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[b,M,r]);var L=function(e,r){var n="age"===r?b.includes(e):M.includes(e);return(0,p.jsxs)("label",{className:h.customCheckbox,children:[(0,p.jsx)("input",{type:"checkbox",value:e,checked:n,className:h.inputCheck,onChange:function(e){return function(e,r){var n=e.target.value;if("age"===r){var t=b;t.includes(n)?P(t.filter((function(e){return e!==n}))):P([].concat((0,s.Z)(t),[n]))}else if("gender"===r){var i=M;i.includes(n)?I(i.filter((function(e){return e!==n}))):I([].concat((0,s.Z)(i),[n]))}}(e,r)}}),(0,p.jsx)("span",{className:h.checkmark,children:n&&(0,p.jsx)(m.Z,{className:h.checkIcon})}),e]})};return(0,p.jsxs)("div",{className:h.filterButton,children:[(0,p.jsxs)("div",{className:"".concat(h.button," ").concat(x?h.active:""),onClick:function(){_(!x)},children:[(0,p.jsx)("span",{children:"Filters"}),(0,p.jsx)(l.Z,{className:h.icon})]}),x&&(0,p.jsxs)("div",{className:"".concat(h.dropdownContent," show"),children:[(0,p.jsx)("p",{className:h.filtersTitle,children:"Filters"}),(0,p.jsxs)("div",{className:h.filterDropdownBtn,onClick:function(){w(!g)},children:[g?(0,p.jsx)(d.Z,{className:h.arrowIcon}):(0,p.jsx)(u.Z,{className:h.arrowIcon}),"By age"]}),g&&(0,p.jsxs)("div",{className:"".concat(h.ageDropdown," ").concat(h.show),children:[(0,p.jsx)("div",{className:h.filterOption,children:L("3-12 m","age")}),(0,p.jsx)("div",{className:h.filterOption,children:L("1 year","age")}),(0,p.jsx)("div",{className:h.filterOption,children:L("2 years","age")})]}),(0,p.jsxs)("div",{className:h.filterDropdownBtn,onClick:function(){B(!k)},children:[k?(0,p.jsx)(d.Z,{className:h.arrowIcon}):(0,p.jsx)(u.Z,{className:h.arrowIcon}),"By gender"]}),k&&(0,p.jsxs)("div",{className:"".concat(h.genderDropdown," ").concat(h.show),children:[(0,p.jsx)("div",{className:h.filterOption,children:L("female","gender")}),(0,p.jsx)("div",{className:h.filterOption,children:L("male","gender")})]})]})]})}},6664:function(e,r,n){n.r(r),n.d(r,{default:function(){return c}});var t=n(2740),s=n(5658),i=n(4356),a=n(6866),o=n(184);function c(){return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("section",{className:s.Z.MainSection,children:[(0,o.jsx)(a.Z,{}),(0,o.jsx)("div",{className:"container",children:(0,o.jsx)("div",{className:i.Z.form,children:(0,o.jsx)(t.B,{})})})]})})}},4217:function(e,r,n){n.d(r,{NH:function(){return a},Q8:function(){return i}});var t=n(6916),s=function(e){return e.user},i=((0,t.P1)(s,(function(e){return e.user})),(0,t.P1)(s,(function(e){return e.isLogin}))),a=(0,t.P1)(s,(function(e){return e.loading}));(0,t.P1)(s,(function(e){return e.error}))},3579:function(e,r,n){var t=n(4836);r.Z=void 0;var s=t(n(5649)),i=n(184),a=(0,s.default)((0,i.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"RemoveRedEye");r.Z=a},165:function(e,r,n){var t=n(4836);r.Z=void 0;var s=t(n(5649)),i=n(184),a=(0,s.default)((0,i.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff");r.Z=a},5658:function(e,r){r.Z={MainSection:"MainPage_MainSection__f+T9s",Title:"MainPage_Title__7tjbU"}},4356:function(e,r){r.Z={active:"RegisterPage_active__CCSy1",burger:"RegisterPage_burger__L1RGJ",burgerLines:"RegisterPage_burgerLines__Mp7AQ",form:"RegisterPage_form__2uFZs"}}}]);
//# sourceMappingURL=664.fc4265c1.chunk.js.map