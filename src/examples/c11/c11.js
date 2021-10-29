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

module.exports = {
  exampleCode: exampleCode
}
