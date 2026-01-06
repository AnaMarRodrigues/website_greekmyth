
// Esperar o DOM carregar completamente antes de inicializar
window.addEventListener('DOMContentLoaded', () => {

//tirado de gsap.js para pagina index.hyml 

const cards = gsap.utils.toArray(".card-img");
  // Floating animation quando esta carregar a pagina
  gsap.from(cards, {
    y: 30,
    opacity: 0,
    stagger: 0.15,
    duration: 1.5,
    ease: "power2.out"
  });

  gsap.from(".titlehome", {
    y: 20,
    opacity: 0,
    stagger: 0.15,
    duration: 1.5,
    ease: "power2.out"
  });

  
// Animação tipo floating para o titulo//
gsap.to(".titlehome", {
  y: "+=6",
  repeat: -1,
  yoyo: true,
  duration: 1.8,
  ease: "sine.inOut"
});

 /* ou  Floating animation para o título na home
gsap.from(".titlehome", {
    y: -60,           // sobe de cima
    opacity: 0,
    duration: 1.8,
    ease: "power2.out"
  }); */
  

  // Parallax hover baseado no movimento do rato
  document.addEventListener("mousemove", (e) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const offsetX = (e.clientX - centerX) / centerX;
    const offsetY = (e.clientY - centerY) / centerY;

    cards.forEach((card, i) => {
      const floatStrength = 10 + i * 2;
      gsap.to(card, {
        x: offsetX * floatStrength,
        y: offsetY * floatStrength,
        duration: 0.9,
        ease: "power3.out"
      });
    });
  });


gsap.timeline()
.fromTo('.footerhome .star', 
  { opacity: 0, scale: 0 }, 
  { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" }
)
.to('.footerhome .line', {
  scaleX: 1,
  duration: 1,
  ease: "power2.out",
  stagger: 0.15
});
});
