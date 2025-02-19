let userScore = 0;
let compScore = 0;

const item = document.querySelectorAll(".item");

const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  // rock, paper, scissors

  const options = ["rock", "paper", "scissors"]; // storing the 3 items in an array.
  const random = Math.floor(Math.random() * 3); //generating random number

  return options[random]; // will return the option that is genereted in random index
};

const drawGame = () => {
  console.log("game was a draw");
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    // if userWin is true
    //console.log("You Win !");

    userScore++;
    userScorePara.innerText = userScore;

    msg.innerText = `You Win!  Your ${userChoice} beats ${compChoice}`; // setting the message text
    msg.style.backgroundColor = "green";
  } else {
    //console.log("You Lose !")

    compScore++; // updating the score

    compScorePara.innerText = compScore;

    msg.innerText = `You Lose! ${compChoice} beats  Yours ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  // creating function

  console.log("user choice =", userChoice);

  // generate computer choice

  const compChoice = genCompChoice();

  console.log("computer choice =", compChoice);

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === scissors ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }

    showWinner(userWin, userChoice, compChoice);
  }
};

item.forEach((item) => {
  // track each items using foreach loop
  //console.log(item);
  item.addEventListener("click", () => {
    // add event handler in each item

    const userChoice = item.getAttribute("id");
    playGame(userChoice); // calling the function
  });
});
