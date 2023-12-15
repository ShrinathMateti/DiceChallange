var randomGenerator1 = Math.floor(Math.random() * 5 + 1);

var imageGenerator1 = "./images/finger" + randomGenerator1 + ".jpg";

var randomGenerator2 = Math.floor(Math.random() * 5 + 1);

var imageGenerator2 = "./images/finger" + randomGenerator2 + ".jpg";

// console.log(imageGenerator2);

var f1 = document.querySelector(".finger1");

f1.setAttribute("src", imageGenerator1);

var f2 = document.querySelector(".finger2");

f2.setAttribute("src", imageGenerator2);

if (randomGenerator1 > randomGenerator2) {
  document.querySelector("h1").innerHTML = "Player One Win";
} else if (randomGenerator1 < randomGenerator2) {
  document.querySelector("h1").innerHTML = "Player Two Win";
} else {
  document.querySelector("h1").innerHTML = "Its A Draw";
}
