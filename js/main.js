const pass = document.querySelector("#password");
const p = document.querySelector(".passinfo");
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;

const showMsg = () => {
	if (pass.value.length == 0) {
		p.removeAttribute('style');
		p.textContent = "Nie podałeś hasła...";
	}

	else if (
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
pass.addEventListener("keyup", showMsg);
