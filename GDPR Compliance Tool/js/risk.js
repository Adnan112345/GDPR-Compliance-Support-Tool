// function runRiskScan() { starts a JavaScript function called runRiskScan.
// This function runs when the user clicks the risk scan button.
function runRiskScan() {

  // const checks = document.querySelectorAll(".risk-check");
  // This selects all HTML elements with the class "risk-check".
  // In your page, these are the checkboxes in the risk scan.
  const checks = document.querySelectorAll(".risk-check");

  // let count = 0;
  // This creates a variable called count and starts it at 0.
  // It will be used to count how many checkboxes are selected.
  let count = 0;

  // checks.forEach(check => { loops through each checkbox one by one.
  checks.forEach(check => {

    // if (check.checked) count++;
    // If the current checkbox is ticked, add 1 to the count.
    if (check.checked) count++;
  });

  // const result = document.getElementById("riskResult");
  // This gets the HTML element with the id "riskResult".
  // That is where the risk level text will be shown.
  const result = document.getElementById("riskResult");

  // const alertBox = document.getElementById("alertBox");
  // This gets the HTML element with the id "alertBox".
  // That is where the explanation message will be shown.
  const alertBox = document.getElementById("alertBox");

  // if (count <= 2) checks whether 0, 1, or 2 boxes were selected.
  if (count <= 2) {

    // result.textContent = "Risk Level: Low";
    // This displays "Risk Level: Low" in the result box.
    result.textContent = "Risk Level: Low";

    // alertBox.textContent = "...";
    // This shows a message explaining that only a small number of issues were found.
    alertBox.textContent = "A small number of issues were identified. Continue monitoring compliance and reviewing controls.";

  // else if (count <= 5) checks whether 3, 4, or 5 boxes were selected.
  } else if (count <= 5) {

    // This displays "Risk Level: Medium" in the result box.
    result.textContent = "Risk Level: Medium";

    // This shows a message explaining that some important weaknesses were found.
    alertBox.textContent = "Some important weaknesses were identified. Review your policies, lawful basis decisions, and staff training.";

  // else runs if more than 5 boxes were selected.
  } else {

    // This displays "Risk Level: High" in the result box.
    result.textContent = "Risk Level: High";

    // This shows a message explaining that many compliance risks were found.
    alertBox.textContent = "Multiple compliance risks were identified. Immediate action is recommended, especially around transparency, retention, lawful basis, and security.";
  }

// } ends the function.
}