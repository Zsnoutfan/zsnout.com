import{o as r,c as x,w as a,r as B,I as M,d as V,f as d,i as _,g as f,t as v,u as m,a as h,y as b,F as y,e as N}from"./vendor.8108f6cd.js";import{_ as g,D as C,N as p}from"./index.79d2d8ae.js";const D={};function L(u,c){return r(),x(M,{name:"list"},{default:a(()=>[B(u.$slots,"default")]),_:3})}var A=g(D,[["render",L]]);const I=N("Previous Number"),F=N("Next Number"),G={class:"large"},P={class:"old"},S=V({setup(u){function c(s){for(let t=s.length-1;t>0;t--){let n=Math.floor(Math.random()*(t+1));[s[t],s[n]]=[s[n],s[t]]}return s}function k(){if(e++,e<=75&&i.value.unshift(o.value),e>=75)return e=75;o.value=l[e]}function w(){e--,e<0&&(e=0),e>=0&&i.value.shift(),o.value=l[e]}let l=c(Array.from({length:75},(s,t)=>"BINGO"[Math.floor(t/15)]+(t+1))),o=d(l[0]),i=d([]),e=0;return(s,t)=>(r(),x(C,{"explicit-height":"","flex-row":"",flexbox:""},{nav:a(()=>[_(p,{onClick:w},{default:a(()=>[I]),_:1}),_(p,{onClick:k},{default:a(()=>[F]),_:1})]),default:a(()=>[f("div",G,v(m(o)),1),f("div",P,[_(A,null,{default:a(()=>[(r(!0),h(y,null,b(m(i),n=>(r(),h("div",{key:n,class:"num"},v(n),1))),128))]),_:1})])]),_:1}))}});var j=g(S,[["__scopeId","data-v-8ebd1842"]]);export{j as default};
