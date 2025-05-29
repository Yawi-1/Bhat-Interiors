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
    speed: 1000, 
});

// Scroll to top button functionality
 const scrollToTopBtn = document.getElementById("scrollToTopBtn");
        window.addEventListener("scroll", () => {
          if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add("show");
          } else {
            scrollToTopBtn.classList.remove("show");
          }
        });
      
        scrollToTopBtn.addEventListener("click", () => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });


//Contact form js
  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const form = this;
    const submitBtn = document.getElementById("submit-btn");
    const spinner = document.getElementById("spinner");
    const btnText = document.getElementById("btn-text");

    // Show spinner and hide text
    spinner.style.display = "inline-block";
    btnText.textContent = "Loading...";
    submitBtn.disabled = true; // Disable button

    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
    })
    .then(response => {
      if (response.ok) {
        alert("Message sent successfully!");
        form.reset();
      } else {
        alert("There was a problem submitting the form.");
      }
    })
    .catch(error => {
      alert("Error: " + error.message);
    })
    .finally(() => {
      // Hide spinner and show text again
      spinner.style.display = "none";
      btnText.textContent = "Send";
      submitBtn.disabled = false;
    });
  }); 
    
   // Lightbox functionality
        const galleryItems = document.querySelectorAll('.gallery-item');
        const modal = document.getElementById('imageModal');
        const modalImg = document.getElementById('modalImage');
        const modalTitle = document.getElementById('modalTitle');
        const closeBtn = document.querySelector('.close-btn');
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        
        let currentIndex = 0;
        
        galleryItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                currentIndex = index;
                updateModal();
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        });
        
        function updateModal() {
            const imgSrc = galleryItems[currentIndex].querySelector('img').src;
            const title = galleryItems[currentIndex].querySelector('.overlay-title').textContent;
            
            modalImg.src = imgSrc;
            modalTitle.textContent = title;
        }
        
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
        
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
            updateModal();
        });
        
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % galleryItems.length;
            updateModal();
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });