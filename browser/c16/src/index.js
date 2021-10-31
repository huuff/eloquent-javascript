import './game.css';
import { DOMDisplay } from './display.js';
import { runGame } from "./game.js";
import { GAME_LEVELS } from "./game_levels.js";

runGame(GAME_LEVELS, DOMDisplay)
