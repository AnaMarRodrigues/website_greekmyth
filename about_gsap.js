// --- ANIMAÇÕES ABOUT PAGE ---
window.addEventListener('DOMContentLoaded', () => {
    // Carregar cartas aleatórias primeiro
    const availableCards = [
        'images/hermescarta_front.png',
        'images/artemis_front.png',
        'images/arescarta_front.png',
        'images/aphrodite_front.png',
        'images/svg/carta athena.svg',
        'images/carta apollo.png',
        'images/hera_front.png',
        'images/dionisio.png',
        'images/carta zeus.png',
        'images/carta hestia.png',
        'images/carta demeter.png',
        'images/carta persephone.png',
        'images/carta poseidon.png',
         'images/carta kronos.png',
           'images/carta rhea.png',
           'images/carta hefesto.png'
    ];

    function getRandomCards() {
        const shuffled = [...availableCards].sort(() => Math.random() - 0.5);
        return [shuffled[0], shuffled[1]];
    }

    const [leftCardSrc, rightCardSrc] = getRandomCards();
    const leftCard = document.getElementById('leftCard');
    const rightCard = document.getElementById('rightCard');
    
    if (leftCard) leftCard.src = leftCardSrc;
    if (rightCard) rightCard.src = rightCardSrc;

    // Timeline de animações
    const tl = gsap.timeline({
        defaults: { ease: "power3.out" }
    });

    // TODAS AS CARTAS SOBEM JUNTAS DE BAIXO
    tl.fromTo(".side-card.left", 
        {
            opacity: 0,
            y: 150,
            rotation: -15,
            scale: 0.85
        },
        {
            opacity: 1,
            y: 0,
            rotation: -15,
            scale: 1,
            duration: 1.2,
            ease: "back.out(1.4)"
        }
    );

    tl.fromTo(".side-card.right",
        {
            opacity: 0,
            y: 150,
            rotation: 15,
            scale: 0.85
        },
        {
            opacity: 1,
            y: 0,
            rotation: 15,
            scale: 1,
            duration: 1.2,
            ease: "back.out(1.4)"
        },
        "<"
    );

    // WRAPPER SOBE (carta + texto juntos)
    tl.fromTo(".main-card-wrapper",
        {
            opacity: 0,
            y: 150
        },
        {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "back.out(1.4)"
        },
        "<"
    );

    // Floating contínuo nas cartas laterais
    tl.to(".side-card.left", {
        y: -10,
        rotation: -18,
        repeat: -1,
        yoyo: true,
        duration: 2.5,
        ease: "sine.inOut"
    });
    
    tl.to(".side-card.right", {
        y: -8,
        rotation: 18,
        repeat: -1,
        yoyo: true,
        duration: 2.8,
        ease: "sine.inOut"
    }, "<");
});