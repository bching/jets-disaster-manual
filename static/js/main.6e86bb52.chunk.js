(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),i=n(7),r=n.n(i),o=(n(13),n(1)),l=n(2),c=n(4),u=n(3),m=n(5),p=(n(15),"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."),d=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e="";return!0===this.props.toggle&&(e="-active"),s.a.createElement("div",{className:"sub-row"+e},s.a.createElement("p",null,p))}}]),t}(a.Component),h="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",g=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e="";return!0===this.props.toggle&&(e="-active"),s.a.createElement("div",{className:"sub-row"+e},s.a.createElement("p",null,h))}}]),t}(a.Component),b="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",y=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e="";return!0===this.props.toggle&&(e="-active"),s.a.createElement("div",{className:"sub-row"+e},s.a.createElement("p",null,b))}}]),t}(a.Component),v="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",w=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e="";return!0===this.props.toggle&&(e="-active"),s.a.createElement("div",{className:"sub-row"+e},s.a.createElement("p",null,v))}}]),t}(a.Component),f="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",k=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e="";return!0===this.props.toggle&&(e="-active"),s.a.createElement("div",{className:"sub-row"+e},s.a.createElement("p",null,f))}}]),t}(a.Component),E=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={subRows:{about:!0,earthquake:!1,tsunami:!1,landslide:!1,volcano:!1}},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"toggleSubRow",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(null!==e){var t={about:!1,earthquake:!1};t[e]=!0,this.setState({subRows:t})}}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"table-content-rows"},s.a.createElement("div",{className:"content-row",onClick:function(){return e.toggleSubRow("about")}},s.a.createElement("span",null,"About")),s.a.createElement(d,{toggle:this.state.subRows.about}),s.a.createElement("div",{className:"content-row",onClick:function(){return e.toggleSubRow("earthquake")}},s.a.createElement("span",null,"Earthquake"),s.a.createElement("div",{className:"content-row-img"},s.a.createElement("img",{alt:"",src:"/jets-disaster-manual/imgs/earthquake.jpeg"}))),s.a.createElement(g,{toggle:this.state.subRows.earthquake}),s.a.createElement("div",{className:"content-row",onClick:function(){return e.toggleSubRow("volcano")}},s.a.createElement("span",null,"Volcano"),s.a.createElement("div",{className:"content-row-img"},s.a.createElement("img",{alt:"",src:"/jets-disaster-manual/imgs/volcano.png"}))),s.a.createElement(k,{toggle:this.state.subRows.volcano}),s.a.createElement("div",{className:"content-row",onClick:function(){return e.toggleSubRow("landslide")}},s.a.createElement("span",null,"Landslide"),s.a.createElement("div",{className:"content-row-img"},s.a.createElement("img",{alt:"",src:"/jets-disaster-manual/imgs/landslide.png"}))),s.a.createElement(w,{toggle:this.state.subRows.landslide}),s.a.createElement("div",{className:"content-row",onClick:function(){return e.toggleSubRow("tsunami")}},s.a.createElement("span",null,"Tsunami"),s.a.createElement("div",{className:"content-row-img"},s.a.createElement("img",{alt:"",src:"/jets-disaster-manual/imgs/tsunami.png"}))),s.a.createElement(y,{toggle:this.state.subRows.tsunami}))}}]),t}(a.Component),j=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"landing-page"},s.a.createElement("div",{className:"header"},s.a.createElement("h1",null,"Japan Disaster Handbook")),s.a.createElement(E,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(17)}},[[8,2,1]]]);
//# sourceMappingURL=main.6e86bb52.chunk.js.map