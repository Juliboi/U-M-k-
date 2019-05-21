const topPoint = window.scrollY;
const navbar = document.querySelector('.navbar');

function showNavbar(e) {
  if (window.scrollY > 90) {
    navbar.classList.add('changeBackground');
  } else {
    navbar.classList.remove('changeBackground');
  }
}


window.addEventListener('scroll', showNavbar);
window.addEventListener('DOMContentLoaded', showNavbar);
