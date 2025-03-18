let comNum = 0
let textInput = document.getElementById("text-input")
let startBtn = document.getElementById("start-btn")
let resetBtn = document.getElementById("reset-btn")
let resultArea = document.getElementById("result-area")
let chancesArea = document.getElementById("chances-area")
let chances = 5
let gameOver = false
let historyNum = []

startBtn.addEventListener("click", () => userGame())
resetBtn.addEventListener("click", () => resetGame())
textInput.addEventListener("focus", () =>{textInput.value = ""})
 
const comGame = () => {
    comNum = Math.floor(Math.random() * 100) +1 
    console.log("정답:",comNum)
}

const userGame = () => {
    let userNum = textInput.value
    if(userNum > 100 || userNum < 0){
        resultArea.textContent = `1과 100사이의 숫자를 입력하세요!`
        return
    }
    if(historyNum.includes(userNum)){
        resultArea.textContent = `이미 입력한 숫자입니다!`
        return
    }
    chances --
    chancesArea.textContent = `Chances: ${chances}`
    if(userNum < comNum){
        resultArea.textContent = `Result: UP!`
    }else if(userNum > comNum){
        resultArea.textContent = `Result: DOWN!`
    }else{
        resultArea.textContent = `Result: 정답입니다!`
        gameOver = true
    }
    historyNum.push(userNum)
    if(chances < 1){
        gameOver = true
    }
    if(gameOver == true){
        startBtn.disabled = true
    }

}

const resetGame = () => {
    gameOver = false
    startBtn.disabled = false
    textInput.value = ""
    chances = 5
    chancesArea.textContent = `Chances: ${chances}`
    comGame()
}

comGame()