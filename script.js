var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// console.log(randomNumber1);

var randomDiceGenerator = "images/" + "dice" + randomNumber1 + ".png";

// console.log(randomDiceGenerator);

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDiceGenerator);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceGenerator2 = "images/" + "dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomDiceGenerator2);

if (randomDiceGenerator > randomDiceGenerator2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins";
} else if (randomDiceGenerator < randomDiceGenerator2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins";
} else {
  document.querySelector("h1").innerHTML = "Its a Draw!";
}
