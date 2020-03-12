function replaceDoiLink() {
  var doiDom = document.getElementById('doi-link')
  if (doiDom == null) {
    return
  }
  var aLink = Array.from(doiDom.children)
  aLink.forEach(a => {
    if (a.className == 'doi') {
      var oldHref = a.getAttribute('href')
      var newHref = oldHref.replace('doi.org', 'sci-hub.shop')
      a.setAttribute('href', newHref)
    }
  })
}

document.addEventListener(
  'DOMContentLoaded',
  function() {
    setTimeout(replaceDoiLink, 500)
  },
  false
)
