
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


document.getElementById("blogForm").addEventListener("submit", function (e) {
    e.preventDefault();

    Swal.fire({
        title: '✨ Blog Added!',
        text: 'Your fashion post is now live.',
        icon: 'success',
        confirmButtonText: 'OK',
        confirmButtonColor: '#ff4da6',
        backdrop: `rgba(255, 192, 203, 0.3)`,
        showClass: {
            popup: 'animate__animated animate__zoomIn'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    }).then(() => {
        const modal = bootstrap.Modal.getInstance(document.getElementById('blogModal'));
        modal.hide();

        this.reset();

        location.reload();
    });
});

