function getElementsByTagName(tagName) {
  function recurse(root) {
    tagName = tagName.toLowerCase();

    let matchingElements = [];

    for (const elem of Array.from(root.children)) {
      if (elem.nodeName.toLowerCase() === tagName) {
        matchingElements.push(elem);
      }
      matchingElements = matchingElements.concat(recurse(elem));
    }

    return matchingElements;
  }

  return recurse(document.body);
}
