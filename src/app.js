/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
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
