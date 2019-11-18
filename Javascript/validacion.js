function validaciones (){


}

function imagenes() {

    n=0;
    this[n++]="../imagen/fondo.jpg";
    this[n++]="../imagen/fondo2.jpg";
    this[n++]="../imagen/fondo3.jpg"
    this.N=n;
}

function imagenAleatoria()
{
    var elemento=document.body
    var cantidadImágenes=11
    var aleatorio=Math.floor(Math.random()*cantidadImágenes)
    elemento.innerHTML="<img src=\"Imagen/"+aleatorio+".png\"></img>"

   
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
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