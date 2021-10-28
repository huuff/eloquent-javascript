const { parse } = require('./parse');
const { evaluate } = require('./evaluate');
const { topScope } = require('./top-scope');

function run(program) {
  return evaluate(parse(program), Object.create(topScope));
}

module.exports = {
  run: run
}
