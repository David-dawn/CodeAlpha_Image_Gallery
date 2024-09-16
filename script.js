// Get modal elements
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-image');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

// Get all gallery images
const images = document.querySelectorAll('.gallery img');

// Keep track of the current image index
let currentIndex = 0;

// Open modal when clicking on an image
images.forEach((image, index) => {
    image.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImg.src = image.src;
        currentIndex = index; // Update current index
    });
});

// Close modal when clicking on the 'X'
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Navigate to the previous image
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    modalImg.src = images[currentIndex].src;
});

// Navigate to the next image
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    modalImg.src = images[currentIndex].src;
});

// Close modal when clicking anywhere outside the modal image
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
