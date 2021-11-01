import { State } from "./state";
import { Level } from "./levels.js";
import { arrowKeys, } from "./controls";

function runAnimation(frameFunc) {
  let lastTime = null;
  function frame(time) {
    if (lastTime != null) {
      let timeStep = Math.min(time - lastTime, 100) / 1000;

      if (frameFunc(timeStep) === false) {
        return;
      }
    }

    lastTime = time;
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

function runLevel(level, Display) {
  let display = new Display(document.body, level);
  let state = State.start(level);
  let ending = 1;

  return new Promise(resolve => {
    runAnimation(time => {
      state = state.update(time, arrowKeys);
      display.syncState(state);
      if (state.status == "playing") {
        return true;
      } else if (ending > 0) {
        ending -= time;
        return true;
      } else {
        display.clear();
        resolve(state.status);
        return false;
      }
    });
  });
}

export async function runGame(plans, Display) {
  let remainingLives = 3;
  for (let level = 0; level < plans.length; ) {
    console.log(`Remaining lives: ${remainingLives}`)
    let status = await runLevel(new Level(plans[level]), Display);
    if (status == "won") {
      level++;
    } else {
      if (remainingLives > 0) {
        remainingLives--;
      } else {
        console.log("You've lost!"); 
        return;
      }
    }
  }
  console.log("You've won!");
}
