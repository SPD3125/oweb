document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    // Add your form submission logic here
    alert('Form submitted!');
});
// Add this code to the bottom of your script.js file

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize SimpleLightbox for portfolio images
document.addEventListener('DOMContentLoaded', function () {
    const lightbox = new SimpleLightbox('[data-lightbox="portfolio"]');
});
