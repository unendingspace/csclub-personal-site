
var toggle = document.getElementsByClassName("toggle")[0];
var menu = document.getElementsByClassName("menu")[0];
//var content = document.getElementsByClassName("content")[0];

function toggleMenu() {
	if (menu.style.display != "inline") {
		//content.style.zIndex = "-1";
		menu.style.display = "inline";
		
	}
	else {
		menu.style.display = "none";
		//content.style.zIndex = "1";
	}
}


toggle.onclick = function() {toggleMenu();};
