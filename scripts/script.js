const wrapper = document.querySelector("#scroll-wrapper")
const logoFix = document.querySelector("#logo-fix")
const aside = document.querySelector("#page-buttons")

const allBoxes = document.querySelectorAll(".box")
const boxOne = document.querySelector("#button-one")
const boxTwo = document.querySelector("#button-two")
const boxThree = document.querySelector("#button-three")
const boxFour = document.querySelector("#button-four")
const boxFive = document.querySelector("#button-five")
const boxSix = document.querySelector("#button-six")

const allLines = document.querySelectorAll(".line")
const lineTwo = document.querySelector("#line-two")
const lineThree = document.querySelector("#line-three")
const lineFour = document.querySelector("#line-four")
const lineFive = document.querySelector("#line-five")
const lineSix = document.querySelector("#line-six")

// window.addEventListener("scroll", () => {
wrapper.addEventListener("scroll", () => {
    if (wrapper.scrollTop > 700) {
        activate(aside)
        activate(logoFix)
    } else {
        deactivate(aside)
        deactivate(logoFix)
    }

    removeActiveBoxes()
    removeActiveLines()
    
    // boxOne machen
    if (wrapper.scrollTop < 825 ) activate(lineTwo)
    if (wrapper.scrollTop > 825 && wrapper.scrollTop < 1060 ) activate(boxTwo)
    if (wrapper.scrollTop > 1060 && wrapper.scrollTop < 1700 ) activate(lineThree)
    if (wrapper.scrollTop > 1700 && wrapper.scrollTop < 1960 ) activate(boxThree)
    if (wrapper.scrollTop > 1960 && wrapper.scrollTop < 2570 ) activate(lineFour)
    if (wrapper.scrollTop > 2570 && wrapper.scrollTop < 3060 ) activate(boxFour)
    if (wrapper.scrollTop > 3060 && wrapper.scrollTop < 3560 ) activate(lineFive)
    if (wrapper.scrollTop > 3560 && wrapper.scrollTop < 3970 ) activate(boxFive)
    if (wrapper.scrollTop > 3970 && wrapper.scrollTop < 4450 ) activate(lineSix)
    if (wrapper.scrollTop > 4450 ) activate(boxSix)
    //line & box 6 machen
})

removeActiveBoxes = () => allBoxes.forEach((box) => deactivate(box))
removeActiveLines = () => allLines.forEach((line) => deactivate(line))
activate = (e) => e.classList.add("active") 
deactivate = (e) => e.classList.remove("active") 
