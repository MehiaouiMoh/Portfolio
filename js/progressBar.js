const progressCircle = document.querySelector(".progress-circle");
const number = document.querySelector(".number");

let progressValue = 0;
let targetValue = 80; // ton pourcentage
let speed = 15;

const radius = 70;
const circumference = 2 * Math.PI * radius;

progressCircle.style.strokeDasharray = circumference;
progressCircle.style.strokeDashoffset = circumference;

function animateCircle() {
    progressValue++;
    number.textContent = `${progressValue}%`;

    const offset = circumference - (progressValue / 100) * circumference;
    progressCircle.style.strokeDashoffset = offset;

    if (progressValue < targetValue) {
        requestAnimationFrame(animateCircle);
    }
}

// Animation uniquement quand visible à l’écran
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCircle();
            observer.unobserve(entry.target);
        }
    });
});

observer.observe(progressCircle);
