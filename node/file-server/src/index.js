const { createServer } = require("http");
const { createReadStream } = require("fs");
const { stat, readdir } = require("fs").promises;
const mime = require("mime");
const { urlPath } = require("./urlPath");

const methods = {
  GET: async function(request) {
    let path = urlPath(request.url);
    let stats;
    try {
      stats = await stat(path);
    } catch (error) {
      if (error.code != "ENOENT") {
        throw error;
      } else {
        return { status: 404, body: "File not found" };
      }
    }
    if (stats.isDirectory()) {
      return { body: (await readdir(path)).join("\n") };
    } else {
      return {
        body: createReadStream(path),
        type: mime.getType(path),
      };
    }
  }
};

createServer((request, response) => {
  let handler = methods[request.method] || notAllowed;
  handler(request)
    .catch(error => {
      if (error.status != null) {
        return error;
      } else {
        return { body: String(error), status: 500 };
      }
    }).then(({body, status = 200, type = "text/plain"}) => {
      response.writeHead(status, { "Content-Type": type});
      if (body && body.pipe) {
        body.pipe(response);
      } else {
        response.end(body);
      }
    })
}).listen(8000);

async function notAllowed(request) {
  return {
    status: 405,
    body: `Method ${request.method} not allowed.`
  }; 
}
