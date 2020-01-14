let gridHeight = 0;
let gridWidth = 0;

const tableNode = document.getElementById('pixelCanvas');

function myFunc() {
    console.log(`Grid Height: ${gridHeight}\nGrid Width: ${gridWidth}`)
}
// Created this function to clear the grid canvas when user inputs new values.
function clearGrid() {
    while(tableNode.hasChildNodes()) {
        tableNode.removeChild(tableNode.firstChild);
    };

}

// Select color input

// Select size input
const sizePicker = document.querySelector('#sizePicker');
sizePicker.addEventListener('submit', function (e) {
    e.preventDefault();
    gridHeight = document.getElementById('inputHeight').value;
    gridWidth = document.getElementById('inputWidth').value;
    if(gridWidth >= 101 || gridHeight >= 101) {
        alert('Height and\/or Width Value Too High!')
    } else {
        myFunc();
        clearGrid();
        makeGrid();
    }

});




// When size is submitted by the user, call makeGrid()

function makeGrid() {
    let i = 0;
    while(i < gridHeight){
        //console.log('element added');
        const tr = document.createElement('tr');
        tr.setAttribute('id', `row-${i}`)
        tableNode.appendChild(tr);
        let x = 0;
        while(x < gridWidth) {
            const td = document.createElement('td');
            document.getElementById(`row-${i}`).appendChild(td);
            x ++;
        }
        i ++;
    }

}
