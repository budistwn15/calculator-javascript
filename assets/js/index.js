import Calculator from "./Calculator.js"

const numbers = document.querySelectorAll('.number')
const operators = document.querySelectorAll('.operator')
const equals = document.querySelector('.equal-sign')
const deletes = document.querySelector('.delete')
const allClear = document.querySelector('.all-clear')
const previousOperandTextElement = document.querySelector('.previous-operand')
const currentOperandTextElement = document.querySelector('.current-operand')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

const keyboard = document.getElementById("numb");
keyboard.addEventListener("keypress", (event) => {
  if(event.keyCode === 49){
    console.log("1")
    event.preventDefault
    calculator.updateDisplay()
    document.getElementById("one").click()
  } else if(event.keyCode === 50){
    console.log("2")
    event.preventDefault
    calculator.updateDisplay()
    document.getElementById("two").click()
  }else if(event.keyCode === 51){
    console.log("3")
    event.preventDefault
    calculator.updateDisplay()
    document.getElementById("three").click()
  }else if(event.keyCode === 52){
    console.log("4")
    event.preventDefault
    calculator.updateDisplay()
    document.getElementById("four").click()
  }else if(event.keyCode === 53){
    console.log("5")
    event.preventDefault
    calculator.updateDisplay()
    document.getElementById("five").click()
  }else if(event.keyCode === 54){
    console.log("6")
    event.preventDefault
    calculator.updateDisplay()
    document.getElementById("six").click()
  }else if(event.keyCode === 55){
    console.log("7")
    event.preventDefault
    calculator.updateDisplay()
    document.getElementById("seven").click()
  }else if(event.keyCode === 56){
    console.log("8")
    event.preventDefault
    calculator.updateDisplay()
    document.getElementById("eight").click()
  }else if(event.keyCode === 57){
    console.log("9")
    event.preventDefault
    calculator.updateDisplay()
    document.getElementById("nine").click()
  }else if(event.keyCode === 48){
    console.log("0")
    event.preventDefault
    calculator.updateDisplay()
    document.getElementById("zero").click()
  }
})

numbers.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})

operators.forEach(button => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()
  })
})

equals.addEventListener('click', button => {
  calculator.compute()
  calculator.updateDisplay()
})

allClear.addEventListener('click', button => {
  calculator.clear()
  calculator.updateDisplay()
})

deletes.addEventListener('click', button => {
  calculator.delete()
  calculator.updateDisplay()
})
