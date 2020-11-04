window.onload = function() {

var userScore = 0;
var compScore = 0;
var userScore_span = document.querySelector("#user-score");
var compScore_span = document.querySelector("#comp-score");
var scoreBoard_div = document.querySelector(".score-board");
var result_p       = document.querySelector(".result > p");
var rock_div       = document.querySelector("#rock");
var paper_div      = document.querySelector("#paper");
var scissors_div   = document.querySelector("#scissors");


function getComputerChoice() {
  var choices = ["Rock", "Paper", "Scissors"];
  var randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertWord(word) {
  switch(word) {
    case "Rock":
      return "Rock";
    case "Paper":
      return "Paper";
    case "Scissors":
      return "Scissors";
  }
}

function win(user, comp) {
  userScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  var smallUserWord = "user".fontsize(3).sub();
  var smallCompWord = "comp".fontsize(3).sub();
  var userChoice_div = document.getElementById(user);
  result_p.innerHTML       = convertWord(user) + smallUserWord + " v/s " +
                             comp + smallCompWord + ". <br> You Win! 🔥";
  userChoice_div.classList.add("green-glow");
  setTimeout(function() {userChoice_div.classList.remove("green-glow");}, 800);
}

function lose(user, comp) {
  compScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  var smallUserWord = "user".fontsize(3).sub();
  var smallCompWord = "comp".fontsize(3).sub();
  var userChoice_div = document.getElementById(user);
  result_p.innerHTML       = convertWord(user) + smallUserWord + " v/s " +
                             comp + smallCompWord + ". <br> You Lose! 💩";
  userChoice_div.classList.add("red-glow");
  setTimeout(function() {userChoice_div.classList.remove("red-glow");}, 800);
}

function draw(user, comp) {
  var smallUserWord = "user".fontsize(3).sub();
  var smallCompWord = "comp".fontsize(3).sub();
  var userChoice_div = document.getElementById(user);
  result_p.innerHTML       = convertWord(user) + smallUserWord + " v/s " +
                             comp + smallCompWord + ". <br> Draw";
  userChoice_div.classList.add("gray-glow");
  setTimeout(function() {userChoice_div.classList.remove("gray-glow");}, 800);
}

function game(userChoice) {
  var compChoice = getComputerChoice();
  switch(userChoice + compChoice) {
    case "RockScissors":
    case "PaperRock":
    case "ScissorsPaper":
      win(userChoice, compChoice);
      break;
    case "RockPaper":
    case "PaperScissors":
    case "ScissorsRock":
      lose(userChoice, compChoice);
      break;
    case "RockRock":
    case "PaperPaper":
    case "ScissorsScissors":
      draw(userChoice, compChoice);
      break;
  }
}



function main() {
  rock_div.addEventListener("click", function() {
    game("Rock");
  });

  paper_div.addEventListener("click", function() {
    game("Paper");
  });

  scissors_div.addEventListener("click", function() {
    game("Scissors");
  });
}

main();

};
