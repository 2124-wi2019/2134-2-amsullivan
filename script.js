/*  Anna Sullivan
    script.js
    INFO2134WW
    Thoendel
    3/21/2020
*/

window.addEventListener('load', function(){

const form = document.getElementById("contactForm"); //form stored
const selectMeal = document.getElementById("meal"); //meal value stored
const bOption = document.getElementById("breakfastOptions"); //breakfast option stored
const lOption = document.getElementById("lunchOptions"); //lunch option stored
const dOption = document.getElementById("dinnerOptions"); //dinner option stored

const inputfName = document.getElementById("firstName"); //first name value stored
const inputlName = document.getElementById("lastName"); //last name value stored
const inputAge = document.getElementById("age"); //age value stored
const inputEmail = document.getElementById("emailAddress"); //email value stored
const selectMealRating = document.getElementById("mealRating"); //meal rating stored

const errorHolder = document.getElementById("errorHolder");

//id value meal changes check the element value
selectMeal.addEventListener('change', (event) => {
//if select meal is empty
if(selectMeal.value === ''){
    form.classList.remove('visible'); //remove visible class from form
    if(selectMeal.value === 'breakfast'){
    bOption.classList.add('visible'); //if breakfast add breakfast option visible to class
    }else if(selectMeal.value === 'lunch'){
    lOption.classList.add('visible'); //if lunch add lunch option visible to class
    }else if(selectMeal.value === 'dinner'){
    dOption.classList.add('visible'); //if dinner add dinner option visible to class
    }
}
});

inputfName.addEventListener('focus', {
 //ensure first char is uppercase ??
}); //input of first name lose focus

inputlName.addEventListener('focus', {

}); //input of last name lose focus

inputAge.addEventListener('focus', {
if (Number.isInteger() == false){
alert("Please input only a number for age!"); //alert with error
inputAge.reset(); //reset the form value
inputAge.focus(); //focus cursor on id age
}
}); //input of age lose focus

form.addEventListener('submit', function(e) {
    const errors = []; //array to hold errors
    errorHolder.innerHTML = "";
    errorHolder.classList.remove("visible"); //remove content in errorholder

    if(inputfName.value == "") {
        errors.push("First name cannot be blank!"); //first name missing
    }
    if(inputlName.value == ""){
        errors.push("Last name cannot be blank!"); //last name missing
    }
    if(inputAge.value == ""){
        errors.push("You must select an age!"); //age missing
    }
    if(inputEmail.value == ""){
        errors.push("You must imput your email!"); //email missing
    }
    if(selectMeal.value == ""){
        errors.push("Value of meal cannot be blank!"); //meal value missing
    }
    let mealSelect = false;
    for(let meal of meals){
        if(meal.checked){
            mealSelect = true;
        }
    }
    if(!mealSelect){
        errors.push("A meal option must be selected"); //meal option missing
    }
    let mealRatingSelect = false;
    for(let rating of ratings){
        if(rating.checked){
            mealRatingSelect = true;
        }
    }
    if(!mealRatingSelect){
        errors.push("Meal rating cannot be blank!"); //meal rating missing
    }
    if(errors.length > 0) {
        errorHolder.appendChild(buildList("ul", "errors", errors)); //make ul list
        errorHolder.classList.add("visible"); 
        e.preventDefault(); //prevent submit of form
    }
}


});

function buildList(elType, elId, arrayOfErrors) {
    let el;
    switch(elType.toUpperCase()) {
        case 'UL':
            el = document.createElement('ul');
            break;
        case 'OL':
            el = document.createElement('ol');
            break;
    }
    el.id = elId;
    for(let error of arrayOfErrors) {
        let listItem = document.createElement('li');
        listItem.innerHTML = error;
        el.appendChild(listItem);
    }
    return el;
}