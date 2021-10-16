/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
<<<<<<< HEAD
  document.querySelector(".card").innerHTML = cardGenerate();

  let suitIndex = random(suits);
  let suit = "";

  if (suitIndex === 0 || suitIndex === 1) {
    suit = "<p style ='color:red'>" + suits[suitIndex] + "</p>";
  } else {
    suit = "<p style ='color:black'>" + suits[suitIndex] + "</p>";
  }

  let suitDiv = document.querySelectorAll(".suit");
  suitDiv[0].innerHTML = suit;
  suitDiv[1].innerHTML = suit;
};

const suits = ["♦", "♥", "♠", "♣"];
function cardGenerate() {
  const num = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  return num[random(num)];
}

function random(arr1) {
  return Math.floor(Math.random() * arr1.length);
}
=======
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let pronoun = ["A", "The"];
  let subject = ["jogger", "racoon", "dog", "driver", "comedian", "pincone"];
  let action = ["took my", "threw my", "yelled at my", "stole my", "bit my"];
  let possetion = ["homework", "toe", "car", "shoe"];
  let where = ["on the street", "in my house", "in my driveway"];

  let proIndex = Math.floor(Math.random() * pronoun.length);
  let subjIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let possetionIndex = Math.floor(Math.random() * possetion.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return (
    pronoun[proIndex] +
    " " +
    subject[subjIndex] +
    " " +
    action[actionIndex] +
    " " +
    possetion[possetionIndex] +
    " " +
    where[whereIndex]
  );
};
>>>>>>> fd59f60ea3c6ae9a9a1b1c9f94f89909667356d2
