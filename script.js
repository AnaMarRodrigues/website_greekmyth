// Esperar o DOM carregar completamente antes de inicializar. para pagina de gods - swiper galeria
window.addEventListener('DOMContentLoaded', () => {
  
  // Inicializar Swiper
  const swiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 70,
    loop: true,
    grabCursor: true,
    mousewheel: {
        forceToAxis: true,
  sensitivity: 0.8,
  releaseOnEdges: true,
    thresholdDelta: 20,
  thresholdTime: 200,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
      init: function() {
        const slides = Array.from(this.slides);
        const title = document.querySelector('.title');
        const midIndex = Math.floor(slides.length / 2);
        
        // Inicialmente escondidas e deslocadas para animação de entrada
        gsap.set(slides, { opacity: 0, y: 20 });
        
        // Ordena os slides do centro para as bordas para a animação escalonada
        const order = slides.map((slide, i) => ({
          slide,
          distance: Math.abs(i - midIndex)
        })).sort((a, b) => b.distance - a.distance);
        
        const tl = gsap.timeline();
        order.forEach((item, i) => {
          // O slide ativo começa com opacidade 1, outros com 0.85
          let targetOpacity = (item.slide === this.slides[this.activeIndex]) ? 1 : 0.85;
          tl.to(item.slide, { 
            opacity: targetOpacity, 
            y: 0, 
            duration: 0.35, 
            ease: "power2.out" 
          }, i * 0.1);
        });
        
        // Animação do título aparece suavemente
        tl.fromTo(title, 
          { opacity: 0, y: -20 }, 
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, 
          "-=0.3"
        );
        
        this.emit('slideChange');
      },
      slideChange: function () {
        const slides = Array.from(this.slides);
        const activeIndex = this.activeIndex;
        
        slides.forEach((slide, index) => {
          const link = slide.querySelector('.card-link');
          if (link) {
            if (index === activeIndex) {
              link.style.pointerEvents = 'auto';
              slide.style.cursor = 'pointer';
              // Só anima opacidade, sem mexer no y
              gsap.to(slide, {
                opacity: 1, 
                duration: 0.3, 
                ease: "power1.out"
              });
            } else {
              link.style.pointerEvents = 'none';
              slide.style.cursor = 'default';
              gsap.to(slide, {
                opacity: 0.5, 
                duration: 0.3, 
                ease: "power1.out"
              });
            }
          }
        });
        
        const activeSlide = this.slides[activeIndex];
        const classes = activeSlide.classList;
        const names = [
          'artemis', 'aphrodite', 'athena', 'hera', 'hermes', 
          'dionysus', 'ares', 'apollo', 'demeter', 'hades', 'hephaestus',
          'zeus', 'persephone', 'poseidon', 'hestia', 'kronos','rhea'
        ];
        
        let name = names.find(n => classes.contains(n)) || '';
        if (name) {
          name = name.charAt(0).toUpperCase() + name.slice(1);
        }
        
        document.querySelector('.title').textContent = name;
      }
    }
  });

  // GSAP footer animation
  gsap.timeline()
    .fromTo('.footerhome .star', 
      { opacity: 0, scale: 0 }, 
      { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" }
    )
    .to('.footerhome .line', {
      scaleX: 1,
      duration: 1,
      ease: "power2.out",
      stagger: 0.15
    });

  // Tooltip "learn more"
  const tooltip = document.createElement('div');
  tooltip.className = 'hover-tooltip';
  tooltip.textContent = 'learn more';
  document.body.appendChild(tooltip);

  document.querySelectorAll('.swiper-slide').forEach(slide => {
    slide.addEventListener('mousemove', e => {
      if (slide.classList.contains('swiper-slide-active')) {
        tooltip.style.opacity = 1;
        tooltip.style.left = `${e.clientX + 10}px`;
        tooltip.style.top = `${e.clientY + 10}px`;
      } else {
        tooltip.style.opacity = 0;
      }
    });
    
    slide.addEventListener('mouseleave', () => {
      tooltip.style.opacity = 0;
    });
  });

});

// Função para abrir página de deus (fora do DOMContentLoaded para ser global)
function openGod(name) {
  window.location.href = `godinfo.html?name=${name}`;
}