(this["webpackJsonpaccess-able"]=this["webpackJsonpaccess-able"]||[]).push([[0],{186:function(e,t,a){e.exports=a(330)},191:function(e,t,a){},192:function(e,t,a){},330:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(40),l=a.n(o),i=(a(191),a(192),a(173)),u=a(21),c=a(22),s=a(23),d=a(24),m=a(25),h=a(343),v=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,{id:"mainMenu",tabular:!0,inverted:!0,role:"navigation"},r.a.createElement(h.a.Header,{id:"mainHeader",as:"h1"},"AccessibleTableGenerator"))}}]),t}(n.Component),b=a(159),p=a.n(b),f=(a(300),a(301),function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){document.querySelector(".ace_text-input").setAttribute("aria-label","code editor")}},{key:"render",value:function(){return r.a.createElement(p.a,{height:"100%",width:"100%",mode:"html",placeholder:"Fill in inputs on the left to generate html",theme:"github",value:this.props.code})}}]),t}(n.Component));function C(e,t,a,n){var r="";0!==e&&0!==t&&(r+="<table>");for(var o=0;o<e;o++){r+="\n  <tr>";for(var l=0;l<t;l++)r+=o===a?'\n    <th scope="col">Column</th>':l===n?'\n    <th scope="row">Column</th>':"\n    <td>Column</td>";r+="\n  </tr>"}return 0!==e&&0!==t&&(r+="\n</table>"),r}var w=a(339),E=a(344),g=a(345),y=a(340),j=a(342),O=a(53),H=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={rows:void 0,columns:void 0,headerRow:void 0,headerColumn:void 0,render:!1,code:""},a.onChange=function(e){e.preventDefault();var t=document.querySelector("#rows").value,n=document.querySelector("#columns").value,r=""!==t?t:void 0,o=""!==n?n:void 0;a.setState({rows:r,columns:o})},a.onChangeHeaderRow=function(e,t){var n=t.value;a.setState({headerRow:n})},a.onChangeHeaderColumn=function(e,t){var n=t.value;a.setState({headerColumn:n})},a.onSubmit=function(e){e.preventDefault(),a.setState({render:!0})},a.createHTML=function(){if(void 0!==a.state.rows&&void 0!==a.state.columns){var e=C(a.state.rows,a.state.columns,a.state.headerRow,a.state.headerColumn);a.setState({code:e})}},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=document.querySelector("#headerRow"),t=document.querySelector("#headerColumn");e.removeAttribute("role"),t.removeAttribute("role")}},{key:"render",value:function(){for(var e=[],t=0;t<this.state.rows;t++)e.push({key:t+1,text:t,value:t});for(var a=[],n=0;n<this.state.columns;n++)a.push({key:n+1,text:n,value:n});return r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement(w.a,{className:"heightFix",id:"mainContainer"},r.a.createElement(E.a,{columns:"equal"},r.a.createElement(E.a.Column,null,r.a.createElement(g.a,{className:"heightFix",id:"mainSegment"},r.a.createElement(y.a,null,r.a.createElement(y.a.Group,{widths:"equal"},r.a.createElement(y.a.Input,{id:"rows",fluid:!0,type:"number",label:"# of Rows",onChange:this.onChange}),r.a.createElement(y.a.Dropdown,{id:"headerRow",fluid:!0,selection:!0,labeled:!0,label:"Header Row","aria-label":"Header Row",options:e,disabled:void 0===this.state.rows,onChange:this.onChangeHeaderRow})),r.a.createElement(y.a.Group,{widths:"equal"},r.a.createElement(y.a.Input,{id:"columns",fluid:!0,type:"number",label:"# of Columns",onChange:this.onChange}),r.a.createElement(y.a.Dropdown,{id:"headerColumn",fluid:!0,selection:!0,label:"Header Column","aria-label":"Header Column",options:a,disabled:void 0===this.state.columns,onChange:this.onChangeHeaderColumn}))))),r.a.createElement(E.a.Column,{width:2,id:"wrapper"},r.a.createElement(j.a,{id:"mainButton",icon:!0,onClick:this.createHTML},r.a.createElement(O.a,{name:"angle double right","aria-label":"Generate HTML"}))),r.a.createElement(E.a.Column,null,r.a.createElement(g.a,{className:"heightFix",id:"tertiarySegment"},r.a.createElement(f,{rows:this.state.rows,columns:this.state.columns,headerRow:this.state.headerRow,headerColumn:this.state.headerColumn,render:this.state.render,code:this.state.code}))))))}}]),t}(n.Component);var S=function(){return r.a.createElement(i.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(H,null)))};l.a.render(r.a.createElement(S,null),document.getElementById("root"))}},[[186,1,2]]]);
//# sourceMappingURL=main.a892ea18.chunk.js.map