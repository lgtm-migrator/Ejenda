(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{199:function(e,n,r){"use strict";r.r(n);var o={mounted:function(){var e;(e=this.subjects).push.apply(e,[this.generateSubject("Math","red"),this.generateSubject("English","indigo"),this.generateSubject("Science","yellow")])},data:function(){return{subjects:[]}},methods:{push:function(e){e.assignments={name:e.entry,id:new Date},e.entry=""},generateSubject:function(e,n){return{name:e,id:e.toLowerCase(),color:n,get assignments(){return JSON.parse(localStorage.getItem(e.toLowerCase())||"[]")},set assignments(n){this.assignments.push(n),localStorage.setItem(e.toLowerCase(),JSON.stringify(t))}}},parseColor:function(e){switch(e){case"red":return"bg-red-400 text-white";case"indigo":return"bg-indigo-400 text-white";case"blue":return"bg-blue-400 text-white";case"yellow":return"bg-yellow-400 text-white";default:return"bg-red-400 text-white"}}}},l=r(41),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col"},[n("h1",{staticClass:"font-serif font-bold text-4xl"},[e._v("E-jenda")]),e._v(" "),e._l(e.subjects,(function(t){return n("ul",{key:t.name,staticClass:"-bg-opacity-50 w-full p-6",class:e.parseColor(t.color)},[n("h1",{staticClass:"font-serif font-bold text-4xl"},[e._v(e._s(t.name))]),e._v(" "),e._l(t.assignments,(function(t){return n("li",{key:""+t.id,staticClass:"\n        bg-opacity-75\n        font-serif\n        rounded-sm\n        bg-white\n        text-gray-800\n        m-2\n        p-1\n      "},[e._v("\n      "+e._s(t.name)+"\n    ")])})),e._v(" "),n("button",{staticClass:"rounded-l-sm bg-white text-gray-800 p-2",on:{click:function(n){return e.push(t)}}},[e._v("\n      +")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.entry,expression:"subject.entry"}],staticClass:"text-gray-800 rounded-r-sm p-2",attrs:{placeholder:"Add a new assignment"},domProps:{value:t.entry},on:{input:function(n){n.target.composing||e.$set(t,"entry",n.target.value)}}})],2)}))],2)}),[],!1,null,null,null);n.default=component.exports}}]);