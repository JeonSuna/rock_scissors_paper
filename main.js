//사용자에게 가위바위보를 입력받고 ,
//ROCK, PAPER, SCISSORS 이외에 다른 것을 내면 경고안내문을 띄움
//사람이 고른것, 컴퓨터가 고른것 함수


//사람이 고른것
const ROCK = 'ROCK'
const SCISSORS = 'SCICCORS'
const PAPER = 'PAPER'
const getPlayerChoice = function () {
    let select = prompt(`${ROCK}, ${SCISSORS},${PAPER} 중 하나를 선택하세요`).toUpperCase()
    if (select !== ROCK && select !== SCISSORS && select !== PAPER) {
        alert('올바르지 않은 내용을 입력하셨습니다. 다시 입력해주세요')
        return getPlayerChoice()
    }
    return select
}



// 컴퓨터가 고른것
const getComputerChoice = function () {
    let computerSelect
    let randomValue = Math.random()
    if (randomValue > 0.34) computerSelect = ROCK
    else if (0.67 > randomValue) computerSelect = PAPER
    else {
        computerSelect = SCISSORS
    }
    return computerSelect
}


// 두개 비교 함수
const getWinner = function (pChoice, Cchoice) {
    if (pChoice === Cchoice) return '비겼습니다'
    //사람이 이기는 경우
    else if (pChoice === ROCK && Cchoice === SCISSORS || pChoice === SCISSORS && Cchoice === PAPER
        || pChoice === PAPER && Cchoice === ROCK) {
        return '사람이 이겼습니다'
    }
    else {
        return '컴퓨터가 이겼습니다'
    }
}

let button = document.querySelector('#button')
button.addEventListener('click', function () {
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    console.log(winner)
})