(function(e){function t(t){for(var r,a,s=t[0],c=t[1],u=t[2],l=0,f=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&f.push(i[a][0]),i[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==i[c]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},i={app:0},o=[];function a(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"93c005ca"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=i[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=i[e]=[t,r]}));t.push(n[2]=r);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=a(e);var u=new Error;o=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",u.name="ChunkLoadError",u.type=r,u.request=o,n[1](u)}i[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var d=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"133e":function(e,t,n){"use strict";n("36cf")},2638:function(e,t,n){e.exports=n.p+"img/court-v.e1064030.svg"},"36cf":function(e,t,n){},"4cbb":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function i(e,t){var n=Object(r["q"])("router-view");return Object(r["m"])(),Object(r["c"])(n)}n("ece0");const o={};o.render=i;var a=o,s=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),c={class:"bg-gray-800"};function u(e,t,n,i,o,a){var s=Object(r["q"])("SandTable");return Object(r["m"])(),Object(r["c"])("div",c,[Object(r["d"])(s)])}var l=n("8625"),d=n.n(l),f=n("e858"),b=n.n(f),h=n("2638"),p=n.n(h),g=n("8fbc"),v=n.n(g),w={class:"flex justify-center items-center min-h-screen w-screen bg-gray-800",ref:"sandtable"},y=Object(r["d"])("img",{src:d.a,alt:""},null,-1),m={key:0,src:b.a,class:"z-0 w-full h-full absolute"},O={key:1,src:p.a,class:"z-0 w-full h-full absolute"},j={class:"z-10 absolute h-full w-full left-0 top-0 flex justify-center"},_=Object(r["d"])("img",{src:v.a,alt:""},null,-1);function x(e,t,n,i,o,a){return Object(r["m"])(),Object(r["c"])("div",w,[Object(r["d"])("div",{class:"sandtable relative",ref:"sandtable",style:a.sandtable_style},[Object(r["d"])("div",{class:"absolute top-2 right-2 cursor-pointer z-20 w-8 h-8 opacity-10 hover:opacity-60 transition duration-150 ease-in-out",onClick:t[1]||(t[1]=function(){return a.fullscreen&&a.fullscreen.apply(a,arguments)})},[y]),a.is_wide_screen?(Object(r["m"])(),Object(r["c"])("img",m)):(Object(r["m"])(),Object(r["c"])("img",O)),Object(r["d"])("div",j,[Object(r["d"])("div",{class:"draggable bg-blue-500 rounded-full border-white",style:a.widget_style},null,4),Object(r["d"])("div",{class:"draggable bg-blue-500 rounded-full border-white",style:a.widget_style},null,4),Object(r["d"])("div",{style:a.widget_style,class:"draggable border-transparent"},[_],4),Object(r["d"])("div",{class:"draggable bg-red-500 rounded-full border-white",style:a.widget_style},null,4),Object(r["d"])("div",{class:"draggable bg-red-500 rounded-full border-white",style:a.widget_style},null,4)])],4)],512)}n("b680");var T=n("5014"),E=n.n(T),H=n("93bf"),S=n.n(H),I={name:"SandTable",data:function(){return{WIDTH:732,LENGTH:1462,WIDGET_SIZE:60,BORDER_SIZE:6.5}},props:{},mounted:function(){this.init_interact()},methods:{init_interact:function(){E()(".draggable").draggable({inertia:!0,modifiers:[E.a.modifiers.restrictRect({restriction:"parent",endOnly:!0})],autoScroll:!0,listeners:{move:this.dragMoveListener,end:function(e){var t=e.target.querySelector("p");t&&(t.textContent="moved a distance of "+Math.sqrt(Math.pow(e.pageX-e.x0,2)+Math.pow(e.pageY-e.y0,2)|0).toFixed(2)+"px")}}})},dragMoveListener:function(e){var t=e.target,n=(parseFloat(t.getAttribute("data-x"))||0)+e.dx,r=(parseFloat(t.getAttribute("data-y"))||0)+e.dy;t.style.transform="translate("+n+"px, "+r+"px)",t.setAttribute("data-x",n),t.setAttribute("data-y",r)},length2width:function(e){return e/this.LENGTH*this.WIDTH},width2length:function(e){return e/this.WIDTH*this.LENGTH},fullscreen:function(){console.log("fullscreen"),S.a.isEnabled&&S.a.toggle(this.$refs.sandtable)}},computed:{sandtable_style:function(){return{height:this.height+"px",width:this.width+"px"}},widget_style:function(){return{height:this.ratio*this.WIDGET_SIZE+"px",width:this.ratio*this.WIDGET_SIZE+"px","border-width":this.ratio*this.BORDER_SIZE+"px"}},is_wide_screen:function(){return window.innerWidth>window.innerHeight},width:function(){return this.ratio*(this.is_wide_screen?this.LENGTH:this.WIDTH)},height:function(){return this.ratio*(this.is_wide_screen?this.WIDTH:this.LENGTH)},ratio:function(){var e=0,t=0;return this.is_wide_screen?(e=window.innerWidth,t=this.width2length(window.innerHeight)):(e=window.innerHeight,t=this.width2length(window.innerWidth)),e=e<=t?e:t,e/this.LENGTH}}};n("133e");I.render=x;var W=I,D={name:"Home",components:{SandTable:W}};D.render=u;var L=D,k=[{path:"/",name:"Home",component:L},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],G=Object(s["a"])({history:Object(s["b"])("/"),routes:k}),M=G;n("a766");Object(r["b"])(a).use(M).mount("#app")},8625:function(e,t,n){e.exports=n.p+"img/fullscreen.904b8f27.svg"},"8fbc":function(e,t,n){e.exports=n.p+"img/shuttlecock.9a6944f1.svg"},a766:function(e,t,n){},e858:function(e,t,n){e.exports=n.p+"img/court.0c2ed1ba.svg"},ece0:function(e,t,n){"use strict";n("4cbb")}});
//# sourceMappingURL=app.8f6858a6.js.map