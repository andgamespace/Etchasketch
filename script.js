let sizeOfGrid = 256
const grid = document.getElementById("grid")
const GRAY = "#333333"
function makeGrid() {
    grid.style.gridTemplateColumns = 'repeat(${size), 1fr)'
    grid.style.gridTemplateRows = 'repeat(${size}, 1fr)'
    for(let i=0; i<sizeOfGrid; i++){
        const square = document.createElement('div')
        square.classList.add("square")
        square.addEventListener('mouseover', colorChange)
        square.addEventListener('mousedown', colorChange)
        grid.appendChild(square)
    }

}
function colorChange(input) {
    if(input.type == 'mouseover' && !'mousedown') return
    input.target.style.backgroundColor = GRAY;
}
window.onload = () => {
    makeGrid()
}