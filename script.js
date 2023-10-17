const rock = document.querySelector(".pedra")
const paper = document.querySelector(".papel")
const scissors = document.querySelector(".tesoura")
const lizard = document.querySelector(".lagarto")
const spock = document.querySelector(".spock")

function playHuman (humanChoice) {
    console.log(humanChoice)

}



rock.addEventListener("click", playHuman("rock"))
/*paper.addEventListener("click", playHuman)
scissors.addEventListener("click", playHuman)
lizard.addEventListener("click", playHuman)
spock.addEventListener("click", playHuman)*/
