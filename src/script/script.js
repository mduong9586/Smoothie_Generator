'use strict'
const dairyChoices = Array.from(document.getElementsByName("dairy"));
const caloriesChoices = Array.from(document.getElementsByName("calories"));
const flavorChoices = Array.from(document.getElementsByName("flavor"));


const startBtn = document.querySelector("#btn-start");
startBtn.addEventListener("click", getRecipe);

function getUserInput() {
    let choices = {
        dairy: null,
        calories: null,
        flavor: null
    };
    console.log(dairyChoices);
    dairyChoices.forEach(item => {
        if ( item.checked) {
            choices.dairy = item.value;
        }
    });
    caloriesChoices.forEach(item => {
        if ( item.checked) {
            choices.calories = item.value;
        }
    });
    flavorChoices.forEach(item => {
        if ( item.checked) {
            choices.flavor = item.value;
        }
    });
    console.log(choices);
    storeUserInput(choices);
}

function storeUserInput(data){
    console.log(data);
    localStorage.setItem('dairy', data.dairy);
    localStorage.setItem('calories', data.calories);
    localStorage.setItem('flavor', data.flavor);
    window.location.href="./result.html";

}