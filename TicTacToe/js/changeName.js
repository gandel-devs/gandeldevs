var playerOne = document.querySelector('.nameP1')
var playerTwo = document.querySelector('.nameP2')
const closeButton = document.querySelector('#close')
let changePanel = document.querySelector('.form')
let changeButton = document.querySelector('.changeName')
let change = document.querySelector('#change')
let namePlayerOne = document.getElementById('namePOne')
let namePlayerTwo = document.getElementById('namePTwo')

closeButton.addEventListener('click', ()=>{
    changePanel.classList.remove('active')
})

changeButton.addEventListener('click', ()=>{
    changePanel.classList.add('active')
})

change.addEventListener('click', ()=>{
    if(namePlayerOne.value == ''){
        playerOne.innerHTML = "Player 1"
    } else {
        playerOne.innerHTML = namePlayerOne.value
    }
    if(namePlayerTwo.value == ''){
        playerTwo.innerHTML = "Player 2"
    } else {
        playerTwo.innerHTML = namePlayerTwo.value
    }
})