const track = document.getElementById("cards");
const cardArr = track.getElementsByClassName("card");

console.log(cardArr);

//animation à appliquer uniquement pour les petits ecrans de 600px et moins
//pour que les cartes restent fixes lors du scroll
//et que l'utilisateur puisse les voir une par une
//GSAP ScrollTrigger est utilisé pour cela
//il faut rendre donc la carte en dessous invisible si elle est en dessous de la carte active
//ceci est fait dans le CSS avec la classe .card:not(:first-child) { visibility: hidden; }
if (window.innerWidth <= 600) {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(cardArr).forEach((card,i) =>{
        ScrollTrigger.create({
            trigger: card,
            start: "top top",
            pin: true,
            pinSpacing: false,
            //modifier la classe de la carte pour la passer en active
            onEnter: () => card.classList.add("active"),
        });
    });
}