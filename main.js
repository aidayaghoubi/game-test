"use strict";

import { debounce } from "./utils/helper.js";

const playground = document.getElementById("playground");
const playerContainer = document.getElementById("player");
const characterImage = playerContainer.getElementsByTagName("img")[0]


// playground.addEventListener("click" , function handleCharacterMovement(e) {
//     console.log(e);
// });

// playground.addEventListener("click" , function handleCharacterShotting(e) {
//     console.log(e.target);
// });

playground.addEventListener("mousemove", function handleUserCursorChange(e) {

    const axises = {
        x: e.clientX,
        y: e.clientY
    }
    
    const endDegrees = Math.atan(axises.x / axises.y) * 180 / Math.PI;
    
    playerContainer.style.transform = `rotate(${(endDegrees - 180) * -1}deg)`;
});

