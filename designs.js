let gridHeight = 0;
let gridWidth = 0;

function myFunc() {
    console.log(`Grid Height: ${gridHeight}\nGrid Width: ${gridWidth}`)
}

// Select color input

// Select size input
const sizePicker = document.querySelector('#sizePicker');
sizePicker.addEventListener('submit', function (e) {
    e.preventDefault();
    gridHeight = document.getElementById('inputHeight').value;
    gridWidth = document.getElementById('inputWidth').value;
    myFunc();
    makeGrid();
});




// When size is submitted by the user, call makeGrid()

function makeGrid() {
    let i = 0;
    while(i < gridHeight){
        console.log('element added');
        i ++;
    }

}
