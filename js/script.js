// Navigation bar toggle for mobile view
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    const closeBtn = document.querySelector('.close-btn');

    menuToggle.addEventListener('click', function() {
        nav.classList.add('active');
    });

    closeBtn.addEventListener('click', function() {
        nav.classList.remove('active');
    });

    document.addEventListener('click', function(e) {
        if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
            nav.classList.remove('active');
        }
    });

    // Close menu when clicking on links
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    });
});
// Navbar toggle functionality ends here