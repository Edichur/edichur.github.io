/*========== menu icon navbar ==========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*========== swiper ==========*/
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

/*========== scroll sections active link ==========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /*========== sticky navbar ==========*/    
    let header = document.querySelector('.header');

    header.classList.toggle('sticky', window.scrollY > 100);


    /*========== remove menu icon navbar when click navbar link (scroll) ==========*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

/*========== dark light mode ==========*/
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
 
    // Store the current theme in localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
 };

 // Check the stored theme in localStorage when the page loads
window.onload = () => {
    const storedTheme = localStorage.getItem('theme');
 
    if (storedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        darkModeIcon.classList.add('bx-sun');
    } else {
        document.body.classList.remove('dark-mode');
        darkModeIcon.classList.remove('bx-sun');
    }
 };

/*========== scroll reveal ==========*/
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .experiences-container, .portfolio-box, .contact form, .learnings-wrapper, .contact h3', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img, .contact i', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });

let slideClasses = ['slide', 'slide2', 'slide3', 'slide4', 'slide5', 'slide6'];

for (let i = 0; i < slideClasses.length; i++) {
   let slides = document.querySelectorAll('.' + slideClasses[i]);
   let current = 0;
   let slideCount = slides.length;

   // Clone the first set of images and append them to the end of the slider
   for (let j = 0; j < slideCount; j++) {
       let clone = slides[j].cloneNode(true);
       slides[j].parentNode.appendChild(clone);
   }

   function nextSlide() {
       slides[current].style.opacity = 0;
       current = (current != slideCount - 1) ? current + 1 : 0;
       slides[current].style.opacity = 1;
   }

   setInterval(nextSlide, 2000);
}
