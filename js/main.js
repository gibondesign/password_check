const pass = document.querySelector("#password");
const p = document.querySelector(".passinfo");
const conditions = document.querySelectorAll(".condition");
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;

const showMsg = () => {
	if (
		pass.value.length > minValue &&
		pass.value.match(letters) &&
		pass.value.match(numbers) &&
		pass.value.match(special)
	) {
		p.textContent = "Masz bardzo dobre hasło 👾";
		p.style.color = "#00cfff";
	} else if (
		pass.value.length > minValue &&
		pass.value.match(letters) &&
		pass.value.match(numbers)
	) {
		p.textContent = "Masz dobre hasło 😊";
		p.style.color = "lime";
	} else {
		p.textContent = "Masz słabe hasło 😟";
		p.style.color = "tomato";
	}
};

const checkLength = () => {
	if (pass.value.length > minValue) {
		conditions[0].style.color = "lime";
	} else {
		conditions[0].style.color = "tomato";
	}
};

const checkLetters = () => {
	if (pass.value.match(letters)) {
		conditions[1].style.color = "lime";
	} else {
		conditions[1].style.color = "tomato";
	}
};

const checkNumbers = () => {
	if (pass.value.match(numbers)) {
		conditions[2].style.color = "lime";
	} else {
		conditions[2].style.color = "tomato";
	}
};

const checkPass = () => {
	if (pass.value.length == 0) {
		p.removeAttribute("style");
		p.textContent = "Nie podałeś hasła...";
		for (const condition of conditions) {
			condition.removeAttribute("style");
		}
	} else {
		showMsg();
		checkLength();
		checkLetters();
		checkNumbers();
	}
};

pass.addEventListener("keyup", checkPass);
