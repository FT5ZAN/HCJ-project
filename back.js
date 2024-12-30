var tl =gsap.timeline();
tl
.to(".fs",{
    height:0,
    duration:5,
    ease:"expo.inOut"
})
function breakthetext() {
    var h1 = document.querySelector("h1"); // Select the <h1> element
    var h1Text = h1.textContent;           // Get the text content of <h1>
    var split = h1Text.split("");          // Split the text into individual letters
    var clutter = "";                      // Initialize a string to hold HTML content

    // Loop through each character and wrap it in a <span>
    split.forEach(function (elem) {
        clutter += `<span>${elem}</span>`;
    });

    // Replace the <h1> content with the wrapped characters
    h1.innerHTML = clutter;
}

breakthetext(); // Call the function to prepare the text

// Animate each <span> element inside <h1>
gsap.from("h1 span", {
    y: -200,               // Start 100px away horizontally
    opacity: 0,           // Start fully transparent
    duration: 1,          // Animation duration
    stagger: 0.05,        // Delay between animations for each span
    ease: "power2.out",   // Smooth easing
});

var nav = gsap.timeline()
nav.from(".loader h2",{
    opacity:0,
    duration:1.5,
    ease:"expo.inOut",
    delay:3,
    y:30
})

// nav.from(".loader h4",{
//     opacity:0,
//     duration:1.5,
//     ease:"expo.inOut",
//     // delay:,
//     x:20,
//     stagger:0.2
// })
// nav.from(" .loader input",{
//     opacity:0,
//     duration:1,
//     ease:"expo.inOut",
//     // delay:,
//     y:20,
//     // stagger:0.2
// })
// nav.from(" .loader .search i",{
//     opacity:0,
//     duration:0.5,
//     ease:"expo.inOut",
//     // delay:,
//     y:-20,
//     // stagger:0.2
// })
        // Select elements
        var main = document.querySelector("#main");
        var courcer = document.querySelector("#courcer");

        // Debug: Check if elements exist
        if (!main || !courcer) {
            console.error("Element not found. Check your HTML structure.");
        } else {
            // Event listener for mouse movement
            main.addEventListener("mousemove", function (dets) {
                gsap.to(courcer, {
                    x: dets.clientX,
                    y: dets.clientY,
                    duration: 0.1, // Smooth animation
                    ease: "power2.inOut"
                });
            });
            console.log("Script loaded successfully. Move the mouse to see the animation.");
        }
        
        function playVideo() {
            const video = document.querySelector('.video');
            if (video.paused) {
                video.play();
                // Remove click listener after video starts playing
                document.getElementById('videoContainer').style.cursor = "default";
                document.getElementById('videoContainer').onclick = null;
            }
        }





var opening = gsap.timeline();

// First animation
opening.from(".content h1", {
    opacity: 0,
    duration: 2,
    delay: 2.5,
    ease: "expo.inOut",
    y: -300
})


.to(".content h1", {
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    y: 300
}, "+=4"); // "+=1" means start this animation 1 second after the previous one ends

// second animation
opening.from(".content h2", {
    opacity: 0,
    duration: 1,
    ease: "expo.inOut",
    y: -300
})


.to(".content h2", {
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    y: 300
}, "+=3.5");

// third animation
opening.from(".content h3", {
    opacity: 0,
    duration: 1,
    ease: "expo.inOut",
    y: -300
})


.to(".content h3", {
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    y: 300
}, "+=8.5");

// fourth animation

opening.from(".content h4", {
    opacity: 0,
    duration: 1,
    delay: 2.5,
    ease: "expo.inOut",
    y: -300
})


.to(".content h4", {
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    y: 300
}, "+=4.5");

// fifth animation
opening.from(".content h5", {
    opacity: 0,
    duration: 1,
    // delay: 2.5,
    ease: "expo.inOut",
    y: -300
})


.to(".content h5", {
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    y: 300
}, "+=5");

// sixth animation
opening.from(".content h6", {
    opacity: 0,
    duration: 1,
    delay: 1,
    ease: "expo.inOut",
    y: -300
})


.to(".content h6", {
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    y: 300
}, "+=5");

// seventh animation
opening.from(".content h7", {
    opacity: 0,
    duration: 1,
    delay: 1,
    ease: "expo.inOut",
    // y: -300
    // stagger:2
})


.to(".content h7", {
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    // y: 300
}, "+=5");

// eighth animation
opening.from(".content h8", {
    opacity: 0,
    duration: 1,
    delay: 1,
    ease: "expo.inOut",
    y: -300
})


.to(".content h8", {
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    y: 300
}, "+=4");

// nine animation
opening.from(".content h9", {
    opacity: 0,
    duration: 1,
    // delay: -1,
    ease: "expo.inOut",
    y: -300
})


.to(".content h9", {
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    y: 300
}, "+=1.8");

// ten animation
opening.from(".content h10", {
    opacity: 0,
    duration: 1,
    // delay: -1,
    ease: "expo.inOut",
    y: -300
})


.to(".content 10", {
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    y: 300
}, "+=1.8");


