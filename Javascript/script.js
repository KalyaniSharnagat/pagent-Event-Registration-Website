// aboutus page kalyani

document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 1200,
    once: true,
  });
});


// contact page  kalyani
AOS.init({
  once: true,
  duration: 1200
});


const navbarNav = document.getElementById('navbarNav');
const navbarToggler = document.querySelector('.navbar-toggler');

navbarNav.addEventListener('show.bs.collapse', () => {
  navbarNav.style.backgroundColor = '#f8f9fa';
});

navbarNav.addEventListener('hide.bs.collapse', () => {
  navbarNav.style.backgroundColor = 'transparent';
});


document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname.split("/").pop(); // Get the page name from the URL
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(link => {
    const linkPage = link.getAttribute("href").split("/").pop(); // Get the page name from the href attribute
    if (currentPage === linkPage) {
      link.classList.add("active"); // Add active class if the link matches the current page
    }
  });
});