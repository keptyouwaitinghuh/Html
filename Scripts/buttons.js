buttons = document.querySelectorAll(".button");
for(b of buttons)
{
    b.addEventListener("mousedown", mousedown);
    b.addEventListener("mouseup", mouseup);
}

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