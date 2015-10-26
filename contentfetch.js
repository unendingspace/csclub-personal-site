
var big_buttons = document.getElementsByClassName("button");
var small_buttons = document.getElementsByClassName("item");
			  
var content_window = document.getElementsByClassName("content")[0];
var active = null;

function toggleContentTab() {
	if (content_window.style.display != "inline") {
		content_window.style.display = "inline";
		//content_window.style.opacity = "0.6";
	}
	else {
		//content_window.style.opacity = "0";
		content_window.style.display = "none";
	}
}

function bindContent(button) {
	var title = button.children[0].textContent.toLowerCase()
	var partner = document.getElementById(title);
	if (partner != null) {
		if (active == null) {
			toggleContentTab();
			partner.style.display = "inline";
			active = partner;
		}	
		else if (active.id == title) {
			toggleContentTab();
			partner.style.display = "none";
			active = null;
		}
		else {
			active.style.display = "none";
			partner.style.display = "inline";
			active = partner;
		}
	}
}

function closeAll() {
	if (active != null) {
		active.style.display = "none";
		active = null;
		toggleContentTab();
	}
}
	
				
var binder

for (i = 0; i < big_buttons.length; i++) {
	big_buttons[i].onclick = function () {bindContent(this);};
}


for (i = 0; i < small_buttons.length; i++) {
	small_buttons[i].onclick = function () {bindContent(this);};
}

document.getElementsByClassName("name")[0].onclick = function () {closeAll();};

