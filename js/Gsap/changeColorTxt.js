gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
    trigger: ".titleSection",
    toggleActions:"play none none none",
    start: "top center",
    markers:false,
    toggleClass: "activeOnText"
});