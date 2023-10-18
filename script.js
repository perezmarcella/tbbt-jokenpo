const result = document.querySelector(".result")
const yourScore = document.querySelector(".your-score")
const machineNumber = document.querySelector(".machine-score")

let humanScore = 0
let machineScore = 0

const GAME_OPTIONS = {
    ROCK: "rock",
    PAPER: "paper",
    SCISSORS: "scissors",
    LIZARD: "lizard",
    SPOCK: "spock"
}

const playHuman = (humanChoice) => {
   
    playTheGame(humanChoice, playMachine())

}

const playMachine = () => {
    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS, GAME_OPTIONS.LIZARD, GAME_OPTIONS.SPOCK]
    const randomResult = Math.floor(Math.random() * 5)

    return choices[randomResult]

}

const playTheGame = (human, machine) => {

    console.log("Humano" + human + "Máquina" + machine)
       
    if(human === machine) {
        result.innerHTML = "Deu empate!"
    } else if (
        human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER ||
        human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.LIZARD ||
        human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK ||
        human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.SPOCK ||
        human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.LIZARD ||
        human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS ||
        human === GAME_OPTIONS.LIZARD && machine === GAME_OPTIONS.SPOCK ||
        human === GAME_OPTIONS.LIZARD && machine === GAME_OPTIONS.PAPER ||
        human === GAME_OPTIONS.SPOCK && machine === GAME_OPTIONS.SCISSORS ||
        human === GAME_OPTIONS.SPOCK && machine === GAME_OPTIONS.ROCK
    ) {
        humanScore++
        result.innerHTML = "Você venceu!"
        yourScore.innerHTML = humanScore
    } else {
        machineScore++
        result.innerHTML = "Você perdeu!"
        machineNumber.innerHTML = machineScore
    }
    
}
