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

let currentService = 0;
let currentChar = 0;
const serviceText = document.getElementById("service-text");

function typeText() {
  const text = services[currentService];
  serviceText.textContent = text.substring(0, currentChar + 1);
  currentChar++;

  if (currentChar < text.length) {
    setTimeout(typeText, 100); 
  } else {
    setTimeout(() => {
      eraseText();
    }, 2000); 
  }
}

function eraseText() {
  const text = services[currentService];
  serviceText.textContent = text.substring(0, currentChar - 1);
  currentChar--;

  if (currentChar > 0) {
    setTimeout(eraseText, 50); // erasing speed
  } else {
    currentService = (currentService + 1) % services.length;
    setTimeout(typeText, 500);
  }
}

typeText();


// Slider Css
const swiper = new Swiper(".mySwiper", {
  loop: true,
  effect: "fade", 
  fadeEffect: {
    crossFade: true, 
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next", 
    prevEl: ".swiper-button-prev",
  },
    speed: 1000, 
});

    