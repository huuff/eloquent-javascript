const {
  topScope,
} = require('../projects/c12/top-scope')

function addArrays() {
  topScope.array = (...values) => [ ...values ];
  topScope.length = (array) => array.length;
  topScope.element = (array, n) => array[n];
}

module.exports = {
  addArrays: addArrays
}
