(this["webpackJsonpaccess-able"]=this["webpackJsonpaccess-able"]||[]).push([[0],{180:function(e,t,a){e.exports=a(323)},185:function(e,t,a){},186:function(e,t,a){},323:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(40),l=a.n(o),i=(a(185),a(186),a(21)),u=a(22),c=a(23),s=a(24),d=a(25),m=a(334),h=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(m.a,{id:"mainMenu",tabular:!0,inverted:!0,role:"navigation"},r.a.createElement(m.a.Header,{id:"mainHeader",as:"h1"},"AccessibleTableGenerator"))}}]),t}(n.Component),v=a(155),b=a.n(v),p=(a(294),a(295),function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){document.querySelector(".ace_text-input").setAttribute("aria-label","code editor")}},{key:"render",value:function(){return r.a.createElement(b.a,{height:"100%",width:"100%",mode:"html",placeholder:"Fill in inputs on the left to generate html",theme:"github",value:this.props.code})}}]),t}(n.Component));function f(e,t,a,n){var r="";0!==e&&0!==t&&(r+="<table>");for(var o=0;o<e;o++){r+="\n  <tr>";for(var l=0;l<t;l++)r+=o===a?'\n    <th scope="col">Column</th>':l===n?'\n    <th scope="row">Column</th>':"\n    <td>Column</td>";r+="\n  </tr>"}return 0!==e&&0!==t&&(r+="\n</table>"),r}var C=a(332),w=a(337),E=a(338),g=a(333),y=a(336),j=a(53),O=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={rows:void 0,columns:void 0,headerRow:void 0,headerColumn:void 0,render:!1,code:""},a.onChange=function(e){e.preventDefault();var t=document.querySelector("#rows").value,n=document.querySelector("#columns").value,r=""!==t?t:void 0,o=""!==n?n:void 0;a.setState({rows:r,columns:o})},a.onChangeHeaderRow=function(e,t){var n=t.value;a.setState({headerRow:n})},a.onChangeHeaderColumn=function(e,t){var n=t.value;a.setState({headerColumn:n})},a.onSubmit=function(e){e.preventDefault(),a.setState({render:!0})},a.createHTML=function(){if(void 0!==a.state.rows&&void 0!==a.state.columns){var e=f(a.state.rows,a.state.columns,a.state.headerRow,a.state.headerColumn);a.setState({code:e})}},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=document.querySelector("#headerRow"),t=document.querySelector("#headerColumn");e.removeAttribute("role"),t.removeAttribute("role")}},{key:"render",value:function(){for(var e=[],t=0;t<this.state.rows;t++)e.push({key:t+1,text:t,value:t});for(var a=[],n=0;n<this.state.columns;n++)a.push({key:n+1,text:n,value:n});return r.a.createElement("div",null,r.a.createElement(h,null),r.a.createElement(C.a,{className:"heightFix",id:"mainContainer"},r.a.createElement(w.a,{columns:"equal"},r.a.createElement(w.a.Column,null,r.a.createElement(E.a,{className:"heightFix",id:"mainSegment"},r.a.createElement(g.a,null,r.a.createElement(g.a.Group,{widths:"equal"},r.a.createElement(g.a.Input,{id:"rows",fluid:!0,type:"number",label:"# of Rows",onChange:this.onChange}),r.a.createElement(g.a.Dropdown,{id:"headerRow",fluid:!0,selection:!0,labeled:!0,label:"Header Row","aria-label":"Header Row",options:e,disabled:void 0===this.state.rows,onChange:this.onChangeHeaderRow})),r.a.createElement(g.a.Group,{widths:"equal"},r.a.createElement(g.a.Input,{id:"columns",fluid:!0,type:"number",label:"# of Columns",onChange:this.onChange}),r.a.createElement(g.a.Dropdown,{id:"headerColumn",fluid:!0,selection:!0,label:"Header Column","aria-label":"Header Column",options:a,disabled:void 0===this.state.columns,onChange:this.onChangeHeaderColumn}))))),r.a.createElement(w.a.Column,{width:2,id:"wrapper"},r.a.createElement(y.a,{id:"mainButton",icon:!0,onClick:this.createHTML},r.a.createElement(j.a,{name:"angle double right","aria-label":"Generate HTML"}))),r.a.createElement(w.a.Column,null,r.a.createElement(E.a,{className:"heightFix",id:"tertiarySegment"},r.a.createElement(p,{rows:this.state.rows,columns:this.state.columns,headerRow:this.state.headerRow,headerColumn:this.state.headerColumn,render:this.state.render,code:this.state.code}))))))}}]),t}(n.Component);var H=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(O,null))};l.a.render(r.a.createElement(H,null),document.getElementById("root"))}},[[180,1,2]]]);
//# sourceMappingURL=main.07c98ab8.chunk.js.map