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
// change the services text
const services = [
        "PVC Wall Paneling",
        "Ceiling Wallpaper",
        "Modular Kitchen",
        "Aluminium Partition",
        "Wood Floor",
        "PVC Matting",
        "SSS Decor",
        "SSS Doors",
        "ACP Sheets",
        "All Hardware",
      ];
      let index = 0;
      const serviceText = document.getElementById("service-text");
      setInterval(() => {
        // Fade out
        serviceText.style.opacity = 0;

        setTimeout(() => {
          index = (index + 1) % services.length;
          serviceText.textContent = services[index];

          // Fade in
          serviceText.style.opacity = 1;
        }, 1000); // Wait for fade-out to complete
      }, 2500); 
    //   Gallery Section
    