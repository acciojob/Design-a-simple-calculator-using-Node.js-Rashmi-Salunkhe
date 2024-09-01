const readline = require('readline');

// Function to perform addition
function add(num1, num2) {
  return num1 + num2;
}

// Function to perform subtraction
function subtract(num1, num2) {
  return num1 - num2;
}

// Function to perform multiplication
function multiply(num1, num2) {
  return num1 * num2;
}

// Function to perform division
function divide(num1, num2) {
  if (num2 === 0) {
    throw new Error("Cannot divide by zero");
  }
  return num1 / num2;
}

// Main program to handle user input and perform calculation
function calculator() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Enter the first number: ', (firstNumber) => {
    const num1 = parseFloat(firstNumber);

    rl.question('Enter the second number: ', (secondNumber) => {
      const num2 = parseFloat(secondNumber);

      rl.question('Choose an operation (add, subtract, multiply, divide): ', (operation) => {
        let result;
        try {
          switch (operation.toLowerCase()) {
            case 'add':
              result = add(num1, num2);
              break;
            case 'subtract':
              result = subtract(num1, num2);
              break;
            case 'multiply':
              result = multiply(num1, num2);
              break;
            case 'divide':
              result = divide(num1, num2);
              break;
            default:
              console.log('Invalid operation');
              rl.close();
              return;
          }
          console.log(`The result is: ${result}`);
        } catch (error) {
          console.log(`Error: ${error.message}`);
        } finally {
          rl.close();
        }
      });
    });
  });
}

// Invoke the calculator function to start the program
calculator();
