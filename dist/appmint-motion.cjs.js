"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("animejs"),t=require("react");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=r(e),o=r(t),a=function(){return a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},a.apply(this,arguments)};"function"==typeof SuppressedError&&SuppressedError;exports.AnimateOnScroll=function(e){var r=e.children,i=e.animation,u=t.useRef(null);return t.useEffect((function(){var e=u.current,t=new IntersectionObserver((function(t){t[0].isIntersecting&&e&&n.default(a({targets:e},i))}),{threshold:.1});return e&&t.observe(e),function(){return t.disconnect()}}),[i]),o.default.createElement("div",{ref:u}," ",r," ")},exports.AnimatePresence=function(e){var r=e.children,i=e.visible,u=e.enter,s=e.exit,f=o.default.useRef(null);return t.useEffect((function(){f.current&&n.default(a({targets:f.current},i?u:s))}),[i,u,s]),o.default.createElement("div",{ref:f},i&&r)},exports.ParallaxEffect=function(e){var r=e.children,n=e.speed,a=t.useRef(null);return t.useEffect((function(){var e=function(){if(a.current){var e=window.scrollY*n;a.current.style.transform="translateY(".concat(e,"px)")}};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[n]),o.default.createElement("div",{ref:a},r)},exports.SpringAnimation=function(e){var r=e.children,i=e.to,u=e.stiffness,s=void 0===u?100:u,f=e.damping,c=void 0===f?20:f,l=t.useRef(null);return t.useEffect((function(){l.current&&n.default(a(a({targets:l.current},i),{easing:"spring(".concat(s,", ").concat(c,", 1, 0)")}))}),[i,s,c]),o.default.createElement("div",{ref:l},r)},exports.animateOnScroll=function(e){var t=e.target,r=e.animation,o="string"==typeof t?document.querySelector(t):t;if(!o)throw new Error("Target element not found");new IntersectionObserver((function(e){e[0].isIntersecting&&n.default(a({targets:o},r))}),{threshold:.1}).observe(o)},exports.animatePresence=function(e){var t=e.target,r=e.enter,o=e.exit,i="string"==typeof t?document.querySelector(t):t;if(!i)throw new Error("Target element not found");return n.default(a({targets:i},r)),function(){n.default(a({targets:i},o))}},exports.createTimeline=function(){return n.default.timeline()},exports.morphSVG=function(e){var t=e.target,r=e.from,o=e.to,a=e.duration,i="string"==typeof t?document.querySelector(t):t;if(!i||!i.getAttribute)throw new Error("Target must be an SVG path");n.default({targets:i,d:[{value:r},{value:o}],duration:a,easing:"easeInOutQuad"})},exports.parallaxEffect=function(e){var t=e.target,r=e.speed,n="string"==typeof t?document.querySelector(t):t;if(!n)throw new Error("Target element not found");window.addEventListener("scroll",(function(){var e=window.scrollY*r;n.style.transform="translateY(".concat(e,"px)")}))},exports.springAnimation=function(e){var t=e.target,r=e.to,o=e.stiffness,i=void 0===o?100:o,u=e.damping,s=void 0===u?20:u,f="string"==typeof t?document.querySelector(t):t;if(!f)throw new Error("Target element not found");n.default(a(a({targets:f},r),{easing:"spring(".concat(i,", ").concat(s,", 1, 0)")}))},exports.staggerAnimation=function(e){var t=e.target,r=e.animation,o=e.delay,i="string"==typeof t?document.querySelectorAll(t):t;if(!i)throw new Error("Target elements not found");n.default(a(a({targets:i},r),{delay:n.default.stagger(o)}))},exports.useStagger=function(e){var t=e.target,r=e.animation,o=e.delay;n.default(a(a({targets:t},r),{delay:n.default.stagger(o)}))},exports.useTimeline=function(){return n.default.timeline()};