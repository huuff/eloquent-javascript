const containerElement = document.getElementById("container");
const tabs = Array.from(containerElement.children).filter(c => c.hasAttribute("data-tabname"));

function showOnlyOneTab(tabname) {
  tabs.filter(elem => elem.getAttribute("data-tabname") === tabname)[0].style.display = "block";  

  tabs.filter(elem => elem.getAttribute("data-tabname") !== tabname).forEach(e => e.style.display = "none");
}

function makeButtons() {
  for (let tab of tabs) {
    let tabName = tab.getAttribute("data-tabname");
    let button = document.createElement("button");
    button.innerText = `Show ${tabName}`
    button.addEventListener("click", () => showOnlyOneTab(tabName))
    container.prepend(button);
  }
}

showOnlyOneTab(tabs[0].getAttribute("data-tabname"));
makeButtons();
