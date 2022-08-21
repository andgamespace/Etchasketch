let sizeOfGrid = 16;
const container = document.querySelector(".grid-container");

function makeGrid() {

    

}
for(let i=0; i<sizeOfGrid**2; i++){
    const square = document.createElement('div');
    square.classList.add("grid-item");
    square.setAttribute("draggable","false");
    square.style.backgroundColor = "transparent";
    container.appendChild(square);
}