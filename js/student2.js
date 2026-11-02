// ============================================================
// STUDENT 2 — Bill Splitter
// Name: [Oscar Rodriguez]
// Concepts: number, boolean, operators, functions, events
// ============================================================

const student2Button = document.getElementById("student2-button");
const student2TotalInput = document.getElementById("student2-total");
const student2PeopleInput = document.getElementById("student2-people");
const student2Output = document.getElementById("student2-output");

function handleStudent2Click() {
  // 1. Read the values from the inputs (always strings).
  let total = student2TotalInput.value;
  let people = student2PeopleInput.value;
  student2Output.textContent = ""; // Clear previous output


  // 2. Convert both values to numbers.
  total = Number(total);
  people = Number(people);
  if (people === 0) {
    student2Output.textContent = "Number of people must be greater than 0.";
    return;
  }


  // 3. Calculate the amount per person.
  let amountPerPerson = total / people;
  if (isNaN(amountPerPerson)) {
    student2Output.textContent = "Invalid input. Please enter valid numbers.";
    return;
  }

  // 4. Prepare the output message.
  let message = `Each person should pay: $${amountPerPerson.toFixed(2)}`;
  student2Output.textContent = message;


  // 5. Display the message.
  student2Output.textContent = message;

}

// Run the function when the button is clicked.
student2Button.addEventListener("click", handleStudent2Click);
