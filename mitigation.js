// Safe math evaluator (limited to + - * / numbers)
function safeEvaluate(expression) {
  if (!/^[0-9+\-*/ ().]+$/.test(expression)) {
    throw new Error("Unsafe input detected");
  }
  return Function('"use strict";return (' + expression + ')')();
}

try {
  const userInput = prompt("Enter math expression:");
  const result = safeEvaluate(userInput);
  alert(`Result is: ${result}`);
} catch (e) {
  alert("Invalid input!");
}
