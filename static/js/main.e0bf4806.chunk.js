(this.webpackJsonpfriday=this.webpackJsonpfriday||[]).push([[0],{13:function(e,t,n){e.exports={main:"Profile_main__1iK2v",form:"Profile_form__2Irhk",photo:"Profile_photo__1Mrgm",item:"Profile_item__2s20o",error:"Profile_error__aQEnL"}},15:function(e,t,n){e.exports={main:"Login_main__2pv3y",form:"Login_form__J68WB",item:"Login_item__3yq4G",error:"Login_error__3lSpZ"}},16:function(e,t,n){e.exports={main:"Register_main__iR9HC",form:"Register_form__2bOF2",item:"Register_item__1te8c",error:"Register_error__3uYTC"}},23:function(e,t,n){e.exports={error:"Error404_error__2seUt",text:"Error404_text__3vJJY",image:"Error404_image__2JRYZ"}},24:function(e,t,n){e.exports={superInput:"SuperInputText_superInput__2AxW5",errorInput:"SuperInputText_errorInput__20jP4",error:"SuperInputText_error__rhMt7"}},25:function(e,t,n){e.exports={pen:"SuperEditableSpan_pen__37tAy",spanParameter:"SuperEditableSpan_spanParameter__3KV6Z",editableSpan:"SuperEditableSpan_editableSpan__2mEG8"}},29:function(e,t,n){e.exports={default:"SuperButton_default__1A3oo",red:"SuperButton_red__3CQpR"}},31:function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__16WQn",spanClassName:"SuperCheckbox_spanClassName__TOXu4"}},32:function(e,t,n){e.exports={item:"ShowComponent_item__Cw_MG",h3:"ShowComponent_h3__1wID5"}},41:function(e,t,n){e.exports={loader:"Loader_loader__2rfiT"}},44:function(e,t,n){e.exports={main:"Test_main__OSXSW"}},45:function(e,t,n){e.exports={range:"SuperRange_range__1Z1RV"}},46:function(e,t,n){e.exports={item:"SuperNavLink_item__sVmEG"}},52:function(e,t,n){},53:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(21),s=n.n(c),i=(n(52),n(14)),o=(n(53),n(5)),j=n(23),u=n.n(j),l=n(0);function b(){return Object(l.jsxs)("div",{className:u.a.error,children:[Object(l.jsxs)("div",{className:u.a.text,children:["404",Object(l.jsx)("br",{}),"Sorry..."]}),Object(l.jsx)("img",{className:u.a.image,src:"https://images-na.ssl-images-amazon.com/images/I/51yEw1u0HqL._AC_SY1000_.jpg",alt:"turd"})]})}var d=n(4),O=n(13),p=n.n(O),x=n.p+"static/media/avatar.f463a804.jpg",h=n(2),m=n(6),f=n(29),g=n.n(f),v=["red","className"],_=function(e){var t=e.red,n=e.className,r=Object(m.a)(e,v),a="".concat(t?g.a.red:g.a.default," ").concat(n);return Object(l.jsx)("button",Object(h.a)({className:a},r))},S=n(41),C=n.n(S),N=n.p+"static/media/loader.b6485230.gif";function y(){return Object(l.jsx)("img",{className:C.a.loader,src:N})}function T(e){return Object(l.jsxs)("div",{className:p.a.main,children:[Object(l.jsx)("h1",{children:"Profile"}),Object(l.jsxs)("div",{className:p.a.form,children:[Object(l.jsx)("div",{className:p.a.item,children:Object(l.jsx)("img",{className:p.a.photo,src:e.userData.avatar?e.userData.avatar:x})}),Object(l.jsxs)("div",{className:p.a.item,children:[Object(l.jsx)("b",{children:"Name:"})," ".concat(e.userData.name)]}),Object(l.jsxs)("div",{className:p.a.item,children:[Object(l.jsx)("b",{children:"Email:"})," ".concat(e.userData.email)]}),Object(l.jsxs)("div",{className:p.a.item,children:[Object(l.jsx)("b",{children:"Avatar link:"})," ".concat(e.userData.avatar)]}),Object(l.jsxs)("div",{className:p.a.item,children:[Object(l.jsx)("br",{}),Object(l.jsx)(_,{onClick:e.logoutPress,disabled:e.isBusy,children:"Logout"})]})]}),e.isBusy&&Object(l.jsx)("div",{children:Object(l.jsx)(y,{})}),e.error&&Object(l.jsx)("div",{className:p.a.error,children:e.error})]})}var E=n(42),P=n.n(E).a.create({baseURL:"https://neko-back.herokuapp.com/2.0/",withCredentials:!0}),w=function(){return P.post("auth/me",{})},R=function(e,t,n){return P.post("auth/login",{email:e,password:t,rememberMe:n})},k=function(){return P.delete("auth/me")},I=function(e,t){return P.post("auth/register",{email:e,password:t})},B={isInitialized:!1,isBusy:!1,error:"",isLogined:!1,userData:{}};var L=function(e){return{type:"APP/SET-BUSY",value:e}},A=function(e){return{type:"APP/SET-ERROR",errorText:e}},D=function(e){return{type:"APP/SET-USER-DATA",userData:e}},F={};function G(){var e=Object(d.c)((function(e){return e.app.isLogined})),t=Object(d.c)((function(e){return e.app.isBusy})),n=Object(d.c)((function(e){return e.app.error})),a=Object(d.c)((function(e){return e.app.userData})),c=Object(d.b)();Object(r.useEffect)((function(){return function(){c(A(""))}}),[]);return e?Object(l.jsx)(T,{isBusy:t,error:n,userData:a,logoutPress:function(){c((function(e){e(A("")),e(L(!0)),k().then((function(t){e({type:"APP/SET-LOGIN",value:!1})})).catch((function(t){e(A(t.response?t.response.data.error:t.message))})).finally((function(){e(L(!1))}))}))}}):Object(l.jsx)(o.a,{to:"/login"})}function M(){return Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"Restore Password"})})}function Y(){return Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"New Password"})})}var J=n(12),U=n(24),Z=n.n(U),z=["onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"],K=function(e){var t=e.onChange,n=e.onChangeText,r=e.onKeyPress,a=e.onEnter,c=e.error,s=e.className,i=e.spanClassName,o=Object(m.a)(e,z),j="".concat(Z.a.error," ").concat(i||""),u="".concat(c?Z.a.errorInput:Z.a.superInput," ").concat(s);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("input",Object(h.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){r&&r(e),a&&"Enter"===e.key&&a()},className:u},o)),c&&Object(l.jsx)("span",{className:j,children:c})]})},W=n(15),Q=n.n(W);function V(e){return Object(l.jsxs)("div",{className:Q.a.main,children:[Object(l.jsx)("h1",{children:"Login"}),Object(l.jsxs)("div",{className:Q.a.form,children:[Object(l.jsxs)("div",{className:Q.a.item,children:["E-mail",Object(l.jsx)("br",{}),Object(l.jsx)(K,{value:e.email,onChange:e.emailChange,disabled:e.isBusy})]}),Object(l.jsxs)("div",{className:Q.a.item,children:["Password",Object(l.jsx)("br",{}),Object(l.jsx)(K,{value:e.password,onChange:e.passwordChange,disabled:e.isBusy})]}),Object(l.jsxs)("div",{className:Q.a.item,children:[Object(l.jsx)("br",{}),Object(l.jsx)(K,{type:"checkbox",checked:e.rememberMe,onClick:e.rememberMeChange,disabled:e.isBusy}),"Remember me"]}),Object(l.jsxs)("div",{className:Q.a.item,children:[Object(l.jsx)("br",{}),Object(l.jsx)(_,{onClick:e.loginPress,disabled:e.isBusy,children:"Login"})]})]}),e.isBusy&&Object(l.jsx)("div",{children:Object(l.jsx)(y,{})}),e.error&&Object(l.jsx)("div",{className:Q.a.error,children:e.error})]})}var q={};function H(){var e=Object(d.c)((function(e){return e.app.isBusy})),t=Object(d.c)((function(e){return e.app.isLogined})),n=Object(d.c)((function(e){return e.app.error})),a=Object(d.b)();Object(r.useEffect)((function(){return function(){a(A(""))}}),[]);var c=Object(r.useState)("dfkcnsldkfj@sdfsifd.ru"),s=Object(J.a)(c,2),i=s[0],j=s[1],u=Object(r.useState)("11111111"),b=Object(J.a)(u,2),O=b[0],p=b[1],x=Object(r.useState)(!1),h=Object(J.a)(x,2),m=h[0],f=h[1];return t?Object(l.jsx)(o.a,{to:"/profile"}):Object(l.jsx)(V,{isBusy:e,email:i,password:O,rememberMe:m,emailChange:function(e){n&&a(A("")),j(e.currentTarget.value)},passwordChange:function(e){n&&a(A("")),p(e.currentTarget.value)},rememberMeChange:function(e){n&&a(A("")),f(e.currentTarget.checked)},loginPress:function(){a(""!==i&&""!==O?function(e,t,n){return function(r){r(A("")),r(L(!0)),R(e,t,n).then((function(e){r(D(e.data))})).catch((function(e){r(A(e.response?e.response.data.error:e.message))})).finally((function(){r(L(!1))}))}}(i,O,m):A("Fill email/password fields!"))},error:n})}var X=n(44),$=n.n(X),ee=n(31),te=n.n(ee),ne=["type","onChange","onChangeChecked","className","spanClassName","children"],re=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,r=e.className,a=(e.spanClassName,e.children),c=Object(m.a)(e,ne),s="".concat(te.a.checkbox," ").concat(r||"");return Object(l.jsxs)("label",{children:[Object(l.jsx)("input",Object(h.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},c)),a&&Object(l.jsx)("span",{className:te.a.spanClassName,children:a})]})},ae=n(25),ce=n.n(ae),se=["autoFocus","onBlur","onEnter","spanProps"],ie=["children","onDoubleClick","className"],oe=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,a=e.spanProps,c=Object(m.a)(e,se),s=Object(r.useState)(!1),i=Object(J.a)(s,2),o=i[0],j=i[1],u=a||{},b=u.children,d=u.onDoubleClick,O=u.className,p=Object(m.a)(u,ie),x="".concat(ce.a.editableSpan,"\n         ").concat(c.spanClassName?ce.a[c.spanClassName]:"","\n         ").concat(O||"");return Object(l.jsx)(l.Fragment,{children:o?Object(l.jsx)(K,Object(h.a)({autoFocus:!0,onBlur:function(e){j(!1),t&&t(e)},onEnter:function(){j(!1),n&&n()}},c)):Object(l.jsxs)("div",{children:[Object(l.jsx)("img",{className:ce.a.pen,src:"https://iconarchive.com/download/i96727/iconsmind/outline/Pen.ico",alt:"pen"}),Object(l.jsx)("span",Object(h.a)(Object(h.a)({onDoubleClick:function(e){j(!0),d&&d(e)},className:x},p),{},{children:b||c.value}))]})})},je=["options","onChangeOption","onChange"],ue=function(e){var t=e.options,n=e.onChangeOption,r=e.onChange,a=Object(m.a)(e,je),c=t?t.map((function(e,t){return Object(l.jsx)("option",{value:e,children:e},t)})):[];return Object(l.jsx)("select",Object(h.a)(Object(h.a)({onChange:function(e){r&&r(e),n&&n(e.currentTarget.value)}},a),{},{children:c}))},le=["type","name","value","onChange","options","onChangeOption"],be=function(e){e.type;var t=e.name,n=e.value,r=e.onChange,a=e.options,c=e.onChangeOption,s=Object(m.a)(e,le),i=function(e){r&&r(e),c&&c(e.currentTarget.value)},o=a?a.map((function(e,r){return Object(l.jsxs)("label",{children:[Object(l.jsx)("input",Object(h.a)({type:"radio",name:t,checked:n===e,value:e,onChange:i},s)),e]},t+"-"+r)})):[];return Object(l.jsx)(l.Fragment,{children:o})},de=n(45),Oe=n.n(de),pe=["type","onChange","onChangeRange","className"],xe=function(e){e.type;var t=e.onChange,n=e.onChangeRange,r=e.className,a=Object(m.a)(e,pe),c="".concat(Oe.a.range," ").concat(r||"");return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("input",Object(h.a)({style:{boxSizing:"border-box",width:"200px",height:"20px"},type:"range",onChange:function(e){t&&t(e),n&&n(+e.currentTarget.value)},className:c},a))})},he=n(32),me=n.n(he);function fe(e){return Object(l.jsxs)("div",{className:me.a.item,children:[Object(l.jsx)("div",{children:Object(l.jsx)("h3",{className:me.a.h3,children:e.name})}),e.node]})}var ge=n(46),ve=n.n(ge);function _e(e){return Object(l.jsx)(i.b,{className:ve.a.item,to:e.goTo,children:e.text})}var Se=["Super","Select","SuperSelect"];function Ce(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Test"}),Object(l.jsxs)("div",{className:$.a.main,children:[Object(l.jsx)(fe,{name:"SuperInputText",node:Object(l.jsx)(K,{value:"SuperInputText"})}),Object(l.jsx)(fe,{name:"SuperButton",node:Object(l.jsx)(_,{children:"SuperButton"})}),Object(l.jsx)(fe,{name:"SuperCheckbox",node:Object(l.jsx)(re,{children:"SuperCheckbox"})}),Object(l.jsx)(fe,{name:"SuperEditableSpan",node:Object(l.jsx)(oe,{value:"SuperEditableSpan"})}),Object(l.jsx)(fe,{name:"SuperSelect",node:Object(l.jsx)(ue,{value:"SuperSelect",options:Se})}),Object(l.jsx)(fe,{name:"SuperRadio",node:Object(l.jsx)(be,{options:Se,value:Se[2]})}),Object(l.jsx)(fe,{name:"SuperRange",node:Object(l.jsx)(xe,{value:25})}),Object(l.jsx)(fe,{name:"SuperNavLink",node:Object(l.jsx)(_e,{goTo:"/test",text:"Go to Test page"})})]})]})}var Ne=n(16),ye=n.n(Ne);function Te(e){return Object(l.jsxs)("div",{className:ye.a.main,children:[Object(l.jsx)("h1",{children:"Register"}),Object(l.jsxs)("div",{className:ye.a.form,children:[Object(l.jsxs)("div",{className:ye.a.item,children:["E-mail",Object(l.jsx)("br",{}),Object(l.jsx)(K,{value:e.email,onChange:e.emailChange,disabled:e.isBusy})]}),Object(l.jsxs)("div",{className:ye.a.item,children:["Password",Object(l.jsx)("br",{}),Object(l.jsx)(K,{value:e.password,onChange:e.passwordChange,disabled:e.isBusy})]}),Object(l.jsxs)("div",{className:ye.a.item,children:["Password (repeat)",Object(l.jsx)("br",{}),Object(l.jsx)(K,{value:e.password2,onChange:e.password2Change,disabled:e.isBusy})]}),Object(l.jsxs)("div",{className:ye.a.item,children:[Object(l.jsx)("br",{}),Object(l.jsx)(_,{onClick:e.registerPress,disabled:e.isBusy,children:"Register"})]})]}),e.isBusy&&Object(l.jsx)("div",{children:Object(l.jsx)(y,{})}),e.error&&Object(l.jsx)("div",{className:ye.a.error,children:e.error})]})}var Ee={isRegistered:!1};var Pe=function(e){return{type:"REGISTER/SET-REGISTER",value:e}};function we(){var e=Object(d.c)((function(e){return e.app.isBusy})),t=Object(d.c)((function(e){return e.register.isRegistered})),n=Object(d.c)((function(e){return e.app.error})),a=Object(d.b)();Object(r.useEffect)((function(){return function(){a(Pe(!1)),a(A(""))}}),[]);var c=Object(r.useState)("dfkcnsldkfj@sdfsifd.ru"),s=Object(J.a)(c,2),i=s[0],j=s[1],u=Object(r.useState)("11111111"),b=Object(J.a)(u,2),O=b[0],p=b[1],x=Object(r.useState)("11111111"),h=Object(J.a)(x,2),m=h[0],f=h[1];return t?Object(l.jsx)(o.a,{to:"/login"}):Object(l.jsx)(Te,{isBusy:e,email:i,password:O,password2:m,emailChange:function(e){n&&a(A("")),j(e.currentTarget.value)},passwordChange:function(e){n&&a(A("")),p(e.currentTarget.value)},password2Change:function(e){n&&a(A("")),f(e.currentTarget.value)},registerPress:function(){a(""!==i&&""!==O&&""!==m?O===m?function(e,t){return function(n){n(A("")),n(L(!0)),I(e,t).then((function(e){n(Pe(!0))})).catch((function(e){n(A(e.response?e.response.data.error:e.message))})).finally((function(){n(L(!1))}))}}(i,O):A("Passwords do not match!"):A("Fill all fields!"))},error:n})}var Re="/login",ke="/register",Ie="/profile",Be="/pwd-restore",Le="/pwd-new",Ae="/test";function De(){return Object(l.jsx)("div",{children:Object(l.jsxs)(o.d,{children:[Object(l.jsx)(o.b,{path:"/",exact:!0,render:function(){return Object(l.jsx)(Ce,{})}}),Object(l.jsx)(o.b,{path:Re,render:function(){return Object(l.jsx)(H,{})}}),Object(l.jsx)(o.b,{path:ke,render:function(){return Object(l.jsx)(we,{})}}),Object(l.jsx)(o.b,{path:Ie,render:function(){return Object(l.jsx)(G,{})}}),Object(l.jsx)(o.b,{path:Be,render:function(){return Object(l.jsx)(M,{})}}),Object(l.jsx)(o.b,{path:Le,render:function(){return Object(l.jsx)(Y,{})}}),Object(l.jsx)(o.b,{path:Ae,render:function(){return Object(l.jsx)(Ce,{})}}),Object(l.jsx)(o.b,{render:function(){return Object(l.jsx)(b,{})}})]})})}function Fe(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{style:{textAlign:"center",color:"red"},children:"FRIDAY"}),Object(l.jsx)(_e,{goTo:Re,text:"Login page"}),Object(l.jsx)(_e,{goTo:ke,text:"Register page"}),Object(l.jsx)(_e,{goTo:Ie,text:"Profile page"}),Object(l.jsx)(_e,{goTo:Be,text:"Restore password page"}),Object(l.jsx)(_e,{goTo:Le,text:"New password page"}),Object(l.jsx)(_e,{goTo:Ae,text:"Test page"}),Object(l.jsx)(_e,{goTo:"Error404",text:"Error page"})]})}function Ge(){var e=Object(d.c)((function(e){return e.app.isInitialized})),t=Object(d.c)((function(e){return e.app.isLogined})),n=Object(d.b)();return Object(r.useEffect)((function(){n((function(e){w().then((function(t){e(D(t.data))})).catch((function(e){})).finally((function(){e({type:"APP/SET-INITIALIZED"})}))}))}),[]),e?Object(l.jsxs)("div",{children:[Object(l.jsx)(Fe,{}),Object(l.jsx)(De,{}),Object(l.jsx)(o.a,{to:t?"/profile":"/login"})]}):Object(l.jsx)("div",{className:"init",children:Object(l.jsx)(y,{})})}var Me=n(26),Ye=n(47),Je={};var Ue={};var Ze=Object(Me.b)({login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;return t.type,e},register:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;return"REGISTER/SET-REGISTER"===t.type?Object(h.a)(Object(h.a)({},e),{},{isRegistered:t.value}):e},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;return t.type,e},passwordNew:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Je,t=arguments.length>1?arguments[1]:void 0;return t.type,e},passwordRestore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,t=arguments.length>1?arguments[1]:void 0;return t.type,e},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/SET-INITIALIZED":return Object(h.a)(Object(h.a)({},e),{},{isInitialized:!0});case"APP/SET-BUSY":return Object(h.a)(Object(h.a)({},e),{},{isBusy:t.value});case"APP/SET-ERROR":return Object(h.a)(Object(h.a)({},e),{},{error:t.errorText});case"APP/SET-LOGIN":return Object(h.a)(Object(h.a)({},e),{},{isLogined:t.value});case"APP/SET-USER-DATA":return Object(h.a)(Object(h.a)({},e),{},{isLogined:!0,userData:Object(h.a)({},t.userData)});default:return e}}}),ze=Object(Me.c)(Ze,Object(Me.a)(Ye.a)),Ke=ze;window.store=ze,s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(d.a,{store:Ke,children:Object(l.jsx)(i.a,{children:Object(l.jsx)(Ge,{})})})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.e0bf4806.chunk.js.map