export default function bar () {
  const name = 'George'
  let d = 1
  if (typeof d === 'number') {
    d++
  }
  document.getElementsByTagName('body')[0].innerHTML = `<h1>${name} -- ${d}</h1>`
}

