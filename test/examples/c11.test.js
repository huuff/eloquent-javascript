const { 
  bigOak,
} = require("../../src/examples/c11/crow-tech");


const { exampleCode } = require("../../src/examples/c11/c11")

beforeAll(() => {
  exampleCode();
  jest.useFakeTimers();
})

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
  //const callback = () => console.log("Note delivered.");
  const callback = jest.fn();

  bigOak.send("Cow Pasture", "note", "Let's caw loudly at 7PM", callback);
  jest.runAllTimers();
  expect(callback).toHaveBeenCalled();
})
