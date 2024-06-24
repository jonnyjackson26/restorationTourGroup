function loadNavbar() {
    fetch('/navbar/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar').innerHTML = data;
        });
}

document.addEventListener('DOMContentLoaded', loadNavbar);
