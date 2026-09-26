
const slides = document.querySelectorAll(".hero-slide");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;

function showSlide(index) {

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    dots.forEach((dot) => {
        dot.classList.remove("active");
    });

    slides[index].classList.add("active");
    dots[index].classList.add("active");

    currentSlide = index;
}


/* Automatic Carousel */

function nextSlide() {

    currentSlide++;

    if (currentSlide >= slides.length) {

        currentSlide = 0;

    }

    showSlide(currentSlide);

}


/* প্রতি 4 সেকেন্ডে পরিবর্তন */

setInterval(nextSlide, 4000);


/* Dot click */

dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        showSlide(index);

    });

});

/*about caps section*/

const readMoreBtn = document.getElementById("readMoreBtn");
const moreText = document.querySelector(".more-text");

readMoreBtn.addEventListener("click", function () {

    if (moreText.style.display === "block") {
        moreText.style.display = "none";
        readMoreBtn.textContent = "Read More";
    } else {
        moreText.style.display = "block";
        readMoreBtn.textContent = "Read Less";
    }
});

