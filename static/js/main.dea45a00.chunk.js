(this.webpackJsonpsentinum=this.webpackJsonpsentinum||[]).push([[0],{31:function(e,t,c){},32:function(e,t,c){},38:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(2),a=c(22),i=c.n(a),j=(c(31),c(13)),r=c(11),o=c(9),b=c(8),l=c(23),h=[{name:"Home",path:"/",icon:Object(n.jsx)(o.b,{className:"nav-text-icons"})},{name:"About Us",path:"/aboutus",icon:Object(n.jsx)(l.a,{className:"nav-text-icons"})},{name:"How to Use?",path:"/howtouse",icon:Object(n.jsx)(o.c,{className:"nav-text-icons"})},{name:"Contact Us",path:"/contactus",icon:Object(n.jsx)(o.a,{className:"nav-text-icons"})},{name:"Privacy Policy",path:"/privacypolicy",icon:Object(n.jsx)(o.e,{className:"nav-text-icons"})}],d=(c(32),c(0));var x=function(){var e=Object(s.useState)(!1),t=Object(j.a)(e,2),c=t[0],a=t[1],i=h.map((function(e,t){return Object(n.jsxs)("li",{className:"nav-text",children:[Object(n.jsxs)(b.b,{to:e.path,children:[" "," "," ",e.name," ",e.icon," "," "," "]})," "," "]},t)}));return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)(d.b.Provider,{value:{color:"#fff"},children:[Object(n.jsxs)("div",{className:"navbar",children:[Object(n.jsxs)(b.b,{to:"#",className:"menu-bars",children:[Object(n.jsx)(r.a,{onClick:function(){a(!c)}})," "," "]})," "," ",Object(n.jsx)("h6",{children:" Sentinum "})," "," "]})," "," ",Object(n.jsxs)("nav",{className:c?"nav-menu active":"nav-menu",children:[Object(n.jsxs)("ul",{className:"nav-menu-items",children:[Object(n.jsxs)("li",{className:"navbar-toggle",children:[Object(n.jsxs)(b.b,{to:"#",className:"menu-bars",children:[Object(n.jsx)(o.d,{onClick:function(){a(!c)}})," "," "]})," "," "]})," "," ",i," "," "," "]})," "," "]})," "," "]})," "," "]})},u=c.p+"static/media/Sentinum_logo.fc40607c.png",O=(c(38),c(18)),m=c(19);var p=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("section",{children:[Object(n.jsxs)("div",{id:"logo-container",children:[Object(n.jsx)("img",{src:u,id:"logo"})," "," "," "]})," "," "]})," "," ",Object(n.jsxs)("section",{children:[Object(n.jsxs)("div",{id:"about",children:[Object(n.jsxs)("p",{id:"about-text",children:["Hello!, In this Project, We are using the "," "," ",Object(n.jsx)("strong",{children:" Sentiment Analysis Algorithm "})," to predict the emotional state of an individual based on the data input from the person 's social media posts and interactions."," "," "]})," "," "]})," "," "]})," "," ",Object(n.jsx)("h1",{id:"shead",children:" Sentiment Analysis "})," "," ",Object(n.jsxs)(d.b.Provider,{value:{color:" rgb(27, 105, 223)"},children:[Object(n.jsxs)("div",{id:"icon-container",children:[Object(n.jsxs)("div",{id:"cnt1",children:[" "," "," ",Object(n.jsx)(r.b,{className:"socialicons"}),Object(n.jsx)("p",{children:" Twitter Analyser "})," "," "]})," "," ",Object(n.jsxs)("div",{id:"cnt2",children:[" "," "," ",Object(n.jsx)(O.a,{className:"socialicons"})," "," "," ",Object(n.jsx)("p",{children:" Facebook Analyser "})," (Under Development)"," "," "]})," "," ",Object(n.jsxs)("div",{id:"cnt3",children:[" "," "," ",Object(n.jsx)(m.a,{className:"socialicons"})," "," "," ",Object(n.jsx)("p",{children:" Instagram Analyser "})," (Under Development)"," "," "]})," "," "]})," "," ",Object(n.jsxs)("footer",{id:"page-footer",children:[Object(n.jsxs)("p",{children:[Object(n.jsx)(b.b,{to:"/aboutus",children:" About Us "})," "," ",Object(n.jsx)(b.b,{to:"/contactus",children:" Contact Us "})," "," ",Object(n.jsxs)("a",{href:"https://drive.google.com/file/d/1r155ngzBd1GMUjDMmbvVCclnj4Tb15eh/view",children:["Download Apk "," "," "]})," "," "]})," "," ",Object(n.jsxs)("p",{id:"icon-para",children:[Object(n.jsx)("a",{href:"https://www.facebook.com",children:Object(n.jsx)(O.a,{})})," "," ",Object(n.jsx)("a",{href:"https://www.instagram.com",children:Object(n.jsx)(m.a,{})})," "," ",Object(n.jsx)("a",{href:"https://www.twitter.com/explore",children:Object(n.jsx)(r.b,{})})," "," "]})," "," "]})," "," "]})," "," "]})};var v=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h4",{children:" How to Use "})," "]})},f=c(20),g=c.n(f),w=c(25);function y(){var e=Object(s.useState)(""),t=Object(j.a)(e,2),c=t[0],a=t[1],i=Object(s.useState)(0),r=Object(j.a)(i,2),o=r[0],b=r[1],l=function(){var e=Object(w.a)(g.a.mark((function e(){var t,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://sentinum-testing.herokuapp.com/twitter/"+c);case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,b(n.result),console.log(n.result);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",{type:"text",onChange:function(e){a(e.target.value)},value:c})," "," ",Object(n.jsx)("button",{onClick:l,children:" Fetch "})," ",Object(n.jsxs)("h4",{children:[" Result: -",o," "]})," "," "]})}var N=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h4",{children:" Contact us "})," ",Object(n.jsx)(y,{})," "," "," "]})};var A=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h4",{children:" Privacy Policy "})," "," "]})};var k=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h4",{children:" About Us.This is about us page. "})," "," "]})},U=c(3);var C=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)(b.a,{basename:"/SentinumApp",children:[Object(n.jsx)(x,{}),Object(n.jsxs)(U.c,{children:[Object(n.jsx)(U.a,{exact:!0,path:"/",children:Object(n.jsx)(p,{})})," "," ",Object(n.jsx)(U.a,{path:"/aboutus",children:Object(n.jsx)(k,{})})," "," ",Object(n.jsx)(U.a,{path:"/howtouse",children:Object(n.jsx)(v,{})})," "," ",Object(n.jsx)(U.a,{path:"/contactus",children:Object(n.jsx)(N,{})})," "," ",Object(n.jsx)(U.a,{path:"/privacypolicy",children:Object(n.jsx)(A,{})})," "," "]})," "," "]})," "," "]})};i.a.render(Object(n.jsx)(C,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.dea45a00.chunk.js.map