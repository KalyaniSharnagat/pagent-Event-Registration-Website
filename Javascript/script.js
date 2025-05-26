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
