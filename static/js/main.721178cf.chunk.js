(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{164:function(e,a,t){e.exports=t(596)},169:function(e,a,t){},595:function(e,a,t){},596:function(e,a,t){"use strict";t.r(a);var l=t(39),n=t(40),c=t(42),i=t(41),r=t(43),o=t(5),s=t.n(o),u=t(162),h=t.n(u),k=(t(169),t(163)),b=t.n(k),C=t(104),d=t.n(C),m=(t(595),function(e){function a(){return Object(l.a)(this,a),Object(c.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(r.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){var e=this.props.data.join("");return s.a.createElement("div",{className:"viewer"}," ",e," ")}}]),a}(o.Component)),v=function(e){function a(){return Object(l.a)(this,a),Object(c.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(r.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{onClick:this.props.onClick,className:"button","data-size":this.props.size,"data-value":this.props.value},this.props.label)}}]),a}(o.Component),p=function(e){function a(){var e;return Object(l.a)(this,a),(e=Object(c.a)(this,Object(i.a)(a).call(this))).calculateOperations=function(){var a=e.state.operations.join("");a&&(a=d.a.eval(a),a=d.a.format(a,{precision:14}),a=String(a),e.setState({operations:[a]}))},e.handleClick=function(a){var t=a.target.getAttribute("data-value");switch(t){case"clear":e.setState({operations:[]});break;case"equal":e.calculateOperations();break;default:var l=b()(e.state.operations,{$push:[t]});e.setState({operations:l})}},e.state={operations:[]},e}return Object(r.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h1",null,"React Calculator ",s.a.createElement("i",{class:"fab fa-react"})),s.a.createElement("div",{className:"line"}),s.a.createElement("div",{className:"calculator"},s.a.createElement(m,{data:this.state.operations}),s.a.createElement(v,{onClick:this.handleClick,label:"7",value:"7"}),s.a.createElement(v,{onClick:this.handleClick,label:"8",value:"8"}),s.a.createElement(v,{onClick:this.handleClick,label:"9",value:"9"}),s.a.createElement(v,{onClick:this.handleClick,label:"+",value:"+"}),s.a.createElement(v,{onClick:this.handleClick,label:"4",value:"4"}),s.a.createElement(v,{onClick:this.handleClick,label:"5",value:"5"}),s.a.createElement(v,{onClick:this.handleClick,label:"6",value:"6"}),s.a.createElement(v,{onClick:this.handleClick,label:"-",value:"-"}),s.a.createElement(v,{onClick:this.handleClick,label:"1",value:"1"}),s.a.createElement(v,{onClick:this.handleClick,label:"2",value:"2"}),s.a.createElement(v,{onClick:this.handleClick,label:"3",value:"3"}),s.a.createElement(v,{onClick:this.handleClick,label:"*",value:"*"}),s.a.createElement(v,{onClick:this.handleClick,label:"0",value:"0"}),s.a.createElement(v,{onClick:this.handleClick,label:"%",value:"%"}),s.a.createElement(v,{onClick:this.handleClick,label:".",value:"."}),s.a.createElement(v,{onClick:this.handleClick,label:"/",value:"/"}),s.a.createElement(v,{onClick:this.handleClick,label:"C",value:"clear",size:"2"}),s.a.createElement(v,{onClick:this.handleClick,label:"=",value:"equal",size:"2"})))}}]),a}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var E=function(e){function a(){return Object(l.a)(this,a),Object(c.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(r.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(p,null))}}]),a}(o.Component);h.a.render(s.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[164,1,2]]]);
//# sourceMappingURL=main.721178cf.chunk.js.map