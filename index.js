const express = require('express')
const app = express()
const port = 3000

const mjAPI = require('mathjax-node-sre')

mjAPI.config({
  MathJax: {}
})
mjAPI.start()

var yourMath = 'E = mc^2'

mjAPI.typeset(
  {
    math: yourMath,
    format: 'TeX', // or "inline-TeX", "MathML"
    svg: true
  },
  function(data) {
    if (!data.errors) {
      console.log(data)
      console.log(data.speakText)
      if (data.speech) console.log(data.speech)

      app.use(express.static('./'))

      app.get('/render', (req, res) => res.send(data))

      app.listen(port, () =>
        console.log(`Example app listening on port ${port}!`)
      )
    }
  }
)
