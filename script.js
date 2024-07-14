document.getElementById('mobile-menu').addEventListener('click', function() {
    this.classList.toggle('active');
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
});
