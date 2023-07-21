const backgroundGradient = document.getElementById('backgroundGradient');
const listHeader = document.getElementById('toDoListHeader');
const addToDoButton = document.getElementById('addButton');
const clearListBackground = document.getElementById('clearListContainer');
const listBackground = document.getElementById('listContainer');

const themeOne = document.getElementById('gradientOne');
const themeTwo = document.getElementById('gradientTwo');
const themeThree = document.getElementById('gradientThree');
const themeFour = document.getElementById('gradientFour');
const themeDefault = document.getElementById('gradientDefault');


themeOne.addEventListener("click", (event => {

    backgroundGradient.style.background = "linear-gradient(135deg, #F2BB05, #D74E09, #6E0E0A)";
    addToDoButton.style.color = "#F0F0C9";
    listHeader.style.background = "#362417";
    listHeader.style.color = "#F0F0C9";
    clearListBackground.style.background = "#F0F0C9";
    listBackground.style.background = "#F0F0C9";
    
    console.log("theme One ")
}))

themeTwo.addEventListener("click", (event => {

    backgroundGradient.style.background = "linear-gradient(135deg, #FFFFFF, #06BEE1, #03256C)";
    addToDoButton.style.color = "white";
    listHeader.style.background = "#2541B2";
    listHeader.style.color = "white";
    clearListBackground.style.background = "white";
    listBackground.style.background = "white";
    
    console.log("theme two ")
}))

themeThree.addEventListener("click", (event => {

    backgroundGradient.style.background = "linear-gradient(135deg, #32A287, #44CF6C, #A9FDAC)";
    addToDoButton.style.color = "#F1FFE7";
    listHeader.style.background = "#861657";
    listHeader.style.color = "#F1FFE7";
    clearListBackground.style.background = "#F1FFE7";
    listBackground.style.background = "#F1FFE7";
    
    console.log("theme three ")
}))


themeFour.addEventListener("click", (event => {

    backgroundGradient.style.background = "linear-gradient(135deg, #9055A2, #D499B9 , #011638)";
    addToDoButton.style.color = "#E8C1C5";
    listHeader.style.background = "#2E294E";
    listHeader.style.color = "#E8C1C5";
    clearListBackground.style.background = "#E8C1C5";
    listBackground.style.background = "#E8C1C5";
    
    console.log("theme four ")
}))