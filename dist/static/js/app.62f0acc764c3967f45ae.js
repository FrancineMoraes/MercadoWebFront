webpackJsonp([0],{0:function(t,e){},"5cTG":function(t,e){},DCPy:function(t,e){},NHnr:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("7+uW"),a={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"cssmenu"}},[r("ul",[r("li",[r("a",{attrs:{href:"#"}},[r("span",[t._v("Estoque")])])]),t._v(" "),r("li",{staticClass:"active has-sub"},[r("a",{attrs:{href:"#"}},[r("span",[t._v("Produtos")])]),t._v(" "),r("ul",[r("li",{staticClass:"last"},[r("a",{attrs:{href:"#"}},[r("span",[t._v("Cadastrar Produto")])])]),t._v(" "),r("li",{staticClass:"has-sub"},[r("a",{attrs:{href:"#"}},[r("span",[t._v("Buscar Produto")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#"}},[r("span",[t._v("Busca por código")])])]),t._v(" "),r("li",{staticClass:"last"},[r("a",{attrs:{href:"#"}},[r("span",[t._v("Busca por nome")])])])])])])]),t._v(" "),r("li",{staticClass:"active has-sub"},[r("a",{attrs:{href:"#"}},[r("span",[t._v("Usuário")])]),t._v(" "),r("ul",[r("li",{staticClass:"last"},[r("a",{attrs:{href:"#"}},[r("span",[t._v("Cadastrar usuário")])])]),t._v(" "),r("li",{staticClass:"has-sub"},[r("a",{attrs:{href:"#"}},[r("span",[t._v("Buscar usuário")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#"}},[r("span",[t._v("Busca por código")])])]),t._v(" "),r("li",{staticClass:"last"},[r("a",{attrs:{href:"#"}},[r("span",[t._v("Busca por nome")])])])])])])]),t._v(" "),r("li",[r("a",{attrs:{href:"#"}},[r("span",[t._v("Caixa")])])])])])}]};var o={components:{Navbar:r("VU/8")({name:"Navbar"},a,!1,function(t){r("sD8P")},"data-v-1ba87392",null).exports}},s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Navbar"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var i=r("VU/8")(o,s,!1,function(t){r("Xig8")},null,null).exports,u=r("/ocq"),c={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"login"},[r("h1",[t._v("Login")]),t._v(" "),r("form",{attrs:{action:""}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{type:"text",name:"usernamein",placeholder:"Usuário",required:"required"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",name:"passwordin",placeholder:"Senha",required:"required"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),r("button",{staticClass:"btn btn-primary btn-block btn-large",attrs:{type:"submit"}},[t._v("Enviar")])]),t._v(" "),r("br")])},staticRenderFns:[]},d=r("VU/8")({data:function(){return{username:"",password:""}},methods:{}},c,!1,null,null,null).exports,l={name:"Main",components:{Signin:d}},v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"formlogin"},[e("Signin",{on:{"do-sign-in":this.doSignIn}})],1)},staticRenderFns:[]},p=r("VU/8")(l,v,!1,null,null,null).exports,m={name:"CreateProducts",data:function(){return{produto:{}}},created:function(){this.$http.get("http://localhost:8080/produto").then(function(t){this.produtos=t.body},function(t){console.log("nao funcionou")})}},_={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"formup"},[r("h1",[t._v("Cadastro de Produtos")]),t._v(" "),r("form",{staticClass:"createform",on:{submit:function(e){return e.preventDefault(),t.addNewProduct(e)}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.newProduct.codigoDeBarra,expression:"newProduct.codigoDeBarra"}],attrs:{type:"text",id:"codigoDeBarra",name:"codigoDeBarra",placeholder:"Código de Barra",required:"required"},domProps:{value:t.newProduct.codigoDeBarra},on:{input:function(e){e.target.composing||t.$set(t.newProduct,"codigoDeBarra",e.target.value)}}}),r("br"),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.newProduct.nome,expression:"newProduct.nome"}],attrs:{type:"text",id:"nome",name:"nome",placeholder:"Descrição do produto",required:"required"},domProps:{value:t.newProduct.nome},on:{input:function(e){e.target.composing||t.$set(t.newProduct,"nome",e.target.value)}}}),r("br"),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.newProduct.estoque,expression:"newProduct.estoque"}],attrs:{type:"text",id:"estoque",name:"estoque",placeholder:"Quantidade",required:"required"},domProps:{value:t.newProduct.estoque},on:{input:function(e){e.target.composing||t.$set(t.newProduct,"estoque",e.target.value)}}}),r("br"),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.newProduct.valorUn,expression:"newProduct.valorUn"}],attrs:{type:"text",id:"valorUn",name:"valorUn",placeholder:"Valor unitário"},domProps:{value:t.newProduct.valorUn},on:{input:function(e){e.target.composing||t.$set(t.newProduct,"valorUn",e.target.value)}}}),t._v(" "),r("br"),t._v(" "),r("button",{staticClass:"btn btn-primary btn-block btn-large",attrs:{type:"button"}},[t._v("Enviar")])])])},staticRenderFns:[]};var h=r("VU/8")(m,_,!1,function(t){r("5cTG")},"data-v-fe9f6b6a",null).exports,f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[this._v("Not Found")]),this._v(" "),e("router-link",{attrs:{to:{path:"/"}}},[this._v("Voltar")])],1)},staticRenderFns:[]},g=r("VU/8")({},f,!1,null,null,null).exports,P={data:function(){return{produtos:[]}},created:function(){this.$http.get("http://localhost:8080/produto").then(function(t){this.produtos=t.body},function(t){console.log("nao funcionou")})}},b={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",[t._m(0),t._v(" "),t._l(t.produtos,function(e){return r("tr",{key:e.nome},[r("td",[t._v(t._s(e.nome))]),t._v(" "),r("td",[t._v(t._s(e.codigoDeBarra))]),t._v(" "),r("td",[t._v(t._s(e.estoque))]),t._v(" "),r("td",[t._v(t._s(e.valorUn))])])})],2)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("th",[this._v("Nome")]),this._v(" "),e("th",[this._v("Código de Barras")]),this._v(" "),e("th",[this._v("Quantidade em estoque")]),this._v(" "),e("th",[this._v("Valor unitário")])])}]};var w=r("VU/8")(P,b,!1,function(t){r("DCPy")},"data-v-d0aded18",null).exports;n.a.use(u.a);var C=new u.a({mode:"history",routes:[{path:"/",name:"main",component:p,redirect:"/login"},{path:"/cadastro",name:"cadastro",component:h},{path:"/login",name:"Signin",component:d},{path:"/listProducts",name:"ListProducts",component:w},{path:"*",component:g}]}),q=r("8+8L");n.a.use(q.a),n.a.config.productionTip=!1,new n.a({el:"#app",router:C,render:function(t){return t(i)}})},Xig8:function(t,e){},sD8P:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.62f0acc764c3967f45ae.js.map