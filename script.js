// const container = document.getElementById("grid");
// var cell = document.createElement("div");
// cell.innerHTML = "Text";
// container.appendChild(cell);
const grid_size = 16;
function loadGrid(sizeOfGrid) {
    grid.style.gridTemplateColumns = 'repeat(${size}, 1fr)'
    grid.style.gridTemplateRows = 'repeat(${size}, 1fr)'
    let numGridElements = 0;
    while (numGridElements < (sizeOfGrid*sizeOfGrid)){
        const gridElement = document.createElement('div')
        gridElement.classList.add("grid-element")
        grid.appendChild.gridElement;
        numGridElements++;
    }
}
