create();

function etch() {
  document.querySelectorAll(".square").forEach((item) => {
    item.addEventListener("mouseover", (event) => {
      item.classList.add("hover");
    });
  });
}

function getDimensions() {
  var dims = prompt("Please enter new squares per side (less than 100)");
  while (Number(dims) > 100) {
    dims = prompt("Please enter new squares per side (less than 100)");
  }
  updateGrid(dims);
  return Number(dims);
}

function updateGrid(newDim) {
  let parent = document.getElementById("gridContainer");
  let child = parent.lastElementChild;
  while (child) {
    parent.removeChild(child);
    child = parent.lastElementChild;
  }
  for (var i = 0; i < newDim * newDim; i++) {
    makeGrid();
  }
  newPadding = (704 - (newDim * 2)) / newDim / 2;
  console.log(newPadding);
  document.querySelectorAll(".square").forEach((item) => {
     item.style.padding = newPadding + "px";
    });
  etch();
}

function create() {
  for (var i = 0; i < 16 * 16; i++) {
    makeGrid();
  }
  etch();
}

function makeGrid() {
  const newDiv = document.createElement("div");
  const newContent = document.createTextNode(" ");
  newDiv.appendChild(newContent);
  newDiv.classList.add("square");
  const currentDiv = document.getElementById("gridContainer");
  currentDiv.appendChild(newDiv);
}
