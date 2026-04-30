// function evaluateLawfulBasis() { starts a JavaScript function called evaluateLawfulBasis.
// This function runs when the user clicks the "Get Guidance" button.
function evaluateLawfulBasis() {

  // const purpose = document.getElementById("purpose").value;
  // This gets the selected value from the dropdown with the id "purpose".
  // It stores the main reason for processing the data.
  const purpose = document.getElementById("purpose").value;

  // const isRequired = document.getElementById("isRequired").value;
  // This gets the selected answer for whether the processing is required by law.
  const isRequired = document.getElementById("isRequired").value;

  // const isContract = document.getElementById("isContract").value;
  // This gets the selected answer for whether the processing is needed for a contract.
  const isContract = document.getElementById("isContract").value;

  // const isEmergency = document.getElementById("isEmergency").value;
  // This gets the selected answer for whether there is a life-threatening emergency.
  const isEmergency = document.getElementById("isEmergency").value;

  // const isPublicTask = document.getElementById("isPublicTask").value;
  // This gets the selected answer for whether the organisation is carrying out a public task.
  const isPublicTask = document.getElementById("isPublicTask").value;

  // const clearConsent = document.getElementById("clearConsent").value;
  // This gets the selected answer for whether valid consent can be clearly given and withdrawn.
  const clearConsent = document.getElementById("clearConsent").value;

  // const balancing = document.getElementById("balancing").value;
  // This gets the selected answer for whether the organisation has considered
  // if the individual’s rights override its interests.
  const balancing = document.getElementById("balancing").value;

  // const result = document.getElementById("lawfulBasisResult");
  // This gets the HTML element where the guidance result will be displayed.
  const result = document.getElementById("lawfulBasisResult");

  // if (isRequired === "yes" || purpose === "legal") checks whether:
  // the user said processing is required by law
  // OR selected legal as the main purpose.
  if (isRequired === "yes" || purpose === "legal") {

    // If true, it shows Legal Obligation as the most likely lawful basis.
    result.textContent = "Most likely lawful basis: Legal Obligation. This usually applies when processing is required by law.";

  // else if (isContract === "yes" || purpose === "contract") checks whether:
  // the user said processing is needed for a contract
  // OR selected contract as the purpose.
  } else if (isContract === "yes" || purpose === "contract") {

    // If true, it shows Contract as the most likely lawful basis.
    result.textContent = "Most likely lawful basis: Contract. This applies when processing is necessary to enter into or perform a contract.";

  // else if (isEmergency === "yes" || purpose === "vital") checks whether:
  // there is a life-threatening emergency
  // OR the user selected vital interests as the purpose.
  } else if (isEmergency === "yes" || purpose === "vital") {

    // If true, it shows Vital Interests as the most likely lawful basis.
    result.textContent = "Most likely lawful basis: Vital Interests. This may apply in emergencies where someone’s life is at risk.";

  // else if (isPublicTask === "yes" || purpose === "public") checks whether:
  // the organisation is carrying out a public task
  // OR the user selected public task as the purpose.
  } else if (isPublicTask === "yes" || purpose === "public") {

    // If true, it shows Public Task as the most likely lawful basis.
    result.textContent = "Most likely lawful basis: Public Task. This is mainly relevant to public authorities or official functions.";

  // else if (clearConsent === "yes" || purpose === "consent") checks whether:
  // valid consent can be clearly given and withdrawn
  // OR the user selected consent as the purpose.
  } else if (clearConsent === "yes" || purpose === "consent") {

    // If true, it shows Consent as the most likely lawful basis.
    result.textContent = "Most likely lawful basis: Consent. Make sure consent is freely given, specific, informed, and easy to withdraw.";

  // else if (balancing === "yes" || purpose === "legitimate") checks whether:
  // a balancing test has been considered
  // OR the user selected legitimate interests as the purpose.
  } else if (balancing === "yes" || purpose === "legitimate") {

    // If true, it shows Legitimate Interests as the most likely lawful basis.
    result.textContent = "Most likely lawful basis: Legitimate Interests. You should document a balancing test and consider the individual’s rights.";

  // else runs if none of the earlier conditions were matched.
  } else {

    // This shows a warning message saying no clear lawful basis was identified.
    result.textContent = "No clear lawful basis identified. Review the processing activity carefully before proceeding.";
  }

// } ends the function.
}