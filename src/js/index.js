import Bar from "./bar"

const bar = new Bar()
const n = bar.two(2) + bar.three(5)

window.document.getElementsByTagName("body")[0].innerHTML = `<p>${n}</p>p>`

