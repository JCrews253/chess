(this.webpackJsonpchess=this.webpackJsonpchess||[]).push([[0],[,,,,,,,,,,function(e,n,t){e.exports=t(20)},,,,,function(e,n,t){},function(e,n,t){},,function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var r,o,i=t(0),c=t.n(i),a=t(9),u=t.n(a),s=(t(15),t(16),t(2)),l=t.n(s),p=t(5),d=t(1),f=t(4),h=t(7);t(18);!function(e){e[e.King=0]="King",e[e.Queen=1]="Queen",e[e.Bishop=2]="Bishop",e[e.Knight=3]="Knight",e[e.Rook=4]="Rook",e[e.Pawn=5]="Pawn",e[e.Empty=6]="Empty"}(r||(r={})),function(e){e[e.Dark=0]="Dark",e[e.Light=1]="Light",e[e.None=2]="None"}(o||(o={}));var v=function(e){return Math.floor(e/8)},m=function(e){return e>=8?e%8:e},g=function(e,n){return 8*e+n},x=function(e,n){var t=[];return e.piece===r.Knight&&(t=E(e.index,n)),e.piece===r.Rook&&(t=_(e.index,n)),e.piece===r.Bishop&&(t=k(e.index,n)),e.piece===r.Queen&&(t=t.concat(k(e.index,n)).concat(_(e.index,n))),e.piece===r.King&&(t=M(e.index,n)),e.piece===r.Pawn&&(t=b(e.index,n)),t},E=function(e,n){var t=v(e),r=m(e),o=[];return t>=2&&r<=6&&o.push(g(t-2,r+1)),t>=1&&r<=5&&o.push(g(t-1,r+2)),t<=6&&r<=5&&o.push(g(t+1,r+2)),t<=5&&r<=6&&o.push(g(t+2,r+1)),t<=5&&r>=1&&o.push(g(t+2,r-1)),t<=6&&r>=2&&o.push(g(t+1,r-2)),t>=1&&r>=2&&o.push(g(t-1,r-2)),t>=2&&r>=1&&o.push(g(t-2,r-1)),o.filter((function(t){return n[t].color!==n[e].color}))},_=function(e,n){for(var t=v(e),o=m(e),i=[],c=t;c-1>-1&&n[g(c-1,o)].piece===r.Empty;)i.push(g(c-1,o)),c--;c>0&&n[g(c-1,o)].color!==n[e].color&&i.push(g(c-1,o));for(var a=o;a+1<8&&n[g(t,a+1)].piece===r.Empty;)i.push(g(t,a+1)),a++;for(a<7&&n[g(t,a+1)].color!==n[e].color&&i.push(g(t,a+1)),c=t;c+1<8&&n[g(c+1,o)].piece===r.Empty;)i.push(g(c+1,o)),c++;for(c<7&&n[g(c+1,o)].color!==n[e].color&&i.push(g(c+1,o)),a=o;a-1>0&&n[g(t,a-1)].piece===r.Empty;)i.push(g(t,a-1)),a--;return a>0&&n[g(t,a-1)].color!==n[e].color&&i.push(g(t,a-1)),i},k=function(e,n){for(var t=v(e),o=m(e),i=[],c=t,a=o;c-1>-1&&a+1<8&&n[g(c-1,a+1)].piece===r.Empty;)i.push(g(c-1,a+1)),c--,a++;for(c-1>-1&&a+1<8&&n[g(c-1,a+1)].color!==n[e].color&&i.push(g(c-1,a+1)),c=t,a=o;c+1<8&&a+1<8&&n[g(c+1,a+1)].piece===r.Empty;)i.push(g(c+1,a+1)),c++,a++;for(c+1<8&&a+1<8&&n[g(c+1,a+1)].color!==n[e].color&&i.push(g(c+1,a+1)),c=t,a=o;c+1<8&&a-1>-1&&n[g(c+1,a-1)].piece===r.Empty;)i.push(g(c+1,a-1)),c++,a--;for(c+1<8&&a-1>-1&&n[g(c+1,a-1)].color!==n[e].color&&i.push(g(c+1,a-1)),c=t,a=o;c-1>-1&&a-1>-1&&n[g(c-1,a-1)].piece===r.Empty;)i.push(g(c-1,a-1)),c--,a--;return c-1>-1&&a-1>-1&&n[g(c-1,a-1)].color!==n[e].color&&i.push(g(c-1,a-1)),i},M=function(e,n){var t=v(e),r=m(e),o=[];return t>0&&o.push(g(t-1,r)),t>0&&r<7&&o.push(g(t-1,r+1)),r<7&&o.push(g(t,r+1)),t<7&&r<7&&o.push(g(t+1,r+1)),t<7&&o.push(g(t+1,r)),t<7&&r>0&&o.push(g(t+1,r-1)),r>0&&o.push(g(t,r-1)),t>0&&r>0&&o.push(g(t-1,r-1)),o.filter((function(t){return n[t].color!==n[e].color}))},b=function(e,n){var t=v(e),i=m(e),c=[];return n[e].color===o.Light?(t>0&&n[g(t-1,i)].piece===r.Empty&&c.push(g(t-1,i)),n[e].firstMove&&n[g(t-1,i)].piece===r.Empty&&n[g(t-2,i)].piece===r.Empty&&c.push(g(t-2,i)),i>0&&t>0&&n[g(t-1,i-1)].piece!==r.Empty&&n[g(t-1,i-1)].color!==o.Light&&c.push(g(t-1,i-1)),i<7&&t>0&&n[g(t-1,i+1)].piece!==r.Empty&&n[g(t-1,i+1)].color!==o.Light&&c.push(g(t-1,i+1))):(t<7&&n[g(t+1,i)].piece===r.Empty&&c.push(g(t+1,i)),n[e].firstMove&&n[g(t+1,i)].piece===r.Empty&&n[g(t+2,i)].piece===r.Empty&&c.push(g(t+2,i)),i>0&&t<7&&n[g(t+1,i-1)].piece!==r.Empty&&n[g(t+1,i-1)].color!==o.Dark&&c.push(g(t+1,i-1)),i<7&&t<7&&n[g(t+1,i+1)].piece!==r.Empty&&n[g(t+1,i+1)].color!==o.Dark&&c.push(g(t+1,i+1))),c},y=function(e,n){return n[e].piece===r.Pawn&&(n[e].color===o.Light&&e<8||n[e].color===o.Dark&&e>55)},O=0,N=function(e){return e.slice().reverse()},B=[0,0,0,0,0,0,0,0,5,5,5,5,5,5,5,5,1,1,2,3,3,2,1,1,.5,.5,1,2.5,2.5,1,.5,.5,0,0,0,2,2,0,0,0,.5,-.5,-1,0,0,-1,-.5,.5,.5,1,1,-2,-2,1,1,.5,0,0,0,0,0,0,0,0],L=N(B),j=[-5,-4,-3,-3,-3,-3,-4,-5,-4,-2,0,0,0,0,-2,-4,-3,0,1,1.5,1.5,1,0,-3,-3,.5,1.5,2,2,1.5,.5,-3,-3,0,1.5,2,2,1.5,0,-3,-3,.5,1,1.5,1.5,1,.5,-3,-4,-2,0,.5,.5,0,-2,-4,-5,-4,-3,-3,-3,-3,-4,-5],D=[-2,-1,-1,-1,-1,-1,-1,-2,-1,0,0,0,0,0,0,-1,-1,0,.5,1,1,.5,0,-1,-1,.5,.5,1,1,.5,.5,-1,-1,0,1,1,1,1,0,-1,-1,1,1,1,1,1,1,-1,-1,.5,0,0,0,0,.5,-1,-2,-1,-1,-1,-1,-1,-1,-2],S=N(D),w=[0,0,0,0,0,0,0,0,.5,1,1,1,1,1,1,.5,-.5,0,0,0,0,0,0,-.5,-.5,0,0,0,0,0,0,-.5,-.5,0,0,0,0,0,0,-.5,-.5,0,0,0,0,0,0,-.5,-.5,0,0,0,0,0,0,-.5,0,0,0,.5,.5,0,0,0],K=N(w),H=[-2,-1,-1,-.5,-.5,-1,-1,-2,-1,0,0,0,0,0,0,-1,-1,0,.5,.5,.5,.5,0,-1,-.5,0,.5,.5,.5,.5,0,-.5,0,0,.5,.5,.5,.5,0,-.5,-1,.5,.5,.5,.5,.5,0,-1,-1,0,.5,0,0,0,0,-1,-2,-1,-1,-.5,-.5,-1,-1,-2],Q=[-3,-4,-4,-5,-5,-4,-4,-3,-3,-4,-4,-5,-5,-4,-4,-3,-3,-4,-4,-5,-5,-4,-4,-3,-3,-4,-4,-5,-5,-4,-4,-3,-2,-3,-3,-4,-4,-3,-3,-2,-1,-2,-2,-2,-2,-2,-2,-1,2,2,0,0,0,0,2,2,2,3,1,0,0,1,3,2],J=N(Q),P=function(){var e=Object(p.a)(l.a.mark((function e(n,t,i){var c,a,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O=0,c=JSON.parse(JSON.stringify(n)),a=-1/0,u={start:-1,end:-1},-1/0,1/0,c.filter((function(e){return e.color===i})).forEach((function(e){x(e,c).forEach((function(s){O++,c[s]={piece:c[e.index].piece,color:c[e.index].color,firstMove:!1,index:s},y(s,c)&&(c[s]={piece:r.Queen,color:c[e.index].color,index:s,firstMove:!1}),c[e.index]={piece:r.Empty,color:o.None,index:e.index,firstMove:!1};var l=A(c,t-1,i===o.Light?o.Dark:o.Light,!1,-1/0,1/0);l>a&&(a=l,u={start:e.index,end:s}),c=JSON.parse(JSON.stringify(n))}))})),e.abrupt("return",u);case 9:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),A=function e(n,t,i,c,a,u){var s=JSON.parse(JSON.stringify(n));if(t<=0)return R(s);var l=c?-1/0:1/0,p={start:-1,end:-1};return s.filter((function(e){return e.color===i})).forEach((function(d){x(d,s).forEach((function(f){O++,s[f]={piece:s[d.index].piece,color:s[d.index].color,index:f,firstMove:!1},y(f,s)&&(s[f]={piece:r.Queen,color:s[d.index].color,index:f,firstMove:!1}),s[d.index]={piece:r.Empty,color:o.None,index:d.index,firstMove:!1};var h=e(s,t-1,i===o.Light?o.Dark:o.Light,!c,a,u);(c?h>l:h<l)&&(l=h,p={start:d.index,end:f}),s=JSON.parse(JSON.stringify(n))}))})),-1!==p.start&&-1!==p.end?(s[p.end]={piece:s[p.start].piece,color:s[p.start].color,index:p.end,firstMove:!1},y(p.end,s)&&(s[p.end]={piece:r.Queen,color:s[p.end].color,index:p.end,firstMove:!1}),s[p.start]={piece:r.Empty,color:o.None,index:p.start,firstMove:!1},R(s)):c?-1/0:1/0},R=function(e){var n=e.filter((function(e){return e.color===o.Light})),t=e.filter((function(e){return e.color===o.Dark})),r=0;return t.forEach((function(e){return r+=I(e)})),n.forEach((function(e){return r-=I(e)})),r},I=function(e){return e.piece===r.King?900+(e.color===o.Light?Q[e.index]:J[e.index]):e.piece===r.Queen?90+H[e.index]:e.piece===r.Bishop?30+(e.color===o.Light?D[e.index]:S[e.index]):e.piece===r.Knight?30+j[e.index]:e.piece===r.Rook?50+(e.color===o.Light?w[e.index]:K[e.index]):e.piece===r.Pawn?10+(e.color===o.Light?B[e.index]:L[e.index]):0},T=function(){var e=function(e){return function(e){return Math.floor(e/8)}(e)%2===function(e){return e>=8?e%8:e}(e)%2},n=function(e){return j[e].color===o.Light},t=function(e){return j[e].piece===r.King},a=function(e){return j[e].piece===r.Queen},u=function(e){return j[e].piece===r.Bishop},s=function(e){return j[e].piece===r.Knight},v=function(e){return j[e].piece===r.Rook},m=function(e){return j[e].piece===r.Pawn},g=function(){return H(K===o.Light?o.Dark:o.Light)},E=function(e){return A===e},_=function(e){return q.includes(e)},k=function(e){return G.includes(e)},M=function(){var e=new Array(64).fill({piece:r.Empty,color:o.None,firstMove:!0,index:-1});e.forEach((function(n,t){return e[t]={piece:r.Empty,color:o.None,firstMove:!0,index:t}})),e[0]={piece:r.Rook,color:o.Dark,firstMove:!0,index:0},e[1]={piece:r.Knight,color:o.Dark,firstMove:!0,index:1},e[2]={piece:r.Bishop,color:o.Dark,firstMove:!0,index:2},e[3]={piece:r.Queen,color:o.Dark,firstMove:!0,index:3},e[4]={piece:r.King,color:o.Dark,firstMove:!0,index:4},e[5]={piece:r.Bishop,color:o.Dark,firstMove:!0,index:5},e[6]={piece:r.Knight,color:o.Dark,firstMove:!0,index:6},e[7]={piece:r.Rook,color:o.Dark,firstMove:!0,index:7};for(var n=8;n<16;n++)e[n]={piece:r.Pawn,color:o.Dark,firstMove:!0,index:n};e[56]={piece:r.Rook,color:o.Light,firstMove:!0,index:56},e[57]={piece:r.Knight,color:o.Light,firstMove:!0,index:57},e[58]={piece:r.Bishop,color:o.Light,firstMove:!0,index:58},e[59]={piece:r.Queen,color:o.Light,firstMove:!0,index:59},e[60]={piece:r.King,color:o.Light,firstMove:!0,index:60},e[61]={piece:r.Bishop,color:o.Light,firstMove:!0,index:61},e[62]={piece:r.Knight,color:o.Light,firstMove:!0,index:62},e[63]={piece:r.Rook,color:o.Light,firstMove:!0,index:63};for(var t=48;t<56;t++)e[t]={piece:r.Pawn,color:o.Light,firstMove:!0,index:t};return e},b=function(e){var n=Object(h.a)(j);n[e.end]=Object(f.a)(Object(f.a)({},n[e.start]),{},{firstMove:!1,index:e.end}),y(e.end,n)&&(n[e.end]={piece:r.Queen,color:n[e.end].color,index:e.end,firstMove:!1}),n[e.start]={piece:r.Empty,color:o.None,firstMove:!1,index:e.start},ne(e.start),ie(e.end),D(n),g()},N=function(){return 5},B=Object(i.useState)((function(){return M()})),L=Object(d.a)(B,2),j=L[0],D=L[1],S=Object(i.useState)(o.Light),w=Object(d.a)(S,2),K=w[0],H=w[1],Q=Object(i.useState)(-1),J=Object(d.a)(Q,2),A=J[0],R=J[1],I=Object(i.useState)([-1]),T=Object(d.a)(I,2),q=T[0],C=T[1],F=Object(i.useState)([-1]),z=Object(d.a)(F,2),G=z[0],U=z[1],V=Object(i.useState)(!1),W=Object(d.a)(V,2),X=W[0],Y=W[1],Z=Object(i.useState)(-1),$=Object(d.a)(Z,2),ee=$[0],ne=$[1],te=Object(i.useState)(-1),re=Object(d.a)(te,2),oe=re[0],ie=re[1];return Object(i.useEffect)((function(){var e=[];j.forEach((function(n){n.piece!==r.Empty&&n.color!==K&&q.includes(n.index)&&e.push(n.index)})),U(e)}),[q]),Object(i.useEffect)((function(){(function(){var e=Object(p.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(K!==o.Dark){e.next=5;break}return e.next=3,P(j,3,o.Dark);case 3:n=e.sent,b(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[K]),Object(i.useEffect)((function(){return function(){var e=!1,n=!1;j.forEach((function(t){t.piece===r.King&&(t.color===o.Light?e=!0:n=!0)})),!1===e?(alert("Dark has won"),N(),Y(!0)):!1===n&&(alert("Light has won"),N(),Y(!0))}()})),Object(i.useEffect)((function(){D(M()),Y(!1)}),[X]),c.a.createElement("div",{className:"Board__container"},c.a.createElement("div",{className:"Board__gameboard"},j.map((function(i,l){return c.a.createElement("div",{className:["Board__space","".concat(e(l)?"Board__spaceLight":"Board__spaceDark"),"".concat(t(l)?n(l)?"Board__king-light":"Board__king-dark":""),"".concat(a(l)?n(l)?"Board__queen-light":"Board__queen-dark":""),"".concat(u(l)?n(l)?"Board__bishop-light":"Board__bishop-dark":""),"".concat(s(l)?n(l)?"Board__knight-light":"Board__knight-dark":""),"".concat(v(l)?n(l)?"Board__rook-light":"Board__rook-dark":""),"".concat(m(l)?n(l)?"Board__pawn-light":"Board__pawn-dark":""),"".concat(E(l)&&"Board__Selected"),"".concat(_(l)&&"Board__AvailableMove"),"".concat(k(l)&&"Board__KillingMove"),"".concat(l===ee&&"Board__AiMoveStart"),"".concat(l===oe&&"Board__AiMoveFinish")].join(" "),onClick:function(){return function(e){if(q.includes(e)){var n=Object(h.a)(j);n[e]=Object(f.a)(Object(f.a)({},j[A]),{},{index:e,firstMove:!1}),y(e,n)&&(n[e]={piece:r.Queen,color:j[A].color,index:e,firstMove:!1}),n[A]={piece:r.Empty,color:o.None,index:A,firstMove:!1},R(-1),D(n),C([]),U([]),g()}else R(e),j[e].color===K?C(x(j[e],j)):C([])}(l)},key:l},l)}))),c.a.createElement("h1",null,"Number of boards evaluated: ",O))},q=(t(19),function(){return c.a.createElement("div",{className:"Header__container"},c.a.createElement("div",{className:"Header__title-container"},c.a.createElement("h1",null,"Chess AI with Min Max Algorithm")),c.a.createElement("div",{className:"Header__legend-container"},c.a.createElement("div",{className:"Header__legend-item"},c.a.createElement("div",{className:"Header__selected-index"}),c.a.createElement("p",null,"Selected Index")),c.a.createElement("div",{className:"Header__legend-item"},c.a.createElement("div",{className:"Header__available-move"}),c.a.createElement("p",null,"Available Move")),c.a.createElement("div",{className:"Header__legend-item"},c.a.createElement("div",{className:"Header__killing-move"}),c.a.createElement("p",null,"Taking Move")),c.a.createElement("div",{className:"Header__legend-item"},c.a.createElement("div",{className:"Header__ai-start-pos"}),c.a.createElement("p",null,"AI Turn Start Position")),c.a.createElement("div",{className:"Header__legend-item"},c.a.createElement("div",{className:"Header__ai-finish-pos"}),c.a.createElement("p",null,"AI Turn End Position"))))});var C=function(){return c.a.createElement("div",{className:"app"},c.a.createElement(q,null),c.a.createElement(T,null))};u.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(C,null)),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.76dd0d37.chunk.js.map