// https://github.com/philipwalton/html-inspector
(function() {
  var s = document.createElement('script')
  s.setAttribute('src', '//cdnjs.cloudflare.com/ajax/libs/html-inspector/0.8.2/html-inspector.js')
  s.addEventListener('load', function(){
    HTMLInspector.inspect()
  })
  document.body.appendChild(s)
})()
