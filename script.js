let currDim = 16;

create();

function reset() {
  let parent = document.getElementById("gridContainer");
  let child = parent.lastElementChild;
  while (child) {
    parent.removeChild(child);
    child = parent.lastElementChild;
  }
  for (var i = 0; i < currDim * currDim; i++) {
    makeGrid();
  }
  newPadding = (704 - currDim * 2) / currDim / 2;
  document.querySelectorAll(".square").forEach((item) => {
    item.style.padding = newPadding + "px";
  });
}

function etch(funMode) {
  if (funMode === false) {
    document.querySelectorAll(".square").forEach((item) => {
      item.addEventListener("mouseover", (event) => {
        item.classList.add("hover");
      });
    });
  } else {
    console.log("Fun mode");
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
  newPadding = (704 - newDim * 2) / newDim / 2;
  document.querySelectorAll(".square").forEach((item) => {
    item.style.padding = newPadding + "px";
  });
  etch(false);
}

function create() {
  console.log(currDim);
  for (var i = 0; i < currDim * currDim; i++) {
    makeGrid();
  }
  etch(false);
}

function makeGrid() {
  const newDiv = document.createElement("div");
  const newContent = document.createTextNode(" ");
  newDiv.appendChild(newContent);
  newDiv.classList.add("square");
  const currentDiv = document.getElementById("gridContainer");
  currentDiv.appendChild(newDiv);
}
