(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n(13)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),o=n(4),a=n.n(o),i=(n(11),function(){return c.a.createElement("h1",null,"My Todo List")}),l=n(2),u=n(1),p=function(e){return c.a.createElement("div",{className:"item ".concat(e.completed?"complete":""),onClick:e.dispatch},e.item)},s=n(5);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var O=function(e,t){switch(t.type){case"ADD":return t.payload.length>0?[].concat(Object(s.a)(e),[{item:t.payload,completed:!1,id:Date.now()}]):e;case"TOGGLE_COMPLETED":return e.map((function(e){return e.id!==t.payload.id?e:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{completed:!t.payload.completed})}));case"REMOVE_COMPLETED":return e.filter((function(e){return!e.completed}));default:return e}},f=[{item:"Learn about reducers",completed:!1,id:3892987589}],b=Object(r.createContext)(),d=function(e){var t=Object(r.useReducer)(O,f),n=Object(u.a)(t,2),o=n[0],a=n[1];return c.a.createElement(b.Provider,{value:[o,a]},e.children)};function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j=function(){var e=Object(r.useContext)(b),t=Object(u.a)(e,2),n=t[0],o=t[1];return c.a.createElement("div",{className:"todolist"},n.map((function(e){return c.a.createElement(p,Object.assign({dispatch:function(){o({type:"TOGGLE_COMPLETED",payload:E({},e)})},key:e.id},e))})))},v=function(){var e=Object(r.useState)(""),t=Object(u.a)(e,2),n=t[0],o=t[1],a=Object(r.useContext)(b),i=Object(u.a)(a,2)[1];return c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),i({type:"ADD",payload:n}),o("")}},c.a.createElement("input",{type:"text",name:"item",placeholder:"Todo...",value:n,onChange:function(e){o(e.target.value)}}),c.a.createElement("button",{type:"submit"},"Add"))},h=function(){var e=Object(r.useContext)(b),t=Object(u.a)(e,2)[1];return c.a.createElement("button",{className:"clear-completed",onClick:function(){return t({type:"REMOVE_COMPLETED"})}},"Remove Completed")};n(12);var g=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(i,null),c.a.createElement(d,null,c.a.createElement(j,null),c.a.createElement(v,null),c.a.createElement(h,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(c.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[6,1,2]]]);
//# sourceMappingURL=main.210e6a25.chunk.js.map