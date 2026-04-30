// let completed6 = new Set();
// This creates a new Set called completed6.
// A Set stores unique values only, so the same question number cannot be added twice.
let completed6 = new Set();

// function checkAnswer(button, isCorrect, feedbackId) { starts a function called checkAnswer.
// This function checks whether the selected answer is correct or incorrect.
function checkAnswer(button, isCorrect, feedbackId) {

  // const feedback = document.getElementById(feedbackId);
  // This gets the feedback box for the current question using its id.
  // Example: if feedbackId is "feedback1", it gets the element with id="feedback1".
  const feedback = document.getElementById(feedbackId);

  // if (isCorrect) checks whether the selected answer is correct.
  if (isCorrect) {

    // feedback.textContent = "Correct. Well done.";
    // This shows a success message in the feedback box.
    feedback.textContent = "Correct. Well done.";

    // feedback.style.backgroundColor = "#dff0d8";
    // This changes the feedback box background to a light green colour.
    feedback.style.backgroundColor = "#dff0d8";

  // else runs when the selected answer is wrong.
  } else {

    // feedback.textContent = "Incorrect. Try again.";
    // This shows an error message in the feedback box.
    feedback.textContent = "Incorrect. Try again.";

    // feedback.style.backgroundColor = "#f8d7da";
    // This changes the feedback box background to a light red colour.
    feedback.style.backgroundColor = "#f8d7da";
  }
}

// function markComplete(questionNumber) { starts a function called markComplete.
// This function marks a question as completed and updates the progress bar.
function markComplete(questionNumber) {

  // completed6.add(questionNumber);
  // This adds the question number to the Set.
  // Because Sets only store unique values, clicking the same correct answer again
  // will not increase the progress more than once.
  completed6.add(questionNumber);

  // const total = 10;
  // This stores the total number of questions.
  const total = 10;

  // const progress = completed6.size;
  // This gets how many unique questions have been completed.
  const progress = completed6.size;

  // document.getElementById("progressText").textContent = `Progress: ${progress} / ${total} completed`;
  // This updates the progress text shown on the page.
  // Example: "Progress: 4 / 10 completed"
  document.getElementById("progressText").textContent = `Progress: ${progress} / ${total} completed`;

  // document.getElementById("progressFill").style.width = `${(progress / total) * 100}%`;
  // This updates the progress bar width based on the percentage completed.
  // For example, if 5 out of 10 are complete, the width becomes 50%.
  document.getElementById("progressFill").style.width = `${(progress / total) * 100}%`;

  // if (progress === total) checks whether all questions have been completed.
  if (progress === total) {

    // document.getElementById("completionMessage").style.display = "block";
    // This makes the hidden completion message appear.
    document.getElementById("completionMessage").style.display = "block";
  }
}