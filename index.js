const express = require("express");
const app = express();
const port = 3000;

// a simple TeX-input example
var mjAPI = require("mathjax-node");

// const mj = require("mathjax-node").typeset;
// const postprocessor = require("mathjax-node-sre").postprocessor;

// mj({ math: "x + y", format: "TeX", mml: true }, function(result) {
//   console.log(result);
//   postprocessor({ speakText: true }, result, function(output) {
//     console.log(output.speakText); // => x plus y
//   });
// });

mjAPI.config({
  MathJax: {
    // traditional MathJax configuration
  }
});
mjAPI.start();

var yourMath = "E = mc^2";

mjAPI.typeset(
  {
    math: yourMath,
    format: "TeX", // or "inline-TeX", "MathML"
    svg: true
  },
  function(data) {
    if (!data.errors) {
      console.log(data);
      app.use(express.static("./"));

      app.get("/render", (req, res) => res.send(data));

      app.listen(port, () =>
        console.log(`Example app listening on port ${port}!`)
      );
    }
  }
);
