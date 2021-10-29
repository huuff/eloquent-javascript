const {
  bigOak,
  everywhere,
  defineRequestType
} = require('./crow-tech');


function storage(nest, name) {
  return new Promise(resolve => {
    nest.readStorage(name, result => resolve(result));
  });
}

function request(nest, target, type, content) {
  return new Promise((resolve, reject) => {
    let done = false;
    function attempt(n) {
      nest.send(target, type, content, (failed, value) => {
        done = true;
        if (failed) reject(failed);
        else resolve(value);
      });
      setTimeout(() => {
        if (done) return;
        else if (n < 3) attempt(n + 1);
        else reject(new Timeout("Timed out"));
      }, 250);
    }

    attempt(1);
  });
}

function requestType(name, handler) {
  defineRequestType(name, (nest, content, source, callback) => {
    try {
      Promise.resolve(handler(nest, content, source))
      .then(response => callback(null, response),
        failure => callback(failure));
    } catch (exception) {
      callback(exception);
    }
  });
}

function availableNeighbors(nest) {
  let requests = nest.neighbors.map(neighbor => {
      return request(nest, neighbor, "ping")
        .then(() => true, () => false);
  });

  return Promise.all(requests).then(result => {
    return nest.neighbors.filter((_, i) => result[i]);
  });
}

function exampleCode() {
  defineRequestType("note", (nest, content, source, done) => {
    console.log(`${nest.name} received note: ${content}`);
    done();
  });

  requestType("ping", () => "pong");

  everywhere(nest => {
    nest.state.gossip = [];
  });
}

module.exports = {
  exampleCode: exampleCode,
  storage: storage,
  request: request,
  requestType: requestType,
  availableNeighbors: availableNeighbors,
}
