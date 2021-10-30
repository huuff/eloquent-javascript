const { roadGraph } = require("./road-graph.js");
const { randomPick } = require("./random-pick.js");

class VillageState {
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
  }

  static random(parcelCount = 5) {
    let parcels = [];
    for (let i = 0; i < parcelCount; i++) {
      let address = randomPick(Object.keys(roadGraph));
      let place;
      do {
        place = randomPick(Object.keys(roadGraph));
      } while (place == address) {
        parcels.push({place, address});
      }
    }

    return new VillageState("Post Office", parcels);
  }

  move(destination) {
   if (!roadGraph[this.place].includes(destination)) {
     throw new Error(`ERROR: ${destination} is not a destination of ${this.place}`);
   } else {
    let parcels = this.parcels.map(p => {
      if (p.place != this.place) return p;
      else return { place: destination, address: p.address};
    }).filter(p => p.place != p.address);
    return new VillageState(destination, parcels); 
   }
  }
}

module.exports = {
  VillageState: VillageState
}
