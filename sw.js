if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let u={};const a=s=>i(s,n),o={module:{uri:n},exports:u,require:a};e[n]=Promise.all(l.map((s=>o[s]||a(s)))).then((s=>(r(...s),u)))}}define(["./workbox-c7240f55"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/AboutUsView.139f831d.js",revision:null},{url:"assets/Article.d54f9395.js",revision:null},{url:"assets/Article.e928db87.css",revision:null},{url:"assets/AutoFlipChessboardView.8753e244.js",revision:null},{url:"assets/BingoBoardView.876d6740.css",revision:null},{url:"assets/BingoBoardView.a3064b69.js",revision:null},{url:"assets/BingoMasterView.0b5f461a.js",revision:null},{url:"assets/BingoMasterView.e5f59fc3.css",revision:null},{url:"assets/BlogArticleListView.e9144953.js",revision:null},{url:"assets/CalculatingWeekdays.6ff85cbb.js",revision:null},{url:"assets/ChessVersusAI.8385a666.js",revision:null},{url:"assets/ChessVersusBadAIView.bef1802b.js",revision:null},{url:"assets/ChessVersusCaptureAIView.30f001dd.js",revision:null},{url:"assets/ChessVersusNoCaptureAIView.eda89904.js",revision:null},{url:"assets/ChessVersusRandomView.caca3f60.js",revision:null},{url:"assets/ChessVersusStockfish.46ea5396.js",revision:null},{url:"assets/ColorRemoverView.51f1d570.js",revision:null},{url:"assets/ConnectFourView.c3d6cf17.css",revision:null},{url:"assets/ConnectFourView.ed7d59ca.js",revision:null},{url:"assets/cookie.648245ab.js",revision:null},{url:"assets/DivisibilityRules.2825ef3b.js",revision:null},{url:"assets/Does0Equal1.aff3ef4b.js",revision:null},{url:"assets/EnglishIsWeirdView.360cc8ee.css",revision:null},{url:"assets/EnglishIsWeirdView.5782fc8a.js",revision:null},{url:"assets/FakeGradient2View.aeac0bbc.js",revision:null},{url:"assets/FakeGradientView.55976d42.js",revision:null},{url:"assets/Forcing1089.d6f12cca.js",revision:null},{url:"assets/FractalPresetsView.a2fb2347.js",revision:null},{url:"assets/FractalView.35c28750.js",revision:null},{url:"assets/FrameOverlayView.0e91aabc.css",revision:null},{url:"assets/FrameOverlayView.8080ade8.js",revision:null},{url:"assets/FullscreenCanvas.01bd8474.js",revision:null},{url:"assets/FullscreenDisplay.2736bd36.css",revision:null},{url:"assets/FullscreenDisplay.b45b99b5.js",revision:null},{url:"assets/GithubCopilotIsAmazingView.79c10e5a.js",revision:null},{url:"assets/IllegalVersusStockfish.b2d06d52.js",revision:null},{url:"assets/index.26979f72.css",revision:null},{url:"assets/index.e6e0fc39.js",revision:null},{url:"assets/InfinityIsMinusOneTwelfth.db7f8940.js",revision:null},{url:"assets/LegalMoveChessboard.5236be52.css",revision:null},{url:"assets/LegalMoveChessboard.8bf8d84f.js",revision:null},{url:"assets/MathemagicalTricks.b89f3a9e.js",revision:null},{url:"assets/MetaballView.115d1c59.js",revision:null},{url:"assets/MultDivQuizView.d30ab7c0.js",revision:null},{url:"assets/NotFoundView.3f0b4f74.js",revision:null},{url:"assets/OvercolorView.385634d0.js",revision:null},{url:"assets/Quiz.19fbb481.css",revision:null},{url:"assets/Quiz.f23271f2.js",revision:null},{url:"assets/RainbowNoiseView.f11a2a5b.js",revision:null},{url:"assets/SquareQuizView.b2541ec6.js",revision:null},{url:"assets/StandardChessboardView.dd7b8f70.js",revision:null},{url:"assets/stockfish.0823b611.js",revision:null},{url:"assets/storymatic.8c0c6395.js",revision:null},{url:"assets/storymatic.ef4fb9e9.css",revision:null},{url:"assets/StorymaticEditorView.b0c4e4f3.js",revision:null},{url:"assets/StorymaticEditorView.f6181850.css",revision:null},{url:"assets/StorymaticJavaScriptView.73f47e49.js",revision:null},{url:"assets/StorymaticJavaScriptView.93b04b4d.css",revision:null},{url:"assets/TicTacToeView.0aa9c0ab.js",revision:null},{url:"assets/TicTacToeView.3cb8349f.css",revision:null},{url:"assets/TropeHighlighterView.0b57f035.css",revision:null},{url:"assets/TropeHighlighterView.40391a53.js",revision:null},{url:"assets/VideoCallView.3e7a6383.css",revision:null},{url:"assets/VideoCallView.d70f8552.js",revision:null},{url:"assets/WebGL2Canvas.05c5fc30.css",revision:null},{url:"assets/WebGL2Canvas.48677ed3.js",revision:null},{url:"assets/WhatMakesZSnoutDifferentView.af46670a.js",revision:null},{url:"index.html",revision:"d6ca62846a71d73b4632f2ae33ce8636"},{url:"android-chrome-192x192.png",revision:"6667256445639929"},{url:"android-chrome-512x512.png",revision:"6667256445639929"},{url:"apple-touch-icon.png",revision:"6667256445639929"},{url:"browserconfig.xml",revision:"6667256445639929"},{url:"CNAME",revision:"6667256445639929"},{url:"favicon-16x16.png",revision:"6667256445639929"},{url:"favicon-32x32.png",revision:"6667256445639929"},{url:"favicon.ico",revision:"6667256445639929"},{url:"manifest.json",revision:"6667256445639929"},{url:"mstile-150x150.png",revision:"6667256445639929"},{url:"pwa-192x192.png",revision:"6667256445639929"},{url:"pwa-512x512.png",revision:"6667256445639929"},{url:"robots.txt",revision:"6667256445639929"},{url:"safari-pinned-tab.svg",revision:"6667256445639929"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("/index.html")))}));
