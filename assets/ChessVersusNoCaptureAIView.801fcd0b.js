import{_ as a}from"./ChessVersusAI.b6730077.js";import{d as c,o as p,c as m}from"./vendor.8108f6cd.js";import"./LegalMoveChessboard.a2b116b1.js";import"./index.79d2d8ae.js";const v=c({setup(i){let o=["k","q","r","b","n","p",void 0];function t(r){let e=r.moves({verbose:!0});return e.sort(()=>Math.random()<.5?-1:1).sort(({captured:n},{captured:s})=>o.indexOf(s)-o.indexOf(n)),e[0]}return(r,e)=>(p(),m(a,{move:t}))}});export{v as default};
