icons = document.querySelectorAll(".label");
body = document.getElementsByTagName("body")[0];
body.addEventListener("click", abort, true);
body.addEventListener("click", deselect, true);
for(i of icons)
{
    i.addEventListener("click", select(i), true);
	img = i.getElementsByTagName("img")[0];
	img.addEventListener("drop", drop(i));
    console.log(i.innerText);
}

var current;
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

function drop(icon)
{
	return (event)=>
	{
		console.log("drop.target" + event.target);

	}
}