(this.webpackJsonppibalviewer=this.webpackJsonppibalviewer||[]).push([[0],{122:function(e,t,n){e.exports=n(138)},131:function(e,t,n){},135:function(e,t,n){},138:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(21),o=n.n(c),s=n(16),i=(n(131),n(24)),u=n(37),l=n(35),d=n(36),f=n(38),h=n(39),p=n(67),m=Object(p.actionCreatorFactory)(),b=m("REQUEST_LOGIN"),E=m("REQUEST_LOGOUT"),g=m("INPUT_USER"),O=m("INPUT_PASS"),T=m("START_LOADING"),v=m("FINISH_LOADING"),j=m("START_CREATE_TOKEN"),I=(m("FINISH_CREATE_TOKEN"),m("START_FETCH_DATES")),x=m("FINISH_FETCH_DATES"),w=m("SET_DATES"),S=m("START_FETCH_PIBALDATA"),k=m("FINISH_FETCH_PIBALDATA"),y=m("ACTION_ENLARGE"),L=m("ACTION_SHRINK"),_=m("TOGGLE_VISIBLE"),A=m("SELECT_FLIGHT"),N=(m("GET_DATA_ERROR"),m("LOAD_DATA_ERROR"),m("FETCHED_DATA"),m("SET_WIND")),C=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){return Object(l.a)(this,n),t.call(this,e)}return Object(d.a)(n,[{key:"render",value:function(){var e=localStorage.auth_token;return e&&!this.props.token&&this.props.setLocalStorageToken(e),console.log("authRender",this.props.loading,this.props.token.length>0),this.props.loading?r.a.createElement("div",null,"loading"):this.props.token.length||e?(console.log("Go to Top page"),r.a.createElement(i.b,{children:this.props.children})):(console.log("Go to Login page"),r.a.createElement(i.a,{to:"/login"}))}}]),n}(r.a.Component),D=Object(i.f)(Object(s.c)((function(e){return{token:e.state.token,loading:e.state.loading}}),(function(e){return{setLocalStorageToken:function(t){e(b(t))}}}))(C)),R=n(74),M=n(142),P=n(140),F=n(69),H=n(141),G=n(143),U=Object(s.c)((function(e){return{}}),(function(e){return{handleOnClickSubmitButton:function(t,n){e(j({username:t,password:n}))}}}))((function(e){var t=Object(R.a)(),n=t.register,a=t.handleSubmit,c=t.errors,o=t.reset;return r.a.createElement(M.a,{noValidate:!0,onSubmit:a((function(t){console.log(t.password,t.username),e.handleOnClickSubmitButton(t.username,t.password),o()}))},r.a.createElement(M.a.Group,{as:P.a,controlId:"username"},r.a.createElement(M.a.Label,{column:!0,sm:3,xs:12},"\u30e6\u30fc\u30b6\u30fc\u540d"),r.a.createElement(F.a,{xs:{span:10,offset:1},sm:7},r.a.createElement(M.a.Control,{name:"username",placeholder:"username",type:"text",isInvalid:void 0!==c.username,ref:n({required:"\u5165\u529b\u304c\u5fc5\u8981\u3067\u3059\uff01"})}),c.username&&r.a.createElement(M.a.Control.Feedback,{type:"invalid"},c.username.message))),r.a.createElement(M.a.Group,{as:P.a,controlId:"password"},r.a.createElement(M.a.Label,{column:!0,sm:3,xs:12},"\u30d1\u30b9\u30ef\u30fc\u30c9"),r.a.createElement(F.a,{xs:{span:10,offset:1},sm:7},r.a.createElement(M.a.Control,{name:"password",placeholder:"password",type:"password",isInvalid:void 0!==c.password,ref:n({required:"\u5165\u529b\u304c\u5fc5\u8981\u3067\u3059\uff01"})})),c.password&&r.a.createElement(M.a.Control.Feedback,{type:"invalid"},c.password.message)),r.a.createElement(M.a.Group,null,r.a.createElement(F.a,{sm:5},r.a.createElement(H.a,null,r.a.createElement(G.a,{variant:"primary",type:"submit"},"\u30ed\u30b0\u30a4\u30f3")))))})),B=n(20),K=Object(B.a)(),Q=(n(135),n(73)),V=function(e){var t=e.dateInfoList.map((function(e,t){return{value:t,label:"".concat(ee(e.date)," - ").concat(e.timePeriod)}}));return t.length?r.a.createElement("div",{className:"select-dates-div"},r.a.createElement(Q.a,{options:t,defaultValue:t[0],className:"dates-select",onChange:function(t){var n=t.value;e.onChange(n)}})):r.a.createElement("p",null,"nodata")};var W=function(e){var t=Object(a.useRef)(null);return Object(a.useEffect)((function(){var n=[];e.windInfoList.forEach((function(e){var t=[],a=0,r=0;e.winds.forEach((function(e){var n=e.deg*(Math.PI/180);a+=30.8667*e.spd*Math.sin(n),r+=30.8667*e.spd*Math.cos(n),t.push({x:a,y:r})})),n.push({hours:e.hours,minutes:e.minutes,visible:e.visible,points:t})})),console.log(e.windInfoList.map((function(e){return e.winds})));var a=function(e){var t=function(e,t){return Math.max(e,t)};return e.map((function(e){return e.points.map((function(e){return Math.hypot(e.x,e.y)})).reduce(t)})).reduce(t,1)}(n),r=function(){var e=t.current;return e.width=480,e.height=480,e.getContext("2d")}(),c=function(e){var t=Math.ceil(e/3.2);return Math.max(Number(t.toPrecision(2)),10)}(a),o=48/c;console.log("maxR = ",a,"scale",o,c),r.save(),r.strokeStyle="#707070",r.fillStyle="#707070",r.beginPath(),r.moveTo(240,240),r.arc(240,240,2,0,2*Math.PI),r.fill();var s=t.current.width-50,i=t.current.height-50;r.beginPath(),r.moveTo(50,240),r.lineTo(s,240),r.moveTo(240,50),r.lineTo(240,i),r.moveTo(50,50),r.lineTo(s,i),r.moveTo(s,50),r.lineTo(50,i),r.stroke(),r.beginPath(),r.moveTo(240,240),r.arc(240,240,48,0,2*Math.PI),r.arc(240,240,96,0,2*Math.PI),r.arc(240,240,144,0,2*Math.PI),r.stroke(),r.beginPath();r.moveTo(.3*s,i),r.lineTo(.3*s,i+10),r.lineTo(.3*s+48,i+10),r.lineTo(.3*s+48,i),r.stroke(),r.restore(),r.save(),r.fillStyle="black",r.font="10px",r.textAlign="center",r.fillText(c.toString()+"m",.3*s+24,i+25),r.restore();var u=n.length;console.log(n);var l=Math.min(360/u,40);n.forEach((function(e,t){if(e.visible){var n=e.points,a=Math.ceil(l*t),c="hsl("+a+", 100%, 50%)",s="hsl("+a+", 80%, 45%)",i=240,u=240;n.forEach((function(e){r.save(),r.strokeStyle=c,r.fillStyle=s,r.beginPath(),r.moveTo(i,u),i=240+e.x*o,u=240-e.y*o,r.lineTo(i,u),r.stroke(),r.moveTo(i,u),r.arc(i,u,3,0,2*Math.PI),r.fill(),r.restore()}))}}))})),r.a.createElement("div",{className:"rect-wrap"},r.a.createElement("canvas",{className:"pibal-glaph",ref:t}))},J=n(11),Y=n(54);var q=function(e){var t=e.arrow,n=e.position,c=e.id,o="arrow-".concat(c);return Object(a.useEffect)((function(){var e=Y.b(".".concat(o)),a=function(e){var t=Math.cos(e.rad),n=Math.sin(e.rad);return{x0:-e.length*n/2,y0:e.length*t/2,x1:e.length*n/2,y1:-e.length*t/2,color:"hsl(".concat(e.hue,",50%,50%)")}}(t);e.append("defs").append("marker").attr("id","arrowhead-".concat(c)).attr("refX",1).attr("refY",2).attr("markerWidth",4).attr("markerHeight",4).attr("orient","auto").append("path").attr("d","M 0,0 V 4 L4,2 Z").attr("fill",a.color);var r=Y.a().x((function(e){return e[0]})).y((function(e){return e[1]}));e.append("path").attr("d",r([[a.x0,a.y0],[a.x1,a.y1]])).attr("stroke",a.color).attr("stroke-width",2).attr("fill","none").attr("marker-end","url(#arrowhead-".concat(c,")")).attr("transform","translate(".concat(n.x,", ").concat(n.y,")"))})),r.a.createElement("g",{className:o,key:c})},z=function(e){var t=e.children,n=e.width,a=e.height;return r.a.createElement("svg",{style:{width:n,height:a}},t)},X=function(e){if(!e.windInfoList.length)return null;var t=Math.max.apply(Math,Object(J.a)(e.windInfoList.map((function(e){return Math.max.apply(Math,Object(J.a)(e.winds.map((function(e){return e.spd}))))})))),n=Math.min.apply(Math,Object(J.a)(e.windInfoList.map((function(e){return Math.min.apply(Math,Object(J.a)(e.winds.map((function(e){return e.spd}))))})))),a=Math.max.apply(Math,Object(J.a)(e.windInfoList.map((function(e){return e.winds.length})))),c=e.windInfoList.length,o=30*c,s=30*a,i=0;return r.a.createElement(z,{width:o,height:s},e.windInfoList.map((function(a,c){return a.winds.map((function(a,o){i++;var u,l={length:(u=a.spd,4+11/(t-n)*u),rad:a.deg/180*Math.PI,hue:a.deg},d={x:30*c+10,y:s-30*o-10};return r.a.createElement(q,{arrow:l,position:d,id:"".concat(e.selectedId,"-").concat(i),key:i})}))})))},Z=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.token&&0===this.props.dateInfoList.length&&(console.log("fetch LoadDates"),this.props.handleOnLoadDates())}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(V,{dateInfoList:this.props.dateInfoList,onChange:this.props.handleOnChangeValue}),function(){if(e.props.selected)return r.a.createElement("div",null,r.a.createElement(W,{windInfoList:e.props.selected.windInfoList}),r.a.createElement(X,{selectedId:e.props.selected.id,windInfoList:e.props.selected.windInfoList}))}())}}]),n}(r.a.Component),$=Object(s.c)((function(e){return{token:e.state.token,fetchingDates:e.state.fetchingDates,fetchingPibalData:e.state.fetchingPibalData,scale:e.state.scale,selected:e.state.selected,dateInfoList:e.state.dateInfoList}}),(function(e){return{handleClickEnlargeButton:function(){e(y())},handleClickShrinkButton:function(){e(L())},handleOnChangeValue:function(t){e(A(t))},handleOnSelectToggleButton:function(t){e(_(t))},handleOnLoadDates:function(){e(I())}}}))(Z);function ee(e){return e.getFullYear().toString()+"/"+("00"+e.getMonth()).slice(-2)+"/"+("00"+e.getDate()).slice(-2)}var te=function(){return r.a.createElement(u.a,{history:K},r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/login",component:U}),r.a.createElement(D,null,r.a.createElement(i.b,{exact:!0,path:"/",component:$}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ne=n(22),ae=n(75),re=n(14),ce=n(71),oe={token:"",loading:!1,creatingToken:!1,fetchingDates:!1,fetchingPibalData:!1,hasError:!1,scale:1,selected:void 0,dateInfoList:[]},se=Object(ce.reducerWithInitialState)(oe).case(T,(function(e){return Object(re.a)({},e,{loading:!0})})).case(v,(function(e){return Object(re.a)({},e,{loading:!1})})).case(g,(function(e,t){return Object(re.a)({},e,{username:t})})).case(O,(function(e,t){return Object(re.a)({},e,{password:t})})).case(I,(function(e){return Object(re.a)({},e,{fetchingDates:!0})})).case(x,(function(e){return Object(re.a)({},e,{fetchingDates:!1})})).case(S,(function(e){return Object(re.a)({},e,{fetchingPibalData:!0})})).case(k,(function(e){return Object(re.a)({},e,{fetchingPibalData:!1})})).case(y,(function(e){var t=Math.min(e.scale+.1,2);return Object(re.a)({},e,{scale:t})})).case(L,(function(e){var t=Math.max(e.scale-.1,.5);return Object(re.a)({},e,{scale:t})})).case(w,(function(e,t){return Object(re.a)({},e,{dateInfoList:t})})).case(N,(function(e,t){return Object(re.a)({},e,{selected:t})})).case(_,(function(e,t){var n=e.selected;if(n){var a=n.windInfoList[t].visible;return n.windInfoList[t].visible=!a,Object(re.a)({},e,{selected:n})}return e})).case(b,(function(e,t){return Object(re.a)({},e,{token:t})})).case(E,(function(e){return Object(re.a)({},e,{token:""})})).build(),ie=n(10),ue=n.n(ie),le=n(40),de=n(9);function fe(e,t){var n=JSON.stringify({postUser:e,postPass:t});return console.log("authorize",n),fetch("https://oval-silicon-280513.an.r.appspot.com/api/v1/authenticate",{method:"POST",mode:"cors",cache:"no-cache",credentials:"omit",headers:{"content-type":"application/json; charset=UTF-8"},body:n}).then((function(e){return e.json()})).then((function(e){return e.success?(localStorage.setItem("auth_token",e.token),{token:e.token}):{error:"such user is not exist"}})).catch((function(e){return console.log("fetch error: ",e),{error:e}}))}function he(e){return fetch("https://oval-silicon-280513.an.r.appspot.com/api/v1/dates",{headers:{"x-access-token":e}}).then((function(e){return e.json()})).then((function(e){var t=e.data.map((function(e,t){return{id:t,date:me(e.date),timePeriod:e.timing}}));return t.sort((function(e,t){return t.date.getTime()-e.date.getTime()})),{dateList:t}})).catch((function(e){return{error:e}}))}function pe(e,t,n){var a=function(e){var t=e.getFullYear().toString(),n=("00"+e.getMonth()).slice(-2),a=("00"+e.getDate()).slice(-2);return t+n+a}(t);return fetch("https://oval-silicon-280513.an.r.appspot.com/api/v1/".concat(a,"/").concat(n),{headers:{"x-access-token":e}}).then((function(e){return e.json()})).then((function(e){if(e.data.length){var t=[];return e.data[0].infos.forEach((function(e){var n=e.hours,a=e.minutes,r=e.winds.map((function(e){return{alt:e.height,deg:e.degree,spd:e.speed}}));t.push({hours:n,minutes:a,winds:r,visible:!0})})),{windInfoList:t}}return{error:"no such data"}})).catch((function(e){return{error:e}}))}function me(e){var t=Number(e.slice(0,4)),n=Number(e.slice(4,6)),a=Number(e.slice(6));return new Date(t,n,a)}var be=function(e){return e.state.token},Ee=function(e){return e.state.dateInfoList},ge=ue.a.mark(Ie),Oe=ue.a.mark(xe),Te=ue.a.mark(we),ve=ue.a.mark(Se),je=ue.a.mark(ke);function Ie(){var e,t,n,a,r,c;return ue.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=3,Object(de.e)("START_CREATE_TOKEN");case 3:return e=o.sent,t=e.payload.username,n=e.payload.password,o.next=8,Object(de.a)(fe,t,n);case 8:if(a=o.sent,r=a.token,c=a.error,console.log("action".concat("START_CREATE_TOKEN",", user: ").concat(t,", pass: ").concat(n,", token: ").concat(r,", error: ").concat(c)),r||!c){o.next=19;break}return o.next=15,Object(de.c)({type:"FINISH_CREATE_TOKEN"});case 15:return localStorage.clear(),o.next=18,Object(de.c)({type:"REQUEST_LOGOUT"});case 18:return o.abrupt("continue",0);case 19:if(!r){o.next=25;break}return console.log("authsaga REQUEST_LOGIN"),o.next=23,Object(de.c)({type:"REQUEST_LOGIN",payload:r});case 23:return o.next=25,Object(de.c)({type:"FINISH_CREATE_TOKEN"});case 25:o.next=0;break;case 27:case"end":return o.stop()}}),ge)}function xe(){return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,Object(de.e)("FINISH_CREATE_TOKEN");case 3:return e.next=5,Object(de.c)(Object(le.push)("/"));case 5:e.next=0;break;case 7:case"end":return e.stop()}}),Oe)}function we(){var e,t,n,a;return ue.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(de.d)(be);case 2:return e=r.sent,r.next=5,Object(de.a)(he,e);case 5:if(t=r.sent,n=t.dateList,a=t.error,console.log("action: ".concat("START_FETCH_DATES",", dateList: ").concat(n,", error: ").concat(a)),n||!a){r.next=17;break}return r.next=12,Object(de.c)({type:"FINISH_FETCH_DATES"});case 12:return localStorage.clear(),r.next=15,Object(de.c)({type:"REQUEST_LOGOUT"});case 15:return r.next=17,Object(de.c)(Object(le.push)("/"));case 17:if(!n){r.next=24;break}return r.next=20,Object(de.c)({type:"SET_DATES",payload:n});case 20:return r.next=22,Object(de.c)({type:"FINISH_FETCH_DATES"});case 22:return r.next=24,Object(de.c)({type:"SELECT_FLIGHT",payload:0});case 24:case"end":return r.stop()}}),Te)}function Se(){var e,t,n,a,r,c,o,s,i;return ue.a.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=3,Object(de.e)("SELECT_FLIGHT");case 3:return e=u.sent,t=e.payload,u.next=7,Object(de.d)(be);case 7:return n=u.sent,u.next=10,Object(de.d)(Ee);case 10:return a=u.sent,r=a[t],u.next=14,Object(de.a)(pe,n,r.date,r.timePeriod);case 14:if(c=u.sent,o=c.windInfoList,s=c.error,o||!s){u.next=23;break}return localStorage.clear(),u.next=21,Object(de.c)({type:"REQUEST_LOGOUT"});case 21:return u.next=23,Object(de.c)(Object(le.push)("/"));case 23:if(!o){u.next=28;break}return i={id:t,date:r.date,timePeriod:r.timePeriod,windInfoList:o},console.log(o),u.next=28,Object(de.c)({type:"SET_WIND",payload:i});case 28:u.next=0;break;case 30:case"end":return u.stop()}}),ve)}function ke(){return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(de.b)(Ie);case 2:return e.next=4,Object(de.b)(xe);case 4:return e.next=6,Object(de.f)("START_FETCH_DATES",we);case 6:return e.next=8,Object(de.b)(Se);case 8:case"end":return e.stop()}}),je)}var ye=n(72),Le=n.n(ye),_e=n(65);var Ae=function(e){var t=Object(ae.a)(),n=Object(ne.e)(Object(ne.c)({state:se,router:Object(u.b)(K)}),e,Object(ne.a)(t,Le.a,Object(_e.a)(K)));return t.run(ke),n}();o.a.render(r.a.createElement(s.a,{store:Ae},r.a.createElement(te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[122,1,2]]]);
//# sourceMappingURL=main.061f8026.chunk.js.map