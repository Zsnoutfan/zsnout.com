import{_ as f}from"./LegalMoveChessboard.49d782a6.js";import{r as a,N as l}from"./index.494a8b17.js";import{d as _,L as d,o as m,c as g,w as r,u as h,j as k,e as x}from"./vendor.f1f2a3c5.js";const N=x("Flip Board"),b=_({setup(v){let o,s=c(""+d().params.position);function n(e){return e.replace(/[\/]/g,"_").replace(/\s+/g,":")}function c(e){return e.replace(/_/g,"/").replace(/:/g," ")}function i(e,t){o=()=>e.toggleOrientation(),a.replace(`/chess/board/${n(t.fen())}`)}function p(e,t){a.replace(`/chess/board/${n(t.fen())}`)}function u(){o==null||o()}return(e,t)=>(m(),g(f,{position:h(s),onMove:p,onReady:i},{nav:r(()=>[k(l,{onClick:u},{default:r(()=>[N]),_:1})]),_:1},8,["position"]))}});export{b as default};
