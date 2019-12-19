console.log('ayyy')

fetch('http://localhost:3000/render')
  .then(response => response.json())
  .then(data => {
    function render_xml(id, xml_string) {
      var doc = new DOMParser().parseFromString(xml_string, 'image/svg+xml')
      console.log(doc.documentElement)
      var el = document.getElementById(id)
      el.appendChild(el.ownerDocument.importNode(doc.documentElement, true))
    }
    console.log(data)
    render_xml('foo', data.svg)
    if (data.speakText)
      document.getElementById('bar').innerHTML = data.speakText
    if (data.speech) document.getElementById('baz').innerHTML = data.speech
  })
