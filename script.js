const result = document.querySelector(".result")
const yourScore = document.querySelector(".your-score")
const machineNumber = document.querySelector(".machine-score")

let humanScore = 0
let machineScore = 0

const playHuman = (humanChoice) => {
   
    playTheGame(humanChoice, playMachine())

}

const playMachine = () => {
    const choices = ["rock", "paper", "scissors", "lizard", "spock"]
    const randomResult = Math.floor(Math.random() * 5)

    return choices[randomResult]

}

const playTheGame = (human, machine) => {

    console.log("Humano" + human + "Máquina" + machine)
       
    if(human === machine) {
        result.innerHTML = "Deu empate!"
    } else if (
        human === "scissors" && machine === "paper" ||
        human === "scissors" && machine === "lizard" ||
        human === "paper" && machine === "rock" ||
        human === "paper" && machine === "spock" ||
        human === "rock" && machine === "lizard" ||
        human === "rock" && machine === "scissors" ||
        human === "lizard" && machine === "spock" ||
        human === "lizard" && machine === "paper" ||
        human === "spock" && machine === "scissors" ||
        human === "spock" && machine === "rock"
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
