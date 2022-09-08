// Create variables for the game state
let player1Score = 0
let player2Score = 0
let player1Turn = true

// let randomNumber1 = Math.floor(Math.random() * 6) + 1
// let randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Create variables to store references to the necessary DOM nodes
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")

function showResetButton() {
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
}


/* Hook up a click event listener to the Roll Dice Button. */
 rollBtn.addEventListener("click", function() {
     /* ==================================================== */
     /* The random number must be here, inside the function. */
    let randomNumber1 = Math.floor(Math.random() * 6) + 1
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;
     /* ==================================================== */
    
    let randomDiceImage1 = "dice" + randomNumber1 + ".png"; 
    let randomDiceImage2 = "dice" + randomNumber2 + ".png";
    let randomImageSource1 = "images/" + randomDiceImage1; 
    let randomImageSource2 = "images/" + randomDiceImage2; 
   
    // image1.setAttribute("src", randomImageSource);

    if (player1Turn) {
        player1Score += randomNumber1
        player1Scoreboard.textContent = player1Score
        player1Dice.setAttribute("src", randomImageSource1);
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = "Player 2 Turn"
    } else {
        player2Score += randomNumber2
        player2Scoreboard.textContent = player2Score
        player2Dice.setAttribute("src", randomImageSource2);
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        message.textContent = "Player 1 Turn"
    }
    
    if (player1Score >= 20) {
        message.textContent = "Player 1 Won 🥳"
        showResetButton()
    }  else if (player2Score >= 20) {
        message.textContent = "Player 2 Won 🎉"
        showResetButton()
    }
    player1Turn = !player1Turn
})
 
resetBtn.addEventListener("click", function(){
    reset()
})

function reset() {
    player1Score = 0
    player2Score = 0
    player1Turn = true
    player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0
    player1Dice.textContent = "-"
    player2Dice.textContent = "-"
    message.textContent = "Player 1 Turn"
    resetBtn.style.display = "none"
    rollBtn.style.display = "block"
    player2Dice.classList.remove("active")
    player1Dice.classList.add("active")
}
