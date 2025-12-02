const contentMain = document.querySelector('.contentMain');
const sliderContainer = contentMain.querySelector('.sliderContainer');

//conteneur de cartes
const slidersContainer = document.querySelector('.slidersContainer');
const cardContainer = slidersContainer.querySelectorAll('.card');
console.log(cardContainer);

const btnNext = slidersContainer.querySelector('.next');
const btnPrev = slidersContainer.querySelector('.previous');


//incrementation de l'index des sliders
let indexSlider = 0;

//longeur du carContainer
let longeurCardContainer = slidersContainer.querySelector('.cardContainer').children.length;


function updateButtonsVisibility() {
    // Si on est à la première slide
    if (indexSlider === 0) {
        btnPrev.style.display = 'none';
    } else {
        btnPrev.style.display = 'flex';
    }

    // Si on est à la dernière slide
    if (indexSlider === longeurCardContainer - 1) {
        btnNext.style.display = 'none';
    } else {
        btnNext.style.display = 'flex';
    }
}

//fonction pour naviger dans le slider
function changeNavSlider(){

    // init → cacher le précédent au début
    updateButtonsVisibility();
    
    //ajout d'un evenement au clic sur le bouton next
    btnNext.addEventListener('click', ()=>{
        indexSlider = indexSlider+1;
        
        //on retire la classe active a toutes les cartes
        cardContainer.forEach((card)=>{
            card.classList.remove('active');
        });
        //on ajoute la classe active a la carte correspondante a l'index
        cardContainer[indexSlider].classList.add('active');

        updateButtonsVisibility();

    });
    
    //ajout d'un evenement au clic sur le bouton previous
    btnPrev.addEventListener('click', ()=>{
        indexSlider--;
        //on retire la classe active a toutes les cartes
        cardContainer.forEach((card)=>{
            card.classList.remove('active');
        });
        //on ajoute la classe active a la carte correspondante a l'index
        cardContainer[indexSlider].classList.add('active');

        updateButtonsVisibility();

    });
}

//appel de la fonction
changeNavSlider();