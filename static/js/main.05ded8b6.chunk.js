(window.webpackJsonprobofriends=window.webpackJsonprobofriends||[]).push([[0],{20:function(e,t,n){e.exports=n(32)},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(9),c=n.n(o),i=n(10),s=n(8),l=n(17),u=n(18),h=n(19);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(n,!0).forEach((function(t){Object(h.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p={searchField:""},m={isPending:!1,robots:[],error:""},f=(n(29),n(30),n(3)),E=n(4),O=n(6),g=n(5),v=n(7),y=(n(31),function(e){function t(){return Object(f.a)(this,t),Object(O.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(E.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return!1}},{key:"render",value:function(){return a.a.createElement("h1",{className:"f1"},"RoboFriends")}}]),t}(r.Component)),j=function(e){var t=e.id,n=e.name,r=e.username,o=e.email;return a.a.createElement("div",{className:"tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5"},a.a.createElement("img",{src:"https://robohash.org/".concat(t,"?size=150x150"),alt:r}),a.a.createElement("div",null,a.a.createElement("h2",null,n),a.a.createElement("p",null,o)))},w=function(e){var t=e.data;return a.a.createElement("div",null,t.map((function(e){return a.a.createElement(j,{key:e.id,id:e.id,name:e.name,username:e.username,email:e.email})})))},R=function(e){var t=e.searchChange;return a.a.createElement("div",{className:"pa2"},a.a.createElement("input",{"aria-label":"Search Robots",className:"pa3 b--blue bg-lightest-blue",type:"search",placeholder:"search robots...",onChange:t}))},S=function(e){var t=e.children;return a.a.createElement("div",{style:{overflowY:"scroll",border:"5px solid black",height:"500px"}},t)},C=function(e){function t(e){var n;return Object(f.a)(this,t),(n=Object(O.a)(this,Object(g.a)(t).call(this,e))).state={hasError:!1},n}return Object(v.a)(t,e),Object(E.a)(t,[{key:"componentDidCatch",value:function(e,t){console.log("Error",e),console.log("Info",t),this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",null,"Oops, something went wrong."):this.props.children}}]),t}(r.Component),P=function(e){function t(){return Object(f.a)(this,t),Object(O.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.robots,r=e.isPending,o=e.onSearchChange,c=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})),i=a.a.createElement("h1",{className:"tc"},"Loading..."),s=a.a.createElement("div",{className:"tc"},a.a.createElement(y,null),a.a.createElement(R,{searchChange:o}),a.a.createElement(S,null,a.a.createElement(C,null,a.a.createElement(w,{data:c}))));return r?i:s}}]),t}(r.Component);P.whyDidYouRender=!0;var _=Object(i.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})}))}))}}}))(P);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var k=Object(l.createLogger)(),D=Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return b({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return b({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return b({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return b({},e,{error:t.payload,isPending:!1});default:return e}}}),N=Object(s.d)(D,Object(s.a)(u.a,k));c.a.render(a.a.createElement(i.a,{store:N},a.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[20,1,2]]]);
//# sourceMappingURL=main.05ded8b6.chunk.js.map