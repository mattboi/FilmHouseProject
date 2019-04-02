// Require ipcRenderer
"use strict"
const { ipcRenderer } = require('electron');

var slideIndex = 0;
showSlides();
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  // dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 10 seconds
}

function RenderNewMovie(data) {
  // console.log(data)
  // data.map(e => {
  //   console.log(e)
  // })
}

ipcRenderer.on('data-update', (event, data) => {
  console.log(data)
  // for(var i = 0; i < data.length; i++) {
  //   RenderNewMovie(data)
  // }
})
