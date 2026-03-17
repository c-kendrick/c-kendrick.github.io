// Dynamic Sticky Nav & Conditional Social Links
const navbar = document.getElementById('navbar');
const navSocials = document.getElementById('nav-socials');
const originalSocials = document.querySelector('.social-links');
const navLogo = document.querySelector('.nav-logo');

window.addEventListener('scroll', () => {
    // 1. Handle the navbar drop shadow
    if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // 2. Handle the conditional GitHub/Resume links
    if (originalSocials) {
        // Get the bottom position of the original buttons relative to the viewport
        const socialBottom = originalSocials.getBoundingClientRect().bottom;
        
        // If the bottom of those buttons scrolls up past the 80px buffer (under the navbar)
        if (socialBottom < 80) {
            navSocials.classList.add('is-visible');
            navLogo.classList.add('is-visible');
        } else {
            navSocials.classList.remove('is-visible');
            navLogo.classList.remove('is-visible');
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); 
            }
        });
    }, { 
        threshold: 0.15 
    });

    const hiddenElements = document.querySelectorAll('.fade-in');
    hiddenElements.forEach((el) => observer.observe(el));
});

// Grab all elements that have the 'fade-in' class
const faders = document.querySelectorAll('.fade-in');

// Configure the observer
const appearOptions = {
    threshold: 0.15, 
    rootMargin: "0px 0px -50px 0px" 
};

// Create the observer
const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return; 
        } else {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); 
        }
    });
}, appearOptions);


faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

window.addEventListener('scroll', () => {
    // If scrolled more than 20 pixels, add the shadow
    if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});