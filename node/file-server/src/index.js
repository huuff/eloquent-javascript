const { createServer } = require("http");
const mime = require("mime");
const { urlPath } = require("./urlPath");
const { 
  rmdir, 
  unlink,
  stat,
  readdir,
  mkdir,
} = require("fs").promises;
const { createReadStream, createWriteStream } = require("fs");
const { pipeStream } = require("./pipeStream");

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
  },

  DELETE: async function(request) {
    let path = urlPath(request.url);
    let stats;
    try {
      stats = await stat(path);
    } catch (error) {
      if (error.code != "ENOENT") {
        throw error;
      } else {
        return { status: 204 };
      }
    }

    if (stats.isDirectory()) {
      await rmdir(path);
    } else {
      await unlink(path);
    }

    return { status: 204 };
  },

  PUT: async function(request) {
    let path = urlPath(request.url);
    await pipeStream(request, createWriteStream(path));
    return { status: 204 };
  },

  MKCOL: async function(request) {
    let path = urlPath(request.url);
    await mkdir(path);
    return { status: 204 };
  },
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
