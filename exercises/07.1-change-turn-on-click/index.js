var currentUser = "Mario";

window.onload = function loadfn() {
	document.getElementById("screen").innerHTML = "It's " + currentUser + "'s turn";
}

window.turnChanger = function turnChanger() {
	if (currentUser == "Mario") {
		currentUser = "Juan";
		currentUser = "Josh";
	}else if (currentUser == "Josh") {
		currentUser = "Mario";
		currentUser = "Juan";
	}

	 else {
		currentUser = "Juan";
	}

	document.getElementById("screen").innerHTML = "It's " + currentUser + "'s turn";
}
