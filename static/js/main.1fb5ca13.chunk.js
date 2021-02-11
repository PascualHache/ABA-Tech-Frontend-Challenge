(this["webpackJsonpTech-Fronent-Challenge"]=this["webpackJsonpTech-Fronent-Challenge"]||[]).push([[0],{46:function(e,t,a){e.exports=a.p+"static/media/hero.ee1d2f30.svg"},47:function(e,t,a){e.exports=a.p+"static/media/avatar.8d5ea913.svg"},50:function(e,t,a){e.exports=a(81)},59:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(17),c=a.n(l),s=a(12),i=a(10),o=a(44),m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_NEW_RELEASES":return t.releases;default:return e}},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_FEATURED_PLAYLISTS":return t.playlists;default:return e}},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_CATEGORIES":return t.categories;default:return e}},d=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d,p=Object(i.e)(Object(i.c)({newReleases:m,featuredPlaylists:u,categories:E}),d(Object(i.a)(o.a))),f=(a(59),a(19)),h=a(20),v=a(25),g=a(23),y=a(22),b=a(3),N=a(24),S={baseUrl:"https://api.spotify.com/v1",authUrl:"https://accounts.spotify.com/authorize",clientSecret:"",redirectUrl:"http://localhost:3000/redirect",newReleaseUrl:"https://api.spotify.com/v1/browse/new-releases",featuredPlaylistsUrl:"https://api.spotify.com/v1/browse/featured-playlists",categoriesUrl:"https://api.spotify.com/v1/browse/categories"},w=Object(s.b)()((function(){var e=S,t=e.authUrl,a=e.redirectUrl,l=Object(n.useState)(""),c=Object(N.a)(l,2),s=c[0],i=c[1],o=function(){var e="".concat(t,"?client_id=").concat(localStorage.getItem("clientID"));e+="&redirect_uri=".concat(a),e+="&response_type=token&show_dialog=true",window.location=e};return r.a.createElement("div",{className:"login"},r.a.createElement("div",{className:"welcomeMsg"},r.a.createElement("h1",null,"Welcome"),r.a.createElement("p",null,"There's only one way you can acces to this demo and is getting my Spotify ",r.a.createElement("strong",null,"client ID")," and pasting it below"),r.a.createElement("p",null,"Send me an email and I will send you"),r.a.createElement("a",{href:"mailto:hector.pascual.diaz@gmail.com@",target:"_blank",rel:"noopener noreferrer"},"hector.pascual.diaz@gmail.com")),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),localStorage.setItem("clientID",s),o()},className:"welcome-form"},r.a.createElement("label",null,"Client ID:",r.a.createElement("input",{type:"text",value:s,onChange:function(e){return i(e.target.value)}})),r.a.createElement("button",{type:"submit",value:"Submit",className:"button-login"},"Login to spotify")))})),O=a(45),_=a.n(O),T=a(14),R=a.n(T),j=function(){try{var e=JSON.parse(localStorage.getItem("params"));e&&(R.a.defaults.headers.common.Authorization="Bearer ".concat(e.access_token))}catch(t){console.log("Error setting auth",t)}},x=function(e){Object(v.a)(a,e);var t=Object(g.a)(a);function a(){return Object(f.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.history,a=e.location;try{if(_.a.isEmpty(a.hash))return t.push("/Main");var n=a.hash.slice(1).split("&").reduce((function(e,t){var a=t.split("="),n=Object(N.a)(a,2),r=n[0],l=n[1];return e[r]=l,e}),{});localStorage.setItem("params",JSON.stringify(n)),t.push("/Main")}catch(r){t.push("/")}}},{key:"render",value:function(){return null}}]),a}(r.a.Component),I=a(46),k=a.n(I),U=a(9),P=function(){return r.a.createElement("div",{className:"header"},r.a.createElement("img",{src:k.a,className:"hero-img",alt:"hero-svg"}),r.a.createElement("h1",{className:"title-heading"},"Your favourite tunes"),r.a.createElement("h2",{className:"title-heading subtitle"},"All ",r.a.createElement("span",{role:"img","aria-label":""},r.a.createElement(U.f,{className:"sun"}))," and all ",r.a.createElement("span",{role:"img","aria-label":""},r.a.createElement(U.c,{className:"moon"}))))},A=a(47),C=a.n(A),D=a(21);function L(){return r.a.createElement("div",{className:"side-menu"},r.a.createElement("div",{className:"avatarBox"},r.a.createElement("img",{src:C.a,className:"avatar",alt:"avatar"}),r.a.createElement("span",null,"Bob Smith")),r.a.createElement("a",{href:"/#"},r.a.createElement(U.a,null),r.a.createElement("div",{className:"menu-text"},"Discover")),r.a.createElement("a",{href:"/#"},r.a.createElement(U.e,null),r.a.createElement("div",{className:"menu-text"},"Search")),r.a.createElement("a",{href:"/#"},r.a.createElement(U.b,null),r.a.createElement("div",{className:"menu-text"},"Favourites")),r.a.createElement("a",{href:"/#"},r.a.createElement(U.d,null),r.a.createElement("div",{className:"menu-text"},"Playlists")),r.a.createElement("a",{href:"/#"},r.a.createElement(D.a,null),r.a.createElement("div",{className:"menu-text"},"Charts")))}var F=a(15),G=a(48),M=a(29);function B(e){return r.a.createElement("div",{className:"music-player-box"},r.a.createElement("div",{className:"extraSticky"},r.a.createElement("div",{className:"unknown-cover"}),r.a.createElement("div",{className:"track-name"},e.track),r.a.createElement(F.c,null),r.a.createElement(F.b,{className:"play-circle"}),r.a.createElement(F.d,null),r.a.createElement("hr",{className:"play-line"}),r.a.createElement(F.a,{className:"right-icons"}),r.a.createElement(G.a,{className:"right-icons"}),r.a.createElement(D.b,{className:"right-icons"}),r.a.createElement(M.b,{className:"right-icons"}),r.a.createElement(M.a,{className:"dots"})))}var W=a(49),z=a.n(W),J=a(30);function Y(e){var t=e.text,a=e.images;return r.a.createElement("div",{className:"menu-item"},r.a.createElement("img",{src:a,className:"cover-img",alt:t}),r.a.createElement("div",{className:"cover-name"},t))}var H=function(e){var t=function(e,t){return e.map((function(e){var a=e.name,n=e.images,l=e.icons;return r.a.createElement(Y,{text:a,key:a,images:"releases"===t?n[1].url:"categories"===t?l[0].url:n[0].url})}))}(e.data,e.type);return r.a.createElement("div",{className:"covers-carousel"},r.a.createElement("div",{className:"title-line-text"},e.title,r.a.createElement("hr",{className:"title-line"})),r.a.createElement(z.a,{data:t,arrowLeft:r.a.createElement(J.a,null),arrowRight:r.a.createElement(J.b,null),wheel:!1,alignCenter:!1}))};H.defaultProps={data:[]};var X=H,K=a(16),V=a.n(K),q=a(31),Q=function(){var e=Object(q.a)(V.a.mark((function e(t,a){var n;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(),e.next=3,R.a.get(t,a);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),Z=S,$=Z.newReleaseUrl,ee=Z.featuredPlaylistsUrl,te=Z.categoriesUrl,ae=Object(s.b)((function(e){return{newReleases:e.newReleases,featuredPlaylists:e.featuredPlaylists,categories:e.categories}}),(function(e){return{fetchReleases:function(){return e((function(e){return Q($).then((function(t){e({type:"GET_NEW_RELEASES",releases:t})}))}))},fetchFeatured:function(){return e((function(e){return Q(ee).then((function(t){e({type:"GET_FEATURED_PLAYLISTS",playlists:t})}))}))},fetchCategories:function(){return e((function(e){return Q(te).then((function(t){e({type:"GET_CATEGORIES",categories:t})}))}))}}}))((function(e){var t,a,l,c,s;return Object(n.useEffect)((function(){e.fetchReleases(),e.fetchFeatured(),e.fetchCategories()}),[]),r.a.createElement("div",{className:"main"},r.a.createElement(L,null),r.a.createElement("div",{className:"rightSide"},r.a.createElement(P,null),r.a.createElement("div",{className:"content-view"},r.a.createElement(X,{data:null===(t=e.newReleases)||void 0===t||null===(a=t.albums)||void 0===a?void 0:a.items,title:"RELEASED THIS WEEK",type:"releases"}),r.a.createElement(X,{data:null===(l=e.featuredPlaylists)||void 0===l||null===(c=l.playlists)||void 0===c?void 0:c.items,title:"FEATURED PLAYLISTS",type:"featured"}),r.a.createElement(X,{data:null===(s=e.categories.categories)||void 0===s?void 0:s.items,title:"BROWSE",type:"categories"})),r.a.createElement(B,{track:"Nothing's playing"})))})),ne=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(P,null),"Page not found. Goto ",r.a.createElement(y.b,{to:"/Main"},"Home Page"))},re=function(e){Object(v.a)(a,e);var t=Object(g.a)(a);function a(){return Object(f.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return r.a.createElement(y.a,null,r.a.createElement(b.c,null,r.a.createElement(b.a,{path:"/",component:w,exact:!0}),r.a.createElement(b.a,{path:"/redirect",component:x}),r.a.createElement(b.a,{path:"/main",component:ae}),r.a.createElement(b.a,{component:ne})))}}]),a}(r.a.Component);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s.a,{store:p},r.a.createElement(re,null))),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.1fb5ca13.chunk.js.map