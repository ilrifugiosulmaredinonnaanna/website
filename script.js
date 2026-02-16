const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });
}

// Cambia colore navbar allo scroll
window.onscroll = () => {
    const nav = document.querySelector('#navbar');
    if (window.scrollY > 100) {
        nav.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
    } else {
        nav.style.boxShadow = "none";
    }
};

navSlide();

// Camere
const galleries = {
    'ingresso': ['images/ingresso1.jpg', 'images/ingresso2.jpg'],
    'camera1': ['images/camera1.jpg'],
    'camera2': ['images/camera2.jpg', 'images/camera2.2.jpg'],
    'camera3': ['images/camera3.png', 'images/camera3.2.jpg'],
    'bagno': ['images/bagno.jpg', 'images/bagno.2.jpg'],
    'giardino': ['images/giardino1.jpg', 'images/giardino2.jpg', 'images/giardino3.jpg'],
    'balcone': ['images/balcone1.jpg', 'images/balcone2.jpg']
};

let currentGallery = [];
let currentIndex = 0;

function openLightbox(room) {
    currentGallery = galleries[room];
    currentIndex = 0;
    showImage();
    document.getElementById('lightbox').style.display = 'flex';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

function showImage() {
    const img = document.getElementById('lightbox-img');
    img.src = currentGallery[currentIndex];
}

function nextImg() {
    currentIndex = (currentIndex + 1) % currentGallery.length;
    showImage();
}

function prevImg() {
    currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
    showImage();
}