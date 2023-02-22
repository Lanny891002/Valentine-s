var gift1 = document.getElementById("gift1");
var gift2 = document.getElementById("gift2");
var gift3 = document.getElementById("gift3");
var quiz = document.querySelector(".quiz");
var rose = document.getElementById("rose");
var congratulate = document.getElementById("congratulate");
var smile = document.getElementById("smile");
var bless1 = document.querySelector(".bless1");
var bless2 = document.querySelector(".bless2");
var bless3 = document.querySelector(".bless3");
var button = document.querySelector(".button");

function gift1_move() {
  gift2.style.display = "none";
  gift3.style.display = "none";
  quiz.style.display = "none";
  gift1.style.top = "55%";

  setTimeout(function () {
    gift1.style.opacity = "0";
    rose.style.display = "block";
  }, 1500);

  setTimeout(function () {
    bless1.style.display = "block";
  }, 4000);

  setTimeout(function () {
    button.style.display = "block";
  }, 8000);
}

function gift2_move() {
  gift1.style.display = "none";
  gift3.style.display = "none";
  quiz.style.display = "none";
  gift2.style.top = "55%";

  setTimeout(function () {
    gift2.style.opacity = "0";
    congratulate.style.display = "block";
  }, 1500);

  setTimeout(function () {
    bless2.style.display = "block";
  }, 4000);

  setTimeout(function () {
    button.style.display = "block";
  }, 8000);
}

function gift3_move() {
  gift1.style.display = "none";
  gift2.style.display = "none";
  quiz.style.display = "none";
  gift3.style.top = "55%";

  setTimeout(function () {
    gift3.style.opacity = "0";
    smile.style.display = "block";
  }, 1500);

  setTimeout(function () {
    bless3.style.display = "block";
  }, 4000);

  setTimeout(function () {
    button.style.display = "block";
  }, 8000);
}