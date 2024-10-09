function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Add scroll event listener
window.addEventListener('scroll', function () {
    const secondJoinContent = document.querySelector('.second-join-content');

    if (isElementInViewport(secondJoinContent)) {
        secondJoinContent.style.opacity = 1; // Make visible
        secondJoinContent.style.transform = 'translateY(-50px)'; // Reset the transform
        secondJoinContent.style.animation = 'slideInUp 3s linear forwards'; // Play animation
    }
});

// Animation
// Assuming GSAP and ScrollTrigger are loaded
// Make sure to wait until the DOM is fully loaded
// gsap.registerPlugin(ScrollTrigger);

// let videoBear = document.querySelector("#myVideo");
// let duration = 20; // Set the video duration (in seconds) here

// // Function to sync video time to scroll progress
// const updateVideo = (progress) => {
//     let time = progress * duration;
//     // Directly control video with requestAnimationFrame for each frame
//     videoBear.currentTime = time;
// };

// // ScrollTrigger timeline for smoother video control
// gsap.timeline({
//     scrollTrigger: {
//         trigger: ".third-join-section",
//         start: "center center",           // When the section enters the viewport
//         end: "+=5000",              // Control the scroll distance
//         pin: true,                  // Pin the section while the video plays
//         scrub: 0.01,                // Very small scrub value for tight control
//         ease: "none",               // No easing to ensure linear video updates
//         onUpdate: (self) => {
//             // Sync the video with scroll position
//             requestAnimationFrame(() => {
//                 updateVideo(self.progress);
//             });
//         }
//     }
// });

document.addEventListener('mousemove', (e) => {
    const image = document.querySelector('.cursor-image');
    const section = document.querySelector('.third-join-section');

    const { left, top, width, height } = section.getBoundingClientRect();

    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;

    // Calculate the rotation angle (in degrees)
    const angleX = (deltaY / height) * 40; // Adjust the 15 for more/less rotation
    const angleY = (deltaX / width) * -40; // Adjust the -15 for more/less rotation

    // Apply the rotation to the image
    image.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
});



