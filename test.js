const test = require('ava')
const years = require('./')

test('years', t => {
  t.is(typeof years, 'function', 'Should be a function')

  const result = years({ count: 3 })
  
  t.deepEqual(result, [2018, 2019, 2020])
})