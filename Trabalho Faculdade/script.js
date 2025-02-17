document.querySelector(".menu-toggle").addEventListener("click", function() {
    document.querySelector(".nav-links").classList.toggle("active");
});

// Carrossel simples
let index = 0;
const images = document.querySelectorAll(".carousel-images img");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

function updateCarousel() {
    images.forEach(img => img.style.display = "none");
    images[index].style.display = "block";
}

prev.addEventListener("click", function() {
    index = index === 0 ? images.length - 1 : index - 1;
    updateCarousel();
});

next.addEventListener("click", function() {
    index = (index + 1) % images.length;
    updateCarousel();
});

updateCarousel();
