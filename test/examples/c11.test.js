const { 
  bigOak,
} = require("../../src/examples/c11/crow-tech");

test("storage is read", () => {

  bigOak.readStorage("food caches", caches => {
    let firstCache = caches[0];
    bigOak.readStorage(firstCache, info => {
      //console.log(info);
      expect(info).toEqual("A hollow above the third big branch from the bottom. Several pieces of bread and a pile of acorns.");
    });
  });
});
