// let completed5 = new Set();
// This creates a new Set called completed5.
// A Set stores unique values only, so the same question number cannot be counted more than once.
let completed5 = new Set();

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
    // This shows a message telling the user the answer is wrong.
    feedback.textContent = "Incorrect. Try again.";

    // feedback.style.backgroundColor = "#f8d7da";
    // This changes the feedback box background to a light red colour.
    feedback.style.backgroundColor = "#f8d7da";
  }
}

// function markComplete(questionNumber) { starts a function called markComplete.
// This function marks a question as completed and updates the progress.
function markComplete(questionNumber) {

  // completed5.add(questionNumber);
  // This adds the question number to the Set.
  // Because a Set only keeps unique values, the same question will not be counted twice.
  completed5.add(questionNumber);

  // const total = 10;
  // This stores the total number of questions in the training module.
  const total = 10;

  // const progress = completed5.size;
  // This gets the number of unique completed questions.
  const progress = completed5.size;

  // document.getElementById("progressText").textContent = `Progress: ${progress} / ${total} completed`;
  // This updates the text showing progress on the page.
  // Example: "Progress: 3 / 10 completed"
  document.getElementById("progressText").textContent = `Progress: ${progress} / ${total} completed`;

  // document.getElementById("progressFill").style.width = `${(progress / total) * 100}%`;
  // This changes the width of the progress bar based on how many questions are complete.
  // Example: if 5 out of 10 are complete, the width becomes 50%.
  document.getElementById("progressFill").style.width = `${(progress / total) * 100}%`;

  // if (progress === total) checks whether all questions have been completed.
  if (progress === total) {

    // document.getElementById("completionMessage").style.display = "block";
    // This makes the hidden completion message appear on the page.
    document.getElementById("completionMessage").style.display = "block";
  }
}