const darkLightBtn = document.getElementById('dark-light-btn');
const userInput = document.getElementById('user-input');
const guessBtn = document.getElementById('guess-btn');
const feedbackText = document.getElementById('feedback-text');
const triesText = document.getElementById('tries-text');
const resetBtn = document.getElementById('reset-btn');
const p1 = document.getElementById('p-1');

let secretNumber = Math.floor(Math.random() * 100) + 1;
let tries = 0;

guessBtn.addEventListener('click', function() {
  let userGuess = userInput.value;
  
  userGuess = Number(userGuess);
  tries = tries + 1;
  triesText.textContent = "Tries " + tries;
   
  console.log("The Secret Number is: " + secretNumber);
  console.log("You Guessed: " + userGuess)
  
  if (userGuess > secretNumber) {
    feedbackText.textContent = "Too High ";
  }
  else if (userGuess < secretNumber) {
    feedbackText.textContent = "Too Low";
  }
   else {
     feedbackText.textContent = "YOU WON!";
     guessBtn.disabled = true;
     return;
  }
    if (tries === 7) {
      feedbackText.textContent = "GAME OVER! The number was " + secretNumber;
      guessBtn.disabled = true;
      userInput.disabled = true;
  } 
});

resetBtn.addEventListener('click', function() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  tries = 0;

  triesText.textContent = "Tries: 0";
  feedbackText.textContent = "Good Luck :)"

  guessBtn.disabled = false;
  userInput.disabled = false;

  userInput.value = "";
});

darkLightBtn.addEventListener('click', function() {
  if (document.body.style.backgroundColor === "cornsilk") {

    document.body.style.backgroundColor = "black";
    document.querySelector('h1').style.color = "cornsilk"; 

    darkLightBtn.style.color = "cornsilk";
    p1.style.color = "cornsilk";
    darkLightBtn.style.color = "cornsilk";
    darkLightBtn.textContent = "Light Mode"
  }
  else {
    document.body.style.backgroundColor = "cornsilk";
    document.querySelector('h1').style.color = "black";

    darkLightBtn.style.color = "black";
    p1.style.color = "black";
    darkLightBtn.textContent = "Dark Mode"
  }
});

document.body.style.backgroundColor = "cornsilk";