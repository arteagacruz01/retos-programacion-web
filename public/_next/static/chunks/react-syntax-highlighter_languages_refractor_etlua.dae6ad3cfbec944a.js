"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8126,8119,3047],{66055:function(e,a,n){var t=n(59803),l=n(93205);function etlua(e){e.register(t),e.register(l),e.languages.etlua={delimiter:{pattern:/^<%[-=]?|-?%>$/,alias:"punctuation"},"language-lua":{pattern:/[\s\S]+/,inside:e.languages.lua}},e.hooks.add("before-tokenize",function(a){e.languages["markup-templating"].buildPlaceholders(a,"etlua",/<%[\s\S]+?%>/g)}),e.hooks.add("after-tokenize",function(a){e.languages["markup-templating"].tokenizePlaceholders(a,"etlua")})}e.exports=etlua,etlua.displayName="etlua",etlua.aliases=[]},59803:function(e){function lua(e){e.languages.lua={comment:/^#!.+|--(?:\[(=*)\[[\s\S]*?\]\1\]|.*)/m,string:{pattern:/(["'])(?:(?!\1)[^\\\r\n]|\\z(?:\r\n|\s)|\\(?:\r\n|[^z]))*\1|\[(=*)\[[\s\S]*?\]\2\]/,greedy:!0},number:/\b0x[a-f\d]+(?:\.[a-f\d]*)?(?:p[+-]?\d+)?\b|\b\d+(?:\.\B|(?:\.\d*)?(?:e[+-]?\d+)?\b)|\B\.\d+(?:e[+-]?\d+)?\b/i,keyword:/\b(?:and|break|do|else|elseif|end|false|for|function|goto|if|in|local|nil|not|or|repeat|return|then|true|until|while)\b/,function:/(?!\d)\w+(?=\s*(?:[({]))/,operator:[/[-+*%^&|#]|\/\/?|<[<=]?|>[>=]?|[=~]=?/,{pattern:/(^|[^.])\.\.(?!\.)/,lookbehind:!0}],punctuation:/[\[\](){},;]|\.+|:+/}}e.exports=lua,lua.displayName="lua",lua.aliases=[]},93205:function(e){function markupTemplating(e){!function(e){function getPlaceholder(e,a){return"___"+e.toUpperCase()+a+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(a,n,t,l){if(a.language===n){var o=a.tokenStack=[];a.code=a.code.replace(t,function(e){if("function"==typeof l&&!l(e))return e;for(var t,r=o.length;-1!==a.code.indexOf(t=getPlaceholder(n,r));)++r;return o[r]=e,t}),a.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(a,n){if(a.language===n&&a.tokenStack){a.grammar=e.languages[n];var t=0,l=Object.keys(a.tokenStack);walkTokens(a.tokens)}function walkTokens(o){for(var r=0;r<o.length&&!(t>=l.length);r++){var u=o[r];if("string"==typeof u||u.content&&"string"==typeof u.content){var i=l[t],s=a.tokenStack[i],g="string"==typeof u?u:u.content,p=getPlaceholder(n,i),c=g.indexOf(p);if(c>-1){++t;var k=g.substring(0,c),f=new e.Token(n,e.tokenize(s,a.grammar),"language-"+n,s),d=g.substring(c+p.length),m=[];k&&m.push.apply(m,walkTokens([k])),m.push(f),d&&m.push.apply(m,walkTokens([d])),"string"==typeof u?o.splice.apply(o,[r,1].concat(m)):u.content=m}}else u.content&&walkTokens(u.content)}return o}}}})}(e)}e.exports=markupTemplating,markupTemplating.displayName="markupTemplating",markupTemplating.aliases=[]}}]);