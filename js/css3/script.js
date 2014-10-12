function allowDrop(ev) {
	ev.preventDefault();
}
function showDropPanel(ev) {
	ev.preventDefault();
	var data = ev.dataTransfer.getData("Text");
	var targetPanel = ev.target;
	if(targetPanel.id == "section-holder") {
		var divs = document.getElementsByClassName("div-holder-panel");
		for (var i = divs.length - 1; i >= 0; i--) {
			divs[i].outerHTML = "";
		}
		var lastElementChild = targetPanel.lastElementChild;
		var outerHTML = "<div class='div-holder-panel' ondrop='dropHere(event)'>&nbsp;</div>";
		lastElementChild.outerHTML += outerHTML;
	}
	else if(targetPanel.nodeName == "SECTION") {
		var divs = document.getElementsByClassName("div-holder-panel");
		for (var i = divs.length - 1; i >= 0; i--) {
			divs[i].outerHTML = "";
		}
		var outerHTML = "<div class='div-holder-panel' ondrop='dropHere(event)'>&nbsp;</div>";
		targetPanel.outerHTML = outerHTML + targetPanel.outerHTML;
	}
}
function drag(ev) {
	ev.dataTransfer.setData("Text",ev.target.parentNode.id);
}
function dropHere(ev) {
	var divs = document.getElementsByClassName("div-holder-panel");
	var data = ev.dataTransfer.getData("Text");
	var outerHTML = document.getElementById(data).outerHTML;
	document.getElementById("section-holder").removeChild(document.getElementById(data));
	divs[0].outerHTML = outerHTML;
	document.getElementById(data).style.boxShadow = "blue 0px 0px 10px";
	document.getElementById(data).style.transition="box-shadow 1s";
	setTimeout(function() {
		document.getElementById(data).style.boxShadow = "none";
	},3000);
}