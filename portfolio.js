var typed = new Typed(".typing", {
  strings: ["MY NAME IS AR KHAR MINN", "I AM A WEB DEVELOPER"],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
});
document.addEventListener("DOMContentLoaded", function () {
  var navLinks = document.querySelectorAll(".itemBar .nav-link");
  navLinks.forEach(function (navLink) {
    navLink.addEventListener("click", function () {
      this.classList.add("bg-primary", "rounded", "text-white");
      var siblings =
        this.parentElement.parentElement.querySelectorAll(".nav-link");
      siblings.forEach(function (sibling) {
        if (sibling !== navLink) {
          sibling.classList.remove("bg-primary", "rounded", "text-white");
        }
      });
    });
  });

  var parentParagraphs = document.querySelectorAll(".parentBar p");
  parentParagraphs.forEach(function (paragraph) {
    paragraph.addEventListener("click", function () {
      var parentNodeText = this.textContent.trim();
      parentParagraphs.forEach(function (p) {
        p.classList.remove("border-bottom", "border-3", "border-primary");
      });

      this.classList.add("border-bottom", "border-3", "border-primary");

      var clientElements = document.querySelectorAll(".client");
      var adminElements = document.querySelectorAll(".admin");

      if (parentNodeText === "All") {
        clientElements.forEach(function (element) {
          element.classList.remove("d-none");
        });
        adminElements.forEach(function (element) {
          element.classList.remove("d-none");
        });
      } else if (parentNodeText === "Frontend") {
        clientElements.forEach(function (element) {
          element.classList.remove("d-none");
        });
        adminElements.forEach(function (element) {
          element.classList.add("d-none");
        });
      } else if (parentNodeText === "Backend") {
        clientElements.forEach(function (element) {
          element.classList.add("d-none");
        });
        adminElements.forEach(function (element) {
          element.classList.remove("d-none");
        });
      }
    });
  });
});
