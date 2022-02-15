(()=>{var e={606:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ProjectCard=void 0;var r=["col-lg-4","col-md-6"],o={"source-code":["fab","fa-github"],demo:["fas","fa-play-circle"],news:["fas","fa-newspaper"]},n=function(e,t){return e.split(" ").map((function(e){return t.find((function(t){return e.startsWith(t)}))?'<span class="keyword-match">'.concat(e,"</span>"):e})).join(" ")};t.ProjectCard=function(e,t){var i,a=e.title,c=e.subTitle,s=e.cardImage,u=e.description,l=e.skills,d=e.links,p=l.map((function(e){return function(e,t){var r=t.includes(e)&&"skill-selected";return'<span class="skill rounded-pill skill-normal '.concat(r,'">').concat(e,"</span>")}(e,t)})),f=d.map((function(e){return r=(t=e).type,n=t.uri,i=o[r].join(" "),'<a class="project-link-icon fa-lg '.concat(i,'" href="').concat(n,'"></a>');var t,r,n,i})),h='<div class="card project shadow">\n            <img class="card-img-top" src="'.concat(s,'" alt="project image">\n            <div class="card-body">\n                <h2 class="project-name">').concat(n(a,t),'</h2>\n                <h3 class="project-type">').concat(n(c,t),'</h3>\n                <p class="project-detail">').concat(n(u,t),'</p>\n                <div class="project-skills">').concat(p.join(""),'</div>\n                <div class="project-links">').concat(f.join(""),"</div>\n            </div>\n        </div>"),m=document.createElement("div");return(i=m.classList).add.apply(i,r),m.innerHTML=h,m}},288:(e,t)=>{"use strict";var r,o;Object.defineProperty(t,"__esModule",{value:!0}),t.default=(r=(new Date).getFullYear(),o=document.querySelector(".footer-text"),function(){o.innerText="© ".concat(r," Bruce Berrios")})},710:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,n,i,a,c,s=r(104),u=r(263),l=r(606);t.default=(o=document.querySelector("#search"),n=document.querySelector(".row"),i=(0,u.SearchService)(s.projects,(function(e){var t=e.title,r=e.subTitle,o=e.description,n=e.skills;return"".concat(t," ").concat(r," ").concat(o," ").concat(n.join(" "))})),a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=0===e.length?s.projects:e;r.map((function(e){n.appendChild((0,l.ProjectCard)(e,t))}))},c=function(e){var t=e.target.value,r=i.query(t),o=r.results,c=r.matchedQueryTerms;n.innerHTML="",a(o,c)},function(){a(s.projects),o.addEventListener("keyup",(0,u.debounce)(c))})},494:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o,n,i,a="theme-selected";t.default=(r=document.documentElement,o=document.querySelector("#theme-toggle"),n=document.querySelector("#theme-text"),i=function(e){var t=e.target.checked?"dark":"light";r.setAttribute("data-theme",t),localStorage.setItem(a,t),n.innerHTML="".concat(t," mode")},function(){var e,t=null!==(e=localStorage.getItem(a))&&void 0!==e?e:"light";r.setAttribute("data-theme",t),o.addEventListener("change",i),o.checked="dark"===t,n.innerHTML="".concat(t," mode")})},104:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.projects=void 0;var r="./static/images";t.projects=[{title:"Portfolio Site",subTitle:"Web Application",cardImage:"".concat(r,"/personal-site.png"),description:"The portfolio site you are viewing right now.",skills:["TypeScript","Webpack","HTML","CSS"],links:[{type:"source-code",uri:"https://github.com/Bruception/Bruception.github.io"},{type:"demo",uri:"/"}]},{title:"FIU Course API",subTitle:"Web Application",cardImage:"".concat(r,"/json.png"),description:"A web application that allows students to query courses offered at FIU.",skills:["NodeJS","Express","Jest","JavaScript","HTML","CSS","Bash","Python","GraphQL"],links:[{type:"source-code",uri:"https://github.com/Bruception/fiu-course-api"},{type:"demo",uri:"https://fiu-course-api.herokuapp.com/"}]},{title:"Advent of Code 2021 Solver",subTitle:"Shell program",cardImage:"".concat(r,"/aoc.jpeg"),description:"The full set of solutions for all    puzzles featured in the Advent of Code 2021 event.",skills:["Bash","Python"],links:[{type:"source-code",uri:"https://github.com/Bruception/advent-of-code-2021"}]},{title:"CovidSync",subTitle:"Web Application",cardImage:"".concat(r,"/covidsync.png"),description:"An application that integrates various APIs and services      to provide crucial resources for the Spanish-speaking and bilingual      communities about COVID-19. <strong>Won 2nd place</strong> at PantherHacks 2020.",skills:["React","NodeJS","Express","Firestore","JavaScript","HTML","CSS"],links:[{type:"source-code",uri:"https://github.com/FultonG/CovidSync"},{type:"news",uri:"http://panthernow.com/2020/07/20/pantherhacks-2020-seeks-to-foster-innovation/"}]},{title:"Graphing Calculator",subTitle:"Desktop Application",cardImage:"".concat(r,"/calculator.png"),description:"A graphing calculator capable of graphing any function and      approximating bounded integrals.",skills:["LOVE2D","Lua"],links:[{type:"source-code",uri:"https://github.com/Arturoo0/GraphingCalculator"}]},{title:"Weather Tracker",subTitle:"Web Application",cardImage:"".concat(r,"/weather.png"),description:"A web application that allows users to track the weather of various locations.      Weather data is fetched from OpenWeatherMap's API.",skills:["NodeJS","Express","JavaScript","HTML","CSS"],links:[{type:"source-code",uri:"https://github.com/Arturoo0/Weather-tracker-"},{type:"demo",uri:"https://weather-tracker-js.herokuapp.com/"}]},{title:"Pathfinding Visualizer",subTitle:"Web Application",cardImage:"".concat(r,"/path.png"),description:"A web app that lets users visualize      common pathfinding algorithms.",skills:["JavaScript","HTML","CSS"],links:[{type:"source-code",uri:"https://github.com/Bruception/pathfinding-visualizer"},{type:"demo",uri:"/pathfinding-visualizer"}]},{title:"Handwritten Digit Classifier",subTitle:"Machine Learning",cardImage:"".concat(r,"/network.png"),description:"A tool that lets users visualize      and interact with a neural network.",skills:["LOVE2D","Lua"],links:[{type:"source-code",uri:"https://github.com/Bruception/digit-classifier-love"}]},{title:"bitz",subTitle:"Mobile Game",cardImage:"".concat(r,"/bitz.png"),description:"A puzzle game based on the Tower of Hanoi.      Players need to solve puzzles in the optimal number of moves.",skills:["LOVE2D","Lua"],links:[{type:"source-code",uri:"https://github.com/Bruception/bitz"},{type:"demo",uri:"https://bitz-game.herokuapp.com/"}]}]},975:function(e,t,r){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var n=o(r(494)),i=o(r(710)),a=o(r(288));window.onload=function(){(0,n.default)(),(0,i.default)(),(0,a.default)()}},751:function(e,t){"use strict";var r=this;Object.defineProperty(t,"__esModule",{value:!0}),t.debounce=void 0,t.debounce=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:250,o=0;return function(){clearTimeout(o);for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];o=setTimeout(e.bind.apply(e,[r].concat(i)),t)}}},263:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.debounce=t.SearchService=void 0;var o=r(751);Object.defineProperty(t,"debounce",{enumerable:!0,get:function(){return o.debounce}});var n=r(989);Object.defineProperty(t,"SearchService",{enumerable:!0,get:function(){return n.SearchService}})},989:function(e,t,r){"use strict";function o(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.SearchService=void 0;var a=i(r(718));t.SearchService=function(e,t){var r={},n={},i=function(e){return e.match(/[a-zA-Z0-9]+/g)||[]};e.forEach((function(e){i(t(e)).forEach((function(t){var o=t.toLocaleLowerCase();o in n||(n[o]=new Set),n[o].add(t),o in r||(r[o]=new Set),r[o].add(e)}))}));var c=Object.keys(r);return{query:function(e){var t={results:[],matchedQueryTerms:[]},s=i(e.toLocaleLowerCase());if(0===s.length)return t;var u=new Set,l=new Set;return s.forEach((function(e){c.forEach((function(t){((0,a.default)(t,e).similarity>=.75||t.startsWith(e))&&(r[t].forEach((function(e){u.add(e)})),n[t].forEach((function(e){l.add(e)})))}))})),t.results=o(u),t.matchedQueryTerms=o(l),t}}}},718:e=>{e.exports=function(e,t,r){var o,n,i,a,c,s,u=e.length,l=t.length,d=[];r=(r||(l>u?l:u))+1;for(var p=0;p<r;p++)d[p]=[p],d[p].length=r;for(p=0;p<r;p++)d[0][p]=p;if(Math.abs(u-l)>(r||100))return f(r||100);if(0===u)return f(l);if(0===l)return f(u);for(p=1;p<=u;++p)for(n=e[p-1],o=1;o<=l;++o){if(p===o&&d[p][o]>4)return f(u);a=n===(i=t[o-1])?0:1,c=d[p-1][o]+1,(s=d[p][o-1]+1)<c&&(c=s),(s=d[p-1][o-1]+a)<c&&(c=s),d[p][o]=p>1&&o>1&&n===t[o-2]&&e[p-2]===i&&(s=d[p-2][o-2]+a)<c?s:c}return f(d[u][l]);function f(e){var t=Math.max(u,l),r=0===t?0:e/t;return{steps:e,relative:r,similarity:1-r}}}}},t={};!function r(o){var n=t[o];if(void 0!==n)return n.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,r),i.exports}(975)})();