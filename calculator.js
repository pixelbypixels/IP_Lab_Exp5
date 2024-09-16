const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculate(num1, num2, operation) {
  return new Promise((resolve, reject) => {
    
    if (isNaN(num1) || isNaN(num2)) {
      reject("Error: Inputs must be valid numbers.");
      return;
    }

    switch (operation) {
      case '+':
        resolve(num1 + num2);
        break;
      case '-':
        resolve(num1 - num2);
        break;
      case '*':
        resolve(num1 * num2);
        break;
      case '/':
        if (num2 === 0) {
          reject("Error: Cannot divide by zero.");
        } else {
          resolve(num1 / num2);
        }
        break;
      default:
        reject("Error: Invalid operation. Use +, -, *, or /.");
    }
  });
}

rl.question("Enter the first number: ", (input1) => {
  const num1 = parseFloat(input1);

  rl.question("Enter the second number: ", (input2) => {
    const num2 = parseFloat(input2);

    rl.question("Enter the operation (+, -, *, /): ", (operation) => {
      
      if (isNaN(num1) || isNaN(num2)) {
        console.error("Error: Please provide valid numbers.");
        rl.close();
      } else if (!['+', '-', '*', '/'].includes(operation)) {
        console.error("Error: Please provide a valid operation (+, -, *, /).");
        rl.close();
      } else {
        
        calculate(num1, num2, operation)
          .then(result => console.log("Result:", result))
          .catch(error => console.error(error))
          .finally(() => rl.close()); 
      }
    });
  });
});

  
  