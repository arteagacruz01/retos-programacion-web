"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4657],{96412:function(n){function jsx(n){!function(n){var e=n.util.clone(n.languages.javascript),t=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,a=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,s=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function re(n,e){return RegExp(n=n.replace(/<S>/g,function(){return t}).replace(/<BRACES>/g,function(){return a}).replace(/<SPREAD>/g,function(){return s}),e)}s=re(s).source,n.languages.jsx=n.languages.extend("markup",e),n.languages.jsx.tag.pattern=re(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),n.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,n.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,n.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,n.languages.jsx.tag.inside.comment=e.comment,n.languages.insertBefore("inside","attr-name",{spread:{pattern:re(/<SPREAD>/.source),inside:n.languages.jsx}},n.languages.jsx.tag),n.languages.insertBefore("inside","special-attr",{script:{pattern:re(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:n.languages.jsx}}},n.languages.jsx.tag);var stringifyToken=function(n){return n?"string"==typeof n?n:"string"==typeof n.content?n.content:n.content.map(stringifyToken).join(""):""},walkTokens=function(e){for(var t=[],a=0;a<e.length;a++){var s=e[a],g=!1;if("string"!=typeof s&&("tag"===s.type&&s.content[0]&&"tag"===s.content[0].type?"</"===s.content[0].content[0].content?t.length>0&&t[t.length-1].tagName===stringifyToken(s.content[0].content[1])&&t.pop():"/>"===s.content[s.content.length-1].content||t.push({tagName:stringifyToken(s.content[0].content[1]),openedBraces:0}):t.length>0&&"punctuation"===s.type&&"{"===s.content?t[t.length-1].openedBraces++:t.length>0&&t[t.length-1].openedBraces>0&&"punctuation"===s.type&&"}"===s.content?t[t.length-1].openedBraces--:g=!0),(g||"string"==typeof s)&&t.length>0&&0===t[t.length-1].openedBraces){var o=stringifyToken(s);a<e.length-1&&("string"==typeof e[a+1]||"plain-text"===e[a+1].type)&&(o+=stringifyToken(e[a+1]),e.splice(a+1,1)),a>0&&("string"==typeof e[a-1]||"plain-text"===e[a-1].type)&&(o=stringifyToken(e[a-1])+o,e.splice(a-1,1),a--),e[a]=new n.Token("plain-text",o,null,o)}s.content&&"string"!=typeof s.content&&walkTokens(s.content)}};n.hooks.add("after-tokenize",function(n){("jsx"===n.language||"tsx"===n.language)&&walkTokens(n.tokens)})}(n)}n.exports=jsx,jsx.displayName="jsx",jsx.aliases=[]}}]);