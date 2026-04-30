// function markQuiz() { starts a JavaScript function called markQuiz.
// This function runs when the user submits the quiz.
function markQuiz() {

  // let score = 0;
  // This creates a variable called score and starts it at 0.
  // It will count how many correct answers the user gets.
  let score = 0;

  // const total = 10;
  // This stores the total number of quiz questions.
  const total = 10;

  // for (let i = 1; i <= total; i++) { creates a loop.
  // It starts at 1 and goes up to 10, checking each question one by one.
  for (let i = 1; i <= total; i++) {

    // const answer = document.getElementById(`q${i}`).value;
    // This gets the selected value from each dropdown question.
    // For example:
    // when i = 1, it gets q1
    // when i = 2, it gets q2
    // and so on until q10
    const answer = document.getElementById(`q${i}`).value;

    // if (answer === "correct") checks whether the selected answer is correct.
    if (answer === "correct") {

      // score++; adds 1 to the score if the answer is correct.
      score++;
    }
  }

  // const result = document.getElementById("quizResult");
  // This gets the HTML element where the quiz result will be displayed.
  const result = document.getElementById("quizResult");

  // result.textContent = `You scored ${score} out of ${total}.`;
  // This shows the user's score on the page.
  // Example: "You scored 8 out of 10."
  result.textContent = `You scored ${score} out of ${total}.`;

  // if (score === total) checks if the user got all answers correct.
  if (score === total) {

    // Adds an extra message for a perfect score.
    result.textContent += " Excellent work.";

  // else if (score >= 7) checks if the user scored 7, 8, or 9.
  } else if (score >= 7) {

    // Adds a positive message for a strong result.
    result.textContent += " Good understanding.";

  // else if (score >= 4) checks if the user scored 4, 5, or 6.
  } else if (score >= 4) {

    // Adds a message saying the attempt was fair but more review is needed.
    result.textContent += " Fair attempt, but more review is recommended.";

  // else runs if the score is 0, 1, 2, or 3.
  } else {

    // Adds a message saying more training is recommended.
    result.textContent += " More training is recommended before relying on this guidance.";
  }

// } ends the function.
}