const { 
  bigOak,
  network,
  everywhere,
} = require("../../src/examples/c11/crow-tech");


const { 
  exampleCode,
  storage,
  availableNeighbors,
  sendGossip,
  routeRequest,
} = require("../../src/examples/c11/c11")

beforeAll(() => {
  exampleCode();
});

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  everywhere((nest) => nest.resetFailureRate());
});

test("storage is read", () => {
  bigOak.readStorage("food caches", caches => {
    let firstCache = caches[0];
    bigOak.readStorage(firstCache, info => {
      expect(info).toEqual("A hollow above the third big branch from the bottom. Several pieces of bread and a pile of acorns.");
    });
  });
  jest.runAllTimers();
});

test("note is delivered", () => {
  everywhere(nest => nest.alwaysSucceed());
  const callback = jest.fn();

  bigOak.send("Cow Pasture", "note", "Let's caw loudly at 7PM", callback);
  jest.runAllTimers();
  expect(callback).toHaveBeenCalled();
});

test("read storage with promises", async () => {
  jest.useRealTimers();
  await storage(bigOak, "enemies").then(value => {
    expect(value).toEqual([
      "Farmer Jacques' dog",
      'The butcher',
      'That one-legged jackdaw',
      'The boy with the airgun'
    ]);
  });
});

test("check available neightbors", async () => {
  jest.useRealTimers();

  const reachable = await availableNeighbors(bigOak);
  expect(reachable).toEqual(["Cow Pasture", "Butcher Shop", "Gilles' Garden"])
});

test("gossip is really spread", () => {
  everywhere(nest => nest.alwaysSucceed());
  const gossipMessage = "Gossip text";

  sendGossip(bigOak, gossipMessage);
  jest.runAllTimers();

  // TODO: Can't I just use everywhere?
  for (let nodeName of Object.keys(network.nodes)) {
    expect(network.nodes[nodeName].state.gossip.includes(gossipMessage));
  }
  jest.runAllTimers();
});

test("message is routed", async () => {
  everywhere(nest => nest.alwaysSucceed());
  jest.useRealTimers();
  const note = "Test note";

  await routeRequest(bigOak, "Hawthorn", "note", note);

  expect(network.nodes["Hawthorn"].state.notes.includes(note))
});
