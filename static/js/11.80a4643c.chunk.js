(this["webpackJsonplinkedin-clone"]=this["webpackJsonplinkedin-clone"]||[]).push([[11],{136:function(e,t,s){"use strict";s(1);var c=s(0);t.a=function(){return Object(c.jsxs)("div",{className:"container  text-gray fw-bold px-2 px-md-5",style:{fontSize:"12px"},children:[Object(c.jsxs)("div",{className:"row  d-inline-flex flex-md-column  flex-lg-row col-12 col-md-6 col-lg-auto me-2",children:[Object(c.jsx)("div",{className:"col-auto mt-1",children:"Linkedin"}),Object(c.jsx)("div",{className:"col-auto mt-1",children:"About"}),Object(c.jsx)("div",{className:"col-auto mt-1",children:"Accessibility"}),Object(c.jsx)("div",{className:"col-auto mt-1",children:"User Agreement"}),Object(c.jsx)("div",{className:"col-auto mt-1",children:"Privacy Policy"})]}),Object(c.jsxs)("div",{className:"row mt-2 d-inline-flex flex-md-column flex-lg-row  col-md-6 col-lg-auto",children:[Object(c.jsx)("div",{className:"col-auto mt-1",children:"Cookie Policy"}),Object(c.jsx)("div",{className:"col-auto mt-1",children:"Copyright Policy"}),Object(c.jsx)("div",{className:"col-auto mt-1",children:"Brand Policy "}),Object(c.jsx)("div",{className:"col-auto mt-1",children:"Guest "}),Object(c.jsx)("div",{className:"col-auto mt-1",children:"Controls Community "}),Object(c.jsx)("div",{className:"col-auto mt-1",children:"Guidelines "})]})]})}},240:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return j}));var c=s(22),l=s(2),a=s(21),n=s(1),i=s(5),o=s(136),r=s(23),d=s(8),m=s(17),b=s(0);function j(){var e=Object(n.useState)({username:"",password:""}),t=Object(a.a)(e,2),s=t[0],j=t[1],u=Object(n.useState)(!1),x=Object(a.a)(u,2),h=x[0],p=x[1],O=Object(n.useState)(null),f=Object(a.a)(O,2),v=f[0],y=f[1],N=s.username,g=s.password,w=function(e){return j(Object(l.a)(Object(l.a)({},s),{},Object(c.a)({},e.target.name,e.target.value)))};Object(n.useEffect)((function(){return function(){j({username:"",password:""})}}),[]);var k=Object(d.b)(),S=function(e){e.preventDefault(),p(!0),k(Object(r.h)(N,g)).then((function(e){p(!1),e===m.error4?y("\u041d\u0435\u0442 \u0442\u0430\u043a\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0438\u043b\u0438 \u043d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c"):y(null)}))};return Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"d-flex  flex-column py-3 align-items-start justify-content-md-center align-items-md-center",children:[Object(b.jsx)(i.b,{to:"/",className:"mx-md-0 mt-2 mb-3 ps-4 ps-md-0",children:Object(b.jsx)("img",{style:{width:"135px",height:"34px"},src:"/linkedin/images/big-logo.svg",alt:"Logo"})}),Object(b.jsx)("div",{className:"h2 py-2 ps-4 ps-md-0",style:{fontWeight:500,fontSize:"32px"},children:"\u0412\u043e\u0439\u0442\u0438"}),Object(b.jsx)("div",{className:"p ps-4 ps-md-0",children:"\u0421\u043b\u0435\u0434\u0438\u0442\u0435 \u0437\u0430 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f\u043c\u0438 \u0432 \u0441\u0432\u043e\u0435\u0439 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0439 \u0441\u0435\u0442\u0438"}),Object(b.jsxs)("form",{onSubmit:function(e){return S(e)},className:"bg-white p-4 col-md-8 col-lg-4 my-4",style:{borderRadius:"10px"},children:[v&&Object(b.jsx)("div",{className:"mb-4 text-danger text-center",children:Object(b.jsxs)("strong",{children:[v," !"]})}),Object(b.jsxs)("div",{className:"mb-4",children:[Object(b.jsxs)("label",{htmlFor:"exampleInputEmail1",className:"form-label text-gray py-0 fw-bold",style:{fontSize:"14px"},children:[Object(b.jsx)("i",{className:"bi bi-info-lg fs-6 me-2"}),"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f ",Object(b.jsx)("small",{children:"(\u043b\u043e\u0433\u0438\u043d)"})]}),Object(b.jsx)("input",{type:"text",name:"username",id:"loginUsername",value:N,placeholder:"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440: adidas",onChange:function(e){return w(e)},required:!0,className:"form-control sm-placeholder ".concat(v?"is-invalid":""),style:{borderRadius:"7px"},"aria-describedby":"emailHelp"})]}),Object(b.jsxs)("div",{className:"mb-3 has-validation",children:[Object(b.jsxs)("label",{htmlFor:"exampleInputPassword1",className:"form-label text-gray fw-bold py-0 ",style:{fontSize:"14px"},children:[Object(b.jsx)("i",{className:"bi bi-unlock me-2 fs-6"}),"\u041f\u0430\u0440\u043e\u043b\u044c"]}),Object(b.jsx)("input",{type:"password",className:"form-control sm-placeholder ".concat(v?"is-invalid":""),style:{borderRadius:"7px"},name:"password",value:g,placeholder:"\u0412\u0430\u0448 \u0441\u0435\u043a\u0440\u0435\u0442\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c",id:"loginPassword",onChange:function(e){return w(e)},required:!0,onKeyDown:function(e){"Enter"===e.key&&S(e)}})]}),Object(b.jsx)("div",{className:"my-2",children:Object(b.jsx)(i.b,{to:"/",className:"text-decoration-none",style:{fontWeight:500},children:"\u0417\u0430\u0431\u044b\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c?"})}),Object(b.jsx)("button",{type:"submit",className:"btn blue-btn my-2 text-center w-100 ",children:h?Object(b.jsx)("div",{className:"spinner-border text-white",role:"status",children:Object(b.jsx)("span",{className:"visually-hidden",children:"Loading..."})}):Object(b.jsx)(b.Fragment,{children:"\u0412\u043e\u0439\u0442\u0438"})}),Object(b.jsx)("div",{className:"divider my-4",style:{fontSize:"12px",color:"rgba(0, 0, 0, 0.9)"},children:"\u0418\u041b\u0418"}),Object(b.jsxs)("button",{type:"submit",className:"btn sign-btn w-100 px-4",children:[Object(b.jsx)("i",{className:"bi bi-google me-2"}),"\u0412\u043e\u0439\u0442\u0438 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e"]}),Object(b.jsxs)("div",{className:"p my-3 text-center",children:["\u041d\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b \u0432 LinkedIn?"," ",Object(b.jsx)(i.b,{to:"/signup",className:"text-decoration-none fw-bold",children:"\u041f\u0440\u0438\u0441\u043e\u0435\u0434\u0438\u043d\u0438\u0442\u0441\u044f"})]})]}),Object(b.jsx)(o.a,{})]})})}}}]);
//# sourceMappingURL=11.80a4643c.chunk.js.map