// const track = document.querySelector(".testimonial-track");
// const cards = document.querySelectorAll(".testimonial-card");

// // প্রথম card clone করে শেষে যোগ করা
// const firstCard = cards[0].cloneNode(true);
// track.appendChild(firstCard);

// const allCards = document.querySelectorAll(".testimonial-card");

// let currentSlide = 0;

// function changeTestimonial() {

//     const cardWidth = allCards[0].getBoundingClientRect().width;
//     const gap = 25;

//     currentSlide++;

//     track.style.transform =
//         `translateX(-${currentSlide * (cardWidth + gap)}px)`;

//     // 4 + 1 দেখানোর পর আবার smoothly 1 + 2 তে ফিরে যাবে
//     if (currentSlide === 4) {

//         setTimeout(() => {

//             track.style.transition = "none";
//             currentSlide = 0;

//             track.style.transform = "translateX(0)";

//             setTimeout(() => {
//                 track.style.transition = "transform 0.8s ease-in-out";
//             }, 50);

//         }, 800);
//     }
// }

// setInterval(changeTestimonial, 2000);

document.addEventListener("DOMContentLoaded", function () {

    const track = document.querySelector(".testimonial-track");
    const cards = document.querySelectorAll(".testimonial-card");

    if (!track || cards.length === 0) {
        console.log("Testimonial not found!");
        return;
    }

    let current = 0;

    function moveSlider() {

        const cardWidth = cards[0].offsetWidth;
        const gap = 25;

        current++;

        // 4 নম্বর card এর পর আবার শুরু
        if (current >= cards.length) {
            current = 0;
        }

        track.style.transform =
            "translateX(-" + (current * (cardWidth + gap)) + "px)";
    }

    // প্রতি 2 সেকেন্ডে 1টা করে card change
    setInterval(moveSlider, 5000);

});