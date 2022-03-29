function countInstances(string, word) {
  return string.split(word).length - 1;
}
let str =
  "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript JavaScript code outside a web browser.";
let value = document.querySelector("input");

value.addEventListener("keyup", e => {
  if (e.key === "Enter") {
    console.log(countInstances(str, e.target.value));
  }
});
