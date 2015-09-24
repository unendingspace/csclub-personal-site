
var toggle = document.getElementsByClassName("toggle")[0];
var menu = document.getElementsByClassName("menu")[0];

function toggleMenu() {
	if (menu.style.display != "inline") {
		menu.style.display = "inline";
	}
	else {
		menu.style.display = "none";
	}
}


toggle.onclick = function() {toggleMenu();};
