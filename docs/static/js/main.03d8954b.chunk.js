(this["webpackJsonpsubir-imagenes"]=this["webpackJsonpsubir-imagenes"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n,l=a(0),r=a.n(l),i=a(2),c=a.n(i),s=(a(13),a(14),function(){return r.a.createElement("header",{className:"text-center p-8"},r.a.createElement("h1",{className:"text-5xl font-bold"},"SUBIENDO IM\xc1GENES"))}),o=function(e){var t=e.text;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"text-3xl"},t),r.a.createElement("hr",{className:"pb-5"}))},u=function(e){var t=e.clas,a=e.file;return r.a.createElement("div",{className:"pt-8"},r.a.createElement("img",{src:a,className:t,alt:""}))},m=a(5),d=a(3),f=a(4),p=a(7),E=a(6),h=(n=function(e){var t=e.addFile,a=e.files,n=e.title,l=e.clase;return r.a.createElement("div",{className:"p-10 shadow-md"},r.a.createElement(o,{text:n}),r.a.createElement("input",{type:"file",className:"rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",onChange:t}),a.map((function(e,t){return r.a.createElement("div",{className:"pt-4",key:t},r.a.createElement(u,{clas:l,file:e}))})))},function(e){Object(p.a)(a,e);var t=Object(E.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).addFile=function(e){var t=e.target.files;n.fileReader.readAsDataURL(t[0])},n.appendFile=function(){n.setState({files:[].concat(Object(m.a)(n.state.files),[n.fileReader.result])})},n.state={files:[]},n.fileReader=new FileReader,console.log(n.fileReader),n}return Object(f.a)(a,[{key:"componentDidMount",value:function(){this.fileReader.addEventListener("load",this.appendFile)}},{key:"componentWillMount",value:function(){this.fileReader.removeEventListener("load",this.appendFile)}},{key:"render",value:function(){return r.a.createElement(n,Object.assign({},this.props,{addFile:this.addFile,files:this.state.files}))}}]),a}(l.Component));var g=function(){return r.a.createElement("main",{className:"main bg-white mx-64 w-2/3 mt-20 rounded"},r.a.createElement(s,null),r.a.createElement("form",{className:"rounded px-8 pt-6 pb-8 mb-4 grid grid-cols-2 gap-10"},r.a.createElement(h,{title:"Imagen Cuadrada"}),r.a.createElement(h,{title:"Imagen Circular",clase:"rounded-full"})))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root"))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.03d8954b.chunk.js.map