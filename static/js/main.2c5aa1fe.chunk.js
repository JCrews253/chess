(this.webpackJsonpchess=this.webpackJsonpchess||[]).push([[0],{16:function(e,t,n){e.exports=n(33)},21:function(e,t,n){},22:function(e,t,n){},24:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var r,o,i=n(0),c=n.n(i),a=n(8),s=n.n(a),u=(n(21),n(22),n(4)),l=n.n(u),p=n(9),d=n(2),f=n(1),v=n(5);n(24);!function(e){e[e.King=0]="King",e[e.Queen=1]="Queen",e[e.Bishop=2]="Bishop",e[e.Knight=3]="Knight",e[e.Rook=4]="Rook",e[e.Pawn=5]="Pawn",e[e.Empty=6]="Empty"}(r||(r={})),function(e){e[e.Dark=0]="Dark",e[e.Light=1]="Light",e[e.None=2]="None"}(o||(o={}));var h=function(e){return Math.floor(e/8)},m=function(e){return e>=8?e%8:e},E=function(e,t){return 8*e+t},_=function(e,t){var n=[];return e.piece===r.Knight&&(n=g(e.index,t)),e.piece===r.Rook&&(n=x(e.index,t)),e.piece===r.Bishop&&(n=M(e.index,t)),e.piece===r.Queen&&(n=n.concat(M(e.index,t)).concat(x(e.index,t))),e.piece===r.King&&(n=b(e.index,t)),e.piece===r.Pawn&&(n=k(e.index,t)),n},g=function(e,t){var n=h(e),r=m(e),o=[];return n>=2&&r<=6&&o.push(E(n-2,r+1)),n>=1&&r<=5&&o.push(E(n-1,r+2)),n<=6&&r<=5&&o.push(E(n+1,r+2)),n<=5&&r<=6&&o.push(E(n+2,r+1)),n<=5&&r>=1&&o.push(E(n+2,r-1)),n<=6&&r>=2&&o.push(E(n+1,r-2)),n>=1&&r>=2&&o.push(E(n-1,r-2)),n>=2&&r>=1&&o.push(E(n-2,r-1)),o.filter((function(n){return t[n].color!==t[e].color}))},x=function(e,t){for(var n=h(e),o=m(e),i=[],c=n;c-1>-1&&t[E(c-1,o)].piece===r.Empty;)i.push(E(c-1,o)),c--;c>0&&t[E(c-1,o)].color!==t[e].color&&i.push(E(c-1,o));for(var a=o;a+1<8&&t[E(n,a+1)].piece===r.Empty;)i.push(E(n,a+1)),a++;for(a<7&&t[E(n,a+1)].color!==t[e].color&&i.push(E(n,a+1)),c=n;c+1<8&&t[E(c+1,o)].piece===r.Empty;)i.push(E(c+1,o)),c++;for(c<7&&t[E(c+1,o)].color!==t[e].color&&i.push(E(c+1,o)),a=o;a-1>0&&t[E(n,a-1)].piece===r.Empty;)i.push(E(n,a-1)),a--;return a>0&&t[E(n,a-1)].color!==t[e].color&&i.push(E(n,a-1)),i},M=function(e,t){for(var n=h(e),o=m(e),i=[],c=n,a=o;c-1>-1&&a+1<8&&t[E(c-1,a+1)].piece===r.Empty;)i.push(E(c-1,a+1)),c--,a++;for(c-1>-1&&a+1<8&&t[E(c-1,a+1)].color!==t[e].color&&i.push(E(c-1,a+1)),c=n,a=o;c+1<8&&a+1<8&&t[E(c+1,a+1)].piece===r.Empty;)i.push(E(c+1,a+1)),c++,a++;for(c+1<8&&a+1<8&&t[E(c+1,a+1)].color!==t[e].color&&i.push(E(c+1,a+1)),c=n,a=o;c+1<8&&a-1>-1&&t[E(c+1,a-1)].piece===r.Empty;)i.push(E(c+1,a-1)),c++,a--;for(c+1<8&&a-1>-1&&t[E(c+1,a-1)].color!==t[e].color&&i.push(E(c+1,a-1)),c=n,a=o;c-1>-1&&a-1>-1&&t[E(c-1,a-1)].piece===r.Empty;)i.push(E(c-1,a-1)),c--,a--;return c-1>-1&&a-1>-1&&t[E(c-1,a-1)].color!==t[e].color&&i.push(E(c-1,a-1)),i},b=function(e,t){var n=h(e),r=m(e),o=[];return n>0&&o.push(E(n-1,r)),n>0&&r<7&&o.push(E(n-1,r+1)),r<7&&o.push(E(n,r+1)),n<7&&r<7&&o.push(E(n+1,r+1)),n<7&&o.push(E(n+1,r)),n<7&&r>0&&o.push(E(n+1,r-1)),r>0&&o.push(E(n,r-1)),n>0&&r>0&&o.push(E(n-1,r-1)),j(e,t)&&o.push(E(n,r+2)),y(e,t)&&o.push(E(n,r-2)),o.filter((function(n){return t[n].color!==t[e].color}))},k=function(e,t){var n=h(e),i=m(e),c=[];return t[e].color===o.Light?(n>0&&t[E(n-1,i)].piece===r.Empty&&c.push(E(n-1,i)),t[e].firstMove&&t[E(n-1,i)].piece===r.Empty&&t[E(n-2,i)].piece===r.Empty&&c.push(E(n-2,i)),i>0&&n>0&&t[E(n-1,i-1)].piece!==r.Empty&&t[E(n-1,i-1)].color!==o.Light&&c.push(E(n-1,i-1)),i<7&&n>0&&t[E(n-1,i+1)].piece!==r.Empty&&t[E(n-1,i+1)].color!==o.Light&&c.push(E(n-1,i+1))):(n<7&&t[E(n+1,i)].piece===r.Empty&&c.push(E(n+1,i)),t[e].firstMove&&t[E(n+1,i)].piece===r.Empty&&t[E(n+2,i)].piece===r.Empty&&c.push(E(n+2,i)),i>0&&n<7&&t[E(n+1,i-1)].piece!==r.Empty&&t[E(n+1,i-1)].color!==o.Dark&&c.push(E(n+1,i-1)),i<7&&n<7&&t[E(n+1,i+1)].piece!==r.Empty&&t[E(n+1,i+1)].color!==o.Dark&&c.push(E(n+1,i+1))),c},O=function(e,t){return t[e].piece===r.Pawn&&(t[e].color===o.Light&&e<8||t[e].color===o.Dark&&e>55)},j=function(e,t){if(t[e].firstMove&&t[e].piece===r.King){for(var n=1;t[e+n].piece===r.Empty&&n+m(e)<7;)n++;return!(t[e+n].piece!==r.Rook||t[e].color!==t[e+n].color||!t[e+n].firstMove)}return!1},y=function(e,t){if(t[e].firstMove&&t[e].piece===r.King){for(var n=1;t[e-n].piece===r.Empty&&m(e)-n>0;)n++;return!(t[e-n].piece!==r.Rook||t[e].color!==t[e-n].color||!t[e-n].firstMove)}return!1},N=0,B=function(e){return e.slice().reverse()},L=[0,0,0,0,0,0,0,0,5,5,5,5,5,5,5,5,1,1,2,3,3,2,1,1,.5,.5,1,2.5,2.5,1,.5,.5,0,0,0,2,2,0,0,0,.5,-.5,-1,0,0,-1,-.5,.5,.5,1,1,-2,-2,1,1,.5,0,0,0,0,0,0,0,0],D=B(L),S=[-5,-4,-3,-3,-3,-3,-4,-5,-4,-2,0,0,0,0,-2,-4,-3,0,1,1.5,1.5,1,0,-3,-3,.5,1.5,2,2,1.5,.5,-3,-3,0,1.5,2,2,1.5,0,-3,-3,.5,1,1.5,1.5,1,.5,-3,-4,-2,0,.5,.5,0,-2,-4,-5,-4,-3,-3,-3,-3,-4,-5],K=[-2,-1,-1,-1,-1,-1,-1,-2,-1,0,0,0,0,0,0,-1,-1,0,.5,1,1,.5,0,-1,-1,.5,.5,1,1,.5,.5,-1,-1,0,1,1,1,1,0,-1,-1,1,1,1,1,1,1,-1,-1,.5,0,0,0,0,.5,-1,-2,-1,-1,-1,-1,-1,-1,-2],w=B(K),A=[0,0,0,0,0,0,0,0,.5,1,1,1,1,1,1,.5,-.5,0,0,0,0,0,0,-.5,-.5,0,0,0,0,0,0,-.5,-.5,0,0,0,0,0,0,-.5,-.5,0,0,0,0,0,0,-.5,-.5,0,0,0,0,0,0,-.5,0,0,0,.5,.5,0,0,0],Q=B(A),R=[-2,-1,-1,-.5,-.5,-1,-1,-2,-1,0,0,0,0,0,0,-1,-1,0,.5,.5,.5,.5,0,-1,-.5,0,.5,.5,.5,.5,0,-.5,0,0,.5,.5,.5,.5,0,-.5,-1,.5,.5,.5,.5,.5,0,-1,-1,0,.5,0,0,0,0,-1,-2,-1,-1,-.5,-.5,-1,-1,-2],H=[-3,-4,-4,-5,-5,-4,-4,-3,-3,-4,-4,-5,-5,-4,-4,-3,-3,-4,-4,-5,-5,-4,-4,-3,-3,-4,-4,-5,-5,-4,-4,-3,-2,-3,-3,-4,-4,-3,-3,-2,-1,-2,-2,-2,-2,-2,-2,-1,2,2,0,0,0,0,2,2,2,3,1,0,0,1,3,2],P=B(H),J=function(){var e=Object(p.a)(l.a.mark((function e(t,n,i){var c,a,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N=0,c=JSON.parse(JSON.stringify(t)),a=-1/0,s={start:-1,end:-1},-1/0,1/0,c.filter((function(e){return e.color===i})).forEach((function(e){_(e,c).forEach((function(u){N++,c[u]={piece:c[e.index].piece,color:c[e.index].color,firstMove:!1,index:u},O(u,c)&&(c[u]={piece:r.Queen,color:c[e.index].color,index:u,firstMove:!1}),c[e.index]={piece:r.Empty,color:o.None,index:e.index,firstMove:!1};var l=C(c,n-1,i===o.Light?o.Dark:o.Light,!1,-1/0,1/0);l>a&&(a=l,s={start:e.index,end:u}),c=JSON.parse(JSON.stringify(t))}))})),e.abrupt("return",s);case 9:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),C=function e(t,n,i,c,a,s){var u=JSON.parse(JSON.stringify(t));if(n<=0)return V(u);var l=c?-1/0:1/0,p={start:-1,end:-1};return u.filter((function(e){return e.color===i})).forEach((function(d){_(d,u).forEach((function(f){N++,u[f]={piece:u[d.index].piece,color:u[d.index].color,index:f,firstMove:!1},O(f,u)&&(u[f]={piece:r.Queen,color:u[d.index].color,index:f,firstMove:!1}),u[d.index]={piece:r.Empty,color:o.None,index:d.index,firstMove:!1};var v=e(u,n-1,i===o.Light?o.Dark:o.Light,!c,a,s);(c?v>l:v<l)&&(l=v,p={start:d.index,end:f}),u=JSON.parse(JSON.stringify(t))}))})),-1!==p.start&&-1!==p.end?(u[p.end]={piece:u[p.start].piece,color:u[p.start].color,index:p.end,firstMove:!1},O(p.end,u)&&(u[p.end]={piece:r.Queen,color:u[p.end].color,index:p.end,firstMove:!1}),u[p.start]={piece:r.Empty,color:o.None,index:p.start,firstMove:!1},V(u)):c?-1/0:1/0},V=function(e){var t=e.filter((function(e){return e.color===o.Light})),n=e.filter((function(e){return e.color===o.Dark})),r=0;return n.forEach((function(e){return r+=I(e)})),t.forEach((function(e){return r-=I(e)})),r},I=function(e){return e.piece===r.King?900+(e.color===o.Light?H[e.index]:P[e.index]):e.piece===r.Queen?90+R[e.index]:e.piece===r.Bishop?30+(e.color===o.Light?K[e.index]:w[e.index]):e.piece===r.Knight?30+S[e.index]:e.piece===r.Rook?50+(e.color===o.Light?A[e.index]:Q[e.index]):e.piece===r.Pawn?10+(e.color===o.Light?L[e.index]:D[e.index]):0},T=n(3),q=function(e,t){return{type:t,payload:e}},F=function(){var e=function(e){return Math.floor(e/8)},t=function(e){return e>=8?e%8:e},n=function(n){return e(n)%2===t(n)%2},a=function(e){return R[e].color===o.Light},s=function(e){return R[e].piece===r.King},u=function(e){return R[e].piece===r.Queen},h=function(e){return R[e].piece===r.Bishop},m=function(e){return R[e].piece===r.Knight},E=function(e){return R[e].piece===r.Rook},g=function(e){return R[e].piece===r.Pawn},x=function(){return I(V===o.Light?o.Dark:o.Light)},M=function(e){return G===e},b=function(e){return Y.includes(e)},k=function(e){return te.includes(e)},N=function(){var e=new Array(64).fill({piece:r.Empty,color:o.None,firstMove:!0,index:-1});e.forEach((function(t,n){return e[n]={piece:r.Empty,color:o.None,firstMove:!0,index:n}})),e[0]={piece:r.Rook,color:o.Dark,firstMove:!0,index:0},e[1]={piece:r.Knight,color:o.Dark,firstMove:!0,index:1},e[2]={piece:r.Bishop,color:o.Dark,firstMove:!0,index:2},e[3]={piece:r.Queen,color:o.Dark,firstMove:!0,index:3},e[4]={piece:r.King,color:o.Dark,firstMove:!0,index:4},e[5]={piece:r.Bishop,color:o.Dark,firstMove:!0,index:5},e[6]={piece:r.Knight,color:o.Dark,firstMove:!0,index:6},e[7]={piece:r.Rook,color:o.Dark,firstMove:!0,index:7};for(var t=8;t<16;t++)e[t]={piece:r.Pawn,color:o.Dark,firstMove:!0,index:t};e[56]={piece:r.Rook,color:o.Light,firstMove:!0,index:56},e[57]={piece:r.Knight,color:o.Light,firstMove:!0,index:57},e[58]={piece:r.Bishop,color:o.Light,firstMove:!0,index:58},e[59]={piece:r.Queen,color:o.Light,firstMove:!0,index:59},e[60]={piece:r.King,color:o.Light,firstMove:!0,index:60},e[61]={piece:r.Bishop,color:o.Light,firstMove:!0,index:61},e[62]={piece:r.Knight,color:o.Light,firstMove:!0,index:62},e[63]={piece:r.Rook,color:o.Light,firstMove:!0,index:63};for(var n=48;n<56;n++)e[n]={piece:r.Pawn,color:o.Light,firstMove:!0,index:n};return e},B=function(e){var t=Object(v.a)(R);t[e.end]=Object(f.a)(Object(f.a)({},t[e.start]),{},{firstMove:!1,index:e.end}),O(e.end,t)?t[e.end]={piece:r.Queen,color:t[e.end].color,index:e.end,firstMove:!1}:j(e.start,R)&&e.end===e.start+2?(t[e.end-1]=Object(f.a)(Object(f.a)({},t[e.end+1]),{},{index:e.end-1,firstMove:!1}),t[e.end+1]={piece:r.Empty,color:o.None,index:e.end+1,firstMove:!1}):y(e.start,R)&&e.end===e.start-2&&(t[e.end+1]=Object(f.a)(Object(f.a)({},t[e.end-2]),{},{index:e.end+1,firstMove:!1}),t[e.end-2]={piece:r.Empty,color:o.None,index:e.end-2,firstMove:!1}),t[e.start]={piece:r.Empty,color:o.None,firstMove:!1,index:e.start},le(e.start),ve(e.end),D(e.start,e.end),H(t),x()},L=Object(T.b)(),D=function(e,t){var n=S(R[e].piece),o=K(t),i="";R[t].piece!==r.Empty&&(i="x");var c=Object(v.a)(R);c[t]=Object(f.a)(Object(f.a)({},c[e]),{},{firstMove:!1,index:t}),j(e,R)&&t===e+2||y(e,R)&&t===e-2?L(q("O-O","ADD_MOVE")):O(t,c)?L(q(n+"=Q","ADD_MOVE")):L(q(n+i+o,"ADD_MOVE"))},S=function(e){return e===r.King?"K":e===r.Queen?"Q":e===r.Bishop?"B":e===r.Knight?"N":e===r.Rook?"R":(r.Pawn,"")},K=function(n){return String.fromCharCode(97+t(n))+(8-e(n))},w=function(){return 5},A=Object(i.useState)((function(){return N()})),Q=Object(d.a)(A,2),R=Q[0],H=Q[1],P=Object(i.useState)(o.Light),C=Object(d.a)(P,2),V=C[0],I=C[1],F=Object(i.useState)(-1),z=Object(d.a)(F,2),G=z[0],U=z[1],W=Object(i.useState)([-1]),X=Object(d.a)(W,2),Y=X[0],Z=X[1],$=Object(i.useState)([-1]),ee=Object(d.a)($,2),te=ee[0],ne=ee[1],re=Object(i.useState)(!1),oe=Object(d.a)(re,2),ie=oe[0],ce=oe[1],ae=Object(i.useState)(-1),se=Object(d.a)(ae,2),ue=se[0],le=se[1],pe=Object(i.useState)(-1),de=Object(d.a)(pe,2),fe=de[0],ve=de[1];return Object(i.useEffect)((function(){var e=[];R.forEach((function(t){t.piece!==r.Empty&&t.color!==V&&Y.includes(t.index)&&e.push(t.index)})),ne(e)}),[Y]),Object(i.useEffect)((function(){(function(){var e=Object(p.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(V!==o.Dark){e.next=5;break}return e.next=3,J(R,3,o.Dark);case 3:t=e.sent,B(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[V]),Object(i.useEffect)((function(){return function(){var e=!1,t=!1;R.forEach((function(n){n.piece===r.King&&(n.color===o.Light?e=!0:t=!0)})),e||ie?t||ie||(alert("Light has won"),w(),ce(!0)):(alert("Dark has won"),w(),ce(!0))}()})),Object(i.useEffect)((function(){H(N()),le(-1),ve(-1),L(q(" ","CLEAR_MOVES")),ce(!1)}),[ie]),c.a.createElement("div",{className:"Board__container"},c.a.createElement("div",{className:"Board__gameboard"},R.map((function(e,t){return c.a.createElement("div",{className:["Board__space","".concat(n(t)?"Board__spaceLight":"Board__spaceDark"),"".concat(s(t)?a(t)?"Board__king-light":"Board__king-dark":""),"".concat(u(t)?a(t)?"Board__queen-light":"Board__queen-dark":""),"".concat(h(t)?a(t)?"Board__bishop-light":"Board__bishop-dark":""),"".concat(m(t)?a(t)?"Board__knight-light":"Board__knight-dark":""),"".concat(E(t)?a(t)?"Board__rook-light":"Board__rook-dark":""),"".concat(g(t)?a(t)?"Board__pawn-light":"Board__pawn-dark":""),"".concat(M(t)&&"Board__Selected"),"".concat(b(t)&&"Board__AvailableMove"),"".concat(k(t)&&"Board__KillingMove"),"".concat(t===ue&&"Board__AiMoveStart"),"".concat(t===fe&&"Board__AiMoveFinish")].join(" "),onClick:function(){return function(e){if(Y.includes(e)){var t=Object(v.a)(R);t[e]=Object(f.a)(Object(f.a)({},R[G]),{},{index:e,firstMove:!1}),O(e,t)?t[e]={piece:r.Queen,color:R[G].color,index:e,firstMove:!1}:j(G,R)&&e===G+2?(t[e-1]=Object(f.a)(Object(f.a)({},t[e+1]),{},{index:e-1,firstMove:!1}),t[e+1]={piece:r.Empty,color:o.None,index:e+1,firstMove:!1}):y(G,R)&&e===G-2&&(t[e+1]=Object(f.a)(Object(f.a)({},t[e-2]),{},{index:e+1,firstMove:!1}),t[e-2]={piece:r.Empty,color:o.None,index:e-2,firstMove:!1}),t[G]={piece:r.Empty,color:o.None,index:G,firstMove:!1},D(G,e),U(-1),H(t),Z([]),ne([]),x()}else U(e),R[e].color===V?Z(_(R[e],R)):Z([])}(t)},key:t},K(t))}))))},z=(n(31),function(){return c.a.createElement("div",{className:"Header__container"},c.a.createElement("div",{className:"Header__title-container"},c.a.createElement("h1",null,"Chess AI with Min Max Algorithm")),c.a.createElement("div",{className:"Header__legend-container"},c.a.createElement("div",{className:"Header__legend-item"},c.a.createElement("div",{className:"Header__selected-index"}),c.a.createElement("p",null,"Selected Index")),c.a.createElement("div",{className:"Header__legend-item"},c.a.createElement("div",{className:"Header__available-move"}),c.a.createElement("p",null,"Available Move")),c.a.createElement("div",{className:"Header__legend-item"},c.a.createElement("div",{className:"Header__killing-move"}),c.a.createElement("p",null,"Taking Move")),c.a.createElement("div",{className:"Header__legend-item"},c.a.createElement("div",{className:"Header__ai-start-pos"}),c.a.createElement("p",null,"AI Turn Start Position")),c.a.createElement("div",{className:"Header__legend-item"},c.a.createElement("div",{className:"Header__ai-finish-pos"}),c.a.createElement("p",null,"AI Turn End Position"))))}),G=(n(32),function(){var e=function(e){var t=[];t.push({number:0,lightMove:"Light",darkMove:"Dark"});for(var n=1,r=0;r<e.moves.length;r+=2)t.push({number:n,lightMove:e.moves[r],darkMove:e.moves[r+1]}),n++;return t}(Object(T.c)((function(e){return e.moves})));return c.a.createElement("div",{className:"SideBar__container"},c.a.createElement("div",{className:"SideBar__boards-checked"},"Evaluated Boards: ",N),c.a.createElement("div",{className:"SideBar__moves"},e.map((function(t,n){return c.a.createElement("div",{className:["SideBar__move",n%2===1?"":"SideBar__move-light-background"].join(" ")},c.a.createElement("div",{className:"SideBar__move-item"},e[n].number+")."),c.a.createElement("div",{className:"SideBar__move-item"},e[n].lightMove),c.a.createElement("div",{className:"SideBar__move-item"},void 0===e[n].darkMove?"":e[n].darkMove))}))))});var U=function(){return c.a.createElement("div",{className:"app"},c.a.createElement(z,null),c.a.createElement("div",{className:"main"},c.a.createElement(F,null),c.a.createElement(G,null)))},W=n(7),X={moves:[]},Y=Object(W.b)({moves:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_MOVE":return Object(f.a)(Object(f.a)({},e),{},{moves:[].concat(Object(v.a)(e.moves),[t.payload])});case"CLEAR_MOVES":return{moves:[]};default:return e}}}),Z=Object(W.c)(Y);s.a.render(c.a.createElement(T.a,{store:Z},c.a.createElement(U,null)),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.2c5aa1fe.chunk.js.map