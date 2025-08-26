// header.js — simple client-side include for static sites
(function(){
  'use strict';
  function loadHeader() {
    var xhr = new XMLHttpRequest();
  // use relative path so file:// and simple servers can load it from project root
  xhr.open('GET', 'assets/partials/header.html', true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 300) {
          var container = document.createElement('div');
          container.innerHTML = xhr.responseText;
          var existing = document.querySelector('header');
          if (existing) {
            existing.parentNode.replaceChild(container.firstElementChild, existing);
          } else {
            document.body.insertBefore(container.firstElementChild, document.body.firstChild);
          }
          // Set active link based on current path
          var links = document.querySelectorAll('.main-nav .nav-list a');
          links.forEach(function(a){
            a.classList.remove('active');
            if (a.getAttribute('href') === window.location.pathname.split('/').pop() || a.getAttribute('href') === window.location.pathname) {
              a.classList.add('active');
            }
          });
        } else {
          console.warn('No se pudo cargar header partial:', xhr.status);
        }
      }
    };
    xhr.send();
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadHeader);
  } else {
    loadHeader();
  }
})();
