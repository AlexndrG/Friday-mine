(this.webpackJsonpfriday=this.webpackJsonpfriday||[]).push([[0],{13:function(e,t,n){e.exports={main:"Login_main__2pv3y",form:"Login_form__J68WB",item:"Login_item__3yq4G",error:"Login_error__3lSpZ"}},14:function(e,t,n){e.exports={main:"Profile_main__1iK2v",form:"Profile_form__2Irhk",photo:"Profile_photo__1Mrgm",item:"Profile_item__2s20o",error:"Profile_error__aQEnL"}},16:function(e,t,n){e.exports={main:"Register_main__iR9HC",form:"Register_form__2bOF2",item:"Register_item__1te8c",error:"Register_error__3uYTC"}},23:function(e,t,n){e.exports={error:"Error404_error__2seUt",text:"Error404_text__3vJJY",image:"Error404_image__2JRYZ"}},24:function(e,t,n){e.exports={pen:"SuperEditableSpan_pen__37tAy",spanParameter:"SuperEditableSpan_spanParameter__3KV6Z",editableSpan:"SuperEditableSpan_editableSpan__2mEG8"}},25:function(e,t,n){e.exports={superInput:"SuperInputText_superInput__2AxW5",errorInput:"SuperInputText_errorInput__20jP4",error:"SuperInputText_error__rhMt7"}},29:function(e,t,n){e.exports={default:"SuperButton_default__1A3oo",red:"SuperButton_red__3CQpR"}},31:function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__16WQn",spanClassName:"SuperCheckbox_spanClassName__TOXu4"}},32:function(e,t,n){e.exports={item:"ShowComponent_item__Cw_MG",h3:"ShowComponent_h3__1wID5"}},41:function(e,t,n){e.exports={loader:"Loader_loader__2rfiT"}},44:function(e,t,n){e.exports={main:"Test_main__OSXSW"}},45:function(e,t,n){e.exports={range:"SuperRange_range__1Z1RV"}},46:function(e,t,n){e.exports={item:"SuperNavLink_item__sVmEG"}},52:function(e,t,n){},53:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(21),s=n.n(c),i=(n(52),n(15)),o=(n(53),n(5)),j=n(23),u=n.n(j),b=n(0);function l(){return Object(b.jsxs)("div",{className:u.a.error,children:[Object(b.jsxs)("div",{className:u.a.text,children:["404",Object(b.jsx)("br",{}),"Sorry..."]}),Object(b.jsx)("img",{className:u.a.image,src:"https://images-na.ssl-images-amazon.com/images/I/51yEw1u0HqL._AC_SY1000_.jpg",alt:"turd"})]})}var d=n(8),O=n(4),p=n(14),x=n.n(p),h=n.p+"static/media/avatar.f463a804.jpg",m=n(2),f=n(6),g=n(29),v=n.n(g),_=["red","className"],C=function(e){var t=e.red,n=e.className,r=Object(f.a)(e,_),a="".concat(t?v.a.red:v.a.default," ").concat(n);return Object(b.jsx)("button",Object(m.a)({className:a},r))},S=n(41),N=n.n(S),y=n.p+"static/media/loader.b6485230.gif";function E(){return Object(b.jsx)("img",{className:N.a.loader,src:y})}var T=n(24),P=n.n(T),w=n(25),R=n.n(w),k=["onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"],I=function(e){var t=e.onChange,n=e.onChangeText,r=e.onKeyPress,a=e.onEnter,c=e.error,s=e.className,i=e.spanClassName,o=Object(f.a)(e,k),j="".concat(R.a.error," ").concat(i||""),u="".concat(c?R.a.errorInput:R.a.superInput," ").concat(s);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("input",Object(m.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){r&&r(e),a&&"Enter"===e.key&&a()},className:u},o)),c&&Object(b.jsx)("span",{className:j,children:c})]})},B=["autoFocus","onBlur","onEnter","spanProps"],A=["children","onDoubleClick","className"],L=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,a=e.spanProps,c=Object(f.a)(e,B),s=Object(r.useState)(!1),i=Object(d.a)(s,2),o=i[0],j=i[1],u=a||{},l=u.children,O=u.onDoubleClick,p=u.className,x=Object(f.a)(u,A),h="".concat(P.a.editableSpan,"\n         ").concat(c.spanClassName?P.a[c.spanClassName]:"","\n         ").concat(p||"");return Object(b.jsx)(b.Fragment,{children:o?Object(b.jsx)(I,Object(m.a)({autoFocus:!0,onBlur:function(e){j(!1),t&&t(e)},onEnter:function(){j(!1),n&&n()}},c)):Object(b.jsxs)("div",{children:[Object(b.jsx)("img",{className:P.a.pen,src:"https://iconarchive.com/download/i96727/iconsmind/outline/Pen.ico",alt:"pen"}),Object(b.jsx)("span",Object(m.a)(Object(m.a)({onDoubleClick:function(e){j(!0),O&&O(e)},className:h},x),{},{children:l||c.value}))]})})};function D(e){return Object(b.jsxs)("div",{className:x.a.main,children:[Object(b.jsx)("h1",{children:"Profile"}),Object(b.jsxs)("div",{className:x.a.form,children:[Object(b.jsx)("div",{className:x.a.item,children:Object(b.jsx)("img",{className:x.a.photo,src:e.ifImgError||e.avatar||h,onError:function(){return e.setIfImgError(h)}})}),Object(b.jsxs)("div",{className:x.a.item,children:[Object(b.jsx)("b",{children:"Email:"})," ".concat(e.email)]}),Object(b.jsxs)("div",{className:x.a.item,children:[Object(b.jsx)("b",{children:"Name:"}),Object(b.jsx)("div",{children:Object(b.jsx)(L,{value:e.newName,onChangeText:e.nameChange,disabled:e.isBusy,size:50})})]}),Object(b.jsxs)("div",{className:x.a.item,children:[Object(b.jsx)("b",{children:"Avatar link:"}),Object(b.jsx)("div",{children:Object(b.jsx)(L,{value:e.newAvatar,onChangeText:e.avatarChange,disabled:e.isBusy,size:75})})]}),Object(b.jsxs)("div",{className:x.a.item,children:[Object(b.jsx)("br",{}),Object(b.jsx)(C,{onClick:e.changePress,disabled:e.isBusy,children:"Change profile"})]}),Object(b.jsxs)("div",{className:x.a.item,children:[Object(b.jsx)("br",{}),Object(b.jsx)(C,{onClick:e.logoutPress,disabled:e.isBusy,children:"Logout"})]})]}),e.isBusy&&Object(b.jsx)("div",{children:Object(b.jsx)(E,{})}),e.error&&Object(b.jsx)("div",{className:x.a.error,children:e.error})]})}var G=n(42),F=n.n(G).a.create({baseURL:"https://neko-back.herokuapp.com/2.0/",withCredentials:!0}),z=function(){return F.post("auth/me",{})},M=function(e,t,n){return F.post("auth/login",{email:e,password:t,rememberMe:n})},U=function(){return F.delete("auth/me")},Y=function(e,t){return F.post("auth/register",{email:e,password:t})},J=function(e,t){return F.put("auth/me",{name:e,avatar:t})},Z={isInitialized:!1,isBusy:!1,error:"",isLogined:!1,userData:{}};var K=function(e){return{type:"APP/SET-BUSY",value:e}},q=function(e){return{type:"APP/SET-ERROR",errorText:e}},W=function(e){return{type:"APP/SET-USER-DATA",userData:e}},Q={};function V(){var e=Object(O.c)((function(e){return e.app.isLogined})),t=Object(O.c)((function(e){return e.app.isBusy})),n=Object(O.c)((function(e){return e.app.error})),a=Object(O.c)((function(e){return e.app.userData})),c=a.email,s=a.name,i=a.avatar,j=Object(O.b)(),u=Object(r.useState)(s),l=Object(d.a)(u,2),p=l[0],x=l[1],h=Object(r.useState)(i||"none"),m=Object(d.a)(h,2),f=m[0],g=m[1],v=Object(r.useState)(""),_=Object(d.a)(v,2),C=_[0],S=_[1];Object(r.useEffect)((function(){return function(){j(q(""))}}),[]),Object(r.useEffect)((function(){return function(){S((function(e){return""}))}}),[i]);return e?Object(b.jsx)(D,{isBusy:t,error:n,email:c,newName:p,avatar:i||"none",newAvatar:f,nameChange:x,avatarChange:g,changePress:function(){j(function(e,t){return function(n){n(q("")),n(K(!0)),J(e,t).then((function(e){n(W(e.data.updatedUser))})).catch((function(e){n(q(e.response?e.response.data.error:e.message))})).finally((function(){n(K(!1))}))}}(p,f))},logoutPress:function(){j((function(e){e(q("")),e(K(!0)),U().then((function(t){e({type:"APP/SET-LOGIN",value:!1})})).catch((function(t){e(q(t.response?t.response.data.error:t.message))})).finally((function(){e(K(!1))}))}))},ifImgError:C,setIfImgError:S}):Object(b.jsx)(o.a,{to:"/login"})}function H(){return Object(b.jsx)("div",{children:Object(b.jsx)("h1",{children:"Restore Password"})})}function X(){return Object(b.jsx)("div",{children:Object(b.jsx)("h1",{children:"New Password"})})}var $=n(13),ee=n.n($);function te(e){return Object(b.jsxs)("div",{className:ee.a.main,children:[Object(b.jsx)("h1",{children:"Login"}),Object(b.jsxs)("div",{className:ee.a.form,children:[Object(b.jsxs)("div",{className:ee.a.item,children:["E-mail",Object(b.jsx)("br",{}),Object(b.jsx)(I,{value:e.email,onChange:e.emailChange,disabled:e.isBusy})]}),Object(b.jsxs)("div",{className:ee.a.item,children:["Password",Object(b.jsx)("br",{}),Object(b.jsx)(I,{value:e.password,onChange:e.passwordChange,disabled:e.isBusy})]}),Object(b.jsxs)("div",{className:ee.a.item,children:[Object(b.jsx)("br",{}),Object(b.jsx)(I,{type:"checkbox",checked:e.rememberMe,onClick:e.rememberMeChange,disabled:e.isBusy}),"Remember me"]}),Object(b.jsxs)("div",{className:ee.a.item,children:[Object(b.jsx)("br",{}),Object(b.jsx)(C,{onClick:function(){return e.loginPress(!1)},disabled:e.isBusy,children:"Login"})]})]}),Object(b.jsxs)("div",{className:ee.a.form,children:[Object(b.jsxs)("div",{className:ee.a.item,children:["E-mail",Object(b.jsx)("br",{}),Object(b.jsx)(I,{value:"nya-admin@nya.nya"})]}),Object(b.jsxs)("div",{className:ee.a.item,children:["Password",Object(b.jsx)("br",{}),Object(b.jsx)(I,{value:"1qazxcvBG"})]}),Object(b.jsxs)("div",{className:ee.a.item,children:[Object(b.jsx)("br",{}),Object(b.jsx)(I,{type:"checkbox",checked:!1}),"Remember me"]}),Object(b.jsxs)("div",{className:ee.a.item,children:[Object(b.jsx)("br",{}),Object(b.jsx)(C,{onClick:function(){return e.loginPress(!0)},disabled:e.isBusy,red:!0,children:"Login as Ignat"})]})]}),e.isBusy&&Object(b.jsx)("div",{children:Object(b.jsx)(E,{})}),e.error&&Object(b.jsx)("div",{className:ee.a.error,children:e.error})]})}var ne={};var re=function(e,t,n){return function(r){r(q("")),r(K(!0)),M(e,t,n).then((function(e){r(W(e.data))})).catch((function(e){r(q(e.response?e.response.data.error:e.message))})).finally((function(){r(K(!1))}))}};function ae(){var e=Object(O.c)((function(e){return e.app.isBusy})),t=Object(O.c)((function(e){return e.app.isLogined})),n=Object(O.c)((function(e){return e.app.error})),a=Object(O.b)();Object(r.useEffect)((function(){return function(){a(q(""))}}),[]);var c=Object(r.useState)("dfkcnsldkfj@sdfsifd.ru"),s=Object(d.a)(c,2),i=s[0],j=s[1],u=Object(r.useState)("11111111"),l=Object(d.a)(u,2),p=l[0],x=l[1],h=Object(r.useState)(!1),m=Object(d.a)(h,2),f=m[0],g=m[1];return t?Object(b.jsx)(o.a,{to:"/profile"}):Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(te,{isBusy:e,email:i,password:p,rememberMe:f,emailChange:function(e){n&&a(q("")),j(e.currentTarget.value)},passwordChange:function(e){n&&a(q("")),x(e.currentTarget.value)},rememberMeChange:function(e){n&&a(q("")),g(e.currentTarget.checked)},loginPress:function(e){a(""!==i&&""!==p?e?re("nya-admin@nya.nya","1qazxcvBG",!1):re(i,p,f):q("Fill email/password fields!"))},error:n})})}var ce=n(44),se=n.n(ce),ie=n(31),oe=n.n(ie),je=["type","onChange","onChangeChecked","className","spanClassName","children"],ue=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,r=e.className,a=(e.spanClassName,e.children),c=Object(f.a)(e,je),s="".concat(oe.a.checkbox," ").concat(r||"");return Object(b.jsxs)("label",{children:[Object(b.jsx)("input",Object(m.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},c)),a&&Object(b.jsx)("span",{className:oe.a.spanClassName,children:a})]})},be=["options","onChangeOption","onChange"],le=function(e){var t=e.options,n=e.onChangeOption,r=e.onChange,a=Object(f.a)(e,be),c=t?t.map((function(e,t){return Object(b.jsx)("option",{value:e,children:e},t)})):[];return Object(b.jsx)("select",Object(m.a)(Object(m.a)({onChange:function(e){r&&r(e),n&&n(e.currentTarget.value)}},a),{},{children:c}))},de=["type","name","value","onChange","options","onChangeOption"],Oe=function(e){e.type;var t=e.name,n=e.value,r=e.onChange,a=e.options,c=e.onChangeOption,s=Object(f.a)(e,de),i=function(e){r&&r(e),c&&c(e.currentTarget.value)},o=a?a.map((function(e,r){return Object(b.jsxs)("label",{children:[Object(b.jsx)("input",Object(m.a)({type:"radio",name:t,checked:n===e,value:e,onChange:i},s)),e]},t+"-"+r)})):[];return Object(b.jsx)(b.Fragment,{children:o})},pe=n(45),xe=n.n(pe),he=["type","onChange","onChangeRange","className"],me=function(e){e.type;var t=e.onChange,n=e.onChangeRange,r=e.className,a=Object(f.a)(e,he),c="".concat(xe.a.range," ").concat(r||"");return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("input",Object(m.a)({style:{boxSizing:"border-box",width:"200px",height:"20px"},type:"range",onChange:function(e){t&&t(e),n&&n(+e.currentTarget.value)},className:c},a))})},fe=n(32),ge=n.n(fe);function ve(e){return Object(b.jsxs)("div",{className:ge.a.item,children:[Object(b.jsx)("div",{children:Object(b.jsx)("h3",{className:ge.a.h3,children:e.name})}),e.node]})}var _e=n(46),Ce=n.n(_e);function Se(e){return Object(b.jsx)(i.b,{className:Ce.a.item,to:e.goTo,children:e.text})}var Ne=["Super","Select","SuperSelect"];function ye(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Test"}),Object(b.jsxs)("div",{className:se.a.main,children:[Object(b.jsx)(ve,{name:"SuperInputText",node:Object(b.jsx)(I,{value:"SuperInputText"})}),Object(b.jsx)(ve,{name:"SuperButton",node:Object(b.jsx)(C,{children:"SuperButton"})}),Object(b.jsx)(ve,{name:"SuperCheckbox",node:Object(b.jsx)(ue,{children:"SuperCheckbox"})}),Object(b.jsx)(ve,{name:"SuperEditableSpan",node:Object(b.jsx)(L,{value:"SuperEditableSpan"})}),Object(b.jsx)(ve,{name:"SuperSelect",node:Object(b.jsx)(le,{value:"SuperSelect",options:Ne})}),Object(b.jsx)(ve,{name:"SuperRadio",node:Object(b.jsx)(Oe,{options:Ne,value:Ne[2]})}),Object(b.jsx)(ve,{name:"SuperRange",node:Object(b.jsx)(me,{value:25})}),Object(b.jsx)(ve,{name:"SuperNavLink",node:Object(b.jsx)(Se,{goTo:"/test",text:"Go to Test page"})})]})]})}var Ee=n(16),Te=n.n(Ee);function Pe(e){return Object(b.jsxs)("div",{className:Te.a.main,children:[Object(b.jsx)("h1",{children:"Register"}),Object(b.jsxs)("div",{className:Te.a.form,children:[Object(b.jsxs)("div",{className:Te.a.item,children:["E-mail",Object(b.jsx)("br",{}),Object(b.jsx)(I,{value:e.email,onChange:e.emailChange,disabled:e.isBusy})]}),Object(b.jsxs)("div",{className:Te.a.item,children:["Password",Object(b.jsx)("br",{}),Object(b.jsx)(I,{value:e.password,onChange:e.passwordChange,disabled:e.isBusy})]}),Object(b.jsxs)("div",{className:Te.a.item,children:["Password (repeat)",Object(b.jsx)("br",{}),Object(b.jsx)(I,{value:e.password2,onChange:e.password2Change,disabled:e.isBusy})]}),Object(b.jsxs)("div",{className:Te.a.item,children:[Object(b.jsx)("br",{}),Object(b.jsx)(C,{onClick:e.registerPress,disabled:e.isBusy,children:"Register"})]})]}),e.isBusy&&Object(b.jsx)("div",{children:Object(b.jsx)(E,{})}),e.error&&Object(b.jsx)("div",{className:Te.a.error,children:e.error})]})}var we={isRegistered:!1};var Re=function(e){return{type:"REGISTER/SET-REGISTER",value:e}};function ke(){var e=Object(O.c)((function(e){return e.app.isBusy})),t=Object(O.c)((function(e){return e.register.isRegistered})),n=Object(O.c)((function(e){return e.app.error})),a=Object(O.b)();Object(r.useEffect)((function(){return function(){a(Re(!1)),a(q(""))}}),[]);var c=Object(r.useState)("dfkcnsldkfj@sdfsifd.ru"),s=Object(d.a)(c,2),i=s[0],j=s[1],u=Object(r.useState)("11111111"),l=Object(d.a)(u,2),p=l[0],x=l[1],h=Object(r.useState)("11111111"),m=Object(d.a)(h,2),f=m[0],g=m[1];return t?Object(b.jsx)(o.a,{to:"/login"}):Object(b.jsx)(Pe,{isBusy:e,email:i,password:p,password2:f,emailChange:function(e){n&&a(q("")),j(e.currentTarget.value)},passwordChange:function(e){n&&a(q("")),x(e.currentTarget.value)},password2Change:function(e){n&&a(q("")),g(e.currentTarget.value)},registerPress:function(){a(""!==i&&""!==p&&""!==f?p===f?function(e,t){return function(n){n(q("")),n(K(!0)),Y(e,t).then((function(e){n(Re(!0))})).catch((function(e){n(q(e.response?e.response.data.error:e.message))})).finally((function(){n(K(!1))}))}}(i,p):q("Passwords do not match!"):q("Fill all fields!"))},error:n})}var Ie="/login",Be="/register",Ae="/profile",Le="/pwd-restore",De="/pwd-new",Ge="/test";function Fe(){return Object(b.jsx)("div",{children:Object(b.jsxs)(o.d,{children:[Object(b.jsx)(o.b,{path:"/",exact:!0,render:function(){return Object(b.jsx)(ye,{})}}),Object(b.jsx)(o.b,{path:Ie,render:function(){return Object(b.jsx)(ae,{})}}),Object(b.jsx)(o.b,{path:Be,render:function(){return Object(b.jsx)(ke,{})}}),Object(b.jsx)(o.b,{path:Ae,render:function(){return Object(b.jsx)(V,{})}}),Object(b.jsx)(o.b,{path:Le,render:function(){return Object(b.jsx)(H,{})}}),Object(b.jsx)(o.b,{path:De,render:function(){return Object(b.jsx)(X,{})}}),Object(b.jsx)(o.b,{path:Ge,render:function(){return Object(b.jsx)(ye,{})}}),Object(b.jsx)(o.b,{render:function(){return Object(b.jsx)(l,{})}})]})})}function ze(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{style:{textAlign:"center",color:"red"},children:"FRIDAY"}),Object(b.jsx)(Se,{goTo:Ie,text:"Login page"}),Object(b.jsx)(Se,{goTo:Be,text:"Register page"}),Object(b.jsx)(Se,{goTo:Ae,text:"Profile page"}),Object(b.jsx)(Se,{goTo:Le,text:"Restore password page"}),Object(b.jsx)(Se,{goTo:De,text:"New password page"}),Object(b.jsx)(Se,{goTo:Ge,text:"Test page"}),Object(b.jsx)(Se,{goTo:"Error404",text:"Error page"})]})}function Me(){var e=Object(O.c)((function(e){return e.app.isInitialized})),t=Object(O.c)((function(e){return e.app.isLogined})),n=Object(O.b)();return Object(r.useEffect)((function(){n((function(e){z().then((function(t){e(W(t.data))})).catch((function(e){})).finally((function(){e({type:"APP/SET-INITIALIZED"})}))}))}),[]),e?Object(b.jsxs)("div",{children:[Object(b.jsx)(ze,{}),Object(b.jsx)(Fe,{}),Object(b.jsx)(o.a,{to:t?"/profile":"/login"})]}):Object(b.jsx)("div",{className:"init",children:Object(b.jsx)(E,{})})}var Ue=n(26),Ye=n(47),Je={};var Ze={};var Ke=Object(Ue.b)({login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;return t.type,e},register:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;return"REGISTER/SET-REGISTER"===t.type?Object(m.a)(Object(m.a)({},e),{},{isRegistered:t.value}):e},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;return t.type,e},passwordNew:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Je,t=arguments.length>1?arguments[1]:void 0;return t.type,e},passwordRestore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ze,t=arguments.length>1?arguments[1]:void 0;return t.type,e},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/SET-INITIALIZED":return Object(m.a)(Object(m.a)({},e),{},{isInitialized:!0});case"APP/SET-BUSY":return Object(m.a)(Object(m.a)({},e),{},{isBusy:t.value});case"APP/SET-ERROR":return Object(m.a)(Object(m.a)({},e),{},{error:t.errorText});case"APP/SET-LOGIN":return Object(m.a)(Object(m.a)({},e),{},{isLogined:t.value});case"APP/SET-USER-DATA":return Object(m.a)(Object(m.a)({},e),{},{isLogined:!0,userData:Object(m.a)({},t.userData)});default:return e}}}),qe=Object(Ue.c)(Ke,Object(Ue.a)(Ye.a)),We=qe;window.store=qe,s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(O.a,{store:We,children:Object(b.jsx)(i.a,{children:Object(b.jsx)(Me,{})})})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.f651ac5a.chunk.js.map