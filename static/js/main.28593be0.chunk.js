(this.webpackJsonpdistance_algorithms=this.webpackJsonpdistance_algorithms||[]).push([[0],{25:function(t,e,a){},27:function(t,e,a){},35:function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),r=(a(19),a(11),a(20),a(5)),c=a.n(r),s=(a(25),a(10)),l=a.n(s),o=a(12),d=a(3),u=(a(27),a(13)),b=a.n(u),h=a(15),j=a.n(h),p=a(16),g=a.n(p),m=a(1);function f(t){return new Promise((function(e){return setTimeout(e,t)}))}function O(t,e,a,n){for(var i=[],r=0;r<30;r++)for(var c=0;c<60;c++)r===t&&c===e?i.push({className:"square",backgroundColor:"green",width:r,height:c,animation:"linear",id:"".concat(r,"_").concat(c)}):r===a&&c===n?i.push({className:"square",backgroundColor:"red",width:r,height:c,animation:"linear",id:"".concat(r,"_").concat(c)}):i.push({className:"square",backgroundColor:"LightGray",width:r,height:c,animation:"linear",id:"".concat(r,"_").concat(c)});return i}var v=function(){var t=Object(n.useState)(!1),e=Object(d.a)(t,2),a=e[0],i=e[1],r=Object(n.useState)(!1),c=Object(d.a)(r,2),s=c[0],u=c[1],h=Object(n.useState)(0),p=Object(d.a)(h,2),v=p[0],x=p[1],S=Object(n.useState)(0),w=Object(d.a)(S,2),C=w[0],k=w[1],_=Object(n.useState)(20),q=Object(d.a)(_,2),N=q[0],P=q[1],R=Object(n.useState)(50),y=Object(d.a)(R,2),I=y[0],M=y[1],E=Object(n.useState)(O(v,C,N,I)),z=Object(d.a)(E,2),A=z[0],B=z[1],J=function(){var t=Object(o.a)(l.a.mark((function t(e,a,n,i){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f(.001);case 2:B((function(t){return t.map((function(t){return t.width===e&&t.height===a&&"green"!=t.backgroundColor&&(t.backgroundColor=n,t.animation=i),t}))}));case 3:case"end":return t.stop()}}),t)})));return function(e,a,n,i){return t.apply(this,arguments)}}(),L=function(t,e,a,n){return Math.sqrt(Math.pow(Math.abs(t-a),2)+Math.pow(Math.abs(e-n),2))};return Object(m.jsxs)("div",{className:"maze",onClick:function(t){console.log(a,s),console.log(t.target.id.split("_")[0],t.target.id.split("_")[1]),a&&(x(parseInt(t.target.id.split("_")[0])),k(parseInt(t.target.id.split("_")[1])),B(O(parseInt(t.target.id.split("_")[0]),parseInt(t.target.id.split("_")[1]),N,I)),i(!1)),s&&(P(parseInt(t.target.id.split("_")[0])),M(parseInt(t.target.id.split("_")[1])),B(O(v,C,parseInt(t.target.id.split("_")[0]),parseInt(t.target.id.split("_")[1]))),u(!1))},children:[Object(m.jsxs)("nav",{class:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(m.jsx)("span",{class:"navbar-text",children:"Euclidean shortest path visulization"}),Object(m.jsx)("div",{className:"width"}),Object(m.jsx)("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(m.jsx)("span",{class:"navbar-toggler-icon"})}),Object(m.jsx)("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(m.jsxs)("ul",{class:"navbar-nav mr-auto",children:[Object(m.jsx)("li",{class:"nav-item active",children:Object(m.jsx)("button",{type:"button",className:"btn btn-outline-success btn-sm",onClick:function(){i(!0)},children:"Change Start"})}),Object(m.jsx)("li",{class:"nav-item active",children:Object(m.jsx)("button",{type:"button",className:"btn btn-outline-warning btn-sm",onClick:function(){u(!0)},children:"Change Stop"})}),Object(m.jsx)("li",{class:"nav-item active",children:Object(m.jsx)("button",{type:"button",className:"btn btn-outline-dark btn-sm",id:"button",onClick:function(){for(var t=v,e=C,a=N,n=I,i=Number.MAX_VALUE;t!=a||e!=n;){var r=0,c=0;if(t<0||t>30||e<0||e>60)return;L(t,e,a,n)<i?(i=L(t,e,a,n),J(r=t,c=e,"#003399","linear")):J(t,e,"red","fillSquareRejectedPath"),t+1<30&&L(t+1,e,a,n)<i?(i=L(t+1,e,a,n),J(r=t+1,c=e,"#003399","linear")):J(t+1,e,"red","fillSquareRejectedPath"),t-1>=0&&L(t-1,e,a,n)<i?(i=L(t-1,e,a,n),J(r=t-1,c=e,"#003399","linear")):J(t-1,e,"red","fillSquareRejectedPath"),e+1<60&&L(t,e+1,a,n)<i?(i=L(t,e+1,a,n),J(r=t,c=e+1,"#003399","linear")):J(t,e+1,"red","fillSquareRejectedPath"),e-1>=0&&L(t,e-1,a,n)<i?(i=L(t,e-1,a,n),J(r=t,c=e-1,"#003399","linear","fillSquareRejectedPath")):J(t,e-1,"red","fillSquareRejectedPath"),e-1>=0&&t-1>=0&&L(t-1,e-1,a,n)<i?(i=L(t-1,e-1,a,n),J(r=t-1,c=e-1,"#003399","linear","fillSquareRejectedPath")):J(t-1,e-1,"red","fillSquareRejectedPath"),e+1<60&&t+1<30&&L(t+1,e+1,a,n)<i?(i=L(t+1,e+1,a,n),J(r=t+1,c=e+1,"#003399","linear")):J(t+1,e+1,"red","fillSquareRejectedPath"),e-1>=0&&t+1<30&&L(t+1,e-1,a,n)<i?(i=L(t+1,e-1,a,n),J(r=t+1,c=e-1,"#003399","linear")):J(t+1,e-1,"red","fillSquareRejectedPath"),e+1<60&&t-1>=0&&L(t-1,e+1,a,n)<i?(i=L(t-1,e+1,a,n),J(r=t-1,c=e+1,"#003399","linear")):J(t-1,e+1,"red","fillSquareRejectedPath"),J(t=r,e=c,"green","fillSquareMainPath")}},children:"Find the shortest path"})})]})})]}),Object(m.jsx)("div",{className:"grid",children:A.map((function(t){return Object(m.jsx)("div",{className:t.className,id:t.id,style:{backgroundColor:"".concat(t.backgroundColor),"--x":"".concat(20*(t.height+1),"px"),"--y":"".concat(20*(t.width+1),"px"),animation:"".concat(t.animation,"  5s linear")}})}))}),Object(m.jsxs)("div",{className:"footer",children:[Object(m.jsx)("span",{class:"navbar-text",children:"Created By : Rishabh Sinha"}),Object(m.jsx)(b.a,{className:"icon",onClick:function(){return window.open("https://www.linkedin.com/in/rishabh-sinha-99a706164/")}}),Object(m.jsx)(j.a,{className:"icon",onClick:function(){return window.open("https://www.instagram.com/rishabh_s1nha/")}}),Object(m.jsx)(g.a,{className:"icon",onClick:function(){return window.open("https://github.com/RishabhSinha07")}})]})]})};c.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(v,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.28593be0.chunk.js.map