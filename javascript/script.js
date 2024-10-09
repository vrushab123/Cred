function toggleMenu() {
    const menuOverlay = document.querySelector('.menu-overlay');
    menuOverlay.classList.toggle('menu-open');
}

// Close Menu if clicking outside of it
window.addEventListener('click', function (event) {
    const menuOverlay = document.querySelector('.menu-overlay');
    const hamburger = document.querySelector('.hamburger');
    if (menuOverlay.classList.contains('menu-open') && !menuOverlay.contains(event.target) && !hamburger.contains(event.target)) {
        toggleMenu(); // Close the menu
    }
});

// Get the scroll effect section and text
const scrollEffectSection = document.querySelector('.scroll-effect');
const scrollText = document.querySelector('.scroll-text');

// Function to handle scroll events
function handleScroll() {
    const sectionTop = scrollEffectSection.getBoundingClientRect().top;
    const sectionHeight = scrollEffectSection.offsetHeight;

    // Check if the section is in the viewport
    if (sectionTop < window.innerHeight && sectionTop + sectionHeight > 0) {
        // If in viewport, add visible class
        scrollEffectSection.classList.add('visible');
    } else {
        // If not in viewport, remove visible class
        scrollEffectSection.classList.remove('visible');
    }
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

const video = document.querySelector('.hero-video');

// Set the playback rate (1 is normal speed, 0.5 is half speed, etc.)
//video.playbackRate = 0.5;  Adjust this value to make the video slower or faster

// Select elements
const cursor = document.querySelector(".cursor");
const follower = document.querySelector(".cursor-follower");
// const scrollEffectSection = document.querySelector(".scroll-effect");
// Handle glow effect for texts

// document.addEventListener('mousemove', (e) => {
//     cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
//     follower.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
// });

const scrollItems = document.querySelectorAll('.scroll-item');

document.addEventListener('mousemove', (event) => {
    const cursorX = event.clientX;
    const cursorY = event.clientY;

    scrollItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        const itemX = rect.left + rect.width / 2; // Center of the item
        const itemY = rect.top + rect.height / 2; // Center of the item
        const distance = Math.sqrt((cursorX - itemX) ** 2 + (cursorY - itemY) ** 2);

        if (distance < 10) { // Check if within 10 pixels of the item
            item.classList.add('glow'); // Add the glow class
            item.querySelector('::after').style.opacity = 1; // Show the glow
        } else {
            item.classList.remove('glow');
            item.querySelector('::after').style.opacity = 0; // Hide the glow
        }
    });
});

scrollItems.forEach(item => {
    // item.addEventListener('mouseover', () => {
    //     item.classList.add('glow');
    // });

    // item.addEventListener('mouseout', () => {
    //     item.classList.remove('glow');
    // });

    // Ripple effect on click for mobile
    item.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent  default behaviour


        const ripple = document.createElement('span');
        const rect = item.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        ripple.classList.add('ripple');

        item.appendChild(ripple);
        setTimeout(() => {
            ripple.remove();
        }, 600); // Match duration of ripple animation
    });
});

function moveCursor(x, y) {
    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;
    follower.style.left = `${x}px`;
    follower.style.top = `${y}px`;
}

document.addEventListener("mousemove", (e) => {
    const rect = scrollEffectSection.getBoundingClientRect();

    // Check if the cursor is within the scroll-effect section
    if (
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom &&
        e.clientX >= rect.left &&
        e.clientX <= rect.right
    ) {
        moveCursor(e.pageX, e.pageY); // Use pageX and pageY for accurate tracking
        cursor.style.opacity = 1;
        follower.style.opacity = 1;
    } else {
        // cursor.style.opacity = 0;
        follower.style.opacity = 0;
    }
});

// Ripple effect for mobile with correct alignment
document.addEventListener("touchstart", (e) => {
    const touch = e.touches[0];
    const rect = scrollEffectSection.getBoundingClientRect();

    // Ensure ripple effect only happens in the scroll-effect section
    if (
        touch.clientY >= rect.top &&
        touch.clientY <= rect.bottom &&
        touch.clientX >= rect.left &&
        touch.clientX <= rect.right
    ) {
        let ripple = document.createElement('div');
        ripple.classList.add('ripple');
        document.body.appendChild(ripple);
        ripple.style.left = `${touch.pageX}px`;  // Use pageX for proper placement
        ripple.style.top = `${touch.pageY}px`;  // Use pageY for proper placement

        setTimeout(() => {
            ripple.remove();
        }, 600);  // Remove ripple after the animation
    }
});

//HOVERING CARD EFFECT
document.addEventListener('DOMContentLoaded', () => {
    const cardWrapper = document.getElementById('cardWrapper');
    let isFlipped = false;

    cardWrapper.addEventListener('click', () => {
        const card = cardWrapper.querySelector('.card');
        if (isFlipped) {
            card.style.transform = 'rotateY(0deg)';
        } else {
            card.style.transform = 'rotateY(180deg)';
        }
        isFlipped = !isFlipped; // Toggle the flip state
    });
});

// Carousel section
var swiper = new Swiper('.swiper-container', {
    loop: true,               // Infinite loop
    slidesPerView: 1,          // Show one slide at a time
    spaceBetween: 30,          // Space between slides
    autoplay: {
        delay: 1000,           // Slides move every 2 seconds
        disableOnInteraction: false, // Autoplay won't stop on user interaction
    },
    speed: 1000,               // Slide transition speed (1 second)
    pagination: {
        el: '.swiper-pagination',
        clickable: true,       // Make pagination dots clickable
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 2,  // Show 2 slides on tablet
        },
        1024: {
            slidesPerView: 3,  // Show 3 slides on desktop
        }
    }
});