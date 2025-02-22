// Navigation
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

// Typing Effect
const typeWriter = () => {
    const text = "Mỗi câu chuyện tình đều đẹp, nhưng câu chuyện của chúng mình là đặc biệt nhất...";
    let i = 0;
    const speed = 100;
    const typingText = document.querySelector('.typing-text');

    function typing() {
        if (i < text.length) {
            typingText.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}

// Scroll Animation
const scrollAnimation = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.timeline-item, .gallery-item, .memory-card');
    hiddenElements.forEach((el) => observer.observe(el));
}

// Smooth Scrolling
const smoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// Gallery Image Modal
const initializeGallery = () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            const modal = document.createElement('div');
            modal.classList.add('modal');
            
            const modalImg = document.createElement('img');
            modalImg.src = img.src;
            
            modal.appendChild(modalImg);
            document.body.appendChild(modal);
            
            modal.addEventListener('click', () => {
                modal.remove();
            });
        });
    });
}

// Parallax Effect
const parallax = () => {
    // Xóa event listener cũ
    window.removeEventListener('scroll', parallaxEffect);
    
    // Thêm effect mới nếu cần
    const parallaxEffect = () => {
        const elements = document.querySelectorAll('.floating-item');
        let scrollPosition = window.pageYOffset;
        
        elements.forEach(element => {
            element.style.transform = `translateY(${scrollPosition * 0.1}px)`;
        });
    };
    
    window.addEventListener('scroll', parallaxEffect);
}

// Hearts Animation
const createHearts = () => {
    const container = document.querySelector('.hero');
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('floating-heart');
        
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 2 + 's';
        
        container.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 300);
}

// Initialize all functions
document.addEventListener('DOMContentLoaded', () => {
    navSlide();
    typeWriter();
    scrollAnimation();
    smoothScroll();
    initializeGallery();
    parallax();
    createHearts();
});

// Add scroll event listener for header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Add loading animation
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.classList.add('loader-hidden');
        loader.addEventListener('transitionend', () => {
            document.body.removeChild(loader);
        });
    }
});
