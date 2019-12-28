const express = require('express')
const app = express()
const PORT = 3000
const mjAPI = require('mathjax-node-sre')

app.use(express.json())

mjAPI.config({
  MathJax: {}
})
mjAPI.start()

app.post('/', (req, res) => {
  // Log out what the request time and location
  console.log(
    new Date(),
    'POST from',
    req.headers['x-forwarded-for']
      ? req.headers['x-forwarded-for']
      : req.connection.remoteAddress
  )
  if (!req.body.LaTeX) {
    console.log('Request Body Empty')
    return res.send('Request Body Empty')
  }

  mjAPI.typeset(
    {
      math: req.body.LaTeX,
      format: 'TeX', // or "inline-TeX", "MathML"
      svg: true
    },
    function(data) {
      if (!data.errors) {
        // console.log(data)
        console.log('rendered:', data.speakText)
        if (data.speech) console.log('speech:', data.speech)
        res.send(data)
      } else {
        console.log('errors:', data.errors)
        res.send({ errors: data.errors })
      }
    }
  )
})

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
