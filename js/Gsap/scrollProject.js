//Recuperation du DOM si il est chargé
document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    const container = document.querySelector(".card-container");
    const cards = container.querySelectorAll(".card");
    const cardArr = gsap.utils.toArray(cards);

    gsap.set(cardArr.slice(1),{
        x: (i) => i * -3,
        y: window.innerHeight,
        rotation: 0,
        zIndex: (i) => cardArr.length,
        autoAlpha: 1,
    });

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".card-container",
            start: "top",
            end: `+=${cardArr.length * 100}%`,
            scrub: 2,
            pin: true,
            pinSpacing: true,
            markers: true,
        }
    });

    cardArr.slice(1).forEach((card,i) => {
        tl.to(card,{
            y: i * 6,
            scale: 1 - (i+1) * 0.01,
            duration: 1,
            ease: "power2.inOut",
        }, i * 0.5);
    });
});
