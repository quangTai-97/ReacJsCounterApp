(this["webpackJsonpcounter-app"]=this["webpackJsonpcounter-app"]||[]).push([[0],{13:function(e,n,t){},14:function(e,n,t){},17:function(e,n,t){"use strict";t.r(n);var r=t(1),o=t.n(r),a=t(7),c=t.n(a),s=(t(13),t(8)),u=t(2),l=t(3),i=t(5),d=t(4),p=(t(14),t(0)),b=function(e){var n=e.totalCounters;return console.log("Navbar-renderd"),Object(p.jsx)("nav",{className:"navbar navbar-light bg-light",children:Object(p.jsxs)("a",{className:"navbar-brand",href:"#",children:["Navbar",Object(p.jsx)("span",{className:"badge bagge-pill badge-secondary",children:n})]})})},v=function(e){Object(i.a)(t,e);var n=Object(d.a)(t);function t(){var e;Object(u.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(e=n.call.apply(n,[this].concat(o))).state={value:e.props.counter.value},e.handleIncrement=function(){e.setState({value:e.state.value+1})},e}return Object(l.a)(t,[{key:"componentDidUpdate",value:function(e,n){console.log("prevProps",e),console.log("prevSate",n),e.counter.value,this.props.counter.value}},{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){console.log("Counter-unmount")}},{key:"render",value:function(){var e=this;return console.log("counter-renderd"),Object(p.jsxs)("div",{children:[Object(p.jsxs)("h4",{children:[" ",this.props.id]}),Object(p.jsx)("span",{className:this.getBadgeClasses(),children:this.formatCount()}),Object(p.jsx)("button",{onClick:function(){return e.props.onIncrement(e.props.counter)},className:"btn btn-secondary btn-sm",children:"Increment"}),Object(p.jsx)("button",{onClick:function(){return e.props.onDelete(e.props.counter.id)},className:"btn btn-danger btn-sm m-2",children:"Delete"})]})}},{key:"getBadgeClasses",value:function(){var e="badge m-2 badge-";return e+=0===this.props.counter.value?"warning":"primary"}},{key:"formatCount",value:function(){var e=this.props.counter.value;return 0===e?"Zero":e}}]),t}(r.Component),h=function(e){Object(i.a)(t,e);var n=Object(d.a)(t);function t(){return Object(u.a)(this,t),n.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){console.log("counters-renderd");var e=this.props,n=e.onReset,t=e.counters,r=e.onDelete,o=e.onIncrement;return Object(p.jsxs)("div",{children:[Object(p.jsx)("button",{onClick:n,className:"btn btn-primary btn-sm m-2",children:"Reset"}),t.map((function(e){return Object(p.jsx)(v,{onDelete:r,onIncrement:o,counter:e},e.id)}))]})}}]),t}(r.Component),j=function(e){Object(i.a)(t,e);var n=Object(d.a)(t);function t(){var e;return Object(u.a)(this,t),(e=n.call(this)).state={counters:[{id:1,value:4},{id:2,value:0},{id:3,value:0},{id:4,value:0}]},e.handleIncrement=function(n){var t=Object(s.a)(e.state.counters),r=t.indexOf(n);t[r].value++,e.setState({counters:t})},e.handleDelete=function(n){var t=e.state.counters.filter((function(e){return e.id!==n}));e.setState({counters:t})},e.handleReset=function(){var n=e.state.counters.map((function(e){return e.value=0,e}));e.setState({counters:n})},console.log("App-Constructor"),e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){console.log("App-Mounted")}},{key:"render",value:function(){return console.log("App-Render"),Object(p.jsxs)(o.a.Fragment,{children:[Object(p.jsx)(b,{totalCounters:this.state.counters.filter((function(e){return e.value>0})).length}),Object(p.jsx)("main",{className:"Container",children:Object(p.jsx)(h,{counters:this.state.counters,onReset:this.handleReset,onIncrement:this.handleIncrement,onDelete:this.handleDelete})})]})}}]),t}(r.Component),m=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,18)).then((function(n){var t=n.getCLS,r=n.getFID,o=n.getFCP,a=n.getLCP,c=n.getTTFB;t(e),r(e),o(e),a(e),c(e)}))};t(16);c.a.render(Object(p.jsx)(j,{}),document.getElementById("root")),m()}},[[17,1,2]]]);
//# sourceMappingURL=main.22e2300a.chunk.js.map