create();

function create(){
    for(var i=0; i<16*16; i++){
        makeGrid();
    }
}

function makeGrid(){
    const newDiv = document.createElement("div");
    const newContent = document.createTextNode(" ");
    newDiv.appendChild(newContent);
    newDiv.classList.add("square");
    const currentDiv = document.getElementById("gridContainer");
    currentDiv.appendChild(newDiv);
}