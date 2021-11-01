document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const code = document.querySelector("#code").value;
  const fun = new Function(code);
  document.querySelector("#result").innerText = fun();
});
