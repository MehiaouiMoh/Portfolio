const contentMain = document.querySelector('.contentMain');
const sliderContainer = contentMain.querySelector('.sliderContainer');

//conteneur de cartes
const slidersContainer = document.querySelector('.slidersContainer');
const cardContainer = slidersContainer.querySelectorAll('.card');
console.log(cardContainer);

const btnNext = slidersContainer.querySelector('.btn-next');
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
        //si l'index est superieur au nombre de cartes, on le remet a 1
        if(indexSlider > longeurCardContainer){
            indexSlider = 0;
        }
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
        //si l'index est inferieur a 1, on le remet au nombre de cartes
        if(indexSlider < 1){
            indexSlider = 1;
            updateButtonsVisibility();
        }
        //on retire la classe active a toutes les cartes
        cardContainer.forEach((card)=>{
            card.classList.remove('active');
        });
        //on ajoute la classe active a la carte correspondante a l'index
        cardContainer[indexSlider-1].classList.add('active');

    });
}

//appel de la fonction
changeNavSlider();