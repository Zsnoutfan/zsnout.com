import{_ as $}from"./FullscreenCanvas.ae1777c5.js";import{d as w,q as I,s as R,o as b,c as x,w as u,r as T,K as B,j as h,e as v}from"./vendor.c311a53b.js";import{N as p,r as _}from"./index.817c44c4.js";let c=document.createElement("canvas"),k=c.getContext("2d");function N(i){return new Promise(l=>{let t=document.createElement("video");t.onloadedmetadata=()=>l(t),t.srcObject=i,t.play()})}function y(i,l,t){return c.width=l||i.videoWidth,c.height=t||i.videoHeight,k.drawImage(i,0,0,c.width,c.height),k.getImageData(0,0,c.width,c.height)}const D=w({props:{transform:null,breakpoint:null},setup(i){const{transform:l}=i;let t=new Promise(n=>{I(()=>{n(navigator.mediaDevices.getUserMedia({video:!0}))})}).catch(()=>{}),r;async function a(n){let s=n.getContext("2d");if(!s)return;let d=await t;if(!d)return;let m=await N(d);r=setInterval(()=>{let f=y(m,n.width,n.height);s.putImageData(l(f),0,0)},1e3/30)}return R(()=>clearInterval(r)),(n,s)=>(b(),x($,{breakpoint:i.breakpoint,onReady:a},{nav:u(()=>[T(n.$slots,"nav")]),_:3},8,["breakpoint"]))}}),M=v("Toggle Red"),V=v("Toggle Green"),j=v("Toggle Blue"),U=w({setup(i){let l=""+(B().params.colors||""),t=l.includes("r"),r=l.includes("g"),a=l.includes("b"),n=t&&r&&a;function s(){return`/color-remover/${t?"r":""}${r?"g":""}${a?"b":""}`}function d(o){if(t)for(let e=0;e<o.data.length;e+=4)o.data[e]=0;if(r)for(let e=1;e<o.data.length;e+=4)o.data[e]=0;if(a)for(let e=2;e<o.data.length;e+=4)o.data[e]=0;if(n)for(let e=0;e<o.data.length;e+=4){let g=360*Math.random();o.data[e]=g,o.data[e+1]=g,o.data[e+2]=g}return o}function m(){t=!t,n=t&&r&&a,_.push(s())}function f(){r=!r,n=t&&r&&a,_.push(s())}function C(){a=!a,n=t&&r&&a,_.push(s())}return(o,e)=>(b(),x(D,{breakpoint:600,transform:d},{nav:u(()=>[h(p,{onClick:m},{default:u(()=>[M]),_:1}),h(p,{onClick:f},{default:u(()=>[V]),_:1}),h(p,{onClick:C},{default:u(()=>[j]),_:1})]),_:1}))}});export{U as default};
