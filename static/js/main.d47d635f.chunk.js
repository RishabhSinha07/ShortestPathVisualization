(this.webpackJsonpdistance_algorithms=this.webpackJsonpdistance_algorithms||[]).push([[0],{25:function(t,e,a){},27:function(t,e,a){},35:function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),r=(a(19),a(11),a(20),a(5)),c=a.n(r),s=(a(25),a(10)),o=a.n(s),l=a(12),u=a(3),d=(a(27),a(13)),h=a.n(d),b=a(15),j=a.n(b),p=a(16),f=a.n(p),g=a(1);function m(t){return new Promise((function(e){return setTimeout(e,t)}))}function O(t,e,a,n){for(var i=[],r=0;r<30;r++)for(var c=0;c<60;c++)r===t&&c===e?i.push({className:"square",backgroundColor:"green",width:r,height:c,animation:"linear",id:"".concat(r,"_").concat(c)}):r===a&&c===n?i.push({className:"square",backgroundColor:"red",width:r,height:c,animation:"linear",id:"".concat(r,"_").concat(c)}):i.push({className:"square",backgroundColor:"LightGray",width:r,height:c,animation:"linear",id:"".concat(r,"_").concat(c)});return i}var w=function(){var t=Object(n.useState)(!1),e=Object(u.a)(t,2),a=e[0],i=e[1],r=Object(n.useState)(!1),c=Object(u.a)(r,2),s=c[0],d=c[1],b=Object(n.useState)(0),p=Object(u.a)(b,2),w=p[0],S=p[1],x=Object(n.useState)(0),k=Object(u.a)(x,2),v=k[0],C=k[1],_=Object(n.useState)(20),q=Object(u.a)(_,2),N=q[0],P=q[1],R=Object(n.useState)(50),y=Object(u.a)(R,2),I=y[0],M=y[1],E=Object(n.useState)(O(w,v,N,I)),z=Object(u.a)(E,2),A=z[0],B=z[1],J=function(){var t=Object(l.a)(o.a.mark((function t(e,a,n,i){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m(.001);case 2:B((function(t){return t.map((function(t){return t.width===e&&t.height===a&&"green"!=t.backgroundColor&&(t.backgroundColor=n,t.animation=i),t}))}));case 3:case"end":return t.stop()}}),t)})));return function(e,a,n,i){return t.apply(this,arguments)}}(),L=function(t,e,a,n){return Math.sqrt(Math.pow(Math.abs(t-a),2)+Math.pow(Math.abs(e-n),2))};return Object(g.jsxs)("div",{className:"maze",onClick:function(t){console.log(a,s),console.log(t.target.id.split("_")[0],t.target.id.split("_")[1]),a&&(S(parseInt(t.target.id.split("_")[0])),C(parseInt(t.target.id.split("_")[1])),B(O(parseInt(t.target.id.split("_")[0]),parseInt(t.target.id.split("_")[1]),N,I)),i(!1)),s&&(P(parseInt(t.target.id.split("_")[0])),M(parseInt(t.target.id.split("_")[1])),B(O(w,v,parseInt(t.target.id.split("_")[0]),parseInt(t.target.id.split("_")[1]))),d(!1))},children:[Object(g.jsxs)("nav",{class:"navbar navbar-light bg-light",children:[Object(g.jsx)("span",{class:"navbar-text",children:"Euclidean shortest path visulization"}),Object(g.jsx)("button",{type:"button",className:"btn btn-outline-success btn-sm",onClick:function(){i(!0)},children:"Change Start"}),Object(g.jsx)("button",{type:"button",className:"btn btn-outline-warning btn-sm",onClick:function(){d(!0)},children:"Change Stop"}),Object(g.jsx)("button",{type:"button",className:"btn btn-outline-dark",id:"button",onClick:function(){for(var t=w,e=v,a=N,n=I,i=Number.MAX_VALUE;t!=a||e!=n;){var r=0,c=0;if(t<0||t>30||e<0||e>60)return;L(t,e,a,n)<i?(i=L(t,e,a,n),J(r=t,c=e,"#003399","linear")):J(t,e,"red","fillSquareRejectedPath"),t+1<30&&L(t+1,e,a,n)<i?(i=L(t+1,e,a,n),J(r=t+1,c=e,"#003399","linear")):J(t+1,e,"red","fillSquareRejectedPath"),t-1>=0&&L(t-1,e,a,n)<i?(i=L(t-1,e,a,n),J(r=t-1,c=e,"#003399","linear")):J(t-1,e,"red","fillSquareRejectedPath"),e+1<60&&L(t,e+1,a,n)<i?(i=L(t,e+1,a,n),J(r=t,c=e+1,"#003399","linear")):J(t,e+1,"red","fillSquareRejectedPath"),e-1>=0&&L(t,e-1,a,n)<i?(i=L(t,e-1,a,n),J(r=t,c=e-1,"#003399","linear","fillSquareRejectedPath")):J(t,e-1,"red","fillSquareRejectedPath"),e-1>=0&&t-1>=0&&L(t-1,e-1,a,n)<i?(i=L(t-1,e-1,a,n),J(r=t-1,c=e-1,"#003399","linear","fillSquareRejectedPath")):J(t-1,e-1,"red","fillSquareRejectedPath"),e+1<60&&t+1<30&&L(t+1,e+1,a,n)<i?(i=L(t+1,e+1,a,n),J(r=t+1,c=e+1,"#003399","linear")):J(t+1,e+1,"red","fillSquareRejectedPath"),e-1>=0&&t+1<30&&L(t+1,e-1,a,n)<i?(i=L(t+1,e-1,a,n),J(r=t+1,c=e-1,"#003399","linear")):J(t+1,e-1,"red","fillSquareRejectedPath"),e+1<60&&t-1>=0&&L(t-1,e+1,a,n)<i?(i=L(t-1,e+1,a,n),J(r=t-1,c=e+1,"#003399","linear")):J(t-1,e+1,"red","fillSquareRejectedPath"),J(t=r,e=c,"green","fillSquareMainPath")}},children:"Find the shortest path"})]}),Object(g.jsx)("div",{className:"grid",children:A.map((function(t){return Object(g.jsx)("div",{className:t.className,id:t.id,style:{backgroundColor:"".concat(t.backgroundColor),"--x":"".concat(22*(t.height+1),"px"),"--y":"".concat(22*(t.width+1),"px"),animation:"".concat(t.animation,"  5s linear")}})}))}),Object(g.jsxs)("div",{className:"footer",children:[Object(g.jsx)("span",{class:"navbar-text",children:"Created By : Rishabh Sinha"}),Object(g.jsx)(h.a,{className:"icon",onClick:function(){return window.open("https://www.linkedin.com/in/rishabh-sinha-99a706164/")}}),Object(g.jsx)(j.a,{className:"icon",onClick:function(){return window.open("https://www.instagram.com/rishabh_s1nha/")}}),Object(g.jsx)(f.a,{className:"icon",onClick:function(){return window.open("https://github.com/RishabhSinha07")}})]})]})};c.a.render(Object(g.jsx)(i.a.StrictMode,{children:Object(g.jsx)(w,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.d47d635f.chunk.js.map