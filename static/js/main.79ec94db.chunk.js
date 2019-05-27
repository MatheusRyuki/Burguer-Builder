(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(49),i=n.n(o),c=n(103),u=(n(74),n(6)),l=n(7),s=n(9),d=n(8),p=n(10),h=n(106),m=n(55),g=n(102),f=n(105),_=n(13),v=function(e){return e.children},b=n(51),E=n.n(b),O=n(38),y=n.n(O),C=n(52),k=n.n(C),S=n(53),j=n.n(S),I=function(e){return a.a.createElement("div",{className:j.a.Logo},a.a.createElement("img",{src:k.a,alt:"MyBurger"}))},T=n(54),x=n.n(T),A=n(39),w=n.n(A),N=n(104),R=function(e){return a.a.createElement("li",{className:w.a.NavigationItem},a.a.createElement(N.a,{to:e.link,exact:e.exact,activeClassName:w.a.active},e.children))},D=function(e){return a.a.createElement("ul",{className:x.a.NavigationItems},a.a.createElement(R,{link:"/",exact:!0},"Burger Builder"),e.isAuthenticated?a.a.createElement(R,{link:"/orders"},"Pedidos"):null,e.isAuthenticated?a.a.createElement(R,{link:"/logout"},"Sair"):a.a.createElement(R,{link:"/auth"},"Autentifica\xe7\xe3o"))},B=n(56),H=n.n(B),U=function(e){return a.a.createElement("div",{className:H.a.DrawerToggle,onClick:e.clicked},a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null))},L=function(e){return a.a.createElement("header",{className:y.a.Toolbar},a.a.createElement(U,{clicked:e.drawerToggleClicked}),a.a.createElement(I,null),a.a.createElement("nav",{className:y.a.DesktopOnly},a.a.createElement(D,{isAuthenticated:e.isAuth})))},P=n(26),F=n.n(P),M=n(57),q=n.n(M),G=function(e){return e.show?a.a.createElement("div",{className:q.a.Backdrop,onClick:e.clicked}):null},V=function(e){var t=[F.a.SideDrawer,F.a.Close];return e.open&&(t=[F.a.SideDrawer,F.a.Open]),a.a.createElement(v,null,a.a.createElement(G,{show:e.open,clicked:e.closed}),a.a.createElement("div",{className:t.join(" "),onClick:e.closed},a.a.createElement("div",{className:F.a.Logo},a.a.createElement(I,null)),a.a.createElement("nav",null,a.a.createElement(D,{isAuthenticated:e.isAuth}))))},z=function(e){function t(){var e,n;Object(u.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).state={showSideDrawer:!1},n.sideDrawerClosedHandler=function(){n.setState({showSideDrawer:!1})},n.sideDrawerToggleHandler=function(){n.setState(function(e){return{showSideDrawer:!e.showSideDrawer}})},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement(v,null,a.a.createElement(L,{isAuth:this.props.isAuthenticated,drawerToggleClicked:this.sideDrawerToggleHandler}),a.a.createElement(V,{isAuth:this.props.isAuthenticated,open:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler}),a.a.createElement("main",{className:E.a.Conteudo},this.props.children))}}]),t}(r.Component),W=Object(_.b)(function(e){return{isAuthenticated:null!==e.auth.token}})(z),X=n(25),Y=n(67),Q=n(20),Z=n.n(Q),K=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=a.a.createElement("div",{className:Z.a.BreadBottom});break;case"bread-top":e=a.a.createElement("div",{className:Z.a.BreadTop},a.a.createElement("div",{className:Z.a.Seeds1}),a.a.createElement("div",{className:Z.a.Seeds2}));break;case"carne":e=a.a.createElement("div",{className:Z.a.Meat});break;case"queijo":e=a.a.createElement("div",{className:Z.a.Cheese});break;case"salada":e=a.a.createElement("div",{className:Z.a.Salad});break;case"bacon":e=a.a.createElement("div",{className:Z.a.Bacon});break;default:e=null}return e}}]),t}(r.Component),J=n(58),$=n.n(J),ee=Object(f.a)(function(e){var t=Object.keys(e.ingredients).map(function(t){return Object(Y.a)(Array(e.ingredients[t])).map(function(e,n){return a.a.createElement(K,{key:t+n,type:t})})}).reduce(function(e,t){return e.concat(t)},[]);return 0===t.length&&(t=a.a.createElement("p",null,"Por favor, coloque alguns ingredientes!")),a.a.createElement("div",{className:$.a.Burger},a.a.createElement(K,{type:"bread-top"}),t,a.a.createElement(K,{type:"bread-bottom"}))}),te=n(40),ne=n.n(te),re=n(27),ae=n.n(re),oe=function(e){return a.a.createElement("div",{className:ae.a.BuildControl},a.a.createElement("div",{className:ae.a.Label},e.label),a.a.createElement("button",{className:ae.a.Less,onClick:e.removed,disabled:e.disabled},"Menos"),a.a.createElement("button",{className:ae.a.More,onClick:e.added},"Mais"))},ie=[{label:"Salada",type:"salada"},{label:"Bacon",type:"bacon"},{label:"Queijo",type:"queijo"},{label:"Carne",type:"carne"}],ce=function(e){return a.a.createElement("div",{className:ne.a.BuildControls},a.a.createElement("p",null,"Pre\xe7o atual: ",a.a.createElement("strong",null,e.price.toFixed(2))),ie.map(function(t){return a.a.createElement(oe,{added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},key:t.label,label:t.label,disabled:e.disabled[t.type]})}),a.a.createElement("button",{className:ne.a.OrderButton,disabled:!e.purchasable,onClick:e.ordered},e.isAuth?"Pe\xe7a agora!":"Fa\xe7a Login para fazer um pedido!"))},ue=n(60),le=n.n(ue),se=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"render",value:function(){return a.a.createElement(v,null,a.a.createElement(G,{show:this.props.show,clicked:this.props.modalClosed}),a.a.createElement("div",{style:this.props.show?{transform:"translateY(0)",opacity:"1"}:{transform:"translateY(-100vh)",opacity:"0"},className:le.a.Modal},this.props.children))}}]),t}(r.Component),de=n(41),pe=n.n(de),he=function(e){return a.a.createElement("button",{disabled:e.disabled,className:[pe.a.Button,pe.a[e.btnType]].join(" "),onClick:e.clicked},e.children)},me=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.ingredients).map(function(t){return a.a.createElement("li",{key:t},a.a.createElement("span",{style:{textTransform:"capitalize"}},t),": ",e.props.ingredients[t])});return a.a.createElement(v,null,a.a.createElement("h3",null,"Seu pedido"),a.a.createElement("p",null,"Um hamb\xfarguer com os seguintes ingredientes:"),a.a.createElement("ul",null,t),a.a.createElement("p",null,a.a.createElement("strong",null,"Pre\xe7o total: ",this.props.price.toFixed(2))),a.a.createElement("p",null,"Continuar para o Checkout?"),a.a.createElement(he,{btnType:"Danger",clicked:this.props.purchaseCancelled},"CANCELAR"),a.a.createElement(he,{btnType:"Success",clicked:this.props.purchaseContinued},"CONTINUAR"))}}]),t}(r.Component),ge=n(61),fe=n.n(ge),_e=function(){return a.a.createElement("div",{className:fe.a.loader},"Loading...")},ve="INIT_INGREDIENTS",be="PURCHASE_BURGER",Ee="FETCH_ORDERS",Oe="AUTH_CHECK_STATE",ye="AUTH_USER",Ce="AUTH_CHECK_TIMEOUT",ke="AUTH_INITIATE_LOGOUT",Se=function(e){return{type:"SET_INGREDIENTS",ingredients:e}},je=function(){return{type:"FETCH_INGREDIENT_FAILED"}},Ie=function(e,t){return{type:"PURCHASE_BURGER_SUCCESS",orderId:e,orderData:t}},Te=function(e){return{type:"PURCHASE_BURGER_FAIL",error:e}},xe=function(){return{type:"PURCHASE_BURGER_START"}},Ae=function(e){return{type:"FETCH_ORDERS_SUCCESS",orders:e}},we=function(e){return{type:"FETCH_ORDERS_FAILED",error:e}},Ne=function(){return{type:"FETCH_ORDERS_START"}},Re=function(){return{type:"AUTH_START"}},De=function(e,t){return{type:"AUTH_SUCCESS",idToken:e,userId:t}},Be=function(){return{type:ke}},He=function(){return{type:"AUTH_LOGOUT"}},Ue=function(e){return{type:Ce,expirationTime:e}},Le=function(e){return{type:"AUTH_FAIL",error:e}},Pe=function(e){return{type:"SET_AUTH_REDIRECT_PATH",path:e}},Fe=n(33),Me=n.n(Fe),qe=Me.a.create({baseURL:"https://teste-aa610.firebaseio.com/"}),Ge=function(e,t){return function(n){function r(e){var n;return Object(u.a)(this,r),(n=Object(s.a)(this,Object(d.a)(r).call(this,e))).state={error:null},n.errorHandler=function(){n.setState({error:null})},n.reqInterceptor=t.interceptors.request.use(function(e){return n.setState({error:null}),e}),n.resInterceptor=t.interceptors.response.use(function(e){return e},function(e){n.setState({error:e})}),n}return Object(p.a)(r,n),Object(l.a)(r,[{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){return a.a.createElement(v,null,a.a.createElement(se,{show:this.state.error,clicked:this.errorHandler},this.state.error?this.state.error.message:null),a.a.createElement(e,this.props))}}]),r}(r.Component)},Ve=function(e){function t(){var e,n;Object(u.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).state={purchasing:!1},n.purchaseCancelHandler=function(){n.setState({purchasing:!1})},n.purchaseHandler=function(){n.props.isAuthenticated?n.setState({purchasing:!0}):(n.props.onSetAuthRedirectPath("/checkout"),n.props.history.push("/auth"))},n.purchaseContinueHandler=function(){n.props.onInitPurchase(),n.props.history.push("/checkout")},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.onInitIngredients()}},{key:"updatedPurchaseState",value:function(e){return Object.keys(e).map(function(t){return e[t]}).reduce(function(e,t){return e+t},0)>0}},{key:"render",value:function(){var e=Object(X.a)({},this.props.ings);for(var t in e)e[t]=e[t]<=0;var n=null,r=this.props.error?a.a.createElement("p",null," Os ingredientes n\xe3o pode ser carregados "):a.a.createElement(_e,null);return this.props.ings&&(r=a.a.createElement(v,null,a.a.createElement(ee,{ingredients:this.props.ings}),a.a.createElement(ce,{ingredientAdded:this.props.onIngredientAdded,ingredientRemoved:this.props.onIngredientRemoved,disabled:e,price:this.props.price,purchasable:this.updatedPurchaseState(this.props.ings),ordered:this.purchaseHandler,isAuth:this.props.isAuthenticated})),n=a.a.createElement(me,{purchaseCancelled:this.purchaseCancelHandler,purchaseContinued:this.purchaseContinueHandler,price:this.props.price,ingredients:this.props.ings})),a.a.createElement(v,null,a.a.createElement(se,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler},n),r)}}]),t}(r.Component),ze=Object(_.b)(function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,error:e.burgerBuilder.error,isAuthenticated:null!==e.auth.token}},function(e){return{onIngredientAdded:function(t){return e({type:"ADD_INGREDIENT",ingredientName:t})},onIngredientRemoved:function(t){return e({type:"REMOVE_INGREDIENT",ingredientName:t})},onInitIngredients:function(){return e({type:ve})},onInitPurchase:function(){return e({type:"PURCHASE_INIT"})},onSetAuthRedirectPath:function(t){return e(Pe(t))}}})(Ge(Ve,qe)),We=n(62),Xe=n.n(We),Ye=function(e){return a.a.createElement("div",{className:Xe.a.CheckoutSummary},a.a.createElement("h1",null," Esperamos que esteja gostoso!"),a.a.createElement("div",{style:{width:"100%",margin:"auto"}},a.a.createElement(ee,{ingredients:e.ingredients})),a.a.createElement(he,{btnType:"Danger",clicked:e.checkoutCancelled},"CANCELAR"),a.a.createElement(he,{btnType:"Success",clicked:e.checkoutContinued},"CONTINUAR"))},Qe=n(18),Ze=n(63),Ke=n.n(Ze),Je=n(23),$e=n.n(Je),et=function(e){var t=null,n=[$e.a.InputElement],r=null;switch(e.invalid&&e.shouldValidate&&e.touched&&n.push($e.a.Invalid),e.invalid&&e.touched&&(r=a.a.createElement("p",{className:$e.a.ValidationError},"Por favor, digite um ",e.elementConfig.type," v\xe1lido!")),e.elementType){case"input":t=a.a.createElement("input",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":t=a.a.createElement("textarea",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":t=a.a.createElement("select",{onChange:e.changed,className:$e.a.InputElement,value:e.value},e.elementConfig.options.map(function(e){return a.a.createElement("option",{key:e.value,value:e.value},e.displayValue)}));break;default:t=a.a.createElement("input",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value}))}return a.a.createElement("div",{className:$e.a.Input},a.a.createElement("label",{className:$e.a.Label},e.label),t,r)},tt=function(e,t){return Object(X.a)({},e,t)},nt=function(e,t){var n=!0;return!t||(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length>=t.maxLength&&n),n)},rt=function(e){function t(){var e,n;Object(u.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).state={orderForm:{nome:{elementType:"input",elementConfig:{type:"text",placeholder:"Seu Nome"},value:"",validation:{required:!0},valid:!1,touched:!1},rua:{elementType:"input",elementConfig:{type:"text",placeholder:"Seu Endere\xe7o"},value:"",validation:{required:!0},valid:!1,touched:!1},CEP:{elementType:"input",elementConfig:{type:"text",placeholder:"Seu CEP"},value:"",validation:{required:!0,minLength:8,maxLength:8},valid:!1,touched:!1},estado:{elementType:"input",elementConfig:{type:"text",placeholder:"Seu Estado"},value:"",validation:{required:!0},valid:!1,touched:!1},email:{elementType:"input",elementConfig:{type:"email",placeholder:"Seu E-mail"},value:"",validation:{required:!0},valid:!1,touched:!1},deliveryMethod:{elementType:"select",elementConfig:{options:[{value:"r\xe1pido",displayValue:"R\xe1pido"},{value:"barato",displayValue:"Barato"}]},value:"r\xe1pido",validation:{},valid:!0}},formIsValid:!1},n.orderHandler=function(e){e.preventDefault();var t={};for(var r in n.state.orderForm)t[r]=n.state.orderForm[r].value;var a={ingredients:n.props.ings,price:n.props.price,orderData:t,userId:n.props.userId};n.props.onOrderBurger(a,n.props.token)},n.inputChangedHandler=function(e,t){var r=tt(n.state.orderForm[t],{value:e.target.value,valid:nt(e.target.value.value,n.state.orderForm[t]),touched:!0}),a=tt(n.state.orderForm,Object(Qe.a)({},t,r)),o=!0;for(var i in a)o=a[i].valid&&o;n.setState({orderForm:a,formIsValid:o})},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=[];for(var n in this.state.orderForm)t.push({id:n,config:this.state.orderForm[n]});var r=a.a.createElement("form",{onSubmit:this.orderHandler},t.map(function(t){return a.a.createElement(et,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,changed:function(n){return e.inputChangedHandler(n,t.id)}})}),a.a.createElement(he,{btnType:"Success",disable:!this.state.formIsValid},"PEDIR"));return this.props.loading&&(r=a.a.createElement(_e,null)),a.a.createElement("div",{className:Ke.a.ContactData},a.a.createElement("h4",null,"Coloque seus dados de contato"),r)}}]),t}(r.Component),at=Object(_.b)(function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}},function(e){return{onOrderBurger:function(t,n){return e(function(e,t){return{type:be,orderData:e,token:t}}(t,n))}}})(Ge(rt,qe)),ot=function(e){function t(){var e,n;Object(u.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).checkoutCancelledHandler=function(){n.props.history.goBack()},n.checkoutContinuedHandler=function(){n.props.history.replace("/checkout/contact-data")},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=a.a.createElement(_e,null);if(this.props.ings){var t=this.props.purchased?a.a.createElement(g.a,{to:"/"}):null;e=a.a.createElement("div",null,t,a.a.createElement(Ye,{ingredients:this.props.ings,checkoutCancelled:this.checkoutCancelledHandler,checkoutContinued:this.checkoutContinuedHandler}),a.a.createElement(m.a,{path:this.props.match.path+"/contact-data",component:at}))}return e}}]),t}(r.Component),it=Object(_.b)(function(e){return{ings:e.burgerBuilder.ingredients,purchased:e.order.purchased}})(ot),ct=n(64),ut=n.n(ct),lt=function(e){var t=[];for(var n in e.ingredients)t.push({name:n,amount:e.ingredients[n]});var r=t.map(function(e){return a.a.createElement("span",{key:e.name,style:{textTransform:"capitalize",display:"inline-block",margin:"0 8px",border:"1px solid gray",padding:"5px"}},e.name," (",e.amount,")")});return a.a.createElement("div",{className:ut.a.Order},a.a.createElement("p",null,"Ingredientes: ",r),a.a.createElement("p",null,"Pre\xe7o: ",a.a.createElement("strong",null,"R$ ",e.price.toFixed(2))))},st=function(e){function t(){var e,n;Object(u.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).state={orders:[],loading:!0},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.onFetchOrders(this.props.token,this.props.userId)}},{key:"render",value:function(){var e=a.a.createElement(_e,null);return this.props.loading||(e=this.props.orders.map(function(e){return a.a.createElement(lt,{key:e.id,ingredients:e.ingredients,price:+e.price})})),a.a.createElement("div",null,e)}}]),t}(r.Component),dt=Object(_.b)(function(e){return{orders:e.order.orders,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}},function(e){return{onFetchOrders:function(t,n){return e(function(e,t){return{type:Ee,token:e,userId:t}}(t,n))}}})(Ge(st,qe)),pt=n(65),ht=n.n(pt),mt=function(e){function t(){var e,n;Object(u.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).state={controls:{email:{elementType:"input",elementConfig:{type:"email",placeholder:"Seu E-mail"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},senha:{elementType:"input",elementConfig:{type:"password",placeholder:"Sua Senha"},value:"",validation:{required:!0,minLength:6},valid:!1,touched:!1}},isSignup:!0},n.switchAuthModeHandler=function(){n.setState(function(e){return{isSignup:!e.isSignup}})},n.inputChangedHandler=function(e,t){var r=tt(n.state.controls,Object(Qe.a)({},t,tt(n.state.controls[t],{value:e.target.value,valid:nt(e.target.value,n.state.controls[t].validation),touched:!0})));n.setState({controls:r})},n.submitHandler=function(e){e.preventDefault(),n.props.onAuth(n.state.controls.email.value,n.state.controls.senha.value,n.state.isSignup)},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.building&&"/"!==this.props.authRedirectPath&&this.props.onSetAuthRedirectPath()}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.controls)t.push({id:n,config:this.state.controls[n]});var r=t.map(function(t){return a.a.createElement(et,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,changed:function(n){return e.inputChangedHandler(n,t.id)}})});this.props.loading&&(r=a.a.createElement(_e,null));var o=null;this.props.error&&(o=a.a.createElement("p",null,this.props.error.message));var i=null;return!0===this.props.isAuthenticated&&(i=a.a.createElement(g.a,{to:this.props.authRedirectPath})),a.a.createElement("div",{className:ht.a.Auth},i,o,a.a.createElement("form",{onSubmit:this.submitHandler},r,a.a.createElement(he,{btnType:"Success"},this.state.isSignup?"CADASTRA-SE":"LOGIN")),a.a.createElement(he,{clicked:this.switchAuthModeHandler,btnType:"Danger"},"MUDAR PARA ",this.state.isSignup?"LOGIN":"CADASTRAR"))}}]),t}(r.Component),gt=Object(_.b)(function(e){return{loading:e.auth.loading,error:e.auth.error,isAuthenticated:null!==e.auth.token,building:e.burgerBuilder.building,authRedirectPath:e.auth.authRedirectPath}},function(e){return{onAuth:function(t,n,r){return e(function(e,t,n){return{type:ye,email:e,password:t,isSignup:n}}(t,n,r))},onSetAuthRedirectPath:function(){return e(Pe("/"))}}})(mt),ft=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.onLogout()}},{key:"render",value:function(){return a.a.createElement(g.a,{to:"/"})}}]),t}(r.Component),_t=Object(_.b)(null,function(e){return{onLogout:function(){return e(Be())}}})(ft),vt=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.onTryAutoSignUp()}},{key:"render",value:function(){var e=a.a.createElement(h.a,null,a.a.createElement(m.a,{path:"/auth",component:gt}),a.a.createElement(m.a,{path:"/",exact:!0,component:ze}),a.a.createElement(g.a,{to:"/"}));return this.props.isAuthenticated&&(e=a.a.createElement(h.a,null,a.a.createElement(m.a,{path:"/orders",component:dt}),a.a.createElement(m.a,{path:"/checkout",component:it}),a.a.createElement(m.a,{path:"/logout",component:_t}),a.a.createElement(m.a,{path:"/auth",component:gt}),a.a.createElement(m.a,{path:"/",exact:!0,component:ze}),a.a.createElement(g.a,{to:"/"}))),a.a.createElement("div",null,a.a.createElement(W,null,e))}}]),t}(r.Component),bt=Object(f.a)(Object(_.b)(function(e){return{isAuthenticated:null!==e.auth.token}},function(e){return{onTryAutoSignUp:function(){return e({type:Oe})}}})(vt));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Et=n(19),Ot={ingredients:null,totalPrice:8,error:!1,building:!1},yt={salada:1,queijo:.8,carne:2.6,bacon:1.4},Ct=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ot,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_INGREDIENT":return function(e,t){var n=Object(Qe.a)({},t.ingredientName,e.ingredients[t.ingredientName]+1),r={ingredients:tt(e.ingredients,n),totalPrice:e.totalPrice+yt[t.ingredientName],building:!0};return tt(e,r)}(e,t);case"REMOVE_INGREDIENT":return function(e,t){var n=Object(Qe.a)({},t.ingredientName,e.ingredients[t.ingredientName]-1),r={ingredients:tt(e.ingredients,n),totalPrice:e.totalPrice+yt[t.ingredientName]};return tt(e,r)}(e,t);case"SET_INGREDIENTS":return function(e,t){return tt(e,{ingredients:{salada:t.ingredients.salada,bacon:t.ingredients.bacon,queijo:t.ingredients.queijo,carne:t.ingredients.carne},totalPrice:8,error:!1,building:!1})}(e,t);case"FETCH_INGREDIENT_FAILED":return function(e,t){return tt(e,{error:!0})}(e);default:return e}},kt=n(66),St={orders:[],loading:!1,purchased:!1},jt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:St,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PURCHASE_INIT":return function(e,t){return tt(e,{purchased:!1})}(e);case"PURCHASE_BURGER_START":return function(e,t){return tt(e,{loading:!0})}(e);case"PURCHASE_BURGER_SUCCESS":return function(e,t){var n=tt(t.orderData,{id:t.orderId});return tt(e,{loading:!1,purchased:!0,orders:e.orders.concat(n)})}(e,t);case"PURCHASE_BURGER_FAIL":return function(e,t){return tt(e,{loading:!1})}(e);case"FETCH_ORDERS_START":return function(e,t){return tt(e,{loading:!0})}(e);case"FETCH_ORDERS_SUCCESS":return function(e,t){return tt(e,{orders:t.orders,loading:!1})}(e,t);case"FETCH_ORDERS_FAILED":return function(e,t){return tt(e,{loading:!1})}(e);default:return e}},It={token:null,userId:null,error:null,loading:null,authRedirectPath:"/"},Tt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:It,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_START":return function(e,t){return tt(e,{error:null,loading:!0})}(e);case"AUTH_SUCCESS":return function(e,t){return tt(e,{token:t.idToken,userId:t.userId,error:null,loading:!1})}(e,t);case"AUTH_FAIL":return function(e,t){return tt(e,{error:t.error,loading:!1})}(e,t);case"AUTH_LOGOUT":return function(e,t){return tt(e,{token:null,userId:null})}(e);case"SET_AUTH_REDIRECT_PATH":return function(e,t){return tt(e,{authRedirectPath:t.path})}(e,t);default:return e}},xt=n(68),At=n(11),wt=n.n(At),Nt=n(5),Rt=wt.a.mark(Ut),Dt=wt.a.mark(Lt),Bt=wt.a.mark(Pt),Ht=wt.a.mark(Ft);function Ut(e){return wt.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.removeItem("token");case 2:return e.next=4,localStorage.removeItem("expirationDate");case 4:return e.next=6,localStorage.removeItem("userId");case 6:return e.next=8,Object(Nt.b)(He());case 8:case"end":return e.stop()}},Rt,this)}function Lt(e){return wt.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Nt.a)(1e3*e.expirationTime);case 2:return t.next=4,Object(Nt.b)(Be());case 4:case"end":return t.stop()}},Dt,this)}function Pt(e){var t,n,r,a;return wt.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Object(Nt.b)(Re());case 2:return t={email:e.email,password:e.password,returnSecureToken:!0},n="https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyATH5FKwUXe6WuL_jvwFnEHUSRwZz-TEzI",e.isSignup||(n="https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyATH5FKwUXe6WuL_jvwFnEHUSRwZz-TEzI"),o.prev=5,o.next=8,Me.a.post(n,t);case 8:return r=o.sent,o.next=11,new Date((new Date).getTime()+1e3*r.data.expiresIn);case 11:return a=o.sent,o.next=14,localStorage.setItem("token",r.data.idToken);case 14:return o.next=16,localStorage.setItem("userId",r.data.localId);case 16:return o.next=18,localStorage.setItem("expirationDate",a);case 18:return o.next=20,Object(Nt.b)(De(r.data.idToken,r.data.localId));case 20:return o.next=22,Object(Nt.b)(Ue(r.data.expiresIn));case 22:o.next=28;break;case 24:return o.prev=24,o.t0=o.catch(5),o.next=28,Object(Nt.b)(Le(o.t0.response.data.error));case 28:case"end":return o.stop()}},Bt,this,[[5,24]])}function Ft(e){var t,n,r;return wt.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem("token");case 2:if(t=e.sent){e.next=8;break}return e.next=6,Object(Nt.b)(Be());case 6:e.next=23;break;case 8:return e.next=10,new Date(localStorage.getItem("expirationDate"));case 10:if(!((n=e.sent)>new Date)){e.next=21;break}return e.next=14,localStorage.getItem("userId");case 14:return r=e.sent,e.next=17,Object(Nt.b)(De(t,r));case 17:return e.next=19,Object(Nt.b)(Ue((n.getTime()-(new Date).getTime())/1e3));case 19:e.next=23;break;case 21:return e.next=23,Object(Nt.b)(Be());case 23:case"end":return e.stop()}},Ht,this)}var Mt=wt.a.mark(qt);function qt(e){var t;return wt.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,qe.get("ingredients.json");case 3:return t=e.sent,e.next=6,Object(Nt.b)(Se(t.data));case 6:e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),e.next=12,Object(Nt.b)(je());case 12:case 13:case"end":return e.stop()}},Mt,this,[[0,8]])}var Gt=wt.a.mark(zt),Vt=wt.a.mark(Wt);function zt(e){var t;return wt.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Nt.b)(xe());case 2:return n.prev=2,n.next=5,qe.post("/orders.json?auth="+e.token,e.orderData);case 5:return t=n.sent,n.next=8,Object(Nt.b)(Ie(t.data.name,e.orderData));case 8:n.next=14;break;case 10:return n.prev=10,n.t0=n.catch(2),n.next=14,Object(Nt.b)(Te(n.t0));case 14:case 15:case"end":return n.stop()}},Gt,this,[[2,10]])}function Wt(e){var t,n,r,a;return wt.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Object(Nt.b)(Ne());case 2:return t="?auth="+e.token+'&orderBy="userId"&equalTo"'+e.userId+'"',o.prev=3,o.next=6,qe.get("/orders.json"+t);case 6:for(a in n=o.sent,r=[],n.data)r.push(Object(X.a)({},n.data[a],{id:a}));return o.next=11,Object(Nt.b)(Ae(r));case 11:o.next=17;break;case 13:return o.prev=13,o.t0=o.catch(3),o.next=17,Object(Nt.b)(we(o.t0));case 17:case"end":return o.stop()}},Vt,this,[[3,13]])}var Xt=wt.a.mark(Zt),Yt=wt.a.mark(Kt),Qt=wt.a.mark(Jt);function Zt(){return wt.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Nt.c)(ke,Ut);case 2:return e.next=4,Object(Nt.c)(Ce,Lt);case 4:return e.next=6,Object(Nt.c)(ye,Pt);case 6:return e.next=8,Object(Nt.c)(Oe,Ft);case 8:case"end":return e.stop()}},Xt,this)}function Kt(){return wt.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Nt.c)(ve,qt);case 2:case"end":return e.stop()}},Yt,this)}function Jt(){return wt.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Nt.c)(be,zt);case 2:return e.next=4,Object(Nt.c)(Ee,Wt);case 4:case"end":return e.stop()}},Qt,this)}var $t=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Et.d,en=Object(Et.c)({burgerBuilder:Ct,order:jt,auth:Tt}),tn=Object(xt.a)(),nn=Object(Et.e)(en,$t(Object(Et.a)(kt.a,tn)));tn.run(Zt),tn.run(Kt),tn.run(Jt);var rn=a.a.createElement(_.a,{store:nn},a.a.createElement(c.a,null,a.a.createElement(bt,null)));i.a.render(rn,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},20:function(e,t,n){e.exports={BreadBottom:"BurgerIngredient__BreadBottom__v1Mdc",BreadTop:"BurgerIngredient__BreadTop__30I6U",Seeds1:"BurgerIngredient__Seeds1__2VmWM",Seeds2:"BurgerIngredient__Seeds2__25rjQ",Meat:"BurgerIngredient__Meat__2HYmd",Cheese:"BurgerIngredient__Cheese__3OU0y",Salad:"BurgerIngredient__Salad__PBCV5",Bacon:"BurgerIngredient__Bacon__3Zxv6"}},23:function(e,t,n){e.exports={Input:"Input__Input__1VROp",Label:"Input__Label__1tOSX",Invalid:"Input__Invalid__38X2d",ValidationError:"Input__ValidationError__ukId8",InputElement:"Input__InputElement__3TB0k"}},26:function(e,t,n){e.exports={SideDrawer:"SideDrawer__SideDrawer__2VEgq",Open:"SideDrawer__Open__YG3Hl",Close:"SideDrawer__Close__28Zbp",Logo:"SideDrawer__Logo__1lpzO"}},27:function(e,t,n){e.exports={BuildControl:"BuildControl__BuildControl__ibcUQ",Label:"BuildControl__Label__2VLnR",Less:"BuildControl__Less__3X6hg",More:"BuildControl__More__2eQpV"}},38:function(e,t,n){e.exports={Toolbar:"Toolbar__Toolbar__2hkfg",Logo:"Toolbar__Logo__24rue",DesktopOnly:"Toolbar__DesktopOnly__15Sc_"}},39:function(e,t,n){e.exports={NavigationItem:"NavigationItem__NavigationItem__3YSjr",active:"NavigationItem__active__2GQz1"}},40:function(e,t,n){e.exports={BuildControls:"BuildControls__BuildControls__220uz",OrderButton:"BuildControls__OrderButton__1ScSk",enable:"BuildControls__enable__3XAWA"}},41:function(e,t,n){e.exports={Button:"Button__Button__ajevi",Success:"Button__Success__1DMln",Danger:"Button__Danger__18hYt"}},51:function(e,t,n){e.exports={Conteudo:"Layout__Conteudo__3ypQ9"}},52:function(e,t,n){e.exports=n.p+"static/media/burger-logo.b8503d26.png"},53:function(e,t,n){e.exports={Logo:"Logo__Logo__2A07e"}},54:function(e,t,n){e.exports={NavigationItems:"NavigationItems__NavigationItems__3HY9i"}},56:function(e,t,n){e.exports={DrawerToggle:"DrawerToggle__DrawerToggle__24-HS"}},57:function(e,t,n){e.exports={Backdrop:"Backdrop__Backdrop__eeZpu"}},58:function(e,t,n){e.exports={Burger:"Burger__Burger__2h2kL"}},60:function(e,t,n){e.exports={Modal:"Modal__Modal__cd320"}},61:function(e,t,n){e.exports={loader:"Spinner__loader__3qv_p",load2:"Spinner__load2__1sg5x"}},62:function(e,t,n){e.exports={CheckoutSummary:"CheckoutSummary__CheckoutSummary__-avOx"}},63:function(e,t,n){e.exports={ContactData:"ContactData__ContactData__1whvJ"}},64:function(e,t,n){e.exports={Order:"Order__Order__W-Npf"}},65:function(e,t,n){e.exports={Auth:"Auth__Auth__1TInt"}},69:function(e,t,n){e.exports=n(101)},74:function(e,t,n){}},[[69,1,2]]]);
//# sourceMappingURL=main.79ec94db.chunk.js.map