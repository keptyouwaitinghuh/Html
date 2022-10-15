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