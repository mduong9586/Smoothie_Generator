const milkChoices = Array.from(document.getElementsByName("milk-pref"));
const caloriesChoices = Array.from(document.getElementsByName("calories"));
const veggieChoices = Array.from(document.getElementsByName("protein"));

const startBtn = document.querySelector("#btn-start");
startBtn.addEventListener("click", getRecipe);

function getRecipe() {
    for(let i = 0; i < milkChoices.length; i++) {
        for(let k = 0; k < caloriesChoices.length; k++){
            for(let m = 0; m < veggieChoices.length; m++){
                if(milkChoices[i].checked && caloriesChoices[i].checked && veggieChoices[i].checked) {
                    location.href = "overallrecipe.html";
                } else {
                    break;
                }
            }
        }
    }
}