function countdown() { // countdown funtion
  var seconds = document.getElementById("seconds").value;

  function tick() { // using setTimeout in the funciton
      seconds = seconds - 1;
      timer.innerHTML = seconds;
      setTimeout(tick, 1000);
  if(seconds == -1){
      alert("times up!");
  }
      }
  tick();
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) { // next slide
  showSlides(slideIndex += n);
}

function currentSlide(n) { // current slide
  showSlides(slideIndex = n);
}

function showSlides(n) { //function to show slides 
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}