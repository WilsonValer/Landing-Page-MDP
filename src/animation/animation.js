window.left = ScrollReveal();


const left = ScrollReveal({
  origin: "left",
  distance: '60px',
  duration: 1500,
  delay: 100,
  reset: true
});

left.reveal('.headline', {interval:100});

function hola() {
    let nombre = "Hola script";
    alert(nombre);
  }