let fruitObjects = [
    {name: "apple", color: "red", shape: "round", emoji: "🍎"},
    {name: "banana", color: "yellow", shape: "curved", emoji: "🍌"},
    {name: "orange", color: "orange", shape: "round", emoji: "🍊"},
    {name: "kiwi", color: "brown", shape: "oval", emoji: "🥝"},
    {name: "mango", color: "yellow", shape: "oval", emoji: "🥭"}
]

function clearCards() {
    let fruitContainer = document.querySelector('#cards');
    while(fruitContainer.firstChild) {
        fruitContainer.removeChild(fruitContainer.firstChild);
    }
}

function addFruitCard(fruit) {
    let newFruitCard = document.createElement(`div`);
    let fruitHeading = document.createElement(`h3`);
    newFruitCard.textContent = fruit.name;
    newFruitCard.appendChild(fruitHeading);

    let fruitColor = document.createElement(`p`);
    fruitColor.textContent = `Color: ${fruit.color}`;
    fruitColor.style.color = fruit.color;
    newFruitCard.appendChild(fruitColor);

    let fruitShape = document.createElement(`p`);
    fruitShape.textContent = `Shape: ${fruit.shape}`;
    newFruitCard.appendChild(fruitShape);

    let fruitEmoji = document.createElement(`p`);
    fruitEmoji.textContent = `Emoji: ${fruit.emoji}`;
    newFruitCard.appendChild(fruitEmoji);

    let fruitContainer = document.querySelector(`#cards`);
    newFruitCard.classList.add(`fruitCard`);
    fruitContainer.appendChild(newFruitCard);
  
}

function filterByLessthan6(){
    clearCards();
}

function runProgram() {
    console.log("Program is running");

    for (const fruit of fruitObjects) {
        addFruitCard(fruit);
}


let lessThan6Button = document.createElement(`button`);
lessThan6Button.textContent = "Fruits with less than 6 letters";
lessThan6Button.addEventListener("click", filterByLessthan6);

let buttonsContainer = document.querySelector(`#buttonsContainer`);
buttonsContainer.appendChild(lessThan6Button);
}

document.addEventListener('DOMContentLoaded', runProgram);