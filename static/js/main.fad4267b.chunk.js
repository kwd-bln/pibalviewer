(this.webpackJsonppibalviewer=this.webpackJsonppibalviewer||[]).push([[0],{34:function(e,t,n){e.exports=n(47)},43:function(e,t,n){},44:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(10),i=n.n(r),c=n(11),s=(n(43),n(44),n(22)),l=n(2),u=n(14),h=n(15),p=n(16),f=n(17),d=n(5),g=n.n(d),m=n(12),v=n(29),b=Object(v.actionCreatorFactory)(),O=b("LOGIN"),E=b("INPUT_USER"),I=b("INPUT_PASS"),T=b("START_LOADING"),j=b("FINISH_LOADING"),k=b("START_FETCH_DATES"),w=b("FINISH_FETCH_DATES"),S=b("START_FETCH_PIBALDATA"),L=b("FINISH_FETCH_PIBALDATA"),D=b("ACTION_ENLARGE"),P=b("ACTION_SHRINK"),y=b("TOGGLE_VISIBLE"),C=b("SELECT_FLIGHT"),_=(b("GET_DATA_ERROR"),b("LOAD_DATA_ERROR"),b("FETCHED_DATA"),b("SET_DATES")),x=b("SET_WIND"),A=console.log.bind(console),M=function(e){return function(){var t=Object(m.a)(g.a.mark((function t(n){var a;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=localStorage.auth_token){t.next=3;break}return t.abrupt("return");case 3:return n(T()),t.next=6,fetch("https://oval-silicon-280513.an.r.appspot.com/api/v1/successLogin",{headers:{"x-access-token":a}}).then((function(e){return e.json()})).then((function(t){t.success?n(O(a)):localStorage.clear(),n(j()),e.push("/")})).catch((function(e){console.log(e),n(j())}));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},N=function(e){Object(f.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={isLoading:!1},a}return Object(h.a)(n,[{key:"componentWillMount",value:function(){var e=Object(m.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("Auth componentWillMount!!",this.props.loading),this.props.loading||this.props.login){e.next=5;break}return A("this.props componentDidMount",this.props),e.next=5,this.props.handleSetLoginState(this.props.history);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return console.log("authRender",this.props.loading),this.props.loading?o.a.createElement("div",null,"loading"):this.props.login?(console.log("Go to Top page"),o.a.createElement(l.b,{children:this.props.children})):(console.log("Go to Login page"),o.a.createElement(l.a,{to:"/login"}))}}]),n}(o.a.Component),F=Object(l.g)(Object(c.b)((function(e){return{login:e.state.login,token:e.state.token,loading:e.state.loading}}),(function(e){return{handleSetLoginState:function(){var t=Object(m.a)(g.a.mark((function t(n){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,M(n)(e);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}))(N)),R=function(e){var t=e.value;return o.a.createElement(o.a.Fragment,null,o.a.createElement("input",{type:"text",value:t,onChange:function(t){return e.onChangeValue(t.target.value)}}))},V=function(e,t,n){return function(){var a=Object(m.a)(g.a.mark((function a(o){var r;return g.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r=JSON.stringify({postUser:e,postPass:t}),console.log(r),o(T()),a.next=5,fetch("https://oval-silicon-280513.an.r.appspot.com/api/v1/authenticate",{method:"POST",headers:{"content-type":"application/json; charset=UTF-8"},body:r}).then((function(e){return console.log("res.json\u306e\u3068\u3053\u308d"),e.json()})).then((function(e){e.success&&(localStorage.setItem("auth_token",e.token),o(O(e.token))),o(j()),n.push("/")})).catch((function(e){console.log(" getToken error:",e),o(j()),n.push("/")}));case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},B=function(e){Object(f.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"handleSubmit",value:function(){var e=Object(m.a)(g.a.mark((function e(t){var n,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.props.username,a=this.props.password,e.next=4,this.props.handleOnClickSubmitButton(n,a,this.props.history);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"renderSubmit",value:function(){return this.props.loading?o.a.createElement("p",null,"Loading"):o.a.createElement("input",{type:"submit",value:"Send"})}},{key:"render",value:function(){var e=this;return console.log("login render",this.props.loading,this.props.login),o.a.createElement("div",null,o.a.createElement("p",null,"\u672a\u30ed\u30b0\u30a4\u30f3"),o.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("p",null,"name"),o.a.createElement("p",null,o.a.createElement(R,{name:"name",value:this.props.username,onChangeValue:this.props.handleOnChangeValueOfUserInput}))),o.a.createElement("li",null,o.a.createElement("p",null,"Password"),o.a.createElement("p",null,o.a.createElement(R,{name:"pass",value:this.props.password,onChangeValue:this.props.handleOnChangeValueOfPassInput})))),this.renderSubmit()))}}]),n}(o.a.Component),G=Object(l.g)(Object(c.b)((function(e){return{login:e.state.login,loading:e.state.loading,username:e.state.username,password:e.state.password}}),(function(e){return{handleClickLoginButton:function(){e(O("aaa"))},handleOnChangeValueOfUserInput:function(t){e(E(t))},handleOnChangeValueOfPassInput:function(t){e(I(t))},handleOnClickSubmitButton:function(){var t=Object(m.a)(g.a.mark((function t(n,a,o){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:V(n,a,o)(e);case 1:case"end":return t.stop()}}),t)})));return function(e,n,a){return t.apply(this,arguments)}}()}}))(B)),H=n(33),U=function(e){var t=e.dateInfoList.map((function(e,t){return{value:t,label:"".concat(q(e.date)," - ").concat(e.timePeriod)}}));return t.length?o.a.createElement("div",{className:"select-dates-div"},o.a.createElement(H.a,{options:t,defaultValue:t[0],className:"dates-select",onChange:function(t){var n=t.value;e.onChange(n)}})):o.a.createElement("p",null,"nodata")};var W=function(e){var t=Object(a.useRef)(null);return Object(a.useEffect)((function(){var n=[];e.windInfoList.forEach((function(e){var t=[],a=0,o=0;e.winds.forEach((function(e){var n=e.deg*(Math.PI/180);a+=30.8667*e.spd*Math.sin(n),o+=30.8667*e.spd*Math.cos(n),t.push({x:a,y:o})})),n.push({hours:e.hours,minutes:e.minutes,visible:e.visible,points:t})})),console.log(e.windInfoList.map((function(e){return e.winds})));var a=function(e){var t=function(e,t){return Math.max(e,t)};return e.map((function(e){return e.points.map((function(e){return Math.hypot(e.x,e.y)})).reduce(t)})).reduce(t,1)}(n),o=function(){var e=t.current;return e.width=480,e.height=480,e.getContext("2d")}(),r=function(e){var t=Math.ceil(e/3.2);return Math.max(Number(t.toPrecision(2)),10)}(a),i=48/r;console.log("maxR = ",a,"scale",i,r),o.save(),o.strokeStyle="#707070",o.fillStyle="#707070",o.beginPath(),o.moveTo(240,240),o.arc(240,240,2,0,2*Math.PI),o.fill();var c=t.current.width-50,s=t.current.height-50;o.beginPath(),o.moveTo(50,240),o.lineTo(c,240),o.moveTo(240,50),o.lineTo(240,s),o.moveTo(50,50),o.lineTo(c,s),o.moveTo(c,50),o.lineTo(50,s),o.stroke(),o.beginPath(),o.moveTo(240,240),o.arc(240,240,48,0,2*Math.PI),o.arc(240,240,96,0,2*Math.PI),o.arc(240,240,144,0,2*Math.PI),o.stroke(),o.beginPath();o.moveTo(.3*c,s),o.lineTo(.3*c,s+10),o.lineTo(.3*c+48,s+10),o.lineTo(.3*c+48,s),o.stroke(),o.restore(),o.save(),o.fillStyle="black",o.font="10px",o.textAlign="center",o.fillText(r.toString()+"m",.3*c+24,s+25),o.restore();var l=n.length;console.log(n);var u=Math.min(360/l,40);n.forEach((function(e,t){if(e.visible){var n=e.points,a=Math.ceil(u*t),r="hsl("+a+", 100%, 50%)",c="hsl("+a+", 80%, 45%)",s=240,l=240;n.forEach((function(e){o.save(),o.strokeStyle=r,o.fillStyle=c,o.beginPath(),o.moveTo(s,l),s=240+e.x*i,l=240-e.y*i,o.lineTo(s,l),o.stroke(),o.moveTo(s,l),o.arc(s,l,3,0,2*Math.PI),o.fill(),o.restore()}))}}))})),o.a.createElement("div",{className:"rect-wrap"},o.a.createElement("canvas",{className:"pibal-glaph",ref:t}))},J=function(e){Object(f.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"componentDidMount",value:function(){if(console.log("componentDidMount"),this.props.token)if(0===this.props.dateInfoList.length)console.log("fetch LoadDates"),this.props.handleOnLoadDates(this.props.token);else if(this.props.selected&&0===this.props.selected.windInfoList.length){var e=this.props.selected;this.props.handleOnLoadPiabalInfo(e.date,e.timePeriod,this.props.token)}}},{key:"componentDidUpdate",value:function(){if(this.props.token&&(console.log("fetch LoadPibalInfo"),this.props.selected&&0===this.props.selected.windInfoList.length)){var e=this.props.selected;this.props.handleOnLoadPiabalInfo(e.date,e.timePeriod,this.props.token)}}},{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(U,{dateInfoList:this.props.dateInfoList,onChange:this.props.handleOnChangeValue}),function(){if(e.props.selected)return o.a.createElement(W,{windInfoList:e.props.selected.windInfoList})}())}}]),n}(o.a.Component),X=Object(c.b)((function(e){return{token:e.state.token,fetchingDates:e.state.fetchingDates,fetchingPibalData:e.state.fetchingPibalData,scale:e.state.scale,selected:e.state.selected,dateInfoList:e.state.dateInfoList}}),(function(e){return{handleClickEnlargeButton:function(){e(D())},handleClickShrinkButton:function(){e(P())},handleOnChangeValue:function(t){e(C(t))},handleOnSelectToggleButton:function(t){e(y(t))},handleOnLoadDates:function(t){Y(t)(e)},handleOnLoadPiabalInfo:function(t,n,a){K(t,n,a)(e)}}}))(J),Y=function(e){return function(t){t(k()),fetch("https://oval-silicon-280513.an.r.appspot.com/api/v1/dates",{headers:{"x-access-token":e}}).then((function(e){return e.json()})).then((function(e){console.log("fetchDate",e);var n=e.data.map((function(e,t){return{id:t,date:$(e.date),timePeriod:e.timing}}));n.sort((function(e,t){return e.date.getTime()-t.date.getTime()})),t(_(n)),t(w()),0!==n.length&&t(C(0))})).catch((function(e){console.log("error in fetchDetes:",e),t(w())}))}},K=function(e,t,n){return function(a){!function(e,t,n,a){var o=function(e){var t=e.getFullYear().toString(),n=("00"+e.getMonth()).slice(-2),a=("00"+e.getDate()).slice(-2);return t+n+a}(t);e(S()),fetch("https://oval-silicon-280513.an.r.appspot.com/api/v1/".concat(o,"/").concat(n),{headers:{"x-access-token":a}}).then((function(e){return e.json()})).then((function(t){if(t.data.length){var n=[];t.data[0].infos.forEach((function(e){var t=e.hours,a=e.minutes,o=e.winds.map((function(e){return{alt:e.height,deg:e.degree,spd:e.speed}}));n.push({hours:t,minutes:a,winds:o,visible:!0})})),e(x(n)),e(L())}})).catch((function(t){console.log("error in getPibalInfo:",t),e(L())}))}(a,e,t,n)}};function $(e){var t=Number(e.slice(0,4)),n=Number(e.slice(4,6)),a=Number(e.slice(6));return new Date(t,n,a)}function q(e){return e.getFullYear().toString()+"/"+("00"+e.getMonth()).slice(-2)+"/"+("00"+e.getDate()).slice(-2)}var z=function(){return o.a.createElement(s.a,null,o.a.createElement(l.d,null,o.a.createElement(l.b,{path:"/login",component:G}),o.a.createElement(F,null,o.a.createElement(l.b,{exact:!0,path:"/",component:X})),o.a.createElement(l.b,{path:"/detail/",component:function(){return o.a.createElement(o.a.Fragment,null,"Detail!")}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Q=n(13),Z=n(3),ee=n(31),te={login:!1,token:"",username:"",password:"",loading:!1,fetchingDates:!1,fetchingPibalData:!1,hasError:!1,scale:1,selected:void 0,dateInfoList:[]},ne=Object(ee.reducerWithInitialState)(te).case(T,(function(e){return Object(Z.a)({},e,{loading:!0})})).case(j,(function(e){return Object(Z.a)({},e,{loading:!1})})).case(E,(function(e,t){return Object(Z.a)({},e,{username:t})})).case(I,(function(e,t){return Object(Z.a)({},e,{password:t})})).case(k,(function(e){console.log("startFetchDatesAction");return Object(Z.a)({},e,{fetchingDates:!0})})).case(w,(function(e){console.log("FinishFetchDatesAction");return Object(Z.a)({},e,{fetchingDates:!1})})).case(S,(function(e){return Object(Z.a)({},e,{fetchingPibalData:!0})})).case(L,(function(e){return Object(Z.a)({},e,{fetchingPibalData:!1})})).case(D,(function(e){var t=Math.min(e.scale+.1,2);return Object(Z.a)({},e,{scale:t})})).case(P,(function(e){var t=Math.max(e.scale-.1,.5);return Object(Z.a)({},e,{scale:t})})).case(_,(function(e,t){return Object(Z.a)({},e,{dateInfoList:t})})).case(x,(function(e,t){if(e.selected){var n=Object(Z.a)({},e.selected,{windInfoList:t});return Object(Z.a)({},e,{selected:n})}return e})).case(C,(function(e,t){var n=e.dateInfoList.find((function(e){return e.id===t}));if(n){var a={id:t,date:n.date,timePeriod:n.timePeriod,windInfoList:[]};return Object(Z.a)({},e,{selected:a})}return Object(Z.a)({},e)})).case(y,(function(e,t){var n=e.selected;if(n){var a=n.windInfoList[t].visible;return n.windInfoList[t].visible=!a,Object(Z.a)({},e,{selected:n})}return e})).case(O,(function(e,t){return Object(Z.a)({},e,{login:!0,token:t})})).build(),ae=n(32),oe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Q.d,re=Object(Q.e)(Object(Q.c)({state:ne}),oe(Object(Q.a)(ae.a)));i.a.render(o.a.createElement(c.a,{store:re},o.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.fad4267b.chunk.js.map