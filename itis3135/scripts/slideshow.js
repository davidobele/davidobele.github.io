const images = [
    "dog.jpg",
    "apple.jpg",
    "vulture.jpg",
    "ice.jpg",
    "doctor.jpg",
    "octopus.jpg",
    "ballon.jpg",
    "envelope.jpg",
    "lion.jpg",
    "elephant.jpg",
];
  
let currentIndex = 0;
const slideshowElement = document.getElementById("slideshow");
  
function updateSlideshow() {
    currentIndex = (currentIndex + 1) % images.length;
    slideshowElement.style.opacity = 0; 
  
    setTimeout(() => {
      slideshowElement.src = images[currentIndex];
      slideshowElement.style.opacity = 1; 
    }, 500); 
}
  
setInterval(updateSlideshow, 3000); 