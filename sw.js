if(!self.define){let e,i={};const r=(r,o)=>(r=new URL(r+".js",o).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(o,c)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let s={};const n=e=>r(e,d),a={module:{uri:d},exports:s,require:n};i[d]=Promise.all(o.map((e=>a[e]||n(e)))).then((e=>(c(...e),s)))}}define(["./workbox-3ea082d2"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index.f070a087.css",revision:null},{url:"assets/index.f391d796.js",revision:null},{url:"built-games/baldis-basics/baldi.js",revision:"252cc114601d34c132b014746d4f6b7b"},{url:"built-games/baldis-basics/firebase-app.js",revision:"706e6e9de021a05ea2578e50795150f1"},{url:"built-games/baldis-basics/index.html",revision:"31dd74741ef83352e1042e6c9a1043d8"},{url:"built-games/baldis-basics/TemplateData/style.css",revision:"dd1395677c124d30fb88e2db25ed6c48"},{url:"built-games/baldis-basics/TemplateData/UnityProgress.js",revision:"167cabac2ccecfb25fd7453130f3bc0a"},{url:"built-games/chromedino/index.css",revision:"7241f1b659155ce5ccc706f2a63c5b92"},{url:"built-games/chromedino/index.html",revision:"984eb3d811c8289b9464de5943abc044"},{url:"built-games/chromedino/index.js",revision:"47341071a9030f2cc73a0ba887c428f8"},{url:"built-games/cookieclicker/ajax.js",revision:"7f6f1d98f10bb7b55901394016c28809"},{url:"built-games/cookieclicker/base64.js",revision:"182372f6e60cacfaba96a0c767c2e78a"},{url:"built-games/cookieclicker/DungeonGen.js",revision:"c497e694e12d64b9f660834dd709ca45"},{url:"built-games/cookieclicker/dungeons.js",revision:"aaa5b297ba4cfe78284ea690502ab8e6"},{url:"built-games/cookieclicker/excanvas.compiled.js",revision:"df0bc1e5969f5eb559cb0ee10dfb135e"},{url:"built-games/cookieclicker/img/index.html",revision:"4b30b1d7797f8547d1617bfb7c9d15c9"},{url:"built-games/cookieclicker/index.html",revision:"dc0739b5bcad621864355455f90117b8"},{url:"built-games/cookieclicker/main.js",revision:"221038fd51212bcde807f1a8a5ff6f15"},{url:"built-games/cookieclicker/minigameGarden.js",revision:"34b301ca54466e09488600a625d0a1b3"},{url:"built-games/cookieclicker/minigameGrimoire.js",revision:"5584286253e0061043d4cb2d539c1032"},{url:"built-games/cookieclicker/minigameMarket.js",revision:"3c84a92e64cbe88d25119bd7fe3f9507"},{url:"built-games/cookieclicker/minigamePantheon.js",revision:"830e21d0c68c0bed7ad7635b6cde36cc"},{url:"built-games/cookieclicker/snd/index.html",revision:"c9934e3613e02824ea6ecbb51f064160"},{url:"built-games/cookieclicker/style.css",revision:"947b48d922efb051f119a8243c039e4f"},{url:"built-games/CSGOClicker/css/stylesheet.css",revision:"25d9af371391751d1c17375b07f134d1"},{url:"built-games/CSGOClicker/index.html",revision:"d86c2904d608b54194fc841f8fa0ff10"},{url:"built-games/CSGOClicker/js/script.js",revision:"567b5514cd0da02a942c1cfe43580c10"},{url:"built-games/takumiraccoon/index.html",revision:"ae3fb24bed6b3cfe18c20beea5a8c056"},{url:"built-games/takumiraccoon/tanuki_sunset.js",revision:"9aaa154a5d249214f9873d91d4b58127"},{url:"built-games/takumiraccoon/TemplateData/style.css",revision:"dd1395677c124d30fb88e2db25ed6c48"},{url:"built-games/takumiraccoon/TemplateData/UnityProgress.js",revision:"167cabac2ccecfb25fd7453130f3bc0a"},{url:"index.html",revision:"006b0566681f6eefa696ef5663862be3"},{url:"IodineGBA/IodineGBA/core/Cartridge.js",revision:"5153203ab98e395a3c4610c451f881f9"},{url:"IodineGBA/IodineGBA/core/cartridge/EEPROM.js",revision:"4d38f68d1769627452a476e9688293bc"},{url:"IodineGBA/IodineGBA/core/cartridge/FLASH.js",revision:"532d4583b0ada74af983580702cd1183"},{url:"IodineGBA/IodineGBA/core/cartridge/SaveDeterminer.js",revision:"06a3e1e3a5f1b9401a08bcc896593bc2"},{url:"IodineGBA/IodineGBA/core/cartridge/SRAM.js",revision:"d06dcb722f611df44a3ed28d17c34c44"},{url:"IodineGBA/IodineGBA/core/CPU.js",revision:"3bbbd58acc34460a7c314c084068323b"},{url:"IodineGBA/IodineGBA/core/CPU/ARM.js",revision:"81469532cdbe999123f64454d464c1e2"},{url:"IodineGBA/IodineGBA/core/CPU/CPSR.js",revision:"bc730f926081aacf7e84685b4af9067f"},{url:"IodineGBA/IodineGBA/core/CPU/THUMB.js",revision:"ce284e58482c9a862289ede4d1f2d2b7"},{url:"IodineGBA/IodineGBA/core/DMA.js",revision:"881654a2eed5f0f8e096a143006db2ed"},{url:"IodineGBA/IodineGBA/core/Emulator.js",revision:"24665df802ec10a0c35e2d7c689b5451"},{url:"IodineGBA/IodineGBA/core/Graphics.js",revision:"ecf24bfd21b9492bd7831ddb93a8fd36"},{url:"IodineGBA/IodineGBA/core/graphics/AffineBG.js",revision:"8f3639d3a53771ecf90c6b1355d53172"},{url:"IodineGBA/IodineGBA/core/graphics/BG2FrameBuffer.js",revision:"88021093230640469b765aafbd66af31"},{url:"IodineGBA/IodineGBA/core/graphics/BGMatrix.js",revision:"14bf89dc84a342e99b0e19b0afc4ef92"},{url:"IodineGBA/IodineGBA/core/graphics/BGTEXT.js",revision:"e658fabc3922f530032ee9ceb95abc9e"},{url:"IodineGBA/IodineGBA/core/graphics/ColorEffects.js",revision:"322d79ec497945dea94a0605985bb2ad"},{url:"IodineGBA/IodineGBA/core/graphics/Compositor.js",revision:"5b624bb78759893f15c11a9d71604794"},{url:"IodineGBA/IodineGBA/core/graphics/Mosaic.js",revision:"c750944001057e8c82a77e483f3196d5"},{url:"IodineGBA/IodineGBA/core/graphics/OBJ.js",revision:"ce3a15d251f76f4cc777b1192be31b94"},{url:"IodineGBA/IodineGBA/core/graphics/OBJWindow.js",revision:"ea9099d09b0ca51bda2780f507b26d3b"},{url:"IodineGBA/IodineGBA/core/graphics/Renderer.js",revision:"8c172b0da4a3069fc909474d382871b6"},{url:"IodineGBA/IodineGBA/core/graphics/RendererProxy.js",revision:"9f4ac48d99589967c952b145319db9bc"},{url:"IodineGBA/IodineGBA/core/graphics/Window.js",revision:"0cd4f4ba00e90c8d934f75b3f171e4be"},{url:"IodineGBA/IodineGBA/core/IRQ.js",revision:"1c8274ace0199e1fdd32e8aee5fc092f"},{url:"IodineGBA/IodineGBA/core/JoyPad.js",revision:"b6a986e1294127ea7cec3324993c6972"},{url:"IodineGBA/IodineGBA/core/Memory.js",revision:"756efc23c174603c45589a2bc1482cba"},{url:"IodineGBA/IodineGBA/core/memory/DMA0.js",revision:"f325f087ee776f260704dd04296d72d9"},{url:"IodineGBA/IodineGBA/core/memory/DMA1.js",revision:"d02ec6067336b59140762fa6e83947c5"},{url:"IodineGBA/IodineGBA/core/memory/DMA2.js",revision:"299d08fb4d9aa8d74fc51c68b24c1beb"},{url:"IodineGBA/IodineGBA/core/memory/DMA3.js",revision:"3df0d7f7775888c1d5ba465f65686c5e"},{url:"IodineGBA/IodineGBA/core/RunLoop.js",revision:"be61aff1c7edf39a74ebfd280e1d65bb"},{url:"IodineGBA/IodineGBA/core/Saves.js",revision:"4e1516c6261cd2913b502e6325c7cdfe"},{url:"IodineGBA/IodineGBA/core/Serial.js",revision:"39844b63d572c5edcc25b1c5240f18b8"},{url:"IodineGBA/IodineGBA/core/Sound.js",revision:"c537fab1b1df215677a4de31992b69ca"},{url:"IodineGBA/IodineGBA/core/sound/Channel1.js",revision:"a3e39d2e3108bdcab95229825ada7543"},{url:"IodineGBA/IodineGBA/core/sound/Channel2.js",revision:"8076d26cb0663aeed71830d8aed86040"},{url:"IodineGBA/IodineGBA/core/sound/Channel3.js",revision:"c090fda6cb370e9a6695036840981f0c"},{url:"IodineGBA/IodineGBA/core/sound/Channel4.js",revision:"9149b57c49956a268212e918009a4ba1"},{url:"IodineGBA/IodineGBA/core/sound/FIFO.js",revision:"4c3e19defdeee80e28779b2a6ed8076d"},{url:"IodineGBA/IodineGBA/core/Timer.js",revision:"71a4a3d930f6c948207ce9ca51664323"},{url:"IodineGBA/IodineGBA/core/Wait.js",revision:"e6af6cebbdf29efdb093e5caee783a0f"},{url:"IodineGBA/IodineGBA/includes/TypedArrayShim.js",revision:"e1dc468e2b880ae6795957a1cfd414af"},{url:"IodineGBA/user_css/main.css",revision:"7a367675db59575f2c122865774870b9"},{url:"IodineGBA/user_scripts/base64.js",revision:"cb860270f8eefdcb41290f900dba0b5e"},{url:"IodineGBA/user_scripts/IodineGBAAudioGlueCode.js",revision:"69263bdeddc61dfd5773a371db979ec8"},{url:"IodineGBA/user_scripts/IodineGBACoreGlueCode.js",revision:"c11a8610d9b817797a14572757d31a05"},{url:"IodineGBA/user_scripts/IodineGBAGraphicsGlueCode.js",revision:"4f47ca34242cbc1b0027778191e72f22"},{url:"IodineGBA/user_scripts/IodineGBAJoyPadGlueCode.js",revision:"620ec6d384e3d7c4c41f7031f6b5a4ce"},{url:"IodineGBA/user_scripts/IodineGBAROMLoadGlueCode.js",revision:"7524ba4a40f38b53535a2b928ece5213"},{url:"IodineGBA/user_scripts/IodineGBASavesGlueCode.js",revision:"2bba7e21f1fc964d91072662e08d55d2"},{url:"IodineGBA/user_scripts/XAudioJS/resampler.js",revision:"0311d2e1cebe10edb3ef1c545a42157c"},{url:"IodineGBA/user_scripts/XAudioJS/swfobject.js",revision:"892a543f3abb54e8ec1ada55be3b0649"},{url:"IodineGBA/user_scripts/XAudioJS/XAudioServer.js",revision:"e48af44a89375e53acd50b05b6087484"},{url:"IodineGBA/user_scripts/XAudioJS/XAudioServerMediaStreamWorker.js",revision:"f86d516d16ea94f8ff89249a9d6bc160"},{url:"icon.png",revision:"5a69678214e7d9b1302d1a65d18aa516"},{url:"icon-maskable.png",revision:"93dabbacb48dc51bbf7b607102ae381f"},{url:"manifest.webmanifest",revision:"02f61069f30c4b43cafa7caf38b676bc"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
