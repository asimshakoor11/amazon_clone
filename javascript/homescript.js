// side bar open close

let element = document.getElementById("sidebarid");
let element1 = document.getElementById("crossicon");
let element2 = document.getElementById("blacksc");


function close_sidebar() {
  element.classList.remove("sidebar-visible");
  element.classList.add("sidebar-hidden");
  element1.classList.remove("visible");
  element1.classList.add("hidden");
  element2.classList.remove("visible");
  element2.classList.add("hidden");
  console.log("close");
}

function open_sidebar() {
  element.classList.remove("sidebar-hidden");
  element.classList.add("sidebar-visible");
  element1.classList.remove("hidden");
  element1.classList.add("visible");
  element2.classList.remove("hidden");
  element2.classList.add("visible");
  console.log("open");
}

// image sliders
// manual slide
var flag = 0;
var slideIndex = 0;

slideshow(flag);

function controller(x) {
  flag = flag + x;
  slideshow(flag);
}

function slideshow(num){
    let slides = document.getElementsByClassName('slide');

    if(num > slides.length){
        flag = 1;
    }

    if(num < 1){
        flag = slides.length;
    }

    for(let y of slides){
        y.style.display = "none";
    }

    slides[num].style.display = "block";
}

// Auto Slide   if you need auto slide ,remove the commit "//"
showSlides();
function showSlides() {
  var i;
   var slides = document.getElementsByClassName("slide");
   for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
   }
   slideIndex++;
   if (slideIndex > slides.length) { slideIndex = 1 }

   slides[slideIndex - 1].style.display = "block";
   setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// products slide
const leftbtn = document.querySelector(".l-btn");
const rightbtn = document.querySelector(".r-btn");

rightbtn.addEventListener('click', function (event){
  const content = document.querySelector('.product-slide');
  content.scrollLeft += 1100;
  event.preventDefault();
  console.log("ok");
});

leftbtn.addEventListener('click', function (event){
  const conent = document.querySelector('.product-slide');
  conent.scrollLeft -= 1100;
  event.preventDefault();
  console.log("ok");
});

const leftbtn1 = document.querySelector(".l-btn1");
const rightbtn1 = document.querySelector(".r-btn1");

rightbtn1.addEventListener('click', function (event){
  const content = document.querySelector('.product-slide1');
  content.scrollLeft += 1100;
  event.preventDefault();
  console.log("ok");
});

leftbtn1.addEventListener('click', function (event){
  const content = document.querySelector('.product-slide1');
  content.scrollLeft -= 1100;
  event.preventDefault();
  console.log("ok");
});

const leftbtn2 = document.querySelector(".l-btn2");
const rightbtn2 = document.querySelector(".r-btn2");

rightbtn2.addEventListener('click', function (event){
  const content = document.querySelector('.product-slide2');
  content.scrollLeft += 1100;
  event.preventDefault();
  console.log("ok");
});


leftbtn2.addEventListener('click', function (event){
  const content = document.querySelector('.product-slide2');
  content.scrollLeft -= 1100;
  event.preventDefault();
  console.log("ok");
});

const leftbtn3 = document.querySelector(".l-btn3");
const rightbtn3 = document.querySelector(".r-btn3");

rightbtn3.addEventListener('click', function (event){
  const content = document.querySelector('.product-slide3');
  content.scrollLeft += 1100;
  event.preventDefault();
  console.log("ok");
});

leftbtn3.addEventListener('click', function (event){
  const content = document.querySelector('.product-slide3');
  content.scrollLeft -= 1100;
  event.preventDefault();
  console.log("ok");
});

const leftbtn4 = document.querySelector(".l-btn4");
const rightbtn4 = document.querySelector(".r-btn4");

rightbtn4.addEventListener('click', function (event){
  const content = document.querySelector('.product-slide4');
  content.scrollLeft += 1100;
  event.preventDefault();
  console.log("ok");
});

leftbtn4.addEventListener('click', function (event){
  const content = document.querySelector('.product-slide4');
  content.scrollLeft -= 1100;
  event.preventDefault();
  console.log("ok");
});

const leftbtn5 = document.querySelector(".l-btn5");
const rightbtn5 = document.querySelector(".r-btn5");

rightbtn5.addEventListener('click', function (event){
  const content = document.querySelector('.product-slide5');
  content.scrollLeft += 1100;
  event.preventDefault();
  console.log("ok");
});

leftbtn5.addEventListener('click', function (event){
  const content = document.querySelector('.product-slide5');
  content.scrollLeft -= 1100;
  event.preventDefault();
  console.log("ok");
});

const leftbtn6 = document.querySelector(".l-btn6");
const rightbtn6 = document.querySelector(".r-btn6");

rightbtn6.addEventListener('click', function (event){
  const content = document.querySelector('.product-slide6');
  content.scrollLeft += 1100;
  event.preventDefault();
  console.log("ok");
});

leftbtn6.addEventListener('click', function (event){
  const content = document.querySelector('.product-slide6');
  content.scrollLeft -= 1100;
  event.preventDefault();
  console.log("ok");
});

const backtop = document.querySelector(".backtop");

backtop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
})


