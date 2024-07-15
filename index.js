var typed = new Typed(".typing", {
  strings: ["MY NAME IS AR KHAR MINN", "I AM A WEB DEVELOPER"],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
});
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
