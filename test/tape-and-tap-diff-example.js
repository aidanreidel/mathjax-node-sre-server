const test = require('tape') // Actual test script
const tapDiff = require('tap-diff') // Pretty printer

// This pipes the output of test through the pretty printer
// and back to the command line. Comment this out to see why
// I added tap-diff
test
  .createStream()
  .pipe(tapDiff())
  .pipe(process.stdout)

// Simple test function to see how tape and tap-diff work together
test('Example: timing test', function(t) {
  t.plan(2)

  t.equal(typeof Date.now, 'function')
  var start = Date.now()

  setTimeout(function() {
    t.equal(Date.now() - start, 100)
  }, 100)
})
