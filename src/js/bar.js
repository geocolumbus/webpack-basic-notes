export default function bar () {
  const normal = 'Normal'
  let vals = []
  const max = 100
  const i=45;

  for (let i = 0; i < max; i++) {
    vals.push(i % 3 === 0 ? 'Special' : normal);
  }

  for (let i = 0; i < max; i++) {
    vals.push(i % 3 === 0 ? 'ExtraSpecial' : normal);
  }

  console.log(i);
}


