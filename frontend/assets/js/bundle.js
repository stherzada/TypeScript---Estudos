/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Aula 33 - Interfaces e Classes/index.ts":
/*!*****************************************************!*\
  !*** ./src/Aula 33 - Interfaces e Classes/index.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class VideoPlayer {
    constructor(videoPlayerElements) {
        this.videoPlayer = videoPlayerElements.videoPlayer;
        this.playButton = videoPlayerElements.playButton;
        this.stopButton = videoPlayerElements.stopButton;
    }
    playToogle() {
        if (this.videoPlayer.paused) {
            this.videoPlayer.play();
            this.playButton.innerText = "Pause";
        }
        else {
            this.videoPlayer.pause();
            this.playButton.innerText = "Play";
        }
    }
    stop() {
        //
    }
    initialEvent() {
        // se eu passar uma function dentro de uma class do add event, ele passa a ser o botão
        this.playButton.addEventListener("click", () => {
            this.playToogle();
        });
        this.stopButton.addEventListener("click", () => {
            this.videoPlayer.pause();
            this.videoPlayer.currentTime = 0;
            this.playButton.innerText = "Play";
        });
    }
}
exports["default"] = VideoPlayer;
const videoPlayer = new VideoPlayer({
    videoPlayer: document.querySelector(".video"),
    playButton: document.querySelector(".play"),
    stopButton: document.querySelector(".stop"),
});
videoPlayer.initialEvent();


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*****************************************!*\
  !*** ./src/Aula 19 - Workout/Aula19.ts ***!
  \*****************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
// import "./form-control";
__webpack_require__(/*! ../Aula 33 - Interfaces e Classes/index */ "./src/Aula 33 - Interfaces e Classes/index.ts");

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map