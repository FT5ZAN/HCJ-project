
const slider = document.querySelector("#slider");

// Duplicate the content for seamless looping
const clone = slider.innerHTML;
slider.innerHTML += clone;

// Calculate the total width of all images including gaps
const totalWidth = slider.scrollWidth / 1;

// GSAP Animation for smooth infinite scrolling
gsap.to(slider, {
    x: -totalWidth, // Move slider left by the total width of the original images
    duration: 45, // Adjust duration for scrolling speed
    ease: "none", // Linear motion for smooth continuous scroll
    repeat: -1 // Infinite repeat
});

// humburger menu
 // Hamburger Menu Toggle
 const hamburger = document.querySelector('.hamburger');
 const aline = document.querySelector('.aline');
 hamburger.addEventListener('click', () => {
     aline.classList.toggle('show');
 });

 // Toggle Dropdown for Segment
 const segment = document.querySelector('.segment h4');
 const dropdown = document.querySelector('.segment .dropdown');
 segment.addEventListener('click', (event) => {
     event.stopPropagation(); // Prevent dropdown from hiding
     dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
 });

 // Close Dropdown on Outside Click
 document.addEventListener('click', () => {
     dropdown.style.display = 'none';
 });

 