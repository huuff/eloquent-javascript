import { Picture } from "./state.js";
import { ToolSelect, ColorSelect, PixelEditor } from "./application.js";
import { SaveButton, LoadButton } from "./save_and_load.js";
import { historyUpdateState, UndoButton } from "./history.js";
import { draw, fill, rectangle, pick, circle } from "./draw.js";

const startState = {
  tool: "draw",
  color: "#000000",
  picture: Picture.empty(60, 30, "#f0f0f0"),
  done: [],
  doneAt: 0,
};

const baseTools = { draw, fill, rectangle, pick, circle };

const baseControls = [
  ToolSelect, ColorSelect, SaveButton, LoadButton, UndoButton
];

function startPixelEditor(
  state = startState,
  tools = baseTools,
  controls = baseControls
) {
  let app = new PixelEditor(state, {
    tools,
    controls,
    dispatch(action) {
      state = historyUpdateState(state, action);
      app.syncState(state);
    }
  });

  return app.dom;
}

document.querySelector("#container").appendChild(startPixelEditor());
