// const container = document.getElementById("grid");
// var cell = document.createElement("div");
// cell.innerHTML = "Text";
// container.appendChild(cell);
const grid_size = 16;
const colorChoice = "#0000FF";
function loadGrid(sizeOfGrid) {
    grid.style.gridTemplateColumns = 'repeat(${size}, 1fr)'
    grid.style.gridTemplateRows = 'repeat(${size}, 1fr)'
    let numGridElements = 0;
    while (numGridElements < (sizeOfGrid*sizeOfGrid)){
        const gridElement = document.createElement('div')
        gridElement.classList.add("grid-element")
        gridElement.addEventListener(hover, colorChange())
        grid.appendChild.gridElement;
        numGridElements++;
    }
}
window.onload = () => {
    loadGrid(grid_size)
}
function colorChange(a)
{
    if(a.type == 'mouseover'){
        a.target.style.background = colorChoice;

    }
}