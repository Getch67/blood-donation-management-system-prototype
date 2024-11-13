// welcome message
const notification = document.getElementById('welcome-notification');

setTimeout(function () {
  notification.classList.add('show');
}, 1000);

setTimeout(function () {
  notification.classList.remove('show');
}, 6000);

// smooth scroll with lenis
const lenis = new Lenis();

lenis.on('scroll', (e) => {
  // console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// header and navbar interactions
const navLinks = document.querySelectorAll(".nav_links");
navLinks.forEach(navLink => {
  navLink.addEventListener("click", () => {
    navLinks.forEach(navLink => navLink.classList.remove("active-link"));
    navLink.classList.add("active-link");

  })
});

// mobile menu
const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".nav_bar_mobile");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("hidden");
  navbar.classList.toggle("visible");
});
