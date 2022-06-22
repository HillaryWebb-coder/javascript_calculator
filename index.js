import * as readline from 'readline'

import { add, subtract, divide, mult } from './functions.js'

console.log('************SIMPLE JAVASCRIPT CALCULATOR************')

// const values = {
//   num1: 0,
//   num2: 0,
//   operator: '+'
// }

const calculate = (num1, num2, operator) => {
  // Calculator functions
  switch (operator) {
    case '+':
      console.log('Answer: ', add(num1, num2))
      break
    case '-':
      console.log('Answer: ', subtract(num1, num2))
      break
    case '/':
      console.log('Answer: ', divide(num1, num2))
      break
    case '*':
      console.log('Answer: ', mult(num1, num2))
      break
    default:
      throw new Error(`TypeError: Unknown Argument Provided.${answer}`)
  }
}

// Create the input/output interface
const calculator = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const program = () => {
  // Get first operand for the operation
  calculator.question('Enter First Operand: ', num1 => {
    num1 = +num1 //Convert string input to integer
    //  Get Value fo second operand
    calculator.question('Enter Second Operand: ', num2 => {
      num2 = +num2 //Convert string input to integer
      calculator.question(
        // Get Operation to perform
        'Enter Operation to perform [+, -, /, *]: ',
        operator => {
          calculate(num1, num2, operator)
          calculator.close()
        }
      )
    })
  })

  calculator.on('close', () => {
    console.log('Quitting Application.....')
  })
}

program()
