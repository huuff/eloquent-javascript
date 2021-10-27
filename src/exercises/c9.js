function singleQuotesToDouble(input) {
  return input.replace(/(\s)'(.*?)'/g, '$1"$2"');
}

module.exports = {
  ex1: /ca(r|t)/,
  ex2: /pr?op/,
  ex3: /ferr(et|y|ari)/,
  ex4: /\b\w*ious\b/,
  ex5: /\s(;|.|,|:)/,
  ex6: /\w{6,}/,
  ex7: /\b[^eE]+\b/,
  singleQuotesToDouble: singleQuotesToDouble
};
