const form = document.getElementById('form');
const username = document.getElementById('jmeno');
const email = document.getElementById('email');
const phone = document.getElementById('tel.cislo');
const company = document.getElementById('spolecnost');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const phoneValue = phone.value.trim();
	const companyValue = company.value.trim();
	
	if(usernameValue === '') {
		setErrorFor(username, 'Jméno nesmí být prázdné');
	} else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Zadejte správný Email');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Zadali jste neplatný Email');
	} else {
		setSuccessFor(email);
	}
	
	if(phoneValue === '') {
		setErrorFor(phone, 'Telefonní číslo nesmí být prázdné');
	} else {
		setSuccessFor(phone);
	}
	
	if(companyValue === '') {
		setErrorFor(company, 'Toto políčko je poovinné');
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}



