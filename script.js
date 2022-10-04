let currDim = 16; //initial grid side length

create();


var slider = document.getElementById('side');
var sideDiv = document.getElementById('sideValue');

slider.addEventListener('change', function() {
  sideDiv.innerText = slider.value;
  currDim = slider.value;
  updateGrid(slider.value);
});

// to show sidelength initially
sideDiv.innerText = slider.value;

// can just call update grid with a default parameter of currDim

// function reset() {
//   let parent = document.getElementById("gridContainer");
//   let child = parent.lastElementChild;
//   while (child) { //make sure the sizing of the pixels holds
//     parent.removeChild(child);
//     child = parent.lastElementChild;
//   }
//   for (var i = 0; i < currDim * currDim; i++) {
//     makeGrid();
//   }
//   newPadding = (704 - currDim * 2) / currDim / 2;
//   document.querySelectorAll(".square").forEach((item) => {
//     item.style.padding = newPadding + "px";
//   });
// }

function etch(funMode) {
  if (funMode === false) {
    document.querySelectorAll(".square").forEach((item) => {
      item.addEventListener("mouseover", (event) => {
        item.classList.add("hover");
      });
    });
  } else {
    console.log("Fun mode"); //random rgb value for each sqaure hovered over
    document.querySelectorAll(".square").forEach((item) => {
      item.addEventListener("mouseover", (event) => {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        item.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      });
    });
  }
}

function getDimensions() {
  var dims = prompt("Please enter new squares per side (less than 100)");
  while (Number(dims) > 100) {
    dims = prompt("Please enter new squares per side (less than 100)");
  }
  currDim = Number(dims);
  updateGrid(Number(dims));
}

function updateGrid(newDim = currDim) {
  let parent = document.getElementById("gridContainer");
  let child = parent.lastElementChild;
  while (child) { // remove all of the child divs
    parent.removeChild(child);
    child = parent.lastElementChild;
  }
  for (var i = 0; i < newDim * newDim; i++) {
    makeGrid();
  }
  newPadding = (640 - newDim * 2) / newDim / 2; //width of grid minus borders divided by new number of squares (padding on both sides)
  document.querySelectorAll(".square").forEach((item) => {
    item.style.padding = newPadding + "px";
  });
  etch(false); //go back to black and white
}

function create() {
  for (var i = 0; i < currDim * currDim; i++) {
    makeGrid();
  }
  etch(false); //start in black and white mode
}

function makeGrid() {
  const newDiv = document.createElement("div");
  const newContent = document.createTextNode(" ");
  newDiv.appendChild(newContent);
  newDiv.classList.add("square");
  const currentDiv = document.getElementById("gridContainer");
  currentDiv.appendChild(newDiv);
}
