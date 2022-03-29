var N=Object.defineProperty;var _=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var j=(t,l,e)=>l in t?N(t,l,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[l]=e,v=(t,l)=>{for(var e in l||(l={}))B.call(l,e)&&j(t,e,l[e]);if(_)for(var e of _(l))T.call(l,e)&&j(t,e,l[e]);return t};import{_ as C,r as D,D as E}from"./index.b946931f.js";import{_ as G,A as O}from"./TextConsole.vue_vue_type_style_index_0_scoped_true_lang.585fb4ca.js";import{d as U,f as w,K as z,i as F,s as R,o as K,c as L,w as M,g as P,j as S,u as V,y as A}from"./vendor.5ba71872.js";function Q(t){let l=0,e=!1,a=[],s="",n=!1;for(let r of t.split(`
`)){for(let c of r){if(n){if(c==" ")continue;n=!1}if(c=="|"&&(l+=e?1:-1),c=='"'&&(l+=e?-1:1),(c=="|"||c=='"')&&(e=!e),e||((c=="("||c=="["||c=="{")&&l++,(c==")"||c=="]"||c=="}")&&l--),l<0&&(l=0,c=""),l==0&&c==";"){let o=s.match(/^\s*/)[0];a.push(s),s=o,a[a.length-1].match(/^\s*[A-Za-z]/)&&(s+=" "),c="",n=!0}s+=c}l==0&&(a.push(s),s="")}return s&&a.push(s),a.join(`
`)}function W(t){return Q(t).split(`
`).filter(l=>l.trim()).map(l=>{l=l.replace(/\s+$/,"");let e=l.replace(/^\s+/,"");return[l.length-e.length,e]})}function Z(t){let l=0,e=[],a=[];for(let[s,n]of W(t))s!=l?(e.length&&a.push([l,e]),l=s,e=[n]):e.push(n);return e.length&&a.push([l,e]),a}function H(t){var a,s,n,r,c;let l=0,e=[];for(let[o,h]of Z(t)){if((a=e[o])!=null||(e[o]=[]),o>=l)e[o].push(...h);else if(o<l){for(let p=e.length-1;p>o;p--)!e[p]||((n=e[s=p-1])!=null||(e[s]=[]),typeof e[p]=="object"&&e[p].every(i=>typeof i=="object")?e[p-1].push(...e[p]):e[p-1].push(e[p]),e.length=p);e[o].push(...h)}l=o}for(let o=e.length-1;o>0;o--)!e[o]||((c=e[r=o-1])!=null||(e[r]=[]),typeof e[o]=="object"&&e[o].every(h=>typeof h=="object")?e[o-1].push(...e[o]):e[o-1].push(e[o]),e.length=o);return e[0]||[]}function J(t){let l=g(t),e=[],a=!0;for(let c of l){if(typeof c!="object")break;if(c.type=="variable"&&a||c.type=="bracket"||c.type=="propertyaccess")e.push(c);else break;a=!1}if(e.length==l.length)return{name:e,mode:"=",value:[]};let s="=",n=l[e.length];if((n=="+"||n=="-"||n=="*"||n=="/"||n=="%")&&(s=`${n}=`),l[e.length+ +(s!="=")]!="===")return null;let r=l.slice(e.length+ +(s!="=")+1);return{mode:s,value:r,name:e}}function $(t){let l=[];for(let e=0;e<t.length;e++){let a=t[e];if(typeof a=="object"){l.push(...$(a));continue}let s;if(!a.startsWith("#"))if(s=a.match(/^@([\w_][\w\d_]*)\s*(.*)$/)){let n=null,r=s[2]?g(s[2]):[],c=r[0];if(typeof c=="object"&&c.type=="paren"){let o=null;r.slice(1).length&&(o=[{type:"print",content:r.slice(1)}]),l.push({type:"command",name:s[1],args:k(c.items),block:o});continue}typeof t[e+1]=="object"&&(n=$(t[e+1]),e++),l.push({type:"command",name:s[1],args:k(r),block:n})}else if(s=a.match(/^repeat$/)){let n=[];typeof t[e+1]=="object"&&(n=$(t[e+1]),e++),l.push({type:"while",cond:[{type:"boolean",value:!0}],block:n})}else if(s=a.match(/^(if|elif|else if|unless|while|until|repeat)\b\s*(.+)$/)){let n=[];typeof t[e+1]=="object"&&(n=$(t[e+1]),e++),s[1]=="else if"&&(s[1]="elif"),l.push({type:s[1],cond:g(s[2]),block:n})}else if(s=a.match(/^each\s+\$([\w_][\w\d_]*)\s+(?:in|of)\s+(.*)$/)){let n=[];typeof t[e+1]=="object"&&(n=$(t[e+1]),e++),l.push({type:"each",name:s[1],value:g(s[2]),block:n})}else if(s=a.match(/^else$/)){let n=[];typeof t[e+1]=="object"&&(n=$(t[e+1]),e++),l.push({type:"else",block:n})}else if(s=a.match(/^(break|continue)$/))l.push({type:s[1]});else if(s=a.match(/^let\s*\b(.+)/)){let n=J(s[1]);if(!n||!n.name.length)continue;n.value.length||(n.value=[{type:"null"}]),l.push(v({type:"let"},n))}else if(s=a.match(/^(?:func|function|def)\s+@([\w_][\w\d_]*)(?:\s+(.+))?/)){let n,r=t[e+1];if(typeof r=="object")n=$(r),e++;else continue;l.push({type:"define",name:s[1],args:g(s[2]||""),block:n})}else if(s=a.match(/^(return)(?:\s+(.+))?/)){let n=[{type:"null"}];s[2]&&(n=g(s[2])),l.push({type:s[1],value:n})}else{let n=J(a),r=g(a);n&&n.name.length&&n.value.length?l.push(v({type:"variable"},n)):l.push({type:"print",content:r})}}return l}function k(t){if(!t.length)return[];let l=[],e=[l];for(let a of t)a==","?(l=[],e.push(l)):l.push(a);return e}function g(t,l=!1){let e=[],a=!1,s=["<=",">=","&&","||"],n=["+","-","*","/","%",">","<","(",")","[","]",",","!","{","}"];for(;t=a?t:t.trim();){let i;if(a)if(t[0]=='"'){let f=a.reduce((m,b)=>(typeof b=="string"&&typeof m[m.length-1]=="string"?m[m.length-1]+=b:m.push(b),m),[]);e.push({type:"string",content:f}),t=t.slice(1),a=!1}else if(t[0]=="\\")a.push(t[1]),t=t.slice(2);else if(i=t.match(/^\$(\w+)\b(.*)$/))a.push({type:"variable",name:i[1]}),t=i[2];else if(t[0]=="|"){let[f,m]=g(t.slice(1),!0);a.push({type:"embedded",expr:f}),t=m}else a.push(t[0]),t=t.slice(1);else if(i=t.match(/^\.\s*\$?(\w+)\b(.*)$/))e.push({type:"propertyaccess",name:i[1]}),t=i[2];else if(i=t.match(/^\$?(\w+)\s*:(.*)$/))e.push({type:"objectproperty",name:i[1]}),t=i[2];else if(i=t.match(/^\$(\w+)\b(.*)$/))e.push({type:"variable",name:i[1]}),t=i[2];else if(i=t.match(/^@(\w+)\b(.*)$/))e.push({type:"command",name:i[1],arg:[]}),t=i[2];else if(t[0]=="="||t.slice(0,2)=="==")e.push("==="),t=t.slice(1);else if(t[0]=="!=")e.push("!=="),t=t.slice(1);else if(s.includes(t.slice(0,2)))e.push(t.slice(0,2)),t=t.slice(2);else if(n.includes(t[0]))e.push(t[0]),t=t.slice(1);else if(i=t.match(/^(is not|isnt|is|not|and|or)\b(.*)$/)){switch(i[1]){case"is not":case"isnt":e.push("!==");break;case"is":e.push("===");break;case"not":e.push("!");break;case"and":e.push("&&");break;case"or":e.push("||");break}t=i[2]}else if(i=t.match(/^(\d+(?:\.\d+)?)\b(.*)$/)){let f=parseFloat(i[1]);Number.isNaN(f)||e.push({type:"number",value:f}),t=i[2]}else if(i=t.match(/^(true|false|yes|no|on|off|y|n)\b(.*)$/)){let f=i[1]=="true"||i[1]=="yes"||i[1]=="on"||i[1]=="y";e.push({type:"boolean",value:f}),t=i[2]}else if(i=t.match(/^(null)\b(.*)$/))e.push({type:"null"}),t=i[2];else{if(t[0]=="|"&&l)return[e,t.slice(1)];t[0]=='"'&&(a=[]),t=t.slice(1)}}let r={type:"paren",items:[]},c=[r],o={"(":"paren","[":"bracket","{":"brace"};for(let i of e)if(i=="("||i=="["||i=="{")r={type:o[i],items:[]},c.push(r);else if(i==")"||i=="]"||i=="}"){let f=c.pop();if(!f)return[];r=c[c.length-1],r.items.push(f)}else r.items.push(i);let h=c[0];if(!h)return[];if(!h.items.length)return[];function p(i){for(let f=0;f<i.length;f++){let m=i[f];if(typeof m=="object"){if("items"in m){p(m.items);continue}if(m.type=="command"){let b=i[f+1];if(typeof b=="object"&&b.type=="paren")p(b.items),m.arg=k(b.items),f++,i.splice(f,1);else{m.arg=k(i.splice(f+1));break}}}}}return p(h.items),h.items}function X(t){return $(H(t))}function d(t){return t.split(`
`).map(l=>"  "+l).join(`
`)}function Y(t){let l=" `";for(let e of t)typeof e=="string"?l+=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`").replace(/\$/g,"\\$").replace(/{/g,"\\{"):e.type=="variable"?l+=`\${ $${e.name} }`:e.type=="embedded"&&(l+=`\${ ${u(e.expr)} }`);return l+"` "}function u(t){let l="";for(let e of t)typeof e=="string"?l+=` ${e} `:e.type=="paren"?l+=` ( ${u(e.items)} ) `:e.type=="bracket"?l+=` [ ${u(e.items)} ] `:e.type=="brace"?l+=` { ${u(e.items)} } `:e.type=="number"?l+=` ${e.value} `:e.type=="boolean"?l+=` ${e.value} `:e.type=="null"?l+=" null ":e.type=="variable"?l+=` $${e.name} `:e.type=="propertyaccess"?l+=` .$${e.name} `:e.type=="objectproperty"?l+=` $${e.name}: `:e.type=="command"?l+=` ( await $${e.name}( [ ${e.arg.map(u).join(" , ")} ] ) ) `:e.type=="string"&&(l+=Y(e.content));return l.replace(/\s+/g," ").trim()}function y(t){let l="";for(let e of t)switch(e.type){case"print":l+=`_print( ${u(e.content)} );
`;break;case"variable":l+=`${u(e.name)} ${e.mode} ${u(e.value)};
`;break;case"continue":case"break":l+=e.type+`;
`;break;case"let":l+=`let ${u(e.name)} = ${u(e.value)};
`;break;case"define":l+=`async function $${e.name}( [ ${u(e.args)} ] = [] ) {
${d(y(e.block))}
}

`;break;case"command":e.block?l+=`await $${e.name}( [ ${e.args.map(u).join(" , ")} ], async function () {
${d(y(e.block))}
} );
`:l+=`await $${e.name}( [ ${e.args.map(u).join(" , ")} ] );
`;break;case"if":case"while":l+=`${e.type} ( ${u(e.cond)} ) {
${d(y(e.block))}
}
`;break;case"repeat":l+=`for ( let _loop of Array( + ( ${u(e.cond)} ) ) ) {
${d(y(e.block))}
}
`;break;case"unless":case"until":l+=`${e.type=="unless"?"if":"while"} ( ! ( ${u(e.cond)} ) ) {
${d(y(e.block))}
}
`;break;case"elif":l+=`else if ( ${u(e.cond)} ) {
${d(y(e.block))}
}
`;break;case"else":l+=`else {
${d(y(e.block))}
}
`;break;case"return":l+=`return ${u(e.value)};
`;break;case"each":l+=`for (let $${e.name} of ${u(e.value)}) {
${d(y(e.block))}
}
`;break}return l.split(`
`).map(e=>e.replace(/([^ ]) +/gm,"$1 ")).join(`
`).trim()}function I(t){return`// Generated by zSnout Storymatic 

`+y(X(t))}const q={class:"container"},x=U({setup(t){function l(r){try{return btoa(r.replace(/[^\x00-\xff]+/g,"")).replace(/\+/g,"_").replace(/\//g,"-").replace(/=/g,"$")}catch{return""}}function e(r){try{return atob(r.replace(/_/g,"+").replace(/-/g,"/").replace(/\$/g,"="))}catch{return""}}let a=w(e(""+(z().params.code||""))),s=w(I(a.value));F(a,r=>{s.value=I(r)});let n=setInterval(()=>{D.replace(`/storymatic-to-javascript/${l(a.value)}`)},5e3);return R(()=>clearInterval(n)),(r,c)=>(K(),L(E,{"explicit-height":""},{default:M(()=>[P("div",q,[S(G,{modelValue:V(a),"onUpdate:modelValue":c[0]||(c[0]=o=>A(a)?a.value=o:a=o),class:"story"},null,8,["modelValue"]),S(O,{modelValue:V(s),"onUpdate:modelValue":c[1]||(c[1]=o=>A(s)?s.value=o:s=o),class:"javascript",options:{mode:"ace/mode/javascript"}},null,8,["modelValue"])])]),_:1}))}});var ae=C(x,[["__scopeId","data-v-3b72c3a6"]]);export{ae as default};
