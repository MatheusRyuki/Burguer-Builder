(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){e.exports={BreadBottom:"BurgerIngredient__BreadBottom__v1Mdc",BreadTop:"BurgerIngredient__BreadTop__30I6U",Seeds1:"BurgerIngredient__Seeds1__2VmWM",Seeds2:"BurgerIngredient__Seeds2__25rjQ",Meat:"BurgerIngredient__Meat__2HYmd",Cheese:"BurgerIngredient__Cheese__3OU0y",Salad:"BurgerIngredient__Salad__PBCV5",Bacon:"BurgerIngredient__Bacon__3Zxv6"}},function(e,t,a){e.exports={Input:"Input__Input__1VROp",Label:"Input__Label__1tOSX",InputElement:"Input__InputElement__3TB0k"}},function(e,t,a){e.exports={SideDrawer:"SideDrawer__SideDrawer__2VEgq",Open:"SideDrawer__Open__YG3Hl",Close:"SideDrawer__Close__28Zbp",Logo:"SideDrawer__Logo__1lpzO"}},function(e,t,a){e.exports={BuildControl:"BuildControl__BuildControl__ibcUQ",Label:"BuildControl__Label__2VLnR",Less:"BuildControl__Less__3X6hg",More:"BuildControl__More__2eQpV"}},,,,,,function(e,t,a){e.exports={Toolbar:"Toolbar__Toolbar__2hkfg",Logo:"Toolbar__Logo__24rue",DesktopOnly:"Toolbar__DesktopOnly__15Sc_"}},function(e,t,a){e.exports={NavigationItem:"NavigationItem__NavigationItem__3YSjr",active:"NavigationItem__active__2GQz1"}},function(e,t,a){e.exports={BuildControls:"BuildControls__BuildControls__220uz",OrderButton:"BuildControls__OrderButton__1ScSk",enable:"BuildControls__enable__3XAWA"}},function(e,t,a){e.exports={Button:"Button__Button__ajevi",Success:"Button__Success__1DMln",Danger:"Button__Danger__18hYt"}},,,,,,,,function(e,t,a){e.exports={Conteudo:"Layout__Conteudo__3ypQ9"}},function(e,t,a){e.exports=a.p+"static/media/burger-logo.b8503d26.png"},function(e,t,a){e.exports={Logo:"Logo__Logo__2A07e"}},function(e,t,a){e.exports={NavigationItems:"NavigationItems__NavigationItems__3HY9i"}},,,function(e,t,a){e.exports={DrawerToggle:"DrawerToggle__DrawerToggle__24-HS"}},function(e,t,a){e.exports={Backdrop:"Backdrop__Backdrop__eeZpu"}},function(e,t,a){e.exports={Burger:"Burger__Burger__2h2kL"}},,function(e,t,a){e.exports={Modal:"Modal__Modal__cd320"}},,function(e,t,a){e.exports={loader:"Spinner__loader__3qv_p",load2:"Spinner__load2__1sg5x"}},function(e,t,a){e.exports={CheckoutSummary:"CheckoutSummary__CheckoutSummary__-avOx"}},function(e,t,a){e.exports={ContactData:"ContactData__ContactData__1whvJ"}},function(e,t,a){e.exports={Order:"Order__Order__W-Npf"}},,function(e,t,a){e.exports=a(78)},,,,,,function(e,t,a){},,,,,,,,,,,,,,,,,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(31),l=a.n(o),c=a(79),i=(a(55),a(2)),s=a(3),u=a(5),d=a(4),p=a(6),m=a(80),h=a(36),g=function(e){return e.children},_=a(32),f=a.n(_),v=a(21),b=a.n(v),E=a(33),y=a.n(E),C=a(34),k=a.n(C),O=function(e){return r.a.createElement("div",{className:k.a.Logo},r.a.createElement("img",{src:y.a,alt:"MyBurger"}))},j=a(35),S=a.n(j),w=a(22),B=a.n(w),N=a(82),I=function(e){return r.a.createElement("li",{className:B.a.NavigationItem},r.a.createElement(N.a,{to:e.link,exact:e.exact,activeClassName:B.a.active},e.children))},x=function(){return r.a.createElement("ul",{className:S.a.NavigationItems},r.a.createElement(I,{link:"/",exact:!0},"Burger Builder"),r.a.createElement(I,{link:"/orders"},"Pedidos"))},D=a(38),T=a.n(D),H=function(e){return r.a.createElement("div",{className:T.a.DrawerToggle,onClick:e.clicked},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},L=function(e){return r.a.createElement("header",{className:b.a.Toolbar},r.a.createElement(H,{clicked:e.drawerToggleClicked}),r.a.createElement(O,null),r.a.createElement("nav",{className:b.a.DesktopOnly},r.a.createElement(x,null)))},P=a(14),M=a.n(P),A=a(39),R=a.n(A),q=function(e){return e.show?r.a.createElement("div",{className:R.a.Backdrop,onClick:e.clicked}):null},U=function(e){var t=[M.a.SideDrawer,M.a.Close];return e.open&&(t=[M.a.SideDrawer,M.a.Open]),r.a.createElement(g,null,r.a.createElement(q,{show:e.open,clicked:e.closed}),r.a.createElement("div",{className:t.join(" ")},r.a.createElement("div",{className:M.a.Logo},r.a.createElement(O,null)),r.a.createElement("nav",null,r.a.createElement(x,null))))},F=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={showSideDrawer:!1},a.sideDrawerClosedHandler=function(){a.setState({showSideDrawer:!1})},a.sideDrawerToggleHandler=function(){a.setState(function(e){return{showSideDrawer:!e.showSideDrawer}})},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(g,null,r.a.createElement(L,{drawerToggleClicked:this.sideDrawerToggleHandler}),r.a.createElement(U,{open:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler}),r.a.createElement("main",{className:f.a.Conteudo},this.props.children))}}]),t}(n.Component),V=a(11),W=a(48),Y=a(12),z=a.n(Y),Q=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=r.a.createElement("div",{className:z.a.BreadBottom});break;case"bread-top":e=r.a.createElement("div",{className:z.a.BreadTop},r.a.createElement("div",{className:z.a.Seeds1}),r.a.createElement("div",{className:z.a.Seeds2}));break;case"carne":e=r.a.createElement("div",{className:z.a.Meat});break;case"queijo":e=r.a.createElement("div",{className:z.a.Cheese});break;case"salada":e=r.a.createElement("div",{className:z.a.Salad});break;case"bacon":e=r.a.createElement("div",{className:z.a.Bacon});break;default:e=null}return e}}]),t}(n.Component),J=a(81),X=a(40),Z=a.n(X),G=Object(J.a)(function(e){var t=Object.keys(e.ingredients).map(function(t){return Object(W.a)(Array(e.ingredients[t])).map(function(e,a){return r.a.createElement(Q,{key:t+a,type:t})})}).reduce(function(e,t){return e.concat(t)},[]);return 0===t.length&&(t=r.a.createElement("p",null,"Por favor, coloque alguns ingredientes!")),r.a.createElement("div",{className:Z.a.Burger},r.a.createElement(Q,{type:"bread-top"}),t,r.a.createElement(Q,{type:"bread-bottom"}))}),$=a(23),K=a.n($),ee=a(15),te=a.n(ee),ae=function(e){return r.a.createElement("div",{className:te.a.BuildControl},r.a.createElement("div",{className:te.a.Label},e.label),r.a.createElement("button",{className:te.a.Less,onClick:e.removed,disabled:e.disabled},"Menos"),r.a.createElement("button",{className:te.a.More,onClick:e.added},"Mais"))},ne=[{label:"Salada",type:"salada"},{label:"Bacon",type:"bacon"},{label:"Queijo",type:"queijo"},{label:"Carne",type:"carne"}],re=function(e){return r.a.createElement("div",{className:K.a.BuildControls},r.a.createElement("p",null,"Pre\xe7o atual: ",r.a.createElement("strong",null,e.price.toFixed(2))),ne.map(function(t){return r.a.createElement(ae,{added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},key:t.label,label:t.label,disabled:e.disabled[t.type]})}),r.a.createElement("button",{className:K.a.OrderButton,disabled:!e.purchasable,onClick:e.ordered},"Pe\xe7a agora!"))},oe=a(42),le=a.n(oe),ce=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"render",value:function(){return r.a.createElement(g,null,r.a.createElement(q,{show:this.props.show,clicked:this.props.modalClosed}),r.a.createElement("div",{style:this.props.show?{transform:"translateY(0)",opacity:"1"}:{transform:"translateY(-100vh)",opacity:"0"},className:le.a.Modal},this.props.children))}}]),t}(n.Component),ie=a(24),se=a.n(ie),ue=function(e){return r.a.createElement("button",{className:[se.a.Button,se.a[e.btnType]].join(" "),onClick:e.clicked},e.children)},de=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.ingredients).map(function(t){return r.a.createElement("li",{key:t},r.a.createElement("span",{style:{textTransform:"capitalize"}},t),": ",e.props.ingredients[t])});return r.a.createElement(g,null,r.a.createElement("h3",null,"Seu pedido"),r.a.createElement("p",null,"Um hamb\xfarguer com os seguintes ingredientes:"),r.a.createElement("ul",null,t),r.a.createElement("p",null,r.a.createElement("strong",null,"Pre\xe7o total: ",this.props.price.toFixed(2))),r.a.createElement("p",null,"Continuar para o Checkout?"),r.a.createElement(ue,{btnType:"Danger",clicked:this.props.purchaseCancelled},"CANCELAR"),r.a.createElement(ue,{btnType:"Success",clicked:this.props.purchaseContinued},"CONTINUAR"))}}]),t}(n.Component),pe=a(43),me=a.n(pe).a.create({baseURL:"https://teste-aa610.firebaseio.com/"}),he=a(44),ge=a.n(he),_e=function(){return r.a.createElement("div",{className:ge.a.loader},"Loading...")},fe=function(e,t){return function(a){function n(e){var a;return Object(i.a)(this,n),(a=Object(u.a)(this,Object(d.a)(n).call(this,e))).state={error:null},a.errorHandler=function(){a.setState({error:null})},a.reqInterceptor=t.interceptors.request.use(function(e){return a.setState({error:null}),e}),a.resInterceptor=t.interceptors.response.use(function(e){return e},function(e){a.setState({error:e})}),a}return Object(p.a)(n,a),Object(s.a)(n,[{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){return r.a.createElement(g,null,r.a.createElement(ce,{show:this.state.error,clicked:this.errorHandler},this.state.error?this.state.error.message:null),r.a.createElement(e,this.props))}}]),n}(n.Component)},ve={salada:1,queijo:.8,carne:2.6,bacon:1.4},be=fe(function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={ingredients:null,totalPrice:12,compravel:!1,purchasing:!1,loading:!1,error:!1},a.purchaseCancelHandler=function(){a.setState({purchasing:!1})},a.addIngredientHandler=function(e){var t=a.state.ingredients[e]+1,n=Object(V.a)({},a.state.ingredients);n[e]=t;var r=ve[e],o=a.state.totalPrice+r;a.setState({totalPrice:o,ingredients:n}),a.updatedPurchaseState(n)},a.removeIngredientHandler=function(e){var t=a.state.ingredients[e];if(!(t<=0)){var n=t-1,r=Object(V.a)({},a.state.ingredients);r[e]=n;var o=ve[e],l=a.state.totalPrice-o;a.setState({totalPrice:l,ingredients:r}),a.updatedPurchaseState(r)}},a.purchaseHandler=function(){a.setState({purchasing:!0})},a.purchaseContinueHandler=function(){var e=[];for(var t in a.state.ingredients)e.push(encodeURIComponent(t)+"="+encodeURIComponent(a.state.ingredients[t]));e.push("price="+a.state.totalPrice);var n=e.join("&");a.props.history.push({pathname:"/checkout",search:"?"+n})},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;me.get("ingredients.json").then(function(t){e.setState({ingredients:t.data})}).catch(function(t){e.setState({error:!0})})}},{key:"updatedPurchaseState",value:function(e){var t=Object.keys(e).map(function(t){return e[t]}).reduce(function(e,t){return e+t},0);this.setState({compravel:t>0})}},{key:"render",value:function(){var e=Object(V.a)({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;var a=null,n=this.state.error?r.a.createElement("p",null," Os ingredientes n\xe3o pode ser carregados "):r.a.createElement(_e,null);return this.state.ingredients&&(n=r.a.createElement(g,null,r.a.createElement(G,{ingredients:this.state.ingredients}),r.a.createElement(re,{ingredientAdded:this.addIngredientHandler,ingredientRemoved:this.removeIngredientHandler,disabled:e,price:this.state.totalPrice,purchasable:this.state.compravel,ordered:this.purchaseHandler})),a=r.a.createElement(de,{purchaseCancelled:this.purchaseCancelHandler,purchaseContinued:this.purchaseContinueHandler,price:this.state.totalPrice,ingredients:this.state.ingredients})),this.state.loading&&(a=r.a.createElement(_e,null)),r.a.createElement(g,null,r.a.createElement(ce,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler},a),n)}}]),t}(n.Component),me),Ee=a(45),ye=a.n(Ee),Ce=function(e){return r.a.createElement("div",{className:ye.a.CheckoutSummary},r.a.createElement("h1",null," Esperamos que esteja gostoso!"),r.a.createElement("div",{style:{width:"100%",margin:"auto"}},r.a.createElement(G,{ingredients:e.ingredients})),r.a.createElement(ue,{btnType:"Danger",clicked:e.checkoutCancelled},"CANCELAR"),r.a.createElement(ue,{btnType:"Success",clicked:e.checkoutContinued},"CONTINUAR"))},ke=a(46),Oe=a.n(ke),je=a(13),Se=a.n(je),we=function(e){var t=null;switch(e.elementType){case"input":t=r.a.createElement("input",Object.assign({className:Se.a.InputElement},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":t=r.a.createElement("textarea",Object.assign({className:Se.a.InputElement},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":t=r.a.createElement("select",{onChange:e.changed,className:Se.a.InputElement,value:e.value},e.elementConfig.options.map(function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.displayValue)}));break;default:t=r.a.createElement("input",Object.assign({className:Se.a.InputElement},e.elementConfig,{value:e.value}))}return r.a.createElement("div",{className:Se.a.Input},r.a.createElement("label",{className:Se.a.Label},e.label),t)},Be=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={orderForm:{name:{elementType:"input",elementConfig:{type:"text",placeholder:"Seu Nome"},value:""},street:{elementType:"input",elementConfig:{type:"text",placeholder:"Seu Endere\xe7o"},value:""},zipCode:{elementType:"input",elementConfig:{type:"text",placeholder:"Seu CEP"},value:""},state:{elementType:"input",elementConfig:{type:"text",placeholder:"Seu Estado"},value:""},email:{elementType:"input",elementConfig:{type:"email",placeholder:"Seu E-mail"},value:""},deliveryMethod:{elementType:"select",elementConfig:{options:[{value:"r\xe1pido",displayValue:"R\xe1pido"},{value:"barato",displayValue:"Barato"}]},value:""}},loading:!1},a.orderHandler=function(e){e.preventDefault(),a.setState({loading:!0});var t={};for(var n in a.state.orderForm)t[n]=a.state.orderForm[n].value;var r={ingredients:a.props.ingredients,price:a.props.price,orderData:t};me.post("/orders.json",r).then(function(e){a.setState({loading:!1}),a.props.history.push("/")}).catch(function(e){a.setState({loading:!1})})},a.inputChangedHandler=function(e,t){var n=Object(V.a)({},a.state.orderForm),r=Object(V.a)({},n[t]);r.value=e.target.value,n[t]=r,a.setState({orderForm:n})},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=[];for(var a in this.state.orderForm)t.push({id:a,config:this.state.orderForm[a]});var n=r.a.createElement("form",{onSubmit:this.orderHandler},t.map(function(t){return r.a.createElement(we,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,changed:function(a){return e.inputChangedHandler(a,t.id)}})}),r.a.createElement(ue,{btnType:"Success"},"PEDIR"));return this.state.loading&&(n=r.a.createElement(_e,null)),r.a.createElement("div",{className:Oe.a.ContactData},r.a.createElement("h4",null,"Coloque seus dados de contato"),n)}}]),t}(n.Component),Ne=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={ingredients:null,price:null},a.checkoutCancelledHandler=function(){a.props.history.goBack()},a.checkoutContinuedHandler=function(){a.props.history.replace("/checkout/contact-data")},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=new URLSearchParams(this.props.location.search),t={},a=null,n=!0,r=!1,o=void 0;try{for(var l,c=e.entries()[Symbol.iterator]();!(n=(l=c.next()).done);n=!0){var i=l.value;"price"===i[0]?a=i[1]:t[i[0]]=+i[1]}}catch(s){r=!0,o=s}finally{try{n||null==c.return||c.return()}finally{if(r)throw o}}this.setState({ingredients:t,price:a})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(Ce,{ingredients:this.state.ingredients,checkoutCancelled:this.checkoutCancelledHandler,checkoutContinued:this.checkoutContinuedHandler}),r.a.createElement(h.a,{path:this.props.match.path+"/contact-data",render:function(t){return r.a.createElement(Be,Object.assign({ingredients:e.state.ingredients,price:e.state.price},t))}}))}}]),t}(n.Component),Ie=a(47),xe=a.n(Ie),De=function(e){var t=[];for(var a in e.ingredients)t.push({name:a,amount:e.ingredients[a]});var n=t.map(function(e){return r.a.createElement("span",{key:e.name,style:{textTransform:"capitalize",display:"inline-block",margin:"0 8px",border:"1px solid gray",padding:"5px"}},e.name," (",e.amount,")")});return r.a.createElement("div",{className:xe.a.Order},r.a.createElement("p",null,"Ingredientes: ",n),r.a.createElement("p",null,"Pre\xe7o: ",r.a.createElement("strong",null,"R$ ",e.price.toFixed(2))))},Te=fe(function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={orders:[],loading:!0},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;me.get("/orders.json").then(function(t){var a=[];for(var n in t.data)a.push(Object(V.a)({},t.data[n],{id:n}));e.setState({loading:!1,orders:a})}).catch(function(t){e.setState({loading:!1})})}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.orders.map(function(e){return r.a.createElement(De,{key:e.id,ingredients:e.ingredients,price:+e.price})}),";")}}]),t}(n.Component),me),He=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(F,null,r.a.createElement(m.a,null,r.a.createElement(h.a,{path:"/orders",component:Te}),r.a.createElement(h.a,{path:"/checkout",component:Ne}),r.a.createElement(h.a,{path:"/",component:be}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Le=r.a.createElement(c.a,null,r.a.createElement(He,null));l.a.render(Le,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[49,1,2]]]);
//# sourceMappingURL=main.d537195c.chunk.js.map