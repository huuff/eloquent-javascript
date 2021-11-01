export function draw(pos, state, dispatch) {
  function drawPixel({x, y}, state) {
    let drawn = { x, y, color: state.color };
    dispatch({picture: state.picture.draw([drawn])});
  }

  drawPixel(pos, state);
  return drawPixel;
}

export function rectangle(start, state, dispatch) {
  function drawRectangle(pos) {
    let xStart = Math.min(start.x, pos.x);
    let yStart = Math.min(start.y, pos.y);
    let xEnd = Math.max(start.x, pos.x);
    let yEnd = Math.max(start.y, pos.y);
    let drawn = [];

    for (let y = yStart; y <= yEnd; y++) {
      for (let x = xStart; x <= xEnd; x++) {
        drawn.push({x, y, color: state.color});
      }
    }

    dispatch({picture: state.picture.draw(drawn)});
  }
  drawRectangle(start);
  return drawRectangle;
}


export function circle(start, state, dispatch) {
  function drawCircle(pos) {
    let xStart = Math.min(start.x, pos.x);
    let yStart = Math.min(start.y, pos.y);
    let xEnd = Math.max(start.x, pos.x);
    let yEnd = Math.max(start.y, pos.y);
    let drawn = [];

    let xSide = xEnd - xStart;
    let ySide = yEnd - yStart;
    let shortestSide = Math.min(xSide, ySide)/2;
    let centerX = xStart + (xSide / 2);
    let centerY = yStart + (ySide / 2);

    for (let y = yStart; y <= yEnd; y++) {
      for (let x = xStart; x <= xEnd; x++) {
        let hyp = Math.sqrt(((centerX - x) ** 2) + ((centerY - y) ** 2));
        if (hyp < shortestSide)
          drawn.push({x, y, color: state.color});
      }
    }

    dispatch({picture: state.picture.draw(drawn)});
  }
  drawCircle(start);
  return drawCircle;
}

const around = [
  { dx: -1, dy: 0 },
  { dx: 1, dy: 0 },
  { dx: 0, dy: -1 },
  { dx: 0, dy: 1}
];

export function fill({x, y}, state, dispatch) {
  let targetColor = state.picture.pixel(x, y);
  let drawn = [ {x, y, color: state.color }];
  for (let done = 0; done < drawn.length; done++) {
    for (let {dx, dy} of around) {
      let x = drawn[done].x + dx, y = drawn[done].y + dy;

      if (x >= 0 && x < state.picture.width
        && y >= 0 && y <= state.picture.height
        && state.picture.pixel(x, y) == targetColor
        && !drawn.some(p => p.x == x && p.y == y)) {
        drawn.push({x, y, color: state.color});
      }
    }
  }

  dispatch({picture: state.picture.draw(drawn)});
}

export function pick(pos, state, dispatch) {
  dispatch({color: state.picture.pixel(pos.x, pos.y)});
}
