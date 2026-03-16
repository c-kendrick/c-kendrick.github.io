document.addEventListener('DOMContentLoaded', () => {
    // Set up the Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            // When the card scrolls into the viewport, add the 'visible' class
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { 
        threshold: 0.15 // Triggers the animation when 15% of the card is visible 
    });

    // Grab all elements with the 'fade-in' class and observe them
    const hiddenElements = document.querySelectorAll('.fade-in');
    hiddenElements.forEach((el) => observer.observe(el));
});

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // This stops watching the card once it appears, locking it in place
                observer.unobserve(entry.target); 
            }
        });
    }, { 
        threshold: 0.15 
    });

    const hiddenElements = document.querySelectorAll('.fade-in');
    hiddenElements.forEach((el) => observer.observe(el));
});