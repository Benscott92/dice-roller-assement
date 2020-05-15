let numberToRoll = document.querySelector('.dice-amount')
let roll = document.querySelector('.roll')
let total = document.querySelector('.dice-roll-total')
let showAll = document.querySelector('.reveal-rolls')
let rollsList = document.querySelector('.all-rolls')
let resetButton = document.querySelector('.resetbutton')
let diceSelector = document.querySelector('.sides')


let dieRolls = []


roll.addEventListener('click', function(){
    let rolls = numberToRoll.value
    let diceSides = diceSelector.value
    let index = 0
    while(index < rolls){
        let rollResult = Math.floor(Math.random() * diceSides) + 1;
        dieRolls.push(rollResult)
        index ++
    }
    index = 0
    let totalResult = 0
    while(index < dieRolls.length){
        // loop through the array, add each array item to the next, return the result
        totalResult += dieRolls[index]
        index ++
    }
    total.innerHTML = 'The total of the rolled dice is '  + totalResult + '.'
})

// Add a click event listener to your "Show All Rolls" button.
// Write a new loop: Loop over the dieRolls array, creating a new List Item for each number and adding that List Item to the innerHTML of the "All Rolls" element. This LI should show the value of the roll. (4 points)

showAll.addEventListener('click', function(){
    let index = 0
    while(index < dieRolls.length){
        rollsList.innerHTML += '<li class="dice">' + dieRolls[index]  + '</li>'
        index ++
    }
})


resetButton.addEventListener('click', function(){
    numberToRoll.value = ''
    diceSelector.value = ''
    dieRolls = []
    rollsList.innerHTML = ''
    total.innerHTML = ''
})
// Create a reset button which, on click, will empty the array and the innerHTML of your Total and All Rolls elements. (3 points)

// Create a user input box, where a user can specify the number of sides on the dice. For example, instead of six-sided dice, the user could opt for a 20-sided die. (3 points)