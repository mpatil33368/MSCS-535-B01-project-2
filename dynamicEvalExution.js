// Dangerous: executes user input as code
const userInput = prompt("Enter math expression (e.g., 2+2):");
const result = eval(userInput);
alert(`Result is: ${result}`);
