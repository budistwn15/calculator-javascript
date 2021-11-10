import Calculator from "./Calculator.js"

const numbers = document.querySelectorAll('.number')
const operators = document.querySelectorAll('.operator')
const equals = document.querySelector('.equal-sign')
const deletes = document.querySelector('.delete')
const allClear = document.querySelector('.all-clear')
const previousOperandTextElement = document.querySelector('.previous-operand')
const currentOperandTextElement = document.querySelector('.current-operand')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

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
