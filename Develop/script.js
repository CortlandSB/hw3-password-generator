// List of special characters.
let special = ["!", "?", "$", "#", "%", " ", "\"", "&", "\'", "(", ")", "*", "+", "-", ",", ".", "/", ":", ";", "<", ">", "=", "@", "[", "]", "\\", "^", "_", "`", "{", "}", "|", "~"];

// Validate the settings before generating the password.
// It is best practice to separate the validation and generation logic.
function validateSettings(length, types) {

	if(length < 8 || length > 128)
		return false;

	if(types.length == 0)
		return false;

	return true;
}

function getCharacter(types) {
	
	let type = types[Math.floor(Math.random() * types.length)];

	if(type == "upper" || type == "lower") {

		let letter = String.fromCharCode(Math.floor(Math.random() * 26) + 65);

		if(type == "lower")
			return letter.toLowerCase();

		return letter;
	}

	if(type == "numeric")
		return "" + Math.floor(Math.random() * 10);

	return special[Math.floor(Math.random() * special.length)];
}

function generatePassword(length, types) {

	let password = "";

	for(let i = 0; i < length; i++)
		password = password + getCharacter(types);

	return password;
}

// Write password to the #password input
function writePassword() {

	let length = Number(prompt("How many characters long should the password be?"));

	let types = [];

	let lower = prompt("Should the password have lowercase letters? (y/n)").toLowerCase();
	let upper = prompt("Should the password have uppercase letters? (y/n)").toLowerCase();
	let numerical = prompt("Should the password have numbers? (y/n)").toLowerCase();
	let special = prompt("Should the password have special characters? (y/n)").toLowerCase();

	if(lower == "y")
		types.push("lower");

	if(upper == "y")
		types.push("upper");

	if(numerical == "y")
		types.push("numerical");

	if(special == "y")
		types.push("special");

	if(!validateSettings(length, types)) {

		alert("INVALID SETTINGS");

		return;
	}

	var password = generatePassword(length, types);
	var passwordText = document.querySelector("#password");

	passwordText.value = password;
}

var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
