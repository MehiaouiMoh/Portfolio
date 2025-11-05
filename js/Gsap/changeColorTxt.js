gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
    trigger: "#parcoursPart",
    toggleActions:"play none none none",
    start: "top center",
    markers:false,
    toggleClass: "activeOnText"
});