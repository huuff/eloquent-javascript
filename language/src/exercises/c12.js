const {
  topScope,
} = require('../projects/c12/top-scope')

const {
  specialForms,
  evaluate,
} = require('../../src/projects/c12/evaluate')

function addArrays() {
  topScope.array = (...values) => [ ...values ];
  topScope.length = (array) => array.length;
  topScope.element = (array, n) => array[n];
}

function addSetForm() {
  specialForms.set = (args, scope) => {
    if (args.length != 2 || args[0].type != "word") {
      throw new SyntaxError("Incorrect use of set");
    }
    console.log(`Calling set with args ${JSON.stringify(args)} and scope: ${JSON.stringify(scope)}`)

    const name = args[0].name;
    const value = evaluate(args[1], scope);
    if (Object.prototype.hasOwnProperty.call(scope, name)) {
      scope[name] = value;
    } else if (name in scope) {
      Object.getPrototypeOf(scope)[name] = value;
    } else {
      throw new ReferenceError(`${name} is not in the scope`);
    }
  }
}

module.exports = {
  addArrays: addArrays,
  addSetForm: addSetForm,
}
