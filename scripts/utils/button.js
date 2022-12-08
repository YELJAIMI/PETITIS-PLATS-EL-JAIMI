///////////////////////////////////////// BOUTON INGREDIENT /////////////////////////////////////////

const boutonIngredients = document.querySelector('.button-ingredients');
const inputIngredients = document.getElementById('contents-ingredients');
const chevronUp = document.querySelector('.chevron-ingred');

// fait apparaitre l'input-bouton ingrédients
boutonIngredients.addEventListener('click', function(e) {
    e.preventDefault();
    
    inputIngredients.style.display = "block";
    boutonIngredients.style.display = "none";
    
    openTagIngredient();
})

//ferme l'input ingrédients
chevronUp.addEventListener('click', function(e) {
    e.preventDefault();
    inputIngredients.style.display = "none";
    boutonIngredients.style.display = "block";
})


// BOUTON APPAREIL //////////////////////////////////////

const boutonAppareils = document.querySelector('.button-appareils');
const inputAppareils = document.getElementById('content-appareils');
const chevronUpAppareils = document.querySelector('.chevron-app');

// fait apparaitre l'input-bouton appareil
boutonAppareils.addEventListener('click', function(e) {
    e.preventDefault();
    
    inputAppareils.style.display = "block";
    boutonAppareils.style.display = "none";
    openTagAppareil();
})

//ferme l'input ingrédients
chevronUpAppareils.addEventListener('click', function(e) {
    e.preventDefault();
    inputAppareils.style.display = "none";
    boutonAppareils.style.display = "block";
})

// BOUTON USTENSILES /////////////////////////////////////

const boutonUstensiles = document.querySelector('.button-ustensiles');
const inputUstensiles = document.getElementById('content-ustensiles');
const chevronUpUstensiles = document.querySelector('.chevron-ustensil');

// fait apparaitre l'input-bouton appareil
boutonUstensiles.addEventListener('click', function(e) {
    e.preventDefault();
    
    inputUstensiles.style.display = "block";
    boutonUstensiles.style.display = "none";
    openTagUstensiles();
})

//ferme l'input ingrédients
chevronUpUstensiles.addEventListener('click', function(e) {
    e.preventDefault();
    inputUstensiles.style.display = "none";
    boutonUstensiles.style.display = "block";
})

function openTagIngredient() {
    let ingredientElement = document.getElementsByClassName('liste-ingredient');
    for (let i = 0; i < ingredientElement.length; i++) {
        ingredientElement[i].addEventListener('click', function() {
            createTagIngredient();
        })
    }
}
function openTagAppareil() {
    let appareilElement = document.getElementsByClassName('liste-appareil');
    for (let i = 0; i < appareilElement.length; i++) {
        appareilElement[i].addEventListener('click', function() {
            createTagAppareil();
        })
    }
}
function openTagUstensiles() {
    let ustensileElement = document.getElementsByClassName('liste-ustensile');
    for (let i = 0; i < ustensileElement.length; i++) {
        ustensileElement[i].addEventListener('click', function() {
            createtagUstensiles();
        })
    }
}