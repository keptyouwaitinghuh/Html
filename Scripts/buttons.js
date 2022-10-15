var buttonsTmp = document.querySelectorAll("button");
var titles = document.querySelectorAll("button.title");
var buttons = [];
currentWindow = null;
for(b of buttonsTmp)
{
    buttons.push(b);
    for(t of titles)
    {
        if(b == t) { buttons.pop(); break;}
    }
}
var currentTitle = null;
for(b of buttons)
{
    console.log(b.innerHML);
    b.addEventListener("mousedown", mousedown);
    b.addEventListener("mouseup", mouseup);
}

for(t of titles)
{
    t.addEventListener("click",titleclick);
}

document.getElementById("start").addEventListener("mouseup", start());

function mousedown(event)
{
    event.currentTarget.style.boxShadow = "inset 2px 2px 0px #262626, inset -2px -2px 0px #F0F0F0, inset 4px 4px 0px #7E7E7E";
    console.log("нажали");
}

function mouseup(event)
{
    event.currentTarget.style.boxShadow = "inset -2px -2px 0px #262626, inset 2px 2px 0px #F0F0F0, inset -4px -4px 0px #7E7E7E";
    console.log("отпустили");
}

function titleclick(event)
{
    event.currentTarget.style.backgroundColor="blue";
    event.currentTarget.style.color="white";
    if(currentTitle != null)
    {
        currentTitle.style.backgroundColor="";
        currentTitle.style.color = "";
    }
    currentTitle=event.currentTarget;
}

function start()
{
	let count = 0;
    return function(){
		if(currentWindow!=null) currentWindow.style.display="none";
        let form = document.getElementById("formwindow");
        form.style.display="block";
        form.style.top="20px";
        form.style.left="400px";
		currentWindow = form;
    }
}

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
		currentWindow.style.display="none";	
		wind = document.getElementById("infowindow");
		wind.style.display="block";
		wind.style.top="50px";
		wind.style.left="100px";
		currentWindow=wind;
	}
}

var titles=document.querySelectorAll("button.title");
var ind = 0;
for(t of titles)
{
    t.addEventListener("click", click(ind));
    ++ind;
}

function click(i)
{
    let mass=["BitCup.txt", "Directions.txt","Steps.txt", "Sponsors.txt"];
    let textfield = document.getElementsByClassName("infotext")[0];

    return function(event)
    {
        textfield.innerText = mass[i];
    }
    
}