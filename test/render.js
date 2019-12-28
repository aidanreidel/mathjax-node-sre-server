const test = require('tape') // Actual test script
const got = require('got') // For issuing http requests

const testBody = {
  LaTeX: 'E = mc^2'
}
test('Posting valid LaTeX to the render endpoint should return the right speech', t => {
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

const emptyBody = {}
test('Posting an empty request to the render endpoint should return message that the body was empty', t => {
  t.plan(1)
  got
    .post('http://localhost:3000/', {
      json: emptyBody
    })
    .then(data => {
      t.equal(data.body, 'Request Body Empty')
    })
})
