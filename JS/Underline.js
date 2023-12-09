document.addEventListener("DOMContentLoaded", function () {
  // Get the current page URL
  var currentPageUrl = window.location.href;

  // Find the corresponding nav link and add the "active" class
  var navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(function (link) {
    if (link.href === currentPageUrl) {
      link.classList.add("active");
    }
  });
});
