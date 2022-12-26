const slides = document.querySelectorAll(".slides");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

slides.forEach(function(slide, index){
    slide.style.left = `${index * 100}%`;
});