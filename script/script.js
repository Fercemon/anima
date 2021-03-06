const burgerMenu = document.querySelector(".menu");
const elemHidden = document.querySelectorAll(".hidden");
const windowHeight = window.innerHeight;
const percentage = document.querySelector(".percentage");
const fadeIn = document.querySelector(".fade-in");
const length = percentage.getTotalLength();
const actualLength = length / 100 * 25;
const percentageText = actualLength * 100 / length + "%";
const scrollBtn = document.querySelector(".scroll-down");
const overlayA = document.querySelector(".overlay");

overlayA.addEventListener("click", () => {
    document.querySelector(".overlay").style.height = "0";
    count++;
});


document.body.style.scrollBehavior = "smooth";

// button to scroll to about section
scrollBtn.addEventListener("click", () => {
    window.scrollBy({
        top: windowHeight,
        behavior: 'smooth'
    });
});


// to get the real vh in all devices
window.addEventListener('resize', () => {
    let vh = windowHeight * 0.01;

    document.documentElement.style.setProperty('--vh', `${vh}px`);
});


// to display and not display the overlay for mobile nav
let count = 1;
burgerMenu.addEventListener("click", () => {
    count++;

    if (count % 2 == 0) {
        document.querySelector(".overlay").style.height = "100%";
    } else {
        document.querySelector(".overlay").style.height = "0";
    }
});


// to get the circles chart when are visibles in the viewport
window.addEventListener("scroll", () => {

    for (var i = 0; i < elemHidden.length; i++) {
        let positionFromTop = elemHidden[i].getBoundingClientRect().top;
        if (positionFromTop - windowHeight <= 0) {
            elemHidden[i].className = elemHidden[i].className.replace(
                'hidden',
                'fade-in'
            );
            dashoffset();
            console.log(windowHeight);
        };
    }


});


function dashoffset() {
    percentage.classList.add("dash");
    document.querySelector(".percentage-text").textContent = percentageText;
}



// hold an initial offset for the image (extra margin-top pixels)

let initOffset = 0


window.onscroll = scroll;
let parallax = document.querySelector(".parallax");
let parallaxContainer = document.querySelector("main");



function scroll() {

    /* holds the number of pixels from the top of the page
    that the viewport is currently at (as in, if you scroll
    down ten pixels from the top, this value is 10)*/
    let offset = window.pageYOffset;


    /*set the top margin of the cover image to the offset divided
    by some value. I use 2, which means that for every two pixels
    the main content moves, the image moves one*/
    parallax.style.marginTop = (offset / 2) - initOffset + "px";


    // call the function that we set below
    scrollFunction()
}



// set background on the nav when windows scroll > 100vh

function scrollFunction() {
  if (document.body.scrollTop > windowHeight || document.documentElement.scrollTop > windowHeight) {
    document.querySelector("header").style.background = "#273352";
  } else {
   document.querySelector("header").style.background = "transparent";
  }
}



// slideshow

//open model
document.querySelector(".gallery-btn").addEventListener("click", () => {
    document.querySelector("#model").style.display = "block";
});

//close model
document.querySelector(".close").addEventListener("click", () => {
    document.querySelector("#model").style.display = "none";
});


let slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}


// open and close form for petitions

document.querySelector(".petition-form").addEventListener("click", () => {
    document.querySelector("#model2").style.display = "block";
});

document.querySelector("#close-pet").addEventListener("click", () => {
    document.querySelector("#model2").style.display = "none";
});


// open and close form for newsletters



document.querySelector(".newsletter").addEventListener("click", () => {
    document.querySelector("#model3").style.display = "block";
});

document.querySelector("#close-news").addEventListener("click", () => {
    document.querySelector("#model3").style.display = "none";
});


// open and close form for member



document.querySelector(".member").addEventListener("click", () => {
    document.querySelector("#model4").style.display = "block";
});

document.querySelector("#close-mem").addEventListener("click", () => {
    document.querySelector("#model4").style.display = "none";
});



/*
function setupStuffs() {


    if (window.innerHeight < "100%"){
        parallaxContainer.style.height = window.innerHeight + "px";
        }

    if (parallax.offsetHeight < parallaxContainer.offsetHeight){
      parallaxContainer.style.height = parallax.offsetHeight + "px";
        }


    if (parallax.offsetHeight > window.innerHeight){
        initOffset = coverImg.offsetHeight - window.innerHeight
    }else{
        initOffset = 0
        }
    scroll();
}*/
