const track = document.getElementById("carouselTrack");
const cards = document.querySelectorAll(".card");
let currentIndex = 0;


/* কতগুলো card একসাথে দেখা যাবে */
function getVisibleCards() {
    if (window.innerWidth <= 600) {
        return 1;
    }
    if (window.innerWidth <= 1000) {
        return 2;
    }
    return 4;
}

/* Next */
function nextSlide() {
    const visibleCards = getVisibleCards();
    if (currentIndex < cards.length - visibleCards) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    moveCarousel();
}

/* Previous */

function prevSlide() {
    const visibleCards = getVisibleCards();
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = cards.length - visibleCards;
    }
    moveCarousel();
}

/* Move */

function moveCarousel() {
    const cardWidth = cards[0].offsetWidth;
    const gap = 20;
    const move = (cardWidth + gap) * currentIndex;
    track.style.transform =
        `translateX(-${move}px)`;
}


/* Automatic */
setInterval(() => {
    nextSlide();
}, 3000);

/* Resize */

window.addEventListener("resize", () => {
    currentIndex = 0;
    moveCarousel();

});