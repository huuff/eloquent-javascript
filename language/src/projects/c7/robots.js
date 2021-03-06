const { randomPick } = require('./random-pick.js');
const { roadGraph } = require('./road-graph');

function runRobot(state, robot, memory) {
  for (var turn = 0;; turn++) {
    if (state.parcels.length == 0) {
      //console.info(`Done in ${turn} turns`);
      break;
    }

    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
    //console.debug(`Moved to ${action.direction}`);
  }

  return {
    finalState: state,
    turns: turn
  };
}

function randomRobot(state) {
  return {direction: randomPick(roadGraph[state.place])};
}

const mailRoute = [
  "Alice's House", "Cabin", "Alice's House", "Bob's House",
  "Town Hall", "Daria's House", "Ernie's House", "Grete's House",
  "Shop", "Grete's House", "Farm", "Marketplace", "Post Office"
];

function routeRobot(state, memory) {
  if (memory.length == 0) {
    memory = mailRoute;
  }
  
  return { direction: memory[0], memory: memory.slice(1) };
}


function findRoute(graph, from, to) {
  let work = [{at: from, route: []}];
  
  for (let i = 0; i < work.length; i++) {
    let { at, route } = work[i];
    for (let place of graph[at]) {
      if (place == to) return route.concat(place);
      if (!work.some(w => w.at == place)) {
        work.push({ at: place, route: route.concat(place) });
      }
    }
  }
}

function goalOrientedRobot({ place, parcels }, route) {
  if (route.length == 0) {
    let parcel = parcels[0];
    if (parcel.place != place) {
      route = findRoute(roadGraph, place, parcel.place);
    } else {
      route = findRoute(roadGraph, place, parcel.address);
    }
  }

  return { direction: route[0], memory: route.slice(1)};
}

function bestRobot({ place, parcels }, route) {
  if (route.length == 0) {
    let parcelRoutes = [];
    for (let parcel of parcels) {
      if (parcel.place != place) {
        parcelRoutes.push(findRoute(roadGraph, place, parcel.place));
      } else {
        parcelRoutes.push(route = findRoute(roadGraph, place, parcel.address));
      }
    }

    route = parcelRoutes.reduce((r1, r2) => r1.length < r2.length ? r1 : r2);
  }


  return { direction: route[0], memory: route.slice(1)};
}

module.exports = {
  runRobot: runRobot,
  randomRobot: randomRobot,
  routeRobot: routeRobot,
  goalOrientedRobot: goalOrientedRobot,
  bestRobot: bestRobot
}
