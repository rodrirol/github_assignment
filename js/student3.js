// ============================================================
// STUDENT 3 — Number Describer
// Name: Samuel  Vilcionaire
// Concepts: number, boolean, operators, functions, events
// ============================================================

const student3Button = document.getElementById("student3-button");
const student3NumberInput = document.getElementById("student3-number");
const student3Output = document.getElementById("student3-output");

function handleStudent3Click() {
  // 1. Read the value from the input (always a string).
  let inputValue = student3NumberInput.value;
  // 2. Convert it to a number.
  let numberValue = Number(inputValue);
  // 3. Parity using && and ||:
  //      true  && "even" -> "even"
  //      false && "even" -> false -> "odd"
  let parity = (numberValue % 2 === 0) && "even" || "odd";
  // 4. Sign using && and ||:
  //      positive -> first branch wins
  //      negative -> second branch wins
  //      zero     -> last fallback wins
let sign = (numberValue > 0) && "positive" || (numberValue < 0) && "negative" || "zero";

  // 5. Prepare the output message.
let message = `The number ${numberValue} is ${sign} and ${parity}.`;
  // 6. Display the message.
 document.getElementById("student3-output").innerHTML = message;

}

// Run the function when the button is clicked.
student3Button.addEventListener("click", handleStudent3Click);