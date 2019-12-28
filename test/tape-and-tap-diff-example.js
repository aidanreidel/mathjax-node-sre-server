const test = require('tape') // Actual test script

// Simple test function to see how tape and tap-diff work together
test('Example: timing test', function(t) {
  // to see what it looks like when a test fails swap t.plan(1) to t.plan(2)
  // And uncomment the lines below
  t.plan(1) // t.plan(2)

  t.equal(typeof Date.now, 'function')

  // var start = Date.now()
  // setTimeout(function() {
  //   t.equal(Date.now() - start, 100)
  // }, 100)
})
