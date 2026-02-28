---
layout: opencs
title: RPG Baseline with Squares 
permalink: /gamify/parallax
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
<<<<<<< HEAD
=======
>>>>>>> e276617 (make index and games work)
    import Core from "{{site.baseurl}}/assets/js/GameEnginev1/essentials/Game.js";
    import GameControl from "{{site.baseurl}}/assets/js/GameEnginev1/essentials/GameControl.js";
    import GameLevelParallaxFish from "{{site.baseurl}}/assets/js/GameEnginev1/GameLevelParallaxFish.js";
    import GameLevelParallaxStairs from "{{site.baseurl}}/assets/js/GameEnginev1/GameLevelParallaxStairs.js";
<<<<<<< HEAD
=======
    import Core from "/assets/js/GameEnginev1/essentials/Game.js";
    import GameControl from "/assets/js/GameEnginev1/essentials/GameControl.js";
    import GameLevelParallaxFish from "/assets/js/GameEnginev1/GameLevelParallaxFish.js";
    import GameLevelParallaxStairs from "/assets/js/GameEnginev1/GameLevelParallaxStairs.js";
>>>>>>> 72bd9be (massive update to latest tech)
=======
>>>>>>> e276617 (make index and games work)
    import { pythonURI, javaURI, fetchOptions } from '{{site.baseurl}}/assets/js/api/config.js';

    const gameLevelClasses = [GameLevelParallaxFish, GameLevelParallaxStairs];

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
