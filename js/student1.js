// ============================================================
// STUDENT 1 — Greeting & Age
// Name: Fabian Del Barrio
// Concepts: string, number, boolean, operators, functions, events
// ============================================================

const STUDENT1_CURRENT_YEAR = 2026;

const student1Button = document.getElementById("student1-button");
const student1NameInput = document.getElementById("student1-name");
const student1BirthYearInput = document.getElementById("student1-birth-year");
const student1Output = document.getElementById("student1-output");

function handleStudent1Click() {
  // 1. Read the values from the inputs (always strings).
  let student1Name = student1NameInput.value;
  let student1BirthYear = student1BirthYearInput.value;
  // 2. Convert the birth year to a number.
  student1BirthYear = Number(student1BirthYear);
  let student1Age = STUDENT1_CURRENT_YEAR - student1BirthYear;
  let student1IsAdult = student1Age >= 18;
  // 3. Calculate the age and whether the person is an adult.

  // 4. Prepare the output message.
  let student1Message = `Hello, ${student1Name}! You are ${student1Age} years old and ${student1IsAdult ? "an adult." : "a minor."}`;

  // 5. Display the message.
  student1Output.textContent = student1Message;
}

// Run the function when the button is clicked.
student1Button.addEventListener("click", handleStudent1Click);