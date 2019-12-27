const test = require('tape') // Actual test script
const got = require('got') // For issuing http requests

test('Hitting the render endpoint and checking for properly formated speech data', t => {
  t.plan(2)

  got('http://localhost:3000/render')
    .then(response => {
      let data = JSON.parse(response.body)
      t.equal(data.speakText, 'E = mc^2')
      t.equal(data.speech, 'upper E equals m c squared')
    })
    .catch(error => {
      console.log(error)
    })
})
const testBody = {
  LaTeX: 'E = mc^2'
}
test('Posting to the test endpoint', t => {
  t.plan(2)
  got
    .post('http://localhost:3000/render-request', {
      json: testBody
    })
    .json()
    .then(data => {
      t.equal(data.speakText, 'E = mc^2')
      t.equal(data.speech, 'upper E equals m c squared')
    })
})
