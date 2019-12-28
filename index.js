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

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
