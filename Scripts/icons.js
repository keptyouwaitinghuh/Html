icons = document.querySelectorAll(".label");

body = document.getElementsByTagName("body")[0];
body.addEventListener("click", abort, true);
body.addEventListener("click", deselect, true);
var ind = 0;
for(i of icons)
{
    i.addEventListener("click", select(i), true);
	i.addEventListener("dblclick", doubleclick());
    console.log(i.innerText);
	++ind;
}

var current = null;
var abortion = true;

function select(icon)
{
	return ()=>
    {
		abortion = true;
		if(current == null) current = icon;
		if(current != icon)	deselect();

		icon.style.backgroundColor = "blue";
		icon.querySelector(".text").style.backgroundColor = "blue";

		current = icon;	
		console.log("click " + icon.innerHTML);
    }
}

function deselect(icon)
{
	if(current == null) return;
	current.style.backgroundColor = "";
	current.querySelector(".text").style.backgroundColor = "";
	current = null;
}

function abort(e)
{
	if(abortion) 
	{
		e.stopPropagation();
		abortion = false;
	}
	console.log("abort " + abortion);
}

function doubleclick(i)
{
	let mass = [];

	return function()
	{
		document.getElementById("infowindow").style.display="block";
	}
}