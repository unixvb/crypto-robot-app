(this["webpackJsonpcrypto-robot-app"]=this["webpackJsonpcrypto-robot-app"]||[]).push([[0],[,,,,,,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(4),r=c.n(a),o=(c(10),c(5)),i=c(3),b=function(e,t){return function(e,t){var c=new WebSocket("wss://stream.binance.com:9443/ws"+e);return c.addEventListener("message",t),c}("/".concat(e.toLowerCase(),"@bookTicker"),(function(e){var c=JSON.parse(e.data);t(Object(i.a)(Object(i.a)({},c),{},{b:+c.b,B:+c.B,a:+c.a,A:+c.A}))}))},j=(c(11),c(0)),l={u:0,s:"",b:0,B:0,a:0,A:0},u=function(){var e=Object(n.useState)(l),t=Object(o.a)(e,2),c=t[0],s=t[1];return console.log("test"),Object(n.useEffect)((function(){var e=b("BTCUSDT",(function(e){return s(e)}));return function(){return e.close()}}),[]),Object(j.jsxs)("div",{className:"root",children:[Object(j.jsx)("p",{className:"symbol",children:c.s}),Object(j.jsx)("p",{className:"bid-price",children:c.b}),Object(j.jsx)("p",{className:"bid-qty",children:c.B}),Object(j.jsx)("p",{className:"ask-price",children:c.a}),Object(j.jsx)("p",{className:"ask-qty",children:c.A})]})},p=c.p+"static/media/logo.7f465dc0.svg";c(13);var d=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)("header",{className:"App-header",children:[Object(j.jsx)("img",{src:p,className:"App-logo",alt:"logo"}),Object(j.jsx)(u,{})]})})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,15)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),a(e),r(e)}))};r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(d,{})}),document.getElementById("root")),f()}],[[14,1,2]]]);
//# sourceMappingURL=main.9673c2ba.chunk.js.map