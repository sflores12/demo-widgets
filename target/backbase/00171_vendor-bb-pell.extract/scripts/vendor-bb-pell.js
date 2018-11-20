/* eslint-disable */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e(t.pell={})}(this,function(t){"use strict";var e=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},n={bold:{icon:"<b>B</b>",title:"Bold",result:function(){return o("bold")}},italic:{icon:"<i>I</i>",title:"Italic",result:function(){return o("italic")}},underline:{icon:"<u>U</u>",title:"Underline",result:function(){return o("underline")}},strikethrough:{icon:"<strike>S</strike>",title:"Strike-through",result:function(){return o("strikeThrough")}},heading1:{icon:"<b>H<sub>1</sub></b>",title:"Heading 1",result:function(){return o("formatBlock","<H1>")}},heading2:{icon:"<b>H<sub>2</sub></b>",title:"Heading 2",result:function(){return o("formatBlock","<H2>")}},paragraph:{icon:"&#182;",title:"Paragraph",result:function(){return o("formatBlock","<P>")}},quote:{icon:"&#8220; &#8221;",title:"Quote",result:function(){return o("formatBlock","<BLOCKQUOTE>")}},olist:{icon:"&#35;",title:"Ordered List",result:function(){return o("insertOrderedList")}},ulist:{icon:"&#8226;",title:"Unordered List",result:function(){return o("insertUnorderedList")}},code:{icon:"&lt;/&gt;",title:"Code",result:function(){return o("formatBlock","<PRE>")}},line:{icon:"&#8213;",title:"Horizontal Line",result:function(){return o("insertHorizontalRule")}},link:{icon:"&#128279;",title:"Link",result:function(){var t=window.prompt("Enter the link URL");t&&o("createLink",t)}},image:{icon:"&#128247;",title:"Image",result:function(){var t=window.prompt("Enter the image URL");t&&o("insertImage",t)}}},i={actionbar:"pell-actionbar",button:"pell-button",content:"pell-content"},o=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;document.execCommand(t,!1,e)},r=function(t){9===t.which&&t.preventDefault()},l=function(t){t.actions=t.actions?t.actions.map(function(t){return"string"==typeof t?n[t]:n[t.name]?e({},n[t.name],t):t}):Object.keys(n).map(function(t){return n[t]}),t.classes=e({},i,t.classes);var l=document.createElement("div");return l.className=t.classes.actionbar,t.element.appendChild(l),t.element.content=document.createElement("div"),t.element.content.contentEditable=!0,t.element.content.className=t.classes.content,t.element.content.oninput=function(e){return t.onChange(e.target.innerHTML)},t.element.content.onkeydown=r,t.element.appendChild(t.element.content),t.actions.forEach(function(e){var n=document.createElement("button");n.className=t.classes.button,n.innerHTML=e.icon,n.title=e.title,n.onclick=e.result,l.appendChild(n)}),t.styleWithCSS&&o("styleWithCSS"),t.element},c={exec:o,init:l};t.exec=o,t.init=l,t.default=c,Object.defineProperty(t,"__esModule",{value:!0})});