//variáveis
const screen2 = document.querySelector(".screen2")
const screen1 =  document.querySelector(".screen1")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const randonNumber = Math.round(Math.random() *10)

//contador
let xAttempts = 1


//callback
function handleTryClick(event) {
    event.preventDefault()
    
    const inputNumber = document.querySelector("#inputNumber")

    if(Number(inputNumber.value) == randonNumber) {
        toggleScreen()
        
        screen2
        .querySelector("h2")
        .innerText = `Acertou em ${xAttempts} tentativas`
    }

    inputNumber.value = ""
    xAttempts++
}

//Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick) 

function handleResetClick () {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
    xAttempts = 1
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}