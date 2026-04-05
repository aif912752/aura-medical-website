// Aura Medical Aesthetics - Main JavaScript

// 0. Font Loading Check - Ensure Thai fonts are loaded
document.addEventListener('DOMContentLoaded', () => {
    // Force font load check
    const fontsLoaded = document.fonts.ready.then(() => {
        document.documentElement.classList.add('fonts-loaded');
        console.log('Fonts loaded successfully');
    });

    // Fallback: Add class after timeout even if fonts aren't fully loaded
    setTimeout(() => {
        document.documentElement.classList.add('fonts-loaded');
    }, 3000);
});

// 1. Navigation Mobile Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Close menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// 2. Navbar Scroll Effect with Enhanced Styling
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 3. Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 4. Hero Text Word-by-Word Reveal
const textToReveal = "Reveal Your Best Skin";
const heroContainer = document.getElementById('hero-text');
const words = textToReveal.split(' ');

words.forEach((word, index) => {
    const mask = document.createElement('span');
    mask.className = 'word-mask';
    mask.innerHTML = `<span class="word" style="animation-delay: ${index * 0.2}s">${word}&nbsp;</span>`;
    heroContainer.appendChild(mask);
});

// 5. Before/After Slider Logic
const slider = document.getElementById('ba-slider');
const afterImg = document.getElementById('after-img');
const divider = document.getElementById('ba-divider');
const labelBefore = document.getElementById('label-before');
const labelAfter = document.getElementById('label-after');

if (slider) {
    slider.addEventListener('input', (e) => {
        const val = e.target.value;
        // Update image clip and divider position
        afterImg.style.clipPath = `inset(0 0 0 ${val}%)`;
        divider.style.left = `${val}%`;

        // Handle label fading
        if (val < 40) {
            labelBefore.style.opacity = '0';
            labelAfter.style.opacity = '1';
        } else if (val > 60) {
            labelBefore.style.opacity = '1';
            labelAfter.style.opacity = '0';
        } else {
            labelBefore.style.opacity = '1';
            labelAfter.style.opacity = '1';
        }
    });
}

// 6. Trust Signals (Staggered Stars on Scroll)
const starContainer = document.getElementById('review-stars');
if (starContainer) {
    const stars = document.querySelectorAll('.star');

    const observerOptions = { threshold: 0.5 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                stars.forEach((star, index) => {
                    setTimeout(() => {
                        star.classList.add('filled');
                    }, index * 200); // Stagger 200ms
                });
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    observer.observe(starContainer);
}

// 7. Multi-step Booking Form
let currentStep = 0;
const track = document.getElementById('form-track');
const progressFill = document.getElementById('form-progress');
const btnNext = document.getElementById('btn-next');
const btnBack = document.getElementById('btn-back');

if (track && btnNext && btnBack) {
    function updateForm() {
        // Translate Track
        track.style.transform = `translateX(-${currentStep * 33.33}%)`;
        // Update Progress
        progressFill.style.width = `${(currentStep + 1) * 33.33}%`;

        // Button States
        if (currentStep === 0) {
            btnBack.style.opacity = '0';
            btnBack.style.pointerEvents = 'none';
        } else {
            btnBack.style.opacity = '1';
            btnBack.style.pointerEvents = 'auto';
        }

        if (currentStep === 2) {
            btnNext.innerText = 'Confirm Booking';
        } else {
            btnNext.innerText = 'Next Step';
        }
    }

    btnNext.addEventListener('click', () => {
        if (currentStep < 2) {
            currentStep++;
            updateForm();
        } else {
            alert('Booking Confirmed! (Mockup)');
        }
    });

    btnBack.addEventListener('click', () => {
        if (currentStep > 0) {
            currentStep--;
            updateForm();
        }
    });
}

// 8. FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        // Close all other items
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
        // Toggle current item
        item.classList.toggle('active');
    });
});

// 9. Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and elements with animation
document.querySelectorAll('.card, .ba-item, .testimonial-card, .pricing-card, .promo-card, .gallery-item, .refreshment-category, .contact-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    scrollObserver.observe(el);
});

// 10. Parallax Effect on Scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-bg-img');
    
    parallaxElements.forEach(element => {
        element.style.transform = `translateY(${scrolled * 0.5}px)`;
    });
});

// 11. Enhanced Button Ripple Effect
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// 12. Add Hover Glow Effect to Cards
document.querySelectorAll('.card, .pricing-card, .promo-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--mouse-x', x + 'px');
        card.style.setProperty('--mouse-y', y + 'px');
    });
});

// 13. Animate Stats on Scroll
const statsItems = document.querySelectorAll('.stat-item');
if (statsItems.length > 0) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumber = entry.target.querySelector('.stat-number');
                if (statNumber && !entry.target.classList.contains('animated')) {
                    entry.target.classList.add('animated');
                    animateCounter(statNumber);
                }
            }
        });
    }, { threshold: 0.5 });
    
    statsItems.forEach(item => statsObserver.observe(item));
}

function animateCounter(element) {
    const target = parseInt(element.textContent.replace(/[^0-9]/g, ''));
    const duration = 2000;
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const counter = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = element.textContent.replace(/[0-9]+/, target);
            clearInterval(counter);
        } else {
            element.textContent = element.textContent.replace(/[0-9]+/, Math.floor(current));
        }
    }, 16);
}

// 14. Add Floating Animation to Service Cards
document.querySelectorAll('.card').forEach((card, index) => {
    card.style.animationDelay = (index * 0.1) + 's';
});

// 15. Smooth Color Transition on Scroll
window.addEventListener('scroll', () => {
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    document.documentElement.style.setProperty('--scroll-percent', scrollPercent + '%');
});

console.log('✨ Aura Medical - All animations loaded successfully!');
