const logoFix = document.querySelector("#logo-fix")
const aside = document.querySelector("#page-buttons")

const allBoxes = document.querySelectorAll(".box")
const boxOne = document.querySelector("#button-one")
const boxTwo = document.querySelector("#button-two")
const boxThree = document.querySelector("#button-three")
const boxFour = document.querySelector("#button-four")
const boxFive = document.querySelector("#button-five")

const allLines = document.querySelectorAll(".line")
const lineTwo = document.querySelector("#line-two")
const lineThree = document.querySelector("#line-three")
const lineFour = document.querySelector("#line-four")
const lineFive = document.querySelector("#line-five")

window.addEventListener("scroll", () => {
    console.log(window.scrollY);
    
    if (this.scrollY > 199) {
        activate(aside)
        activate(logoFix)
    } else {
        deactivate(aside)
        deactivate(logoFix)
    }

    removeActiveBoxes()
    removeActiveLines()
    
    if (this.scrollY < 866 ) activate(lineTwo)
    if (this.scrollY > 866 && this.scrollY < 1060 ) activate(boxTwo)
    if (this.scrollY > 1060 && this.scrollY < 1750 ) activate(lineThree)
    if (this.scrollY > 1750 && this.scrollY < 1960 ) activate(boxThree)
    if (this.scrollY > 1960 && this.scrollY < 2570 ) activate(lineFour)
    if (this.scrollY > 2570 && this.scrollY < 3060 ) activate(boxFour)
    if (this.scrollY > 3060 && this.scrollY < 3560 ) activate(lineFive)
    if (this.scrollY > 3560) activate(boxFive)
})

removeActiveBoxes = () => allBoxes.forEach((box) => deactivate(box))
removeActiveLines = () => allLines.forEach((line) => deactivate(line))
activate = (e) => e.classList.add("active") 
deactivate = (e) => e.classList.remove("active") 
