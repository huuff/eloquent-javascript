import { elt } from "./elt.js";
import { PictureCanvas } from "./canvas.js";

export class PixelEditor {
  constructor(state, config) {
    let { tools, controls, dispatch } = config;
    this.state = state;

    this.canvas = new PictureCanvas(state.picture, pos => {
      let tool = tools[this.state.tool];
      let onMove = tool(pos, this.state, dispatch);
      if (onMove) return pos => onMove(pos, this.state);
    });

    this.controls = controls.map(Control => new Control(state, config));
    this.dom = elt("div", {
      tabIndex: 0,
      onkeyup: (e) => this.keyHandler(e, dispatch),
    }, this.canvas.dom, elt("br"), ...this.controls.reduce((a, c) => a.concat(" ", c.dom), []));
  }

  syncState(state) {
    this.state = state;
    this.canvas.syncState(state.picture);
    for (let ctrl of this.controls) {
      ctrl.syncState(state);
    }
  }

  keyHandler(event, dispatch) {
    if (event.ctrlKey && event.key === "z") {
      dispatch({undo: true});
    } else if (event.key === "d") {
      dispatch({tool: "draw" });
    } else if (event.key === "r") {
      dispatch({tool: "rectangle"});
    } else if (event.key === "f") {
      dispatch({tool: "fill"});
    }
  }
}

export class ToolSelect {
  constructor(state, { tools, dispatch }) {
    this.select = elt("select", {
      onchange: () => dispatch({ tool: this.select.value })
    }, ...Object.keys(tools).map(name => elt("option", {
      selected: name == state.tool
    }, name)))
    this.dom = elt("label", null, "Tool: ", this.select);
  }

  syncState(state) {
    this.select.value = state.tool;
  }
}

export class ColorSelect {
  constructor(state, { dispatch }) {
    this.input = elt("input", {
      type: "color",
      value: state.color,
      onchange: () => dispatch({color: this.input.value}),
    });
    this.dom = elt("label", null, "Color: ", this.input);
  }

  syncState(state) {
    this.input.value = state.color;
  }
}
