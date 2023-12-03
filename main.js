import "./scss/main.scss";

const form = document.querySelector(".signup__form");

form.addEventListener("submit", e => {
	e.preventDefault();
	const userEmail = form.querySelector("input").value;
	if (userEmail === "") return;

	const formData = new FormData(form);
	formData.append("userEmail", userEmail);
	const data = Object.fromEntries(formData);

	// validation & send...
	alert(`data.UserEmail: ${data.userEmail}`);
});
