const test = require('tape') // Actual test script
const got = require('got') // For issuing http requests

const testBody = {
  LaTeX: 'E = mc^2'
}
test('Posting to the test endpoint', t => {
  t.plan(2)
  got
    .post('http://localhost:3000/', {
      json: testBody
    })
    .json()
    .then(data => {
      t.equal(data.speakText, 'E = mc^2')
      t.equal(data.speech, 'upper E equals m c squared')
    })
})
