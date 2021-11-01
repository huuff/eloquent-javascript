import { Picture } from "./canvas.js";
import { ToolSelect, ColorSelect } from "./application.js";
import { SaveButton, LoadButton } from "./save_and_load.js";
import { historyUpdateState, UndoButton } from "./history.js";

const startState = {
  tool: "draw",
  color: "#000000",
  picture: Picture.empty(60, 30, "#f0f0f0"),
  done: [],
  doneAt: 0,
};

const baseTools = { draw, fill, rectangle, pick };

const baseControls = [
  ToolSelect, ColorSelect, SaveButton, LoadButton, UndoButton
];

function startPixelEditor({
  state = startState,
  tools = baseTools,
  controls = baseControls
}) {
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
