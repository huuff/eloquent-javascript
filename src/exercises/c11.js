const {
  requestType,
  storage,
  routeRequest,
} = require('../examples/c11/c11');

async function findScalpel(start) {
  requestType("scalpel", async (nest, content, source) => {
    const nextLocation = await storage(nest, "scalpel");
    if (nextLocation == nest.name) {
      //console.log(`${nest.name}: Request for scalpel from ${source}. It's here.`)
      return nextLocation;
    } else {
      //console.log(`${nest.name}: Request for scalpel from ${source}. It's in ${nextLocation}.`)
      return routeRequest(nest, nextLocation, "scalpel");
    }
  });

  return await routeRequest(start, await storage(start, "scalpel"), "scalpel");
}

module.exports = {
  findScalpel: findScalpel,
}
