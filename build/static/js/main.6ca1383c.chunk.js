(this["webpackJsonpmern-stack-client"]=this["webpackJsonpmern-stack-client"]||[]).push([[0],{107:function(e,t,a){},108:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),i=a.n(c),o=a(15),l=a(19),s=a(60),u=a(70),m=Object(l.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_ALL":return t.payload;case"LIKE":return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case"CREATE":return[].concat(Object(u.a)(e),[t.payload]);case"UPDATE":return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case"DELETE":return e.filter((function(e){return e._id!==t.payload}));default:return e}}}),p=a(40),d=a(147),f=a(148),g=a(142),b=a(151),v=a(146),h=a(145),E=a(139),y=a(141),x=a(150),j=a(143),O=a(144),C=a(66),k=a.n(C),w=a(67),I=a.n(w),N=a(65),T=a.n(N),_=a(61),S=a.n(_),A=a(12),D=a.n(A),L=a(21),z=a(30),W=a.n(z),F="https://app-your-memories.herokuapp.com/posts",B=function(e){return W.a.patch("".concat(F,"/").concat(e,"/likePost"))},M=function(e,t){return W.a.patch("".concat(F,"/").concat(e),t)},R=function(e){return W.a.delete("".concat(F,"/").concat(e))},H=function(e){return function(){var t=Object(L.a)(D.a.mark((function t(a){var n,r;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c=e,W.a.post(F,c);case 3:n=t.sent,r=n.data,a({type:"CREATE",payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}var c}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},P=function(e,t){return function(){var a=Object(L.a)(D.a.mark((function a(n){var r,c;return D.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,M(e,t);case 3:r=a.sent,c=r.data,n({type:"UPDATE",payload:c}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0.message);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()},J=a(136),K=Object(J.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),U=function(e){var t=e.post,a=e.setCurrentId,n=Object(o.b)(),c=K();return r.a.createElement(E.a,{className:c.card},r.a.createElement(y.a,{className:c.media,image:t.selectedFile||"https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png",title:t.title}),r.a.createElement("div",{className:c.overlay},r.a.createElement(g.a,{variant:"h6"},t.creator),r.a.createElement(g.a,{variant:"body2"},S()(t.createdAt).fromNow())),r.a.createElement("div",{className:c.overlay2},r.a.createElement(x.a,{style:{color:"white"},size:"small",onClick:function(){return a(t._id)}},r.a.createElement(T.a,{fontSize:"default"}))),r.a.createElement("div",{className:c.details},r.a.createElement(g.a,{variant:"body2",color:"textSecondary",component:"h2"},t.tags.map((function(e){return"#".concat(e," ")})))),r.a.createElement(g.a,{className:c.title,gutterBottom:!0,variant:"h5",component:"h2"},t.title),r.a.createElement(j.a,null,r.a.createElement(g.a,{variant:"body2",color:"textSecondary",component:"p"},t.message)),r.a.createElement(O.a,{className:c.cardActions},r.a.createElement(x.a,{size:"small",color:"primary",onClick:function(){return n((e=t._id,function(){var t=Object(L.a)(D.a.mark((function t(a){var n,r;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,B(e);case 3:n=t.sent,r=n.data,a({type:"LIKE",payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()));var e}},r.a.createElement(k.a,{fontSize:"small"})," Like ",t.likeCount," "),r.a.createElement(x.a,{size:"small",color:"primary",onClick:function(){return n((e=t._id,function(){var t=Object(L.a)(D.a.mark((function t(a){return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,R(e);case 3:a({type:"DELETE",payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0.message);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()));var e}},r.a.createElement(I.a,{fontSize:"small"})," Delete")))},V=Object(J.a)((function(e){return{mainContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}})),q=function(e){var t=e.setCurrentId,a=Object(o.c)((function(e){return e.posts})),n=V();return a.length?r.a.createElement(v.a,{className:n.container,container:!0,alignItems:"stretch",spacing:3},a.map((function(e){return r.a.createElement(v.a,{key:e._id,item:!0,xs:12,sm:6,md:6},r.a.createElement(U,{post:e,setCurrentId:t}))}))):r.a.createElement(h.a,null)},G=a(16),Q=a(72),X=a(149),Y=a(68),Z=a.n(Y),$=Object(J.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}})),ee=function(e){var t=e.currentId,a=e.setCurrentId,c=Object(n.useState)({creator:"",title:"",message:"",tags:"",selectedFile:""}),i=Object(p.a)(c,2),l=i[0],s=i[1],u=Object(o.c)((function(e){return t?e.posts.find((function(e){return e._id===t})):null})),m=Object(o.b)(),d=$();Object(n.useEffect)((function(){u&&s(u)}),[u]);var f=function(){a(0),s({creator:"",title:"",message:"",tags:"",selectedFile:""})},b=function(){var e=Object(L.a)(D.a.mark((function e(a){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),0===t?(m(H(l)),f()):(m(P(t,l)),f());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(Q.a,{className:d.paper},r.a.createElement("form",{autoComplete:"off",noValidate:!0,className:"".concat(d.root," ").concat(d.form),onSubmit:b},r.a.createElement(g.a,{variant:"h6"},t?'Editing "'.concat(u.title,'"'):"Creating a Memory"),r.a.createElement(X.a,{name:"creator",variant:"outlined",label:"Creator",fullWidth:!0,value:l.creator,onChange:function(e){return s(Object(G.a)(Object(G.a)({},l),{},{creator:e.target.value}))}}),r.a.createElement(X.a,{name:"title",variant:"outlined",label:"Title",fullWidth:!0,value:l.title,onChange:function(e){return s(Object(G.a)(Object(G.a)({},l),{},{title:e.target.value}))}}),r.a.createElement(X.a,{name:"message",variant:"outlined",label:"Message",fullWidth:!0,multiline:!0,rows:4,value:l.message,onChange:function(e){return s(Object(G.a)(Object(G.a)({},l),{},{message:e.target.value}))}}),r.a.createElement(X.a,{name:"tags",variant:"outlined",label:"Tags (coma separated)",fullWidth:!0,value:l.tags,onChange:function(e){return s(Object(G.a)(Object(G.a)({},l),{},{tags:e.target.value.split(",")}))}}),r.a.createElement("div",{className:d.fileInput},r.a.createElement(Z.a,{type:"file",multiple:!1,onDone:function(e){var t=e.base64;return s(Object(G.a)(Object(G.a)({},l),{},{selectedFile:t}))}})),r.a.createElement(x.a,{className:d.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0},"Submit"),r.a.createElement(x.a,{variant:"contained",color:"secondary",size:"small",onClick:f,fullWidth:!0},"Clear")))},te=Object(J.a)((function(){return{appBar:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},heading:{color:"rgba(0,183,255, 1)"},image:{marginLeft:"15px"}}})),ae=a(69),ne=a.n(ae),re=function(){var e=Object(n.useState)(0),t=Object(p.a)(e,2),a=t[0],c=t[1],i=Object(o.b)(),l=te();return Object(n.useEffect)((function(){i(function(){var e=Object(L.a)(D.a.mark((function e(t){var a,n;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,W.a.get(F);case 3:a=e.sent,n=a.data,t({type:"FETCH_ALL",payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[a,i]),r.a.createElement(d.a,{maxWidth:"lg"},r.a.createElement(f.a,{className:l.appBar,position:"static",color:"inherit"},r.a.createElement(g.a,{className:l.heading,variant:"h2",align:"center"},"Memories"),r.a.createElement("img",{className:l.image,src:ne.a,alt:"icon",height:"60"})),r.a.createElement(b.a,{in:!0},r.a.createElement(d.a,null,r.a.createElement(v.a,{container:!0,justify:"space-between",alignItems:"stretch",spacing:3},r.a.createElement(v.a,{item:!0,xs:12,sm:7},r.a.createElement(q,{setCurrentId:c})),r.a.createElement(v.a,{item:!0,xs:12,sm:4},r.a.createElement(ee,{currentId:a,setCurrentId:c}))))))},ce=(a(107),Object(l.e)(m,Object(l.d)(Object(l.a)(s.a))));i.a.render(r.a.createElement(o.a,{store:ce},r.a.createElement(re,null)),document.getElementById("root"))},69:function(e,t,a){e.exports=a.p+"static/media/memories.5c0c63fb.png"},77:function(e,t,a){e.exports=a(108)}},[[77,1,2]]]);
//# sourceMappingURL=main.6ca1383c.chunk.js.map