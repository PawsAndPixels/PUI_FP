document.addEventListener("DOMContentLoaded", function () {
  // Get the current page URL
  var currentPageUrl = window.location.href;

  // Find the corresponding nav link and add the "active" class
  var navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(function (link) {
    console.log("checking " + link.href + ", " + currentPageUrl);
    if (link.href == currentPageUrl) {
      console.log("FOUND");
      link.classList.add("active");
    }
  });
});
