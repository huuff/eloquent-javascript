const cellSize = 20;
const cellsPerRow = 20;
const liveChance = 0.30;

function initialSetup() {
  const grid = [];

  for (let i = 0; i < cellsPerRow; i++) {
    grid.push([]);
    for (let j = 0; j < cellsPerRow; j++) {
      if (Math.random() < liveChance) {
        grid[i].push(true);
      } else {
        grid[i].push(false);
      }
    }
  }

  return grid;
}

const grid = initialSetup();

function drawGrid() {
  const container = document.querySelector("#container");
  if (container.firstElementChild) container.firstElementChild.remove();
  const table = document.createElement("table");
  table.style.border = "1px solid black";
  table.style.borderCollapse = "collapse";

  for (let i = 0; i < grid.length; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < grid.length; j++) {
      const cell = document.createElement("td");
      cell.style.border = "1px solid black";
      cell.style.borderCollapse = "collapse";
      cell.style.height = `${cellSize}px`;
      cell.style.width = `${cellSize}px`;
      cell.id = `(${j}, ${i})`;
      if (grid[i][j]) {
        cell.style.backgroundColor = "black";
      }
      row.appendChild(cell);
    }
    table.appendChild(row);
  }

  container.appendChild(table);
}

function numOfNeighbors(x, y) {
  const max = cellsPerRow - 1;
  let count = 0;
  if (y !== max && grid[y+1][x]) count++;
  if (grid[y][x+1]) count++;
  if (y !== 0 && grid[y-1][x]) count++;
  if (grid[y][x-1]) count++;
  if (x !== 0 && y !== 0 && grid[y-1][x-1]) count++;
  if (x !== 0 && y !== max && grid[y+1][x-1]) count++;
  if (x !== max && y !== 0 && grid[y-1][x+1]) count++;
  if (x !== max && y !== max && grid[y+1][x+1]) count++;

  return count;
}

function update() {
  for (let x = 0; x < cellsPerRow; x++) {
    for (let y = 0; y < cellsPerRow; y++) {
      const neighbors = numOfNeighbors(x, y);
      if (grid[y][x]) {
        if (neighbors < 2 || neighbors > 3) { // Condition for dying
          grid[y][x] = false;
        }
      } else {
        if (neighbors === 3) { // Condition for resurrecting
          grid[y][x] = true;
        }
      }
    }
  } 
}

function updateAndDraw() {
  update();
  drawGrid();
}

drawGrid();

setInterval(updateAndDraw, 1000);
