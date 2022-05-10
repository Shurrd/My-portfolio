// START OF FIXED NAVBAR

const navbar = document.getElementById("nav");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
});

// END OF FIXED NAVBAR

// START OF ACTIVE SECTION

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(function (navLink) {
  navLink.addEventListener("click", function () {
    navLinks.forEach(function (nav) {
      nav.classList.remove("active");
    });
    navLink.classList.add("active");
  });
});

// END OF ACTIVE SECTION

// START OF ACTIVE NAV ON SCROLL

const sections = document.querySelectorAll(".section");

function changeLinkState() {
  let index = sections.length;

  while (--index && window.scrollY + 250 < sections[index].offsetTop) {}

  navLinks.forEach((link) => link.classList.remove("active"));
  navLinks[index].classList.add("active");
}

changeLinkState();
window.addEventListener("scroll", changeLinkState);

// START OF ACTIVE NAV ON SCROLL
