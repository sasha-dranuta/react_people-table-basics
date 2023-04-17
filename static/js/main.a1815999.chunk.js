(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var c=n(10),r=n(5),a=(n(21),n(22),n(2)),s=n(6),j=n.n(s),i=n(0),o=function(e){var t=e.to,n=e.title;return Object(i.jsx)(r.c,{className:function(e){var t=e.isActive;return j()("navbar-item",{"has-background-grey-lighter":t})},to:t,children:n})},l=function(){return Object(i.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"navbar-brand",children:[Object(i.jsx)(o,{to:"/",title:"Home"}),Object(i.jsx)(o,{to:"/people",title:"People"})]})})})},b=n(8),d=n(12),h=n(11),u=n(4),O=n(1);function x(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var p=function(e){var t=e.person,n=t.slug,c=t.name,a=t.sex;return Object(i.jsx)(r.b,{to:"/people/".concat(n),className:j()({"has-text-danger":"f"===a}),children:c})},m=function(e){var t=e.person,n=e.isSelected,c=t.died,r=t.fatherName,a=t.born,s=t.father,o=t.slug,l=t.mother,b=t.sex,d=t.motherName;return Object(i.jsxs)("tr",{"data-cy":"person",className:j()({"has-background-warning":n}),children:[Object(i.jsx)("td",{children:Object(i.jsx)(p,{person:t})}),Object(i.jsx)("td",{children:b}),Object(i.jsx)("td",{children:a}),Object(i.jsx)("td",{children:c}),Object(i.jsx)("td",{children:l?Object(i.jsx)(p,{person:l}):d||"-"}),Object(i.jsx)("td",{children:s?Object(i.jsx)(p,{person:s}):r||"-"})]},o)},f=function(e){var t=e.people,n=e.selectedPerson,c=function(e){return e.slug===n};return Object(i.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Name"}),Object(i.jsx)("th",{children:"Sex"}),Object(i.jsx)("th",{children:"Born"}),Object(i.jsx)("th",{children:"Died"}),Object(i.jsx)("th",{children:"Mother"}),Object(i.jsx)("th",{children:"Father"})]})}),Object(i.jsx)("tbody",{children:t.map((function(e){return Object(i.jsx)(m,{person:e,isSelected:c(e)})}))})]})},v=(n(24),function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})}),g=function(){var e=Object(O.useState)(!1),t=Object(u.a)(e,2),n=t[0],c=t[1],r=Object(O.useState)(""),s=Object(u.a)(r,2),j=s[0],o=s[1],l=Object(O.useState)([]),p=Object(u.a)(l,2),m=p[0],g=p[1],N=Object(a.h)().personSlug,y=void 0===N?"":N,w=function(){var e=Object(h.a)(Object(b.a)().mark((function e(){var t,n;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.prev=1,e.next=4,x();case 4:t=e.sent,n=t.map((function(e){var n=Object(d.a)({},e),c=t.find((function(t){return t.name===e.fatherName})),r=t.find((function(t){return t.name===e.motherName}));return c&&(n.father=c),r&&(n.mother=r),n})),g(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),o(e.t0.message);case 12:return e.prev=12,c(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})));return function(){return e.apply(this,arguments)}}();return Object(O.useEffect)((function(){w()}),[]),Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("h1",{className:"title",children:"People Page"}),Object(i.jsx)("div",{className:"block",children:Object(i.jsxs)("div",{className:"box table-container",children:[n&&Object(i.jsx)(v,{}),m.length>0&&!n&&!j&&Object(i.jsx)(f,{people:m,selectedPerson:y}),0===m.length&&!n&&!j&&Object(i.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),j&&Object(i.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"})]})})]})},N=function(){return Object(i.jsx)("h1",{className:"title",children:"Page not found"})},y=function(){return Object(i.jsx)("h1",{className:"title",children:"Home Page"})},w=(n(25),function(){return Object(i.jsxs)("div",{"data-cy":"app",children:[Object(i.jsx)(l,{}),Object(i.jsx)("main",{className:"section",children:Object(i.jsxs)(a.d,{children:[Object(i.jsx)(a.b,{path:"/",element:Object(i.jsx)(y,{})}),Object(i.jsx)(a.b,{path:"/home",element:Object(i.jsx)(a.a,{to:"/",replace:!0})}),Object(i.jsxs)(a.b,{path:"people",children:[Object(i.jsx)(a.b,{index:!0,element:Object(i.jsx)(g,{})}),Object(i.jsx)(a.b,{path:":slug",element:Object(i.jsx)(g,{})})]}),Object(i.jsx)(a.b,{path:"*",element:Object(i.jsx)(N,{})})]})})]})});Object(c.createRoot)(document.getElementById("root")).render(Object(i.jsx)(r.a,{children:Object(i.jsx)(w,{})}))}},[[26,1,2]]]);
//# sourceMappingURL=main.a1815999.chunk.js.map