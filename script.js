 const screen1 = document.querySelector('#screen1')
 const screen2 = document.querySelector('#screen2')
 const initialButton = document.querySelector('#initial_button')

 function screenChanger(){
screen1.classList.toggle('hide')
screen2.classList.toggle('hide')
 }
function randomPhrase(){
    const frases = [
     "Seu cabelo e sua sorte andam lado a lado. e tu é calvo",
     "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
     "Um grande amor está por vir",
     "O mundo irá sorrir se também o fizer",
     "Uma núvem negra e turva se aproxima, não é recomendado apostar na sua sorte hoje"
    ]
    let random = Math.floor(Math.random()*4)
    return frases[random]
}
function attFrase(){
    const newPhrase = document.querySelector('#newPhrase')
    const index = randomPhrase();
    newPhrase.textContent = index;
}

initialButton.addEventListener('click',screenChanger);
attFrase()