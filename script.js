// Select hamburger and menu links
const hamburger = document.querySelector('.hamburger');
const menuLinks = document.querySelector('.menu-links');

// Toggle menu visibility on hamburger click
hamburger.addEventListener('click', () => {
    menuLinks.classList.toggle('active');
});

// IntersectionObserver for scroll-triggered animations
const observerOptions = {
    threshold: 0.2, // Trigger when 20% of the element is visible
};

const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Add animation classes when the element enters the viewport
            entry.target.classList.add('animate__fadeIn', 'animate__animated');
            entry.target.classList.remove('hidden');
        } else {
            // Remove animation classes to allow re-triggering on scroll
            entry.target.classList.remove('animate__fadeIn');
            entry.target.classList.add('hidden');
        }
    });
}, observerOptions);

// Select all elements with animation
const animatedElements = document.querySelectorAll('.animate__animated');

// Apply initial hidden state to all elements
animatedElements.forEach((element) => {
    element.classList.add('hidden'); // Initially hide elements
    animationObserver.observe(element);
});
