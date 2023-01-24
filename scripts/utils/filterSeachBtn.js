// crée un article  pour chaque correspondance entre le tag ingredient et les recettes//
function filterByTags(recipes) {
    
   // récupère le résultat de la recherche principale
   let resultat = search(recipes);
   // récupère les ingredients,appareils des recettes afficher
   
   const listeIngredients = [];
   const listeAppareils = [];
   const listeUstensiles = [];
   // sélectionne les tags affichés
   let ingredientTag = Array.from(document.getElementsByClassName('tag-ingredient'));
   let appareilTag = Array.from(document.getElementsByClassName('tag-appareil'));
   let ustensileTag = Array.from(document.getElementsByClassName('tag-ustensile'));
   
   if(ingredientTag.length > 0) {
       ingredientTag.forEach(valueTag => {
        //console.log(valueTag.innerText)
                   //suppression de l'ingredient dans le tableau
                    //  const result = listeIngredients.filter((ingredientTag) => ingredientTag !== valueTag.innerText);
                    //  console.log(result);
                    console.log(ingredientsFilter);
                    let Ing = ingredientsFilter.filter((ingredientsFilter) => ingredientsFilter !== valueTag.innerText);
                    console.log(Ing);
           let resultDisplay = [];
            //console.log(resultDisplay);
           resultat.forEach(recette => {
           // console.log(recette.ingredients);
               recette.ingredients.forEach((liste) => {
                  let ingredient = liste.ingredient;
                  //console.log("ingredient", ingredient)
                  let resultIngredient = ingredient.toLocaleLowerCase().includes(valueTag.innerText.toLocaleLowerCase());
                  if(resultIngredient === true) {
                      resultDisplay.push(recette); 
                    }
                })
            })
            resultDisplay.filter((ingredientTag) => ingredientTag !== valueTag.innerText);
           resultat = resultDisplay;  
        })

    }
    
   if(appareilTag.length > 0) {
    appareilTag.forEach(valueTag => {
        //console.log(valueTag.innerText)
        const app = appareilFilter.filter((appareilTag) => appareilTag !== valueTag.innerText);
        console.log(app);
        let resultDisplay = [];
        resultat.forEach(recette => {
            let appareil =  recette.appliance
            let resultAppareil = appareil.includes(valueTag.innerText);
            if(resultAppareil === true) {
                  resultDisplay.push(recette);
                }
            })
            resultat = resultDisplay;
        })
    }

   if (ustensileTag.length > 0) {
       ustensileTag.forEach(valueTag => {
           let resultDisplay = [];
            resultat.forEach(recette => {   
              let ustensile =  recette.ustensils
              let resultUstensile = ustensile.includes(valueTag.innerText);
              if(resultUstensile === true) {
                  resultDisplay.push(recette);
                }
            })
            resultat = resultDisplay;
        })   
    }
    console.log(resultat);
    // efface tous les articles contenus dans le "MAIN"
    document.getElementById('main').innerHTML = "";
    resultat.forEach(recette => {
        articleRecipes(recette);
        arrayRecette(recette,listeIngredients,listeAppareils,listeUstensiles); 
        createTagIngredient();
    })

   // met a jour la liste des ingredients
   let ingredientsSansDoublons = [...new Set(listeIngredients)];
   document.getElementById('content-list-ingredients').innerHTML = "";
   ingredientsSansDoublons.forEach(ingredient => {
       listeIngredient(ingredient);
    })
   
   // met à jour la liste d'appareil
   let appareilSansDoublons = [...new Set(listeAppareils)];
   document.getElementById('content-list-appareils').innerHTML = "";
   appareilSansDoublons.forEach(appareils => {
       listeAppareil(appareils)
   })
   
   //met à jour la liste d'ustensiles
   let ustensilesSansDoublons = [...new Set(listeUstensiles)];
   document.getElementById('content-list-ustensiles').innerHTML = "";
   ustensilesSansDoublons.forEach(ustensile => {
      listeUstensile(ustensile);
   }) 
   if (resultat.length === 0) {
     messageError();  
    }
}

    // met à jour les listes d'ingredient,d'appareil,d'ustensile
function arrayRecette(recette,listeIngredients,listeAppareils,listeUstensiles) {
    let recettes = [];
    recettes.push(recette);
  
    recettes.forEach(liste => {
        for(let ingredient of liste.ingredients) {
            listeIngredients.push(ingredient.ingredient);
        }
      })
    recettes.forEach(liste => {
        listeAppareils.push(liste.appliance) 
    })
    recettes.forEach(liste => {
        for(let ustensile of liste.ustensils) {
            listeUstensiles.push(ustensile);
        }
    })  
}

// construit un ingredient
function listeIngredient(ingredient) {
    const ingredients = document.createElement('p');
    contentIngredients.appendChild(ingredients);
    ingredients.setAttribute("class","liste-ingredient");
    ingredients.textContent = ingredient; 
}
// construit un appareil
function listeAppareil(appareils) {
    const appareil = document.createElement('p');
    contentAppareils.appendChild(appareil);
    appareil.setAttribute("class","liste-appareil");
    appareil.textContent = appareils; 
}

// construit un ustensile
function listeUstensile(ustensile) {
    const ustensiles = document.createElement('p');
    contentUstensiles.appendChild(ustensiles);
    ustensiles.setAttribute("class","liste-ustensile");
    ustensiles.textContent = ustensile;
}