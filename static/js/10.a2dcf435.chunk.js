(this["webpackJsonplinkedin-clone"]=this["webpackJsonplinkedin-clone"]||[]).push([[10],{102:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=[{name:"\u0410\u0448\u0445\u0430\u0431\u0430\u0434",value:"Ag"},{name:"\u0410\u0445\u0430\u043b",value:"Ah"},{name:"\u0411\u0430\u043b\u043a\u0430\u043d\u044b",value:"Bl"},{name:"\u041c\u0430\u0440\u044b",value:"Mr"},{name:"\u0414\u0430\u0448\u043e\u0433\u0443\u0437",value:"Dz"},{name:"\u041b\u0435\u0431\u0430\u043f",value:"Lb"}]},108:function(e,t,n){"use strict";var a=n(21),c=n(1),r=n(0);t.a=function(e){var t=e.name,n=e.clickFun,o=e.optionsFun,s=e.defaultOpt,i=e.resetFun,l=Object(c.useState)(null),u=Object(a.a)(l,2),d=u[0],b=u[1],j=Object(c.useState)(!1),m=Object(a.a)(j,2),p=m[0],f=m[1],x=Object(c.useState)([]),v=Object(a.a)(x,2),h=v[0],O=v[1],y=Object(c.useState)(""),g=Object(a.a)(y,2),w=g[0],N=g[1],S=Object(c.useState)(!1),k=Object(a.a)(S,2),_=k[0],F=k[1];return Object(c.useEffect)((function(){w.length>=2&&(f(!0),o(w,O,f))}),[w]),Object(c.useEffect)((function(){s&&!_&&(s(b),F(!0))}),[s]),Object(r.jsxs)("div",{style:{color:"rgb(51, 51, 51)"},className:"dropdown position-relative my-2 ",children:[Object(r.jsxs)("button",{role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",style:{borderRadius:"30px",outline:"none",boxShadow:"none"},className:"w-100 btn px-3 d-flex justify-content-between align-items-center border dropdown-toggle truncate-overflow-1",children:[(null===d||void 0===d?void 0:d.name)?d.name:t,Object(r.jsx)("i",{class:"ms-2 bi bi-chevron-down fs-14"})]}),Object(r.jsxs)("ul",{class:"dropdown-menu p-0 mt-1",style:{borderRadius:"10px",width:"90%"},children:[Object(r.jsxs)("div",{className:"my-3 mx-auto d-flex px-2 align-items-center",style:{borderRadius:"10px",width:"90%",background:"rgba(202,204,206, 0.4)"},children:[Object(r.jsx)("i",{class:"bi bi-search text-muted"}),Object(r.jsx)("input",{type:"text",placeholder:"\u041f\u043e\u0438\u0441\u043a...",value:w,onChange:function(e){return N(e.target.value)},className:"form-control border-0  bg-transparent sm-placeholder",style:{outline:"none",boxShadow:"none"},required:!0})]}),p&&Object(r.jsx)("div",{className:"text-center my-2 text-primary",children:Object(r.jsx)("div",{class:"spinner-border",role:"status",children:Object(r.jsx)("span",{class:"visually-hidden",children:"Loading..."})})}),Object(r.jsxs)("div",{style:{overflowY:"scroll",maxHeight:"150px"},children:[d?Object(r.jsx)("div",{className:"px-2",children:Object(r.jsxs)("div",{onClick:function(){b(null),i()},role:"button",style:{borderRadius:"10px",fontWeight:"normal"},className:"dropdown-item truncate-overflow-1 blue-btn justify-content-between align-items-center my-2 py-2 d-flex",children:[Object(r.jsx)("span",{children:d.name}),Object(r.jsx)("i",{class:"bi bi-x-lg"})]})}):"",Array.isArray(h)&&h.length>0&&h.map((function(e){return Object(r.jsx)("div",{onClick:function(){b({name:e.name}),n(e.value)},role:"button",className:"dropdown-item py-2",children:e.name})}))]})]})]})}},132:function(e,t,n){"use strict";var a=n(21),c=n(1),r=n(0);t.a=function(e){var t=e.name,n=e.options,o=e.clickFun,s=e.noSearch,i=e.resetFun,l=Object(c.useState)(null),u=Object(a.a)(l,2),d=u[0],b=u[1],j=Object(c.useState)(""),m=Object(a.a)(j,2),p=m[0],f=m[1];return Object(r.jsxs)("div",{style:{color:"rgb(51, 51, 51)"},className:"dropdown position-relative my-2 ",children:[Object(r.jsxs)("button",{role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",style:{borderRadius:"30px",outline:"none",boxShadow:"none"},className:"w-100 btn px-3 d-flex justify-content-between align-items-center border dropdown-toggle truncate-overflow-1",children:[(null===d||void 0===d?void 0:d.name)?d.name:t,Object(r.jsx)("i",{class:"ms-2 bi bi-chevron-down fs-14"})]}),Object(r.jsxs)("ul",{class:"dropdown-menu p-0 mt-1",style:{borderRadius:"10px",minWidth:"200px"},children:[s?Object(r.jsx)("div",{className:"my-2"}):Object(r.jsxs)("div",{className:"my-3 mx-auto d-flex px-2 align-items-center",style:{borderRadius:"10px",width:"90%",background:"rgba(202,204,206, 0.4)"},children:[Object(r.jsx)("i",{class:"bi bi-search text-muted"}),Object(r.jsx)("input",{type:"text",placeholder:"\u041f\u043e\u0438\u0441\u043a...",value:p,onChange:function(e){return f(e.target.value)},className:"form-control border-0  bg-transparent sm-placeholder",style:{outline:"none",boxShadow:"none"},required:!0})]}),Object(r.jsxs)("div",{style:{overflowY:"scroll",maxHeight:"150px"},children:[d?Object(r.jsx)("div",{className:"px-2",children:Object(r.jsxs)("div",{onClick:function(){b(null),i()},role:"button",style:{borderRadius:"10px",fontWeight:"normal"},className:"dropdown-item truncate-overflow-1 blue-btn justify-content-between align-items-center my-2 py-2 d-flex",children:[Object(r.jsx)("span",{children:d.name}),Object(r.jsx)("i",{class:"bi bi-x-lg"})]})}):"",Array.isArray(n)&&n.length>0&&n.filter((function(e){return e.name.toLowerCase().startsWith(p.toLowerCase())})).map((function(e){return Object(r.jsx)("div",{onClick:function(){b({name:e.name}),o(e.value)},role:"button",className:"dropdown-item py-2",children:e.name})}))]})]})]})}},133:function(e,t,n){"use strict";n(1);var a=n(0);t.a=function(e){var t=e.jobsLength,n=e.setLoadMore,c=e.isLoading;return Object(a.jsx)("div",{className:"row my-5 justify-content-center",children:Object(a.jsx)("button",{className:"btn join-btn mx-auto py-2",style:{width:"400px",borderRadius:"30px",fontWeight:600,fontSize:"16px"},onClick:function(){n(t)},children:c?Object(a.jsx)("div",{class:"spinner-border",role:"status",children:Object(a.jsx)("span",{class:"visually-hidden",children:"Loading..."})}):"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0435\u0449\u0451..."})})}},134:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));var a=n(34),c=function(e){return e.main},r=Object(a.a)([c],(function(e){return e.jobs})),o=Object(a.a)([c],(function(e){return e.freelancers}))},135:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return c}));var a=function(e,t){var n=e.profession,a=e.city,c=e.company,r=e.minSalary,o=e.maxSalary,s=e.date,i=e.order,l="";(console.log("FilterData",e),n&&n>=0)&&(l="".concat(l,"profession=").concat(n,"&&"));a&&(l="".concat(l,"city=").concat(a,"&&"));c&&(l="".concat(l,"company=").concat(c,"&&"));r&&(l="".concat(l,"min_salary=").concat(r,"&&"));o&&(l="".concat(l,"max_salary=").concat(o,"&&"));s&&(l="".concat(l,"date=").concat(s,"&&"));i&&(l="".concat(l,"o=").concat(i,"&&"));t&&(l="".concat(l,"limit=20&&offset=").concat(t));return console.log("CONFIG",l),l},c=function(e,t){var n=e.profession,a=e.city,c=e.full_name,r=e.date,o=e.order,s="";(console.log("FilterData",e),n&&n>=0)&&(s="".concat(s,"profession=").concat(n,"&&"));a&&(s="".concat(s,"city=").concat(a,"&&"));c&&(s="".concat(s,"full_name=").concat(c,"&&"));r&&(s="".concat(s,"date=").concat(r,"&&"));o&&(s="".concat(s,"o=").concat(o,"&&"));t&&(s="".concat(s,"limit=20&&offset=").concat(t));return console.log("CONFIG",s),s}},252:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(21),r=n(1),o=n.n(r),s=n(8),i=n(92),l=n(102),u=n(0);var d=function(e){var t=e.clickFun,n=e.res,o=Object(r.useState)({min:0,max:0}),s=Object(c.a)(o,2),i=s[0],l=s[1],d=Object(r.useState)(!1),b=Object(c.a)(d,2),j=b[0],m=b[1],p=Object(r.useState)(null),f=Object(c.a)(p,2),x=f[0],v=f[1];return Object(r.useEffect)((function(){j&&(0===i.min&&0===i.max?(v(null),t(i.min,i.max)):i.min>=i.max?v("\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0437\u0430\u0440\u043f\u043b\u0430\u0442\u0430 \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u043c\u0435\u043d\u044c\u0448\u0435 \u0447\u0435\u043c \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f!"):i.min<0||i.max<0?v("\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043c\u0435\u043d\u044c\u0448\u0435 \u043d\u0443\u043b\u044f!"):(v(null),t(i.min,i.max)))}),[i]),Object(u.jsxs)("div",{style:{color:"rgb(51, 51, 51)"},className:"dropdown position-relative my-2 ",children:[Object(u.jsxs)("button",{role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",style:{borderRadius:"30px",outline:"none",boxShadow:"none"},className:"w-100 btn px-3 d-flex justify-content-between align-items-center border dropdown-toggle truncate-overflow-1",children:["\u0417\u0430\u0440\u043f\u043b\u0430\u0442\u0430",Object(u.jsx)("i",{class:"ms-2 bi bi-chevron-down fs-14"})]}),Object(u.jsxs)("ul",{class:"dropdown-menu mx-auto p-0 mt-1",style:{borderRadius:"10px",width:"90%"},children:[Object(u.jsxs)("div",{className:"my-3  d-flex flex-column px-2",children:[x?Object(u.jsx)("div",{class:"px-3 text-danger fs-14 py-1 text-center",children:x}):"",Object(u.jsx)("div",{class:"px-3  fs-14 py-1 text-center",children:n}),Object(u.jsx)("label",{htmlFor:"min-range",class:"form-label text-center",children:"\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0437\u0430\u0440\u043f\u043b\u0430\u0442\u0430"}),Object(u.jsx)("div",{className:"p-1",children:Object(u.jsx)("input",{type:"number",name:"range",min:1,max:i.max-1,id:"min-range",value:i.min,onChange:function(e){m(!0),l(Object(a.a)(Object(a.a)({},i),{},{min:Number(e.target.value)}))},className:"form-control px-2 mx-auto  py-1 sm-placeholder ",style:{borderRadius:"7px",outline:"none",boxShadow:"none",width:"90%"},"aria-describedby":"min-range",required:!0})})]}),Object(u.jsxs)("div",{className:"my-3  d-flex flex-column px-2",children:[Object(u.jsx)("label",{for:"customRange1",class:"form-label text-center",children:"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0437\u0430\u0440\u043f\u043b\u0430\u0442\u0430"}),Object(u.jsx)("div",{className:"p-1",children:Object(u.jsx)("input",{type:"number",value:i.max,min:i.min+1,onChange:function(e){m(!0),l(Object(a.a)(Object(a.a)({},i),{},{max:Number(e.target.value)}))},className:"form-control px-2 mx-auto  py-1 sm-placeholder ",style:{borderRadius:"7px",outline:"none",boxShadow:"none",width:"90%"}})})]})]})]})},b=n(108),j=n(132);var m=function(e){var t=e.isLoading,n=e.setClickSearch,c=e.filterData,r=e.setFilterData,o=e.defaultProfession,m=Object(s.b)();return Object(u.jsxs)("div",{className:"bg-white d-flex p-4 mt-3 flex-wrap",style:{boxShadow:"0px 4px 24px -10px rgba(124,124,124,0.88)",borderRadius:"10px"},children:[Object(u.jsxs)("div",{className:"col mx-2 row row-cols-1 row-cols-md-2 row-cols-lg-4 justify-content-center align-items-center",children:[Object(u.jsx)(b.a,{name:"\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u044f",clickFun:function(e){return r(Object(a.a)(Object(a.a)({},c),{},{profession:e}))},optionsFun:function(e,t,n){var a=[];m(Object(i.i)(e)).then((function(e){Array.isArray(e)&&e.length>0&&e.map((function(e){return a.push({name:e.name,value:e.id})})),t(a),n(!1)}))},defaultOpt:o?function(e){e({name:null===o||void 0===o?void 0:o.name})}:null,resetFun:function(){r(Object(a.a)(Object(a.a)({},c),{},{profession:null}))}}),Object(u.jsx)(j.a,{name:"\u041c\u0435\u0441\u0442\u043e",noSearch:!0,clickFun:function(e){return r(Object(a.a)(Object(a.a)({},c),{},{city:e}))},options:l.a,resetFun:function(){r(Object(a.a)(Object(a.a)({},c),{},{city:null}))}}),Object(u.jsx)(b.a,{name:"\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u044f",clickFun:function(e){return r(Object(a.a)(Object(a.a)({},c),{},{company:e}))},optionsFun:function(e,t,n){var a=[];m(Object(i.g)(e)).then((function(e){Array.isArray(e)&&e.length>0&&e.map((function(e){return a.push({name:e.full_name,value:e.user})})),t(a),n(!1)}))},resetFun:function(){r(Object(a.a)(Object(a.a)({},c),{},{company:null}))}}),Object(u.jsx)(d,{name:"\u0417\u0430\u0440\u043f\u043b\u0430\u0442\u0430",clickFun:function(e,t){0===t||0===e?0===t&&0===e?r(Object(a.a)(Object(a.a)({},c),{},{minSalary:null,maxSalary:null})):0===t?r(Object(a.a)(Object(a.a)({},c),{},{minSalary:e,maxSalary:null})):0===e&&r(Object(a.a)(Object(a.a)({},c),{},{minSalary:null,maxSalary:t})):r(Object(a.a)(Object(a.a)({},c),{},{minSalary:e,maxSalary:t}))},res:"".concat((null===c||void 0===c?void 0:c.minSalary)?null===c||void 0===c?void 0:c.minSalary:"0"," - ").concat((null===c||void 0===c?void 0:c.maxSalary)?null===c||void 0===c?void 0:c.maxSalary:"0")}),Object(u.jsx)(j.a,{name:"\u0414\u0430\u0442\u0430",clickFun:function(e){return r(Object(a.a)(Object(a.a)({},c),{},{date:e}))},noSearch:!0,options:[{name:"1 - \u0421\u0435\u0433\u043e\u0434\u043d\u044f",value:"today"},{name:"7 - \u041d\u0435\u0434\u0435\u043b\u044e \u043d\u0430\u0437\u0430\u0434",value:"week"},{name:"30 - \u041c\u0435\u0441\u044f\u0446 \u043d\u0430\u0437\u0430\u0434",value:"month"},{name:"365 - \u0413\u043e\u0434 \u043d\u0430\u0437\u0430\u0434",value:"year"}],resetFun:function(){r(Object(a.a)(Object(a.a)({},c),{},{date:null}))}}),Object(u.jsx)(j.a,{name:"\u041f\u043e\u0440\u044f\u0434\u043e\u043a \u043f\u043e ...",clickFun:function(e){return r(Object(a.a)(Object(a.a)({},c),{},{order:e}))},noSearch:!0,options:[{name:"\u041f\u043e \u0434\u0430\u0442\u0435 - \u0441\u043d\u0430\u0447\u0430\u043b\u0430 \u043d\u043e\u0432\u044b\u0435",value:"-updated"},{name:"\u041f\u043e \u0434\u0430\u0442\u0435 - \u0441\u043d\u0430\u0447\u0430\u043b\u0430 \u0441\u0442\u0430\u0440\u044b\u0435",value:"updated"},{name:"\u041f\u043e \u0437\u0430\u0440\u043f\u043b\u0430\u0442\u0435 - \u0441\u043d\u0430\u0447\u0430\u043b\u0430 \u0431\u043e\u043b\u044c\u0448\u0438\u0435",value:"-salary"},{name:"\u041f\u043e \u0437\u0430\u0440\u043f\u043b\u0430\u0442\u0435 - \u0441\u043d\u0430\u0447\u0430\u043b\u0430 \u043c\u0430\u043b\u0435\u043d\u044c\u043a\u0438\u0435",value:"salary"}],resetFun:function(){r(Object(a.a)(Object(a.a)({},c),{},{order:null}))}})]}),Object(u.jsx)("div",{className:"col-12 mx-auto d-flex justify-content-center mt-3 align-items-center",children:Object(u.jsx)("div",{className:"d-flex justify-content-center",children:Object(u.jsx)("button",{type:"submit",onClick:function(){return n(!0)},className:"btn blue-btn btn-filter-width text-center ",children:t?Object(u.jsx)("div",{class:"spinner-border",role:"status",children:Object(u.jsx)("span",{class:"visually-hidden",children:"Loading..."})}):Object(u.jsx)(u.Fragment,{children:"\u041f\u043e\u0438\u0441\u043a"})})})})]})},p=n(7),f=n(134),x=n(135),v=n(133),h=n(4),O=n.n(h),y=n(9),g=(n(31),n(91)),w=n(23);var N=function(e){var t,n=e.job,a=e.closeModalRef,o=Object(r.useState)(null),l=Object(c.a)(o,2),d=l[0],b=l[1],j=Object(r.useState)(null),m=Object(c.a)(j,2),f=m[0],x=m[1],v=Object(s.b)(),h=Object(p.f)(),N=function(){var e=Object(y.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Sending to ",t,f),e.next=3,a.current.click();case 3:h.push(t);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){n&&v(Object(i.c)(null===n||void 0===n?void 0:n.id)).then((function(e){e&&(b(e),v(Object(w.f)(null===e||void 0===e?void 0:e.company)).then((function(e){x(e)})))}))}),[n]),Object(u.jsx)("div",{class:"modal fade",id:"exampleModal3",tabIndex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(u.jsx)("div",{style:{borderRadius:"10px",border:"0"},class:"modal-dialog   modal-dialog-scrollable ",children:Object(u.jsxs)("div",{class:"modal-content container ",style:{background:"#f5f5f5"},children:[Object(u.jsx)("div",{className:"position-absolute",style:{right:"30px",top:"20px",zIndex:2},children:Object(u.jsx)("button",{type:"button",class:"close-btn btn","data-bs-dismiss":"modal",ref:a,"aria-label":"Close",style:{fontSize:"20px",boxShadow:"none"},children:Object(u.jsx)("i",{class:"bi bi-x-lg"})})}),Object(u.jsxs)("div",{class:"modal-body my-4",children:[Object(u.jsx)("div",{className:"h3 pt-1",children:null===d||void 0===d?void 0:d.name}),0==(null===d||void 0===d?void 0:d.after_meeting)?Object(u.jsxs)("div",{className:"my-2",style:{fontSize:"18px",fontWeight:500},children:["\u043e\u0442"," ",Object(u.jsx)("span",{style:{fontSize:"20px"},children:null===d||void 0===d?void 0:d.min_salary})," ","\u0434\u043e"," ",Object(u.jsx)("span",{style:{fontSize:"20px"},children:null===d||void 0===d?void 0:d.max_salary})," ","\u043c\u0430\u043d\u0430\u0442"]}):Object(u.jsx)("div",{className:"my-2",style:{fontSize:"18px",fontWeight:500},children:"\u041f\u043e\u0441\u043b\u0435 \u0441\u043e\u0431\u0435\u0441\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u044f"}),Object(u.jsxs)("div",{className:"text-gray my-3",style:{fontWeight:500,fontSize:"15px"},children:[Object(u.jsxs)("div",{className:"my-2",children:[Object(u.jsx)("strong",{children:"\u0422\u0440\u0435\u0431\u0443\u0435\u043c\u044b\u0439 \u043e\u043f\u044b\u0442 \u0440\u0430\u0431\u043e\u0442\u044b"}),": \u041e\u0442"," ",null===d||void 0===d?void 0:d.min_experience," \u0434\u043e"," ",null===d||void 0===d?void 0:d.max_experience," \u043b\u0435\u0442"]}),Object(u.jsxs)("div",{className:"my-2",children:[null===d||void 0===d?void 0:d.city,","," ",Object(g.c)(null===d||void 0===d?void 0:d.updated)," \u0434\u043d\u0435\u0439 \u043d\u0430\u0437\u0430\u0434"]}),Object(u.jsxs)("div",{className:"my-2",children:[null===d||void 0===d?void 0:d.work_time," \u0447\u0430\u0441\u043e\u0432 \u0440\u0430\u0431\u043e\u0442\u044b,"," ",null===d||void 0===d||null===(t=d.profession)||void 0===t?void 0:t.name," "]})]}),Object(u.jsxs)("div",{className:" my-2 py-2",children:[Object(u.jsxs)("div",{className:"row my-2 fs-6",style:{fontWeight:500},children:[Object(u.jsx)("div",{className:"col-auto ms-2 d-flex justify-content-center",children:Object(u.jsx)("i",{className:"bi bi-building fs-5"})}),Object(u.jsxs)("div",{onClick:function(){return N("/company/".concat(null===f||void 0===f?void 0:f.slug,"/").concat(null===f||void 0===f?void 0:f.user))},role:"button",className:"col text-blue text-decoration-underline",children:[null===f||void 0===f?void 0:f.full_name," (",null===f||void 0===f?void 0:f.company_type,")"]})]}),Object(u.jsxs)("div",{className:"row my-2  fs-6",children:[Object(u.jsx)("div",{className:"col-auto ms-2 d-flex justify-content-center",children:Object(u.jsx)("i",{className:"bi bi-geo-alt-fill fs-5"})}),Object(u.jsx)("div",{className:"col",children:null===f||void 0===f?void 0:f.address})]}),Object(u.jsxs)("div",{className:"row my-2  fs-6",children:[Object(u.jsx)("div",{className:"col-auto ms-2 d-flex justify-content-center",children:Object(u.jsx)("i",{class:"bi bi-headset fs-5"})}),Object(u.jsxs)("div",{className:"col",children:["+",null===f||void 0===f?void 0:f.phone_number]})]})]}),Object(u.jsx)("p",{className:"my-4",style:{fontSize:"15px"},children:null===d||void 0===d?void 0:d.description}),Object(u.jsx)("div",{className:"h6 ",children:"\u041e \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438:"}),Object(u.jsx)("p",{style:{fontSize:"15px"},children:null===f||void 0===f?void 0:f.description}),Object(u.jsx)("div",{className:"h6 ",children:"\u041c\u044b \u0436\u0434\u0451\u043c \u043e\u0442 \u043a\u0430\u043d\u0434\u0438\u0434\u0430\u0442\u0430:"}),Object(u.jsx)("p",{style:{fontSize:"15px"},children:null===d||void 0===d?void 0:d.skills})]})]})})})},S=n(5);var k=function(e){var t=e.name,n=e.company,a=e.min_salary,c=e.max_salary,r=e.after_meeting,o=e.profession,s=e.city,i=e.updated,l=e.clickFun;return Object(u.jsx)("div",{className:"px-4 px-md-3 my-2 ",children:Object(u.jsxs)("div",{className:"row bg-white p-2 py-3 flex-wrap",style:{boxShadow:"0px 4px 24px -10px rgba(124,124,124,0.88)",borderRadius:"10px"},children:[Object(u.jsx)("div",{className:"col-auto d-flex align-items-center justify-content-center",children:Object(u.jsx)("div",{onClick:function(){return l()},role:"button",style:{width:"55px",height:"55px",borderRadius:"5px",backgroundImage:"url(".concat(null===n||void 0===n?void 0:n.logo,")")},className:"small-section"})}),Object(u.jsxs)("div",{className:"col d-flex flex-column",children:[Object(u.jsx)("div",{onClick:function(){return l()},role:"button",className:"fs-6 truncate-overflow-1",style:{fontWeight:500},children:t}),Object(u.jsxs)(S.b,{to:"/company/".concat(null===n||void 0===n?void 0:n.slug,"/").concat(null===n||void 0===n?void 0:n.id),className:"truncate-overflow-1 text-blue text-decoration-none",style:{fontSize:"13px",fontWeight:500},children:[null===n||void 0===n?void 0:n.full_name," "]}),Object(u.jsx)(S.b,{to:"/jobs/".concat(null===o||void 0===o?void 0:o.slug,"/").concat(o.id),style:{fontSize:"13px",fontWeight:500},className:"truncate-overflow-1 text-decoration-none text-muted",children:null===o||void 0===o?void 0:o.name})]}),Object(u.jsxs)("div",{className:"col-12 mt-2 d-flex justify-content-between align-items-center",children:[Object(u.jsxs)("div",{className:"mt-1 mb-1 fs-14",children:[Object(u.jsxs)("div",{children:[s,", \u0422\u0443\u0440\u043a\u043c\u0435\u043d\u0438\u0441\u0442\u0430\u043d"]}),Object(u.jsxs)("div",{className:"text-muted",children:[Object(g.c)(i)," \u0434\u043d\u0435\u0439 \u043d\u0430\u0437\u0430\u0434"]})]}),Object(u.jsx)("div",{className:"h6 d-flex align-items-center flex-wrap justify-content-center mb-1 mt-2 mt-md-0",children:1==r?Object(u.jsx)("span",{className:"fs-14",children:"\u041f\u043e\u0441\u043b\u0435 \u0441\u043e\u0431\u0435\u0441\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u044f"}):Object(u.jsxs)(u.Fragment,{children:[a," - ",c,Object(u.jsx)("small",{className:"ms-1",children:"TMT"})]})})]})]})})};var _=function(e){var t=e.jobs,n=e.setModalItem,a=e.setClickModalItem;return Object(u.jsx)("div",{className:"row row-cols-1 row-cols-md-2 row-cols-lg-3  ",children:Array.isArray(t)&&t.length>=1&&t.map((function(e){return Object(u.jsx)(k,{clickFun:function(){n(e),a(!0)},name:e.name,profession:e.profession,company:e.company,min_salary:null===e||void 0===e?void 0:e.min_salary,max_salary:null===e||void 0===e?void 0:e.max_salary,after_meeting:null===e||void 0===e?void 0:e.after_meeting,city:e.city,updated:e.updated},e.id)}))})},F=function(e){return{jobs:Object(f.b)(e),next:e.main.next,count:e.main.count}};t.default=function(){var e=Object(r.useState)({profession:null,city:null,company:null,minSalary:null,maxSalary:null,date:null,order:null}),t=Object(c.a)(e,2),n=t[0],l=t[1],d=Object(r.useState)(!1),b=Object(c.a)(d,2),j=b[0],f=b[1],h=Object(r.useState)(null),O=Object(c.a)(h,2),y=O[0],g=O[1],w=Object(r.useState)(!1),S=Object(c.a)(w,2),k=S[0],C=S[1],R=Object(s.c)(F),A=R.jobs,L=R.next,M=R.count,z=Object(r.useState)(null),D=Object(c.a)(z,2),W=D[0],I=D[1],E=Object(p.h)(),T=E.job_slug,Y=E.job_id,J=Object(s.b)(),q=o.a.createRef(),P=o.a.createRef(),G=Object(r.useState)(null),H=Object(c.a)(G,2),B=H[0],K=H[1],Q=Object(r.useState)(!1),U=Object(c.a)(Q,2),V=U[0],X=U[1];Object(r.useEffect)((function(){B&&V&&(q.current.click(),X(!1))}),[V]);var Z=function(){C(!0);var e=Object(x.b)(n,y);y?J(Object(i.d)(e,A)).then((function(e){C(!1),g(null)})):J(Object(i.d)(e)).then((function(e){C(!1)}))};return Object(r.useEffect)((function(){window.scrollTo({top:0,behavior:"smooth"}),Y?J(Object(i.a)(Y)).then((function(e){I(e),l(Object(a.a)(Object(a.a)({},n),{},{profession:Y})),f(!0)})):Z()}),[T,Y]),Object(r.useEffect)((function(){j&&(f(!1),Z())}),[n,j]),Object(r.useEffect)((function(){y&&Z()}),[y]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(N,{job:B,closeModalRef:P}),Object(u.jsx)("div",{ref:q,"data-bs-toggle":"modal","data-bs-target":"#exampleModal3"}),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(m,{isLoading:k,setClickSearch:f,filterData:n,setFilterData:l,defaultProfession:W}),Object(u.jsxs)("div",{className:"my-5",children:[Object(u.jsxs)("div",{className:"h3 mb-4 text-center",children:["\u0420\u0430\u0431\u043e\u0442\u0430 ",M?Object(u.jsxs)(u.Fragment,{children:[" - ",M]}):" - 0"]}),Object(u.jsx)(_,{jobs:A,setModalItem:K,setClickModalItem:X}),L?Object(u.jsx)(v.a,{jobsLength:null===A||void 0===A?void 0:A.length,setLoadMore:g,isLoading:k}):""]})]})]})}},91:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return c})),t.a=function(e){var t=new Date(e),n=t.getFullYear().toString(),a=(t.getMonth()+1).toString(),c=t.getDate().toString(),r=a.split(""),o=c.split("");return n+"-"+(r[1]?a:"0"+r[0])+"-"+(o[1]?c:"0"+o[0])};var a=function(e){var t=new Date,n=new Date(e),a=Math.abs(t-n);return Math.ceil(a/864e5)},c=function(e){var t=new Date,n=new Date(e),a=t.getFullYear()-n.getFullYear(),c=t.getMonth()-n.getMonth();return(c<0||0===c&&t.getDate()<n.getDate())&&a--,a}},92:function(e,t,n){"use strict";n.d(t,"d",(function(){return u})),n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return b})),n.d(t,"i",(function(){return j})),n.d(t,"g",(function(){return m})),n.d(t,"h",(function(){return p})),n.d(t,"c",(function(){return f})),n.d(t,"e",(function(){return x})),n.d(t,"f",(function(){return v}));var a=n(4),c=n.n(a),r=n(9),o=n(3),s=(n(17),n(30),n(11)),i=n.n(s),l=n(18),u=function(e,t){return function(){var n=Object(r.a)(c.a.mark((function n(a){var r;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.a.get("".concat("https://linkedinbatyok.pythonanywhere.com/api/v0","/jobs/?").concat(e),l.b);case 3:return r=n.sent,Array.isArray(t)?a({type:o.h,old_jobs:t,new_jobs:r.data.results,next:r.data.next,prev:r.data.prev,count:r.data.count}):a({type:o.f,payload:r.data.results,next:r.data.next,prev:r.data.prev,count:r.data.count}),n.abrupt("return",r.data.results);case 8:return n.prev=8,n.t0=n.catch(0),n.abrupt("return");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()},d=function(e,t){return function(){var n=Object(r.a)(c.a.mark((function n(a){var r;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("Loading freelancers"),n.prev=1,n.next=4,i.a.get("".concat("https://linkedinbatyok.pythonanywhere.com","/credentials/freelancer/?").concat(e),l.b);case 4:return r=n.sent,Array.isArray(t)?a({type:o.g,old_data:t,new_data:r.data.results,next:r.data.next,prev:r.data.prev,count:r.data.count}):a({type:o.e,payload:r.data.results,next:r.data.next,prev:r.data.prev,count:r.data.count}),n.abrupt("return",r.data.results);case 9:return n.prev=9,n.t0=n.catch(1),n.abrupt("return",n.t0);case 12:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e){return n.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(r.a)(c.a.mark((function t(n){var a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("Loading profession"),t.prev=1,t.next=4,i.a.get("".concat("https://linkedinbatyok.pythonanywhere.com/api/v0","/professions/").concat(e,"/"),l.b);case 4:return a=t.sent,t.abrupt("return",a.data);case 8:t.prev=8,t.t0=t.catch(1),console.log("Not authenticated");case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},j=function(e){return function(){var t=Object(r.a)(c.a.mark((function t(n){var a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("Searching professions",e),t.prev=1,t.next=4,i.a.get("".concat("https://linkedinbatyok.pythonanywhere.com/api/v0","/professions/?search=").concat(e),l.b);case 4:return a=t.sent,t.abrupt("return",a.data.results);case 8:t.prev=8,t.t0=t.catch(1),console.log("Not authenticated");case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(r.a)(c.a.mark((function t(n){var a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("Searching companies",e),t.prev=1,t.next=4,i.a.get("".concat("https://linkedinbatyok.pythonanywhere.com","/credentials/search/company/?search=").concat(e),l.b);case 4:return a=t.sent,t.abrupt("return",a.data.results);case 8:t.prev=8,t.t0=t.catch(1),console.log("Not authenticated");case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(r.a)(c.a.mark((function t(n){var a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("Searching freelancers",e),t.prev=1,t.next=4,i.a.get("".concat("https://linkedinbatyok.pythonanywhere.com","/credentials/search/freelancer/?search=").concat(e),l.b);case 4:return a=t.sent,t.abrupt("return",a.data.results);case 8:t.prev=8,t.t0=t.catch(1),console.log("Not authenticated");case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},f=function(e){return function(){var t=Object(r.a)(c.a.mark((function t(n){var a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("Loading job",e),t.prev=1,t.next=4,i.a.get("".concat("https://linkedinbatyok.pythonanywhere.com/api/v0","/jobs/").concat(e,"/"),l.b);case 4:return a=t.sent,t.abrupt("return",a.data);case 8:t.prev=8,t.t0=t.catch(1);case 10:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},x=function(e,t){return function(){var n=Object(r.a)(c.a.mark((function n(a){var r,o,s;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(console.log("Post job",e,t),!localStorage.getItem("access")){n.next=17;break}return r=JSON.stringify({name:e.name,profession:e.profession,city:e.city,min_salary:e.min_salary,max_salary:e.max_salary,after_meeting:e.after_meeting,min_experience:e.min_experience,max_experience:e.max_experience,work_time:e.work_time,skills:e.skills,description:e.description}),o={headers:{"Content-Type":"application/json",Authorization:"JWT ".concat(localStorage.getItem("access")),Accept:"application/json"}},n.prev=4,n.next=7,i.a.post("".concat("https://linkedinbatyok.pythonanywhere.com/api/v0","/jobs/"),r,o);case 7:return s=n.sent,console.log("Sended",s.data),n.abrupt("return",s);case 12:return n.prev=12,n.t0=n.catch(4),n.abrupt("return",n.t0);case 15:n.next=18;break;case 17:console.log("No access token");case 18:case"end":return n.stop()}}),n,null,[[4,12]])})));return function(e){return n.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(r.a)(c.a.mark((function t(n){var a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.get("".concat("https://linkedinbatyok.pythonanywhere.com","/credentials/freelancer/").concat(e,"/"),l.b);case 3:return a=t.sent,t.abrupt("return",a.data);case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=10.a2dcf435.chunk.js.map