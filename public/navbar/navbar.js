function loadNavbar() {
    fetch('/navbar/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar').innerHTML = data;
        });
}

document.addEventListener('DOMContentLoaded', loadNavbar);



/*
document.addEventListener("DOMContentLoaded", function () {
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');

    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('active'); // Toggle active class on the menu-toggle itself
        navList.classList.toggle('active'); // Toggle active class on the nav-list
    });
});*/