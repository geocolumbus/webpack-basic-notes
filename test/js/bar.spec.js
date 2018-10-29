import Bar from '../../src/js/bar'
let bar = new Bar()

describe('Bar tests', function () {
  it('Adds two', function () {
    expect(bar.two(2)).toEqual(4);
  })
  it('Adds three', function () {
    expect(bar.three(-2)).toEqual(1);
  })

})
