document.getElementById("calculateButton").addEventListener("click", function () {
  // Input: Retrieve the user's data
  let grade1 = parseFloat(document.getElementById("grade1").value);
  let grade2 = parseFloat(document.getElementById("grade2").value);
  let grade3 = parseFloat(document.getElementById("grade3").value);
  let grade4 = parseFloat(document.getElementById("grade4").value);
  let grade5 = parseFloat(document.getElementById("grade5").value);

  // Check if any grade is NaN (not a number) and alert the user
  if (isNaN(grade1) || isNaN(grade2) || isNaN(grade3) || isNaN(grade4) || isNaN(grade5)) {
    alert("Please enter valid grades for all modules.");
    return;
  }

  // Processing: Calculate the average grade
  let averageGrade = (grade1 + grade2 + grade3 + grade4 + grade5) / 5;

  // Output: Display output in the "Final CS10 Grade" section of the website
  document.getElementById("finalGrade").innerHTML = averageGrade.toFixed(2);
});