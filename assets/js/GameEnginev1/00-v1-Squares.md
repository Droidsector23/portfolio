---
layout: opencs
title: RPG Baseline with Squares 
permalink: /gamify/squares
---

<div id="gameContainer">
    <div id="promptDropDown" class="promptDropDown" style="z-index: 9999"></div>
<<<<<<< HEAD
    <!-- GameEnv will create canvas dynamically -->
=======
    <canvas id='gameCanvas'></canvas>
>>>>>>> 72bd9be (massive update to latest tech)
</div>

<script type="module">
    // Adnventure Game assets locations
<<<<<<< HEAD
    import Core from "{{site.baseurl}}/assets/js/GameEnginev1/essentials/Game.js";
    import GameControl from "{{site.baseurl}}/assets/js/GameEnginev1/essentials/GameControl.js";
    import GameLevelSquares from "{{site.baseurl}}/assets/js/GameEnginev1/GameLevelSquares.js";
=======
    import Core from "/assets/js/GameEnginev1/essentials/Game.js";
    import GameControl from "/assets/js/GameEnginev1/essentials/GameControl.js";
    import GameLevelSquares from "/assets/js/GameEnginev1/GameLevelSquares.js";
>>>>>>> 72bd9be (massive update to latest tech)
    import { pythonURI, javaURI, fetchOptions } from '{{site.baseurl}}/assets/js/api/config.js';

    const gameLevelClasses = [GameLevelSquares];

    // Web Server Environment data
    const environment = {
        path: "{{site.baseurl}}",
        pythonURI: pythonURI,
        javaURI: javaURI,
        fetchOptions: fetchOptions,
        gameContainer: document.getElementById("gameContainer"),
<<<<<<< HEAD
=======
        gameCanvas: document.getElementById("gameCanvas"),
>>>>>>> 72bd9be (massive update to latest tech)
        gameLevelClasses: gameLevelClasses

    }
    // Launch Adventure Game using the central core and adventure GameControl
    Core.main(environment, GameControl);
</script>
