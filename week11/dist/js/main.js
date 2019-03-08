/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module './css/rwd.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\r\n//import abc from './class.js'\r\n\r\nwindow.onload = function () {\r\n    const [screenW, screenH] = [1024, 768];\r\n\r\n    //Aliases 設定別名\r\n    let Application = PIXI.Application,\r\n        loader = PIXI.loader\r\n\r\n    // Create a Pixi Application \r\n    let app = new Application({\r\n        width: screenW,         // default: 1024\r\n        height: screenH,        // default: 768\r\n        antialias: true,    // default: false\r\n        transparent: false, // default: false\r\n        resolution: 1,       // default: 1\r\n        backgroundColor: 0xf0f0f0\r\n    });\r\n\r\n    // Add the canvas that Pixi automatically created for you to the HTML document \r\n    document.body.appendChild(app.view);\r\n\r\n    // load an image and run the `loadImage` function when it's done\r\n    loader\r\n        .add('dragon', 'images/spineboy-pro.json')\r\n        //.add('dragon', 'images/spineboy.json')\r\n        .on(\"progress\", loadProgressHandler)\r\n        .load(initial);\r\n\r\n    var symbolSpine = null;\r\n\r\n    function loadProgressHandler(loader, resource) {\r\n        //顯示進度-------------------------------------------------------------------------\r\n        let resourceName = resource.url;\r\n        console.log(resourceName);\r\n        let loadPercent = loader.progress;\r\n        console.log(loadPercent);\r\n    }\r\n\r\n    function initial(loader, res) {\r\n        // instantiate the spine animation\r\n        symbolSpine = new PIXI.spine.Spine(res.dragon.spineData);\r\n\r\n        //symbolSpine.autoUpdate = false;\r\n        symbolSpine.scale.set(0.4);\r\n        symbolSpine.position.set(app.screen.width / 2, app.screen.height / 2 + 200);\r\n\r\n        symbolSpine.skeleton.setToSetupPose();\r\n\r\n        app.stage.interactive = true;\r\n        app.stage.addChild(symbolSpine);\r\n\r\n        // set up the mixes!\r\n        //symbolSpine.stateData.setMix('walk', 'jump', 0.2);\r\n        //symbolSpine.stateData.setMix('jump', 'walk', 0.4);\r\n        /*symbolSpine.stateData.setMix('run', 'run-to-idle', 0.2); //設定動作混接的時間\r\n        symbolSpine.stateData.setMix('run-to-idle', 'run', 0.4); //設定動作混接的時間\r\n        // play animation\r\n        symbolSpine.state.setAnimation(0, 'run', true);*/\r\n\r\n\r\n        app.stage.on('pointerdown', function () {\r\n\r\n            let entry6 = symbolSpine.state.setEmptyAnimation(1, 0);\r\n            entry6.mixDuration = 0.666666;\r\n            console.log('TCL: initial -> entry6', entry6)\r\n\r\n            let entry7 = symbolSpine.state.addAnimation(1, 'aim', false);\r\n\r\n            console.log('TCL: initial -> entry7', entry7)\r\n            entry7.mixDuration = 0.333333;\r\n\r\n            //entry6.alpha=0.5;\r\n\r\n            symbolSpine.state.setEmptyAnimation(2, 0);\r\n\r\n            symbolSpine.state.addAnimation(2, 'shoot', false, 0);\r\n\r\n            symbolSpine.state.addEmptyAnimation(2, 0, 0);\r\n\r\n            //console.log('TCL: initial -> entry6', entry6)\r\n            console.log('TCL: initial -> entry.animation', entry.animation)\r\n            //entry.timeScale = 2;\r\n\r\n            //let entry2 = symbolSpine.state.addAnimation(0, 'jump', false, 0);\r\n\r\n            //symbolSpine.state.setEmptyAnimation(0, 1.5);\r\n\r\n            //let entry5 = symbolSpine.state.addEmptyAnimation(1, 0, 0);\r\n            //console.log(entry.animation);\r\n            //entry.alpha=0.1;\r\n            //entry.mixDuration = 0.1;\r\n            //symbolSpine.state.addAnimation(0, 'walk', true, 0);\r\n            //symbolSpine.state.setAnimation(0, 'run-to-idle', false);\r\n            //let entry4 = symbolSpine.state.addAnimation(0, 'run', true, 0);\r\n            //console.log('TCL: initial -> entry4', entry4)\r\n            //entry4.mixDuration=2;\r\n        });\r\n\r\n        //symbolSpine.tint = 0xffdddd\r\n\r\n        symbolSpine.stateData.setMix('run', 'run-to-idle', 0.2); //設定動作混接的時間\r\n        symbolSpine.stateData.setMix('run-to-idle', 'run', 0.1); //設定動作混接的時間\r\n        symbolSpine.stateData.setMix('run', 'jump', 0.2); //設定動作混接的時間\r\n        symbolSpine.stateData.setMix('jump', 'run', 0.4); //設定動作混接的時間\r\n\r\n        symbolSpine.state.addListener({\r\n            start: function (track) {\r\n                console.log(track.trackIndex + ' ' + track.animation.name + \" Start\")\r\n            },\r\n            complete: function (track) {\r\n                console.log(track.trackIndex + ' ' + track.animation.name + \" complete\")\r\n            },\r\n            interrupt: function (track) {\r\n                console.log(track.trackIndex + ' ' + track.animation.name + \" interrupt\")\r\n            },\r\n            end: function (track) {\r\n                console.log(track.trackIndex + ' ' + track.animation.name + \" end\")\r\n            },\r\n            event: function (track, event) {\r\n                console.log(track.trackIndex + ' ' + event.data.name + \" event\")\r\n                console.log('TCL: initial -> event', event)\r\n\r\n            }\r\n        });\r\n\r\n        /*symbolSpine.state.addListener({\r\n            start: function (track) { console.log(track.trackIndex + \" Start\") },\r\n            complete: function (track) { console.log(track.trackIndex + \" complete\") },\r\n            interrupt: function (track) { console.log(track.trackIndex + \" interrupt\") },\r\n            end: function (track) { console.log(track.trackIndex + \" end\") },\r\n            event: function (track, event) { console.log(event.data.name + \" event\") }\r\n        });*/\r\n\r\n\r\n        /*symbolSpine.state.queue.complete = (track) => {\r\n\r\n            console.log(track+ \"COMPLETE COMPLETE COMPLETE COMPLETE COMPLETE COMPLETE \")\r\n            //console.log(symbolSpine.state.getCurrent(1).getAnimationTime());\r\n            if (symbolSpine.state.tracks[0] === null) return;\r\n            console.log(symbolSpine.state.tracks[0].getAnimationTime());\r\n        }\r\n        symbolSpine.state.queue.interrupt = () => {\r\n            console.log(\"Interrupt Interrupt Interrupt Interrupt Interrupt\")\r\n        }\r\n        symbolSpine.state.queue.end = () => {\r\n            console.log(\"END END END END END END END END END END END END END\")\r\n        }\r\n        // symbolSpine.state.queue.start = () => {\r\n        //     console.log(\"Start Start Start Start Start Start Start Start Start\")\r\n        // }\r\n        symbolSpine.state.queue.dispose = () => {\r\n            console.log(\"Dispose Dispose Dispose Dispose Dispose Dispose Dispose\")\r\n        }*/\r\n\r\n        // 設置空洞化可以緩慢起跑\r\n        symbolSpine.state.setEmptyAnimation(0, 1.5);\r\n\r\n        let entry = symbolSpine.state.addAnimation(0, 'run', true, 0);\r\n        console.log(entry.animation.name);\r\n        entry.alpha = 0.5;\r\n        entry.timeScale = 2;\r\n        entry.mixDuration = 1.5;\r\n        console.log(entry.trackIndex);\r\n\r\n\r\n        console.log('TCL: initial -> entry', entry)\r\n\r\n        /*console.log(entry);\r\n        console.log(symbolSpine.state);*/\r\n\r\n        //symbolSpine.state.addAnimation(0, 'run-to-idle', true, 0);\r\n\r\n\r\n        //symbolSpine.autoUpdate = false;\r\n\r\n        //symbolSpine.state.setAnimation(1, 'aim', true);\r\n\r\n        //symbolSpine.state.setAnimation(0, 'shoot', true);\r\n        //symbolSpine.update(0.8);\r\n\r\n        //console.log(symbolSpine.state.getCurrent(1).getAnimationTime());\r\n        //console.log(symbolSpine.state.tracks[0].getAnimationTime());\r\n        console.log(\"--------------------------------------------------\")\r\n\r\n        //dragon.skeleton.setSkinByName('goblin');    //設定整個骨架的皮膚\r\n\r\n\r\n        let a = 0;\r\n        app.ticker.add(function () {\r\n            if (symbolSpine.autoUpdate === false) return;\r\n\r\n            // let a1 = symbolSpine.state.getCurrent(1).getAnimationTime();\r\n            // console.log('TCL: initial -> a1', a1)\r\n            // console.log(symbolSpine.state.getCurrent(1))\r\n\r\n            if (a === 300) {\r\n                //symbolSpine.state.addAnimation(0, 'run-to-idle', true, 0.2);\r\n            }\r\n\r\n\r\n            if (symbolSpine.state.tracks[0] === null) return;\r\n            a++;\r\n            // //console.log('TCL: initial -> a', a)\r\n\r\n            // let a0 = symbolSpine.state.tracks[0].getAnimationTime();\r\n            // //if (a0 >= 1.3) symbolSpine.autoUpdate = false;\r\n\r\n            /* console.log('TCL: initial -> a2', a0)\r\n             console.log(symbolSpine.state.tracks[0])\r\n             console.log(\"$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$\")\r\n             console.log(symbolSpine)\r\n             console.log(symbolSpine.spineData)\r\n             console.log(symbolSpine.skeleton)\r\n             console.log(symbolSpine.state)\r\n             console.log(symbolSpine.stateData)\r\n             console.log(\"--------------------------------------------------\")*/\r\n\r\n            if (a > 600) {\r\n\r\n                symbolSpine.skeleton.setToSetupPose();\r\n                symbolSpine.state.clearTrack(0);\r\n                symbolSpine.state.clearTracks();\r\n\r\n                console.log('clearTrack(0)')\r\n            }\r\n\r\n\r\n        });\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });