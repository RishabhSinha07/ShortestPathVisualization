(this.webpackJsonpdistance_algorithms=this.webpackJsonpdistance_algorithms||[]).push([[0],{25:function(t,e,n){},27:function(t,e,n){},35:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),r=(n(19),n(7),n(20),n(5)),c=n.n(r),s=(n(25),n(11)),o=n.n(s),l=n(12),u=n(3),d=(n(27),n(13)),b=n.n(d),h=n(15),p=n.n(h),j=n(16),m=n.n(j),g=n(1),f=30,v=60;function O(t){return new Promise((function(e){return setTimeout(e,t)}))}function x(t,e){if(!t)return!1;for(var n=0;n<t.length;n++)if(t[n].x==e[0]&&t[n].y==e[1])return!0;return!1}function N(t,e){if(!t)return!1;for(var n=0;n<t.length;n++)if(t[n][0]==e[0]&&t[n][1]==e[1])return!0;return!1}function S(t,e,n,a,i){for(var r=[],c=0;c<f;c++)for(var s=0;s<v;s++)c===t&&s===e?r.push({className:"square",backgroundColor:"green",width:c,height:s,animation:"linear",id:"".concat(c,"_").concat(s)}):c===n&&s===a?r.push({className:"square",backgroundColor:"red",width:c,height:s,animation:"linear",id:"".concat(c,"_").concat(s)}):x(i,[c,s])?r.push({className:"square",backgroundColor:"black",width:c,height:s,animation:"linear",id:"".concat(c,"_").concat(s)}):r.push({className:"square",backgroundColor:"LightGray",width:c,height:s,animation:"linear",id:"".concat(c,"_").concat(s)});return r}var w=function(){var t=Object(a.useState)(!1),e=Object(u.a)(t,2),n=e[0],i=e[1],r=Object(a.useState)(!1),c=Object(u.a)(r,2),s=c[0],d=c[1],h=Object(a.useState)(!1),j=Object(u.a)(h,2),w=j[0],k=j[1],C=Object(a.useState)(0),_=Object(u.a)(C,2),q=_[0],y=_[1],I=Object(a.useState)(0),P=Object(u.a)(I,2),R=P[0],M=P[1],E=Object(a.useState)(20),L=Object(u.a)(E,2),A=L[0],B=L[1],z=Object(a.useState)(50),J=Object(u.a)(z,2),T=J[0],F=J[1],G=Object(a.useState)([]),U=Object(u.a)(G,2),V=U[0],W=U[1],X=Object(a.useState)(S(q,R,A,T,V)),D=Object(u.a)(X,2),H=D[0],K=D[1];document.addEventListener("mousedown",(function(){var t=[];document.onmousemove=function(e){!w||isNaN(parseInt(e.target.id.split("_")[0]))||isNaN(parseInt(e.target.id.split("_")[1]))||(console.log(V),t.push({x:parseInt(e.target.id.split("_")[0]),y:parseInt(e.target.id.split("_")[1])}),K(S(q,R,A,T,V.concat(t))),W(V.concat(t)),console.log(V))}})),document.addEventListener("mouseup",(function(){document.onmousemove=null}));var Q=function(){var t=Object(l.a)(o.a.mark((function t(e,n,a,i){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O(.001);case 2:K((function(t){return t.map((function(t){return t.width!==e||t.height!==n||"green"===t.backgroundColor||x(V,[e,n])||(t.backgroundColor=a,t.animation=i),t}))}));case 3:case"end":return t.stop()}}),t)})));return function(e,n,a,i){return t.apply(this,arguments)}}(),Y=function(t,e,n,a){return Math.sqrt(Math.pow(Math.abs(t-n),2)+Math.pow(Math.abs(e-a),2))},Z=function(t){return!(t[0]<0||t[0]>f||t[1]<0||t[1]>v||x(V,[t[0],t[1]]))},$=function t(e,n){console.log(n),Q(parseInt(n[0]),parseInt(n[1]),"green","fillSquareMainPath"),Object.keys(e).forEach((function(a){N(e[a],n)&&t(e,[a.split(",")[0],a.split(",")[1]])}))};return Object(g.jsxs)("div",{className:"maze",onClick:function(t){n&&(console.log(V.length),y(parseInt(t.target.id.split("_")[0])),M(parseInt(t.target.id.split("_")[1])),K(S(parseInt(t.target.id.split("_")[0]),parseInt(t.target.id.split("_")[1]),A,T,V)),i(!1)),s&&(console.log(V.length),B(parseInt(t.target.id.split("_")[0])),F(parseInt(t.target.id.split("_")[1])),K(S(q,R,parseInt(t.target.id.split("_")[0]),parseInt(t.target.id.split("_")[1]),V)),d(!1))},children:[Object(g.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(g.jsx)("span",{className:"navbar-text",children:"Searching path visulization"}),Object(g.jsx)("div",{className:"width"}),Object(g.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(g.jsx)("span",{className:"navbar-toggler-icon"})}),Object(g.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(g.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(g.jsx)("li",{className:"nav-item active",children:Object(g.jsx)("button",{type:"button",className:"btn btn-outline-success btn-sm mr-2",onClick:function(){k(!1),i(!0)},children:"Change Start"})}),Object(g.jsx)("li",{className:"nav-item active",children:Object(g.jsx)("button",{type:"button",className:"btn btn-outline-danger btn-sm mr-2",onClick:function(){k(!1),d(!0)},children:"Change Stop"})}),Object(g.jsx)("li",{className:"nav-item active",children:Object(g.jsx)("button",{type:"button",className:"btn btn-outline-warning btn-sm mr-2",onClick:function(){k(!0)},children:"Add bricks"})}),Object(g.jsx)("li",{className:"nav-item active",children:Object(g.jsx)("button",{type:"button",className:"btn btn-dark btn-sm mr-2",id:"button",onClick:function(){for(var t=q,e=R,n=A,a=T;t!==n||e!==a;){var i=0,r=0,c=Number.MAX_VALUE;if(t<0||t>f||e<0||e>v)return;t+1<f&&Y(t+1,e,n,a)<c&&!x(V,[t+1,e])?(c=Y(t+1,e,n,a),Q(i=t+1,r=e,"#003399","linear")):Q(t+1,e,"red","fillSquareRejectedPath"),t-1>=0&&Y(t-1,e,n,a)<c&&!x(V,[t-1,e])?(c=Y(t-1,e,n,a),Q(i=t-1,r=e,"#003399","linear")):Q(t-1,e,"red","fillSquareRejectedPath"),e+1<v&&Y(t,e+1,n,a)<c&&!x(V,[t,e+1])?(c=Y(t,e+1,n,a),Q(i=t,r=e+1,"#003399","linear")):Q(t,e+1,"red","fillSquareRejectedPath"),e-1>=0&&Y(t,e-1,n,a)<c&&!x(V,[t,e-1])?(c=Y(t,e-1,n,a),Q(i=t,r=e-1,"#003399","linear","fillSquareRejectedPath")):Q(t,e-1,"red","fillSquareRejectedPath"),e-1>=0&&t-1>=0&&Y(t-1,e-1,n,a)<c&&!x(V,[t-1,e-1])?(c=Y(t-1,e-1,n,a),Q(i=t-1,r=e-1,"#003399","linear","fillSquareRejectedPath")):Q(t-1,e-1,"red","fillSquareRejectedPath"),e+1<v&&t+1<f&&Y(t+1,e+1,n,a)<c&&!x(V,[t+1,e+1])?(c=Y(t+1,e+1,n,a),Q(i=t+1,r=e+1,"#003399","linear")):Q(t+1,e+1,"red","fillSquareRejectedPath"),e-1>=0&&t+1<f&&Y(t+1,e-1,n,a)<c&&!x(V,[t+1,e-1])?(c=Y(t+1,e-1,n,a),Q(i=t+1,r=e-1,"#003399","linear")):Q(t+1,e-1,"red","fillSquareRejectedPath"),e+1<v&&t-1>=0&&Y(t-1,e+1,n,a)<c&&!x(V,[t-1,e+1])?(c=Y(t-1,e+1,n,a),Q(i=t-1,r=e+1,"#003399","linear")):Q(t-1,e+1,"red","fillSquareRejectedPath"),t=i,e=r,console.log(c),Q(t,e,"green","fillSquareMainPath")}},children:"Euclidean distance"})}),Object(g.jsx)("li",{className:"nav-item active",children:Object(g.jsx)("button",{type:"button",className:"btn btn-dark btn-sm mr-2",id:"button",onClick:function(){var t=q,e=R,n=A,a=T,i=[],r=[],c={},s=null;for(i.push([t,e]),r.push([t,e]);i.length>0;)if(s=i.shift(),Z(s)){if(Q(s[0],s[1],"#003399","linear"),s[0]==n&&s[1]==a)return $(c,s),[];!Z([s[0]+1,s[1]])||N(r,[s[0]+1,s[1]])||N(i,[s[0]+1,s[1]])||(i.push([s[0]+1,s[1]]),r.push([s[0]+1,s[1]]),c[s]||(c[s]=[]),c[s].push([s[0]+1,s[1]])),!Z([s[0]-1,s[1]])||N(r,[s[0]-1,s[1]])||N(i,[s[0]-1,s[1]])||(i.push([s[0]-1,s[1]]),r.push([s[0]-1,s[1]]),c[s]||(c[s]=[]),c[s].push([s[0]-1,s[1]])),!Z([s[0],s[1]+1])||N(r,[s[0],s[1]+1])||N(i,[s[0],s[1]+1])||(i.push([s[0],s[1]+1]),r.push([s[0],s[1]+1]),c[s]||(c[s]=[]),c[s].push([s[0],s[1]+1])),!Z([s[0],s[1]-1])||N(r,[s[0],s[1]-1])||N(i,[s[0],s[1]-1])||(i.push([s[0],s[1]-1]),r.push([s[0],s[1]-1]),c[s]||(c[s]=[]),c[s].push([s[0],s[1]-1]))}return[]},children:"BFS"})}),Object(g.jsx)("li",{className:"nav-item active",children:Object(g.jsx)("button",{type:"button",className:"btn btn-info btn-sm mr-2",onClick:function(){W([]),K(S(q,R,A,T,[]))},children:"Clear Walls"})})]})})]}),Object(g.jsx)("div",{className:"grid",children:H.map((function(t){return Object(g.jsx)("div",{className:t.className,id:t.id,style:{backgroundColor:"".concat(t.backgroundColor),"--x":"".concat(20*(t.height+1),"px"),"--y":"".concat(20*(t.width+1),"px"),animation:"".concat(t.animation,"  5s linear")}})}))}),Object(g.jsxs)("div",{className:"footer",children:[Object(g.jsx)("span",{class:"navbar-text",children:"Created By : Rishabh Sinha"}),Object(g.jsx)(b.a,{className:"icon",onClick:function(){return window.open("https://www.linkedin.com/in/rishabh-sinha-99a706164/")}}),Object(g.jsx)(p.a,{className:"icon",onClick:function(){return window.open("https://www.instagram.com/rishabh_s1nha/")}}),Object(g.jsx)(m.a,{className:"icon",onClick:function(){return window.open("https://github.com/RishabhSinha07")}})]})]})};c.a.render(Object(g.jsx)(i.a.StrictMode,{children:Object(g.jsx)(w,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.85b5442c.chunk.js.map