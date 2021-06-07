(function(t){function e(e){for(var n,s,c=e[0],o=e[1],l=e[2],d=0,m=[];d<c.length;d++)s=c[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&m.push(r[s][0]),r[s]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);u&&u(e);while(m.length)m.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,c=1;c<a.length;c++){var o=a[c];0!==r[o]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},i=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},3578:function(t,e,a){"use strict";a("9a89")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("nav-bar"),t.items?a("candy-list",{attrs:{items:t.items}}):t._e()],1)},i=[],s=(a("159b"),a("a434"),a("7b17"),a("ab8b"),a("260b")),c=(a("e71f"),a("588e"),{apiKey:"AIzaSyCfr9DT1psgAFs27TmIT27QMZrzp8IdZLQ",authDomain:"snack-me.firebaseapp.com",projectId:"snack-me",storageBucket:"snack-me.appspot.com",messagingSenderId:"995493411909",appId:"1:995493411909:web:47d3d9ec758a783ad7f72c",measurementId:"G-ZEQZK10JBC"}),o=function(){s["a"].initializeApp({apiKey:c.apiKey,appId:c.appId,projectId:c.projectId,authDomain:c.authDomain,storageBucket:c.storageBucket,messagingSenderId:c.messagingSenderId,measurementId:c.measurementId});var t=s["a"].firestore(),e=s["a"].storage(),a=function(){return t.collection("items").get()},n=function(e){t.collection("items").add({first:e.first,last:e.last}).then((function(t){console.log("Document written with ID: ",t.id)})).catch((function(t){console.error("Error adding document: ",t)}))},r=function(t){return e.ref(t).getDownloadURL()};return{getItems:a,addItem:n,getImageRef:r}}(),l=o,u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row gx-5"},t._l(t.items,(function(t){return a("div",{key:t.name,staticClass:"col-lg-3 col-sm-6 col-md-6 col-xs-12"},[a("candy-box",{attrs:{"item-name":t.name,"item-price":t.price,"item-weight":t.weight,"item-image":t.image}})],1)})),0)},d=[],m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card text-center p-3",staticStyle:{width:"18rem"}},[t.image?a("img",{staticClass:"card-img-top",attrs:{src:t.image,alt:"..."}}):t._e(),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v(t._s(t.itemName))]),t.itemDescription?a("p",{staticClass:"card-text"},[t._v(t._s(t.itemDescription))]):t._e(),a("div",{staticClass:"row"},[a("div",{staticClass:"col-5"},[t._v(" "+t._s(t.itemWeight)+"g ")]),a("div",{staticClass:"col-2"}),t._m(0)])])])},f=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-5"},[a("a",{staticClass:"btn btn-primary",attrs:{href:"#"}},[a("i",{staticClass:"fas fa-cart-plus"}),t._v(" Add ")])])}],p=(a("a9e3"),{name:"CandyBox",data:function(){return{image:String}},created:function(){var t=this;l.getImageRef(this.itemImage).then((function(e){console.log(e),t.image=e})).catch((function(t){console.log(t)}))},props:{itemName:String,itemDescription:String,itemWeight:Number,itemPrice:Number,itemImage:String}}),v=p,g=(a("3578"),a("2877")),b=Object(g["a"])(v,m,f,!1,null,"4a746a03",null),h=b.exports,_={name:"CandyList",components:{CandyBox:h},created:function(){console.log(this.items)},props:{items:Array}},C=_,y=Object(g["a"])(C,u,d,!1,null,"cc4dfcec",null),I=y.exports,w=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},x=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-lg fixed-top navbar-dark bg-dark"},[a("div",{staticClass:"container-fluid"},[a("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("Navbar")]),a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})]),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[a("ul",{staticClass:"navbar-nav me-auto mb-2 mb-lg-0"},[a("li",{staticClass:"nav-item active"},[a("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Home "),a("span",{staticClass:"sr-only"},[t._v("(current)")])])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Features")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Pricing")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link disabled",attrs:{href:"#"}},[t._v("Disabled")])])])])])])}],j={name:"NavBar"},k=j,O=Object(g["a"])(k,w,x,!1,null,"e4b29b70",null),S=O.exports,D={name:"App",created:function(){var t=this;l.getItems().then((function(e){e.forEach((function(e){console.log(e.data());var a=e.data();t.items.splice(0,a.count,a)}))})).catch((function(t){console.log(t)}))},data:function(){return{items:[]}},components:{CandyList:I,NavBar:S},mounted:function(){var t=document.createElement("script");t.setAttribute("src","https://kit.fontawesome.com/0fbfd00334.js"),t.setAttribute("crossorigin","anonymous"),document.head.appendChild(t)}},E=D,N=(a("034f"),Object(g["a"])(E,r,i,!1,null,null,null)),P=N.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(P)}}).$mount("#app")},"85ec":function(t,e,a){},"9a89":function(t,e,a){}});
//# sourceMappingURL=app.d3f82a01.js.map