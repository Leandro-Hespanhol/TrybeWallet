(this["webpackJsonpsd-0x-project-trybewallet"]=this["webpackJsonpsd-0x-project-trybewallet"]||[]).push([[0],{33:function(e,t,n){e.exports=n(47)},38:function(e,t,n){},44:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(19),i=n.n(c),u=n(17),l=(n(38),n(3)),o=n(14),s=n(29),p=n(30),m=n(13);var d={email:""};var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return Object(m.a)(Object(m.a)({},e),{},{email:t.email});default:return e}},b=n(32),E={currencies:[],expenses:[]};var v=Object(o.combineReducers)({user:h,wallet:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_CURRENCY":return Object(m.a)(Object(m.a)({},e),{},{currencies:t.currency});case"SAVE_EXPENSE":return Object(m.a)(Object(m.a)({},e),{},{expenses:[].concat(Object(b.a)(e.expenses),[t.expenseObj])});case"DELETE_EXPENSE":return Object(m.a)(Object(m.a)({},e),{},{expenses:t.ObjRemainder});default:return e}}}),f=Object(o.createStore)(v,Object(s.composeWithDevTools)(Object(o.applyMiddleware)(p.a))),g=n(2),j=n(15),O=n(4),y=n(5),C=n(8),x=n(7),k=n(6),w=function(e){Object(x.a)(n,e);var t=Object(k.a)(n);function n(){var e;return Object(O.a)(this,n),(e=t.call(this)).state={email:"",password:""},e.isLoginButtonDisabled=e.isLoginButtonDisabled.bind(Object(C.a)(e)),e.onInputChange=e.onInputChange.bind(Object(C.a)(e)),e}return Object(y.a)(n,[{key:"onInputChange",value:function(e){var t=e.target,n=t.name,a=t.value;this.setState(Object(j.a)({},n,a))}},{key:"isLoginButtonDisabled",value:function(){var e=this.state,t=e.email;return!(e.password.length>5&&/\S+@\S+.\S\.+com/.test(t))}},{key:"render",value:function(){var e=this.props.loginFunc,t=this.state.email;return r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"email-input"},"Email",r.a.createElement("input",{type:"email",name:"email",id:"email-input","data-testid":"email-input",onChange:this.onInputChange})),r.a.createElement("label",{htmlFor:"input-pass"},"Senha",r.a.createElement("input",{type:"password",name:"password",id:"input-pass","data-testid":"password-input",onChange:this.onInputChange})),r.a.createElement(u.b,{to:"/carteira"},r.a.createElement("button",{type:"submit",disabled:this.isLoginButtonDisabled(),onClick:function(){return e(t)}},"Entrar")))}}]),n}(r.a.Component),I=Object(l.b)(null,(function(e){return{loginFunc:function(t){return e(function(e){return{type:"LOGIN",email:e}}(t))}}}))(w),D=(n(44),n(25)),S=n.n(D),B=n(31),F=function(e){Object(x.a)(n,e);var t=Object(k.a)(n);function n(){var e;return Object(O.a)(this,n),(e=t.call(this)).onInputChange=e.onInputChange.bind(Object(C.a)(e)),e}return Object(y.a)(n,[{key:"componentDidMount",value:function(){var e=Object(B.a)(S.a.mark((function e(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"onInputChange",value:function(e){var t=e.target,n=t.name,a=t.value;this.setState(Object(j.a)({},n,a))}},{key:"render",value:function(){var e=this.props,t=e.currencies,n=e.onInputChange;return r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"currency-input"},"Moeda:",r.a.createElement("select",{name:"currency",id:"currency-input","data-testid":"currency-input",onChange:n},Object.keys(t).filter((function(e){return"USDT"!==e})).map((function(e){return r.a.createElement("option",{key:e,value:e}," ",e," ")})))))}}]),n}(a.Component),N=Object(l.b)((function(e){return{currencies:e.wallet.currencies}}),null)(F);F.defaultProps={currencies:[]};var R=function(e){Object(x.a)(n,e);var t=Object(k.a)(n);function n(){var e;return Object(O.a)(this,n),(e=t.call(this)).state={categories:["Alimenta\xe7\xe3o","Lazer","Trabalho","Transporte","Sa\xfade"]},e}return Object(y.a)(n,[{key:"render",value:function(){var e=this.state.categories,t=this.props,n=t.onInputChange,a=t.tag;return r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"tag-input"},"Categoria:",r.a.createElement("select",{name:"tag",value:a,id:"tag-input","data-testid":"tag-input",onChange:n},e.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)})))))}}]),n}(a.Component),T=Object(l.b)()(R),L=function(e){Object(x.a)(n,e);var t=Object(k.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return Object(y.a)(n,[{key:"render",value:function(){var e=this.props.onInputChange;return r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"description-input"},"Descri\xe7\xe3o:",r.a.createElement("input",{type:"text",name:"description","data-testid":"description-input",onChange:e})))}}]),n}(a.Component),V=Object(l.b)((function(e){return{description:e.wallet.description}}))(L),M=["Dinheiro","Cart\xe3o de cr\xe9dito","Cart\xe3o de d\xe9bito"],P=function(e){Object(x.a)(n,e);var t=Object(k.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return Object(y.a)(n,[{key:"render",value:function(){var e=this.props.onInputChange;return r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"method"},"M\xe9todo de pagamento",r.a.createElement("select",{name:"method",id:"method","data-testid":"method-input",onChange:e},M.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)})))))}}]),n}(a.Component),A=Object(l.b)((function(e){return{method:e.wallet.method}}))(P),_=function(e){Object(x.a)(n,e);var t=Object(k.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return Object(y.a)(n,[{key:"render",value:function(){var e=this.props,t=e.onInputChange,n=e.value;return r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"value-input"},"Valor:",r.a.createElement("input",{name:"value",value:n,type:"number","data-testid":"value-input",id:"value-input",onChange:t})))}}]),n}(a.Component),G=Object(l.b)()(_),U=function(e){Object(x.a)(n,e);var t=Object(k.a)(n);function n(){var e;return Object(O.a)(this,n),(e=t.call(this)).sommationValue=e.sommationValue.bind(Object(C.a)(e)),e}return Object(y.a)(n,[{key:"sommationValue",value:function(){return this.props.expenses.reduce((function(e,t){return e+t.value*t.exchangeRates[t.currency].ask}),0)}},{key:"render",value:function(){var e=this.props.email;return r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement("div",{"data-testid":"email-field"},"Email: ".concat(e)),r.a.createElement("div",null,"Despesa Total:"," ",r.a.createElement("input",{"data-testid":"total-field",value:this.sommationValue().toFixed(2),disabled:!0}),r.a.createElement("span",{"data-testid":"header-currency-field"}," BRL "))))}}]),n}(a.Component),X=Object(l.b)((function(e){return{expenses:e.wallet.expenses,currencies:e.wallet.currencies}}))(U),W=(n(46),function(e){Object(x.a)(n,e);var t=Object(k.a)(n);function n(e){var a;return Object(O.a)(this,n),(a=t.call(this,e)).generateExpense=a.generateExpense.bind(Object(C.a)(a)),a.expenseDeletionButton=a.expenseDeletionButton.bind(Object(C.a)(a)),a.expenseEditButton=a.expenseEditButton.bind(Object(C.a)(a)),a}return Object(y.a)(n,[{key:"expenseDeletionButton",value:function(e){var t=e.target.id,n=this.props,a=n.expenses;return(0,n.expenseDeletion)(a.filter((function(e){return Number(e.id)!==Number(t)})))}},{key:"expenseEditButton",value:function(e){var t=e.target.id,n=this.props.expenses.find((function(e){return e.id===t}));console.log(n)}},{key:"generateExpense",value:function(){var e=this;return this.props.expenses.map((function(t){return r.a.createElement("tbody",{key:t.id,id:t.id},r.a.createElement("tr",{className:"body-tr"},r.a.createElement("td",null,t.description),r.a.createElement("td",null,t.tag),r.a.createElement("td",null,t.method),r.a.createElement("td",null,"".concat(t.value)),r.a.createElement("td",null,t.exchangeRates[t.currency].name.split("/")[0]),r.a.createElement("td",null,Number(t.exchangeRates[t.currency].ask).toFixed(2)),r.a.createElement("td",null,"".concat(Number(t.exchangeRates[t.currency].ask)*Number(t.value).toFixed(2))),r.a.createElement("td",null,"Real"),r.a.createElement("td",null,r.a.createElement("button",{type:"button","data-testid":"edit-btn",onClick:e.expenseEditButton},"Editar"),r.a.createElement("button",{type:"button","data-testid":"delete-btn",id:t.id,onClick:e.expenseDeletionButton},"Excluir"))))}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",{className:"tr-class"},r.a.createElement("th",null,"Descri\xe7\xe3o"),r.a.createElement("th",null,"Tag"),r.a.createElement("th",null,"M\xe9todo de pagamento"),r.a.createElement("th",null,"Valor"),r.a.createElement("th",null,"Moeda"),r.a.createElement("th",null,"C\xe2mbio utilizado"),r.a.createElement("th",null,"Valor convertido"),r.a.createElement("th",null,"Moeda de convers\xe3o"),r.a.createElement("th",null,"Editar/Excluir"))),this.generateExpense()))}}]),n}(a.Component)),z=Object(l.b)((function(e){return{expenses:e.wallet.expenses,totalExpenses:e.wallet.expenses}}),(function(e){return{expenseDeletion:function(t){return e({type:"DELETE_EXPENSE",ObjRemainder:t})}}}))(W);W.defaultProps={expenses:[],expenseDeletion:function(){}};var J=function(e){Object(x.a)(n,e);var t=Object(k.a)(n);function n(){var e;return Object(O.a)(this,n),(e=t.call(this)).state={id:0,value:"0",description:"",currency:"USD",method:"Dinheiro",tag:"Alimenta\xe7\xe3o"},e.onInputChange=e.onInputChange.bind(Object(C.a)(e)),e.saveCurrencyButton=e.saveCurrencyButton.bind(Object(C.a)(e)),e}return Object(y.a)(n,[{key:"componentDidMount",value:function(){(0,this.props.currencyFetch)()}},{key:"onInputChange",value:function(e){var t=e.target,n=t.name,a=t.value;this.setState(Object(j.a)({},n,a))}},{key:"saveCurrencyButton",value:function(){var e=this.state,t=e.id,n=e.value,a=e.description,r=e.currency,c=e.method,i=e.tag,u=this.props,l=u.currencies,o=u.expenseSaved;(0,u.currencyFetch)(),o({id:t,value:n,description:a,currency:r,method:c,tag:i,exchangeRates:l}),this.setState({id:t+1,value:"0",description:"",currency:"USD",method:"Dinheiro",tag:"Alimenta\xe7\xe3o"})}},{key:"render",value:function(){var e=this,t=this.props.email,n=this.state,a=n.id,c=n.value,i=n.tag;return r.a.createElement("div",null,r.a.createElement("div",{className:"header-walletBar-div"},r.a.createElement("span",null,a),r.a.createElement(X,{email:t}),r.a.createElement("form",{action:"GET",className:"expenses-Form"},r.a.createElement(G,{onInputChange:this.onInputChange,value:c}),r.a.createElement(N,{onInputChange:this.onInputChange}),r.a.createElement(A,{onInputChange:this.onInputChange}),r.a.createElement(T,{onInputChange:this.onInputChange,tag:i}),r.a.createElement(V,{onInputChange:this.onInputChange}),r.a.createElement("button",{type:"button",onClick:function(){return e.saveCurrencyButton()}},"Adicionar despesa"))),r.a.createElement(z,null))}}]),n}(r.a.Component),Y=Object(l.b)((function(e){return{email:e.user.email,currencies:e.wallet.currencies,expenses:e.wallet.expenses}}),(function(e){return{currencyFetch:function(){return e((function(e){return fetch("https://economia.awesomeapi.com.br/json/all").then((function(e){return e.json()})).then((function(t){return e({type:"GET_CURRENCY",currency:t})}))}))},expenseSaved:function(t){return e({type:"SAVE_EXPENSE",expenseObj:t})}}}))(J);J.defaultProps={currencies:[]};var $=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.c,null,r.a.createElement(g.a,{exact:!0,path:"/",component:I})),r.a.createElement(g.c,null,r.a.createElement(g.a,{exact:!0,path:"/carteira",component:Y})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(u.a,null,r.a.createElement(l.a,{store:f},r.a.createElement($,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.e00c2857.chunk.js.map