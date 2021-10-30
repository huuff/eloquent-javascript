const MOUNTAINS = [
  {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
  {name: "Everest", height: 8848, place: "Nepal"},
  {name: "Mount Fuji", height: 3776, place: "Japan"},
  {name: "Vaalserberg", height: 323, place: "Netherlands"},
  {name: "Denali", height: 6168, place: "United States"},
  {name: "Popocatepetl", height: 5465, place: "Mexico"},
  {name: "Mont Blanc", height: 4808, place: "Italy/France"}
];


const targetElement = document.querySelector("#tableLocation");
const tableElement = document.createElement("table");
targetElement.appendChild(tableElement);

const columns = [];
function drawHeader() {
  let headerRow = document.createElement("tr"); 

  for (let columnName of Object.keys(MOUNTAINS[0])) {
    let headerCell = document.createElement("th");
    headerCell.innerText = columnName;
    headerRow.appendChild(headerCell);
    columns.push(columnName);
  }

  tableElement.appendChild(headerRow);
}

function drawData() {
  for (let mountain of MOUNTAINS) {
    let rowElement = document.createElement("tr");
    for (let column of columns) {
      let cell = document.createElement("td");
      cell.innerText = mountain[column];
      if (typeof mountain[column] == "number") {
        cell.style.textAlign = "right";
      }
      rowElement.appendChild(cell);
    }
    tableElement.appendChild(rowElement);
  }
}

drawHeader();
drawData();
