/* :::::::::::           CREATION TABLEAUX (ingredient,appareil,ustensile)           ::::::::::: */

let ingredientsArray = [];
let appareilArray = [];
let ustensileArray = [];

// recupere tous les ingredients et les envoie dans "ingredientArray"
recipes.forEach((recettes) => {
    recettes.ingredients.forEach((recette) => {
        ingredientsArray.push(recette.ingredient);
    })
})

//console.log(ingredientsArray);
// recupere tous les appareils et les envoie dans "appareilArray"
recipes.forEach((recettes) => {
    appareilArray.push(recettes.appliance);
 
})

//console.log(appareilArray);
// recupere tous les ustensiles et les envoie dans "ustensileArray"
recipes.forEach((recettes) => {
    recettes.ustensils.forEach((recette) => {
        ustensileArray.push(recette);
    })
 
})

//console.log(ustensileArray);
// supprime les doublons  et crée un nouveau tableau
let ingredientsFilter =[...new Set(ingredientsArray)];
//console.log(ingredientsFilter)
let appareilFilter = [...new Set(appareilArray)];
//console.log(appareilFilter)
let ustensileFilter = [...new Set(ustensileArray)];
//console.log(ustensileFilter)


/* :::::::::::::::        CREATION DES LISTES          ::::::::::::: */

const contentIngredients = document.getElementById('content-list-ingredients');
// crée une balise "p" pour chaque INGREDIENT  
function createIngredient(Ing = []){  
    if(Ing.length > 0) {
        Ing.forEach((liste) => {
            const ingredient = document.createElement('p');
            contentIngredients.appendChild(ingredient);
            ingredient.setAttribute("class","liste-ingredient");
            ingredient.textContent = liste;
        })
    }
          ingredientsFilter.forEach((liste) => {
              const ingredient = document.createElement('p');
              contentIngredients.appendChild(ingredient);
              ingredient.setAttribute("class","liste-ingredient");
              ingredient.textContent = liste; 
            })
}
const contentAppareils = document.getElementById('content-list-appareils');
// crée une balise "p" pour chaque APPAREIL
function createAppareil() {
           appareilFilter.forEach((liste) => {
               const appareils = document.createElement('p');
               contentAppareils.appendChild(appareils);
               appareils.setAttribute("class","liste-appareil");
               appareils.textContent = liste;
            })
}


const contentUstensiles = document.getElementById('content-list-ustensiles');
// crée une balise "p" pour chaque USTENSILE  
function createUstensile() {
    ustensileFilter.forEach((liste) => {
        const ustensile = document.createElement('p');
        contentUstensiles.appendChild(ustensile);
        ustensile.setAttribute("class","liste-ustensile");
        ustensile.textContent = liste;
    })
}    

/*   :::::::::::::::           CREATION DES TAGS ET FILTRE         ::::::::::::::  */

// TAG INGREDIENT //

// selectionne la div qui va contenir les tags
const tag = document.querySelector('.tags');

// Crée un tag quand on clique sur un ingredient de la liste
const allIngredients = document.getElementsByClassName('liste-ingredient');
//const buttonIngred = document.getElementById('contents-ingredients');

function createTagIngredient() {  
    for (let i = 0; i < allIngredients.length; i++) {  

        allIngredients[i].addEventListener('click' , function(e) {
            e.preventDefault();
            const tagIngredients = document.createElement('div');
            tag.appendChild(tagIngredients);
            tagIngredients.setAttribute("class","tag-ingredient ");
       
                   const tagText = document.createElement('p');
                   tagIngredients.appendChild(tagText);
                   tagText.setAttribute("class","tag-text");
                   tagText.textContent = allIngredients[i].innerHTML;
       
                   const close = document.createElement('img');
                   tagIngredients.appendChild(close);
                   close.setAttribute("class","close-ingred");
                   close.setAttribute("src","icons/croix.svg");

                   // efface liste
                   close.addEventListener('click', function(e) {
                      e.preventDefault;
                      tagIngredients.remove();
                    });
                
            // referme l'INPUT du menu déroulant
            inputIngredients.style.display = "none";
            boutonIngredients.style.display = "block";

            // appel la fonction qui trie les recettes par TAG
            filterByTags(recipes);    
            // quand on ferme un tag 
            close.addEventListener('click', function() {
                filterCloseTag();
              
            });                   
               
        })
    } 
} 


      // TAG APPAREIL //

// Crée un tag quand on clique sur un appareil de la liste
function createTagAppareil() {
    const allAppareils = document.getElementsByClassName('liste-appareil');
    //const buttonAppareil = document.getElementsByClassName('button-appareils');
 
   for (let i = 0; i < allAppareils.length; i++) {
       allAppareils[i].addEventListener('click' , function(e) {
              e.preventDefault();
      
              const tagAppareils = document.createElement('p');
              tag.appendChild(tagAppareils);
              tagAppareils.setAttribute("class","tag-appareil");
       
                   const tagText = document.createElement('span');
                   tagAppareils.appendChild(tagText);
                   tagText.setAttribute("class","tag-text-app");
                   tagText.textContent = allAppareils[i].innerHTML;
       
       
                   const close = document.createElement('img');
                   tagAppareils.appendChild(close);
                   close.setAttribute("class","close-app");
                   close.setAttribute("src","icons/croix.svg");
       
                   close.addEventListener('click', function(e) {
                    e.preventDefault;
                    tagAppareils.remove();
                }) 
            inputAppareils.style.display = "none";
            boutonAppareils.style.display = "block";
    
            filterByTags(recipes);
       
            // quand on ferme un tag 
            close.addEventListener('click', function() {
                filterCloseTag();
            }); 
        })
    } 
}

      // TAG USTENSILE //

// Crée un tag quand on clique sur un ustensile de la liste
function createtagUstensiles() {
    const allUstensiles = document.getElementsByClassName('liste-ustensile');
    
   for (let i = 0; i < allUstensiles.length; i++) {
       allUstensiles[i].addEventListener('click' , function(e) {
            e.preventDefault();
       
            const tagUstensiles = document.createElement('p');
            tag.appendChild(tagUstensiles);
            tagUstensiles.setAttribute("class","tag-ustensile");
       
                const tagText = document.createElement('span');
                tagUstensiles.appendChild(tagText);
                tagText.setAttribute("class","tag-text-ust");
                tagText.textContent = allUstensiles[i].innerHTML;
       
                const close = document.createElement('img');
                tagUstensiles.appendChild(close);
                close.setAttribute("class","close-ust");
                close.setAttribute("src","icons/croix.svg");
       
                close.addEventListener('click', function(e) {
                    e.preventDefault;
                    tagUstensiles.remove();
                })

            inputUstensiles.style.display = "none";
            boutonUstensiles.style.display = "block"; 
                 
            filterByTags(recipes);

            // quand on ferme un tag 
            close.addEventListener('click', function() {
                 filterCloseTag();
            });
       
       })
   } 
}

// a la fermeture d'un tag , actualise la page
function filterCloseTag () {  
    filterByTags(recipes);  
}

// recherche une correspondance dans le titre des recettes
function filterTitle(recette) { 
    let title = recette.name;
    return title.toLocaleLowerCase().includes(mainBar.value.toLocaleLowerCase());
}

// recherche une correspondance dans la description
function filterDescription(recette) { 
    let description = recette.description;
    return description.toLocaleLowerCase().includes(mainBar.value.toLocaleLowerCase());       
}

function filterIngredient(recette) {
    let result = false;
    recette.ingredients.forEach((liste) => {
        let ingredient = liste.ingredient;
        result = ingredient.toLocaleLowerCase().includes(mainBar.value.toLocaleLowerCase());
        if (result === true) {
            return true;
        }
    })
    return result;
}


// recherche dans le titre,les ingredients,la description une correspondance avec la saisie dans la barre de recherche
function search(recipes) {
    let resultat = [];
    
    if (mainBar.value.length > 2){
        recipes.forEach((recette) => {
            if (filterTitle(recette) ||filterIngredient(recette) || filterDescription(recette)) {
                resultat.push(recette);
            }
        })  
    }
    if (mainBar.value.length < 3) {
        return recipes;
    }
    if (resultat.length === 0) {
        messageError();  
    }

    
    return resultat;
}

/*       ::::::::::::::   TRIE DES LISTES : Ingredients , Appareils , Ustensiles   ::::::::::::       */

// INGREDIENTS //

// sélectionne l'input du bouton ingredients
const inputIngredient = document.getElementById('inputIngredient');

inputIngredient.addEventListener('keyup',function() {
    
    let resultat = search(recipes);
    let liste = [];
    //récupere les ingredients affichés et l'envoi dans le tableau LISTE
    resultat.forEach(recette => {
        let ingredients = recette.ingredients;
        for(let list of ingredients) {
            liste.push(list.ingredient);
        }
    })
    // récupére la valeur de l'input
    const Search = inputIngredient.value;

    // filtre le tableau LISTE et récupere les ingredients correspondant à la saisie sans les doublons
    const resultsearch = Array.from(new Set(liste)).filter(ingredient => 
        ingredient.toLocaleLowerCase().includes(Search.toLocaleLowerCase()));
    

    // on vide la liste d'ingrédient 
    contentIngredients.innerHTML = "";

    // on crée une balise pour chaque résultat
    resultsearch.forEach(resultList => {

        const ingredient = document.createElement('p');
        contentIngredients.appendChild(ingredient);
        ingredient.setAttribute("class","liste-ingredient");
        ingredient.innerHTML = resultList;   
    })
    createTagIngredient();
   
})

        // APPAREILS //

// sélectionne l'input du bouton appareils
const inputAppareil = document.getElementById('inputAppareil');


inputAppareil.addEventListener('keyup',function() {
    let resultat = search(recipes);
    let liste = [];
    //récupere les appareils affichés et l'envoi dans le tableau LISTE
    resultat.forEach(recette => {
        liste.push(recette.appliance);    
    })
    // récupére la valeur de l'input
    const Search = inputAppareil.value;
    // filtre le tableau LISTE et récupere les appareils correspondant à la saisie sans les doublons
    const resultsearch = Array.from(new Set(liste)).filter(appareil => appareil.toLocaleLowerCase().includes(Search.toLocaleLowerCase()));
    // on vide la liste d'appareil dans la page
    contentAppareils.innerHTML = ""; 
    // on crée une balise pour chaque résultat
    resultsearch.forEach(resultList => {
            
        const appareil = document.createElement('p');
        contentAppareils.appendChild(appareil);
        appareil.setAttribute("class","liste-appareil");
        appareil.innerHTML = resultList;    
    })   
    createTagAppareil();
  
})

         // USTENSILES //

// sélectionne l'input du bouton ingredients
const inputUstensile = document.getElementById('inputUstensile');

inputUstensile.addEventListener('keyup',function() {
    let resultat = search(recipes);
    let liste = [];
    resultat.forEach(recette => {
        let ustensils = recette.ustensils;
        ustensils.forEach(ustensiles => {
            liste.push(ustensiles);    
        })
    }) 
    // récupére la valeur de l'input
    const Search = inputUstensile.value;

    // filtre le tableau ingredient et récupere les ingredients correspondant à la saisie
    const resultsearch = Array.from(new Set(liste)).filter(ustensile => ustensile.toLocaleLowerCase().includes(Search.toLocaleLowerCase()));

    // on vide la liste d'ingrédient dans la page
    contentUstensiles.innerHTML = "";
     console.log(resultsearch);
    // on crée une balise pour chaque résultat
    resultsearch.forEach(resultList => {

        const ustensile = document.createElement('p');
        contentUstensiles.appendChild(ustensile);
        ustensile.setAttribute("class","liste-ustensile");
        ustensile.innerHTML = resultList;    
    })
    createtagUstensiles();   
});