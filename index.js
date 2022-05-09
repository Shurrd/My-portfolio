// fixed navbar

const navbar = document.getElementById("nav");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  console.log(scrollHeight);
  console.log(navHeight);
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
});

// section scroll

const sections = document.querySelectorAll(".section");
const navItem = document.querySelectorAll(".nav-item");
let current = "";
window.addEventListener("scroll", function () {
  sections.forEach(function (section) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.getBoundingClientRect().height;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });
});
