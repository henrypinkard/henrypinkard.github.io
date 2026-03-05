// ============ Website-specific JS ============
// Injected by update-blog-posts.sh — do not edit in blog/ directly

// Wire nav-bar Contents button to TOC sidebar
(function() {
  var navToggle = document.getElementById('nav-toc-toggle');
  var toc = document.getElementById('TOC');
  var overlay = document.getElementById('toc-overlay');
  if (navToggle && toc) {
    navToggle.addEventListener('click', function() {
      toc.classList.add('open');
      if (overlay) overlay.classList.add('open');
    });
  }
})();

// Show/hide nav bar on scroll direction
(function() {
  var siteNav = document.getElementById('site-nav');
  if (!siteNav) return;
  var lastScrollY = window.scrollY;
  window.addEventListener('scroll', function() {
    var currentScrollY = window.scrollY;
    if (currentScrollY < lastScrollY || currentScrollY < 50) {
      siteNav.style.transform = 'translateY(0)';
    } else {
      siteNav.style.transform = 'translateY(-100%)';
    }
    lastScrollY = currentScrollY;
  });
})();
