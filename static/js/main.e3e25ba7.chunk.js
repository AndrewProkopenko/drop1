(this["webpackJsonpvice-app"]=this["webpackJsonpvice-app"]||[]).push([[0],{31:function(e,t,a){e.exports=a(63)},54:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(11),r=a(14),m=a.n(r),s=a(28),i=a(10),o=a(3),u=a(1),d=a(29),E=a.n(d).a.create({baseURL:"https://andrewprokopenko.github.io/drop1-admin/api"});E.interceptors.response.use((function(e){return e.data?e.data:e}),(function(e){return console.log(e),Promise.reject(e.response.data)}));var p=E;a(54);var v=function(e){var t=e.linksList;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{className:"sura-header"},l.a.createElement("div",{className:"container"},l.a.createElement("nav",{className:"navbar-expand-sm"},l.a.createElement("div",{className:" navbar-collapse justify-content-between"},l.a.createElement("ul",{className:"navbar-nav "},l.a.createElement("li",{className:"nav-item"},l.a.createElement(o.c,{exact:!0,className:" sura-header-link",to:"/"},"\u0413\u043b\u0430\u0432\u043d\u0430\u044f")),t.length>0&&t.map((function(e,t){return l.a.createElement("li",{key:t,className:"nav-item"},l.a.createElement(o.c,{className:" sura-header-link",to:"/".concat(e.slug)},e.title),e["list-service-menu"]&&e["list-service-menu"].length>0&&l.a.createElement("ul",null,e["list-service-menu"].map((function(t){return l.a.createElement("li",{key:t.id,className:"nav-item"},l.a.createElement(o.c,{exact:!0,to:"/".concat(e.slug,"/").concat(t.slug)},t.title))}))),e["list-brands-menu"]&&e["list-brands-menu"].length>0&&l.a.createElement("ul",{className:"second-list"},e["list-brands-menu"].map((function(t){return l.a.createElement("li",{key:t.id,className:"nav-item"},l.a.createElement(o.c,{exact:!0,to:"/".concat(e.slug,"/").concat(t.slug)},t.title))}))))}))))))))};var f=function(){return l.a.createElement("footer",{role:"contentinfo",className:"site-footer"},l.a.createElement("div",{className:"footer-bottom-panel"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("div",{className:"site-name"},"Copyright \xa9 2020 ")))))},h=a(12),g=a.n(h);var b=function(e){var t="https://andrewprokopenko.github.io/drop1-admin/api";return l.a.createElement(l.a.Fragment,null,e.data&&l.a.createElement("div",{className:"site-container"},l.a.createElement(g.a,null,l.a.createElement("title",null,e.data.meta.title),l.a.createElement("meta",{name:"description",content:e.data.meta.description})),l.a.createElement("main",{role:"main"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row mt-3"},e.linksList.map((function(e,a){return l.a.createElement("div",{key:a,className:"col-12 col-sm- col-lg-3"},l.a.createElement("div",{className:"card d-flex flex-column align-items-center pt-3 h-100"},l.a.createElement("img",{src:"".concat(t,"/images/").concat(e.img),className:"card-img-top mt-2 img-60",alt:"...",style:{width:60,height:60}}),l.a.createElement("div",{className:"card-body"},l.a.createElement("h2",{className:"card-title text-center"},e.title),l.a.createElement("h3",{className:"card-subtitle mb-2 text-muted d-flex flex-column"},e["list-service-menu"]&&e["list-service-menu"].map((function(t,a){return l.a.createElement(o.c,{key:a,to:"/".concat(e.slug,"/").concat(t.slug)},t.title)}))))))}))),l.a.createElement("h2",{className:"text-center mt-4"},"\u041d\u0430\u0448\u0438 \u043f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430"),l.a.createElement("div",{className:"row mt-3"},e.data.items.map((function(e,a){return l.a.createElement("div",{key:a,className:"col-12 col-sm- col-lg-3"},l.a.createElement("div",{className:"card h-100 p-3 d-flex   flex-column align-items-center"},l.a.createElement("img",{src:"".concat(t,"/images/").concat(e.img),className:"card-img-top img-60",alt:"...",style:{width:100,height:100}}),l.a.createElement("div",{className:"card-body"},l.a.createElement("h2",{className:"card-title text-center"},e.title))))}))),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.data.content}})))),l.a.createElement("span",null))};var N=function(e){return l.a.createElement("div",{className:"breadcrumb-bg"},l.a.createElement("nav",{className:"container"},l.a.createElement("ol",{className:"breadcrumb bg-none px-0"},e.items.map((function(e,t){return l.a.createElement("li",{key:t,className:"breadcrumb-item"},!e.lastChild&&l.a.createElement(o.b,{to:"/".concat(e.slug)},e.name),e.lastChild&&l.a.createElement("span",null,e.name))})))))};var k=function(e){var t=e.data.content,a=e.data.meta,n=e.breadInner||{},c=[{name:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f",slug:""}];return n.hasOwnProperty("title")&&c.push({name:n.title,slug:n.slug}),c.push({name:e.data.title,slug:e.data.slug,lastChild:!0}),l.a.createElement(l.a.Fragment,null,l.a.createElement(g.a,null,l.a.createElement("title",null,a.title),l.a.createElement("meta",{name:"description",content:a.description})),l.a.createElement(N,{items:c}),l.a.createElement("main",{role:"main"},l.a.createElement("div",{className:"container",dangerouslySetInnerHTML:{__html:t}})))};var y=function(){return l.a.createElement("div",{className:"container container-404 "},l.a.createElement("h1",null,l.a.createElement("small",null,"\u0443\u043f\u0441,")," ",l.a.createElement("b",null," 404 ")),l.a.createElement(o.b,{to:"/"},l.a.createElement("span",null,"\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e")))};function x(){var e=Object(u.f)().pathname;return l.a.useEffect((function(){window.scrollTo({top:0,behavior:"smooth"})}),[e]),null}var w=function(){var e=l.a.useState([]),t=Object(i.a)(e,2),a=t[0],n=t[1],c=l.a.useState([]),r=Object(i.a)(c,2),d=r[0],E=r[1],h=l.a.useState([]),g=Object(i.a)(h,2),N=g[0],w=g[1],j=l.a.useState(!1),O=Object(i.a)(j,2),L=O[0],I=O[1];return l.a.useEffect((function(){function e(){return(e=Object(s.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get("/data/database.json").then((function(e){console.log(e),I(!0),n(e),E([e["remont-kompyutepov"],e["remont-noutbukov"],e["remont-monitorov"],e["nastrojka-po"],e.contacts]),w([e["remont-kompyutepov"],e["remont-noutbukov"],e["remont-monitorov"],e["nastrojka-po"]])}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),l.a.createElement("div",{className:"d-flex flex-column h-100"},!L&&l.a.createElement("h3",{className:"my-5 text-center"},"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."),L&&l.a.createElement(o.a,{basename:"/drop1"},l.a.createElement(x,null),l.a.createElement(v,{linksList:d}),l.a.createElement(u.c,null,l.a.createElement(u.a,{exact:!0,path:"/",render:function(){return l.a.createElement(b,{linksList:N,data:a["main-list"]})}}),d.map((function(e,t){return l.a.createElement(u.a,{key:t,exact:!0,path:"/".concat(e.slug),render:function(){return l.a.createElement(k,{linksList:d,data:e})}})})),d.map((function(e){return e["list-service-menu"]&&e["list-service-menu"].length>0&&e["list-service-menu"].map((function(t,a){return l.a.createElement(u.a,{key:a,path:"/".concat(e.slug,"/").concat(t.slug),render:function(){return l.a.createElement(k,{breadInner:e,data:t})}})}))})),d.map((function(e){return e["list-brands-menu"]&&e["list-brands-menu"].length>0&&e["list-brands-menu"].map((function(t,a){return l.a.createElement(u.a,{key:a,path:"/".concat(e.slug,"/").concat(t.slug),render:function(){return l.a.createElement(k,{breadInner:e,data:t})}})}))})),l.a.createElement(u.a,{path:"*",component:y})),l.a.createElement(f,null)))},j=document.getElementById("root");j.hasChildNodes()?Object(c.hydrate)(l.a.createElement(w,null),j):Object(c.render)(l.a.createElement(w,null),j)}},[[31,1,2]]]);
//# sourceMappingURL=main.e3e25ba7.chunk.js.map