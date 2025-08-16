// JavaScript to handle the popup
document.getElementById("higherClasses").onclick = function (event) {
    event.preventDefault(); // Prevent the default link behavior
    document.getElementById("popup").style.display = "block"; // Show the popup
};

function closePopup() {
    document.getElementById("popup").style.display = "none"; // Hide the popup
}

// Close the popup when clicking outside of it
window.onclick = function (event) {
    const popup = document.getElementById("popup");
    if (event.target === popup) {
        popup.style.display = "none";
    }
};
let images = [
    'images/IMG-20241216-WA0003_enhanced.jpg.png',  // Replace with your image paths
    'images/IMG-20241214-WA0099_enhanced.jpg.png',
    'images/IMG-20241216-WA0004_enhanced.jpg.png'
];

let currentIndex = 0;

function changeHeroImage() {
    currentIndex = (currentIndex + 1) % images.length; // Loop through images
    document.getElementById('heroBackground').style.backgroundImage = `url(${images[currentIndex]})`;
}

// Change the hero image every 5 seconds
setInterval(changeHeroImage, 2000);

document.addEventListener("DOMContentLoaded", () => {
    // Hamburger Menu Toggle for mobile view
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".menu");

    hamburger.addEventListener("click", () => {
        menu.classList.toggle("show");
    });
});
const image = document.querySelectorAll('.gallery-container img');
let current = 0;
let slideInterval = setInterval(nextImage, 3000); // Auto-slide every 5 seconds

function showImage(index) {
    image.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
}

function nextImage() {
    current = (current + 1) % image.length;
    showImage(current);
}

function prevImage() {
    current = (current - 1 + image.length) % image.length;
    showImage(current);
}

function resetTimer() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextImage, 3000);
}

// Reset timer when user clicks navigation arrows
document.querySelector('.arrow-left').addEventListener('click', () => {
    prevImage();
    resetTimer();
});

document.querySelector('.arrow-right').addEventListener('click', () => {
    nextImage();
    resetTimer();
});
