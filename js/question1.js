// Write code that checks that the lastName input's value is at least 5 characters long when the form is submitted.
// Show/hide the error message every time the validation runs.

const contactForm = document.querySelector("#contactForm");
const lastNameInput = document.querySelector("#lastName");
const lastNameError = document.querySelector("#lastNameError");

function validateLastName() {
	event.preventDefault();
	if (lastNameInput.value.trim().length > 4) {
		lastNameError.style.display = "none";
	} else {
		lastNameError.style.display = "block";
	}
}

contactForm.addEventListener("submit", validateLastName);
