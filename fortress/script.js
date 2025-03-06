function toggleMenu() {
    const nav = document.querySelector('.nav-menu');
    nav.classList.toggle('active');
  }

  
  let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex - 1].style.display = "block";  
  dots[slideIndex - 1].className += " active";
  
  setTimeout(showSlides, 5000); // Cambia de imagen cada 5 segundos
}

function changeSlide(n) {
  showSlidesManual(n);
}

function showSlidesManual(n) {
  let i;
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");
  
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex - 1].style.display = "block";  
  dots[slideIndex - 1].className += " active";
}



function toggleMenu() {
  const menu = document.querySelector('.main-menu');
  menu.classList.toggle('show'); // Alternar la clase 'show' para mostrar/ocultar el menú
}

// Cerrar el menú al hacer clic fuera de él
document.addEventListener('click', function(event) {
  const menu = document.querySelector('.main-menu');
  const icon = document.querySelector('.menu-icon');
  
  if (!menu.contains(event.target) && !icon.contains(event.target)) {
      menu.classList.remove('show'); // Cerrar el menú si se hace clic fuera
  }
});





document.addEventListener("DOMContentLoaded", function () {
  // Lazy Loading: Cargar imágenes cuando son visibles
  const images = document.querySelectorAll(".gallery-item img");

  const config = {
    rootMargin: "0px 0px 100px 0px", // Cargar imágenes cuando estén a punto de aparecer en la pantalla
    threshold: 0
  };

  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        let img = entry.target;
        // Verificar si el navegador soporta WebP
        checkWebPSupport(img);
        observer.unobserve(img);
      }
    });
  }, config);

  images.forEach(img => observer.observe(img));

  // Verificar si el navegador soporta WebP y actualizar el src
  function checkWebPSupport(img) {
    const canvas = document.createElement("canvas");
    if (canvas.toDataURL("image/webp").indexOf("data:image/webp") === 0) {
      // Si soporta WebP, cambiar la imagen a WebP
      let imgSrc = img.getAttribute("src");
      if (imgSrc && imgSrc.indexOf(".jpg") !== -1) {
        img.src = imgSrc.replace(".jpg", ".webp"); // Reemplaza JPG por WebP
      }
    } else {
      // Si no soporta WebP, carga la imagen normal (en este caso, JPG)
      let imgSrc = img.getAttribute("src");
      img.src = imgSrc; // No hace nada si no soporta WebP
    }
  }
});
