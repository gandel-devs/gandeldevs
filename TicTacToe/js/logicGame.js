var symbol = 'x'
var section1 = document.querySelector('.section.section-1')
var section2 = document.querySelector('.section.section-2')
var section3 = document.querySelector('.section.section-3')
var section4 = document.querySelector('.section.section-4')
var section5 = document.querySelector('.section.section-5')
var section6 = document.querySelector('.section.section-6')
var section7 = document.querySelector('.section.section-7')
var section8 = document.querySelector('.section.section-8')
var section9 = document.querySelector('.section.section-9')
var position = document.querySelectorAll('.section')
var resetButton = document.querySelector('#reset')
let pointsOne = 0;
let pointsTwo = 0;
var pointOne = document.querySelector('.pointP1')
var pointTwo = document.querySelector('.pointP2')
var win = false

let positions = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

async function sleep(msec) {
    return new Promise(resolve => setTimeout(resolve, msec));
}

function changeSymbol() {
    switch (symbol) {
        case 'x':
            symbol = 'o'
            break;
        
        case 'o':
            symbol = 'x'
            break;
    
        default:
            break;
    }
}

function pointsPlayers(symbol) {
    if (symbol == 'x') {
        pointsOne++
        pointOne.innerHTML = pointsOne
    }

    if (symbol == 'o') {
        pointsTwo++
        pointTwo.innerHTML = pointsTwo
    }
}

function resetTable() {
    var number = 1;
    for (let x = 0; x < positions.length; x++) {
        for (let y = 0; y < positions[x].length; y++) {
            positions[x][y] = number
            number++
        }
    }
}

async function resetGame() {
    for (let index = 0; index < position.length; index++) {
        position[index].disabled = false
        position[index].innerHTML = ''
    }
    resetPostions()
    win = false;
}

function resetPostions() {
    for (let index = 0; index < positions.length; index++) {
        for (let indexTwo = 0; indexTwo < positions[index].length; indexTwo++) {
            positions[index][indexTwo] = indexTwo
        }
    }
}

resetButton.addEventListener('click', ()=>{
    resetGame()
    resetTable()
})

function disabledAllButtons() {
    for (let index = 0; index < position.length; index++) {
        position[index].disabled = true
    }
}

function verifyX() {
    if (positions[0][0] == 'x' && positions[1][1] == 'x' && positions[2][2] == 'x') {
        console.log('X gano')
        disabledAllButtons()
        pointsPlayers('x')
        win = true;
    }

    if (positions[0][2] == 'x' && positions[1][1] == 'x' && positions[2][0] == 'x') {
        console.log('X gano')
        disabledAllButtons()
        pointsPlayers('x')
        win = true;
    }

    if (positions[0][1] == 'x' && positions[1][1] == 'x' && positions[2][1] == 'x') {
        console.log('X gano')
        disabledAllButtons()
        pointsPlayers('x')
        win = true;
    }

    if (positions[1][0] == 'x' && positions[1][1] == 'x' && positions[1][2] == 'x') {
        console.log('X gano')
        disabledAllButtons()
        pointsPlayers('x')
        win = true;
    }

    if (positions[0][0] == 'x' && positions[1][0] == 'x' && positions[2][0] == 'x') {
        console.log('X gano')
        disabledAllButtons()
        pointsPlayers('x')
        win = true;
    }

    if (positions[0][0] == 'x' && positions[0][1] == 'x' && positions[0][2] == 'x') {
        console.log('X gano')
        disabledAllButtons()
        pointsPlayers('x')
        win = true;
    }

    if (positions[0][2] == 'x' && positions[1][2] == 'x' && positions[2][2] == 'x') {
        console.log('X gano')
        disabledAllButtons()
        pointsPlayers('x')
        win = true;
    }

    if (positions[2][0] == 'x' && positions[2][1] == 'x' && positions[2][2] == 'x') {
        console.log('X gano')
        disabledAllButtons()
        pointsPlayers('x')
        win = true;
    }
}

function verifyO() {
    if (positions[0][0] == 'o' && positions[1][1] == 'o' && positions[2][2] == 'o') {
        console.log('X gano')
        disabledAllButtons()
        pointsPlayers('o')
        win = true;
    }

    if (positions[0][2] == 'o' && positions[1][1] == 'o' && positions[2][0] == 'o') {
        console.log('X gano')
        disabledAllButtons()
        pointsPlayers('o')
        win = true;
    }

    if (positions[0][1] == 'o' && positions[1][1] == 'o' && positions[2][1] == 'o') {
        console.log('X gano')
        disabledAllButtons()
        pointsPlayers('o')
        win = true;
    }

    if (positions[1][0] == 'o' && positions[1][1] == 'o' && positions[1][2] == 'o') {
        console.log('X gano')
        disabledAllButtons()
        pointsPlayers('o')
        win = true;
    }

    if (positions[0][0] == 'o' && positions[1][0] == 'o' && positions[2][0] == 'o') {
        console.log('X gano')
        disabledAllButtons()
        pointsPlayers('o')
        win = true;
    }

    if (positions[0][0] == 'o' && positions[0][1] == 'o' && positions[0][2] == 'o') {
        console.log('X gano')
        disabledAllButtons()
        pointsPlayers('o')
        win = true;
    }

    if (positions[0][2] == 'o' && positions[1][2] == 'o' && positions[2][2] == 'o') {
        console.log('X gano')
        disabledAllButtons()
        pointsPlayers('o')
        win = true;
    }

    if (positions[2][0] == 'o' && positions[2][1] == 'o' && positions[2][2] == 'o') {
        console.log('X gano')
        disabledAllButtons()
        pointsPlayers('o')
        win = true;
    }
}

async function resetGameAuto() {
    win = false
    await sleep(1000)
    resetGame()
}

function verifyGame() {
    verifyX()
    verifyO()
    if (win === true) {
        resetGameAuto()
        resetPostions()
    }
    console.log(win)
    console.log(positions)
}

section1.addEventListener('click', ()=>{
    section1.innerHTML = symbol
    positions[0][0] = symbol
    verifyGame()
    changeSymbol()
    section1.disabled = true
})

section2.addEventListener('click', ()=>{
    section2.innerHTML = symbol
    positions[0][1] = symbol
    verifyGame()
    changeSymbol()
    section2.disabled = true
})

section3.addEventListener('click', ()=>{
    section3.innerHTML = symbol
    positions[0][2] = symbol
    verifyGame()
    changeSymbol()
    section3.disabled = true
})

section4.addEventListener('click', ()=>{
    section4.innerHTML = symbol
    positions[1][0] = symbol
    verifyGame()
    changeSymbol()
    section4.disabled = true
})

section5.addEventListener('click', ()=>{
    section5.innerHTML = symbol
    positions[1][1] = symbol
    verifyGame()
    changeSymbol()
    section5.disabled = true
})

section6.addEventListener('click', ()=>{
    section6.innerHTML = symbol
    positions[1][2] = symbol
    verifyGame()
    changeSymbol()
    section6.disabled = true
})

section7.addEventListener('click', ()=>{
    section7.innerHTML = symbol
    positions[2][0] = symbol
    verifyGame()
    changeSymbol()
    section7.disabled = true
})

section8.addEventListener('click', ()=>{
    section8.innerHTML = symbol
    positions[2][1] = symbol
    verifyGame()
    changeSymbol()
    section8.disabled = true
})

section9.addEventListener('click', ()=>{
    section9.innerHTML = symbol
    positions[2][2] = symbol
    verifyGame()
    changeSymbol()
    section9.disabled = true
})