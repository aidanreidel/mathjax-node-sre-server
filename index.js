const express = require('express')
const app = express()
const port = 3000

const mjAPI = require('mathjax-node-sre')

mjAPI.config({
  MathJax: {}
})
mjAPI.start()

var yourMath = 'E = mc^2'

app.use(express.static('./'))
app.use(express.json())

app.get('/render', (req, res) => {
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

        res.send(data)
      }
    }
  )
})

app.post('/render-request', (req, res) => {
  mjAPI.typeset(
    {
      math: req.body.LaTeX,
      format: 'TeX', // or "inline-TeX", "MathML"
      svg: true
    },
    function(data) {
      if (!data.errors) {
        console.log(data)
        console.log(data.speakText)
        if (data.speech) console.log(data.speech)

        res.send(data)
      }
    }
  )
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
