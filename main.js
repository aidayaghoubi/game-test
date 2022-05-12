"use strict";

import { test } from "./utils/helper.js";

const playground = document.getElementById("playground");
const playerContainer = document.getElementById("player");


playground.addEventListener("click" , function handleCharacterMovement(e) {
    console.log(e);
});

playground.addEventListener("click" , function handleCharacterShotting(e) {
    console.log(e.target);
});