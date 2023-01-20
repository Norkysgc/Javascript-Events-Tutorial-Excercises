window.onload = function myLoadFunction() {
	alert("The website just finished loading!");
	//some code here
};

//the listener function here
let button = document.getElementById ("theGreen");
button.addEventListener ("click", function (){alert ("woohoo") })