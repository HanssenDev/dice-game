const header = document.getElementsByTagName("h1")[0];
const player1Dice = document.querySelector(".img1");
const player2Dice = document.querySelector(".img2");
const rollButton = document.querySelector(".roll");

// add click event to roll button
rollButton.addEventListener("click", function () {
  rollDice();
});

function rollDice() {
  // generate two random numbers betweem 1-6
  let randomNumber1 = Math.floor(Math.random() * 6) + 1;
  let randomNumber2 = Math.floor(Math.random() * 6) + 1;

  // change dice images depending on random number generated
  player1Dice.setAttribute("src", "images/dice" + randomNumber1 + ".png");
  player2Dice.setAttribute("src", "images/dice" + randomNumber2 + ".png");

  // Change header depending on which player wins
  if (randomNumber1 === randomNumber2) {
    header.innerHTML = "It's a draw!";
  } else if (randomNumber1 > randomNumber2) {
    header.innerHTML = "Player 1 wins!";
  } else {
    header.innerHTML = "Player 2 wins!";
  }
}
