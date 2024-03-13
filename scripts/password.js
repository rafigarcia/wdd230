
// confirm the password match
const kp1 = document.querySelector("#password");
const kp2 = document.querySelector("#confirm");
const message = document.querySelector("#formmessage");

kp1.addEventListener("focusout", validateForm);
kp2.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
	if (kp1.value !== kp2.value) {
		message.textContent = "❗Key Phrases DO NOT MATCH!";
		message.style.visibility = "show";
		kp2.style.backgroundColor = "#fff0f3";
		kp2.value = "";
		kp2.focus();
	} else {
		message.style.display = "none";
		kp2.style.backgroundColor = "#fff";
		kp2.style.color = "#000";
	}
}

// make sure the password is more than 8 letters
function validateForm() {
    if (kp1.value.length < 8) {
        message.textContent = "❗Password must be at least 8 characters!";
        message.style.visibility = "visible"
		kp1.style.backgroundColor = "#fff0f3";
		kp1.value = "";
		kp1.focus()
        return false
    } else {
        message.style.display = "none";
		kp1.style.backgroundColor = "#fff";
		kp1.style.color = "#000";
    }
    
  }
