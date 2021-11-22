import {isover,move} from './move.js';

import showUI from './ui.js';
var over = false;
let result = false;
showUI();
window.onkeydown = function (e) {
    if (over) {
        return
    }
    if (e.key === "ArrowUp") {
        result = move("up");
        
    }
    else if (e.key === "ArrowDown") {
        result = move("down")
    }
    else if (e.key === "ArrowLeft") {
        result = move("left")
    }
    else if (e.key === "ArrowRight") {
        result = move("right")
    }
    if (result) {
        showUI()
        if (isover()) {
            console.log('通关了')
            over = true;
        }
    }

}