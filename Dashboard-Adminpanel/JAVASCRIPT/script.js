
const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menuItems.forEach(el => el.classList.remove('active'));
        item.classList.add('active');
    });
});

window.onload = function () {
    const links = document.querySelectorAll('.menu-item a');
    links.forEach(link => {
        if (link.href === window.location.href) {
            link.parentElement.classList.add('active');
        }
    });
};

