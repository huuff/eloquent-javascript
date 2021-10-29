const {
  bigOak,
  everywhere,
  defineRequestType
} = require('./crow-tech');

function exampleCode() {
  defineRequestType("note", (nest, content, source, done) => {
    console.log(`${nest.name} received note: ${content}`);
    done();
  });
}

function storage(nest, name) {
  return new Promise(resolve => {
    nest.readStorage(name, result => resolve(result));
  });
}

module.exports = {
  exampleCode: exampleCode,
  storage: storage,
}
