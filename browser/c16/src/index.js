import './game.css';
import { Level, simpleLevelPlan } from "./levels.js";
import { DOMDisplay } from './display.js';
import { State } from './state';

let simpleLevel = new Level(simpleLevelPlan);
console.log(`SimpleLevel size: ${simpleLevel.width} by ${simpleLevel.height}`);

let display = new DOMDisplay(document.body, simpleLevel);
display.syncState(State.start(simpleLevel));
