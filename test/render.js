const test = require('tape') // Actual test script
const got = require('got') // For issuing http requests

// Change which of these is commented out if you are testing locally or production
// const api = 'http://localhost:3000/'         // Local
const api = 'https://textosvg.aidanreidel.com/' // Production

const emptyBody = {}
test('Posting an empty request to the render endpoint should return message that the body was empty', t => {
  t.plan(1)
  got
    .post(api, {
      json: emptyBody
    })
    .then(data => {
      t.equal(data.body, 'Request Body Empty')
    })
})

const testBody = {
  LaTeX: 'E = mc^2'
}
test('Posting valid LaTeX to the render endpoint should return the right speech', t => {
  t.plan(2)
  got
    .post(api, {
      json: testBody
    })
    .json()
    .then(data => {
      t.equal(data.speakText, 'E = mc^2')
      t.equal(data.speech, 'upper E equals m c squared')
    })
})

const simpleFraction = {
  LaTeX: '0.5 = \\frac{1}{2}'
}

const quadraticFormula = {
  LaTeX: 'x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}'
}

test('Rendering fractions should produce the correct speech output', t => {
  t.plan(2)
  got
    .post(api, {
      json: simpleFraction
    })
    .json()
    .then(data => {
      t.equal(data.speech, '0.5 equals one-half')
    })
  got
    .post(api, {
      json: quadraticFormula
    })
    .json()
    .then(data => {
      t.equal(
        data.speech,
        'x equals StartFraction negative b plus-or-minus StartRoot b squared minus 4 a c EndRoot Over 2 a EndFraction'
      )
    })
})
