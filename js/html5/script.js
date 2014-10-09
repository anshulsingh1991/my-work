<!-- Script for Progress tag -->
setInterval(function() {
	if(document.getElementById("progress-bar").value == 100) {
		document.getElementById("progress-bar").value = 0;
	}
	else {
		document.getElementById("progress-bar").value += 10;
	}
},800);


<!-- Script for Canvas tag -->
function createCanvas() {
	var c = document.getElementsByClassName("canvas-uses");
	var canvasOK = 1;
	try {
		c[0].getContext("2d");
	}
	catch (er) {
		canvasOK = 0;
	}
	if (canvasOK == 1) {
		var context = c[0].getContext("2d");
		var gradient = context.createLinearGradient(0,0,200,0);
		gradient.addColorStop(0,"#66CDAA");
		gradient.addColorStop(1,"#E0EE00");
		context.fillStyle = gradient;
		context.fillRect(10,10,500,80);
	}
}
//Call it on page load	
createCanvas();

<!-- Script for Command tag -->
function click() {
	alert("You have clicked me..");
};

<!-- Script for drag and drop functionality -->
function allowDrop(ev) {
	ev.preventDefault();
}
function showDropSpace(ev) {
	ev.preventDefault();
	var data = ev.dataTransfer.getData("Text");
	var parentNode = ev.dataTransfer.getData("ParentNode");
	var targetPanel = ev.target;
	if(targetPanel.nodeName == "DIV") {
		var divs = document.getElementsByClassName("temp-div");
		for (var i = divs.length - 1; i >= 0; i--) {
			divs[i].outerHTML = "";
		}
		targetPanel = targetPanel.lastElementChild;
		var outerHTML = "<div class='temp-div' ondrop='dropHere(event)' style='background: #eee;height: 60px;width: 99%;border: 2px inset blueviolet;margin: 0 auto 10px;box-shadow: 0px 0px 10px blue;'>&nbsp;</div>";
		targetPanel.outerHTML = outerHTML + targetPanel.outerHTML;
		targetPanel.outerHTML += outerHTML;
	}
	if(targetPanel.nodeName == "SECTION") {
		var divs = document.getElementsByClassName("temp-div");
		for (var i = divs.length - 1; i >= 0; i--) {
			divs[i].outerHTML = "";
		}
		var outerHTML = "<div class='temp-div' ondrop='dropHere(event)' style='background: #eee;height: 60px;width: 99%;border: 2px inset blueviolet;margin: 0 auto 10px;box-shadow: 0px 0px 10px blue;'>&nbsp;</div>";
		targetPanel.outerHTML = outerHTML + targetPanel.outerHTML;
	}
}
function drag(ev) {
	ev.dataTransfer.setData("Text",ev.target.parentNode.id);
	ev.dataTransfer.setData("ParentNode",ev.target.parentNode.parentNode.id);
}
function drop(ev) {
	ev.preventDefault();
	var divs = document.getElementsByClassName("temp-div");
	for (var i = divs.length - 1; i >= 0; i--) {
		divs[i].outerHTML = "";
	}
	var data = ev.dataTransfer.getData("Text");
	var parentNode = ev.dataTransfer.getData("ParentNode");
	var targetPanel = ev.target;
	while(true) {
		if(targetPanel == null) {
			break;
		}
		if(targetPanel.nodeName == "DIV") {
			targetPanel = targetPanel.lastElementChild;
			if(targetPanel == null) {
				break;
			}
			var outerHTML = document.getElementById(data).outerHTML;
			document.getElementById(parentNode).removeChild(document.getElementById(data));
			targetPanel.outerHTML += outerHTML;
			document.body.scrollTop = document.body.clientHeight;
			document.getElementById(data).style.boxShadow = "blue 0px 0px 10px";
			document.getElementById(data).style.transition="box-shadow 1s";		
			if(data == "section-canvas") {	
				createCanvas();
			}
			setTimeout(function() {
				document.getElementById(data).style.boxShadow = "none";
			},3000);
			break;
		}
		if(targetPanel.nodeName == "SECTION") {
			var outerHTML = document.getElementById(data).outerHTML;
			document.getElementById(parentNode).removeChild(document.getElementById(data));
			targetPanel.outerHTML = outerHTML + targetPanel.outerHTML;
			//document.body.scrollTop = document.body.clientHeight;
			document.getElementById(data).style.boxShadow = "blue 0px 0px 10px";
			document.getElementById(data).style.transition="box-shadow 1s";		
			if(data == "section-canvas") {	
				createCanvas();
			}
			setTimeout(function() {
				document.getElementById(data).style.boxShadow = "none";
			},3000);
			break;
		}
		else {
			targetPanel = targetPanel.parentNode;
			if(targetPanel == null) {
				break;
			}
		}
	}
}
function dropHere(ev) {
	var divs = document.getElementsByClassName("temp-div");
	var parentNode = ev.dataTransfer.getData("ParentNode");
	var data = ev.dataTransfer.getData("Text");
	var outerHTML = document.getElementById(data).outerHTML;
	document.getElementById(parentNode).removeChild(document.getElementById(data));
	divs[0].outerHTML = outerHTML;
	document.getElementById(data).style.boxShadow = "blue 0px 0px 10px";
	document.getElementById(data).style.transition="box-shadow 1s";		
	if(data == "section-canvas") {	
		createCanvas();
	}
	setTimeout(function() {
		document.getElementById(data).style.boxShadow = "none";
	},3000);
}