!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e,n,i){void 0===e&&(e=Math.floor(100*Math.random())),void 0===n&&(n=!1),void 0===i&&(i=[]),this.title=t,this.id=e,this.isDone=n,this.subTasks=i}return t.prototype.switch=function(){this.isDone=!this.isDone},t.prototype.addSubItem=function(t){this.subTasks.push({title:t.title,id:t.id,isDone:t.isDone})},t}();e.default=i},function(t,e,n){"use strict";var i,o=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),s=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var r=function(t){function e(e,n,i,o){void 0===i&&(i=Math.floor(100*Math.random())),void 0===o&&(o=!1);var s=t.call(this,e,i,o)||this;return s.date=n,!o&&+new Date(n)<+new Date&&(s.isDone=!0),s}return o(e,t),e}(s(n(2)).default);e.default=r},function(t,e,n){"use strict";var i,o=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),s=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var r=function(t){function e(e,n,i){return void 0===n&&(n=Math.floor(100*Math.random())),void 0===i&&(i=!1),t.call(this,e,n,i)||this}return o(e,t),e}(s(n(0)).default);e.default=r},function(t,e,n){"use strict";var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=i(n(4)),s=i(n(0)),r=i(n(2)),l=i(n(1));function a(t){var e=document.getElementsByClassName("todos")[0],n=document.createElement("ul");n.setAttribute("class","list list-group list-group-flush"),t.store.forEach(function(t){var e=document.createElement("li");if(e.setAttribute("class","item list-group-item"),e.innerHTML='<input class="check" type="checkbox" style="display: inline-block"><p style="display:inline-block">'+t.title+'</p><button style="display:inline-block" class="del btn btn-danger btn-sm"> -</button><button id=\'_'+t.id+'\' class="addsub btn btn-success btn-sm">+</button>',t.subTasks&&t.subTasks.length>0){var i=document.createElement("ul");i.setAttribute("class","sublist list-group list-group-flush"),t.subTasks.forEach(function(t){var e=document.createElement("li");e.setAttribute("class","subitem list-group-item"),e.innerHTML='<input class="subcheck" id=\''+t.id+'\' type="checkbox" style="display: inline-block"><p style="display:inline-block">'+t.title+'</p><button style="display:inline-block margin: 10px" class="delsub btn btn-danger btn-sm"> -</button>',i.appendChild(e),t.isDone&&(e.firstChild.checked=!0)}),e.appendChild(i)}if(t.date){var o=document.createElement("p");o.setAttribute("style","display: inline-block");var s=+new Date(t.date)-+new Date;o.innerHTML=s>0?"remaining "+(s/864e5).toFixed(3)+" days":"expired",e.innerHTML='<input class="check" type="checkbox" style="display: inline-block"><p style="display:inline-block">'+t.title+'</p><button style="display:inline-block" class="del btn btn-danger btn-sm"> -</button>',e.appendChild(o)}t.isDone&&(e.firstChild.checked=!0),n.appendChild(e)}),e.appendChild(n)}window.onload=function(){var t=new o.default;t.getItems(),a(t);var e=document.getElementById("submit"),n=document.getElementById("inp"),i=document.getElementsByClassName("del"),u=document.getElementById("clear"),c=document.getElementsByClassName("check"),d=document.getElementsByClassName("addsub"),f=document.getElementsByClassName("delsub"),p=document.getElementById("sr"),b=document.getElementsByClassName("subcheck"),h=document.getElementById("stime");p.addEventListener("input",function(){a(function(t,e){return document.getElementsByClassName("todos")[0].innerHTML=" ",{store:e.store.filter(function(e){return e.title.toLowerCase().includes(t.toLowerCase())})}}(p.value,t))}),u.addEventListener("click",function(){t.deleteDone(),location.reload()});for(var m=0;m<f.length;m++)f[m].addEventListener("click",function(){t.store.forEach(function(e,n){e.subTasks&&e.subTasks.length>0&&e.subTasks.forEach(function(e,i){e.id==Number(event.target.parentNode.firstChild.getAttribute("id"))&&(t.store[n].subTasks.splice(i,1),t.save(),location.reload())})})});var y=function(e){i[e].addEventListener("click",function(){t.deleteItem(e),location.reload()})};for(m=0;m<i.length;m++)y(m);e.addEventListener("click",function(){var e=new s.default(n.value,Math.floor(100*Math.random()));t.addItem(e),t.save(),location.reload()}),h.addEventListener("click",function(){var e=Number(prompt("Enter finish date")),i=new l.default(n.value,e);t.addItem(i),t.save(),location.reload()});var v=function(e){c[e].addEventListener("change",function(){t.store[e].isDone=!t.store[e].isDone,t.save()})};for(m=0;m<c.length;m++)v(m);var g=function(e){b[e].addEventListener("change",function(){t.store.forEach(function(n){n.subTasks&&n.subTasks.length>0&&n.subTasks.forEach(function(n){n.id===Number(b[e].getAttribute("id"))&&(n.isDone=!n.isDone,t.save())})})})};for(m=0;m<b.length;m++)g(m);var _=function(e){d[e].addEventListener("click",function(){var n=prompt("Enter subtask name"),i=d[e].nextElementSibling||document.createElement("ul");i.setAttribute("class","sublist list-group");var o=new r.default(n);i.innerHTML="<li class='list-group-item'><input id='"+o.id+'\' class="check" type="checkbox" style="display: inline-block"><p style="display:inline-block">'+o.title+"</p></li>",event.target.parentNode.appendChild(i),t.store.forEach(function(t){"_"+t.id==event.target.getAttribute("id")&&t.subTasks.push({id:o.id,title:o.title,isDone:!1})}),t.save(),location.reload()})};for(m=0;m<d.length;m++)_(m)}},function(t,e,n){"use strict";var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=i(n(0)),s=i(n(1)),r=function(){function t(){this.store=[],this.store=[]}return t.prototype.addItem=function(t){t.date?this.store.push({id:t.id,title:t.title,date:t.date,isDone:t.isDone}):this.store.push({id:t.id,title:t.title,isDone:t.isDone,subTasks:t.subTasks})},t.prototype.save=function(){console.log("saved"),localStorage.setItem("TODO",JSON.stringify(this.store))},t.prototype.getItems=function(){var t=this;localStorage.getItem("TODO")&&(JSON.parse(localStorage.getItem("TODO"))||[]).forEach(function(e){e.date?t.store.push(new s.default(e.title,e.date,e.id,e.isDone)):t.store.push(new o.default(e.title,e.id,e.isDone,e.subTasks))})},t.prototype.deleteItem=function(t){this.store.splice(t,1),this.save()},t.prototype.deleteDone=function(){for(var t=this.store.length-1;t>=0;t--)!0===this.store[t].isDone&&(this.deleteItem(t),console.log("udoli"));this.save()},t}();e.default=r}]);
//# sourceMappingURL=main.js.map