!function(t){function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}var e={};o.m=t,o.c=e,o.i=function(t){return t},o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},o.p="",o(o.s=1)}([function(t,o,e){"use strict";o.__esModule=!0;var n=function(){function t(){console.log("Make it bulletproof")}return t}();o.MustHaveCoffee=n},function(t,o,e){"use strict";function n(t){if(t){return 10112}return 100}var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var e in o)o.hasOwnProperty(e)&&(t[e]=o[e])};return function(o,e){function n(){this.constructor=o}t(o,e),o.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}}();o.__esModule=!0;var u=function(){function t(){}return t.prototype.getColor=function(){console.log(this.color)},t}(),c=(new u,function(t){function o(o,e){var n=t.call(this)||this;return n.name=o,n.color=e,n}return r(o,t),o.prototype.setNewColor=function(o){this.color=o,t.prototype.getColor.call(this)},o}(u)),i=new c("basil","brite green");i.getColor(),i.setNewColor("Red"),i.getColor();var l=e(0);console.log(n(!0)),console.log(n(!1));new l.MustHaveCoffee}]);