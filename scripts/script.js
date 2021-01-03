const pageButtons = document.querySelector("#page-buttons")
const allLines = document.querySelectorAll(".line")
const lineTwo = document.querySelector("#line-two")
const lineThree = document.querySelector("#line-three")
const lineFour = document.querySelector("#line-four")
const lineFive = document.querySelector("#line-five")

window.onscroll = () => scrollFunction()

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    // document.getElementById("header").style.fontSize = "30px";
  } else {
    // document.getElementById("header").style.fontSize = "90px";
  }
}