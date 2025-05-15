document.getElementById("surveyForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("fullname").value.trim();
    const comments = document.getElementById("comments").value.trim();
    const satisfaction = document.querySelector('input[name="satisfaction"]:checked');
    const skills = document.querySelectorAll('input[name="skills"]:checked');
    const surveyMessage = document.getElementById("surveyMessage");

    if (!name || !satisfaction || skills.length === 0 || !comments) {
        surveyMessage.textContent = "Please fill in all required fields.";
        surveyMessage.style.color = "red";
        return;
    }

    surveyMessage.textContent = "Survey submitted successfully. Thank you!";
    surveyMessage.style.color = "green";

    // Optionally clear form
    // this.reset();
});
